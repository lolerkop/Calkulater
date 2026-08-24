// Уравнение состояния идеального газа: PV = nRT.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { idealGasLawCopyEn } from './copy.en';
import { idealGasLawCopyUk } from './copy.uk';
import { idealGasLawReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ideal-gas-law',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: idealGasLawCopyEn, uk: idealGasLawCopyUk },
  referenceCases: idealGasLawReferenceCases,
  publishedExample: {
    inputs: { solve: 'p', n: 2, tempUnit: 'k', t: 300, volumeUnit: 'm3', v: 0.05, pressureUnit: 'pa' },
    expected: ['99 773,55 Па'],
  },
  presentation: {
    id: 'ideal-gas-law',
    name: 'Калькулятор уравнения состояния идеального газа',
    slug: 'ideal-gas-law',
    fullPath: '/chemistry/ideal-gas-law/',
    category: 'chemistry',
    icon: 'flask',
    popularity: 40,
    isNew: false,
    shortDescription: 'PV = nRT: давление или объём газа по остальным величинам.',
    longDescription:
      'Решает уравнение состояния идеального газа относительно давления или объёма. Газовая постоянная 8,314462618 верна только в базовых единицах — паскалях, кубометрах, молях и кельвинах, — поэтому каждая выбранная единица приводится к базовой до подстановки, а ответ переводится обратно уже после. Именно здесь чаще всего и ошибаются: литры с килопаскалями в той же формуле дают численно правдоподобный и при этом неверный результат. Температура ниже абсолютного нуля отклоняется, а ноль по Цельсию — это 273,15 K, а не ноль.',
    seoTitle: 'Калькулятор уравнения состояния идеального газа — PV = nRT',
    seoDescription: 'Рассчитайте давление или объём идеального газа по уравнению PV = nRT с выбором единиц давления, объёма и температуры.',
    h1: 'Калькулятор уравнения состояния идеального газа',
    keywords: ['уравнение состояния идеального газа', 'pv nrt', 'уравнение менделеева клапейрона', 'газовая постоянная'],
    fields: [
      {
        name: 'solve', label: 'Что нужно найти', type: 'select', defaultValue: 'p',
        options: [
          { value: 'p', label: 'давление' },
          { value: 'v', label: 'объём' },
        ],
      },
      { name: 'n', label: 'Количество вещества, моль', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      {
        name: 'tempUnit', label: 'Единица температуры', type: 'select', defaultValue: 'k',
        options: [
          { value: 'k', label: 'кельвины' },
          { value: 'c', label: 'градусы Цельсия' },
        ],
      },
      { name: 't', label: 'Температура', type: 'number', defaultValue: 300, step: 0.1, signed: true },
      {
        name: 'volumeUnit', label: 'Единица объёма', type: 'select', defaultValue: 'm3',
        options: [
          { value: 'm3', label: 'кубометры' },
          { value: 'l', label: 'литры' },
        ],
      },
      { name: 'v', label: 'Объём', type: 'number', defaultValue: 0.05, min: 0, step: 0.01, showIf: { field: 'solve', equals: 'p' } },
      {
        name: 'pressureUnit', label: 'Единица давления', type: 'select', defaultValue: 'pa',
        options: [
          { value: 'pa', label: 'паскали' },
          { value: 'kpa', label: 'килопаскали' },
          { value: 'atm', label: 'атмосферы' },
        ],
      },
      { name: 'p', label: 'Давление', type: 'number', defaultValue: 101325, min: 0, step: 100, showIf: { field: 'solve', equals: 'v' } },
    ],
    resultLabels: {
      pressure: 'Давление',
      volume: 'Объём',
      constant: 'Газовая постоянная',
      temperature: 'Температура',
    },
    howToUse: [
      'Выберите, что нужно найти — давление или объём.',
      'Введите количество вещества и температуру, выбрав её единицу.',
      'Введите оставшуюся величину в удобных единицах и прочитайте ответ.',
    ],
    howItWorks:
      'PV = nRT при R = 8,314462618 Дж/(моль·К). Эта постоянная верна в паскалях, кубометрах, молях и кельвинах, поэтому выбранные единицы приводятся к базовым до подстановки, а результат переводится обратно после. Градусы Цельсия переводятся в кельвины прибавлением 273,15.',
    example: 'Два моля газа при 300 K в объёме 0,05 м³ создают давление 99 773,55 Па — чуть меньше атмосферного.',
    faq: [
      { q: 'Почему единицы нужно выбирать, а не вводить любые?', a: 'Потому что газовая постоянная привязана к единицам. В паскалях и кубометрах она равна 8,314463; подставить в ту же формулу литры и килопаскали значит получить правдоподобное и неверное число.' },
      { q: 'Обязательно ли переводить температуру в кельвины?', a: 'Да, уравнение работает с абсолютной температурой. Если удобнее вводить градусы Цельсия, выберите их — перевод прибавлением 273,15 сделается сам.' },
      { q: 'Что происходит при нулевой абсолютной температуре?', a: 'Давление обращается в нуль — это законный предельный случай уравнения. А температура ниже абсолютного нуля отклоняется: такого состояния не существует.' },
      { q: 'Насколько модель применима к реальным газам?', a: 'Хорошо при умеренных давлениях и температурах вдали от конденсации. Вблизи сжижения и при высоких давлениях нужны поправки — уравнение идеального газа их не учитывает.' },
    ],
    relatedCalculatorIds: ['moles', 'molarity', 'solution-concentration'],
  },
};
