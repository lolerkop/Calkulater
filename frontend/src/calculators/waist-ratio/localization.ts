import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'waist': 'Taille, cm',
      'hip': 'Hüfte, cm',
      'height': 'Größe, cm',
    },
    results: {
      'Отношение талии к росту': 'Verhältnis Taille zu Größe',
      'Отношение талии к бёдрам': 'Verhältnis Taille zu Hüfte',
      'Категория': 'Bereich',
      'Обхват талии': 'Taillenumfang',
      'Обхват бёдер': 'Hüftumfang',
      'Рост': 'Größe',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'см': 'cm',
      'ниже обычного': 'unter dem Üblichen',
      'здоровый': 'gesund',
      'повышенный': 'erhöht',
      'высокий': 'hoch',
      'Обхваты и рост должны быть больше нуля': 'Umfänge und Größe müssen größer als null sein',
      'Категория даётся по отношению талии к росту: оно сравнимо между людьми разного роста. Простое правило — талия меньше половины роста.': 'Der Bereich folgt dem Verhältnis von Taille zu Größe, denn es lässt sich zwischen Menschen verschiedener Größe vergleichen. Die einfache Regel lautet: Taille unter der halben Größe.',
    },
  },
  en: {
    fields: { "waist": "Waist, cm", "hip": "Hip, cm", "height": "Height, cm" },
    options: {},
    results: {
      "Отношение талии к росту": "Waist-to-height ratio",
      "Отношение талии к бёдрам": "Waist-to-hip ratio",
      "Категория": "Band",
      "Обхват талии": "Waist",
      "Обхват бёдер": "Hip",
      "Рост": "Height",
      "Проверьте данные": "Check the values",
    },
    values: {
      "см": "cm",
      "ниже обычного": "below usual", "здоровый": "healthy", "повышенный": "increased", "высокий": "high",
      "Обхваты и рост должны быть больше нуля": "The measurements and height must be greater than zero",
      "Категория даётся по отношению талии к росту: оно сравнимо между людьми разного роста. Простое правило — талия меньше половины роста.": "The band comes from the waist-to-height ratio, which compares across people of different heights. The simple rule is: waist under half your height.",
    },
  },
  uk: {
    fields: { "waist": "Талія, см", "hip": "Стегна, см", "height": "Зріст, см" },
    options: {},
    results: {
      "Отношение талии к росту": "Відношення талії до зросту",
      "Отношение талии к бёдрам": "Відношення талії до стегон",
      "Категория": "Категорія",
      "Обхват талии": "Обхват талії",
      "Обхват бёдер": "Обхват стегон",
      "Рост": "Зріст",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "см": "см",
      "ниже обычного": "нижче звичного", "здоровый": "здоровий", "повышенный": "підвищений", "высокий": "високий",
      "Обхваты и рост должны быть больше нуля": "Обхвати і зріст мають бути більшими за нуль",
      "Категория даётся по отношению талии к росту: оно сравнимо между людьми разного роста. Простое правило — талия меньше половины роста.": "Категорія дається за відношенням талії до зросту: воно порівнянне між людьми різного зросту. Просте правило — талія менша за половину зросту.",
    },
  },
};
