// A repeated user question can have two useful subject-specific answers.
// These five authored questions were read for both calculators on2026-10-01.
// Molarity: zero amount/mass in a positive solution volume gives0mol/L.
// Moles: zero mass/amount gives0mol/g/entities with positive molar mass.
// This is an explicit editorial exception, not a uniqueness score or a
// permission to reuse whole answers or accept other duplicated questions.
export const reviewedSharedFaqQuestions = [
  { locale: 'ru', question: 'Можно ли ввести нулевую массу или количество вещества?', ids: ['molarity', 'moles'] },
  { locale: 'en', question: 'Can mass or amount of substance be zero?', ids: ['molarity', 'moles'] },
  { locale: 'uk', question: 'Чи може маса або кількість речовини дорівнювати нулю?', ids: ['molarity', 'moles'] },
  { locale: 'de', question: 'Dürfen Masse oder Stoffmenge null sein?', ids: ['molarity', 'moles'] },
  { locale: 'es', question: '¿Puede ser cero la masa o cantidad de sustancia?', ids: ['molarity', 'moles'] },
  {"locale": "ru", "question": "Какую плотность вводить?", "ids": ["bulk-material-volume", "pipe-weight"]},
  {"locale": "en", "question": "Which density should I enter?", "ids": ["bulk-material-volume", "pipe-weight"]},
  {"locale": "uk", "question": "Яку густину вводити?", "ids": ["bulk-material-volume", "pipe-weight"]},
  {"locale": "de", "question": "Ist die Umsatzsteuer enthalten?", "ids": ["margin-calculator", "utility-total"]},
  {"locale": "de", "question": "Wie viel Reserve ist sinnvoll?", "ids": ["network-bandwidth", "screed-calculator", "tile-calculator"]},
  {"locale": "de", "question": "Warum werden die Pakete aufgerundet?", "ids": ["laminate-calculator", "tile-calculator"]},
  {"locale": "de", "question": "Woher nehme ich die Ergiebigkeit?", "ids": ["paint-calculator", "screed-calculator"]},
  {"locale": "de", "question": "Ist die Steuer enthalten?", "ids": ["commission", "fee-chain"]},
  {"locale": "de", "question": "Soll ich eine Reserve einplanen?", "ids": ["cycle-time", "heating-power"]},
  {"locale": "de", "question": "Einkommen vor oder nach Steuern?", "ids": ["dti", "max-loan"]},
  {"locale": "de", "question": "Wozu die Zeile mit der Probe?", "ids": ["logarithm", "modulo"]},
  {"locale": "es", "question": "¿El porcentaje se toma del salario bruto o del neto?", "ids": ["bonus", "salary-raise"]},
  {"locale": "es", "question": "¿Qué densidad debo introducir?", "ids": ["bulk-material-volume", "pipe-weight"]},
  {"locale": "es", "question": "¿Se tienen en cuenta los impuestos?", "ids": ["dividend-yield", "real-return"]},
  {"locale": "es", "question": "¿Los ingresos son antes o después de impuestos?", "ids": ["dti", "max-loan"]},
] as const;
