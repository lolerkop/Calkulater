import { addBuildingWave16Messages } from '../rafters/buildingWave16Messages';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': "Beheizte Fläche",
      'step': "Verlegeabstand",
      'loopMax': "Höchstlänge eines Heizkreises",
      'edgeZone': "Fläche der Randzone",
      'edgeStep': "Verlegeabstand in der Randzone",
      'waste': "Zuschlag",
    },
    results: {
      'Длина трубы': 'Rohrlänge',
      'Петель': 'Heizkreise',
      'На петлю': 'Je Heizkreis',
      'Площадь': 'Fläche',
      'Основная зона': 'Hauptzone',
      'Краевая зона': 'Randzone',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'м²': 'm²',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Шаг укладки должен быть больше нуля': 'Der Verlegeabstand muss größer als null sein',
      'Предельная длина петли должна быть больше нуля': 'Die Höchstlänge eines Heizkreises muss größer als null sein',
      'Краевая зона должна быть меньше всей площади': 'Die Randzone muss kleiner als die ganze Fläche sein',
      'Запас должен быть от 0 до 50 %': 'Der Zuschlag muss zwischen 0 und 50 % liegen',
    },
  },
  en: {
    fields: {
      "area": "Heated area", "step": "Pipe spacing", "loopMax": "Maximum loop length",
      "edgeZone": "Edge zone area", "edgeStep": "Edge zone spacing", "waste": "Allowance",
    },
    options: {},
    results: {
      "Длина трубы": "Pipe length",
      "Петель": "Loops",
      "На петлю": "Per loop",
      "Площадь": "Area",
      "Основная зона": "Main zone",
      "Краевая зона": "Edge zone",
      "Проверьте данные": "Check the values",
    },
    values: {
      "м": "m", "м²": "m²",
      "Площадь должна быть больше нуля": "The area must be greater than zero",
      "Шаг укладки должен быть больше нуля": "The pipe spacing must be greater than zero",
      "Предельная длина петли должна быть больше нуля": "The maximum loop length must be greater than zero",
      "Краевая зона должна быть меньше всей площади": "The edge zone must be smaller than the whole area",
      "Запас должен быть от 0 до 50 %": "The allowance must be between 0 and 50 %",
    },
  },
  uk: {
    fields: {
      "area": "Площа обігріву", "step": "Крок укладання", "loopMax": "Гранична довжина петлі",
      "edgeZone": "Площа краєвої зони", "edgeStep": "Крок у краєвій зоні", "waste": "Запас",
    },
    options: {},
    results: {
      "Длина трубы": "Довжина труби",
      "Петель": "Петель",
      "На петлю": "На петлю",
      "Площадь": "Площа",
      "Основная зона": "Основна зона",
      "Краевая зона": "Краєва зона",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м": "м", "м²": "м²",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Шаг укладки должен быть больше нуля": "Крок укладання має бути більшим за нуль",
      "Предельная длина петли должна быть больше нуля": "Гранична довжина петлі має бути більшою за нуль",
      "Краевая зона должна быть меньше всей площади": "Краєва зона має бути меншою за всю площу",
      "Запас должен быть от 0 до 50 %": "Запас має бути від 0 до 50 %",
    },
  },
  es: {
    fields: {
      "area": "Superficie calefactada",
      "step": "Separación del tubo",
      "loopMax": "Longitud máxima del circuito",
      "edgeZone": "Superficie de la zona perimetral",
      "edgeStep": "Separación en la zona perimetral",
      "waste": "Margen",
    },
    options: {},
    results: {
      "Длина трубы": "Longitud de tubo",
      "Петель": "Circuitos",
      "На петлю": "Por circuito",
      "Площадь": "Superficie",
      "Основная зона": "Zona principal",
      "Краевая зона": "Zona perimetral",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "м": "m",
      "м²": "m²",
      "Площадь должна быть больше нуля": "La superficie debe ser mayor que cero",
      "Шаг укладки должен быть больше нуля": "La separación del tubo debe ser mayor que cero",
      "Предельная длина петли должна быть больше нуля": "La longitud máxima del circuito debe ser mayor que cero",
      "Краевая зона должна быть меньше всей площади": "La zona perimetral debe ser menor que toda la superficie",
      "Запас должен быть от 0 до 50 %": "El margen debe estar entre 0 y 50 %",
    },
  },
};

addBuildingWave16Messages(localization);
