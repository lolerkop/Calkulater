import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber } from '../format';

export function bmiValue(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100;
  if (heightM <= 0) return 0;
  return weightKg / (heightM * heightM);
}

export function bmiCategory(bmi: number): { category: string; note: string; accent: 'green' | 'red' | 'neutral' } {
  if (bmi < 16) return { category: 'Выраженный дефицит', note: 'Срочно обратитесь к врачу.', accent: 'red' };
  if (bmi < 18.5) return { category: 'Недостаток веса', note: 'Стоит набрать немного массы.', accent: 'red' };
  if (bmi < 25) return { category: 'Норма', note: 'Поддерживайте текущий режим.', accent: 'green' };
  if (bmi < 30) return { category: 'Избыточный вес', note: 'Рекомендуется снизить вес.', accent: 'red' };
  if (bmi < 35) return { category: 'Ожирение I степени', note: 'Обратитесь к специалисту.', accent: 'red' };
  if (bmi < 40) return { category: 'Ожирение II степени', note: 'Необходима консультация врача.', accent: 'red' };
  return { category: 'Ожирение III степени', note: 'Срочно к врачу.', accent: 'red' };
}

export const calcBmi: CalcFunction = (inputs) => {
  const height = toNumber(inputs.height);
  const weight = toNumber(inputs.weight);

  if (height <= 0 || weight <= 0) {
    return {
      primary: { label: 'ИМТ', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите рост и вес', accent: 'red' }],
    };
  }

  const bmi = bmiValue(height, weight);
  const cat = bmiCategory(bmi);
  const heightM = height / 100;
  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = 24.9 * heightM * heightM;

  return {
    primary: { label: 'ИМТ', value: fmtNumber(bmi, 1) },
    secondary: [
      { label: 'Категория', value: cat.category, accent: cat.accent },
      { label: 'Комментарий', value: cat.note },
      { label: 'Рост', value: `${height} см` },
      { label: 'Вес', value: `${weight} кг` },
      { label: 'Ориентир здорового веса', value: `${fmtNumber(healthyMin, 1)}–${fmtNumber(healthyMax, 1)} кг` },
    ],
    note: 'ИМТ — ориентировочный показатель для взрослых. Он может быть менее точным для спортсменов, беременных и людей старшего возраста.',
  };
};
