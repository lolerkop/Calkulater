// СГЕНЕРИРОВАНО. Не редактировать руками.
// Подписи полей и фразы результата, объявленные самими калькуляторами.
// Перегенерировать: npm run calculators:generate

import * as loc_budget_50_30_20 from './budget-50-30-20/localization';
import * as loc_commission from './commission/localization';
import * as loc_savings_rate from './savings-rate/localization';

type LocalizationModule = Record<string, unknown>;
const bucket = (module: LocalizationModule, kind: string, locale: string): Record<string, string> =>
  ((module[kind] as Record<string, Record<string, string>> | undefined)?.[locale]) ?? {};

/**
 * Подписи полей привязаны к калькулятору, а не к имени поля.
 *
 * Общая карта в `i18n` ключуется одним лишь именем поля, и поле `mode` есть
 * сразу у нескольких калькуляторов — метка одного перетирала метки остальных.
 * Область видимости по идентификатору убирает это столкновение.
 */
export const v2FieldLabelsById: Record<'en' | 'uk', Record<string, Record<string, string>>> = {
  en: {
    'budget-50-30-20': bucket(loc_budget_50_30_20, 'fieldLabels', 'en'),
    'commission': bucket(loc_commission, 'fieldLabels', 'en'),
    'savings-rate': bucket(loc_savings_rate, 'fieldLabels', 'en'),
  },
  uk: {
    'budget-50-30-20': bucket(loc_budget_50_30_20, 'fieldLabels', 'uk'),
    'commission': bucket(loc_commission, 'fieldLabels', 'uk'),
    'savings-rate': bucket(loc_savings_rate, 'fieldLabels', 'uk'),
  },
};

export const v2OptionLabels: Record<'en' | 'uk', Record<string, string>> = {
  en: {
  ...bucket(loc_budget_50_30_20, 'optionLabels', 'en'),
  ...bucket(loc_commission, 'optionLabels', 'en'),
  ...bucket(loc_savings_rate, 'optionLabels', 'en'),
  },
  uk: {
  ...bucket(loc_budget_50_30_20, 'optionLabels', 'uk'),
  ...bucket(loc_commission, 'optionLabels', 'uk'),
  ...bucket(loc_savings_rate, 'optionLabels', 'uk'),
  },
};

export const v2ResultPhrases: Record<'en' | 'uk', Record<string, string>> = {
  en: {
  ...bucket(loc_budget_50_30_20, 'resultPhrases', 'en'),
  ...bucket(loc_commission, 'resultPhrases', 'en'),
  ...bucket(loc_savings_rate, 'resultPhrases', 'en'),
  },
  uk: {
  ...bucket(loc_budget_50_30_20, 'resultPhrases', 'uk'),
  ...bucket(loc_commission, 'resultPhrases', 'uk'),
  ...bucket(loc_savings_rate, 'resultPhrases', 'uk'),
  },
};

export const v2ResultValues: Record<'en' | 'uk', Record<string, string>> = {
  en: {
  ...bucket(loc_budget_50_30_20, 'resultValues', 'en'),
  ...bucket(loc_commission, 'resultValues', 'en'),
  ...bucket(loc_savings_rate, 'resultValues', 'en'),
  },
  uk: {
  ...bucket(loc_budget_50_30_20, 'resultValues', 'uk'),
  ...bucket(loc_commission, 'resultValues', 'uk'),
  ...bucket(loc_savings_rate, 'resultValues', 'uk'),
  },
};
