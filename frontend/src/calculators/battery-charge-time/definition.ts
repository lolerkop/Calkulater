import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { batteryChargeTimeCopyEn } from './copy.en';
import { batteryChargeTimeCopyUk } from './copy.uk';
import { batteryChargeTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "battery-charge-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: batteryChargeTimeCopyEn, uk: batteryChargeTimeCopyUk },
  referenceCases: batteryChargeTimeReferenceCases,
  publishedExample: { inputs: { capacityAh: 100, currentA: 10, efficiency: 100 }, expected: ["10 ч 0 мин"] },
  presentation: {
    id: "battery-charge-time",
    name: "Калькулятор времени зарядки батареи",
    slug: "battery-charge-time",
    fullPath: "/electronics/battery-charge-time/",
    category: "electronics",
    icon: "battery-charging",
    popularity: 46,
    isNew: false,
    shortDescription: "Сколько времени займёт зарядка батареи при заданном токе.",
    longDescription:
      "Оценивает время зарядки: ёмкость в ампер-часах, делённая на ток зарядного устройства, с поправкой на КПД. Это обратная задача к времени работы: та страница считает, на сколько батареи хватит под нагрузкой, эта — сколько уйдёт на её восполнение. Оценка идеализированная: реальное зарядное устройство снижает ток к концу цикла, поэтому последние проценты набираются заметно дольше расчётных.",
    seoTitle: "Калькулятор времени зарядки батареи — часы по ёмкости и току",
    seoDescription: "Рассчитайте время зарядки аккумулятора по ёмкости в ампер-часах, току зарядного устройства и КПД зарядки.",
    h1: "Калькулятор времени зарядки батареи",
    keywords: ["время зарядки аккумулятора", "калькулятор зарядки батареи", "сколько заряжать аккумулятор"],
    fields: [
      { name: 'capacityAh', label: 'Ёмкость батареи, А·ч', type: 'number', defaultValue: 100, min: 0, step: 0.1 },
      { name: 'currentA', label: 'Ток зарядки, А', type: 'number', defaultValue: 10, min: 0, step: 0.1 },
      { name: 'efficiency', label: 'КПД зарядки, %', type: 'number', defaultValue: 100, min: 1, max: 100, step: 1 },
    ],
    resultLabels: {
      "time": "Время зарядки",
      "hours": "В часах",
      "energy": "Передано в батарею",
      "fromCharger": "Отдано зарядным устройством",
    },
    howToUse: ["Введите ёмкость батареи в ампер-часах.", "Укажите ток зарядного устройства.", "При необходимости уменьшите КПД — время вырастет соответственно."],
    howItWorks: "Время = ёмкость ÷ (ток × КПД ÷ 100). При КПД 100 % это просто ёмкость, делённая на ток.",
    example: "Батарея 100 А·ч током 10 А зарядится за 10 ч 0 мин при полном КПД.",
    faq: [
      { q: "Чем это отличается от времени работы батареи?", a: "Время работы отвечает на вопрос, надолго ли хватит заряда под нагрузкой. Здесь обратная задача — сколько времени уйдёт на восполнение ёмкости." },
      { q: "Почему реальная зарядка идёт дольше расчётной?", a: "Потому что зарядное устройство снижает ток к концу цикла, чтобы не перегреть батарею. Последние проценты набираются заметно медленнее, и расчёт этого не моделирует." },
      { q: "Какой КПД брать?", a: "Для простых зарядных устройств обычно 80–90 %: часть энергии уходит в тепло. При 100 % расчёт даёт нижнюю границу времени." },
      { q: "Учитывается ли остаточный заряд?", a: "Нет, считается зарядка от нуля. Если батарея заряжена наполовину, введите половину ёмкости." },
    ],
    relatedCalculatorIds: ["battery-runtime", "inverter-power", "led-resistor"],
  },
};
