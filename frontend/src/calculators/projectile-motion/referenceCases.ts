import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   20 м/с под 45°: vy = vx = 14,142; t = 2·14,142 / 9,80665 = 2,884; L = 40,789
//   15 м/с под 30° с 2 м: vy = 7,5; t = (7,5 + √(56,25 + 39,227)) / 9,80665 = 1,761
//   10 м/с под 90°: подъём и падение по 1,0197 с, дальность РОВНО нулевая
// Дальность и горизонтальная составляющая вертикального броска исправлены
// против артефакта: модель на Python оставила двоичный след cos 90° (1,2·10⁻¹⁵
// и 6,1·10⁻¹⁷), реализация приводит его к нулю тем же порогом, что общий
// `sinDegrees`. См. refcase-corrections.md.
export const projectileMotionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "20 м/с под 45° с земли",
    inputs: { v0: 20, angle: 45, h0: 0 },
    expectPrimary: "40,789 м",
    expectSecondary: [
      { label: "Время полёта", value: "2,884 с" },
      { label: "Высшая точка", value: "10,197 м" },
      { label: "Горизонтальная составляющая", value: "14,142 м/с" },
      { label: "Вертикальная составляющая", value: "14,142 м/с" },
    ],
  },
  {
    name: "15 м/с под 30° с высоты 2 м",
    inputs: { v0: 15, angle: 30, h0: 2 },
    expectPrimary: "22,878 м",
    expectSecondary: [
      { label: "Время полёта", value: "1,761 с" },
      { label: "Высшая точка", value: "4,868 м" },
      { label: "Горизонтальная составляющая", value: "12,99 м/с" },
      { label: "Вертикальная составляющая", value: "7,5 м/с" },
    ],
  },
  {
    name: "граница: вертикально вверх, дальность ровно нулевая",
    inputs: { v0: 10, angle: 90, h0: 0 },
    expectPrimary: "0 м",
    expectSecondary: [
      { label: "Время полёта", value: "2,039 с" },
      { label: "Высшая точка", value: "5,099 м" },
      { label: "Горизонтальная составляющая", value: "0 м/с" },
      { label: "Вертикальная составляющая", value: "10 м/с" },
    ],
  },
  {
    name: "угол больше 90 градусов отклоняется",
    inputs: { v0: 10, angle: 120, h0: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевая скорость отклоняется",
    inputs: { v0: 0, angle: 45, h0: 0 },
    expectPrimary: "—",
  },
];
