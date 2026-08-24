// Время загрузки файла. Биты и байты, десятичные и двоичные приставки — явно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { downloadTimeCopyEn } from './copy.en';
import { downloadTimeCopyUk } from './copy.uk';
import { downloadTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'download-time',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: downloadTimeCopyEn, uk: downloadTimeCopyUk },
  referenceCases: downloadTimeReferenceCases,
  publishedExample: { inputs: { size: 1, sizeUnit: 'gb', speed: 100, speedUnit: 'mbit' }, expected: ['1:20'] },
  presentation: {
    id: 'download-time',
    name: 'Калькулятор времени загрузки файла',
    slug: 'download-time',
    fullPath: '/computers/download-time/',
    category: 'computers',
    icon: 'monitor',
    popularity: 44,
    isNew: false,
    shortDescription: 'Сколько будет качаться файл на вашей скорости.',
    longDescription:
      'Переводит размер файла в биты, делит на скорость канала и показывает время. Десятичные приставки вроде МБ и двоичные вроде МиБ вынесены в отдельные варианты, а не спрятаны в допущение; то же сделано для скорости в битах и в байтах. Результат теоретический: накладные расходы протокола в него не подмешиваются.',
    seoTitle: 'Калькулятор времени загрузки файла — размер и скорость',
    seoDescription:
      'Рассчитайте время загрузки файла по его размеру и скорости соединения, с явным разделением десятичных и двоичных единиц.',
    h1: 'Калькулятор времени загрузки файла',
    keywords: ['время загрузки файла', 'калькулятор скорости загрузки', 'сколько качать файл'],
    fields: [
      { name: 'size', label: 'Размер файла', type: 'number', defaultValue: 1, min: 0, step: 0.1 },
      {
        name: 'sizeUnit', label: 'Единица размера', type: 'select', defaultValue: 'gb',
        options: [
          { value: 'kb', label: 'КБ (1000 байт)' },
          { value: 'mb', label: 'МБ (10⁶ байт)' },
          { value: 'gb', label: 'ГБ (10⁹ байт)' },
          { value: 'tb', label: 'ТБ (10¹² байт)' },
          { value: 'kib', label: 'КиБ (1024 байта)' },
          { value: 'mib', label: 'МиБ (1024² байта)' },
          { value: 'gib', label: 'ГиБ (1024³ байта)' },
          { value: 'tib', label: 'ТиБ (1024⁴ байта)' },
        ],
      },
      { name: 'speed', label: 'Скорость соединения', type: 'number', defaultValue: 100, min: 0, step: 1 },
      {
        name: 'speedUnit', label: 'Единица скорости', type: 'select', defaultValue: 'mbit',
        options: [
          { value: 'kbit', label: 'Кбит/с' },
          { value: 'mbit', label: 'Мбит/с' },
          { value: 'gbit', label: 'Гбит/с' },
          { value: 'mbyte', label: 'МБ/с' },
        ],
      },
    ],
    resultLabels: { result: 'Время загрузки', seconds: 'Всего секунд', size: 'Размер файла', speed: 'Скорость канала' },
    howToUse: ['Введите размер файла и выберите его единицу.', 'Введите скорость соединения и её единицу.', 'Прочитайте время, за которое файл скачается.'],
    howItWorks: 'Биты = байты × 8, время = биты ÷ скорость канала в битах в секунду.',
    example: 'Файл 1 ГБ на канале 100 Мбит/с качается 8 000 000 000 ÷ 100 000 000 = 80 секунд.',
    faq: [
      { q: 'Почему реальная загрузка идёт дольше?', a: 'Показан теоретический минимум. Накладные расходы протокола, ограничения сервера и общая загруженность канала снижают реальную скорость.' },
      { q: 'Чем МБ отличается от МиБ?', a: 'Мегабайт — миллион байт, мебибайт — 1 048 576. Разница около пяти процентов и растёт вместе с размером файла.' },
      { q: 'Почему делим на биты, а не на байты?', a: 'Скорость канала указывают в битах в секунду, а файлы измеряют в байтах, поэтому одну сторону приходится переводить. Умножение байт на восемь это и делает.' },
      { q: 'Можно ли задать скорость в мегабайтах в секунду?', a: 'Да, МБ/с есть среди вариантов и переводится в биты внутри расчёта.' },
    ],
    relatedCalculatorIds: ['fps-frametime', 'aspect-ratio', 'convert-data-rate'],
  },
};
