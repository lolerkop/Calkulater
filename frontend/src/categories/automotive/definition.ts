// Категория «Автомобили».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "automotive",
  order: 11,
  icon: "car",
  searchAliases: "автомобиль авто машина расход топлива бензин литры на 100 км мощность лошадиные силы разгон поездка стоимость дороги скорость",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда посчитали пробег между заправками и хотите узнать реальный расход.",
      "Когда сравниваете динамику двух машин по отношению мощности к массе.",
      "Когда планируете поездку и делите её стоимость на попутчиков.",
      "Когда нужно прикинуть время в пути на известной средней скорости.",
    ],
    checklist: [
      "Заправляйтесь до полного бака в начале и в конце замера, иначе пробег не сойдётся.",
      "Сверьте мощность с документами: в них указаны метрические лошадиные силы.",
      "Для удельной мощности решите, считаете вы по снаряжённой массе или с грузом.",
      "Цену топлива берите ту, по которой заправлялись, а не среднюю по региону.",
    ],
    mistakes: [
      "Считать расход по показаниям бортового компьютера вместо фактических литров.",
      "Смешивать метрические и механические лошадиные силы в одном сравнении.",
      "Забывать про обратную дорогу при расчёте стоимости поездки.",
      "Принимать среднюю скорость за скорость по спидометру: остановки её снижают.",
    ],
  },
  editorial: {
    ru: "Расчёты опираются только на введённые значения и не учитывают стиль вождения, рельеф, загрузку и погоду. Мощность считается в метрических лошадиных силах (735,49875 Вт).",
    en: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    es: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    de: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    fr: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    it: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    pt: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    nl: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    pl: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    cs: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    sk: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    hu: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    ro: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    tr: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    uk: "Розрахунки спираються лише на введені значення й не враховують стиль водіння, рельєф, завантаження та погоду. Потужність рахується в метричних кінських силах (735,49875 Вт).",
    id: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
    vi: "The calculations use only the values you enter and ignore driving style, terrain, load and weather. Power is expressed in metric horsepower (735.49875 W).",
  },
};
