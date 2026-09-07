/*
# Create contact_requests table

1. New Tables
- `contact_requests`
  - `id` (uuid, primary key)
  - `email` (text, not null) — submitter's email
  - `message` (text, not null) — their inquiry
  - `created_at` (timestamptz, defaults to now)
2. Security
- Enable RLS on `contact_requests`.
- Allow anon + authenticated INSERT only (public contact form, no read/update/delete from the client).
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_requests;
CREATE POLICY "anon_insert_contact"
  ON contact_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);
