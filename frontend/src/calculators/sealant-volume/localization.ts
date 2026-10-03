import { addBuildingWave16Messages } from '../rafters/buildingWave16Messages';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'width': "Fugenbreite",
      'depth': "Fugentiefe",
      'length': "Fugenlänge",
      'cart': "Inhalt der Kartusche",
      'waste': "Zuschlag",
    },
    results: {
      'Нужно герметика': 'Nötiger Dichtstoff',
      'Без запаса': 'Ohne Zuschlag',
      'Картриджей': 'Kartuschen',
      'Метров из одного картриджа': 'Meter je Kartusche',
      'Сечение шва': 'Fugenquerschnitt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мл': 'ml',
      'шт': 'Stk',
      'м': 'm',
      'мм²': 'mm²',
      'Ширина шва должна быть больше нуля': 'Die Fugenbreite muss größer als null sein',
      'Глубина шва должна быть больше нуля': 'Die Fugentiefe muss größer als null sein',
      'Длина шва должна быть больше нуля': 'Die Fugenlänge muss größer als null sein',
      'Объём картриджа должен быть больше нуля': 'Der Inhalt der Kartusche muss größer als null sein',
      'Запас не может быть отрицательным': 'Der Zuschlag kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      width: "Joint width", depth: "Joint depth", length: "Joint length",
      cart: "Cartridge volume", waste: "Allowance",
    },
    options: {},
    results: {
      'Нужно герметика': 'Sealant needed', 'Без запаса': 'Without allowance',
      'Картриджей': 'Cartridges', 'Метров из одного картриджа': 'Metres per cartridge',
      'Сечение шва': 'Joint section', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мл': 'mL', 'шт': 'pcs', 'м': 'm', 'мм²': 'mm²',
      'Ширина шва должна быть больше нуля': 'The joint width must be greater than zero',
      'Глубина шва должна быть больше нуля': 'The joint depth must be greater than zero',
      'Длина шва должна быть больше нуля': 'The joint length must be greater than zero',
      'Объём картриджа должен быть больше нуля': 'The cartridge volume must be greater than zero',
      'Запас не может быть отрицательным': 'The allowance cannot be negative',
    },
  },
  uk: {
    fields: {
      width: "Ширина шва", depth: "Глибина шва", length: "Довжина шва",
      cart: "Обʼєм картриджа", waste: "Запас",
    },
    options: {},
    results: {
      'Нужно герметика': 'Потрібно герметика', 'Без запаса': 'Без запасу',
      'Картриджей': 'Картриджів', 'Метров из одного картриджа': 'Метрів з одного картриджа',
      'Сечение шва': 'Переріз шва', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мл': 'мл', 'шт': 'шт', 'м': 'м', 'мм²': 'мм²',
      'Ширина шва должна быть больше нуля': 'Ширина шва має бути більшою за нуль',
      'Глубина шва должна быть больше нуля': 'Глибина шва має бути більшою за нуль',
      'Длина шва должна быть больше нуля': 'Довжина шва має бути більшою за нуль',
      'Объём картриджа должен быть больше нуля': 'Обʼєм картриджа має бути більшим за нуль',
      'Запас не может быть отрицательным': 'Запас не може бути відʼємним',
    },
  },
  es: {
    fields: {
      "width": "Ancho de la junta",
      "depth": "Profundidad de la junta",
      "length": "Longitud de la junta",
      "cart": "Volumen del cartucho",
      "waste": "Margen",
    },
    options: {},
    results: {
      "Нужно герметика": "Sellador necesario",
      "Без запаса": "Sin margen",
      "Картриджей": "Cartuchos",
      "Метров из одного картриджа": "Metros por cartucho",
      "Сечение шва": "Sección de la junta",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "мл": "ml",
      "шт": "uds.",
      "м": "m",
      "мм²": "mm²",
      "Ширина шва должна быть больше нуля": "El ancho de la junta debe ser mayor que cero",
      "Глубина шва должна быть больше нуля": "La profundidad de la junta debe ser mayor que cero",
      "Длина шва должна быть больше нуля": "La longitud de la junta debe ser mayor que cero",
      "Объём картриджа должен быть больше нуля": "El volumen del cartucho debe ser mayor que cero",
      "Запас не может быть отрицательным": "El margen no puede ser negativo",
    },
  },
};

addBuildingWave16Messages(localization);
