import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber as ordinaryNumber } from '../../lib/format';

// Требуемая полоса для одновременных пользователей.
//
// Всё, что влияет на результат, вынесено в поля: доля активных и запас
// задаются явно, а не зашиты коэффициентом «на протокол». Скрытый множитель
// выглядел бы как знание, которого у калькулятора нет, — реальные накладные
// расходы зависят от протокола, кодека и сети.
import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { exact, times, add, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const users = integerInput(inputs.users) ?? NaN;
  const perUser = read(inputs.perUser);
  const overhead = inputs.overhead === undefined ? 0 : read(inputs.overhead);
  const concurrency = read(inputs.concurrency);

  const fail = (message: string) => ({
    primary: { label: 'Требуемая полоса', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![users, perUser, overhead, concurrency].every(Number.isFinite)) return fail(INPUT);
  if (!(users >= 1)) return fail('Пользователей должно быть не меньше одного');
  if (!(perUser > 0)) return fail('Полоса на пользователя должна быть больше нуля');
  if (overhead < 0) return fail('Запас не может быть отрицательным');
  if (concurrency < 0 || concurrency > 100) return fail('Доля активных задаётся в диапазоне от 0 до 100 процентов');

  const population = times(exact(users), exact(concurrency));
  const active = divide(population, exact(100));
  const rawExact = times(population, exact(perUser));
  const raw = divide(rawExact, exact(100));
  const added = divide(times(rawExact, exact(overhead)), exact(10000));
  const need = divide(times(rawExact, add(exact(100), exact(overhead))), exact(10000));
  if (![active, raw, need, added, need / 8].every(Number.isFinite) || (concurrency > 0 && !(active > 0 && raw > 0 && need / 8 > 0)) || (concurrency > 0 && overhead > 0 && added === 0)) return fail(RANGE);

  const secondary = [
    { label: 'Без запаса', value: `${fmtNumber(raw, 1)} Мбит/с` },
    { label: 'Одновременно активны', value: `${fmtNumber(active, 1)} из ${fmtInt(users)}` },
    { label: 'В мегабайтах в секунду', value: `${fmtNumber(need / 8, 1)} МБ/с` },
  ];

  if (overhead > 0) {
    secondary.splice(1, 0, { label: 'Добавлено запасом', value: `${fmtNumber(added, 1)} Мбит/с` });
  }

  if (need >= 1000) {
    secondary.unshift({ label: 'В гигабитах', value: `${fmtNumber(need / 1000, 2)} Гбит/с` });
  }

  return {
    primary: { label: 'Требуемая полоса', value: `${fmtNumber(need, 1)} Мбит/с` },
    secondary,
  };
};
