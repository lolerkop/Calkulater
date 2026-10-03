import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { resistorColorCopyEn } from './copy.en';
import { resistorColorCopyUk } from './copy.uk';
import { resistorColorCopyDe } from './copy.de';
import { resistorColorCopyEs } from './copy.es';
import { resistorColorReferenceCases } from './referenceCases';

// Подписи вариантов — только цвета, и это не экономия текста.
//
// Посетитель смотрит на корпус резистора и видит именно цвет; цифру, множитель
// и процент он как раз и пришёл узнать. Подставлять их в подпись варианта
// значило бы решить задачу до нажатия «рассчитать».
//
// Техническое следствие того же выбора: локализация вариантов ключуется ЗНАЧЕНИЕМ
// варианта в пределах калькулятора, а не парой «поле + значение». Цветовые
// подписи это выдерживают: значение 2 — красный и в разряде, и во множителе, и в
// допуске. Единственное исключение — допуск 5 %: его полоса золотистая, а
// разрядная полоса со значением 5 зелёная. Поэтому у этого варианта значение
// записано как «5,0» — то же число, но другой ключ.
const COLOR_BANDS = [
  { value: '0', label: 'чёрный' },
  { value: '1', label: 'коричневый' },
  { value: '2', label: 'красный' },
  { value: '3', label: 'оранжевый' },
  { value: '4', label: 'жёлтый' },
  { value: '5', label: 'зелёный' },
  { value: '6', label: 'синий' },
  { value: '7', label: 'фиолетовый' },
  { value: '8', label: 'серый' },
  { value: '9', label: 'белый' },
];

export const definition: CalculatorDefinitionV2 = {
  id: "resistor-color",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: resistorColorCopyEn, uk: resistorColorCopyUk, de: resistorColorCopyDe, es: resistorColorCopyEs },
  referenceCases: resistorColorReferenceCases,
  publishedExample: { inputs: { b1: 4, b2: 7, mult: 2, tol: 5 }, expected: ["4,7 кОм"] },
  presentation: {
    id: "resistor-color",
    name: "Калькулятор цветовой маркировки резистора",
    slug: "cvetovaya-markirovka-rezistora",
    fullPath: "/electronics/cvetovaya-markirovka-rezistora/",
    category: "electronics",
    icon: "zap",
    popularity: 44,
    isNew: false,
    shortDescription: "Номинал резистора по четырём цветным полосам и его поле допуска.",
    
    seoTitle: "Калькулятор цветовой маркировки резистора — номинал по полосам",
    seoDescription: "Определите номинал резистора по цветным полосам: две цифры, множитель и допуск. Показывает границы поля допуска в омах.",
    h1: "Калькулятор цветовой маркировки резистора",
    keywords: ["цветовая маркировка резистора", "цвета резисторов", "расшифровка полос резистора", "номинал резистора по цвету"],
    fields: [
      { name: 'b1', label: 'Первая полоса — первая цифра', type: 'select', defaultValue: '4', options: COLOR_BANDS },
      { name: 'b2', label: 'Вторая полоса — вторая цифра', type: 'select', defaultValue: '7', options: COLOR_BANDS },
      {
        name: 'mult', label: 'Третья полоса — множитель', type: 'select', defaultValue: '2',
        options: [
          { value: '-2', label: 'серебристый' },
          { value: '-1', label: 'золотистый' },
          ...COLOR_BANDS.slice(0, 8),
        ],
      },
      {
        name: 'tol', label: 'Четвёртая полоса — допуск', type: 'select', defaultValue: '5,0',
        options: [
          { value: '1', label: 'коричневый' },
          { value: '2', label: 'красный' },
          { value: '5,0', label: 'золотистый' },
          { value: '10', label: 'серебристый' },
        ],
      },
    ],
    resultLabels: {
      "nominal": "Номинал",
      "tolerance": "Допуск",
      "min": "Наименьшее допустимое",
      "max": "Наибольшее допустимое",
      "span": "Ширина поля допуска",
      "multiplier": "Множитель",
      "bands": "Полосы",
    },
    
    
    
    
    relatedCalculatorIds: ["resistor-network", "led-resistor", "ohms-law"],
      
      ...contract.ru,
  },
};
