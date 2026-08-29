import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'shape': 'Form des Behälters',
      'd': 'Durchmesser oder Seite, m',
      'len': 'Höhe oder Länge, m',
      'level': 'Füllstand, m',
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
      shape: 'Tank shape', d: 'Diameter or side, m', len: 'Height or length, m',
      level: 'Liquid level, m',
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
      shape: 'Форма ємності', d: 'Діаметр або сторона, м', len: 'Висота або довжина, м',
      level: 'Рівень рідини, м',
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
};
