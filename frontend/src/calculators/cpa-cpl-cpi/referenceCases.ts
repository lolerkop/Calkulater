import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const cpaCplCpiReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "бюджет 84 000, 320 заявок",
    inputs: {"actions": 320, "cost": 84000, "mode": "cpl"},
    expectPrimary: "262,50 ₽",
    expectSecondary: [{ label: "Бюджет", value: "84 000,00 ₽" }, { label: "Действий", value: "320" }, { label: "На тысячу действий", value: "262 500,00 ₽" }],
  },
  {
    name: "бюджет 25 500, 1 700 установок",
    inputs: {"actions": 1700, "cost": 25500, "mode": "cpi"},
    expectPrimary: "15,00 ₽",
    expectSecondary: [{ label: "Бюджет", value: "25 500,00 ₽" }, { label: "Действий", value: "1 700" }, { label: "На тысячу действий", value: "15 000,00 ₽" }],
  },
  {
    name: "одно целевое действие",
    inputs: {"actions": 1, "cost": 4900, "mode": "cpa"},
    expectPrimary: "4 900,00 ₽",
    expectSecondary: [{ label: "Бюджет", value: "4 900,00 ₽" }, { label: "Действий", value: "1" }, { label: "На тысячу действий", value: "4 900 000,00 ₽" }],
  },
  {
    name: "нулевое число действий отклоняется",
    inputs: {"actions": 0, "cost": 5000, "mode": "cpa"},
    expectPrimary: "—",
  },
// Дополнения: независимое деление, границы фактических счётчиков и IEEE-754.
  {
    name: 'дробные кредиты атрибуции не являются фактическими событиями',
    inputs: { mode: 'cpl', cost: 100, actions: 2.5 },
    expectPrimary: '—',
  },
  {
    name: 'неизвестное событие не подменяется CPA',
    inputs: { mode: 'other', cost: 100, actions: 2 },
    expectPrimary: '—',
  },
  {
    name: 'деление до масштаба сохраняет конечную стоимость тысячи',
    inputs: { mode: 'cpa', cost: 1e308, actions: 1000000 },
    expectPrimary: '1,000·10^302 ₽',
    expectSecondary: [{ label: 'На тысячу действий', value: '1,000·10^305 ₽' }],
  },
];
