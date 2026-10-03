import type { EditorialSource } from '../../data/calculatorEditorial';

// Primary-source bodies checked by AI on 2026-10-01; human review pending.
// Links support the named model boundaries, not a financial product or every numerical case.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "ru": [
    {
      "label": "Python: ISO-год и неделя в продолженном григорианском календаре",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "en": [
    {
      "label": "Python: ISO week year in the proleptic Gregorian calendar",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "uk": [
    {
      "label": "Python: ISO-рік і тиждень у продовженому григоріанському календарі",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "de": [
    {
      "label": "Python: ISO-Wochenjahr im durchgehend gregorianischen Kalender",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "es": [
    {
      "label": "Python: año y semana ISO en el calendario gregoriano proléptico",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ]
};
