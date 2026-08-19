import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Требуемая полоса для одновременных пользователей.
//
// Всё, что влияет на результат, вынесено в поля: доля активных и запас
// задаются явно, а не зашиты коэффициентом «на протокол». Скрытый множитель
// выглядел бы как знание, которого у калькулятора нет, — реальные накладные
// расходы зависят от протокола, кодека и сети.
export const compute: CalcFunction = (inputs) => {
  const users = Math.round(toNumber(inputs.users));
  const perUser = toNumber(inputs.perUser);
  const overhead = toNumber(inputs.overhead);
  const concurrency = toNumber(inputs.concurrency);

  const fail = (message: string) => ({
    primary: { label: 'Требуемая полоса', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(users >= 1)) return fail('Пользователей должно быть не меньше одного');
  if (!(perUser > 0)) return fail('Полоса на пользователя должна быть больше нуля');
  if (overhead < 0) return fail('Запас не может быть отрицательным');
  if (!(concurrency > 0) || concurrency > 100) return fail('Доля активных задаётся в диапазоне от 0 до 100 процентов');

  const active = users * (concurrency / 100);
  const raw = active * perUser;
  const need = raw * (1 + overhead / 100);

  const secondary = [
    { label: 'Без запаса', value: `${fmtNumber(raw, 1)} Мбит/с` },
    { label: 'Одновременно активны', value: `${fmtNumber(active, 1)} из ${fmtInt(users)}` },
    { label: 'В мегабайтах в секунду', value: `${fmtNumber(need / 8, 1)} МБ/с` },
  ];

  if (overhead > 0) {
    secondary.splice(1, 0, { label: 'Добавлено запасом', value: `${fmtNumber(need - raw, 1)} Мбит/с` });
  }

  if (need >= 1000) {
    secondary.unshift({ label: 'В гигабитах', value: `${fmtNumber(need / 1000, 2)} Гбит/с` });
  }

  return {
    primary: { label: 'Требуемая полоса', value: `${fmtNumber(need, 1)} Мбит/с` },
    secondary,
  };
};
