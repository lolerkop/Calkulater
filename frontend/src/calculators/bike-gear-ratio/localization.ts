import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'chainring': 'Zähne am Kettenblatt',
      'sprocket': 'Zähne am Ritzel',
      'wheelCircumference': 'Radumfang, m',
    },
    results: {
      'Передаточное отношение': 'Übersetzungsverhältnis',
      'Развитие за оборот': 'Entfaltung je Umdrehung',
      'Оборотов колеса на оборот педалей': 'Radumdrehungen je Pedalumdrehung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
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
      "wheelCircumference": "Wheel circumference, m",
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
      "wheelCircumference": "Довжина кола колеса, м",
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
      "м": "м",
      "Число зубьев должно быть целым": "Кількість зубців має бути цілою",
      "Зубьев на передней звезде должно быть больше нуля": "Зубців на передній зірці має бути більше нуля",
      "Зубьев на задней звезде должно быть больше нуля": "Зубців на задній зірці має бути більше нуля",
    },
  },
};
