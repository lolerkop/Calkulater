import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'displacement': 'Hubraum eines Zylinders, cm³',
      'chamber': 'Brennraumvolumen, cm³',
    },
    results: {
      'Степень сжатия': 'Verdichtungsverhältnis',
      'Полный объём цилиндра': 'Gesamtvolumen des Zylinders',
      'Объём камеры сгорания': 'Brennraumvolumen',
      'Рабочий объём цилиндра': 'Hubraum eines Zylinders',
      'Записью': 'Geschrieben als',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'см³': 'cm³',
      'Рабочий объём цилиндра должен быть больше нуля': 'Der Hubraum eines Zylinders muss größer als null sein',
      'Объём камеры сгорания должен быть больше нуля': 'Das Brennraumvolumen muss größer als null sein',
    },
  },
  en: {
    fields: { displacement: 'Cylinder swept volume, cm³', chamber: 'Combustion chamber volume, cm³' },
    options: {},
    results: {
      'Степень сжатия': 'Compression ratio', 'Полный объём цилиндра': 'Total cylinder volume',
      'Объём камеры сгорания': 'Combustion chamber volume', 'Рабочий объём цилиндра': 'Cylinder swept volume',
      'Записью': 'Written as', 'Проверьте данные': 'Check the values',
    },
    values: {
      'см³': 'cm³',
      'Рабочий объём цилиндра должен быть больше нуля': 'The swept volume must be greater than zero',
      'Объём камеры сгорания должен быть больше нуля': 'The chamber volume must be greater than zero',
    },
  },
  uk: {
    fields: { displacement: 'Робочий об’єм циліндра, см³', chamber: 'Об’єм камери згоряння, см³' },
    options: {},
    results: {
      'Степень сжатия': 'Ступінь стиснення', 'Полный объём цилиндра': 'Повний об’єм циліндра',
      'Объём камеры сгорания': 'Об’єм камери згоряння', 'Рабочий объём цилиндра': 'Робочий об’єм циліндра',
      'Записью': 'Записом', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'см³': 'см³',
      'Рабочий объём цилиндра должен быть больше нуля': 'Робочий об’єм циліндра має бути більшим за нуль',
      'Объём камеры сгорания должен быть больше нуля': 'Об’єм камери згоряння має бути більшим за нуль',
    },
  },
  es: {
    fields: {
      "displacement": "Cilindrada de un cilindro, cm³",
      "chamber": "Volumen de la cámara de combustión, cm³",
    },
    options: {},
    results: {
      "Степень сжатия": "Relación de compresión",
      "Полный объём цилиндра": "Volumen total del cilindro",
      "Объём камеры сгорания": "Volumen de la cámara de combustión",
      "Рабочий объём цилиндра": "Cilindrada del cilindro",
      "Записью": "Escrito como",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "см³": "cm³",
      "Рабочий объём цилиндра должен быть больше нуля": "La cilindrada del cilindro debe ser mayor que cero",
      "Объём камеры сгорания должен быть больше нуля": "El volumen de la cámara debe ser mayor que cero",
    },
  },
};
