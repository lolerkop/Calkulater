// FPS и время кадра. Две обратные величины, один переключатель направления.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { fpsFrametimeCopyEn } from './copy.en';
import { fpsFrametimeCopyUk } from './copy.uk';
import { fpsFrametimeCopyDe } from './copy.de';
import { fpsFrametimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'fps-frametime',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: fpsFrametimeCopyEn, uk: fpsFrametimeCopyUk, de: fpsFrametimeCopyDe },
  referenceCases: fpsFrametimeReferenceCases,
  publishedExample: { inputs: { mode: 'fps', fps: 60 }, expected: ['16,667 мс'] },
  presentation: {
    id: 'fps-frametime',
    name: 'Калькулятор FPS и времени кадра',
    slug: 'fps-frametime',
    fullPath: '/computers/fps-frametime/',
    category: 'computers',
    icon: 'monitor',
    popularity: 36,
    isNew: false,
    shortDescription: 'Перевод между кадрами в секунду и миллисекундами на кадр.',
    longDescription:
      'Частота кадров и время кадра — обратные величины: тысяча миллисекунд, делённая на частоту, даёт длительность одного кадра. Оба направления считаются этой единственной формулой, а справочная строка показывает распространённые частоты рядом, чтобы цель было с чем сравнить.',
    seoTitle: 'Калькулятор FPS и времени кадра — миллисекунды на кадр',
    seoDescription:
      'Переведите кадры в секунду во время кадра в миллисекундах и обратно, с таблицей распространённых частот.',
    h1: 'Калькулятор FPS и времени кадра',
    keywords: ['fps в миллисекунды', 'калькулятор времени кадра', 'frame time'],
    fields: [
      {
        name: 'mode', label: 'Направление', type: 'select', defaultValue: 'fps',
        options: [
          { value: 'fps', label: 'частота → время кадра' },
          { value: 'ms', label: 'время кадра → частота' },
        ],
      },
      { name: 'fps', label: 'Частота кадров', type: 'number', defaultValue: 60, unit: 'FPS', min: 0, step: 1 },
      { name: 'frameTime', label: 'Время кадра, мс', type: 'number', defaultValue: 16.667, min: 0, step: 0.001 },
    ],
    resultLabels: { result: 'Результат', fps: 'Частота кадров', frameTime: 'Время кадра', perMinute: 'Кадров за минуту' },
    howToUse: ['Выберите нужное направление перевода.', 'Введите известную величину.', 'Прочитайте результат и строку сравнения.'],
    howItWorks: 'Время кадра в мс = 1000 ÷ частота кадров, и наоборот частота = 1000 ÷ время кадра.',
    example: '60 FPS означает, что каждый кадр длится 1000 ÷ 60 = 16,667 миллисекунды.',
    faq: [
      { q: 'Почему 60 FPS — это не ровно 16 мс?', a: 'Тысяча не делится на шестьдесят нацело. Точное значение 16,667 мс, и округление до 16 набегало бы на целый кадр за несколько секунд.' },
      { q: 'Всегда ли большая частота означает меньшее время кадра?', a: 'Да, это строго обратные величины: одна падает ровно настолько, насколько растёт другая.' },
      { q: 'Это то же самое, что 1% low?', a: 'Нет. Здесь средняя связь частоты и времени, а перцентили требуют полного журнала кадров.' },
      { q: 'Почему ноль не принимается?', a: 'Деление на ноль не имеет значения: нулевая частота означает отсутствие картинки, а нулевое время кадра — отсутствие самого кадра.' },
    ],
    relatedCalculatorIds: ['aspect-ratio', 'download-time', 'convert-frequency'],
  },
};
