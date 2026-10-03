// Закон Ома. Три режима по известной паре величин.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { ohmsLawCopyEn } from './copy.en';
import { ohmsLawCopyUk } from './copy.uk';
import { ohmsLawCopyDe } from './copy.de';
import { ohmsLawCopyEs } from './copy.es';
import { ohmsLawReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ohms-law',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: ohmsLawCopyEn, uk: ohmsLawCopyUk, de: ohmsLawCopyDe, es: ohmsLawCopyEs },
  referenceCases: ohmsLawReferenceCases,
  publishedExample: { inputs: { mode: 'vi', voltage: 12, current: 2 }, expected: ['6,00 Ом'] },
  presentation: {
    id: 'ohms-law',
    name: 'Калькулятор закона Ома',
    slug: 'ohms-law',
    fullPath: '/electronics/ohms-law/',
    category: 'electronics',
    icon: 'zap',
    popularity: 46,
    isNew: false,
    shortDescription: "Напряжение, ток или сопротивление по известной паре, с расчётом мощности.",
    longDescription: "Найдите недостающую величину из напряжения, тока и сопротивления для омической нагрузки, а также рассеиваемую мощность. Известная пара выбирается явно: U и I, U и R либо I и R. Мощность — результат, а не отдельный вход. Значения считаются неотрицательными модулями; модель не описывает направление тока, нелинейную характеристику диода или изменение сопротивления при нагреве.",
    seoTitle: 'Калькулятор закона Ома — напряжение, ток, сопротивление, мощность',
    seoDescription: "Рассчитайте недостающее напряжение, ток или сопротивление и мощность омической нагрузки по двум известным величинам.",
    h1: 'Калькулятор закона Ома',
    keywords: ['закон ома калькулятор', 'напряжение ток сопротивление', 'расчёт мощности'],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'vi',
        options: [
          { value: 'vi', label: 'напряжение и ток' },
          { value: 'vr', label: 'напряжение и сопротивление' },
          { value: 'ir', label: 'ток и сопротивление' },
        ],
      },
      { name: 'voltage', label: 'Напряжение', type: 'number', unit: "V", defaultValue: 12, min: 0, step: 0.1, showIf: { field: 'mode', oneOf: ['vi', 'vr'] } },
      { name: 'current', label: 'Ток', type: 'number', unit: "A", defaultValue: 2, min: 0, step: 0.01, showIf: { field: 'mode', oneOf: ['vi', 'ir'] } },
      { name: 'resistance', label: 'Сопротивление', type: 'number', unit: "Ω", defaultValue: 6, min: 0, step: 1, showIf: { field: 'mode', oneOf: ['vr', 'ir'] } },
    ],
    resultLabels: { result: 'Результат', power: 'Мощность', voltage: 'Напряжение', current: 'Ток', resistance: 'Сопротивление' },
    howToUse: ["Выберите именно известную пару: третье поле с пометкой «вычисляется» не участвует в расчёте.", "Введите вольты, амперы и омы. Для миллиампер разделите число на 1000; 20 мА = 0,020 А.", "Сравнивайте рассчитанную мощность с допустимой мощностью компонента с учётом его условий охлаждения; номинал детали здесь не выбирается."],
    howItWorks: "U = IR; I = U/R при R > 0; R = U/I при I > 0. P = UI = I²R = U²/R для положительного R. Для постоянного тока это мощность сопротивления; для чисто активной нагрузки переменного тока используйте действующие значения U и I.",
    example: "12 В и 2 А: R = 12/2 = 6,00 Ом, P = 12 × 2 = 24,00 Вт. 5 В на сопротивлении 250 Ом дают I = 0,020 А и P = 0,10 Вт. При U = 0 и R = 100 Ом получаются I = 0 и P = 0.",
    faq: [{"q": "Можно ли задать мощность вместо напряжения?", "a": "Нет. Доступны только пары U/I, U/R и I/R; мощность рассчитывается после восстановления третьей величины."}, {"q": "Когда ноль разрешён в законе Ома?", "a": "U = 0 при R > 0 даёт нулевой ток. I = 0 при заданном R тоже допустим и даёт U = P = 0. Но поиск R по нулевому I и поиск I по нулевому R не определены."}, {"q": "Подойдёт ли расчёт для двигателя или диода?", "a": "Общий случай — нет. Для реактивной нагрузки нужна полная модель сопротивления и коэффициент мощности; у диода U/I не является постоянным омическим сопротивлением."}, {"q": "Как меняется мощность при удвоении сопротивления и том же напряжении?", "a": "Для идеального источника с постоянным U: I = U/R, P = U²/R. Удвоение R уменьшает и ток, и мощность вдвое. При 12 В и 6 Ом мощность 24 Вт; при 12 Ом — 12 Вт. При постоянном токе зависимость другая: P = I²R."}],
    disclaimer: "Идеальная омическая нагрузка с постоянным сопротивлением. Расчёт не подтверждает безопасность схемы, охлаждения или номинала компонента.",
    relatedCalculatorIds: ['led-resistor', 'convert-power', 'convert-frequency'],
  },
};
