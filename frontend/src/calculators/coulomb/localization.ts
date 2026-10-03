import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';
import { auxiliaryScalarValues } from '../../lib/platform/auxiliaryScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "q1": "Erste Ladung",
      "q2": "Zweite Ladung",
      "r": "Abstand"
    },
    "results": {
      "Сила взаимодействия": "Kraft zwischen den Ladungen",
      "Характер": "Art",
      "Напряжённость поля первого заряда": "Feldstärke der ersten Ladung",
      "Потенциальная энергия": "Potentielle Energie",
      "Расстояние": "Abstand",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      ...auxiliaryScalarValues.de,
      "Н": "N",
      "В/м": "V/m",
      "Дж": "J",
      "см": "cm",
      "притяжение": "Anziehung",
      "отталкивание": "Abstoßung",
      "Расстояние должно быть больше нуля": "Der Abstand muss größer als null sein",
      "Первый заряд не может быть нулевым": "Die erste Ladung kann nicht null sein",
      "Второй заряд не может быть нулевым": "Die zweite Ladung kann nicht null sein",
      "Нет силы взаимодействия": "Keine Wechselwirkungskraft"
    }
  },
  "en": {
    "fields": {
      "q1": "First charge",
      "q2": "Second charge",
      "r": "Distance"
    },
    "options": {},
    "results": {
      "Сила взаимодействия": "Force between the charges",
      "Характер": "Type",
      "Напряжённость поля первого заряда": "Field strength of the first charge",
      "Потенциальная энергия": "Potential energy",
      "Расстояние": "Distance",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      ...auxiliaryScalarValues.en,
      "Н": "N",
      "В/м": "V/m",
      "Дж": "J",
      "см": "cm",
      "притяжение": "attraction",
      "отталкивание": "repulsion",
      "Расстояние должно быть больше нуля": "The distance must be greater than zero",
      "Первый заряд не может быть нулевым": "The first charge cannot be zero",
      "Второй заряд не может быть нулевым": "The second charge cannot be zero",
      "Нет силы взаимодействия": "No interaction force"
    }
  },
  "uk": {
    "fields": {
      "q1": "Перший заряд",
      "q2": "Другий заряд",
      "r": "Відстань"
    },
    "options": {},
    "results": {
      "Сила взаимодействия": "Сила взаємодії",
      "Характер": "Характер",
      "Напряжённость поля первого заряда": "Напруженість поля першого заряду",
      "Потенциальная энергия": "Потенціальна енергія",
      "Расстояние": "Відстань",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      ...auxiliaryScalarValues.uk,
      "Н": "Н",
      "В/м": "В/м",
      "Дж": "Дж",
      "см": "см",
      "притяжение": "притягання",
      "отталкивание": "відштовхування",
      "Расстояние должно быть больше нуля": "Відстань має бути більшою за нуль",
      "Первый заряд не может быть нулевым": "Перший заряд не може бути нульовим",
      "Второй заряд не может быть нулевым": "Другий заряд не може бути нульовим",
      "Нет силы взаимодействия": "Немає сили взаємодії"
    }
  },
  "es": {
    "fields": {
      "q1": "Primera carga",
      "q2": "Segunda carga",
      "r": "Distancia"
    },
    "options": {},
    "results": {
      "Сила взаимодействия": "Fuerza de interacción",
      "Характер": "Tipo",
      "Напряжённость поля первого заряда": "Intensidad del campo de la primera carga",
      "Потенциальная энергия": "Energía potencial",
      "Расстояние": "Distancia",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      ...auxiliaryScalarValues.es,
      "Н": "N",
      "В/м": "V/m",
      "Дж": "J",
      "см": "cm",
      "притяжение": "atracción",
      "отталкивание": "repulsión",
      "Расстояние должно быть больше нуля": "La distancia debe ser mayor que cero",
      "Первый заряд не может быть нулевым": "La primera carga no puede ser nula",
      "Второй заряд не может быть нулевым": "La segunda carga no puede ser nula",
      "Нет силы взаимодействия": "Sin fuerza de interacción"
    }
  }
};
