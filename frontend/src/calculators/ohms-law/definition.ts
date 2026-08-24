// Закон Ома. Три режима по известной паре величин.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { ohmsLawCopyEn } from './copy.en';
import { ohmsLawCopyUk } from './copy.uk';
import { ohmsLawReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ohms-law',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: ohmsLawCopyEn, uk: ohmsLawCopyUk },
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
    shortDescription: 'Напряжение, ток, сопротивление и мощность по любой известной паре.',
    longDescription:
      'Решает закон Ома в нужную сторону: задайте любые две величины из трёх — напряжение, ток или сопротивление, — и третья находится сама, вместе с рассеиваемой мощностью. Делитель выбранного режима проверяется первым: деление на нулевой ток или нулевое сопротивление вернуло бы бесконечность под видом ответа.',
    seoTitle: 'Калькулятор закона Ома — напряжение, ток, сопротивление, мощность',
    seoDescription:
      'Рассчитайте напряжение, ток, сопротивление или мощность по закону Ома, зная любые две величины.',
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
      { name: 'voltage', label: 'Напряжение, В', type: 'number', defaultValue: 12, min: 0, step: 0.1 },
      { name: 'current', label: 'Ток, А', type: 'number', defaultValue: 2, min: 0, step: 0.01 },
      { name: 'resistance', label: 'Сопротивление, Ом', type: 'number', defaultValue: 6, min: 0, step: 1 },
    ],
    resultLabels: { result: 'Результат', power: 'Мощность', voltage: 'Напряжение', current: 'Ток', resistance: 'Сопротивление' },
    howToUse: ['Выберите, какая пара величин вам известна.', 'Введите эти две величины.', 'Прочитайте недостающую величину и мощность.'],
    howItWorks: 'U = I × R, отсюда I = U ÷ R и R = U ÷ I; мощность считается как P = U × I.',
    example: 'Напряжение 12 В при токе 2 А означает сопротивление 6 Ом и мощность 24 Вт.',
    faq: [
      { q: 'Почему нулевой ток не принимается?', a: 'Сопротивление — это напряжение, делённое на ток. При нулевом токе деление не имеет значения, и о сопротивлении ничего сказать нельзя.' },
      { q: 'А нулевое напряжение допустимо?', a: 'Да. Схема без напряжения не проводит ток и не рассеивает мощность — это реальное состояние, а не ошибка ввода.' },
      { q: 'Подходит ли расчёт для переменного тока?', a: 'Только для чисто активной нагрузки. Реактивное сопротивление и коэффициент мощности здесь не учитываются.' },
      { q: 'По какой формуле считается мощность?', a: 'P = U × I, уже после того как найдена недостающая величина, поэтому результат согласован во всех трёх режимах.' },
    ],
    relatedCalculatorIds: ['led-resistor', 'convert-power', 'convert-frequency'],
  },
};
