// Соотношение сторон: сокращение разрешения и поиск недостающей стороны.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { aspectRatioCopyEn } from './copy.en';
import { aspectRatioCopyUk } from './copy.uk';
import { aspectRatioCopyDe } from './copy.de';
import { aspectRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'aspect-ratio',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: aspectRatioCopyEn, uk: aspectRatioCopyUk, de: aspectRatioCopyDe },
  referenceCases: aspectRatioReferenceCases,
  publishedExample: { inputs: { mode: 'reduce', width: 1920, height: 1080 }, expected: ['16:9'] },
  presentation: {
    id: 'aspect-ratio',
    name: 'Калькулятор соотношения сторон',
    slug: 'aspect-ratio',
    fullPath: '/computers/aspect-ratio/',
    category: 'computers',
    icon: 'monitor',
    popularity: 34,
    isNew: false,
    shortDescription: 'Сокращает разрешение до соотношения и находит недостающую сторону.',
    longDescription:
      'Делит ширину и высоту на их наибольший общий делитель и даёт точное соотношение, а также решает обратную задачу: по соотношению и одной стороне находит вторую. Рядом показано ближайшее распространённое соотношение, потому что точное сокращение и число на коробке монитора совпадают не всегда.',
    seoTitle: 'Калькулятор соотношения сторон — разрешение и пропорция',
    seoDescription:
      'Сократите разрешение экрана до соотношения сторон или найдите недостающую ширину либо высоту для нужной пропорции.',
    h1: 'Калькулятор соотношения сторон',
    keywords: ['соотношение сторон', 'калькулятор разрешения', '16:9 пропорция'],
    fields: [
      {
        name: 'mode', label: 'Что считаем', type: 'select', defaultValue: 'reduce',
        options: [
          { value: 'reduce', label: 'соотношение из разрешения' },
          { value: 'side', label: 'недостающая сторона по соотношению' },
        ],
      },
      { name: 'width', label: 'Ширина, пикс', type: 'number', defaultValue: 1920, min: 1, step: 1, showIf: { field: 'mode', equals: 'reduce' } },
      { name: 'height', label: 'Высота, пикс', type: 'number', defaultValue: 1080, min: 1, step: 1, showIf: { field: 'mode', equals: 'reduce' } },
      { name: 'ratioW', label: 'Ширина соотношения', type: 'number', defaultValue: 16, min: 1, step: 1, showIf: { field: 'mode', equals: 'side' } },
      { name: 'ratioH', label: 'Высота соотношения', type: 'number', defaultValue: 9, min: 1, step: 1, showIf: { field: 'mode', equals: 'side' } },
      {
        name: 'known', label: 'Известная сторона', type: 'select', defaultValue: 'width',
        options: [
          { value: 'width', label: 'ширина' },
          { value: 'height', label: 'высота' },
        ],
        showIf: { field: 'mode', equals: 'side' },
      },
      { name: 'side', label: 'Значение известной стороны, пикс', type: 'number', defaultValue: 1280, min: 1, step: 1, showIf: { field: 'mode', equals: 'side' } },
    ],
    resultLabels: { result: 'Соотношение сторон', decimal: 'Десятичное отношение', divisor: 'Наибольший общий делитель', nearest: 'Ближайшее распространённое' },
    howToUse: ['Выберите, что у вас есть: разрешение или соотношение.', 'Введите известные значения.', 'Прочитайте точное соотношение или недостающую сторону.'],
    howItWorks:
      'Соотношение — это ширина и высота, делённые на их наибольший общий делитель. Недостающая сторона равна известной, умноженной на противоположную часть соотношения и делённой на свою.',
    example: 'У 1920 и 1080 общий делитель 120, и пара сокращается до 16:9.',
    faq: [
      { q: 'Почему 2560×1080 даёт 64:27?', a: 'Это точное сокращение на наибольший общий делитель. Привычное 21:9 — маркетинговое округление, и оно показано отдельной строкой.' },
      { q: 'Что если недостающая сторона не целая?', a: 'Ответом показывается округлённое число пикселей, а рядом стоит точное значение, чтобы было видно величину округления.' },
      { q: 'Поддерживаются ли неквадратные пиксели?', a: 'Нет. Расчёт исходит из квадратного пикселя, как во всех современных форматах изображения.' },
      { q: 'Подходит ли калькулятор для картинок, а не экранов?', a: 'Да, арифметика одинакова для любой пары размеров в пикселях.' },
    ],
    relatedCalculatorIds: ['fps-frametime', 'download-time', 'convert-length'],
  },
};
