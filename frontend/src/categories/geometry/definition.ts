// Категория «Геометрия».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "geometry",
  order: 13,
  icon: "shapes",
  searchAliases: "геометрия фигуры площадь периметр объём поверхность квадрат прямоугольник круг окружность треугольник трапеция многоугольник шар сфера цилиндр конус диагональ гипотенуза",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда нужно посчитать площадь комнаты, участка или стены перед закупкой материала.",
      "Когда известна не та величина, от которой обычно считают: диаметр вместо радиуса, площадь вместо стороны.",
      "Когда нужно узнать объём ёмкости — бака, бочки или бассейна простой формы.",
      "Когда проверяете, существует ли треугольник с заданными сторонами.",
    ],
    checklist: [
      "Выберите единицу длины один раз: все размеры фигуры вводятся в ней же.",
      "Убедитесь, что размеры сняты по одной фигуре, а не по разным её частям.",
      "Для треугольника по трём сторонам проверьте, что сумма любых двух больше третьей.",
      "Помните, что площадь выводится в квадрате выбранной единицы, а объём — в кубе.",
    ],
    mistakes: [
      "Вводить одни размеры в сантиметрах, а другие в метрах.",
      "Путать радиус с диаметром: диаметр вдвое больше, и площадь отличается вчетверо.",
      "Считать площадь пола по периметру комнаты, а не по её сторонам.",
      "Пересчитывать площадь линейным множителем при смене единицы — множитель нужен в квадрате.",
    ],
  },
  editorial: {
    ru: "Фигуры считаются идеальными: рёбра прямые, поверхности гладкие, толщина стенок не учитывается. Для раскроя материала закладывайте запас на подрезку отдельно.",
    en: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    es: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    de: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    fr: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    it: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    pt: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    nl: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    pl: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    cs: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    sk: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    hu: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    ro: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    tr: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    uk: "Фігури вважаються ідеальними: ребра прямі, поверхні гладкі, товщина стінок не враховується. Для розкрою матеріалу закладайте запас на підрізку окремо.",
    id: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
    vi: "The shapes are treated as ideal: straight edges, smooth surfaces and no wall thickness. Add a separate allowance for cutting waste when buying material.",
  },
};
