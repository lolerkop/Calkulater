import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Потребление инвертора по выходной мощности и КПД.
//
// КПД выше ста процентов отвергается: это не опечатка в диапазоне, а нарушение
// сохранения энергии, и пропустить его значило бы выдать за расчёт число,
// которого не бывает. Ровно сто процентов допустимы как идеализация — потери
// тогда равны нулю, и это видно в результате.
//
// Химия аккумулятора и пусковые токи не моделируются: они требуют кривых
// разряда и данных о нагрузке, которых у калькулятора нет.
export const compute: CalcFunction = (inputs) => {
  const output = toNumber(inputs.outputPower);
  const efficiency = toNumber(inputs.efficiency);
  const voltage = toNumber(inputs.batteryVoltage);

  const fail = (message: string) => ({
    primary: { label: 'Потребляемая мощность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(output > 0)) return fail('Выходная мощность должна быть больше нуля');
  if (!(efficiency > 0)) return fail('КПД должен быть больше нуля');
  if (efficiency > 100) return fail('КПД не может превышать сто процентов');
  if (!(voltage > 0)) return fail('Напряжение батареи должно быть больше нуля');

  const input = output / (efficiency / 100);
  const current = input / voltage;
  const loss = input - output;

  return {
    primary: { label: 'Потребляемая мощность', value: `${fmtNumber(input, 1)} Вт` },
    secondary: [
      { label: 'Ток от батареи', value: `${fmtNumber(current, 2)} А` },
      { label: 'Потери', value: `${fmtNumber(loss, 1)} Вт` },
      { label: 'Полезная мощность', value: `${fmtNumber(output, 1)} Вт` },
    ],
  };
};
