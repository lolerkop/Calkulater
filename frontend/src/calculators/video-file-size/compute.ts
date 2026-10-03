import type { CalcFunction } from '../../lib/types';
import { fmtNumber as ordinaryNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Размер видеофайла по битрейту и длительности.
//
// Битрейты видео и звука складываются ДО перевода в байты: дорожки пишутся в
// один контейнер, и считать их размеры по отдельности с округлением на каждом
// шаге значит терять на стыке. Звук в 128 кбит/с добавляет к часу записи почти
// 58 МБ — величина, которую «на глаз» обычно отбрасывают.
//
// Гигабайт здесь десятичный: 10⁹ байт. Так считают битрейт, так подписывают
// объём накопителей и так показывают размер файла операционные системы, кроме
// Windows. Двоичный мебибайт выведен отдельной строкой, чтобы расхождение с
// проводником было видно, а не выглядело ошибкой расчёта.

const size = (value: number) => (value !== 0 && Math.abs(value) < 1e-6 ? value.toExponential(3).replace('.', ',') : formatMeasure(value, fmtNumber));

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';

import { exact, times, add, number as asNumber, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const videoMbps = read(inputs.videoMbps);
  const audioKbps = read(inputs.audioKbps);
  const minutes = read(inputs.minutes);

  const fail = (message: string) => ({
    primary: { label: 'Размер файла', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![videoMbps, audioKbps, minutes].every(Number.isFinite)) return fail(INPUT);
  if (!(videoMbps > 0)) return fail('Битрейт видео должен быть больше нуля');
  if (!(minutes > 0)) return fail('Длительность должна быть больше нуля');
  if (audioKbps < 0) return fail('Битрейт звука не может быть отрицательным');

  const rates = add(times(exact(videoMbps), exact(1000)), exact(audioKbps));
  const totalKbps = asNumber(rates);
  const bytesExact = times(rates, exact(1000), exact(minutes), exact(60));
  const gb = divide(bytesExact, exact(8e9)), mb = divide(bytesExact, exact(8e6)), mib = divide(bytesExact, exact(8 * 1048576));
  const minuteMb = divide(times(rates, exact(1000), exact(60)), exact(8e6));
  if (![totalKbps, gb, mb, mib, minuteMb].every(v => Number.isFinite(v) && v > 0)) return fail(RANGE);

  return {
    primary: { label: 'Размер файла', value: `${size(gb)} ГБ` },
    secondary: [
      { label: 'В мегабайтах', value: `${size(mb)} МБ` },
      { label: 'В мебибайтах', value: `${size(mib)} МиБ` },
      { label: 'Суммарный битрейт', value: `${size(totalKbps)} кбит/с` },
      { label: 'Размер одной минуты', value: `${size(minuteMb)} МБ` },
    ],
  };
};
