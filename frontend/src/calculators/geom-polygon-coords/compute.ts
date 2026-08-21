import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Площадь произвольного многоугольника по координатам вершин.
//
// Формула шнурков: 2A = Σ(xᵢyᵢ₊₁ − xᵢ₊₁yᵢ). Знак суммы говорит о направлении
// обхода, а модуль — о площади, поэтому оба выводятся: перепутанный порядок
// вершин это самая частая ошибка ввода, и «по часовой» даёт подсказку раньше,
// чем посетитель начнёт искать ошибку в числах.
//
// Нулевая площадь отклоняется, а не показывается нулём: три точки на одной
// прямой это не многоугольник, и «0» выглядело бы как законный ответ.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const pts: Array<{ x: number; y: number }> = [];
  for (const line of toStr(inputs.points, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length !== 2) return fail(`Нужны две координаты в строке: ${text}`);
    const x = parseLocalizedNumber(tokens[0], 'ru');
    const y = parseLocalizedNumber(tokens[1], 'ru');
    if (x === null || y === null) return fail(`Координаты должны быть числами в строке: ${text}`);
    pts.push({ x, y });
  }
  if (pts.length < 3) return fail('Нужно не меньше трёх вершин');

  const n = pts.length;
  let cross = 0;
  for (let i = 0; i < n; i += 1) {
    const a = pts[i];
    const b = pts[(i + 1) % n];
    cross += a.x * b.y - b.x * a.y;
  }
  const area = Math.abs(cross) / 2;
  if (area === 0) return fail('Вершины лежат на одной прямой: многоугольника нет');

  let perimeter = 0;
  for (let i = 0; i < n; i += 1) {
    const a = pts[i];
    const b = pts[(i + 1) % n];
    perimeter += Math.hypot(b.x - a.x, b.y - a.y);
  }
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < n; i += 1) {
    const a = pts[i];
    const b = pts[(i + 1) % n];
    const w = a.x * b.y - b.x * a.y;
    cx += (a.x + b.x) * w;
    cy += (a.y + b.y) * w;
  }
  cx /= 3 * cross;
  cy /= 3 * cross;

  const measure = (value: number) => formatMeasure(value, fmtNumber);

  return {
    primary: { label: 'Площадь', value: measure(area) },
    secondary: [
      { label: 'Периметр', value: measure(perimeter) },
      { label: 'Вершин', value: fmtNumber(n, 0) },
      { label: 'Центроид X', value: measure(cx) },
      { label: 'Центроид Y', value: measure(cy) },
      { label: 'Обход', value: cross > 0 ? 'против часовой' : 'по часовой' },
    ],
  };
};
