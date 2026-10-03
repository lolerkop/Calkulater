import type { CalcFunction } from '../types';
import { fmtNumber, toNumber } from '../format';

export function bmiValue(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100;
  if (heightM <= 0) return 0;
  return weightKg / (heightM * heightM);
}

export function bmiCategory(bmi: number): { category: string; note: string; accent: 'green' | 'red' | 'neutral' } {
  const note = 'Категория ИМТ не определяет диагноз или необходимое лечение.';
  if (bmi < 16) return { category: 'Выраженный дефицит', note, accent: 'red' };
  if (bmi < 18.5) return { category: 'Недостаток веса', note, accent: 'red' };
  if (bmi < 25) return { category: 'Норма', note, accent: 'green' };
  if (bmi < 30) return { category: 'Избыточный вес', note, accent: 'red' };
  if (bmi < 35) return { category: 'Ожирение I степени', note, accent: 'red' };
  if (bmi < 40) return { category: 'Ожирение II степени', note, accent: 'red' };
  return { category: 'Ожирение III степени', note, accent: 'red' };
}

export const calcBmi: CalcFunction = (inputs) => {
  const read = (value: unknown) => typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const height = read(inputs.height);
  const weight = read(inputs.weight);

  if (![height, weight].every((x) => Number.isFinite(x) && x > 0) || !Number.isFinite(bmiValue(height, weight)) || bmiValue(height, weight) <= 0) {
    return {
      primary: { label: 'ИМТ', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите рост и вес', accent: 'red' }],
    };
  }

  const bmi = bmiValue(height, weight);
  const cat = bmiCategory(bmi);
  const heightM = height / 100;
  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = 25 * heightM * heightM;
  if (![healthyMin, healthyMax].every((x) => Number.isFinite(x) && x > 0)) return {
    primary: { label: 'ИМТ', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: 'Результат выходит за числовой диапазон', accent: 'red' }],
  };
  const display = (x: number) => x < 0.05 ? x.toExponential(2) : fmtNumber(x, 1);

  return {
    primary: { label: 'ИМТ', value: display(bmi) },
    secondary: [
      { label: 'Категория', value: cat.category, accent: cat.accent },
      { label: 'Комментарий', value: cat.note },
      { label: 'Рост', value: `${height} см` },
      { label: 'Вес', value: `${weight} кг` },
      { label: 'Ориентир здорового веса', value: `≥ ${display(healthyMin)} и < ${display(healthyMax)} кг` },
    ],
    note: 'Взрослые категории рассчитаны для возраста от 20 лет. Категория выбирается до округления ИМТ; границы диапазона веса округлены. ИМТ не измеряет состав тела и не задаёт индивидуальную цель веса.',
  };
};
