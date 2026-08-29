// Сколько файлов заданного размера поместится на носитель.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { filesOnDiskCopyEn } from './copy.en';
import { filesOnDiskCopyUk } from './copy.uk';
import { filesOnDiskCopyDe } from './copy.de';
import { filesOnDiskReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "files-on-disk",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: filesOnDiskCopyEn, uk: filesOnDiskCopyUk, de: filesOnDiskCopyDe },
  referenceCases: filesOnDiskReferenceCases,
  publishedExample: { inputs: { capacity: 1000, capacityUnit: 'gb', fileSize: 4, fileUnit: 'mb' }, expected: ["250 000"] },
  presentation: {
    id: "files-on-disk",
    name: "Калькулятор количества файлов на носителе",
    slug: "files-on-disk",
    fullPath: "/computers/files-on-disk/",
    category: "computers",
    icon: "monitor",
    popularity: 31,
    isNew: false,
    shortDescription: "Сколько файлов заданного размера влезет на диск или карту.",
    longDescription:
      "Делит ёмкость носителя на размер файла и округляет вниз, потому что неполный файл не помещается. Десятичные и двоичные приставки вынесены в отдельные варианты, а не приняты допущением: производитель пишет терабайт как десять в двенадцатой, система показывает тебибайты, и ровно отсюда берётся впечатление пропавшего места.",
    seoTitle: "Калькулятор файлов на носителе — сколько поместится",
    seoDescription:
      "Узнайте, сколько файлов заданного размера поместится на носитель, с разделением десятичных и двоичных единиц.",
    h1: "Калькулятор количества файлов на носителе",
    keywords: ["сколько файлов поместится", "ёмкость накопителя", "размер файла"],
    fields: [
      { name: 'capacity', label: 'Ёмкость носителя', type: 'number', defaultValue: 1, min: 0, step: 1 },
      {
        name: 'capacityUnit', label: 'Единица ёмкости', type: 'select', defaultValue: 'gb',
        options: [
          { value: 'mb', label: 'МБ (10⁶)' },
          { value: 'gb', label: 'ГБ (10⁹)' },
          { value: 'tb', label: 'ТБ (10¹²)' },
          { value: 'mib', label: 'МиБ (1024²)' },
          { value: 'gib', label: 'ГиБ (1024³)' },
          { value: 'tib', label: 'ТиБ (1024⁴)' },
        ],
      },
      { name: 'fileSize', label: 'Размер файла', type: 'number', defaultValue: 4, min: 0, step: 1 },
      {
        name: 'fileUnit', label: 'Единица файла', type: 'select', defaultValue: 'mb',
        options: [
          { value: 'kb', label: 'КБ (1000)' },
          { value: 'mb', label: 'МБ (10⁶)' },
          { value: 'gb', label: 'ГБ (10⁹)' },
          { value: 'kib', label: 'КиБ (1024)' },
          { value: 'mib', label: 'МиБ (1024²)' },
          { value: 'gib', label: 'ГиБ (1024³)' },
        ],
      },
      { name: 'reserved', label: 'Служебный резерв, %', type: 'number', defaultValue: 0, min: 0, max: 99, step: 1 },
    ],
    resultLabels: { result: "Поместится файлов", exact: "Точное частное", left: "Останется свободно", usable: "Доступно под файлы" },
    howToUse: ["Введите ёмкость носителя и выберите единицу.", "Введите размер файла и его единицу.", "Добавьте резерв, если часть места занята."],
    howItWorks: "Доступное место — это ёмкость за вычетом резерва; количество равно частному от деления на размер файла с округлением вниз.",
    example: "На носитель 1000 ГБ помещается 250 000 файлов по 4 МБ.",
    faq: [
      { q: "Почему диск показывает меньше, чем написано на коробке?", a: "На коробке терабайт считают как десять в двенадцатой байт, а система показывает тебибайты по 1024⁴. Разница около девяти процентов, и это не потерянное место." },
      { q: "Вычитаются ли накладные расходы файловой системы?", a: "Автоматически — нет. Размер кластера и метаданные зависят от файловой системы, поэтому поле резерва позволяет учесть их явно." },
      { q: "Что если файл больше носителя?", a: "Ответом будет ноль, и это корректный результат, а не ошибка." },
      { q: "Считается, что все файлы одинаковы?", a: "Да. Расчёт отвечает, сколько поместится файлов одного заданного размера, а не как уложится смешанная коллекция." },
    ],
    relatedCalculatorIds: ["download-time", "network-bandwidth", "convert-digital"],
  },
};
