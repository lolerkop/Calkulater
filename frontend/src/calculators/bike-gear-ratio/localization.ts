import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'chainring': 'Zähne am Kettenblatt',
      'sprocket': 'Zähne am Ritzel',
      'wheelCircumference': 'Radumfang',
    },
    results: {
      'Передаточное отношение': 'Übersetzungsverhältnis',
      'Развитие за оборот': 'Entfaltung je Umdrehung',
      'Оборотов колеса на оборот педалей': 'Radumdrehungen je Pedalumdrehung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      "Окружность колеса должна быть конечным неотрицательным числом": "Radumfang muss eine endliche nichtnegative Zahl sein",
      "Результат выходит за числовой диапазон": "Das Ergebnis überschreitet den Zahlenbereich",
      "Число оборотов колеса предполагает прямую цепную передачу без дополнительного внутреннего передаточного отношения.": "Radumdrehungen setzen direkten Kettenantrieb ohne zusätzliches internes Verhältnis voraus.",

      'м': 'm',
      'Число зубьев должно быть целым': 'Die Zähnezahl muss eine ganze Zahl sein',
      'Зубьев на передней звезде должно быть больше нуля': 'Das Kettenblatt muss mehr als null Zähne haben',
      'Зубьев на задней звезде должно быть больше нуля': 'Das Ritzel muss mehr als null Zähne haben',
    },
  },
  en: {
    fields: {
      "chainring": "Chainring teeth",
      "sprocket": "Sprocket teeth",
      "wheelCircumference": "Wheel circumference",
    },
    options: {

    },
    results: {
      "Передаточное отношение": "Gear ratio",
      "Развитие за оборот": "Development per revolution",
      "Оборотов колеса на оборот педалей": "Wheel turns per pedal turn",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Окружность колеса должна быть конечным неотрицательным числом": "Wheel circumference must be a finite nonnegative number",
      "Результат выходит за числовой диапазон": "The result exceeds the numeric range",
      "Число оборотов колеса предполагает прямую цепную передачу без дополнительного внутреннего передаточного отношения.": "Wheel turns assume direct chain drive without an additional internal gear ratio.",

      "м": "m",
      "Число зубьев должно быть целым": "The tooth count must be a whole number",
      "Зубьев на передней звезде должно быть больше нуля": "The chainring must have more than zero teeth",
      "Зубьев на задней звезде должно быть больше нуля": "The sprocket must have more than zero teeth",
    },
  },
  uk: {
    fields: {
      "chainring": "Зубців на передній зірці",
      "sprocket": "Зубців на задній зірці",
      "wheelCircumference": "Довжина кола колеса",
    },
    options: {

    },
    results: {
      "Передаточное отношение": "Передавальне відношення",
      "Развитие за оборот": "Розвиток за оберт",
      "Оборотов колеса на оборот педалей": "Обертів колеса на оберт педалей",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Окружность колеса должна быть конечным неотрицательным числом": "Окружність колеса має бути скінченним невід’ємним числом",
      "Результат выходит за числовой диапазон": "Результат виходить за числовий діапазон",
      "Число оборотов колеса предполагает прямую цепную передачу без дополнительного внутреннего передаточного отношения.": "Оберти колеса передбачають прямий ланцюговий привод без додаткового внутрішнього відношення.",

      "м": "м",
      "Число зубьев должно быть целым": "Кількість зубців має бути цілою",
      "Зубьев на передней звезде должно быть больше нуля": "Зубців на передній зірці має бути більше нуля",
      "Зубьев на задней звезде должно быть больше нуля": "Зубців на задній зірці має бути більше нуля",
    },
  },
  es: {
    fields: {
      "chainring": "Dientes del plato",
      "sprocket": "Dientes del piñón",
      "wheelCircumference": "Perímetro de la rueda",
    },
    options: {},
    results: {
      "Передаточное отношение": "Relación de transmisión",
      "Развитие за оборот": "Desarrollo por vuelta",
      "Оборотов колеса на оборот педалей": "Vueltas de rueda por vuelta de pedal",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Окружность колеса должна быть конечным неотрицательным числом": "La circunferencia debe ser un número finito no negativo",
      "Результат выходит за числовой диапазон": "El resultado excede el rango numérico",
      "Число оборотов колеса предполагает прямую цепную передачу без дополнительного внутреннего передаточного отношения.": "Las vueltas suponen transmisión directa por cadena sin relación interna adicional.",

      "м": "m",
      "Число зубьев должно быть целым": "El número de dientes debe ser un número entero",
      "Зубьев на передней звезде должно быть больше нуля": "El plato debe tener más de cero dientes",
      "Зубьев на задней звезде должно быть больше нуля": "El piñón debe tener más de cero dientes",
    },
  },
};
