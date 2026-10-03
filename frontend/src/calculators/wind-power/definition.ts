import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { windPowerCopyEn } from './copy.en';
import { windPowerCopyUk } from './copy.uk';
import { windPowerCopyDe } from './copy.de';
import { windPowerCopyEs } from './copy.es';
import { windPowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "wind-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: windPowerCopyEn, uk: windPowerCopyUk, de: windPowerCopyDe, es: windPowerCopyEs },
  referenceCases: windPowerReferenceCases,
  publishedExample: { inputs: { d: 3, v: 7, cp: 0.4, rho: 1.225 }, expected: ["0,594 кВт"] },
  presentation: {
    id: "wind-power",
    name: "Калькулятор мощности ветрового потока",
    slug: "moshchnost-vetra",
    fullPath: "/physics/moshchnost-vetra/",
    category: "physics",
    icon: "atom",
    popularity: 28,
    isNew: false,
    shortDescription: "Мощность ветрового потока и снимаемая мощность ветроколеса с пределом Бетца.",
    seoTitle: "Калькулятор мощности ветрового потока и ветрогенератора",
    seoDescription: "Мгновенная механическая мощность идеального ротора, точный предел Бетца 16/27 и энергия при постоянных условиях за 24 часа.",
    h1: "Калькулятор мощности ветрового потока",
    keywords: ["мощность ветра", "ветрогенератор", "предел Бетца", "ометаемая площадь"],
    fields: [
      { name: 'd', label: "Диаметр ветроколеса", type: 'number', defaultValue: 3, min: 0, step: 0.5 , unit: "м" },
      { name: 'v', label: "Скорость ветра", type: 'number', defaultValue: 7, min: 0, step: 0.5 , unit: "м/с" },
      { name: 'cp', label: "Коэффициент использования", type: 'number', defaultValue: 0.4, min: 0, max: 16 / 27, step: 0.01 , unit: "1" },
      { name: 'rho', label: "Плотность воздуха", type: 'number', defaultValue: 1.225, min: 0, step: 0.005 , unit: "кг/м³" },
    ],
    resultLabels: {
      "useful": "Снимаемая мощность", "flow": "Мощность потока",
      "area": "Ометаемая площадь", "betz": "Предел Бетца", "daily": "Выработка за сутки",
    },
    relatedCalculatorIds: ["physics-power", "air-density", "kinetic-energy"],
      ...contract.ru,
  },
};
