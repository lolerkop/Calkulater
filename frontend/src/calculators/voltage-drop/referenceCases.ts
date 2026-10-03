import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками.
//   медь 0,0175 Ом·мм²/м: R = 0,0175·20/2,5 = 0,14 Ом; ΔU = 2·0,14·16 = 4,48 В
//   алюминий, три фазы: ΔU = √3·0,235·32 = 13,025 В; Pпот = 3·32²·0,235 = 721,92 Вт
//   Множитель √3 в прежнем ожидании мощности был ошибочен; сумма тепла относится к трём жилам.
export const voltageDropReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "однофазная линия шестнадцать ампер",
    inputs: { "current": 16, "length": 20, "material": "copper", "phase": "single", "section": 2.5, "voltage": 230 },
    expectPrimary: "4,48 В",
    expectSecondary: [
      { label: "Напряжение у нагрузки", value: "225,52 В" },
      { label: "Сопротивление одной жилы", value: "0,14 Ом" },
      { label: "Потери мощности", value: "71,68 Вт" },
    ],
  },
  {
    name: "трёхфазная алюминиевая линия",
    inputs: { "current": 32, "length": 50, "material": "aluminium", "phase": "three", "section": 6, "voltage": 400 },
    expectPrimary: "13,025 В",
    expectSecondary: [
      { label: "Напряжение у нагрузки", value: "386,97 В" },
      { label: "Сопротивление одной жилы", value: "0,235 Ом" },
      { label: "Потери мощности", value: "721,92 Вт" },
    ],
  },
  {
    name: "граница: толстая жила и малый ток",
    inputs: { "current": 1, "length": 1, "material": "copper", "phase": "single", "section": 95, "voltage": 230 },
    expectPrimary: "0,000368 В",
    expectSecondary: [
      { label: "Напряжение у нагрузки", value: "230 В" },
      { label: "Сопротивление одной жилы", value: "0,000184 Ом" },
      { label: "Потери мощности", value: "0,000368 Вт" },
    ],
  },
  {
    name: "нулевой ток: обесточенная линия",
    inputs: { "current": 0, "length": 20, "material": "copper", "phase": "single", "section": 2.5, "voltage": 230 },
    expectPrimary: "0 В",
    expectSecondary: [{ label: "Потери мощности", value: "0 Вт" }],
  },
  {
    name: "неизвестный материал отклоняется",
    inputs: { "current": 16, "length": 20, "material": "gold", "phase": "single", "section": 2.5, "voltage": 230 },
    expectPrimary: "—",
  },
  {
    name: "нулевая длина: нулевые сопротивление и падение",
    inputs: { current: 16, length: 0, material: 'copper', phase: 'single', section: 2.5, voltage: 230 },
    expectPrimary: '0 В',
    expectSecondary: [{ label: 'Напряжение у нагрузки', value: '230 В' }, { label: 'Потери мощности', value: '0 Вт' }],
  },
  {
    name: "заданный ток требует падения выше питания: 2·0,14·1000 = 280 В > 230 В",
    inputs: { current: 1000, length: 20, material: 'copper', phase: 'single', section: 2.5, voltage: 230 },
    expectPrimary: '—',
  },
];
