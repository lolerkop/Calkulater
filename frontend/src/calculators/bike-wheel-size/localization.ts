import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Wie die Größe angegeben ist',
      'etrtoRim': 'Felgenmaulsitzdurchmesser',
      'etrtoTire': 'Reifenbreite',
      'inches': 'Laufraddurchmesser',
    },
    options: {
      'etrto': 'ETRTO, in Millimetern',
      'inches': 'In Zoll',
    },
    results: {
      'Длина окружности': 'Umfang',
      'Диаметр': 'Durchmesser',
      'Диаметр в дюймах': 'Durchmesser in Zoll',
      'Оборотов на километр': 'Umdrehungen je Kilometer',
      'Радиус': 'Radius',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      "Ширина покрышки должна быть конечным неотрицательным числом": "Reifenbreite muss eine endliche nichtnegative Zahl sein",
      "Результат выходит за числовой диапазон": "Das Ergebnis überschreitet den Zahlenbereich",
      "Оценка: высота покрышки принята равной её номинальной ширине. Для велокомпьютера измерьте прокат нагруженного колеса.": "Schätzung: Reifenhöhe wird gleich nomineller Breite gesetzt. Belasteten Abrollumfang für den Fahrradcomputer messen.",
      "Введённый диаметр считается измеренным внешним диаметром, а не условным дюймовым названием размера.": "Die Eingabe gilt als gemessener Außendurchmesser, nicht als nomineller Zollname.",

      'мм': 'mm',
      'Посадочный диаметр обода должен быть больше нуля': 'Der Felgenmaulsitzdurchmesser muss größer als null sein',
      'Ширина покрышки не может быть отрицательной': 'Die Reifenbreite kann nicht negativ sein',
      'Диаметр в дюймах должен быть больше нуля': 'Der Durchmesser in Zoll muss größer als null sein',
      'Неизвестный режим': 'Unbekannter Modus',
    },
  },
  en: {
    fields: {
      "mode": "How the size is given",
      "etrtoRim": "Rim bead seat diameter",
      "etrtoTire": "Tyre width",
      "inches": "Wheel diameter",
    },
    options: { "etrto": "ETRTO, in millimetres", "inches": "In inches" },
    results: {
      "Длина окружности": "Circumference",
      "Диаметр": "Diameter",
      "Диаметр в дюймах": "Diameter in inches",
      "Оборотов на километр": "Revolutions per kilometre",
      "Радиус": "Radius",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Ширина покрышки должна быть конечным неотрицательным числом": "Tyre width must be a finite nonnegative number",
      "Результат выходит за числовой диапазон": "The result exceeds the numeric range",
      "Оценка: высота покрышки принята равной её номинальной ширине. Для велокомпьютера измерьте прокат нагруженного колеса.": "Estimate: tyre height is assumed equal to nominal width. Measure loaded rollout for a bike computer.",
      "Введённый диаметр считается измеренным внешним диаметром, а не условным дюймовым названием размера.": "The entered diameter is treated as measured outside diameter, not a nominal inch size label.",

      "мм": "mm",
      "Посадочный диаметр обода должен быть больше нуля": "The rim bead seat diameter must be greater than zero",
      "Ширина покрышки не может быть отрицательной": "The tyre width cannot be negative",
      "Диаметр в дюймах должен быть больше нуля": "The diameter in inches must be greater than zero",
      "Неизвестный режим": "Unknown mode",
    },
  },
  uk: {
    fields: {
      "mode": "Як задано розмір",
      "etrtoRim": "Посадковий діаметр обода",
      "etrtoTire": "Ширина покришки",
      "inches": "Діаметр колеса",
    },
    options: { "etrto": "ETRTO, у міліметрах", "inches": "У дюймах" },
    results: {
      "Длина окружности": "Довжина кола",
      "Диаметр": "Діаметр",
      "Диаметр в дюймах": "Діаметр у дюймах",
      "Оборотов на километр": "Обертів на кілометр",
      "Радиус": "Радіус",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Ширина покрышки должна быть конечным неотрицательным числом": "Ширина покришки має бути скінченним невід’ємним числом",
      "Результат выходит за числовой диапазон": "Результат виходить за числовий діапазон",
      "Оценка: высота покрышки принята равной её номинальной ширине. Для велокомпьютера измерьте прокат нагруженного колеса.": "Оцінка: висота покришки дорівнює номінальній ширині за припущенням. Для велокомп’ютера виміряйте навантажений прокат.",
      "Введённый диаметр считается измеренным внешним диаметром, а не условным дюймовым названием размера.": "Введений діаметр — виміряний зовнішній діаметр, а не умовна дюймова назва.",

      "мм": "мм",
      "Посадочный диаметр обода должен быть больше нуля": "Посадковий діаметр обода має бути більшим за нуль",
      "Ширина покрышки не может быть отрицательной": "Ширина покришки не може бути від’ємною",
      "Диаметр в дюймах должен быть больше нуля": "Діаметр у дюймах має бути більшим за нуль",
      "Неизвестный режим": "Невідомий режим",
    },
  },
  es: {
    fields: {
      "mode": "Cómo se indica el tamaño",
      "etrtoRim": "Diámetro de asiento de la llanta",
      "etrtoTire": "Anchura de la cubierta",
      "inches": "Diámetro de la rueda",
    },
    options: {
      "etrto": "ETRTO, en milímetros",
      "inches": "En pulgadas",
    },
    results: {
      "Длина окружности": "Perímetro",
      "Диаметр": "Diámetro",
      "Диаметр в дюймах": "Diámetro en pulgadas",
      "Оборотов на километр": "Vueltas por kilómetro",
      "Радиус": "Radio",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Ширина покрышки должна быть конечным неотрицательным числом": "La anchura debe ser un número finito no negativo",
      "Результат выходит за числовой диапазон": "El resultado excede el rango numérico",
      "Оценка: высота покрышки принята равной её номинальной ширине. Для велокомпьютера измерьте прокат нагруженного колеса.": "Estimación: altura se supone igual a anchura nominal. Mide rodamiento cargado para el ciclocomputador.",
      "Введённый диаметр считается измеренным внешним диаметром, а не условным дюймовым названием размера.": "La entrada se trata como diámetro exterior medido, no etiqueta nominal en pulgadas.",

      "мм": "mm",
      "Посадочный диаметр обода должен быть больше нуля": "El diámetro de asiento de la llanta debe ser mayor que cero",
      "Ширина покрышки не может быть отрицательной": "La anchura de la cubierta no puede ser negativa",
      "Диаметр в дюймах должен быть больше нуля": "El diámetro en pulgadas debe ser mayor que cero",
      "Неизвестный режим": "Modo desconocido",
    },
  },
};
