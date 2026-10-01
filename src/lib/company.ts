export const companyDetails = {
  legalName: 'DEUS TECHNOLOGIES 2.0 SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  shortName: 'Deus Technologies 2.0',
  legalForm: 'Spółka z ograniczoną odpowiedzialnością (Sp. z o.o.)',
  krs: '0001164486',
  regon: '541290714',
  nip: '5214111610',
  registeredAddress: {
    voivodeship: 'Mazowieckie',
    county: 'm.st. Warszawa',
    city: 'Warszawa',
    postalCode: '00-775',
    street: 'Konduktorska',
    building: '18',
    apartment: '7',
  },
  reportingPeriod: {
    label: 'FY 2025',
    range: '01.01.2025 – 31.12.2025',
    statementDate: '31.12.2025',
  },
  president: {
    name: 'Yury Ausianik',
    role: 'Prezes Zarządu',
    roleEn: 'President of the Management Board',
  },
  email: 'info@deustech.health',
} as const;

export const registeredAddressLine = [
  `${companyDetails.registeredAddress.street} ${companyDetails.registeredAddress.building}`,
  `m. ${companyDetails.registeredAddress.apartment}`,
  `${companyDetails.registeredAddress.postalCode} ${companyDetails.registeredAddress.city}`,
  companyDetails.registeredAddress.voivodeship,
].join(', ');