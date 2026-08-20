import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Время чтения и время речи по объёму текста.
//
// Отличается от калькулятора скорости чтения направлением: там измеряют
// СКОРОСТЬ по прочитанному за известное время, здесь по известной скорости
// оценивают ДЛИТЕЛЬНОСТЬ. Отсюда и два режима: можно вставить текст, а можно
// ввести число слов, если текста под рукой нет.
//
// Скорости — редактируемые допущения, а не нормативы: 200 слов в минуту про
// себя и 130 вслух это средние ориентиры, и у конкретного человека и текста
// они другие. Речь медленнее чтения примерно в полтора раза, и именно поэтому
// доклад по тексту на пять минут чтения занимает почти восемь.
//
// Секунды округляются до целого: доли секунды в оценке длительности не значат
// ничего, а «9 мин 13,846 с» читается хуже, чем «9 мин 14 с».

const WORD = /[0-9A-Za-zА-Яа-яЁёІіЇїЄєҐґ][0-9A-Za-zА-Яа-яЁёІіЇїЄєҐґ'\-]*/g;
const clock = (seconds: number) => `${Math.floor(seconds / 60)} мин ${seconds % 60} с`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'words');
  const wpm = toNumber(inputs.wpm);
  const speechWpm = toNumber(inputs.speechWpm);

  const fail = (message: string) => ({
    primary: { label: 'Время чтения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const words = mode === 'text'
    ? (toStr(inputs.text, '').match(WORD) ?? []).length
    : toNumber(inputs.words);

  if (!(words > 0)) {
    return fail(mode === 'text' ? 'Вставьте текст — в нём не найдено ни одного слова' : 'Число слов должно быть больше нуля');
  }
  if (!(wpm > 0)) return fail('Скорость чтения должна быть больше нуля');
  if (!(speechWpm > 0)) return fail('Скорость речи должна быть больше нуля');

  const readSeconds = Math.round((words / wpm) * 60);
  const speechSeconds = Math.round((words / speechWpm) * 60);

  return {
    primary: { label: 'Время чтения', value: clock(readSeconds) },
    secondary: [
      { label: 'Время вслух', value: clock(speechSeconds) },
      { label: 'Чтение в минутах', value: formatMeasure(words / wpm, fmtNumber) },
      { label: 'Речь в минутах', value: formatMeasure(words / speechWpm, fmtNumber) },
      { label: 'Слов', value: fmtNumber(words, 0) },
    ],
  };
};
