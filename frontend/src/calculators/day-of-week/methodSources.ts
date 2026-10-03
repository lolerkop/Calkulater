// Educational methodology sources; these are not jurisdiction-wide rules.
import type { EditorialSource } from '../../data/calculatorEditorial';

export const methodSources: Record<'ru' | 'en' | 'uk' | 'de' | 'es', EditorialSource[]> = {
  "ru": [
    {
      "label": "Python datetime: правило недели ISO и её отдельного года",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "en": [
    {
      "label": "Python datetime: the ISO week and its separate week-year",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "uk": [
    {
      "label": "Python datetime: правило тижня ISO та його окремого року",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "de": [
    {
      "label": "Python datetime: ISO-Woche und separates Wochenjahr",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ],
  "es": [
    {
      "label": "Python datetime: semana ISO y su año separado",
      "href": "https://docs.python.org/3/library/datetime.html#datetime.date.isocalendar"
    }
  ]
};
