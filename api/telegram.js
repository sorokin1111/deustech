function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildMessage(data) {
  var lines = [];
  lines.push('<b>\uD83D\uDD14 Новое сообщение с сайта</b>');
  lines.push('');
  lines.push('<b>Email:</b> ' + escapeHtml(data.email || '—'));
  if (data.message) lines.push('<b>Сообщение:</b> ' + escapeHtml(data.message));
  lines.push('');
  if (data.page) {
    lines.push('<b>Страница:</b> <a href="' + escapeHtml(data.page) + '">' + escapeHtml(data.page) + '</a>');
  }

  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
    if (data[k]) lines.push('<code>' + escapeHtml(k) + '</code>: ' + escapeHtml(data[k]));
  });

  if (data.ts) lines.push('<b>Время:</b> ' + escapeHtml(data.ts));

  return lines.join('\n');
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  var token = process.env.TELEGRAM_BOT_TOKEN;
  var chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: 'Telegram not configured' });
  }

  var data;
  try {
    data = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'Invalid JSON body' });
  }

  var email = String(data.email || '').trim();
  var message = String(data.message || '').trim();
  if (!email) {
    return res.status(400).json({ ok: false, error: 'Email is required' });
  }

  try {
    var resp = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: buildMessage(data),
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });
    var json = await resp.json();
    if (!json.ok) throw new Error(JSON.stringify(json));
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ ok: false, error: 'Telegram API error: ' + err.message });
  }
};