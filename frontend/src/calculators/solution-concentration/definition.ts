// Концентрация раствора: по массе, по объёму и в миллионных долях.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { solutionConcentrationCopyEn } from './copy.en';
import { solutionConcentrationCopyUk } from './copy.uk';
import { solutionConcentrationCopyDe } from './copy.de';
import { solutionConcentrationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'solution-concentration',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: solutionConcentrationCopyEn, uk: solutionConcentrationCopyUk, de: solutionConcentrationCopyDe },
  referenceCases: solutionConcentrationReferenceCases,
  publishedExample: { inputs: { mode: 'ww', solute: 25, solution: 500 }, expected: ['5,00%'] },
  presentation: {
    id: 'solution-concentration',
    name: 'Калькулятор концентрации раствора',
    slug: 'solution-concentration',
    fullPath: '/chemistry/solution-concentration/',
    category: 'chemistry',
    icon: 'flask',
    popularity: 43,
    isNew: false,
    shortDescription: 'Процент по массе, по объёму и в миллионных долях.',
    longDescription:
      'Считает концентрацию раствора в трёх употребительных формах: процент по массе, масса на объём и миллионные доли. Режим выбирается явно, потому что процент по массе и процент по объёму — разные величины, и подменять одно другим значит получить другое число под тем же названием. Вещества не может быть больше, чем раствора: такой ввод отклоняется, а не обрезается до ста процентов — обрезка превратила бы ошибку в правдоподобный ответ.',
    seoTitle: 'Калькулятор концентрации раствора — проценты и ppm',
    seoDescription: 'Рассчитайте концентрацию раствора: процент по массе, масса на объём и миллионные доли.',
    h1: 'Калькулятор концентрации раствора',
    keywords: ['концентрация раствора', 'процентная концентрация', 'массовая доля', 'ppm'],
    fields: [
      {
        name: 'mode', label: 'Форма концентрации', type: 'select', defaultValue: 'ww',
        options: [
          { value: 'ww', label: 'процент по массе' },
          { value: 'wv', label: 'масса на объём' },
        ],
      },
      { name: 'solute', label: 'Масса вещества, г', type: 'number', defaultValue: 25, min: 0, step: 0.1 },
      { name: 'solution', label: 'Масса раствора, г', type: 'number', defaultValue: 500, min: 0, step: 1, showIf: { field: 'mode', equals: 'ww' } },
      { name: 'volume', label: 'Объём раствора, мл', type: 'number', defaultValue: 300, min: 0, step: 1, showIf: { field: 'mode', equals: 'wv' } },
    ],
    resultLabels: {
      concentration: 'Концентрация',
      solvent: 'Масса растворителя',
      ppm: 'В миллионных долях',
      perLitre: 'Масса на литр',
    },
    howToUse: ['Выберите форму концентрации.', 'Введите массу растворённого вещества.', 'Укажите массу или объём готового раствора.'],
    howItWorks:
      'Процент по массе — это масса вещества, делённая на массу раствора и умноженная на сто. Масса на объём делит ту же массу на объём раствора. Миллионные доли — то же отношение, умноженное на миллион.',
    example: '25 граммов вещества в 500 граммах раствора дают 5 % по массе, а растворителя в нём 475 граммов.',
    faq: [
      { q: 'Массу раствора или массу растворителя вводить?', a: 'Массу готового раствора, то есть вещества вместе с растворителем. Масса растворителя выводится отдельной строкой как разность.' },
      { q: 'Чем процент по массе отличается от массы на объём?', a: 'Знаменателем. В первом случае это масса раствора в граммах, во втором — его объём в миллилитрах. Для плотности, отличной от единицы, числа получаются разными.' },
      { q: 'Что такое ppm?', a: 'Миллионные доли — то же отношение масс, но умноженное на миллион вместо ста. Удобно для очень разбавленных растворов, где процент выражается тысячными.' },
      { q: 'Почему нельзя ввести вещества больше, чем раствора?', a: 'Потому что такого раствора не существует: вещество входит в его массу. Обрезать результат до ста процентов значило бы выдать ошибку ввода за верный ответ.' },
    ],
    relatedCalculatorIds: ['dilution', 'molarity', 'moles'],
  },
};
