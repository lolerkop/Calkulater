import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Предельный КПД тепловой машины: η = 1 − Tc/Th.
//
// Это ПОТОЛОК, а не фактический КПД: ни один настоящий двигатель его не
// достигает, потому что цикл Карно требует бесконечно медленных процессов без
// трения и теплообмена при конечной разности температур. Реальный ДВС отдаёт
// около трети, паровая турбина — около половины того, что обещает Карно.
//
// Температуры только в кельвинах: формула про отношение абсолютных температур,
// и подстановка градусов Цельсия дала бы бессмыслицу, включая отрицательный
// КПД при комнатной температуре. Ноль и ниже отвергаются, а холодная сторона
// не может быть теплее горячей — это не край диапазона, а перепутанные поля.
const REFERENCE_HEAT = 1000;

export const compute: CalcFunction = (inputs) => {
  const tHot = toNumber(inputs.tHot);
  const tCold = toNumber(inputs.tCold);
  const fail = (message: string) => ({
    primary: { label: 'Предельный КПД', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(tHot > 0)) return fail('Температура нагревателя должна быть больше нуля кельвинов');
  if (!(tCold > 0)) return fail('Температура холодильника должна быть больше нуля кельвинов');
  if (tCold >= tHot) return fail('Холодильник не может быть теплее нагревателя');

  const eta = 1 - tCold / tHot;
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;
  return {
    primary: { label: 'Предельный КПД', value: `${formatStatistic(eta * 100, fmtNumber)} %` },
    secondary: [
      { label: 'Полезная работа из 1000 Дж тепла', value: m(eta * REFERENCE_HEAT, 'Дж') },
      { label: 'Отдано холодильнику', value: m((1 - eta) * REFERENCE_HEAT, 'Дж') },
      { label: 'Перепад температур', value: m(tHot - tCold, 'К') },
      { label: 'Отношение температур', value: formatMeasure(tCold / tHot, fmtNumber) },
    ],
  };
};
