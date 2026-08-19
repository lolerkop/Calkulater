import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Скорость чтения: слова, делённые на время.
//
// Оценка времени на книгу появляется только тогда, когда объём книги задан:
// необязательное поле здесь значит «этой величины нет», а не «подставь ноль».
// Понимание прочитанного калькулятор не измеряет — только скорость, и это
// сказано на самой странице, чтобы результат не выдавали за оценку навыка.
const asDuration = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);
  return hours > 0 ? `${fmtInt(hours)} ч ${minutes} мин` : `${Math.round(totalMinutes)} мин`;
};

export const compute: CalcFunction = (inputs) => {
  const words = Math.round(toNumber(inputs.words));
  const minutes = toNumber(inputs.minutes);
  const bookWords = Math.round(toNumber(inputs.bookWords));

  const fail = (message: string) => ({
    primary: { label: 'Скорость чтения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(words > 0)) return fail('Число слов должно быть больше нуля');
  if (!(minutes > 0)) return fail('Время должно быть больше нуля');

  const wpm = words / minutes;

  const secondary = [
    { label: 'Слов в час', value: fmtInt(wpm * 60) },
    { label: 'Знаков в минуту (примерно)', value: fmtInt(wpm * 6) },
  ];

  if (bookWords > 0) {
    secondary.push({ label: 'Время на книгу', value: asDuration(bookWords / wpm) });
  }

  return {
    primary: { label: 'Скорость чтения', value: `${fmtInt(wpm)} слов/мин` },
    secondary,
  };
};
