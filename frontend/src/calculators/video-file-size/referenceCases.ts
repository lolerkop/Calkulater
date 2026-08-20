import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   (8 · 1000 + 128) = 8128 кбит/с; 10 мин = 600 с
//   8128 · 1000 · 600 / 8 = 609 600 000 байт = 0,6096 ГБ = 609,6 МБ
//   в мебибайтах 609 600 000 / 1 048 576 = 581,3598632…
//   (25 · 1000 + 256) = 25 256; 90 мин = 5400 с -> 17 047 800 000 байт = 17,0478 ГБ
//   без звука: 8000 · 1000 · 600 / 8 = 600 000 000 байт = 0,6 ГБ
export const videoFileSizeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "восемь мегабит видео и 128 килобит звука за десять минут",
    inputs: { videoMbps: 8, audioKbps: 128, minutes: 10 },
    expectPrimary: "0,6096 ГБ",
    expectSecondary: [
      { label: "В мегабайтах", value: "609,6 МБ" },
      { label: "В мебибайтах", value: "581,36 МиБ" },
      { label: "Суммарный битрейт", value: "8 128 кбит/с" },
    ],
  },
  {
    name: "полуторачасовое видео на 25 мегабитах",
    inputs: { videoMbps: 25, audioKbps: 256, minutes: 90 },
    expectPrimary: "17,048 ГБ",
    expectSecondary: [
      { label: "В мегабайтах", value: "17 047,8 МБ" },
      { label: "Суммарный битрейт", value: "25 256 кбит/с" },
    ],
  },
  {
    name: "граница: запись без звуковой дорожки",
    inputs: { videoMbps: 8, audioKbps: 0, minutes: 10 },
    expectPrimary: "0,6 ГБ",
    expectSecondary: [{ label: "Суммарный битрейт", value: "8 000 кбит/с" }],
  },
  {
    name: "нулевая длительность отклоняется",
    inputs: { videoMbps: 8, audioKbps: 128, minutes: 0 },
    expectPrimary: "—",
  },
];
