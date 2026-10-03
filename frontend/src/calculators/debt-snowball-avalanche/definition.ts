import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { debtSnowballAvalancheCopyEn } from './copy.en';
import { debtSnowballAvalancheCopyUk } from './copy.uk';
import { debtSnowballAvalancheCopyDe } from './copy.de';
import { debtSnowballAvalancheCopyEs } from './copy.es';
import { debtSnowballAvalancheReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "debt-snowball-avalanche",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: { ...debtSnowballAvalancheCopyEn, ...contractContent.en }, uk: { ...debtSnowballAvalancheCopyUk, ...contractContent.uk }, de: { ...debtSnowballAvalancheCopyDe, ...contractContent.de }, es: { ...debtSnowballAvalancheCopyEs, ...contractContent.es } },
  referenceCases: debtSnowballAvalancheReferenceCases,
  publishedExample: {
    inputs: { debts: 'small 40000 12 2000\nbig 200000 26 6000', extra: 4000, strategy: 'avalanche' },
    expected: ["26 мес"],
  },
  presentation: {
    id: "debt-snowball-avalanche",
    name: "Калькулятор погашения нескольких долгов",
    slug: "pogashenie-neskolkih-dolgov",
    fullPath: "/finance/pogashenie-neskolkih-dolgov/",
    category: "finance",
    icon: "credit-card",
    popularity: 37,
    isNew: false,
    shortDescription: "Порядок и срок погашения нескольких долгов: снежный ком или лавина.",
    seoTitle: "Калькулятор погашения долгов — снежный ком и лавина",
    seoDescription: "Рассчитайте срок и переплату при погашении нескольких долгов по стратегии снежного кома или лавины, с порядком закрытия и процентами по каждому.",
    h1: "Калькулятор погашения нескольких долгов",
    keywords: ["погашение долгов", "снежный ком", "лавина долгов", "порядок погашения кредитов"],
    fields: [
      {
        name: 'debts',
        label: 'Долги: название, сумма, ставка, минимальный платёж',
        type: 'textarea',
        defaultValue: 'small 40000 12 2000\nbig 200000 26 6000',
        // Подсказка поля, как и умолчание, не имеет пути локализации: русский
        // текст в ней уехал бы на английскую страницу. Держим её нейтральной.
        placeholder: 'card 120000 24 4000',
      },
      { name: 'extra', label: 'Свободные деньги в месяц', unit: '₽', type: 'number', defaultValue: 4000, min: 0, step: 500 },
      {
        name: 'strategy', label: 'Стратегия', type: 'select', defaultValue: 'avalanche',
        options: [
          { value: 'avalanche', label: 'лавина — сначала дорогой долг' },
          { value: 'snowball', label: 'снежный ком — сначала малый долг' },
        ],
      },
    ],
    resultLabels: {
      "months": "Срок погашения",
      "interest": "Переплата процентами",
      "total": "Выплачено всего",
      "first": "Первым закрывается",
      "count": "Долгов",
      "table": "Порядок погашения",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["credit-card-payoff", "dti", "early-repayment"],
  },
};
