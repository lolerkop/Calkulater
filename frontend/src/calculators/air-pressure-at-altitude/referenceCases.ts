import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const airPressureAtAltitudeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "граница 1",
    inputs: { h: 0 },
    expectPrimary: "101,33 кПа",
    expectSecondary: [
      { label: "В миллиметрах ртутного столба", value: "760 мм рт. ст." },
      { label: "Доля от уровня моря", value: "100 %" },
      { label: "Температура по стандартной атмосфере", value: "15 °C" },
      { label: "Плотность воздуха", value: "1,225 кг/м³" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { h: 2000 },
    expectPrimary: "79,496 кПа",
    expectSecondary: [
      { label: "В миллиметрах ртутного столба", value: "596,27 мм рт. ст." },
      { label: "Доля от уровня моря", value: "78,456 %" },
      { label: "Температура по стандартной атмосфере", value: "2 °C" },
      { label: "Плотность воздуха", value: "1,006 кг/м³" },
    ],
  },
  {
    name: "обычный 3",
    inputs: { h: 8848 },
    expectPrimary: "31,445 кПа",
    expectSecondary: [
      { label: "В миллиметрах ртутного столба", value: "235,85 мм рт. ст." },
      { label: "Доля от уровня моря", value: "31,033 %" },
      { label: "Температура по стандартной атмосфере", value: "-42,512 °C" },
      { label: "Плотность воздуха", value: "0,4749 кг/м³" },
    ],
  },
  {
    name: "высота вне диапазона от −430 до 11 000 м",
    inputs: { h: -600 },
    expectPrimary: "—",
  },
  {
    name: "высота вне диапазона от −430 до 11 000 м",
    inputs: { h: 15000 },
    expectPrimary: "—",
  },
];
