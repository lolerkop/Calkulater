import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Сила': 'Force', 'Удлинение': 'Extension', 'Жёсткость': 'Spring rate',
  'Энергия пружины': 'Stored energy', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Сила': 'Сила', 'Удлинение': 'Видовження', 'Жёсткость': 'Жорсткість',
  'Энергия пружины': 'Енергія пружини', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'k': 'Federkonstante, N/m',
      'x': 'Auslenkung, m',
      'f': 'Kraft, N',
    },
    options: {
      'force': 'die Federkraft',
      'extension': 'die Auslenkung',
      'stiffness': 'die Federkonstante',
    },
    results: {
      'Сила': 'Kraft',
      'Удлинение': 'Auslenkung',
      'Жёсткость': 'Federkonstante',
      'Энергия пружины': 'Gespeicherte Energie',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Сила и деформация должны быть направлены в одну сторону': 'Kraft und Verformung müssen in dieselbe Richtung zeigen',
      'Н/м': 'N/m',
      'Н': 'N',
      'Дж': 'J',
      'м': 'm',
      'Жёсткость должна быть больше нуля': 'Die Federkonstante muss größer als null sein',
      'Удлинение не может быть нулевым: делить на него нечего': 'Die Auslenkung kann nicht null sein: dadurch lässt sich nicht teilen',
    },
  },
  en: {
    fields: { mode: 'What to find', k: 'Spring rate, N/m', x: 'Extension or compression, m', f: 'Force, N' },
    options: { force: 'the spring force', extension: 'the extension', stiffness: 'the spring rate' },
    results: RESULTS_EN,
    values: {
      'Сила и деформация должны быть направлены в одну сторону': 'The force and the deformation must point the same way',
      'Н/м': 'N/m', 'Н': 'N', 'Дж': 'J', 'м': 'm',
      'Жёсткость должна быть больше нуля': 'The spring rate must be greater than zero',
      'Удлинение не может быть нулевым: делить на него нечего': 'The extension cannot be zero: there is nothing to divide by',
    },
  },
  uk: {
    fields: { mode: 'Що знайти', k: 'Жорсткість, Н/м', x: 'Видовження або стиснення, м', f: 'Сила, Н' },
    options: { force: 'силу пружності', extension: 'видовження', stiffness: 'жорсткість' },
    results: RESULTS_UK,
    values: {
      'Сила и деформация должны быть направлены в одну сторону': 'Сила і деформація мають бути напрямлені в один бік',
      'Н/м': 'Н/м', 'Н': 'Н', 'Дж': 'Дж', 'м': 'м',
      'Жёсткость должна быть больше нуля': 'Жорсткість має бути більшою за нуль',
      'Удлинение не может быть нулевым: делить на него нечего': 'Видовження не може бути нульовим: ділити на нього нічого',
    },
  },
  es: {
    fields: {
      "mode": "Qué hallar",
      "k": "Constante elástica, N/m",
      "x": "Alargamiento o compresión, m",
      "f": "Fuerza, N",
    },
    options: {
      "force": "la fuerza del muelle",
      "extension": "el alargamiento",
      "stiffness": "la constante elástica",
    },
    results: {
      "Сила": "Fuerza",
      "Удлинение": "Alargamiento",
      "Жёсткость": "Constante elástica",
      "Энергия пружины": "Energía almacenada",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Сила и деформация должны быть направлены в одну сторону": "La fuerza y la deformación deben apuntar en el mismo sentido",
      "Н/м": "N/m",
      "Н": "N",
      "Дж": "J",
      "м": "m",
      "Жёсткость должна быть больше нуля": "La constante elástica debe ser mayor que cero",
      "Удлинение не может быть нулевым: делить на него нечего": "El alargamiento no puede ser cero: no hay entre qué dividir",
    },
  },
};
