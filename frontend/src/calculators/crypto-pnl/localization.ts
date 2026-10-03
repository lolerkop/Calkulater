import type { CalculatorLocalization } from '../../lib/platform/types';

const contractValues = {
  "en": {
    "Введите корректные значения": "Enter valid numerical values",
    "Результат выходит за числовые пределы расчёта": "The result exceeds the numerical limits of this calculation"
  },
  "uk": {
    "Введите корректные значения": "Введіть коректні числові значення",
    "Результат выходит за числовые пределы расчёта": "Результат виходить за числові межі розрахунку"
  },
  "de": {
    "Введите корректные значения": "Gib gültige Zahlenwerte ein",
    "Результат выходит за числовые пределы расчёта": "Das Ergebnis überschreitet die Zahlengrenzen dieser Rechnung"
  },
  "es": {
    "Введите корректные значения": "Introduce valores numéricos válidos",
    "Результат выходит за числовые пределы расчёта": "El resultado supera los límites numéricos del cálculo"
  }
} as const;

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'direction': 'Richtung des Handels',
      'entry': 'Einstiegspreis',
      'exit': 'Ausstiegspreis',
      'qty': 'Menge, Einheiten',
      'feePct': 'Gebühr je Seite, %',
      'leverage': 'Hebel',
    },
    options: {
      'long': 'long — gewinnt bei steigendem Preis',
      'short': 'short — gewinnt bei fallendem Preis',
    },
    results: {
      'Чистый результат': 'Nettoergebnis',
      'Результат до комиссий': 'Ergebnis vor Gebühren',
      'Комиссии': 'Gebühren',
      'Вложено': 'Eingesetzt',
      'Доходность позиции': 'Rendite der Position',
      'Изменение цены': 'Preisänderung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      "Выберите корректный режим расчёта": "Wählen Sie einen gültigen Berechnungsmodus",
      "Комиссия должна быть от 0 до 100%": "Die Gebühr muss zwischen 0 und 100% liegen",
      ...contractValues.de,
      '₽': '€',
      'Цена входа должна быть больше нуля': 'Der Einstiegspreis muss größer als null sein',
      'Цена выхода должна быть больше нуля': 'Der Ausstiegspreis muss größer als null sein',
      'Объём должен быть больше нуля': 'Die Menge muss größer als null sein',
      'Плечо должно быть больше нуля': 'Der Hebel muss größer als null sein',
      'Комиссия не может быть отрицательной': 'Die Gebühr kann nicht negativ sein',
    },
  },
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
      "Выберите корректный режим расчёта": "Choose a valid calculation mode",
      "Комиссия должна быть от 0 до 100%": "The fee must be from 0 to 100%",
      ...contractValues.en,
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
      "Выберите корректный режим расчёта": "Виберіть коректний режим розрахунку",
      "Комиссия должна быть от 0 до 100%": "Комісія має бути від 0 до 100%",
      ...contractValues.uk,
      "₽": "₴",
      "Цена входа должна быть больше нуля": "Ціна входу має бути більшою за нуль",
      "Цена выхода должна быть больше нуля": "Ціна виходу має бути більшою за нуль",
      "Объём должен быть больше нуля": "Обсяг має бути більшим за нуль",
      "Плечо должно быть больше нуля": "Плече має бути більшим за нуль",
      "Комиссия не может быть отрицательной": "Комісія не може бути від'ємною",
    },
  },
  es: {
    fields: {
      "direction": "Sentido de la operación",
      "entry": "Precio de entrada",
      "exit": "Precio de salida",
      "qty": "Tamaño, monedas",
      "feePct": "Comisión por lado, %",
      "leverage": "Apalancamiento",
    },
    options: {
      "long": "largo — gana si sube",
      "short": "corto — gana si baja",
    },
    results: {
      "Чистый результат": "Resultado neto",
      "Результат до комиссий": "Resultado antes de comisiones",
      "Комиссии": "Comisiones",
      "Вложено": "Invertido",
      "Доходность позиции": "Rentabilidad de la posición",
      "Изменение цены": "Variación del precio",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Выберите корректный режим расчёта": "Seleccione un modo de cálculo válido",
      "Комиссия должна быть от 0 до 100%": "La comisión debe estar entre el 0 y el 100%",
      ...contractValues.es,
      "₽": "€",
      "Цена входа должна быть больше нуля": "El precio de entrada debe ser mayor que cero",
      "Цена выхода должна быть больше нуля": "El precio de salida debe ser mayor que cero",
      "Объём должен быть больше нуля": "El tamaño debe ser mayor que cero",
      "Плечо должно быть больше нуля": "El apalancamiento debe ser mayor que cero",
      "Комиссия не может быть отрицательной": "La comisión no puede ser negativa",
    },
  },
};
