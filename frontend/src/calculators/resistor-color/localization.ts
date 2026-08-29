import type { CalculatorLocalization } from '../../lib/platform/types';

// Цвета приходят и подписью варианта, и фрагментом внутри строки «Полосы»,
// поэтому один и тот же набор обслуживает оба места: подстановка значений идёт
// по фрагментам, а подписи вариантов — по точному ключу.
const COLORS_EN = {
  'чёрный': 'black', 'коричневый': 'brown', 'красный': 'red', 'оранжевый': 'orange',
  'жёлтый': 'yellow', 'зелёный': 'green', 'синий': 'blue', 'фиолетовый': 'violet',
  'серый': 'grey', 'белый': 'white', 'золотистый': 'gold', 'серебристый': 'silver',
};
const COLORS_UK = {
  'чёрный': 'чорний', 'коричневый': 'коричневий', 'красный': 'червоний', 'оранжевый': 'помаранчевий',
  'жёлтый': 'жовтий', 'зелёный': 'зелений', 'синий': 'синій', 'фиолетовый': 'фіолетовий',
  'серый': 'сірий', 'белый': 'білий', 'золотистый': 'золотистий', 'серебристый': 'сріблястий',
};
const optionMap = (colors: Record<string, string>) => ({
  '0': colors['чёрный'], '1': colors['коричневый'], '2': colors['красный'], '3': colors['оранжевый'],
  '4': colors['жёлтый'], '5': colors['зелёный'], '6': colors['синий'], '7': colors['фиолетовый'],
  '8': colors['серый'], '9': colors['белый'],
  '-1': colors['золотистый'], '-2': colors['серебристый'],
  '5,0': colors['золотистый'], '10': colors['серебристый'],
});

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'b1': 'Erster Ring — erste Ziffer',
      'b2': 'Zweiter Ring — zweite Ziffer',
      'mult': 'Dritter Ring — Multiplikator',
      'tol': 'Vierter Ring — Toleranz',
    },
    options: {
      '0': 'schwarz',
      '1': 'braun',
      '2': 'rot',
      '3': 'orange',
      '4': 'gelb',
      '5': 'grün',
      '6': 'blau',
      '7': 'violett',
      '8': 'grau',
      '9': 'weiß',
      '10': 'silber',
      '-1': 'gold',
      '-2': 'silber',
      '5,0': 'gold',
    },
    results: {
      'Номинал': 'Nennwert',
      'Допуск': 'Toleranz',
      'Наименьшее допустимое': 'Kleinster zulässiger Wert',
      'Наибольшее допустимое': 'Größter zulässiger Wert',
      'Ширина поля допуска': 'Breite des Toleranzfeldes',
      'Множитель': 'Multiplikator',
      'Полосы': 'Ringe',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'чёрный': 'schwarz',
      'коричневый': 'braun',
      'красный': 'rot',
      'оранжевый': 'orange',
      'жёлтый': 'gelb',
      'зелёный': 'grün',
      'синий': 'blau',
      'фиолетовый': 'violett',
      'серый': 'grau',
      'белый': 'weiß',
      'золотистый': 'gold',
      'серебристый': 'silber',
      'Ом': 'Ω',
      'кОм': 'kΩ',
      'МОм': 'MΩ',
      'Первая полоса — цифра от 0 до 9': 'Der erste Ring ist eine Ziffer von 0 bis 9',
      'Вторая полоса — цифра от 0 до 9': 'Der zweite Ring ist eine Ziffer von 0 bis 9',
      'Множитель — от серебристого до фиолетового': 'Der Multiplikator reicht von silber bis violett',
      'Допуск должен быть от 0 до 100 %': 'Die Toleranz muss zwischen 0 und 100 % liegen',
    },
  },
  en: {
    fields: {
      b1: 'First band — first digit', b2: 'Second band — second digit',
      mult: 'Third band — multiplier', tol: 'Fourth band — tolerance',
    },
    options: optionMap(COLORS_EN),
    results: {
      'Номинал': 'Nominal value', 'Допуск': 'Tolerance',
      'Наименьшее допустимое': 'Lowest permitted', 'Наибольшее допустимое': 'Highest permitted',
      'Ширина поля допуска': 'Tolerance band width', 'Множитель': 'Multiplier', 'Полосы': 'Bands',
      'Проверьте данные': 'Check the values',
    },
    values: {
      ...COLORS_EN,
      'Ом': 'Ω', 'кОм': 'kΩ', 'МОм': 'MΩ',
      'Первая полоса — цифра от 0 до 9': 'The first band is a digit from 0 to 9',
      'Вторая полоса — цифра от 0 до 9': 'The second band is a digit from 0 to 9',
      'Множитель — от серебристого до фиолетового': 'The multiplier runs from silver to violet',
      'Допуск должен быть от 0 до 100 %': 'The tolerance must be between 0 and 100%',
    },
  },
  uk: {
    fields: {
      b1: 'Перша смуга — перша цифра', b2: 'Друга смуга — друга цифра',
      mult: 'Третя смуга — множник', tol: 'Четверта смуга — допуск',
    },
    options: optionMap(COLORS_UK),
    results: {
      'Номинал': 'Номінал', 'Допуск': 'Допуск',
      'Наименьшее допустимое': 'Найменше допустиме', 'Наибольшее допустимое': 'Найбільше допустиме',
      'Ширина поля допуска': 'Ширина поля допуску', 'Множитель': 'Множник', 'Полосы': 'Смуги',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      ...COLORS_UK,
      'Ом': 'Ом', 'кОм': 'кОм', 'МОм': 'МОм',
      'Первая полоса — цифра от 0 до 9': 'Перша смуга — цифра від 0 до 9',
      'Вторая полоса — цифра от 0 до 9': 'Друга смуга — цифра від 0 до 9',
      'Множитель — от серебристого до фиолетового': 'Множник — від сріблястого до фіолетового',
      'Допуск должен быть от 0 до 100 %': 'Допуск має бути від 0 до 100 %',
    },
  },
};
