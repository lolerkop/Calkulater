import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'width': 'Felgenbreite, Zoll',
      'offset': 'Einpresstiefe ET, mm',
      'newOffset': 'Neue Einpresstiefe ET, mm',
    },
    results: {
      'Вылет назад': 'Rückmaß',
      'Ширина диска': 'Felgenbreite',
      'Смещение колеса': 'Radversatz',
      'Куда сместится': 'Richtung des Versatzes',
      'Вылет назад после замены': 'Rückmaß nach dem Wechsel',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мм': 'mm',
      'наружу': 'nach außen',
      'внутрь': 'nach innen',
      'без смещения': 'kein Versatz',
      'Ширина диска должна быть больше нуля': 'Die Felgenbreite muss größer als null sein',
    },
  },
  en: {
    fields: { width: 'Rim width, inches', offset: 'Offset ET, mm', newOffset: 'New offset ET, mm' },
    options: {},
    results: {
      'Вылет назад': 'Backspacing', 'Ширина диска': 'Rim width',
      'Смещение колеса': 'Wheel shift', 'Куда сместится': 'Direction of the shift',
      'Вылет назад после замены': 'Backspacing after the swap', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мм': 'mm', 'наружу': 'outwards', 'внутрь': 'inwards', 'без смещения': 'no shift',
      'Ширина диска должна быть больше нуля': 'The rim width must be greater than zero',
    },
  },
  uk: {
    fields: { width: 'Ширина диска, дюйми', offset: 'Виліт ET, мм', newOffset: 'Новий виліт ET, мм' },
    options: {},
    results: {
      'Вылет назад': 'Виліт назад', 'Ширина диска': 'Ширина диска',
      'Смещение колеса': 'Зміщення колеса', 'Куда сместится': 'Куди зміститься',
      'Вылет назад после замены': 'Виліт назад після заміни', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мм': 'мм', 'наружу': 'назовні', 'внутрь': 'усередину', 'без смещения': 'без зміщення',
      'Ширина диска должна быть больше нуля': 'Ширина диска має бути більшою за нуль',
    },
  },
  es: {
    fields: {
      "width": "Anchura de la llanta, pulgadas",
      "offset": "ET, mm",
      "newOffset": "Nuevo ET, mm",
    },
    options: {},
    results: {
      "Вылет назад": "Distancia al plano interior",
      "Ширина диска": "Anchura de la llanta",
      "Смещение колеса": "Desplazamiento de la rueda",
      "Куда сместится": "Sentido del desplazamiento",
      "Вылет назад после замены": "Distancia al plano interior tras el cambio",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "мм": "mm",
      "наружу": "hacia fuera",
      "внутрь": "hacia dentro",
      "без смещения": "sin desplazamiento",
      "Ширина диска должна быть больше нуля": "La anchura de la llanta debe ser mayor que cero",
    },
  },
};
