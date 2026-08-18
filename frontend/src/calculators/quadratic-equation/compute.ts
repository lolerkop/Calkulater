import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Квадратное уравнение ax² + bx + c = 0.
//
// При a = 0 уравнение перестаёт быть квадратным. Здесь это ошибка ввода, а не
// молчаливый переход к линейному случаю: пользователь, набравший ноль по
// ошибке, получил бы правдоподобный ответ на другую задачу и не заметил бы
// подмены. Комплексные корни за пределами задачи: при отрицательном
// дискриминанте калькулятор говорит, что действительных корней нет.
const round4 = (value: number) => (Number.isInteger(value) ? String(value) : fmtNumber(value, 4));

export const compute: CalcFunction = (inputs) => {
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const c = toNumber(inputs.c);

  if (a === 0) {
    return {
      primary: { label: 'Корни', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'При a = 0 уравнение не квадратное', accent: 'red' as const }],
    };
  }

  const discriminant = b * b - 4 * a * c;
  const vertex = -b / (2 * a);

  const roots =
    discriminant > 0
      ? [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
      : discriminant === 0
        ? [vertex]
        : [];

  const rootsText =
    roots.length === 2
      ? `x₁ = ${round4(roots[0])}, x₂ = ${round4(roots[1])}`
      : roots.length === 1
        ? `x = ${round4(roots[0])}`
        : 'Действительных корней нет';

  return {
    primary: { label: 'Корни', value: rootsText },
    secondary: [
      { label: 'Дискриминант', value: round4(discriminant), accent: discriminant < 0 ? 'red' : 'green' },
      { label: 'Число корней', value: String(roots.length) },
      { label: 'Вершина параболы', value: `x = ${round4(vertex)}` },
    ],
  };
};
