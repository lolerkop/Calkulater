import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { emergencyFundCopyEn } from './copy.en';
import { emergencyFundCopyUk } from './copy.uk';
import { emergencyFundCopyDe } from './copy.de';
import { emergencyFundReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'emergency-fund',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: emergencyFundCopyEn, uk: emergencyFundCopyUk, de: emergencyFundCopyDe },
  referenceCases: emergencyFundReferenceCases,
  publishedExample: {
    inputs: { monthlyExpenses: 85000, months: 6, saved: 210000 },
    expected: ['510 000,00 ₽'],
  },
  presentation: {
    id: 'emergency-fund',
    name: 'Калькулятор финансовой подушки',
    slug: 'emergency-fund',
    fullPath: '/finance/emergency-fund/',
    category: 'finance',
    icon: 'shield',
    popularity: 23,
    isNew: false,
    shortDescription: 'Цель подушки в месяцах расходов и готовность к ней.',
    longDescription:
      'Финансовая подушка измеряется месяцами, а не суммой. Полмиллиона — это полгода спокойствия при расходах 85 000 и меньше двух месяцев при расходах 300 000, поэтому цель задаётся месяцами, а сумма выводится из неё, а не наоборот. Готовность и покрытие ограничены целью сверху намеренно: накопив больше нужного, вы получаете не «сто двадцать процентов подушки», а подушку и свободные деньги, — и этим свободным деньгам место в другом расчёте, про доходность, а не про безопасность.',
    seoTitle: 'Калькулятор финансовой подушки безопасности',
    seoDescription:
      'Рассчитайте цель финансовой подушки по месячным расходам и желаемому запасу в месяцах с показом готовности и недостающей суммы.',
    h1: 'Калькулятор финансовой подушки',
    keywords: ['финансовая подушка', 'резервный фонд', 'запас на месяцы', 'накопления'],
    fields: [
      { name: 'monthlyExpenses', label: 'Месячные расходы, ₽', type: 'number', defaultValue: 85000, min: 0, step: 5000 },
      { name: 'months', label: 'Желаемый запас, месяцев', type: 'number', defaultValue: 6, min: 1, max: 36, step: 1 },
      { name: 'saved', label: 'Уже накоплено, ₽', type: 'number', defaultValue: 210000, min: 0, step: 10000 },
    ],
    resultLabels: {
      target: 'Цель подушки',
      gap: 'Не хватает',
      covered: 'Уже покрыто месяцев',
      ready: 'Готовность',
    },
    howToUse: [
      'Введите настоящие месячные расходы, а не доход.',
      'Выберите, на сколько месяцев хотите запас.',
      'Укажите, сколько уже отложено именно на эту цель.',
      'Считайте только те деньги, до которых реально добраться за день-другой.',
    ],
    howItWorks:
      'Цель = месячные расходы × число месяцев запаса. Готовность — отношение накопленного к цели, ограниченное сотней процентов.',
    example: 'При расходах 85 000 ₽ и цели в шесть месяцев нужно 510 000 ₽; накопленные 210 000 ₽ покрывают 2,471 месяца.',
    faq: [
      {
        q: 'На сколько месяцев делать подушку?',
        a: 'Три-шесть месяцев — обычный совет для стабильной работы по найму, шесть-двенадцать — для нерегулярного дохода, единственного кормильца или узкой специальности, замена которой занимает дольше.',
      },
      {
        q: 'Считать по расходам или по доходу?',
        a: 'По расходам, причём настоящим. Доход завышает цель для всякого, кто часть его откладывает, а подушка существует, чтобы покрывать обязательные траты, а не заработок.',
      },
      {
        q: 'Где держать подушку?',
        a: 'Там, откуда её можно забрать за день-другой и где она не зависит от колебаний цены. Подушка, до которой не добраться в день увольнения, не выполняет свою единственную задачу.',
      },
      {
        q: 'Почему готовность ограничена сотней процентов?',
        a: 'Потому что подушка либо собрана, либо нет. Всё сверх цели — это обычные накопления, и смешение двух вещей скрывает момент, когда задача безопасности была решена.',
      },
    ],
    relatedCalculatorIds: ['savings-rate', 'budget-50-30-20', 'deposit-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
