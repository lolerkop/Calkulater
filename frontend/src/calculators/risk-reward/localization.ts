import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "direction": "Trade direction",
      "entry": "Entry price",
      "stop": "Stop price",
      "target": "Target price",
      "qty": "Size, units",
    },
    options: {
      "long": "long — stop below, target above",
      "short": "short — stop above, target below",
    },
    results: {
      "Отношение риск/прибыль": "Risk to reward ratio",
      "Риск на единицу": "Risk per unit",
      "Прибыль на единицу": "Reward per unit",
      "Риск в деньгах": "Risk in money",
      "Прибыль в деньгах": "Reward in money",
      "Безубыточная доля сделок": "Break-even win rate",
      "Внимание": "Note",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "В лонге стоп ставится ниже входа, а цель выше": "A long places the stop below entry and the target above",
      "В шорте стоп ставится выше входа, а цель ниже": "A short places the stop above entry and the target below",
      "Цена входа должна быть больше нуля": "The entry price must be greater than zero",
      "Цена стоп-приказа должна быть больше нуля": "The stop price must be greater than zero",
      "Целевая цена должна быть больше нуля": "The target price must be greater than zero",
      "Объём должен быть больше нуля": "The size must be greater than zero",
      "Стоп не может совпадать с ценой входа": "The stop cannot equal the entry price",
    },
  },
  uk: {
    fields: {
      "direction": "Напрям угоди",
      "entry": "Ціна входу",
      "stop": "Ціна стоп-наказу",
      "target": "Цільова ціна",
      "qty": "Обсяг, одиниць",
    },
    options: {
      "long": "лонг — стоп нижче, ціль вище",
      "short": "шорт — стоп вище, ціль нижче",
    },
    results: {
      "Отношение риск/прибыль": "Відношення ризик/прибуток",
      "Риск на единицу": "Ризик на одиницю",
      "Прибыль на единицу": "Прибуток на одиницю",
      "Риск в деньгах": "Ризик у грошах",
      "Прибыль в деньгах": "Прибуток у грошах",
      "Безубыточная доля сделок": "Беззбиткова частка угод",
      "Внимание": "Увага",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "В лонге стоп ставится ниже входа, а цель выше": "У лонгу стоп ставлять нижче входу, а ціль вище",
      "В шорте стоп ставится выше входа, а цель ниже": "У шорті стоп ставлять вище входу, а ціль нижче",
      "Цена входа должна быть больше нуля": "Ціна входу має бути більшою за нуль",
      "Цена стоп-приказа должна быть больше нуля": "Ціна стоп-наказу має бути більшою за нуль",
      "Целевая цена должна быть больше нуля": "Цільова ціна має бути більшою за нуль",
      "Объём должен быть больше нуля": "Обсяг має бути більшим за нуль",
      "Стоп не может совпадать с ценой входа": "Стоп не може збігатися з ціною входу",
    },
  },
};
