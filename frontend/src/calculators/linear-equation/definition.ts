// Линейное уравнение ax + b = c с разбором шагов и вырожденными случаями.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { linearEquationCopyEn } from './copy.en';
import { linearEquationCopyUk } from './copy.uk';
import { linearEquationCopyDe } from './copy.de';
import { linearEquationCopyEs } from './copy.es';
import { linearEquationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'linear-equation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: linearEquationCopyEn, uk: linearEquationCopyUk, de: linearEquationCopyDe, es: linearEquationCopyEs },
  referenceCases: linearEquationReferenceCases,
  publishedExample: { inputs: { a: 3, b: 5, c: 20 }, expected: ['x = 5'] },
  presentation: {
    id: 'linear-equation',
    name: 'Калькулятор линейного уравнения',
    slug: 'linear-equation',
    fullPath: '/math/linear-equation/',
    category: 'math',
    icon: 'calculator',
    popularity: 36,
    isNew: false,
    shortDescription: "Решает ax + b = c и показывает каждый шаг.",
    longDescription:
      "Решает числовое уравнение ax + b = c: переносит b, делит на a и показывает подстановку найденного x. При a = 0 задача сводится к b = c: если равенство верно, подходит любое действительное x, иначе решений нет. Эти два случая выводятся как осмысленные ответы. Для формул с x по обе стороны сначала самостоятельно соберите коэффициенты.",
    seoTitle: 'Калькулятор линейного уравнения — решить ax + b = c',
    seoDescription:
      "Решите линейное уравнение вида ax + b = c с показом шагов и проверкой подстановкой.",
    h1: 'Калькулятор линейного уравнения',
    keywords: ['линейное уравнение', 'решить уравнение', 'найти x'],
    fields: [
      { name: 'a', label: 'Коэффициент a', type: 'number', defaultValue: 3, step: 0.5, signed: true },
      { name: 'b', label: 'Свободный член b', type: 'number', defaultValue: 5, step: 0.5, signed: true },
      { name: 'c', label: 'Правая часть c', type: 'number', defaultValue: 20, step: 0.5, signed: true },
    ],
    resultLabels: { result: 'Корень', equation: 'Уравнение', move: 'Перенос свободного члена', check: 'Проверка подстановкой' },
    howToUse: ["Введите коэффициент при x.", "Введите свободный член и правую часть.", "Прочитайте корень и разбор шагов."],
    howItWorks: "x = (c − b) ÷ a, если a не равен нулю; при нулевом a уравнение сводится к сравнению b и c.",
    example: "Для 3x + 5 = 20 перенос пятёрки даёт 3x = 15, а деление — x = 5.",
    faq: [{"q": "Что происходит при нулевом коэффициенте?", "a": "Слагаемое с x исчезает, и уравнение превращается в b = c. Если равенство верно, корнем будет любое число; если нет — корня не существует."}, {"q": "Поддерживаются ли отрицательные коэффициенты?", "a": "Да, все три величины могут быть отрицательными или дробными. Знак переносится через деление."}, {"q": "Зачем строка проверки подстановкой?", "a": "Подстановка найденного численного x помогает проверить знаки и преобразования. Строка округлена, поэтому видимое равенство не доказывает точность до последней цифры. Для точного дробного ответа проверяйте исходные коэффициенты алгебраически."}, {"q": "Решает ли калькулятор квадратные уравнения?", "a": "Нет, здесь только первая степень. Для уравнений с x в квадрате есть отдельный калькулятор."}],
    disclaimer: "Вводятся конечные числовые коэффициенты, включая нулевые и отрицательные. Шаги и подстановка округляются до шести значащих цифр; при малых и больших значениях используется научная запись. Подстановка — численная проверка, а не доказательство точности округлённого текста. Если показанный промежуточный результат или x выходит за числовой диапазон, расчёт останавливается.",
    relatedCalculatorIds: ['quadratic-equation', 'proportion', 'combinatorics'],
  },
};
