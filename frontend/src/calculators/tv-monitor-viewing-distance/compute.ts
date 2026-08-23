import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Расстояние до телевизора считается не «по диагонали в дюймах», а по УГЛУ
// обзора: THX рекомендует, чтобы экран занимал около 40 градусов поля зрения,
// SMPTE — около 30. Отсюда две разные цифры для одного телевизора, и обе
// правильные: первая для кино, вторая для обычного просмотра.
//
// Третья строка про другое: с какого расстояния глаз перестаёт различать
// отдельные пиксели. Она зависит от разрешения, а не от угла, и объясняет,
// зачем нужен 4K на большой диагонали и почему на маленькой он не нужен.
const CM_IN_INCH = 2.54;
const THX_ANGLE = 40;
const SMPTE_ANGLE = 30;
const ARCMIN_IN_RADIAN = 3438;
const CM_IN_M = 100;

const RATIOS: Record<string, [number, number]> = {
  '16:9': [16, 9],
  '21:9': [21, 9],
  '4:3': [4, 3],
};

export const compute: CalcFunction = (inputs) => {
  const diagonal = toNumber(inputs.diag);
  const ratio = toStr(inputs.ratio, '16:9');
  const lines = toNumber(inputs.lines);
  const fail = (message: string) => ({
    primary: { label: 'Комфортное расстояние по THX', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const shape = RATIOS[ratio];
  if (!shape) return fail('Выберите пропорцию экрана из списка');
  if (!(diagonal > 0)) return fail('Диагональ должна быть больше нуля');
  if (!(lines > 0)) return fail('Число строк разрешения должно быть больше нуля');

  const [wRatio, hRatio] = shape;
  const diagonalCm = diagonal * CM_IN_INCH;
  const norm = Math.sqrt(wRatio * wRatio + hRatio * hRatio);
  const width = (diagonalCm * wRatio) / norm;
  const height = (diagonalCm * hRatio) / norm;
  const thx = width / 2 / Math.tan((THX_ANGLE / 2) * (Math.PI / 180));
  const smpte = width / 2 / Math.tan((SMPTE_ANGLE / 2) * (Math.PI / 180));
  const pixel = height / lines;
  const sharp = (pixel * ARCMIN_IN_RADIAN) / CM_IN_M;

  return {
    primary: { label: 'Комфортное расстояние по THX', value: `${formatMeasure(thx / CM_IN_M, fmtNumber)} м` },
    secondary: [
      { label: 'Комфортное по SMPTE', value: `${formatMeasure(smpte / CM_IN_M, fmtNumber)} м` },
      { label: 'Ширина экрана', value: `${formatMeasure(width, fmtNumber)} см` },
      { label: 'Высота экрана', value: `${formatMeasure(height, fmtNumber)} см` },
      { label: 'Дальше этого пиксели не различить', value: `${formatMeasure(sharp, fmtNumber)} м` },
    ],
  };
};
