// Короткое описание поля для блока «Поля и единицы» на странице калькулятора.
//
// Блок отвечает на вопрос «что и в чём тут вводят»: у числового поля это его
// единица, у даты — дата, у списка — выбор из вариантов. У переключателя единицы
// нет вовсе, и раньше он описывался как «да или нет». Для булева поля это верно,
// но переключатели в проекте почти никогда не булевы: «Единица срока» — это годы
// или месяцы, «Пол» — мужской или женский, «Способ расчёта» — по размерам или по
// площади. Описание попросту врало.
//
// Правдивый и при этом самый короткий ответ для переключателя — его собственные
// варианты: они уже локализованы вместе с полем, поэтому новых строк перевода не
// нужно, а описание автоматически остаётся верным при любой правке вариантов.
//
// Модуль работает на этапе сборки: страница калькулятора статическая, в браузер
// ничего из этого не попадает.

import type { Field } from './types';
import type { Locale } from './i18n';

type Копия = { noUnit: string; select: string; date: string; toggle: string };

const КОПИЯ: Record<'ru' | 'uk' | 'en' | 'de', Копия> = {
  ru: { noUnit: 'без единицы', select: 'вариант из списка', date: 'дата', toggle: 'да или нет' },
  uk: { noUnit: 'без одиниці', select: 'варіант зі списку', date: 'дата', toggle: 'так або ні' },
  en: { noUnit: 'unitless', select: 'list option', date: 'date', toggle: 'yes or no' },
  de: { noUnit: 'ohne Einheit', select: 'Auswahl aus der Liste', date: 'Datum', toggle: 'ja oder nein' },
};

/** Варианты переключателя перечисляются через косую черту: «Лет / Месяцев». */
const РАЗДЕЛИТЕЛЬ = ' / ';

export function fieldUnitCopy(locale: Locale): Копия {
  return КОПИЯ[locale as 'ru' | 'uk' | 'en' | 'de'] ?? КОПИЯ.en;
}

export function fieldUnitLabel(field: Field, locale: Locale): string {
  const copy = fieldUnitCopy(locale);
  if (field.unit) return field.unit;
  if (field.type === 'date') return copy.date;
  if (field.type === 'toggle') {
    const варианты = (field.options ?? []).map((option) => option.label.trim()).filter(Boolean);
    // Переключателя без вариантов в данных нет, но если он появится — это всё
    // равно выбор, а не «да или нет».
    return варианты.length > 0 ? варианты.join(РАЗДЕЛИТЕЛЬ) : copy.select;
  }
  // Флажок — единственный по-настоящему булев тип ввода.
  if (field.type === 'checkbox') return copy.toggle;
  if (field.type === 'select') return copy.select;
  return copy.noUnit;
}
