import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
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

const size = (value: number) => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const videoMbps = toNumber(inputs.videoMbps);
  const audioKbps = toNumber(inputs.audioKbps);
  const minutes = toNumber(inputs.minutes);

  const fail = (message: string) => ({
    primary: { label: 'Размер файла', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(videoMbps > 0)) return fail('Битрейт видео должен быть больше нуля');
  if (!(minutes > 0)) return fail('Длительность должна быть больше нуля');
  if (audioKbps < 0) return fail('Битрейт звука не может быть отрицательным');

  const totalKbps = videoMbps * 1000 + audioKbps;
  const seconds = minutes * 60;
  const bytes = (totalKbps * 1000 * seconds) / 8;

  return {
    primary: { label: 'Размер файла', value: `${size(bytes / 1e9)} ГБ` },
    secondary: [
      { label: 'В мегабайтах', value: `${size(bytes / 1e6)} МБ` },
      { label: 'В мебибайтах', value: `${size(bytes / 1048576)} МиБ` },
      { label: 'Суммарный битрейт', value: `${size(totalKbps)} кбит/с` },
      { label: 'Размер одной минуты', value: `${size(bytes / 1e6 / minutes)} МБ` },
    ],
  };
};
