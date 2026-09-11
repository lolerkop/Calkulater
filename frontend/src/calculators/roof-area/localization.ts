import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Площадь крыши': 'Roof area',
  'Площадь одного ската': 'Area of one slope',
  'Скатов': 'Slopes',
  'Площадь основания': 'Footprint area',
  'Уклон': 'Pitch',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Площадь крыши': 'Площа даху',
  'Площадь одного ската': 'Площа одного схилу',
  'Скатов': 'Схилів',
  'Площадь основания': 'Площа основи',
  'Уклон': 'Ухил',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Dachform',
      'length': 'Länge des Grundrisses, m',
      'width': 'Breite des Grundrisses, m',
      'slopeMode': 'Wie die Neigung angegeben ist',
      'angle': 'Neigung, Grad',
      'slopePercent': 'Neigung, %',
    },
    options: {
      'shed': 'Pultdach',
      'gable': 'Satteldach',
      'hip': 'Walmdach',
      'degrees': 'in Grad',
      'percent': 'in Prozent',
    },
    results: {
      'Площадь крыши': 'Dachfläche',
      'Площадь одного ската': 'Fläche einer Dachfläche',
      'Скатов': 'Dachflächen',
      'Площадь основания': 'Grundrissfläche',
      'Уклон': 'Neigung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Размеры основания должны быть больше нуля': 'Die Maße des Grundrisses müssen größer als null sein',
      'Уклон не может быть отрицательным': 'Die Neigung kann nicht negativ sein',
      'Уклон должен быть меньше 90 градусов': 'Die Neigung muss kleiner als 90 Grad sein',
    },
  },
  en: {
    fields: { mode: 'Roof shape', length: 'Footprint length, m', width: 'Footprint width, m', slopeMode: 'How the pitch is given', angle: 'Pitch, degrees', slopePercent: 'Pitch, %', },
    options: { shed: 'single-slope', gable: 'gable', hip: 'hip', degrees: 'in degrees', percent: 'as a percentage', },
    results: RESULTS_EN,
    values: {
      'Размеры основания должны быть больше нуля': 'The footprint dimensions must be greater than zero',
      'Уклон не может быть отрицательным': 'The pitch cannot be negative',
      'Уклон должен быть меньше 90 градусов': 'The pitch must be less than 90 degrees',
    },
  },
  uk: {
    fields: { mode: 'Форма даху', length: 'Довжина основи, м', width: 'Ширина основи, м', slopeMode: 'Як задано ухил', angle: 'Ухил, градусів', slopePercent: 'Ухил, %', },
    options: { shed: 'односхилий', gable: 'двосхилий', hip: 'вальмовий', degrees: 'у градусах', percent: 'у відсотках', },
    results: RESULTS_UK,
    values: {
      'Размеры основания должны быть больше нуля': 'Розміри основи мають бути більшими за нуль',
      'Уклон не может быть отрицательным': 'Ухил не може бути від’ємним',
      'Уклон должен быть меньше 90 градусов': 'Ухил має бути меншим за 90 градусів',
    },
  },
  es: {
    fields: {
      "mode": "Forma de la cubierta",
      "length": "Largo en planta, m",
      "width": "Ancho en planta, m",
      "slopeMode": "Cómo se indica la pendiente",
      "angle": "Pendiente, grados",
      "slopePercent": "Pendiente, %",
    },
    options: {
      "shed": "a un agua",
      "gable": "a dos aguas",
      "hip": "a cuatro aguas",
      "degrees": "en grados",
      "percent": "en porcentaje",
    },
    results: {
      "Площадь крыши": "Superficie de la cubierta",
      "Площадь одного ската": "Superficie de un faldón",
      "Скатов": "Faldones",
      "Площадь основания": "Superficie en planta",
      "Уклон": "Pendiente",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Размеры основания должны быть больше нуля": "Las dimensiones en planta deben ser mayores que cero",
      "Уклон не может быть отрицательным": "La pendiente no puede ser negativa",
      "Уклон должен быть меньше 90 градусов": "La pendiente debe ser menor de 90 grados",
    },
  },
};
