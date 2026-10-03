import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "m": "Masse",
      "v": "Geschwindigkeitskomponente",
      "p": "Impulskomponente",
      "m2": "Masse",
      "p2": "Impulskomponente",
      "v2": "Geschwindigkeitskomponente"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "die Masse",
      "p": "der Impuls",
      "v": "die Geschwindigkeit"
    },
    "results": {
      "Импульс": "Impuls",
      "Масса": "Masse",
      "Скорость": "Geschwindigkeit",
      "Кинетическая энергия": "Kinetische Energie",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      "кг·м/с": "kg·m/s",
      "кг": "kg",
      "м/с": "m/s",
      "Дж": "J",
      "Масса должна быть больше нуля": "Die Masse muss größer als null sein",
      "Скорость не может быть отрицательной": "Die Geschwindigkeit kann nicht negativ sein",
      "Импульс не может быть отрицательным": "Der Impuls kann nicht negativ sein",
      "Скорость должна быть больше нуля, иначе масса не определена": "Die Geschwindigkeit muss größer als null sein, sonst ist die Masse nicht bestimmt",
      "При нулевой скорости массу по импульсу найти нельзя": "Bei Geschwindigkeit null lässt sich die Masse nicht aus dem Impuls bestimmen",
      "Для положительной массы импульс и скорость должны иметь одинаковый ненулевой знак": "Für eine positive Masse müssen Impuls und Geschwindigkeit dasselbe Vorzeichen haben und ungleich null sein"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "m": "Mass",
      "v": "Velocity component",
      "p": "Momentum component",
      "m2": "Mass",
      "p2": "Momentum component",
      "v2": "Velocity component"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "the mass",
      "p": "the momentum",
      "v": "the velocity"
    },
    "results": {
      "Импульс": "Momentum",
      "Масса": "Mass",
      "Скорость": "Velocity",
      "Кинетическая энергия": "Kinetic energy",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      "кг·м/с": "kg·m/s",
      "кг": "kg",
      "м/с": "m/s",
      "Дж": "J",
      "Масса должна быть больше нуля": "The mass must be greater than zero",
      "Скорость не может быть отрицательной": "The speed cannot be negative",
      "Импульс не может быть отрицательным": "The momentum cannot be negative",
      "Скорость должна быть больше нуля, иначе масса не определена": "The speed must be greater than zero, otherwise the mass is undetermined",
      "При нулевой скорости массу по импульсу найти нельзя": "Zero velocity cannot determine mass from momentum",
      "Для положительной массы импульс и скорость должны иметь одинаковый ненулевой знак": "For a positive mass, momentum and velocity must have the same non-zero sign"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "m": "Маса",
      "v": "Проєкція швидкості",
      "p": "Проєкція імпульсу",
      "m2": "Маса",
      "p2": "Проєкція імпульсу",
      "v2": "Проєкція швидкості"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "масу",
      "p": "імпульс",
      "v": "швидкість"
    },
    "results": {
      "Импульс": "Імпульс",
      "Масса": "Маса",
      "Скорость": "Швидкість",
      "Кинетическая энергия": "Кінетична енергія",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "мм": "мм",
      "см": "см",
      "м": "м",
      "мм²": "мм²",
      "см²": "см²",
      "м²": "м²",
      "мм³": "мм³",
      "см³": "см³",
      "м³": "м³",
      "кг·м/с": "кг·м/с",
      "кг": "кг",
      "м/с": "м/с",
      "Дж": "Дж",
      "Масса должна быть больше нуля": "Маса має бути більшою за нуль",
      "Скорость не может быть отрицательной": "Швидкість не може бути від’ємною",
      "Импульс не может быть отрицательным": "Імпульс не може бути від’ємним",
      "Скорость должна быть больше нуля, иначе масса не определена": "Швидкість має бути більшою за нуль, інакше маса не визначена",
      "При нулевой скорости массу по импульсу найти нельзя": "За нульової швидкості масу за імпульсом знайти не можна",
      "Для положительной массы импульс и скорость должны иметь одинаковый ненулевой знак": "Для додатної маси імпульс і швидкість повинні мати однаковий ненульовий знак"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "m": "Masa",
      "v": "Componente de velocidad",
      "p": "Componente del momento",
      "m2": "Masa",
      "p2": "Componente del momento",
      "v2": "Componente de velocidad"
    },
    "options": {
      "p": "el momento lineal",
      "v": "la velocidad",
      "m": "la masa",
      "mm": "milímetros",
      "cm": "centímetros"
    },
    "results": {
      "Импульс": "Momento lineal",
      "Масса": "Masa",
      "Скорость": "Velocidad",
      "Кинетическая энергия": "Energía cinética",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      "кг·м/с": "kg·m/s",
      "кг": "kg",
      "м/с": "m/s",
      "Дж": "J",
      "Масса должна быть больше нуля": "La masa debe ser mayor que cero",
      "Скорость не может быть отрицательной": "La velocidad no puede ser negativa",
      "Импульс не может быть отрицательным": "El momento lineal no puede ser negativo",
      "Скорость должна быть больше нуля, иначе масса не определена": "La velocidad debe ser mayor que cero; de lo contrario la masa queda indeterminada",
      "При нулевой скорости массу по импульсу найти нельзя": "Con velocidad cero no se puede determinar la masa a partir del momento",
      "Для положительной массы импульс и скорость должны иметь одинаковый ненулевой знак": "Para una masa positiva, momento y velocidad deben tener el mismo signo no nulo"
    }
  }
};
