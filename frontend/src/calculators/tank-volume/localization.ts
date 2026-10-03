import { addBuildingWave16Messages } from '../rafters/buildingWave16Messages';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'shape': 'Form des Behälters',
      'd': "Durchmesser oder Seite",
      'len': "Höhe oder Länge",
      'level': "Füllstand",
    },
    options: {
      'vertical-cylinder': 'stehender Zylinder',
      'horizontal-cylinder': 'liegender Behälter',
      'rect': 'rechteckig',
      'capsule': 'Kapsel',
    },
    results: {
      'Объём налитого': 'Eingefüllte Menge',
      'Полный объём': 'Gesamtvolumen',
      'Заполнено': 'Gefüllt',
      'В литрах': 'In Litern',
      'Свободно': 'Freier Raum',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м³': 'm³',
      'л': 'l',
      'Неизвестная форма ёмкости': 'Unbekannte Form des Behälters',
      'Размер сечения должен быть больше нуля': 'Das Querschnittsmaß muss größer als null sein',
      'Длина или высота должна быть больше нуля': 'Länge oder Höhe muss größer als null sein',
      'Уровень не может быть отрицательным': 'Der Füllstand kann nicht negativ sein',
      'Уровень не может быть выше самой ёмкости': 'Der Füllstand kann den Behälter nicht übersteigen',
    },
  },
  en: {
    fields: {
      shape: 'Tank shape', d: "Diameter or side", len: "Height or length",
      level: "Liquid level",
    },
    options: {
      'vertical-cylinder': 'vertical cylinder', 'horizontal-cylinder': 'horizontal tank',
      rect: 'rectangular', capsule: 'capsule',
    },
    results: {
      'Объём налитого': 'Filled volume', 'Полный объём': 'Full volume', 'Заполнено': 'Filled',
      'В литрах': 'In litres', 'Свободно': 'Free space', 'Проверьте данные': 'Check the values',
    },
    values: {
      'м³': 'm³', 'л': 'L',
      'Неизвестная форма ёмкости': 'Unknown tank shape',
      'Размер сечения должен быть больше нуля': 'The cross-section size must be greater than zero',
      'Длина или высота должна быть больше нуля': 'The length or height must be greater than zero',
      'Уровень не может быть отрицательным': 'The level cannot be negative',
      'Уровень не может быть выше самой ёмкости': 'The level cannot exceed the tank itself',
    },
  },
  uk: {
    fields: {
      shape: 'Форма ємності', d: "Діаметр або сторона", len: "Висота або довжина",
      level: "Рівень рідини",
    },
    options: {
      'vertical-cylinder': 'вертикальний циліндр', 'horizontal-cylinder': 'горизонтальна цистерна',
      rect: 'прямокутна', capsule: 'капсула',
    },
    results: {
      'Объём налитого': 'Обʼєм налитого', 'Полный объём': 'Повний обʼєм', 'Заполнено': 'Заповнено',
      'В литрах': 'У літрах', 'Свободно': 'Вільно', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м³': 'м³', 'л': 'л',
      'Неизвестная форма ёмкости': 'Невідома форма ємності',
      'Размер сечения должен быть больше нуля': 'Розмір перерізу має бути більшим за нуль',
      'Длина или высота должна быть больше нуля': 'Довжина або висота має бути більшою за нуль',
      'Уровень не может быть отрицательным': 'Рівень не може бути відʼємним',
      'Уровень не может быть выше самой ёмкости': 'Рівень не може перевищувати саму ємність',
    },
  },
  es: {
    fields: {
      "shape": "Forma del depósito",
      "d": "Diámetro o lado",
      "len": "Altura o longitud",
      "level": "Nivel del líquido",
    },
    options: {
      "vertical-cylinder": "cilindro vertical",
      "horizontal-cylinder": "depósito horizontal",
      "rect": "rectangular",
      "capsule": "cápsula",
    },
    results: {
      "Объём налитого": "Volumen contenido",
      "Полный объём": "Volumen total",
      "Заполнено": "Llenado",
      "В литрах": "En litros",
      "Свободно": "Espacio libre",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "м³": "m³",
      "л": "l",
      "Неизвестная форма ёмкости": "Forma de depósito desconocida",
      "Размер сечения должен быть больше нуля": "La dimensión de la sección debe ser mayor que cero",
      "Длина или высота должна быть больше нуля": "La longitud o la altura debe ser mayor que cero",
      "Уровень не может быть отрицательным": "El nivel no puede ser negativo",
      "Уровень не может быть выше самой ёмкости": "El nivel no puede superar al propio depósito",
    },
  },
};

addBuildingWave16Messages(localization);
