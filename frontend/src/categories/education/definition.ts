// Категория «Учёба».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "education",
  order: 10,
  icon: "graduation-cap",
  searchAliases: "учёба учеба школа университет тест экзамен оценка балл процент правильных ответов чтение скорость чтения зачёт",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда нужно быстро перевести число правильных ответов в процент.",
      "Когда до экзамена осталось время и хочется понять, какой балл закроет цель.",
      "Когда измеряете скорость чтения и прикидываете время на книгу.",
      "Когда сравниваете результаты тестов разной длины между собой.",
    ],
    checklist: [
      "Проверьте, что общее число вопросов указано полностью, а не по одному разделу.",
      "Уточните вес экзамена в итоговой оценке — он задаётся программой курса.",
      "Убедитесь, что текущая оценка выражена в процентах, а не в баллах шкалы.",
      "Для скорости чтения засекайте время на связном тексте, а не на отдельных абзацах.",
    ],
    mistakes: [
      "Считать процент от числа заданных вопросов вместо числа отвечавшихся.",
      "Забывать, что вес экзамена и вес текущей работы вместе дают сто процентов.",
      "Принимать недостижимый требуемый балл за ошибку расчёта, а не за ответ.",
      "Мерить скорость чтения на знакомом тексте и переносить её на новый материал.",
    ],
  },
  editorial: {
    ru: "Калькуляторы работают с процентами и не переводят их в национальные шкалы оценок: такие шкалы различаются и требуют отдельного справочника. Правила своего курса уточняйте в его программе.",
    en: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    es: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    de: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    fr: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    it: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    pt: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    nl: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    pl: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    cs: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    sk: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    hu: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    ro: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    tr: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    uk: "Калькулятори працюють із відсотками й не переводять їх у національні шкали оцінок: такі шкали різняться та потребують окремого довідника.",
    id: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
    vi: "The calculators work in percentages and do not convert them to national grade scales, which differ and need their own reference. Check your own course rules for the exact policy.",
  },
};
