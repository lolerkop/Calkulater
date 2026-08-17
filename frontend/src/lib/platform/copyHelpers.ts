// Общие шаблоны копирайта для калькуляторов V2.
//
// `genericEnFaq` повторяет помощник `faq(topic)` из `i18n.ts` символ в символ.
// Дублирование сознательное и ограниченное: общий помощник остаётся приватным
// для легаси-каталога, а V2-калькуляторы не должны импортировать внутренности
// i18n ради трёх строк. Совпадение вывода закреплено тестом эквивалентности
// миграции, поэтому расхождение будет замечено сразу.

import type { FaqItem } from '../types';

export function genericEnFaq(topic: string): FaqItem[] {
  return [
    { q: `How accurate is this ${topic}?`, a: 'The result is a practical estimate based on the values you enter and the formula shown on the page.' },
    { q: `Does this ${topic} require an account?`, a: 'No. The calculator works in your browser and does not require registration.' },
    { q: `Can I share a ${topic} result?`, a: 'Yes. Use the share link to copy the current inputs in the page URL.' },
  ];
}
