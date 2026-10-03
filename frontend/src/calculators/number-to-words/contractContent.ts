import type { CalculatorCopy } from '../../lib/platform/types';
type Body=Pick<CalculatorCopy,'longDescription'|'howToUse'|'howItWorks'|'example'|'faq'>;
export const contractContent:Record<'ru' | 'en' | 'uk',Body> = {
  "ru": {
    "longDescription": "Записывает число словами по триадам: миллиарды, миллионы, тысячи, остаток. Согласование рода живёт в тысячах — «одна тысяча», но «два миллиона», — а форма масштабного слова выбирается по последним двум цифрам триады, как того требует грамматика. Рядом показана строка суммы в рублях RUB с 00 копеек; другую валюту или дробную денежную сумму эта форма не выбирает. Отрицательные числа начинаются со слова «минус», ноль так и остаётся нулём.",
    "howToUse": [
      "Введите целое число — дробную часть запись словами не принимает.",
      "Строка «Сумма прописью» всегда использует RUB и 00 копеек; перед вставкой в документ проверьте его валюту и требования.",
      "Отрицательное число начнётся со слова «минус».",
      "Предел записи — 999 999 999 999 по модулю."
    ],
    "howItWorks": "Число режется на триады, каждая записывается словами, к триаде добавляется масштабное слово в нужной форме. Допустимы целые числа от−999 999 999 999 до 999 999 999 999, включая 0. Денежная строка фиксирована в RUB,00 копеек. Запись словами не подтверждает юридическую пригодность документа.",
    "example": "1234 записывается как «одна тысяча двести тридцать четыре».",
    "faq": [
      {
        "q": "Почему «одна тысяча», а не «один тысяча»?",
        "a": "Тысяча в русском женского рода, и числительное согласуется с ней: одна тысяча, две тысячи. Миллион и миллиард мужского рода, поэтому там «один миллион» и «два миллиона»."
      },
      {
        "q": "Откуда берётся форма «тысяч» вместо «тысячи»?",
        "a": "Форма выбирается по последним двум цифрам триады: 1 — тысяча, 2–4 — тысячи, остальное — тысяч, а числа от 11 до 14 всегда берут последнюю форму."
      },
      {
        "q": "Можно ли записать дробное число?",
        "a": "Нет. Принимаются только целые числа, поэтому денежная строка всегда заканчивается 00 копеек. Копейки нельзя задать отдельным полем."
      },
      {
        "q": "Почему есть предел в 999 999 999 999?",
        "a": "Это предел данной реализации: четыре группы — миллиарды, миллионы, тысячи, остаток. Он не является математическим пределом и не снимает различия традиций названий."
      }
    ]
  },
  "en": {
    "longDescription": "Writes a signed whole number in English words, using groups for billions, millions, thousands and the remainder. Zero is written as zero. The English convention here uses billion for 10⁹ and compound numerals with spaces, such as thirty four; it does not add “and”. The separate amount line prints the currency code RUB for Russian roubles and00 kopecks, with no currency selector.",
    "howToUse": [
      "Enter a whole number — written-out form does not take a fractional part.",
      "The amount line always uses the currency code RUB and00 kopecks; check the currency and required wording before inserting it into a document.",
      "A negative number begins with the word minus.",
      "The limit is 999,999,999,999 in absolute value."
    ],
    "howItWorks": "The number is split into groups of three, each group is written in words, and the scale word is added in the required form. Whole numbers from−999,999,999,999 to 999,999,999,999 are accepted, including 0. The amount line is fixed to RUB and 00 kopecks; the wording does not certify legal suitability.",
    "example": "1234 is written as \"one thousand two hundred thirty four\".",
    "faq": [
      {
        "q": "Which English convention is used?",
        "a": "Billion means 10⁹. The tool writes compound numerals with spaces, for example twenty one, and omits “and”. It does not certify a bank’s or jurisdiction’s required wording."
      },
      {
        "q": "How are groups joined?",
        "a": "Each three-digit group is written in hundreds, tens and units, then followed by billion, million or thousand. Empty groups are skipped; a leading minus is retained."
      },
      {
        "q": "Can a fractional number be written out?",
        "a": "No. Only whole numbers are accepted, so the RUB amount line always ends in 00 kopecks. There is no field for a fractional monetary amount."
      },
      {
        "q": "Why is there a limit of 999,999,999,999?",
        "a": "It is this implementation’s limit: four groups for billions, millions, thousands and the remainder. It is not a mathematical limit or a guarantee against naming differences."
      }
    ]
  },
  "uk": {
    "longDescription": "Записує ціле число словами українською, розділяючи мільярди, мільйони, тисячі й залишок. Узгодження залежить від останніх цифр триади: «одна тисяча», «дві тисячі», «два мільйони». Окремий рядок суми фіксовано в рублях RUB із 00 копійок; гривні та дробову грошову суму ця форма не обирає.",
    "howToUse": [
      "Введіть ціле число від−999 999 999 999 до 999 999 999 999; нуль також допустимий.",
      "Прочитайте запис словами; від’ємне число починається з «мінус».",
      "Грошовий рядок завжди використовує RUB і 00 копійок. Перед вставкою в документ перевірте валюту й вимоги до формулювання."
    ],
    "howItWorks": "Число ріжеться на триади, кожна записується словами, і до триади додається масштабне слово в потрібній формі. Форма залежить від останніх цифр: «одна тисяча», «дві тисячі», «п’ять тисяч» — правило узгодження числівників з іменниками. Приймаються цілі числа від−999 999 999 999 до 999 999 999 999, включно з 0. Грошовий рядок фіксований у RUB,00 копійок; юридичну придатність тексту він не підтверджує.",
    "example": "Число 1234 записується як «одна тисяча двісті тридцять чотири». А 2000 дасть «дві тисячі», бо форма залежить саме від останньої цифри триади.",
    "faq": [
      {
        "q": "Навіщо писати числа прописом?",
        "a": "Запис словами допомагає звірити прочитану величину з цифрами. Він не гарантує захисту від підробки чи юридичної придатності документа."
      },
      {
        "q": "Чому форма слова змінюється?",
        "a": "Через узгодження числівника з іменником: «одна тисяча», «дві тисячі», «п’ять тисяч». Форма визначається останньою цифрою триади, а для чисел від 11 до 14 діє окреме правило."
      },
      {
        "q": "Як записувати копійки?",
        "a": "Ця форма приймає лише цілі числа. Окремий рядок фіксовано в рублях RUB, завжди з 00 копійок; гривні й дробова сума не підтримуються."
      },
      {
        "q": "Чи є обмеження на розмір числа?",
        "a": "Так: від−999 999 999 999 до 999 999 999 999. Це межа реалізації з чотирма триадами, а не математичне обмеження назв чисел."
      }
    ]
  }
};
