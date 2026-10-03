import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Independent integer sums: 40 = 25+15, 33.75 = 25+5+2.5+1.25.
// The zero-side boundary needs no plates: target equals bar, shortfall is zero.
// New arbitrary denominations use exact reachable sums, not a greedy oracle.
export const barbellPlatesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сто килограммов на олимпийском грифе",
    inputs: { "bar": 20, "plates": "25 20 15 10 5 2.5 1.25", "target": 100 },
    expectPrimary: "25×1 + 15×1",
    expectSecondary: [
      { label: "Фактический вес", value: "100 кг" },
      { label: "Недобор", value: "0 кг" },
      { label: "На сторону", value: "40 кг" },
      { label: "Блинов на сторону", value: "2" },
    ],
  },
  {
    name: "восемьдесят семь с половиной набираются точно",
    inputs: { "bar": 20, "plates": "25 20 15 10 5 2.5 1.25", "target": 87.5 },
    expectPrimary: "25×1 + 5×1 + 2,5×1 + 1,25×1",
    expectSecondary: [
      { label: "Фактический вес", value: "87,5 кг" },
      { label: "Недобор", value: "0 кг" },
      { label: "На сторону", value: "33,75 кг" },
      { label: "Блинов на сторону", value: "4" },
    ],
  },
  {
    name: "граница: пустой гриф",
    inputs: { "bar": 20, "plates": "25 20 15 10 5 2.5 1.25", "target": 20 },
    expectPrimary: "Без дополнительных блинов",
    expectSecondary: [
      { label: "Фактический вес", value: "20 кг" },
      { label: "Недобор", value: "0 кг" },
      { label: "На сторону", value: "0 кг" },
      { label: "Блинов на сторону", value: "0" },
    ],
  },
  {
    name: "целевой вес меньше грифа отклоняется",
    inputs: { "bar": 20, "plates": "25 20 15", "target": 15 },
    expectPrimary: "—",
  },
  {
    name: "пустой список блинов отклоняется",
    inputs: { "bar": 20, "plates": "", "target": 100 },
    expectPrimary: "—",
  },
  { name: '3+3 reaches six per side where greedy four fails', inputs: {target:32,bar:20,plates:'4 3'}, expectPrimary:'3×2', expectSecondary:[{label:'Фактический вес',value:'32 кг'},{label:'Недобор',value:'0 кг'},{label:'Блинов на сторону',value:'2'}] },
  { name: 'six per side uses two threes rather than three twos', inputs: {target:32,bar:20,plates:'3 2'}, expectPrimary:'3×2' },
  { name: 'unreachable seven per side returns six with one plate', inputs: {target:34,bar:20,plates:'6 4'}, expectPrimary:'6×1', expectSecondary:[{label:'Фактический вес',value:'32 кг'},{label:'Недобор',value:'2 кг'}] },
  { name: 'one gram denominated plate preserves precision', inputs: {target:.002,bar:0,plates:'0.001'}, expectPrimary:'0,001×1' },
  { name: 'nonfinite target rejected', inputs: {target:'Infinity',bar:20,plates:'25'}, expectPrimary:'—' },
  { name: 'unsupported fine denomination rejected', inputs: {target:32,bar:20,plates:'.0001'}, expectPrimary:'—' },
  { name: 'product load cap prevents enormous search', inputs: {target:1001,bar:20,plates:'1'}, expectPrimary:'—' },
];
