import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pictureFrameMatCopyEn } from './copy.en';
import { pictureFrameMatCopyUk } from './copy.uk';
import { pictureFrameMatCopyDe } from './copy.de';
import { pictureFrameMatReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "picture-frame-mat",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pictureFrameMatCopyEn, uk: pictureFrameMatCopyUk, de: pictureFrameMatCopyDe },
  referenceCases: pictureFrameMatReferenceCases,
  publishedExample: { inputs: { photoWidth: 20, photoHeight: 30, border: 5, bottomExtra: 1 }, expected: ["30×41 см"] },
  presentation: {
    id: "picture-frame-mat",
    name: "Калькулятор паспарту и рамы",
    slug: "polya-passepartu",
    fullPath: "/household/polya-passepartu/",
    category: "household",
    icon: "rectangle-horizontal",
    popularity: 29,
    isNew: false,
    shortDescription: "Размер рамы и ширина полей паспарту под фотографию.",
    longDescription:
      "Нижнее поле паспарту делают шире остальных — это старое правило багетной мастерской, и причина у него оптическая: геометрически равные поля глаз читает как «низ уже», и работа кажется съезжающей вниз. Прибавка в один-два сантиметра выравнивает восприятие. Поэтому утяжеление вынесено отдельным полем: без него расчёт дал бы формально верную, но зрительно неправильную раму.",
    seoTitle: "Калькулятор паспарту и рамы — размер под фотографию",
    seoDescription: "Рассчитайте размер рамы и ширину полей паспарту по размеру фотографии, с утяжелением нижнего поля.",
    h1: "Калькулятор паспарту и рамы",
    keywords: ["паспарту", "размер рамы", "багет", "оформление фотографии"],
    fields: [
      { name: 'photoWidth', label: 'Ширина фотографии, см', type: 'number', defaultValue: 20, min: 0, step: 1 },
      { name: 'photoHeight', label: 'Высота фотографии, см', type: 'number', defaultValue: 30, min: 0, step: 1 },
      { name: 'border', label: 'Поле сверху и по бокам, см', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
      { name: 'bottomExtra', label: 'Утяжеление нижнего поля, см', type: 'number', defaultValue: 1, min: 0, step: 0.5 },
    ],
    resultLabels: {
      "outer": "Размер рамы",
      "bottom": "Нижнее поле",
      "border": "Верх и бока",
      "matArea": "Площадь паспарту",
      "aspect": "Соотношение сторон рамы",
    },
    howToUse: [
      "Размер фотографии берите видимый — тот, что останется в окне паспарту после нахлёста.",
      "Поле обычно берут от одной пятой до одной трети меньшей стороны фотографии.",
      "Утяжеление низа делают в один-два сантиметра; при равных полях работа кажется съезжающей вниз.",
      "Размер рамы — это внешний размер паспарту: багет крепится по нему.",
    ],
    howItWorks: "Ширина рамы = фото + 2 поля; высота = фото + 2 поля + утяжеление.",
    example: "Фотография 20×30 с полем 5 см и утяжелением 1 см требует раму 30×41 см.",
    faq: [
      { q: "Зачем нижнее поле шире?", a: "Из-за оптического обмана: при геометрически равных полях глаз воспринимает нижнее как более узкое, и композиция кажется съезжающей. Прибавка в один-два сантиметра выравнивает восприятие — правило старше фотографии и пришло из живописи." },
      { q: "Какой ширины делать поля?", a: "Обычно от одной пятой до одной трети меньшей стороны работы. Узкие поля делают оформление тесным, слишком широкие — превращают паспарту в главный элемент." },
      { q: "Считать ли нахлёст паспарту на фотографию?", a: "Да, окно вырезают на несколько миллиметров меньше снимка, иначе он провалится. Здесь задавайте ВИДИМЫЙ размер: то, что останется в окне." },
      { q: "Подойдёт ли расчёт для холста?", a: "Для холста на подрамнике паспарту обычно не делают. Но если нужна рама с отступом — расчёт тот же, только полем задают ширину этого отступа." },
    ],
    relatedCalculatorIds: ["curtain-size", "geom-rectangle", "ppi-dpi"],
  },
};
