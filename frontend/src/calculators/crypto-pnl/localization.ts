import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "direction": "Trade direction",
      "entry": "Entry price",
      "exit": "Exit price",
      "qty": "Size, coins",
      "feePct": "Fee per side, %",
      "leverage": "Leverage",
    },
    options: {
      "long": "long — earns on a rise",
      "short": "short — earns on a fall",
    },
    results: {
      "Чистый результат": "Net result",
      "Результат до комиссий": "Result before fees",
      "Комиссии": "Fees",
      "Вложено": "Invested",
      "Доходность позиции": "Position return",
      "Изменение цены": "Price change",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Цена входа должна быть больше нуля": "The entry price must be greater than zero",
      "Цена выхода должна быть больше нуля": "The exit price must be greater than zero",
      "Объём должен быть больше нуля": "The size must be greater than zero",
      "Плечо должно быть больше нуля": "Leverage must be greater than zero",
      "Комиссия не может быть отрицательной": "The fee cannot be negative",
    },
  },
  uk: {
    fields: {
      "direction": "Напрям угоди",
      "entry": "Ціна входу",
      "exit": "Ціна виходу",
      "qty": "Обсяг, монет",
      "feePct": "Комісія однієї сторони, %",
      "leverage": "Плече",
    },
    options: {
      "long": "лонг — заробіток на зростанні",
      "short": "шорт — заробіток на падінні",
    },
    results: {
      "Чистый результат": "Чистий результат",
      "Результат до комиссий": "Результат до комісій",
      "Комиссии": "Комісії",
      "Вложено": "Вкладено",
      "Доходность позиции": "Дохідність позиції",
      "Изменение цены": "Зміна ціни",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Цена входа должна быть больше нуля": "Ціна входу має бути більшою за нуль",
      "Цена выхода должна быть больше нуля": "Ціна виходу має бути більшою за нуль",
      "Объём должен быть больше нуля": "Обсяг має бути більшим за нуль",
      "Плечо должно быть больше нуля": "Плече має бути більшим за нуль",
      "Комиссия не может быть отрицательной": "Комісія не може бути від'ємною",
    },
  },
};
