import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bulkMaterialVolumeCopyEn } from './copy.en';
import { bulkMaterialVolumeCopyUk } from './copy.uk';
import { bulkMaterialVolumeCopyDe } from './copy.de';
import { bulkMaterialVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bulk-material-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: bulkMaterialVolumeCopyEn, uk: bulkMaterialVolumeCopyUk, de: bulkMaterialVolumeCopyDe },
  referenceCases: bulkMaterialVolumeReferenceCases,
  publishedExample: { inputs: { length: 5, width: 4, depth: 10, density: 1.6, waste: 5 }, expected: ["2,1 м³"] },
  presentation: {
    id: "bulk-material-volume",
    name: "Калькулятор сыпучего материала",
    slug: "sypuchiy-material",
    fullPath: "/building/sypuchiy-material/",
    category: "building",
    icon: "package",
    popularity: 38,
    isNew: false,
    shortDescription: "Объём и масса щебня, песка или отсева на засыпку площадки.",
    longDescription:
      "Считает, сколько сыпучего материала уйдёт на засыпку: объём слоя, массу в тоннах и число мешков по 25 килограммов. Плотность здесь насыпная, а не плотность самой породы: щебень навалом весит около 1,4–1,6 т/м³, тогда как гранит в куске — 2,7, и подстановка плотности камня завысила бы массу почти вдвое. Отличие от расчёта бетона: там считается смесь по составу и марке, здесь — один материал, и главный ответ, сколько его привезти.",
    seoTitle: "Калькулятор сыпучего материала — объём и масса засыпки",
    seoDescription: "Рассчитайте объём и массу щебня, песка или отсева на засыпку площадки по размерам, толщине слоя и насыпной плотности.",
    h1: "Калькулятор сыпучего материала",
    keywords: ["расчёт щебня", "сколько песка на засыпку", "объём сыпучего материала", "калькулятор отсева"],
    fields: [
      { name: 'length', label: 'Длина площадки, м', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
      { name: 'width', label: 'Ширина площадки, м', type: 'number', defaultValue: 4, min: 0, step: 0.5 },
      { name: 'depth', label: 'Толщина слоя, см', type: 'number', defaultValue: 10, min: 0, step: 1 },
      { name: 'density', label: 'Насыпная плотность, т/м³', type: 'number', defaultValue: 1.6, min: 0, step: 0.05 },
      { name: 'waste', label: 'Запас на усадку, %', type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "need": "Нужно материала",
      "volume": "Чистый объём",
      "mass": "Масса",
      "bags": "Мешков по 25 кг",
      "area": "Площадь основания",
    },
    howToUse: [
      "Введите длину и ширину засыпаемой площадки.",
      "Задайте толщину слоя в сантиметрах.",
      "Укажите насыпную плотность: щебень 1,4–1,6, песок 1,5–1,7, отсев 1,4 т/м³.",
      "Добавьте запас на усадку: под трамбовку обычно 5–15 %.",
    ],
    howItWorks: "Объём = длина × ширина × толщина слоя, где сантиметры переводятся в метры делением на 100. Масса = объём с запасом × насыпная плотность.",
    example: "Площадка 5 × 4 м со слоем 10 см и запасом 5 % требует 2,1 м³ щебня — 3,36 тонны.",
    faq: [
      { q: "Какую плотность вводить?", a: "Насыпную, а не плотность породы. Щебень навалом весит 1,4–1,6 т/м³, песок 1,5–1,7. Плотность гранита 2,7 относится к камню, а не к куче с воздухом между зёрнами." },
      { q: "Зачем запас на усадку?", a: "Под трамбовкой слой уплотняется, и объём в кузове больше объёма в готовом основании. Пять-пятнадцать процентов закрывают эту разницу." },
      { q: "Чем это отличается от расчёта бетона?", a: "Бетон считается по составу и марке: цемент, песок, щебень и вода в пропорции. Здесь считается один материал, и ответ — сколько кубометров и тонн заказать." },
      { q: "Почему мешков получается так много?", a: "Потому что мешок в 25 кг — это около 0,016 м³. Для объёмов свыше кубометра сыпучее выгоднее брать навалом." },
    ],
    relatedCalculatorIds: ["concrete", "slab-foundation", "room-volume"],
  },
};
