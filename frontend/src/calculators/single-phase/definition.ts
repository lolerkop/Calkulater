import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { singlePhaseCopyEn } from './copy.en';
import { singlePhaseCopyUk } from './copy.uk';
import { singlePhaseCopyDe } from './copy.de';
import { singlePhaseReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'single-phase',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: singlePhaseCopyEn, uk: singlePhaseCopyUk, de: singlePhaseCopyDe },
  referenceCases: singlePhaseReferenceCases,
  publishedExample: {
    inputs: { mode: 'P', voltage: 230, current: 6.5, powerFactor: 0.95 },
    expected: ['1 420,25 Вт'],
  },
  presentation: {
    id: 'single-phase',
    name: 'Калькулятор однофазной мощности',
    slug: 'single-phase-power',
    fullPath: '/electronics/single-phase-power/',
    category: 'electronics',
    icon: 'zap',
    popularity: 22,
    isNew: false,
    shortDescription: 'Активная, полная и реактивная мощность однофазной сети или ток по мощности.',
    longDescription:
      'В однофазной сети три мощности, и путаница между ними — это то, из-за чего греется кабель. Активная в ваттах совершает работу, и именно её считает счётчик. Полная в вольт-амперах — это произведение напряжения на ток, и нести её приходится проводке и автомату. Реактивная в варах — разница между первыми двумя: энергия, которая ходит до нагрузки и обратно, не делая ничего полезного. Двигатель с коэффициентом мощности 0,7 потребляет заметно больший ток, чем можно предположить по его ваттам, — и это ровно тот случай, когда подбор по одной активной мощности ошибается.',
    seoTitle: 'Калькулятор однофазной мощности и тока',
    seoDescription:
      'Рассчитайте активную, полную и реактивную мощность однофазной сети по напряжению, току и коэффициенту мощности или найдите ток по мощности.',
    h1: 'Калькулятор однофазной мощности',
    keywords: ['однофазная мощность', 'расчёт тока', 'коэффициент мощности', 'полная мощность'],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'P',
        options: [
          { value: 'P', label: 'мощность по току' },
          { value: 'current', label: 'ток по мощности' },
        ],
      },
      { name: 'voltage', label: 'Напряжение, В', type: 'number', defaultValue: 230, min: 0, step: 10 },
      { name: 'current', label: 'Ток, А', type: 'number', defaultValue: 6.5, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'P' } },
      { name: 'power', label: 'Активная мощность, Вт', type: 'number', defaultValue: 2200, min: 0, step: 100, showIf: { field: 'mode', equals: 'current' } },
      { name: 'powerFactor', label: 'Коэффициент мощности cos φ', type: 'number', defaultValue: 0.95, min: 0, max: 1, step: 0.05 },
    ],
    resultLabels: {
      active: 'Активная мощность',
      apparent: 'Полная мощность',
      reactive: 'Реактивная мощность',
      current: 'Ток',
    },
    howToUse: [
      'Выберите, что известно: ток или активная мощность.',
      'Введите напряжение сети.',
      'Введите ток либо паспортную мощность, если подбираете цепь.',
      'Укажите коэффициент мощности: у нагревателей это 1, у двигателей обычно 0,7–0,9.',
    ],
    howItWorks:
      'Активная мощность P = U × I × cos φ, полная S = U × I, реактивная Q — корень из S² − P². Поиск тока обращает первую формулу: I = P ÷ (U × cos φ).',
    example: 'При 230 В и 6,5 А с коэффициентом мощности 0,95 активная мощность равна 1 420,25 Вт, полная — 1 495 ВА.',
    faq: [
      {
        q: 'По какой мощности подбирать сечение кабеля?',
        a: 'По полной или прямо по току. Кабель и автомат греет протекающий ток, а не та его часть, которая совершает полезную работу.',
      },
      {
        q: 'Какой коэффициент мощности брать, если его нет на шильдике?',
        a: 'У нагревателей, чайников и ламп накаливания он практически равен единице. У двигателей, насосов и компрессоров обычно 0,7–0,9, а у импульсных блоков питания разброс велик — шильдик стоит поискать.',
      },
      {
        q: 'Почему коэффициент мощности не может быть больше единицы?',
        a: 'Это отношение активной мощности к полной, а активная никогда не превышает полную. При значении больше единицы под корнем в реактивной мощности оказалось бы отрицательное число.',
      },
      {
        q: 'Платят ли за реактивную мощность в квартире?',
        a: 'Бытовые счётчики обычно считают только активную энергию. В промышленных тарифах реактивную мощность или низкий коэффициент оплачивают отдельно — поэтому там компенсирующие конденсаторы окупаются.',
      },
    ],
    relatedCalculatorIds: ['ohms-law', 'electricity-usage', 'inverter-power'],
  },
};
