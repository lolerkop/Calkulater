import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "F": "Kraft",
      "s": "Verschiebungsbetrag",
      "W": "Arbeit",
      "angleDeg": "Winkel zwischen Kraft und Weg"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter",
      "W": "die Arbeit",
      "s": "der Weg"
    },
    "results": {
      "Работа": "Arbeit",
      "Сила": "Kraft",
      "Перемещение": "Weg",
      "Косинус угла": "Kosinus des Winkels",
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
      "Дж": "J",
      "Н": "N",
      "Сила не может быть отрицательной": "Die Kraft darf nicht negativ sein",
      "Перемещение не может быть отрицательным": "Der Weg kann nicht negativ sein",
      "Работа не может быть отрицательной": "Die Arbeit kann nicht negativ sein",
      "Сила должна быть больше нуля, иначе перемещение не определено": "Die Kraft muss größer als null sein, sonst ist der Weg nicht bestimmt",
      "При прямом угле сила работы не совершает, и перемещение из неё не выводится": "Im rechten Winkel verrichtet die Kraft keine Arbeit, und der Weg lässt sich daraus nicht ableiten",
      "Знак работы должен соответствовать углу: длина перемещения неотрицательна": "Das Vorzeichen der Arbeit muss zum Winkel passen: der Verschiebungsbetrag ist nichtnegativ",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "Der Winkel muss zwischen 0 und 180 Grad liegen"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "F": "Force",
      "s": "Displacement magnitude",
      "W": "Work",
      "angleDeg": "Angle between force and displacement"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres",
      "W": "the work",
      "s": "the displacement"
    },
    "results": {
      "Работа": "Work",
      "Сила": "Force",
      "Перемещение": "Displacement",
      "Косинус угла": "Cosine of the angle",
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
      "Дж": "J",
      "Н": "N",
      "Сила не может быть отрицательной": "Force cannot be negative",
      "Перемещение не может быть отрицательным": "The displacement cannot be negative",
      "Работа не может быть отрицательной": "The work cannot be negative",
      "Сила должна быть больше нуля, иначе перемещение не определено": "The force must be greater than zero, otherwise the displacement is undetermined",
      "При прямом угле сила работы не совершает, и перемещение из неё не выводится": "At a right angle the force does no work, so no displacement follows from it",
      "Знак работы должен соответствовать углу: длина перемещения неотрицательна": "The sign of work must match the angle: displacement magnitude is non-negative",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "The angle must be between 0 and 180 degrees"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "F": "Сила",
      "s": "Модуль переміщення",
      "W": "Робота",
      "angleDeg": "Кут між силою і переміщенням"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри",
      "W": "роботу",
      "s": "переміщення"
    },
    "results": {
      "Работа": "Робота",
      "Сила": "Сила",
      "Перемещение": "Переміщення",
      "Косинус угла": "Косинус кута",
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
      "Дж": "Дж",
      "Н": "Н",
      "Сила не может быть отрицательной": "Сила не може бути від’ємною",
      "Перемещение не может быть отрицательным": "Переміщення не може бути від’ємним",
      "Работа не может быть отрицательной": "Робота не може бути від’ємною",
      "Сила должна быть больше нуля, иначе перемещение не определено": "Сила має бути більшою за нуль, інакше переміщення не визначене",
      "При прямом угле сила работы не совершает, и перемещение из неё не выводится": "За прямого кута сила роботи не виконує, і переміщення з неї не виводиться",
      "Знак работы должен соответствовать углу: длина перемещения неотрицательна": "Знак роботи має відповідати куту: модуль переміщення невід’ємний",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "Кут має лежати в діапазоні від 0 до 180 градусів"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "F": "Fuerza",
      "s": "Módulo del desplazamiento",
      "W": "Trabajo",
      "angleDeg": "Ángulo entre la fuerza y el desplazamiento"
    },
    "options": {
      "W": "el trabajo",
      "s": "el desplazamiento",
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Работа": "Trabajo",
      "Сила": "Fuerza",
      "Перемещение": "Desplazamiento",
      "Косинус угла": "Coseno del ángulo",
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
      "Дж": "J",
      "Н": "N",
      "Сила не может быть отрицательной": "La fuerza no puede ser negativa",
      "Перемещение не может быть отрицательным": "El desplazamiento no puede ser negativo",
      "Работа не может быть отрицательной": "El trabajo no puede ser negativo",
      "Сила должна быть больше нуля, иначе перемещение не определено": "La fuerza debe ser mayor que cero; de lo contrario el desplazamiento queda indeterminado",
      "При прямом угле сила работы не совершает, и перемещение из неё не выводится": "En ángulo recto la fuerza no hace trabajo, así que de él no se deduce ningún desplazamiento",
      "Знак работы должен соответствовать углу: длина перемещения неотрицательна": "El signo del trabajo debe corresponder al ángulo: el módulo del desplazamiento es no negativo",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "El ángulo debe estar entre 0 y 180 grados"
    }
  }
};
