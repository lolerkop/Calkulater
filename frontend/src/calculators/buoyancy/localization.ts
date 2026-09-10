import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'volume': 'Volumen des Körpers, m³',
      'rhoFluid': 'Dichte des Mediums, kg/m³',
      'mass': 'Masse des Körpers, kg',
    },
    results: {
      'Выталкивающая сила': 'Auftriebskraft',
      'Вес тела': 'Gewicht des Körpers',
      'Равнодействующая': 'Resultierende Kraft',
      'Вытесненная масса': 'Verdrängte Masse',
      'Поведение в жидкости': 'Verhalten im Medium',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Н': 'N',
      'кг': 'kg',
      'нейтральная плавучесть': 'schwebt',
      'всплывает': 'steigt auf',
      'тонет': 'sinkt',
      'Объём тела должен быть больше нуля': 'Das Volumen des Körpers muss größer als null sein',
      'Плотность жидкости должна быть больше нуля': 'Die Dichte des Mediums muss größer als null sein',
      'Масса не может быть отрицательной': 'Die Masse kann nicht negativ sein',
    },
  },
  en: {
    fields: { volume: 'Body volume, m³', rhoFluid: 'Fluid density, kg/m³', mass: 'Body mass, kg' },
    options: {},
    results: {
      'Выталкивающая сила': 'Buoyant force', 'Вес тела': 'Weight of the body',
      'Равнодействующая': 'Net force', 'Вытесненная масса': 'Displaced mass',
      'Поведение в жидкости': 'Behaviour in the fluid', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Н': 'N', 'кг': 'kg',
      'нейтральная плавучесть': 'neutrally buoyant', 'всплывает': 'floats up', 'тонет': 'sinks',
      'Объём тела должен быть больше нуля': 'The body volume must be greater than zero',
      'Плотность жидкости должна быть больше нуля': 'The fluid density must be greater than zero',
      'Масса не может быть отрицательной': 'The mass cannot be negative',
    },
  },
  uk: {
    fields: { volume: 'Об’єм тіла, м³', rhoFluid: 'Густина рідини, кг/м³', mass: 'Маса тіла, кг' },
    options: {},
    results: {
      'Выталкивающая сила': 'Виштовхувальна сила', 'Вес тела': 'Вага тіла',
      'Равнодействующая': 'Рівнодійна', 'Вытесненная масса': 'Витіснена маса',
      'Поведение в жидкости': 'Поведінка в рідині', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Н': 'Н', 'кг': 'кг',
      'нейтральная плавучесть': 'нейтральна плавучість', 'всплывает': 'спливає', 'тонет': 'тоне',
      'Объём тела должен быть больше нуля': 'Об’єм тіла має бути більшим за нуль',
      'Плотность жидкости должна быть больше нуля': 'Густина рідини має бути більшою за нуль',
      'Масса не может быть отрицательной': 'Маса не може бути від’ємною',
    },
  },
  es: {
    fields: {
      "volume": "Volumen del cuerpo, m³",
      "rhoFluid": "Densidad del fluido, kg/m³",
      "mass": "Masa del cuerpo, kg",
    },
    options: {},
    results: {
      "Выталкивающая сила": "Fuerza de empuje",
      "Вес тела": "Peso del cuerpo",
      "Равнодействующая": "Fuerza resultante",
      "Вытесненная масса": "Masa desplazada",
      "Поведение в жидкости": "Comportamiento en el fluido",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Н": "N",
      "кг": "kg",
      "нейтральная плавучесть": "flotabilidad neutra",
      "всплывает": "sube a flote",
      "тонет": "se hunde",
      "Объём тела должен быть больше нуля": "El volumen del cuerpo debe ser mayor que cero",
      "Плотность жидкости должна быть больше нуля": "La densidad del fluido debe ser mayor que cero",
      "Масса не может быть отрицательной": "La masa no puede ser negativa",
    },
  },
};
