import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "f1": "Kraft am ersten Arm",
      "d1": "Erster Arm",
      "d2": "Zweiter Arm",
      "f2": "Kraft am zweiten Arm"
    },
    "options": {
      "force2": "die Kraft am zweiten Arm",
      "distance2": "die Länge des zweiten Arms"
    },
    "results": {
      "Сила на втором плече": "Kraft am zweiten Arm",
      "Второе плечо": "Zweiter Arm",
      "Выигрыш в силе": "Kraftgewinn",
      "Момент первой силы": "Moment der ersten Kraft",
      "Первое плечо": "Erster Arm",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "Н·м": "N·m",
      "Н": "N",
      "м": "m",
      "Первое плечо должно быть больше нуля": "Der erste Arm muss größer als null sein",
      "Второе плечо должно быть больше нуля": "Der zweite Arm muss größer als null sein",
      "Вторая сила должна быть больше нуля": "Die zweite Kraft muss größer als null sein",
      "Первая сила не может быть отрицательной": "Die erste Kraft darf nicht negativ sein",
      "Нулевая первая сила не даёт положительного второго плеча при ненулевой второй силе": "Erste Kraft null ergibt bei zweiter Kraft ungleich null keinen positiven zweiten Hebelarm"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "f1": "Force on the first arm",
      "d1": "First arm",
      "d2": "Second arm",
      "f2": "Force on the second arm"
    },
    "options": {
      "force2": "the force on the second arm",
      "distance2": "the length of the second arm"
    },
    "results": {
      "Сила на втором плече": "Force on the second arm",
      "Второе плечо": "Second arm",
      "Выигрыш в силе": "Mechanical advantage",
      "Момент первой силы": "Moment of the first force",
      "Первое плечо": "First arm",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "Н·м": "N·m",
      "Н": "N",
      "м": "m",
      "Первое плечо должно быть больше нуля": "The first arm must be greater than zero",
      "Второе плечо должно быть больше нуля": "The second arm must be greater than zero",
      "Вторая сила должна быть больше нуля": "The second force must be greater than zero",
      "Первая сила не может быть отрицательной": "The first force cannot be negative",
      "Нулевая первая сила не даёт положительного второго плеча при ненулевой второй силе": "Zero first force cannot give a positive second arm with non-zero second force"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "f1": "Сила на першому плечі",
      "d1": "Перше плече",
      "d2": "Друге плече",
      "f2": "Сила на другому плечі"
    },
    "options": {
      "force2": "силу на другому плечі",
      "distance2": "довжину другого плеча"
    },
    "results": {
      "Сила на втором плече": "Сила на другому плечі",
      "Второе плечо": "Друге плече",
      "Выигрыш в силе": "Виграш у силі",
      "Момент первой силы": "Момент першої сили",
      "Первое плечо": "Перше плече",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "Н·м": "Н·м",
      "Н": "Н",
      "м": "м",
      "Первое плечо должно быть больше нуля": "Перше плече має бути більшим за нуль",
      "Второе плечо должно быть больше нуля": "Друге плече має бути більшим за нуль",
      "Вторая сила должна быть больше нуля": "Друга сила має бути більшою за нуль",
      "Первая сила не может быть отрицательной": "Перша сила не може бути від’ємною",
      "Нулевая первая сила не даёт положительного второго плеча при ненулевой второй силе": "Нульова перша сила не дає додатного другого плеча за ненульової другої сили"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "f1": "Fuerza en el primer brazo",
      "d1": "Primer brazo",
      "d2": "Segundo brazo",
      "f2": "Fuerza en el segundo brazo"
    },
    "options": {
      "force2": "la fuerza en el segundo brazo",
      "distance2": "la longitud del segundo brazo"
    },
    "results": {
      "Сила на втором плече": "Fuerza en el segundo brazo",
      "Второе плечо": "Segundo brazo",
      "Выигрыш в силе": "Ventaja mecánica",
      "Момент первой силы": "Momento de la primera fuerza",
      "Первое плечо": "Primer brazo",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "Н·м": "N·m",
      "Н": "N",
      "м": "m",
      "Первое плечо должно быть больше нуля": "El primer brazo debe ser mayor que cero",
      "Второе плечо должно быть больше нуля": "El segundo brazo debe ser mayor que cero",
      "Вторая сила должна быть больше нуля": "La segunda fuerza debe ser mayor que cero",
      "Первая сила не может быть отрицательной": "La primera fuerza no puede ser negativa",
      "Нулевая первая сила не даёт положительного второго плеча при ненулевой второй силе": "La primera fuerza cero no da un segundo brazo positivo con una segunda fuerza no nula"
    }
  }
};
