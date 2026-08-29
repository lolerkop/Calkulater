import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomTrapezoidCopyEn } from './copy.en';
import { geomTrapezoidCopyUk } from './copy.uk';
import { geomTrapezoidCopyDe } from './copy.de';
import { geomTrapezoidReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-trapezoid",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomTrapezoidCopyEn, uk: geomTrapezoidCopyUk, de: geomTrapezoidCopyDe },
  referenceCases: geomTrapezoidReferenceCases,
  publishedExample: { inputs: { unit: 'm', a: 10, b: 6, h: 4 }, expected: ["32 м²"] },
  presentation: {
    id: "geom-trapezoid",
    name: "Калькулятор трапеции",
    slug: "trapezoid",
    fullPath: "/geometry/trapezoid/",
    category: "geometry",
    icon: "trapezoid",
    popularity: 44,
    isNew: false,
    shortDescription: "Площадь трапеции по двум основаниям и высоте, периметр — по боковым сторонам.",
    longDescription:
      "Считает площадь трапеции по полусумме оснований, умноженной на высоту, — той самой формуле, которой считают площадь скошенного участка, ската крыши или стенки бункера. Боковые стороны необязательны: без них выводится площадь, с ними добавляется периметр. Высота здесь — расстояние между основаниями по перпендикуляру, а не длина боковой стороны, и это самая частая ошибка при замерах.",
    seoTitle: "Калькулятор трапеции — площадь и периметр",
    seoDescription: "Рассчитайте площадь трапеции по двум основаниям и высоте, а периметр — по боковым сторонам.",
    h1: "Калькулятор трапеции",
    keywords: ["калькулятор трапеции", "площадь трапеции", "периметр трапеции"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'a', label: 'Первое основание', type: 'number', defaultValue: 10, min: 0, step: 0.1 },
      { name: 'b', label: 'Второе основание', type: 'number', defaultValue: 6, min: 0, step: 0.1 },
      { name: 'h', label: 'Высота', type: 'number', defaultValue: 4, min: 0, step: 0.1 },
      { name: 'c', label: 'Боковая сторона c', type: 'number', defaultValue: 0, min: 0, step: 0.1 },
      { name: 'd', label: 'Боковая сторона d', type: 'number', defaultValue: 0, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "area": "Площадь",
      "mid": "Средняя линия",
      "perimeter": "Периметр",
    },
    howToUse: ["Выберите единицу длины.", "Введите оба основания и высоту между ними.", "При необходимости добавьте боковые стороны, чтобы получить периметр."],
    howItWorks: "S = ((a + b) ÷ 2) · h, то есть площадь равна средней линии, умноженной на высоту; периметр складывается из всех четырёх сторон.",
    example: "Трапеция с основаниями 10 и 6 м и высотой 4 м имеет площадь 32 м² и среднюю линию 8 м.",
    faq: [
      { q: "Какая высота нужна для расчёта?", a: "Перпендикулярное расстояние между основаниями. Длина наклонной боковой стороны больше высоты и в формулу не подставляется." },
      { q: "Что такое средняя линия?", a: "Отрезок, соединяющий середины боковых сторон. Он равен полусумме оснований, и площадь — это просто он, умноженный на высоту." },
      { q: "Обязательно ли вводить боковые стороны?", a: "Нет. Без них считается площадь и средняя линия; периметр появляется только когда обе боковые стороны заданы." },
      { q: "Подходит ли формула для любой трапеции?", a: "Да, для любой — и равнобедренной, и прямоугольной, и произвольной. Важно лишь, чтобы два введённых основания были параллельны." },
    ],
    relatedCalculatorIds: ["geom-rectangle", "geom-triangle", "geom-regular-polygon"],
  },
};
