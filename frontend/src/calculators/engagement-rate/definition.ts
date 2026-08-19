import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { engagementRateCopyEn } from './copy.en';
import { engagementRateCopyUk } from './copy.uk';
import { engagementRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "engagement-rate",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: engagementRateCopyEn, uk: engagementRateCopyUk },
  referenceCases: engagementRateReferenceCases,
  publishedExample: { inputs: { engagements: 450, base: 'reach', reach: 9000 }, expected: ["5,00%"] },
  presentation: {
    id: "engagement-rate",
    name: "Калькулятор вовлечённости",
    slug: "engagement-rate",
    fullPath: "/business/engagement-rate/",
    category: "business",
    icon: "heart",
    popularity: 44,
    isNew: true,
    shortDescription: "Уровень вовлечённости публикации по охвату или по числу подписчиков.",
    longDescription:
      "Считает вовлечённость — долю реакций от аудитории. Знаменателя здесь два, и они дают разные числа: охват показывает, как публикация сработала на тех, кто её увидел, а подписчики — как она сработала относительно всей аудитории. Ни один из них не «правильный» сам по себе, поэтому база выбирается явно и указывается в результате: сравнивать между собой можно только показатели с одинаковым знаменателем.",
    seoTitle: "Калькулятор вовлечённости — ER по охвату и подписчикам",
    seoDescription: "Рассчитайте уровень вовлечённости публикации по охвату или по числу подписчиков и сравнивайте показатели с одинаковой базой.",
    h1: "Калькулятор вовлечённости",
    keywords: ["калькулятор вовлечённости", "engagement rate", "er по охвату", "вовлечённость подписчиков"],
    fields: [
      { name: 'engagements', label: 'Реакций всего', type: 'number', defaultValue: 450, min: 0, step: 1 },
      {
        name: 'base', label: 'Считать от', type: 'select', defaultValue: 'reach',
        options: [
          { value: 'reach', label: 'охвата' },
          { value: 'followers', label: 'числа подписчиков' },
        ],
      },
      { name: 'reach', label: 'Охват публикации', type: 'number', defaultValue: 9000, min: 0, step: 1, showIf: { field: 'base', equals: 'reach' } },
      { name: 'followers', label: 'Подписчиков', type: 'number', defaultValue: 4000, min: 0, step: 1, showIf: { field: 'base', equals: 'followers' } },
    ],
    resultLabels: {
      "er": "Вовлечённость",
      "base": "База расчёта",
      "engagements": "Реакций",
      "perThousand": "Реакций на тысячу",
    },
    howToUse: ["Введите суммарное число реакций.", "Выберите базу: охват или подписчики.", "Введите её значение и прочитайте вовлечённость."],
    howItWorks: "Вовлечённость = реакции ÷ база × 100, где базой служит охват публикации или число подписчиков — по вашему выбору.",
    example: "450 реакций при охвате 9000 дают вовлечённость 5,00%.",
    faq: [
      { q: "От чего правильнее считать — от охвата или от подписчиков?", a: "Оба варианта используются, и оба осмысленны. Охват отвечает на вопрос «как сработала публикация у тех, кто её увидел», подписчики — «как она сработала относительно всей аудитории». Сравнивать можно только показатели с одинаковой базой." },
      { q: "Что считать реакцией?", a: "То, что вы решили включить: лайки, комментарии, репосты, сохранения. Важно считать одинаково во всех сравниваемых публикациях, иначе цифры несопоставимы." },
      { q: "Чем вовлечённость отличается от CTR?", a: "CTR — доля кликов от показов рекламного объявления. Вовлечённость — доля реакций от аудитории публикации. Это разные знаменатели и разные действия." },
      { q: "Какой уровень считается хорошим?", a: "Зависит от площадки, тематики и размера аудитории, поэтому калькулятор не приводит ориентиров. Сравнивайте со своими же прошлыми публикациями." },
    ],
    relatedCalculatorIds: ["ctr", "cpm", "roas"],
  },
};
