import { expect, test, type Locator, type Page } from '@playwright/test';
import { calculators } from '../src/data/calculators';
import { getCalculatorById } from '../src/lib/i18n';
import type { CalculatorDef, Field, FieldType } from '../src/lib/types';

// Список и маршруты намеренно строятся из production-реестра. Ручной mapping
// ниже хранит только осмысленное non-default состояние и независимое ожидание.
// Контракт copy-result уже проверяет актуальный и неустаревший результат в
// calculator-characterization.spec.ts, поэтому здесь он не дублируется.
const INVALID_RESULT_TOKENS = /NaN|Infinity|undefined|\[object Object\]/;

type QueryValue = string | number | boolean;
type ExpectedRow = { label: string; value?: string; contains?: string };
type StateScenario = {
  query: Record<string, QueryValue>;
  result: {
    primary?: string;
    rows?: ExpectedRow[];
  };
};

const stateScenarios: Record<string, StateScenario> = {
  'arithmetic-progression': { query: { a1: 100, d: -7, n: 15 }, result: { primary: '2', rows: [{ label: 'Сумма ряда', value: '765' }, { label: 'Разность', value: '-7' }] } },
  'arpu-arppu': { query: { revenue: 1200000, users: 40000, payingUsers: 5200 }, result: { primary: '30,00 ₽', rows: [{ label: 'ARPPU', value: '230,77 ₽' }, { label: 'Доля платящих', value: '13,00%' }, { label: 'Выручка', value: '1 200 000,00 ₽' }] } },
  'bakers-percentage': { query: { flour: 900, ingredients: 'water 72\nsalt 2\nyeast 0.8' }, result: { primary: '1 573,2 г', rows: [{ label: 'Гидратация', value: '72,00%' }, { label: 'Мука', value: '900 г' }] } },
  'churn-retention': { query: { startCustomers: 4200, lost: 315, gained: 210 }, result: { primary: '7,50%', rows: [{ label: 'Удержание', value: '92,50%' }, { label: 'Клиентов на конец', value: '4 095' }, { label: 'Чистый прирост', value: '-2,50%' }] } },
  'color-convert': { query: { hex: '#F0A' }, result: { primary: 'rgb(255, 0, 170)', rows: [{ label: 'HSL', value: 'hsl(320, 100,00%, 50,00%)' }, { label: 'HEX', value: '#FF00AA' }, { label: 'Яркость', value: '50,00' }] } },
  'conversion-rate': { query: { visitors: 1500, conversions: 27, cost: 45000 }, result: { primary: '1,80%', rows: [{ label: 'Конверсий', value: '27' }, { label: 'Визитов', value: '1 500' }, { label: 'Цена конверсии', value: '1 666,67 ₽' }] } },
  'convert-fuel-economy': { query: { value: 35, fromUnit: 'mpgus', toUnit: 'l100km' }, result: { primary: '6,72', rows: [{ label: 'В л/100 км', value: '6,72' }, { label: 'В км/л', value: '14,88' }, { label: 'В mpg Великобритании', value: '42,033' }] } },
  'dca': { query: { monthly: 5000, months: 24, priceGrowthPct: -1, startPrice: 200 }, result: { primary: '107 160,93 ₽', rows: [{ label: 'Вложено всего', value: '120 000,00 ₽' }, { label: 'Куплено единиц', value: '675,14' }, { label: 'Средняя цена', value: '177,74 ₽' }] } },
  'fibonacci': { query: { n: 30 }, result: { primary: '514 229', rows: [{ label: 'Сумма ряда', value: '1 346 268' }, { label: 'Отношение к предыдущему', value: '1,618' }] } },
  'gcd-lcm': { query: { numbers: '15 25 35' }, result: { primary: '5', rows: [{ label: 'НОК', value: '525' }, { label: 'Чисел', value: '3' }, { label: 'Взаимно простые', value: 'нет' }] } },
  'geom-annulus': { query: { unit: 'm', R: 8, r: 3 }, result: { primary: '172,79 м²', rows: [{ label: 'Ширина кольца', value: '5 м' }, { label: 'Внешняя окружность', value: '50,265 м' }, { label: 'Средний радиус', value: '5,5 м' }] } },
  'geom-cube': { query: { unit: 'm', mode: 'volume', volume: 125 }, result: { primary: '5 м', rows: [{ label: 'Объём', value: '125 м³' }, { label: 'Площадь поверхности', value: '150 м²' }, { label: 'Сумма рёбер', value: '60 м' }] } },
  'geom-ellipse': { query: { unit: 'm', a: 10, b: 4 }, result: { primary: '125,66 м²', rows: [{ label: 'Периметр (Рамануджан)', value: '46,026 м' }, { label: 'Эксцентриситет', value: '0,9165' }, { label: 'Расстояние между фокусами', value: '18,33 м' }] } },
  'geom-frustum': { query: { unit: 'm', R: 8, r: 5, h: 6 }, result: { primary: '810,53 м³', rows: [{ label: 'Образующая', value: '6,708 м' }, { label: 'Боковая поверхность', value: '273,97 м²' }, { label: 'Полная поверхность', value: '553,57 м²' }] } },
  'geom-rhombus': { query: { unit: 'm', d1: 10, d2: 24 }, result: { primary: '120 м²', rows: [{ label: 'Сторона', value: '13 м' }, { label: 'Периметр', value: '52 м' }, { label: 'Высота', value: '9,231 м' }] } },
  'inflation': { query: { amount: 1000000, ratePct: 4.5, years: 25 }, result: { primary: '332 730,60 ₽', rows: [{ label: 'Столько же в будущих деньгах', value: '3 005 434,46 ₽' }, { label: 'Потеряно покупательной способности', value: '667 269,40 ₽' }, { label: 'Доля потери', value: '66,73%' }] } },
  'max-loan': { query: { income: 85000, dtiPct: 35, rate: 12, years: 15 }, result: { primary: '2 478 819,50 ₽', rows: [{ label: 'Допустимый платёж', value: '29 750,00 ₽' }, { label: 'Всего выплат', value: '5 355 000,00 ₽' }, { label: 'Платежей', value: '180' }] } },
  'mrr-arr': { query: { subscribers: 1850, arpuMonth: 690, growthPct: 7.5 }, result: { primary: '1 276 500,00 ₽', rows: [{ label: 'ARR', value: '15 318 000,00 ₽' }, { label: 'MRR через месяц', value: '1 372 237,50 ₽' }, { label: 'Прирост за месяц', value: '95 737,50 ₽' }] } },
  'power-root': { query: { mode: 'root', base: 27, exponent: 3 }, result: { primary: '3', rows: [{ label: 'Основание', value: '27' }, { label: 'Показатель', value: '3' }] } },
  'raid': { query: { level: '6', disks: 8, sizeTb: 12 }, result: { primary: '72 ТБ', rows: [{ label: 'Сырая ёмкость', value: '96 ТБ' }, { label: 'Допустимо отказов', value: '2' }, { label: 'Эффективность', value: '75,00%' }] } },
  'ratio': { query: { parts: '12 18', total: 4500 }, result: { primary: '2:3', rows: [{ label: 'Сумма частей', value: '30' }, { label: 'Доля первой части', value: '40,00%' }, { label: 'Разбиение суммы', value: '1 800 · 2 700' }] } },
  'recipe-cost': { query: { ingredients: 'flour 1.2 60\nbutter 0.4 750\nsugar 0.25 90', servings: 6 }, result: { primary: '65,75 ₽', rows: [{ label: 'Стоимость всего', value: '394,50 ₽' }, { label: 'Ингредиентов', value: '3' }, { label: 'Самый дорогой', value: 'butter' }] } },
  'recipe-scale': { query: { ingredients: 'flour 800\nwater 520\nsalt 16', fromServings: 6, toServings: 10 }, result: { primary: '1,6667', rows: [{ label: 'Ингредиентов', value: '3' }, { label: 'Было всего', value: '1 336' }, { label: 'Стало всего', value: '2 226,67' }] } },
  'resistor-network': { query: { resistances: '470 680 1000', mode: 'parallel' }, result: { primary: '217,47 Ом', rows: [{ label: 'Резисторов', value: '3' }, { label: 'Наименьший', value: '470 Ом' }, { label: 'Наибольший', value: '1 000 Ом' }] } },
  'time-value-money': { query: { mode: 'pv', amount: 500000, rate: 9, years: 8, compounding: 'year' }, result: { primary: '250 933,14 ₽', rows: [{ label: 'Множитель роста', value: '1,9926' }, { label: 'Эффективная годовая ставка', value: '9,00%' }, { label: 'Периодов начисления', value: '8' }] } },
  // Волна 19, партия A1. Ожидаемые значения выведены независимой моделью
  // Phase 19P (refmodel.py) на НЕумолчальных входах:
  //   45 000 при доходах 60 : 90 : 30 -> 15 000, 22 500, 7 500
  //   250 г риса по 344 и 300 г курицы по 190 = 860 + 570 = 1430 на 3 порции
  //   180·6,2 + 12·52 = 1116 + 624 = 1740, плюс 900 постоянных
  //   499/1 + 3600/12 = 499 + 300 = 799 в месяц
  //   пятиугольник 0 0 / 6 0 / 6 4 / 3 7 / 0 4: площадь 33, периметр 22,485
  //   (142,5 − 20)/2 = 61,25 -> 25×2 + 10 + 1,25
  //   300 000 при 20 000 и взносе 8 000 под 5 % -> 33 месяца
  'budget-split': { query: { total: 45000, incomes: 'анна 60000\nборис 90000\nвера 30000', mode: 'income' }, result: { primary: '22 500,00 ₽', rows: [{ label: 'Наименьший взнос', value: '7 500,00 ₽' }, { label: 'Участников', value: '3' }, { label: 'Проверка суммы', value: '45 000,00 ₽' }] } },
  'calories-per-serving': { query: { ingredients: 'рис 250 344\nкурица 300 190', servings: 3 }, result: { primary: '477 ккал', rows: [{ label: 'Всего калорий', value: '1 430 ккал' }, { label: 'Ингредиентов', value: '2' }, { label: 'Самый калорийный', value: 'рис' }] } },
  'utility-total': { query: { meters: 'электричество 180 6,2\nвода 12 52', fixed: 900 }, result: { primary: '2 640,00 ₽', rows: [{ label: 'Переменная часть', value: '1 740,00 ₽' }, { label: 'Постоянная часть', value: '900,00 ₽' }, { label: 'Самая дорогая услуга', value: 'электричество' }] } },
  'subscriptions-cost': { query: { items: 'стриминг 499 1\nхостинг 3600 12' }, result: { primary: '799,00 ₽', rows: [{ label: 'В год', value: '9 588,00 ₽' }, { label: 'Подписок', value: '2' }, { label: 'Самая дорогая', value: 'стриминг' }] } },
  'geom-polygon-coords': { query: { points: '0 0\n6 0\n6 4\n3 7\n0 4' }, result: { primary: '33', rows: [{ label: 'Периметр', value: '22,485' }, { label: 'Вершин', value: '5' }, { label: 'Обход', value: 'против часовой' }] } },
  'barbell-plates': { query: { target: 142.5, bar: 20, plates: '25 20 15 10 5 2,5 1,25' }, result: { primary: '25×2 + 10×1 + 1,25×1', rows: [{ label: 'Фактический вес', value: '142,5 кг' }, { label: 'На сторону', value: '61,25 кг' }, { label: 'Блинов на сторону', value: '4' }] } },
  'savings-goal': { query: { mode: 'term', goal: 300000, initial: 20000, rate: 5, monthly: 8000 }, result: { primary: '33 мес', rows: [{ label: 'Итоговая сумма', value: '305 323,52 ₽' }, { label: 'Всего взносов', value: '264 000,00 ₽' }, { label: 'Цель', value: '300 000,00 ₽' }] } },
  // Волна 19, партия A2. Ожидаемые значения выведены независимой моделью
  // Phase 19P (refmodel.py) на НЕумолчальных входах:
  //   1 500 000 под 16 % и 12 % на 84 месяца при расходах 15 000 -> 263 375,72
  //   3 столовые ложки мёда: 45 мл × 1,42 = 63,9 г
  //   5 при r = −2 и n = 12: член −10 240, сумма −6 825 (знаки чередуются)
  //   12 500 шагов по 78 см = 9,75 км; 0,53 × 62 × 9,75 = 320 ккал
  //   ETRTO 40-559: 559 + 80 = 639 мм, окружность 2 007,48
  //   плита 12×9×0,25 = 27 м³, плюс 7 % -> 28,89
  'refinancing': { query: { balance: 1500000, oldRate: 16, oldMonths: 84, newRate: 12, newMonths: 84, fee: 15000 }, result: { primary: '263 375,72 ₽', rows: [{ label: 'Платёж сейчас', value: '29 793,10 ₽' }, { label: 'Платёж после', value: '26 479,10 ₽' }, { label: 'Расходы на сделку', value: '15 000,00 ₽' }] } },
  'convert-cooking-weight': { query: { value: 3, unit: 'tbsp', product: 'honey', direction: 'toGrams' }, result: { primary: '63,9', rows: [{ label: 'Плотность продукта', value: '1,42 г/мл' }, { label: 'В миллилитрах', value: '45 мл' }] } },
  'geometric-progression': { query: { a1: 5, r: -2, n: 12 }, result: { primary: '-10 240', rows: [{ label: 'Сумма ряда', value: '-6 825' }, { label: 'Знаменатель', value: '-2' }, { label: 'Членов', value: '12' }] } },
  'steps-distance-calories': { query: { mode: 'stride', steps: 12500, stride: 78, weight: 62, kcalPerKgKm: 0.53 }, result: { primary: '9,75 км', rows: [{ label: 'Калории', value: '320 ккал' }, { label: 'Длина шага', value: '78 см' }, { label: 'Шагов на километр', value: '1 282' }] } },
  'bike-wheel-size': { query: { mode: 'etrto', etrtoRim: 559, etrtoTire: 40 }, result: { primary: '2 007,48 мм', rows: [{ label: 'Диаметр', value: '639 мм' }, { label: 'Оборотов на километр', value: '498,14' }, { label: 'Радиус', value: '319,5 мм' }] } },
  'slab-foundation': { query: { length: 12, width: 9, thickness: 0.25, meshStep: 0.25, rebarDiameter: 14, waste: 7 }, result: { primary: '28,89 м³', rows: [{ label: 'Площадь плиты', value: '108 м²' }, { label: 'Чистый объём', value: '27 м³' }, { label: 'Вес арматуры', value: '2 138,89 кг' }] } },
  // Волна 19, партия B1. Ожидаемые значения выведены независимой моделью
  // Phase 19P (refmodel.py) на НЕумолчальных входах:
  //   медь 0,0175: R = 0,0175·35/4 = 0,1531 Ом; три фазы -> √3·0,1531·25 = 6,631 В
  //   берёза при 18 %: 650 × 1,06 = 689 кг/м³, ×3,2 м³ = 2204,8 кг
  //   (26/0,2 + 6/0,15) × 1,08 = (130 + 40) × 1,08 = 183,6 м, петель 2
  //   24 × 200 / 0,85 = 5647,06 лм; ламп ⌈5647,06/1500⌉ = 4
  //   58 × 2 × 1,08 = 125,28 м²; лист 3×1,2 = 3,6; ⌈125,28/3,6⌉ = 35 листов
  //   ⌈4,2/3,5⌉ = 2 полосы × 6,5 × 1,07 = 13,91 погонных метра
  'voltage-drop': { query: { current: 25, length: 35, section: 4, material: 'copper', phase: 'three', voltage: 400 }, result: { primary: '6,631 В', rows: [{ label: 'Напряжение у нагрузки', value: '393,37 В' }, { label: 'Сопротивление линии', value: '0,1531 Ом' }, { label: 'Потери мощности', value: '165,76 Вт' }] } },
  'wood-weight': { query: { volume: 3.2, species: 'birch', moisture: 18 }, result: { primary: '2 204,8 кг', rows: [{ label: 'Плотность при заданной влажности', value: '689 кг/м³' }, { label: 'Базовая плотность при 12 %', value: '650 кг/м³' }, { label: 'Объём', value: '3,2 м³' }] } },
  'underfloor-heating': { query: { area: 32, step: 0.2, loopMax: 100, edgeZone: 6, edgeStep: 0.15, waste: 8 }, result: { primary: '183,6 м', rows: [{ label: 'Петель', value: '2' }, { label: 'На петлю', value: '91,8 м' }, { label: 'Краевая зона', value: '6 м²' }] } },
  'lighting': { query: { area: 24, norm: 200, lampLumens: 1500, lossFactor: 0.85 }, result: { primary: '5 647,06 лм', rows: [{ label: 'Ламп', value: '4' }, { label: 'Люмен на квадратный метр', value: '235,29' }, { label: 'Установленный поток', value: '6 000 лм' }] } },
  'drywall': { query: { area: 58, sheetLength: 3, sheetWidth: 1.2, layers: 2, profileStep: 0.4, waste: 8 }, result: { primary: '35', rows: [{ label: 'С запасом', value: '125,28 м²' }, { label: 'Площадь листа', value: '3,6 м²' }, { label: 'Саморезов', value: '4 200' }] } },
  'linoleum': { query: { length: 6.5, width: 4.2, rollWidth: 3.5, reserve: 7 }, result: { primary: '13,91 м', rows: [{ label: 'Полос', value: '2' }, { label: 'Площадь пола', value: '27,3 м²' }, { label: 'Швов', value: '1' }] } },
  // Волна 19, партия B2. Ожидаемые значения выведены независимой моделью
  // Phase 19P (refmodel.py) на НЕумолчальных входах:
  //   ⌈64/3⌉ = 22 секции, столбов 22 + 1 + 2 ворот = 25; фактический шаг 2,909
  //   95/0,4 × 1,12 = 266 м; брусков ⌈266/4,5⌉ = 60
  //   свая π·0,175²·2,2 = 0,2117 м³, ×20 = 4,233; ростверк 44·0,5·0,5 = 11
  //   женщина 172 см: дюймов свыше пяти футов 7,717; среднее четырёх 62,859
  //   102/183 = 0,5574 — повышенный; 4,5 мкЗв = 4500 нЗв
  'fence': { query: { length: 64, span: 3, height: 2, rails: 3, gates: 2 }, result: { primary: '25', rows: [{ label: 'Секций', value: '22' }, { label: 'Метров лаг', value: '198' }, { label: 'Фактический шаг столбов', value: '2,909 м' }] } },
  'roof-battens': { query: { area: 95, step: 0.4, battenLength: 4.5, sectionWidth: 40, sectionHeight: 60, waste: 12 }, result: { primary: '266 м', rows: [{ label: 'Брусков', value: '60' }, { label: 'Объём древесины', value: '0,6384 м³' }, { label: 'Метров на квадратный метр', value: '2,5' }] } },
  'pile-foundation': { query: { count: 20, diameter: 0.35, depth: 2.2, grillageLength: 44, grillageWidth: 0.5, grillageHeight: 0.5, waste: 8 }, result: { primary: '16,452 м³', rows: [{ label: 'Объём свай', value: '4,233 м³' }, { label: 'Объём ростверка', value: '11 м³' }, { label: 'Объём одной сваи', value: '0,2117 м³' }] } },
  'ideal-weight': { query: { sex: 'female', height: 172 }, result: { primary: '62,859 кг', rows: [{ label: 'Девайн', value: '63,248 кг' }, { label: 'Миллер', value: '63,594 кг' }, { label: 'Хамви', value: '62,476 кг' }] } },
  'waist-ratio': { query: { waist: 102, hip: 106, height: 183 }, result: { primary: '0,5574', rows: [{ label: 'Отношение талии к бёдрам', value: '0,9623' }, { label: 'Категория', value: 'повышенный' }, { label: 'Обхват талии', value: '102 см' }] } },
  'convert-radiation': { query: { value: 4.5, from: 'uSv', to: 'nSv' }, result: { primary: '4 500', rows: [{ label: 'Исходное значение', value: '4,5' }, { label: 'Соотношение', value: '1 000' }] } },
  // Волна 5, батч B3 — подсеть, средний балл, корреляция и молярная масса.
  // Ожидаемые значения выведены вручную:
  //   /26: маска 255.255.255.192; 172.16.34.200 & маска = .192; узлов 2⁶ − 2 = 62
  //   (4,5·6 + 3·2 + 5·1) / 9 = 38 / 9 = 4,2222 — проверяется и запятая, и строка без веса
  //   шесть пар: Σdxdy = 36; Σdx² = 70; Σdy² = 23,5; r = 36/√1645 = 0,8908
  //   Na2CO3 = 2·22,990 + 12,011 + 3·15,999 = 105,988 г/моль
  // Текстовые наборы намеренно многострочные: перенос обязан пережить URL и сброс.
  'ipv4-subnet': { query: { address: '172.16.34.200', prefix: 26 }, result: { primary: '172.16.34.192', rows: [{ label: 'Маска подсети', value: '255.255.255.192' }, { label: 'Узлов в сети', value: '62' }] } },
  'gpa': { query: { grades: '4,5 6\n3 2\n5' }, result: { primary: '4,2222', rows: [{ label: 'Сумма кредитов', value: '9' }, { label: 'Предметов', value: '3' }] } },
  'correlation': { query: { xs: '2 4 6 8 10 12', ys: '1 3 2 5 4 7' }, result: { primary: '0,8908', rows: [{ label: 'Пар значений', value: '6' }, { label: 'Наклон линии', value: '0,5143' }] } },
  'molar-mass': { query: { formula: 'Na2CO3' }, result: { primary: '105,988 г/моль', rows: [{ label: 'Атомов всего', value: '6' }, { label: 'Элементов', value: '3' }] } },
  // Волна 5, батч B2 — часовые пояса, пульсовые зоны и два текстовых счётчика.
  // Ожидаемые значения выведены вручную:
  //   UTC−3 -> UTC+5:30 = +8,5 ч; 8:15 = 495 мин; 495 + 510 = 1005 -> 16:45
  //   Гулати: 206 − 0,88 · 50 = 162; резерв 162 − 48 = 114; 70–80 % -> 48 + 79,8 … 48 + 91,2
  //   восемь слов / 150 = 0,0533 мин = 3,2 с -> 3 с; вслух /110 = 4,36 с -> 4 с
  //   54 символа с пробелами, 47 без, два предложения, два абзаца
  // Текстовые наборы намеренно многострочные: перенос обязан пережить URL и сброс.
  'timezone-difference': { query: { fromOffset: -3, toOffset: 5.5, hour: 8, minute: 15 }, result: { primary: '16:45', rows: [{ label: 'Разница', value: '8,5 ч' }, { label: 'Календарный день', value: 'те же сутки' }] } },
  'max-heart-rate': { query: { age: 50, formula: 'gulati', restingHr: 48 }, result: { primary: '162 уд/мин', rows: [{ label: 'Резерв сердца', value: '114 уд/мин' }, { label: 'Аэробная зона 70–80 %', value: '128–139 уд/мин' }] } },
  'text-reading-time': { query: { mode: 'text', text: 'Первая строка теста для проверки.\nВторая строка здесь!', wpm: 150, speechWpm: 110 }, result: { primary: '0 мин 3 с', rows: [{ label: 'Время вслух', value: '0 мин 4 с' }, { label: 'Слов', value: '8' }] } },
  'text-word-char-count': { query: { text: 'Первая строка теста для проверки.\nВторая строка здесь!' }, result: { primary: '8', rows: [{ label: 'Символов с пробелами', value: '54' }, { label: 'Абзацев', value: '2' }] } },
  // Волна 5, батч B1 — риск/прибыль, доверительный интервал, биномиальная вероятность и обмен.
  // Ожидаемые значения выведены вручную:
  //   шорт: |3200 − 3320| = 120 риска против |2960 − 3200| = 240 -> отношение 2
  //   12,5 / √64 = 1,5625; 2,576 · 1,5625 = 4,025; 64,8 ± 4,025
  //   n = 15, p = 0,25: не менее 4 успехов = 1 − P(≤3) = 0,5387
  //   покупка: курс 88,4 · 1,012 = 89,4608; (250 000 − 300) · 99,2 % / 89,4608
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'risk-reward': { query: { direction: 'short', entry: 3200, stop: 3320, target: 2960, qty: 25 }, result: { primary: '2', rows: [{ label: 'Риск на единицу', value: '120,00 ₽' }, { label: 'Риск в деньгах', value: '3 000,00 ₽' }] } },
  'confidence-interval': { query: { mean: 64.8, sd: 12.5, n: 64, confidence: '99' }, result: { primary: '60,775 … 68,825', rows: [{ label: 'Предел погрешности', value: '4,025' }, { label: 'Стандартная ошибка', value: '1,5625' }] } },
  'binomial-probability': { query: { n: 15, k: 4, p: 0.25, mode: 'atLeast' }, result: { primary: '0,5387', rows: [{ label: 'В процентах', value: '53,87%' }, { label: 'Вероятность ровно k', value: '0,2252' }] } },
  'currency-exchange-fee': { query: { direction: 'buy', amount: 250000, rate: 88.4, spreadPct: 1.2, feePct: 0.8, feeFixed: 300 }, result: { primary: '2 768,84 ед. валюты', rows: [{ label: 'Курс с учётом спреда', value: '89,4608' }, { label: 'Фиксированный сбор', value: '3,35 ед. валюты' }] } },
  // Волна 5, батч A3 — активность, разварка, смены и размер позиции.
  // Ожидаемые значения выведены вручную:
  //   бег MET 9,8: 9,8 × 3,5 × 82 / 200 = 14,063 в минуту; × 30 = 421,89 -> 422
  //   900 г готового / 2,2 = 409,0909… г сухого
  //   8:30–17:15 = 525 мин; минус 45 -> 480 мин = 8 ч; × 18 = 144 ч
  //   250 000 × 1,5 % = 3750; |480 − 460| = 20; 3750 / 20 = 187,5 -> целых 187
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'activity-calories': { query: { activity: 'running', weightKg: 82, minutes: 30 }, result: { primary: '422 ккал', rows: [{ label: 'Коэффициент MET', value: '9,8' }, { label: 'Расход в час', value: '844 ккал' }] } },
  'cooked-weight': { query: { mode: 'cookedToRaw', cooked: 900, factor: 2.2, kcalPer100Raw: 330 }, result: { primary: '409,09 г', rows: [{ label: 'Готовый вес', value: '900 г' }, { label: 'Коэффициент разварки', value: '2,2' }] } },
  'work-hours': { query: { startHour: 8, startMin: 30, endHour: 17, endMin: 15, breakMin: 45, days: 18, ratePerHour: 650 }, result: { primary: '144 ч', rows: [{ label: 'В часах и минутах', value: '8 ч 0 мин' }, { label: 'Длина смены до перерыва', value: '8 ч 45 мин' }] } },
  'position-size': { query: { deposit: 250000, riskPct: 1.5, entry: 480, stop: 460 }, result: { primary: '187,5 шт', rows: [{ label: 'Целых единиц', value: '187 шт' }, { label: 'Сумма риска', value: '3 750,00 ₽' }] } },
  // Волна 5, батч A2 — размер видео, трафик, отопление и шины.
  // Ожидаемые значения выведены вручную:
  //   (12 · 1000 + 192) · 1000 · 2700 / 8 = 4 114 800 000 байт = 4,1148 ГБ
  //   15 / 8 · 3,6 = 6,75 ГБ в час; × 4 = 27 в день; × 31 = 837; 250 / 27 = 9,2592…
  //   32 × 3 = 96 м³; 96 × 35 = 3360; два окна +200 -> 3560 Вт
  //   195 × 65 % = 126,75; 15 × 25,4 = 381; 381 + 253,5 = 634,5 мм
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'video-file-size': { query: { videoMbps: 12, audioKbps: 192, minutes: 45 }, result: { primary: '4,115 ГБ', rows: [{ label: 'В мегабайтах', value: '4 114,8 МБ' }, { label: 'Суммарный битрейт', value: '12 192 кбит/с' }] } },
  'internet-traffic': { query: { mbps: 15, hoursPerDay: 4, days: 31, quotaGb: 250 }, result: { primary: '837 ГБ', rows: [{ label: 'В день', value: '27 ГБ' }, { label: 'Хватит дней при лимите', value: '9,259' }] } },
  'heating-power': { query: { area: 32, height: 3, wattsPerM3: 35, windows: 2 }, result: { primary: '3,56 кВт', rows: [{ label: 'Объём помещения', value: '96 м³' }, { label: 'Надбавка на окна', value: '200 Вт' }] } },
  'tire-size': { query: { width: 195, profile: 65, diameter: 15 }, result: { primary: '634,5 мм', rows: [{ label: 'Высота профиля', value: '126,75 мм' }, { label: 'Оборотов на километр', value: '501,67' }] } },
  // Волна 5, батч A1 — комиссии площадки, бюджет поездки, сделка, печать и ставка.
  // Ожидаемые значения выведены вручную:
  //   3200 · 15 % = 480; 3200 · 2,5 % = 80; удержано 480 + 80 + 90 + 20 = 670 -> выплата 2530
  //   6 · 4200 = 25 200; 7 · 3 · 1000 = 21 000; +21 000 +9000 +1500 = 77 700; на троих 25 900
  //   шорт: (2400 − 2000) · 2 = 800; комиссия (4800 + 4000) · 0,15 % = 13,2 -> 786,8
  //   пластик 120 · 2100/750 = 336; энергия 0,2 · 9 · 4,8 = 8,64; износ 18; +10 % -> 398,904
  //   оплачиваемых 22 · 8 · 60 % = 105,6; (200 000 + 20 000) / 0,93 = 236 559,1398 -> /105,6
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'fee-chain': { query: { price: 3200, commissionPct: 15, acquiringPct: 2.5, logistics: 90, storage: 20, cost: 1500 }, result: { primary: '2 530,00 ₽', rows: [{ label: 'Комиссия площадки', value: '480,00 ₽' }, { label: 'Хранение', value: '20,00 ₽' }] } },
  'trip-budget': { query: { nights: 6, days: 7, people: 3, hotelPerNight: 4200, foodPerDayPerPerson: 1000, transport: 21000, activities: 9000, other: 1500 }, result: { primary: '77 700,00 ₽', rows: [{ label: 'На человека', value: '25 900,00 ₽' }, { label: 'Прочее', value: '1 500,00 ₽' }] } },
  'crypto-pnl': { query: { direction: 'short', entry: 2400, exit: 2000, qty: 2, feePct: 0.15, leverage: 3 }, result: { primary: '786,80 ₽', rows: [{ label: 'Результат до комиссий', value: '800,00 ₽' }, { label: 'Вложено', value: '1 600,00 ₽' }] } },
  'print-3d-cost': { query: { grams: 120, spoolPrice: 2100, spoolWeight: 750, hours: 9, powerW: 200, kwhPrice: 4.8, wearPerHour: 2, markupPct: 10 }, result: { primary: '398,90 ₽', rows: [{ label: 'Пластик', value: '336,00 ₽' }, { label: 'Амортизация принтера', value: '18,00 ₽' }] } },
  'freelance-rate': { query: { targetIncome: 200000, workDays: 22, hoursPerDay: 8, billablePct: 60, expenses: 20000, taxPct: 7 }, result: { primary: '2 240,14 ₽', rows: [{ label: 'Оплачиваемых часов', value: '105,6 ч' }, { label: 'Нужно выставить счетов', value: '236 559,14 ₽' }] } },
  // Волна 4, батч B3 — золотое сечение, физика и генератор.
  // Ожидаемые значения выведены вручную:
  //   34 × φ = 34 × 1,6180339887… = 55,01316
  //   1000 × 9,80665 × 10 + 101 325 = 199 391,5 Па -> абсолютное давление
  //   50 × 0,3 × sin 30° = 7,5 Н·м; плечо 0,3 × 0,5 = 0,15 м
  //   7,5 × 0,28 × 12 = 25,2 л; в час 2,1 л
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'golden-ratio': { query: { mode: 'grow', a: 34 }, result: { primary: '55,0132', rows: [{ label: 'φ', value: '1,618034' }] } },
  'hydrostatic-pressure': { query: { density: 1000, depth: 10, p0: 101325 }, result: { primary: '199 391,5 Па', rows: [{ label: 'Тип давления', value: 'абсолютное' }, { label: 'Давление столба', value: '98 066,5 Па' }] } },
  'physics-torque': { query: { force: 50, radius: 0.3, angle: 30 }, result: { primary: '7,5 Н·м', rows: [{ label: 'Плечо силы', value: '0,15 м' }] } },
  'generator-fuel': { query: { load: 7.5, sfc: 0.28, hours: 12, price: 0 }, result: { primary: '25,20 л', rows: [{ label: 'Расход в час', value: '2,10 л/ч' }] } },
  // Волна 4, батч B2 — геометрия крыши, ленты и плоских фигур.
  // Ожидаемые значения выведены вручную:
  //   односкатная 6×4 при 15°: 24 / cos 15° = 24,847 м²
  //   28,6 × 0,3 × 1,2 = 10,296 м³
  //   2,5×2,5×10: V = 62,5; d = √112,5 = 10,6066…
  //   10 × 8 × sin 30° = 40; P = 2(10+8) = 36
  //   r=12, 90°: S = ½·144·π/2 = 113,0973; хорда 2·12·sin45° = 16,97056
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'roof-area': { query: { mode: 'shed', length: 6, width: 4, slopeMode: 'degrees', angle: 15 }, result: { primary: '24,847 м²', rows: [{ label: 'Площадь основания', value: '24 м²' }, { label: 'Скатов', value: '1' }] } },
  'strip-foundation': { query: { perimeter: 28.6, width: 0.3, depth: 1.2, waste: 0 }, result: { primary: '10,296 м³', rows: [{ label: 'Чистый объём', value: '10,296 м³' }] } },
  'geom-cuboid': { query: { unit: 'cm', a: 2.5, b: 2.5, c: 10 }, result: { primary: '62,5 см³', rows: [{ label: 'Площадь поверхности', value: '112,5 см²' }, { label: 'Диагональ', value: '10,607 см' }] } },
  'geom-parallelogram': { query: { unit: 'cm', mode: 'sides', a: 10, b: 8, angle: 30 }, result: { primary: '40 см²', rows: [{ label: 'Периметр', value: '36 см' }] } },
  'geom-sector': { query: { unit: 'cm', radius: 12, angle: 90 }, result: { primary: '113,1 см²', rows: [{ label: 'Длина дуги', value: '18,85 см' }, { label: 'Хорда', value: '16,971 см' }] } },
  // Волна 4, батч B1 — строительные материалы. Ожидаемые значения выведены вручную:
  //   35,5 × 15 × 9 = 4 792,5 кг; мешков ceil(4792,5 / 25) = 192
  //   4 × 0,100 × 0,040 = 0,016 м³; × 20 = 0,32 м³
  //   10 × 3 × 0,15 = 4,5 м³ без запаса
  //   24,5 × 0,05 = 1,225 м³; плит ceil(24,5 / 0,6) = 41; упаковок ceil(41 / 8) = 6
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'plaster': { query: { mode: 'area', area: 35.5, thickness: 15, consumption: 9, bagWeight: 25 }, result: { primary: '4 792,50 кг', rows: [{ label: 'Мешков', value: '192 шт' }] } },
  'board-volume': { query: { length: 4, width: 100, thickness: 40, count: 20, pricePerM3: 0 }, result: { primary: '0,32 м³', rows: [{ label: 'Объём одной доски', value: '0,016 м³' }, { label: 'Досок в кубометре', value: '62,50 шт' }] } },
  'concrete': { query: { mode: 'slab', length: 10, width: 3, thickness: 0.15, waste: 0 }, result: { primary: '4,5 м³', rows: [{ label: 'Чистый объём', value: '4,5 м³' }] } },
  'insulation': { query: { area: 24.5, thickness: 50, slabArea: 0.6, perPack: 8 }, result: { primary: '1,225 м³', rows: [{ label: 'Плит', value: '41 шт' }, { label: 'Упаковок', value: '6 шт' }] } },
  // Волна 4, батч A3 — химия. Ожидаемые значения выведены вручную:
  //   58,44 г при M = 58,44 -> 1 моль; 1 / 0,5 л = 2 моль/л
  //   44 / 44,01 = 0,9997727789 -> 0,9998 моль; N = 0,9997727789 · 6,02214076e23 = 6,021e23
  //   (в запросе намеренно 44.01, а не 44.009: parseLocalizedNumber в ru-локали
  //    читает точку перед ровно тремя цифрами как разделитель разрядов, и
  //    «44.009» стало бы 44 009. Поведение общее и существовало до этой волны.)
  //   40 / 250 = 16 %; растворителя 250 − 40 = 210 г
  //   1 · 250 / 10 = 25 мл; долить 250 − 25 = 225 мл
  //   [H+] = 10^-8,4 = 3,981e-9 моль/л; pOH = 14 − 8,4 = 5,60
  //   V = 1 · 8,314462618 · 273,15 / 101 325 = 0,0224139695 м³ = 22,414 л
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'molarity': { query: { mode: 'mass', mass: 58.44, molarMass: 58.44, volumeUnit: 'l', volume: 0.5 }, result: { primary: '2 моль/л', rows: [{ label: 'Количество вещества', value: '1 моль' }] } },
  'moles': { query: { mode: 'mass', mass: 44, molarMass: 44.01 }, result: { primary: '0,9998 моль', rows: [{ label: 'Число частиц', value: '6,021·10^23' }] } },
  'solution-concentration': { query: { mode: 'ww', solute: 40, solution: 250 }, result: { primary: '16,00%', rows: [{ label: 'Масса растворителя', value: '210,00 г' }] } },
  'dilution': { query: { solve: 'v1', c1: 10, c2: 1, v2: 250 }, result: { primary: '25 мл', rows: [{ label: 'Добавить растворителя', value: '225 мл' }] } },
  'ph-poh': { query: { mode: 'fromPh', ph: 8.4 }, result: { primary: '3,981·10^-9 моль/л', rows: [{ label: 'pOH', value: '5,60' }, { label: 'Среда', value: 'щелочная' }] } },
  'ideal-gas-law': { query: { solve: 'v', n: 1, tempUnit: 'k', t: 273.15, pressureUnit: 'pa', p: 101325, volumeUnit: 'l' }, result: { primary: '22,414 л', rows: [{ label: 'Температура', value: '273,15 К' }] } },
  // Волна 4, батч A2 — первые в проекте потребители CalcResult.table.
  // Ожидаемые значения выведены вручную:
  //   i = 9,5/12/100; A = 500 000 * i / (1 - (1+i)^-24) = 22 957,25,
  //     последний платёж 22 957,17 забирает снос округления
  //   наценка 0%: 120 000 / 12 = 10 000, переплата 0
  'annuity': { query: { amount: 500000, rate: 9.5, months: 24 }, result: { primary: '22 957,25 ₽', rows: [{ label: 'Последний платёж', value: '22 957,17 ₽' }] } },
  'installment': { query: { price: 120000, down: 0, months: 12, markup: 0 }, result: { primary: '10 000,00 ₽', rows: [{ label: 'Переплата', value: '0,00 ₽' }] } },
  // Волна 4, батч A1 — первые в V2 потребители списка в textarea.
  // Ожидаемые значения выведены вручную:
  //   10 20 30 40 -> среднее 25, медиана (20+30)/2 = 25,
  //     отклонения -15 -5 5 15 -> 225+25+25+225 = 500, генеральная 500/4 = 125, sigma = 11,1803…
  //   (90*3 + 75*4 + 60*2) / 9 = 690 / 9 = 76,6667
  //   (85 - 70) / 10 = 1,5          ·  100 000 / 21 = 4 761,90, / 8 = 595,24
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'stats-descriptive': { query: { values: '10\n20\n30\n40', mode: 'population' }, result: { primary: '25', rows: [{ label: 'Медиана', value: '25' }, { label: 'Дисперсия', value: '125' }, { label: 'Стандартное отклонение', value: '11,1803' }] } },
  'weighted-mean': { query: { pairs: '90 3\n75 4\n60 2' }, result: { primary: '76,6667', rows: [{ label: 'Сумма весов', value: '9' }] } },
  'z-score': { query: { x: 85, mean: 70, sd: 10 }, result: { primary: '1,5', rows: [{ label: 'Отклонение', value: '15' }] } },
  'workday-cost': { query: { salary: 100000, days: 21, hours: 8 }, result: { primary: '4 761,90 ₽', rows: [{ label: 'Стоимость часа', value: '595,24 ₽' }] } },
  // Волна 3, батч B3. Ожидаемые значения выведены вручную:
  //   250 000 / 40 000 = 6,25 раза     ·  √(2560² + 1440²) / 27 = 108,79 ppi
  //   100 / (10 × 0,8) = 12,5 ч        ·  53 / 11 = 4,82
  'inventory-turnover': { query: { cogs: 250000, mode: 'direct', avgInventory: 40000 }, result: { primary: '6,25 раз', rows: [{ label: 'Срок хранения', value: '58,4 дней' }] } },
  'ppi-dpi': { query: { w: 2560, h: 1440, diagonal: 27 }, result: { primary: '108,79 ppi' } },
  'battery-charge-time': { query: { capacityAh: 100, currentA: 10, efficiency: 80 }, result: { primary: '12 ч 30 мин', rows: [{ label: 'В часах', value: '12,50 ч' }] } },
  'bike-gear-ratio': { query: { chainring: 53, sprocket: 11, wheelCircumference: 0 }, result: { primary: '4,82' } },
  // Волна 3, батч B2. Ожидаемые значения выведены вручную:
  //   1 500 000 / 5 000 000 = 30 %      ·  250 000 000 / 1 000 000 = 250
  //   50 000 × 12 / 8 000 000 = 7,5 %, чистая (600 000 − 120 000) / 8 000 000 = 6,0 %
  //   150 / 0,5 = 300 против 260 / 1 = 260 -> B   ·  1000 / 75 = 13,3
  //   120 / 4000 = 3 %
  'down-payment': { query: { mode: 'amount', price: 5000000, downPayment: 1500000 }, result: { primary: '1 500 000,00 ₽', rows: [{ label: 'Доля взноса', value: '30,00%' }] } },
  'market-cap': { query: { mode: 'price', shares: 1000000, cap: 250000000 }, result: { primary: '250,00 ₽', rows: [{ label: 'Капитализация', value: '250 000 000,00 ₽' }] } },
  'rental-yield': { query: { price: 8000000, rentMode: 'monthly', monthlyRent: 50000, annualCosts: 120000 }, result: { primary: '7,50%', rows: [{ label: 'Чистая доходность', value: '6,00%' }] } },
  'price-per-unit': { query: { mode: 'compare', unit: 'kg', priceA: 150, amountA: 0.5, priceB: 260, amountB: 1 }, result: { primary: 'B', rows: [{ label: 'Переплата за единицу', value: '40,00 ₽ за кг' }] } },
  'stock-duration': { query: { stock: 1000, perDay: 75, reserveDays: 0 }, result: { primary: '13,3 дней', rows: [{ label: 'Расход в сутки', value: '75' }] } },
  'engagement-rate': { query: { engagements: 120, base: 'followers', followers: 4000 }, result: { primary: '3,00%', rows: [{ label: 'База расчёта', value: 'подписчики' }] } },
  // Волна 3, батч B1. Ожидаемые значения выведены вручную:
  //   30 / 6 = 5 м/с      ·  2700 · 0,5 = 1350 кг   ·  2000 / 100000 = 0,02 м²
  //   2/3 · 3/4 = 6/12 -> 1/2          ·  0,5 + 0,5 − 0,25 = 0,75
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'momentum': { query: { mode: 'v', p: 30, m2: 6 }, result: { primary: '5 м/с', rows: [{ label: 'Импульс', value: '30 кг·м/с' }] } },
  'density': { query: { mode: 'm', rho: 2700, V2: 0.5 }, result: { primary: '1 350 кг', rows: [{ label: 'Плотность', value: '2 700 кг/м³' }] } },
  'pressure': { query: { mode: 'A', F2: 2000, p2: 100000 }, result: { primary: '0,02 м²', rows: [{ label: 'Сила', value: '2 000 Н' }] } },
  'fraction-arith': { query: { op: 'mul', a: 2, b: 3, c: 3, d: 4 }, result: { primary: '1/2', rows: [{ label: 'Сокращено на', value: '6' }] } },
  'probability-basic': { query: { mode: 'independentEither', p3: 0.5, p4: 0.5 }, result: { primary: '0,75', rows: [{ label: 'Противоположное событие', value: '0,25' }] } },
  // Физика, волна 3. Ожидаемые значения выведены вручную из соотношений:
  //   50 / 5 = 10 кг            ·  √(2·100 / 8) = 5 м/с
  //   98,0665 / (9,80665·2) = 5 кг  ·  10 · 5 · cos 60° = 25 Дж
  //   600 / 50 = 12 с
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'newton-force': { query: { mode: 'm', F: 50, a2: 5 }, result: { primary: '10 кг', rows: [{ label: 'Сила', value: '50 Н' }] } },
  'kinetic-energy': { query: { mode: 'v', E: 100, m2: 8 }, result: { primary: '5 м/с', rows: [{ label: 'Кинетическая энергия', value: '100 Дж' }] } },
  'potential-energy': { query: { mode: 'm', E2: 98.0665, h2: 2 }, result: { primary: '5 кг', rows: [{ label: 'Высота', value: '2 м' }] } },
  'work': { query: { mode: 'W', F: 10, s: 5, angleDeg: 60 }, result: { primary: '25 Дж', rows: [{ label: 'Косинус угла', value: '0,5' }] } },
  'physics-power': { query: { mode: 't', W2: 600, P: 50 }, result: { primary: '12 с', rows: [{ label: 'Мощность', value: '50 Вт' }] } },
  // Геометрия, волна 3. Ожидаемые значения выведены вручную из формул фигур:
  //   √49 = 7 -> S = 49          ·  30 / 6 = 5        ·  π·5² = 78,54
  //   ½·10·4 = 20                ·  √(13² − 5²) = 12  ·  ((7,5+2,5)/2)·3 = 15
  //   квадрат как n=4: 5² = 25   ·  (4/3)π·5³ = 523,599
  //   π·1²·1 = 3,142             ·  π·6²·8/3 = 301,593, образующая √(36+64) = 10
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'geom-square': { query: { mode: 'area', unit: 'm', area: 49 }, result: { primary: '49 м²' } },
  'geom-rectangle': { query: { mode: 'areaSide', unit: 'm', area: 30, a: 6 }, result: { primary: '30 м²', rows: [{ label: 'Вторая сторона', value: '5 м' }] } },
  'geom-circle': { query: { mode: 'diameter', unit: 'cm', d: 10 }, result: { primary: '78,54 см²', rows: [{ label: 'Радиус', value: '5 см' }] } },
  'geom-triangle': { query: { mode: 'baseHeight', unit: 'm', base: 10, height: 4 }, result: { primary: '20 м²' } },
  'geom-right-triangle': { query: { mode: 'legHyp', unit: 'cm', a: 5, c: 13 }, result: { primary: '12 см', rows: [{ label: 'Площадь', value: '30 см²' }] } },
  'geom-trapezoid': { query: { unit: 'm', a: 7.5, b: 2.5, h: 3 }, result: { primary: '15 м²', rows: [{ label: 'Средняя линия', value: '5 м' }] } },
  'geom-regular-polygon': { query: { unit: 'm', n: 4, side: 5 }, result: { primary: '25 м²', rows: [{ label: 'Внутренний угол', value: '90°' }] } },
  'geom-sphere': { query: { mode: 'diameter', unit: 'cm', d: 10 }, result: { primary: '523,6 см³', rows: [{ label: 'Радиус', value: '5 см' }] } },
  'geom-cylinder': { query: { unit: 'm', r: 1, h: 1 }, result: { primary: '3,142 м³', rows: [{ label: 'Полная поверхность', value: '12,566 м²' }] } },
  'geom-cone': { query: { unit: 'm', r: 6, h: 8 }, result: { primary: '301,59 м³', rows: [{ label: 'Образующая', value: '10 м' }] } },
  // Калькуляторы V2 волны 1. Ожидаемые значения выведены вручную из формул:
  //   (120000 − 90000) / 120000 = 25,00 %
  //   50 % от 80000 = 40 000 ₽
  //   200000 × 3 / 100 = 6 000 ₽
  // Значения намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  // Конвертеры волны 3. Ожидаемые значения известны из определений единиц:
  //   10 кгс = 98,0665 Н · 1 г/см³ = 1000 кг/м³ · 1 м³/ч = 16,6667 л/мин
  //   1 МБ/с = 8 Мбит/с · 1 lbf·ft = 1,3558 Н·м · 1 ГГц = 1000 МГц
  //   1 фот = 10 000 лк · 1 метрический стакан = 250 мл · 1 lbf = 4,4482 Н
  //   1 lb/ft³ = 16,0185 кг/м³ · 1 л/с = 3,6 м³/ч
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  'convert-force': { query: { value: 1, from: 'lbf', to: 'n' }, result: { primary: '4,4482 Н' } },
  'convert-density': { query: { value: 1, from: 'lbft3', to: 'kgm3' }, result: { primary: '16,0185 кг/м³' } },
  'convert-flow': { query: { value: 1, from: 'ls', to: 'm3h' }, result: { primary: '3,6000 м³/ч' } },
  'convert-data-rate': { query: { value: 1, from: 'mbytes', to: 'mbits' }, result: { primary: '8,0000 Мбит/с' } },
  'convert-torque': { query: { value: 1, from: 'lbfft', to: 'nm' }, result: { primary: '1,3558 Н·м' } },
  'convert-frequency': { query: { value: 1, from: 'ghz', to: 'mhz' }, result: { primary: '1 000,00 МГц' } },
  'convert-illuminance': { query: { value: 1, from: 'ph', to: 'lx' }, result: { primary: '10 000,00 лк' } },
  'convert-cooking-volume': { query: { value: 1, from: 'cupM', to: 'ml' }, result: { primary: '250,0000 мл' } },
  // Конвертеры волны 2. Пары подобраны так, чтобы ожидаемое значение было
  // известно из определения единиц, а не получено прогоном движка:
  //   1 км = 1000 м · 100 °C = 212 °F · 1 ТБ = 1000 ГБ · 1 т = 1000 кг
  //   1 га = 10 000 м² · 1 м³ = 1000 л · 36 км/ч = 10 м/с · 1 атм = 101 325 Па
  //   1 кВт·ч = 3 600 000 Дж · 1 МВт = 1000 кВт · 1 сут = 24 ч · 1 оборот = 360°
  // Каждый набор отличается от значений по умолчанию: контракт reset проверяет,
  // что сброс возвращает форму к исходному состоянию.
  'convert-length': { query: { value: 2, from: 'km', to: 'm' }, result: { primary: '2 000,00 м' } },
  'convert-temperature': { query: { value: 100, from: 'c', to: 'f' }, result: { primary: '212,0000 °F' } },
  'convert-digital': { query: { value: 1, from: 'TB', to: 'GB' }, result: { primary: '1 000,00 ГБ' } },
  'convert-mass': { query: { value: 1, from: 't', to: 'kg' }, result: { primary: '1 000,00 кг' } },
  'convert-area': { query: { value: 1, from: 'ha', to: 'm2' }, result: { primary: '10 000,00 м²' } },
  'convert-volume': { query: { value: 1, from: 'm3', to: 'l' }, result: { primary: '1 000,00 л' } },
  'convert-speed': { query: { value: 36, from: 'kmh', to: 'ms' }, result: { primary: '10,0000 м/с' } },
  'convert-pressure': { query: { value: 1, from: 'atm', to: 'pa' }, result: { primary: '101 325,00 Па' } },
  'convert-energy': { query: { value: 1, from: 'kwh', to: 'j' }, result: { primary: '3 600 000,00 Дж' } },
  'convert-power': { query: { value: 1, from: 'mw', to: 'kw' }, result: { primary: '1 000,00 кВт' } },
  'convert-time': { query: { value: 1, from: 'd', to: 'h' }, result: { primary: '24,0000 ч' } },
  'convert-angle': { query: { value: 1, from: 'turn', to: 'deg' }, result: { primary: '360,0000 °' } },
  // Волна 7, партия A. Значения намеренно отличаются от умолчаний и меняют
  // результат: контракт reset проверяет возврат формы к исходному состоянию.
  //   100 = 8 · 12 + 4 · 84 = 2² · 3 · 7 · x² − 3x + 2 = (x − 2)(x − 1)
  //   1000 − 400 = 600 · 90 000 / 30 = 3 000 · 200 000 × 10 × 2 / 100 = 40 000
  'modulo': { query: { a: 100, b: 8 }, result: { primary: '4' } },
  'prime-factorization': { query: { n: 84 }, result: { primary: '84 = 2² · 3 · 7' } },
  'quadratic-equation': { query: { a: 1, b: -3, c: 2 }, result: { primary: 'x₁ = 2, x₂ = 1' } },
  'contribution-margin': { query: { price: 1000, variable: 400 }, result: { primary: '600 ₽' } },
  'cac': { query: { spend: 90000, customers: 30 }, result: { primary: '3 000 ₽' } },
  'simple-interest': { query: { mode: 'interest', principal: 200000, rate: 10, years: 2 }, result: { primary: '40 000 ₽' } },
  // Волна 7, партия B.
  //   3 / 4 = 9 / d → d = 4·9 / 3 = 12 · 1888 = MDCCCLXXXVIII
  //   36 000 / 120 000 = 30 % → комфортная · 1600 не високосный (делится на 400? да)
    'proportion': { query: { find: 'd', a: 3, b: 4, c: 9, d: 0 }, result: { primary: '12' } },
  'roman-numerals': { query: { mode: 'toRoman', arabic: 1888 }, result: { primary: 'MDCCCLXXXVIII' } },
  'dti': { query: { payments: 60000, income: 120000 }, result: { primary: '50,00 %' } },
  'leap-year': { query: { year: 1900 }, result: { primary: 'Нет' } },
  // Волна 7, партия C.
  //   log₂(1024) = 10 · 200 → 150: −50 и −25 % · 300 000 / 150 = 2000
  //   60 / 600 = 10 % · (150 000 − 100 000) / 100 000 = +50 %
  'logarithm': { query: { mode: 'custom', value: 1024, base: 2 }, result: { primary: '10' } },
  'difference-abs-rel': { query: { from: 200, to: 150 }, result: { primary: '-50' } },
  'aov': { query: { revenue: 300000, orders: 150 }, result: { primary: '2 000 ₽' } },
  'return-rate': { query: { returns: 60, orders: 600 }, result: { primary: '10,00 %' } },
  'roi': { query: { received: 150000, invested: 100000 }, result: { primary: '50,00 %' } },
  // Волна 7, партия D.
  //   (400 000 − 200 000) / 200 000 = +100 % · 20 000 000 / 50 = 400 000
  //   (2000 + 0) / 40 = 50 · 15 / 300 = 5 % · 1 января 2024 — понедельник
  'ad-roi': { query: { revenue: 400000, spend: 200000 }, result: { primary: '100,00 %' } },
  'revenue-per-employee': { query: { revenue: 20000000, employees: 50 }, result: { primary: '400 000 ₽' } },
  'shipping-per-unit': { query: { shipping: 2000, units: 40 }, result: { primary: '50 ₽' } },
  'dividend-yield': { query: { dividend: 15, price: 300 }, result: { primary: '5,00 %' } },
  'day-of-week': { query: { date: '2024-01-01' }, result: { primary: 'понедельник' } },
  'savings-rate': {
    query: { income: 120000, expenses: 90000 },
    result: { primary: '25,00 %' },
  },
  'budget-50-30-20': {
    query: { income: 80000 },
    result: { primary: '40 000 ₽' },
  },
  // 2^(1/10) = e^(ln2/10) = e^0,06931472 = 1,07177346 → 7,18 %
  'cagr': {
    query: { begin: 50000, end: 100000, years: 10 },
    result: { primary: '7,18 %' },
  },
  // 29 февраля 2024 — 60-й день, 9-я неделя ISO
  'week-number': {
    query: { date: '2024-02-29' },
    result: { primary: '9' },
  },
  // 20:15 = 1215 мин, 8:00 = 480 → 735 мин = 12 ч 15 мин.
  // Отличается от умолчания (9:00 → 17:30 тоже даёт 510 минут).
  'time-duration': {
    query: { mode: 'difference', startHour: 8, startMinute: 0, endHour: 20, endMinute: 15 },
    result: { primary: '12 ч 15 мин' },
  },
  // 4·150 + 9·70 + 4·250 = 600 + 630 + 1000 = 2230
  'calories-from-macros': {
    query: { protein: 150, fat: 70, carbs: 250 },
    result: { primary: '2 230 ккал' },
  },
  // 3 × 3 × 2,5 = 22,50 м³
  'room-volume': {
    query: { mode: 'dimensions', length: 3, width: 3, height: 2.5 },
    result: { primary: '22,50 м³' },
  },
  'commission': {
    query: { mode: 'fromAmount', a: 200000, b: 3 },
    result: { primary: '6 000 ₽' },
  },
  'credit-calculator': {
    query: { amount: 120000, term: 1, termUnit: 'years', rate: 0, type: 'annuity' },
    result: { primary: '10 000 ₽' },
  },
  'deposit-calculator': {
    query: {
      amount: 100000,
      months: 12,
      rate: 0,
      capitalization: 'yes',
      capPeriod: 'quarter',
      topUp: 0,
      topUpTiming: 'end',
    },
    result: { primary: '100 000 ₽' },
  },
  'compound-interest': {
    query: {
      principal: 100000,
      rate: 0,
      compounding: 'quarter',
      years: 1,
      topUp: 0,
      frequency: 'year',
    },
    result: { primary: '100 000 ₽' },
  },
  'mortgage-calculator': {
    query: {
      price: 1200000,
      downPaymentMode: 'percent',
      downPaymentPct: 0,
      years: 1,
      rate: 0,
      type: 'annuity',
    },
    result: { primary: '100 000 ₽' },
  },
  'income-tax-calculator': {
    query: {
      amount: 100000,
      period: 'month',
      direction: 'gross',
      mode: 'fixed',
      rate: 10,
    },
    result: { primary: '10 000 ₽' },
  },
  'vat-calculator': {
    query: { amount: 1000, operationDate: '2026-01-15', rate: '10', operation: 'add' },
    result: { primary: '100 ₽' },
  },
  'percent-calculator': {
    query: { mode: 'addPct', a: 100, b: 10 },
    result: { primary: '110,00' },
  },
  'discount-calculator': {
    query: {
      price: 1000,
      mode: 'byAmount',
      discountAmt: 100,
      secondDiscountPct: 0,
      quantity: 2,
    },
    result: { primary: '900 ₽', rows: [{ label: 'Итого за товары', value: '1 800 ₽' }] },
  },
  'brick-calculator': {
    // Стена 5 × 3 без проёмов, камень 400 × 200 со швом 10: модуль 0,41 × 0,21 = 0,0861 м².
    // 15 / 0,0861 = 174,22 → 175 без запаса, ×1,1 = 191,64 → 192 с запасом.
    query: { mode: 'dimensions', wallLength: 5, wallHeight: 3, openingsArea: 0, unitLength: 400, unitHeight: 200, joint: 10, reserve: 10, unitPrice: 0 },
    result: { primary: '192 \u0448\u0442.' },
  },
  'body-fat-calculator': {
    // Мужчина 180 см, шея 38, талия 90: 86,010·log10(52/2,54) − 70,041·log10(180/2,54) + 36,76.
    query: { sex: 'male', height: 180, neck: 38, waist: 95 },
    result: { primary: '23,4%' },
  },
  'break-even-calculator': {
    // 10 000 постоянных затрат при марже 500 - 300 = 200 дают ровно 50 единиц.
    query: { fixedCosts: 10000, unitPrice: 500, variableCost: 300, plannedUnits: 0 },
    result: { primary: '50 \u0448\u0442.', rows: [{ label: '\u041c\u0430\u0440\u0436\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c \u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u044b', value: '200\u00a0\u20bd' }] },
  },
  'margin-calculator': {
    query: { mode: 'fromMarkup', cost: 100, markupPct: 50, quantity: 2 },
    result: { primary: '150 ₽' },
  },
  'currency-converter': {
    query: { amount: 250, from: 'EUR', to: 'EUR' },
    result: { primary: '250,00 €' },
  },
  'usd-to-eur': {
    query: { amount: 250 },
    result: { rows: [{ label: 'Из', contains: '250,00 $' }] },
  },
  'eur-to-mdl': {
    query: { amount: 250 },
    result: { rows: [{ label: 'Из', contains: '250,00 €' }] },
  },
  'usd-to-mdl': {
    query: { amount: 250 },
    result: { rows: [{ label: 'Из', contains: '250,00 $' }] },
  },
  'bmi-calculator': {
    query: { height: 200, weight: 100 },
    result: { primary: '25,0' },
  },
  'calorie-calculator': {
    query: {
      gender: 'female',
      age: 30,
      height: 160,
      weight: 60,
      activity: '1.2',
      goal: 'lose',
      goalAdjustment: 20,
      proteinPct: 30,
      fatPct: 25,
    },
    result: {
      primary: '1 237 ккал',
      rows: [{ label: 'Базовый обмен (BMR)', value: '1 289 ккал' }],
    },
  },
  'running-pace-calculator': {
    query: { distance: 5, unit: 'km', hours: 0, minutes: 30, seconds: 0 },
    result: { primary: '6:00/км' },
  },
  'one-rep-max-calculator': {
    query: { weight: 100, reps: 1 },
    result: { primary: '100,0 кг' },
  },
  'tile-calculator': {
    query: {
      mode: 'area',
      manualArea: 1,
      tileLength: 100,
      tileWidth: 100,
      packArea: 1,
      reserve: 0,
      glueConsumption: 0,
      packPrice: 0,
    },
    result: { primary: '1 шт.', rows: [{ label: 'Количество упаковок', value: '1 шт.' }] },
  },
  'wallpaper-calculator': {
    query: {
      length: 1,
      width: 1,
      height: 2,
      rollWidth: 1,
      rollLength: 10,
      windows: 0,
      doors: 0,
      pattern: 0,
      rollPrice: 0,
    },
    result: { primary: '1 шт.' },
  },
  'paint-calculator': {
    query: {
      mode: 'manual',
      area: 10,
      coats: 1,
      consumption: 0.1,
      canVolume: 1,
      reserve: 0,
      canPrice: 0,
    },
    result: { primary: '1,0 л' },
  },
  'laminate-calculator': {
    query: {
      length: 2,
      width: 2,
      packArea: 2,
      reserve: 0,
      packPrice: 0,
      underlayPrice: 0,
    },
    result: { primary: '2 шт.' },
  },
  'screed-calculator': {
    query: {
      mode: 'area',
      manualArea: 1,
      thickness: 1,
      mixConsumption: 10,
      bagWeight: 10,
      reserve: 0,
      bagPrice: 0,
    },
    result: { primary: '0,010 м³', rows: [{ label: 'Мешков', value: '1 шт.' }] },
  },
  'age-calculator': {
    query: { birthDate: '2000-01-01', targetDate: '2025-01-01' },
    result: { primary: '25 лет, 0 месяцев, 0 дней' },
  },
  'working-days-calculator': {
    query: {
      startDate: '2026-01-05',
      endDate: '2026-01-09',
      includeWeekends: 'no',
      saturdayWorking: 'yes',
      excludedDates: '2026-01-07',
    },
    result: { primary: '4 дн.', rows: [{ label: 'Исключённые даты', value: '1' }] },
  },
  // Волна Phase 9A: значения отличаются от значений по умолчанию, иначе
  // сценарий проверял бы не восстановление состояния, а совпадение с дефолтом.
  'led-resistor': {
    query: { supplyVoltage: 12, forwardVoltage: 3.2, current: 350, currentUnit: 'ma' },
    result: { primary: '25,14 Ом' },
  },
  'ohms-law': {
    query: { mode: 'vr', voltage: 230, resistance: 100 },
    result: { primary: '2,300 А' },
  },
  'download-time': {
    query: { size: 700, sizeUnit: 'mib', speed: 50, speedUnit: 'mbit' },
    result: { primary: '1:57' },
  },
  'fps-frametime': {
    query: { mode: 'ms', frameTime: 8.33 },
    result: { primary: '120,05 FPS' },
  },
  'aspect-ratio': {
    query: { mode: 'reduce', width: 2560, height: 1080 },
    result: { primary: '64:27' },
  },
  'test-score-percent': {
    query: { correct: 37, total: 45 },
    result: { primary: '82,22%' },
  },
  'reading-speed': {
    query: { words: 1800, minutes: 7 },
    result: { primary: '257 слов/мин' },
  },
  'power-to-weight': {
    query: { power: 450, powerUnit: 'ps', mass: 1650 },
    result: { primary: '200,59 кВт/т' },
  },
  'fuel-consumption': {
    query: { mode: 'measure', litres: 55.4, distance: 623 },
    result: { primary: '8,89 л/100 км' },
  },
  'electricity-usage': {
    query: { power: 75, powerUnit: 'w', hoursPerDay: 24, days: 365 },
    result: { primary: '657,00 кВт·ч' },
  },
  'tip': {
    query: { bill: 5400, tipPercent: 15, people: 4 },
    result: { primary: '6 210,00 ₽' },
  },
  'rule-of-72': {
    query: { rate: 3 },
    result: { primary: '24,00 лет' },
  },
  'ctr': {
    query: { clicks: 37, impressions: 1000 },
    result: { primary: '3,70%' },
  },
  'linear-equation': {
    query: { a: -4, b: 7, c: -9 },
    result: { primary: 'x = 4' },
  },
  'combinatorics': {
    query: { mode: 'permutations', n: 10, k: 3 },
    result: { primary: '720' },
  },
  'inverter-power': {
    query: { outputPower: 2500, efficiency: 92, batteryVoltage: 24 },
    result: { primary: '2 717,4 Вт' },
  },
  'battery-runtime': {
    query: { capacity: 7, voltage: 12, load: 30, dod: 100, efficiency: 100 },
    result: { primary: '2,80 ч' },
  },
  'network-bandwidth': {
    query: { users: 8, perUser: 25, overhead: 0, concurrency: 100 },
    result: { primary: '200,0 Мбит/с' },
  },
  'files-on-disk': {
    query: { capacity: 64, capacityUnit: 'gib', fileSize: 25, fileUnit: 'mib' },
    result: { primary: '2 621' },
  },
  'unix-timestamp': {
    query: { mode: 'toTimestamp', date: '2000-01-01', hour: 0, minute: 0, second: 0 },
    result: { primary: '946684800' },
  },
  'final-grade': {
    query: { current: 90, target: 85, weight: 40 },
    result: { primary: '77,50%' },
  },
  'trip-cost': {
    query: { distance: 1200, consumption: 9, fuelPrice: 58, tolls: 1500, passengers: 4 },
    result: { primary: '7 764,00 ₽' },
  },
  'speed-distance-time': {
    query: { mode: 'distance', speed: 90, time: 2.5 },
    result: { primary: '225,00 км' },
  },
  'pool-fill-time': {
    query: { mode: 'rect', length: 8, width: 4, depth: 1.5, flow: 35, flowUnit: 'lmin' },
    result: { primary: '22,86 ч' },
  },
  'real-return': {
    query: { nominal: 5, inflation: 9 },
    result: { primary: '-3,67%' },
  },
  'cpm': {
    query: { mode: 'cpm', cost: 900, impressions: 15000 },
    result: { primary: '60,00 ₽' },
  },
  'roas': {
    query: { revenue: 95000, cost: 120000, margin: 100 },
    result: { primary: '0,79×' },
  },
  'ltv': {
    query: { mode: 'churn', arpu: 1200, churn: 5, margin: 100 },
    result: { primary: '24 000,00 ₽' },
  },
  'factorial': {
    query: { n: 20 },
    result: { primary: '2432902008176640000' },
  },
  'divisors': {
    query: { n: 36 },
    result: { primary: '1, 2, 3, 4, 6, 9, 12, 18, 36' },
  },
  'date-shift-calculator': {
    query: {
      startDate: '2026-01-01',
      shiftDirection: 'forward',
      shiftYears: 0,
      shiftMonths: 0,
      shiftWeeks: 0,
      shiftDays: 1,
    },
    result: { primary: '2026-01-02' },
  },
  // Волна 7, подпартия 17A1.
  // Ожидаемые значения выведены вручную:
  //   150 000 + 640 000 = 790 000 доступно; 790 000 − 285 000 = 505 000
  //   120 000 + 45 000 + 15 000 = 180 000 на 600 шт -> 300; доля материалов 2/3
  //   1 200 000 × 0,75 = 900 000; × 0,9² = 729 000; потеряно 471 000 = 39,25 %
  //   Δ = 3·(−4) − 1·2 = −14; x = (16·(−4) + 4·2)/(−14) = 4; y = (3·(−4) − 16)/(−14) = 2
  //   120 × 0,9 = 108 чистой воды; 30 % от неё = 32,4; остаётся 75,6
  //   2000/800 = 2,5 -> общий рост 150 %; 2,5^(1/4) = 1,2574334 -> 25,74 % за период
  //   60 000 / 250 = 240 за заявку; на тысячу 240 000
  //   I = 2200 / (220 · 0,8) = 12,5 А; S = 2750 ВА; Q = √(2750² − 2200²) = 1650 вар
  //   250 000 − 100 000 = 150 000; маржа 60 %, наценка 150 %
  //   v = 5 + 2,5 · 6 = 20 м/с; путь (5 + 20)/2 · 6 = 75 м
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  // У single-phase и acceleration выбран НЕ умолчальный режим: так проверяется
  // и обратное направление формулы, и переключение показываемых полей.
  'cogs': { query: { beginInventory: 150000, purchases: 640000, endInventory: 285000 }, result: { primary: '505 000,00 ₽', rows: [{ label: 'Доступно к продаже', value: '790 000,00 ₽' }, { label: 'Запас на начало', value: '150 000,00 ₽' }] } },
  'cogs-unit-cost': { query: { materials: 120000, labor: 45000, overhead: 15000, units: 600 }, result: { primary: '300,00 ₽', rows: [{ label: 'Всего затрат', value: '180 000,00 ₽' }, { label: 'Единиц', value: '600' }, { label: 'Доля материалов', value: '66,67%' }] } },
  'car-depreciation': { query: { price: 1200000, years: 3, ratePct: 10, firstYearPct: 25 }, result: { primary: '729 000,00 ₽', rows: [{ label: 'Потеряно в деньгах', value: '471 000,00 ₽' }, { label: 'Потеряно, доля', value: '39,25%' }] } },
  'linear-system': { query: { a1: 3, b1: 2, c1: 16, a2: 1, b2: -4, c2: -4 }, result: { primary: 'x = 4', rows: [{ label: 'y', value: '2' }, { label: 'Определитель', value: '-14' }] } },
  'aquarium-water-change': { query: { volume: 120, changePct: 30, decorPct: 10 }, result: { primary: '32,4 л', rows: [{ label: 'Чистый объём воды', value: '108 л' }, { label: 'Останется', value: '75,6 л' }] } },
  'audience-growth': { query: { start: 800, end: 2000, periods: 4 }, result: { primary: '150,00%', rows: [{ label: 'Рост за период', value: '25,74%' }, { label: 'Прирост', value: '1 200' }, { label: 'Множитель', value: '2,5' }] } },
  'cpa-cpl-cpi': { query: { mode: 'cpl', cost: 60000, actions: 250 }, result: { primary: '240,00 ₽', rows: [{ label: 'Бюджет', value: '60 000,00 ₽' }, { label: 'Действий', value: '250' }, { label: 'На тысячу действий', value: '240 000,00 ₽' }] } },
  'single-phase': { query: { mode: 'current', voltage: 220, power: 2200, powerFactor: 0.8 }, result: { primary: '12,5 А', rows: [{ label: 'Активная мощность', value: '2 200 Вт' }, { label: 'Полная мощность', value: '2 750 ВА' }, { label: 'Реактивная мощность', value: '1 650 вар' }] } },
  'profit': { query: { revenue: 250000, cost: 100000 }, result: { primary: '150 000,00 ₽', rows: [{ label: 'Маржа', value: '60,00%' }, { label: 'Наценка', value: '150,00%' }] } },
  'acceleration': { query: { mode: 'v', v0: 5, a: 2.5, t: 6 }, result: { primary: '20 м/с', rows: [{ label: 'Изменение скорости', value: '15 м/с' }, { label: 'Пройденный путь', value: '75 м' }, { label: 'Время', value: '6 с' }] } },
  // Волна 7, подпартия 17A2.
  // Ожидаемые значения выведены вручную:
  //   20 · 1,5³ = 67,5 вверх и 20 / 1,5 = 13,333 вниз; ступеней 1 + 3 + 1 = 5
  //   3d8 на 12: C(11,2) − 3·C(3,2) = 55 − 9 = 46 из 8³ = 512 -> 8,984375 %
  //   крупная собака 10 лет: 15 + 9 + 7 · 8 = 80
  //   RER = 70 · 6^0,75 = 268,356; × 1,2 = 322,027 ккал; / 400 · 100 = 80,507 г
  //   APY 12 % при четырёх начислениях: (1,12^0,25 − 1) · 4 = 11,4949 % номинальных
  //   премия 50 % от 90 000 = 45 000; налог 13 % = 5 850; на руки 39 150
  //   F = 0,2 · 4² / 0,8 = 4 Н; ω = 5 рад/с; T = 2π · 0,8 / 4 = 1,257 с
  //   12 000 / 500 = 24 за клик; CPM 300; CTR 500 / 40 000 = 1,25 %
  //   4 750 / 5 000 = 95 %; 1 900 / 4 750 = 40 %; 285 / 1 900 = 15 %
  //   позиция 20 000 · 10 = 200 000; ликвидация 500 · (1 − 0,1 + 0,01) = 455
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  // У apr-apy выбран НЕ умолчальный режим: так проверяется обратный перевод.
  'modular-scale': { query: { base: 20, ratio: 1.5, stepsUp: 3, stepsDown: 1 }, result: { primary: '67,5', rows: [{ label: 'Наименьший размер', value: '13,333' }, { label: 'Ступеней', value: '5' }, { label: 'База', value: '20' }] } },
  'dice-probability': { query: { count: 3, sides: 8, target: 12 }, result: { primary: '8,98%', rows: [{ label: 'Благоприятных исходов', value: '46' }, { label: 'Всего исходов', value: '512' }, { label: 'Ожидаемая сумма', value: '13,5' }] } },
  'pet-age': { query: { species: 'dog-large', years: 10 }, result: { primary: '80', rows: [{ label: 'Возраст питомца, лет', value: '10' }, { label: 'Прибавка за каждый следующий год', value: '7' }] } },
  'pet-food': { query: { weight: 6, factor: 1.2, kcalPer100: 400 }, result: { primary: '80,507 г', rows: [{ label: 'Потребность в энергии', value: '322,03 ккал' }, { label: 'Обмен покоя (RER)', value: '268,36 ккал' }, { label: 'Масса питомца', value: '6 кг' }] } },
  'apr-apy': { query: { mode: 'toApr', rate: 12, periods: 4 }, result: { primary: '11,49%', rows: [{ label: 'Эффективная ставка (APY)', value: '12,00%' }, { label: 'Ставка за период', value: '2,87%' }, { label: 'Множитель за год', value: '1,12' }] } },
  'bonus': { query: { salary: 90000, bonusPct: 50, taxPct: 13 }, result: { primary: '39 150,00 ₽', rows: [{ label: 'Премия до налога', value: '45 000,00 ₽' }, { label: 'Налог', value: '5 850,00 ₽' }] } },
  'centripetal-force': { query: { m: 0.2, v: 4, r: 0.8 }, result: { primary: '4 Н', rows: [{ label: 'Центростремительное ускорение', value: '20 м/с²' }, { label: 'Угловая скорость', value: '5 рад/с' }, { label: 'Период обращения', value: '1,257 с' }] } },
  'cpc': { query: { cost: 12000, clicks: 500, impressions: 40000 }, result: { primary: '24,00 ₽', rows: [{ label: 'Кликов', value: '500' }, { label: 'CPM', value: '300,00 ₽' }, { label: 'Кликабельность', value: '1,25%' }] } },
  'email-metrics': { query: { sent: 5000, delivered: 4750, opened: 1900, clicked: 285 }, result: { primary: '95,00%', rows: [{ label: 'Открываемость', value: '40,00%' }, { label: 'Кликабельность', value: '6,00%' }, { label: 'Кликов на открытие', value: '15,00%' }] } },
  'leverage': { query: { equity: 20000, leverage: 10, entry: 500, maintenancePct: 1 }, result: { primary: '200 000,00 ₽', rows: [{ label: 'Единиц позиции', value: '400' }, { label: 'Цена ликвидации', value: '455,00 ₽' }, { label: 'Падение до ликвидации', value: '9,00%' }] } },
  // Волна 7, подпартия 17B1.
  // Ожидаемые значения выведены вручную:
  //   15,3 · 195 / 50 = 59,67 мл/кг/мин
  //   90 · 0,033 = 2,97; 60/30 · 0,35 = 0,7; (2,97 + 0,7) · 1,1 = 4,037; /0,25 = 16,148
  //   900 · 120 = 108 000; 900 · 2 · 20 = 36 000; 144 000 / 140 = 1 028,57
  //   12,3401 вверх до двух знаков: ceil(1 234,01)/100 = 12,35
  //   1 000 в час → 8 000 в день, 168 000 в месяц, 2 016 000 в год
  //   90 000 · 1,12 = 100 800; разница 10 800
  //   2,5/10 = 25 %; atan 0,25 = 14,036°; √(2,5² + 10²) = 10,308
  //   250 Гц · 1,4 м = 350 м/с; период 1/250 = 0,004 с
  //   2 em при родителе 20 = 40 px = 2,5 rem = 30 pt
  //   250 000 · 15 % = 37 500; итого 327 500; множитель 1,31
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  // У vo2max, rounding, salary-raise и wave выбран НЕ умолчальный режим.
  'vo2max': { query: { mode: 'hr', hrRest: 50, hrMax: 195 }, result: { primary: '59,67 мл/кг/мин', rows: [{ label: 'Метод', value: 'по пульсу' }, { label: 'Пульс покоя', value: '50' }, { label: 'Максимальный пульс', value: '195' }] } },
  'water-intake': { query: { weight: 90, activityMinutes: 60, hotWeather: 'yes' }, result: { primary: '4,037 л', rows: [{ label: 'Базовая норма', value: '2,97 л' }, { label: 'Надбавка за нагрузку', value: '0,7 л' }, { label: 'Стаканов по 250 мл', value: '16,148' }] } },
  'overtime': { query: { rate: 900, normalHours: 120, overtimeHours: 20, multiplier: 2 }, result: { primary: '144 000,00 ₽', rows: [{ label: 'Оплата обычных часов', value: '108 000,00 ₽' }, { label: 'Оплата сверхурочных', value: '36 000,00 ₽' }, { label: 'Средняя ставка за час', value: '1 028,57 ₽' }] } },
  'rounding': { query: { value: 12.3401, digits: 2, mode: 'up' }, result: { primary: '12,35', rows: [{ label: 'Исходное значение', value: '12,3401' }, { label: 'Знаков', value: '2' }] } },
  'salary-convert': { query: { amount: 1000, fromPeriod: 'hour', toPeriod: 'day' }, result: { primary: '8 000,00 ₽', rows: [{ label: 'В час', value: '1 000,00 ₽' }, { label: 'В месяц', value: '168 000,00 ₽' }, { label: 'В год', value: '2 016 000,00 ₽' }] } },
  'salary-raise': { query: { mode: 'fromPct', oldSalary: 90000, raisePct: 12 }, result: { primary: '100 800,00 ₽', rows: [{ label: 'Разница', value: '10 800,00 ₽' }, { label: 'Было', value: '90 000,00 ₽' }, { label: 'Множитель', value: '1,12' }] } },
  'slope': { query: { rise: 2.5, run: 10 }, result: { primary: '25,00%', rows: [{ label: 'Угол', value: '14,036°' }, { label: 'Отношение', value: '0,25' }, { label: 'Длина наклона', value: '10,308 м' }] } },
  'wave': { query: { mode: 'v', f: 250, wavelength: 1.4 }, result: { primary: '350 м/с', rows: [{ label: 'Частота', value: '250 Гц' }, { label: 'Длина волны', value: '1,4 м' }, { label: 'Период', value: '0,004 с' }] } },
  'css-units': { query: { value: 2, fromUnit: 'em', toUnit: 'px', rootSize: 16, parentSize: 20 }, result: { primary: '40', rows: [{ label: 'В пикселях', value: '40 px' }, { label: 'В rem', value: '2,5' }, { label: 'В пунктах', value: '30' }] } },
  'employee-cost': { query: { gross: 250000, taxPct: 15, overhead: 40000 }, result: { primary: '327 500,00 ₽', rows: [{ label: 'Взносы', value: '37 500,00 ₽' }, { label: 'Накладные', value: '40 000,00 ₽' }, { label: 'Множитель к окладу', value: '1,31' }] } },

  // Волна 7, подпартия 17B2.
  // Ожидаемые значения выведены вручную, а для early-repayment — НЕЗАВИСИМОЙ
  // моделью Phase 17P на Python, потому что помесячную цепочку в уме не пройти:
  //   60 000 / 15 = 4 000 кликов; 5 % = 200 заказов; × 2 000 = 400 000; ROAS 6,6667
  //   500 000 под 10 % на 3 года с доплатой 5 000 -> 27 платежей вместо 36
  //   пролёт 12, подъём 3: √(6² + 3²) = 6,7082 + 0,6 свеса = 7,308; угол atan 0,5
  //   встать в 6:00 при 5 циклах и 10 мин засыпания -> лечь в 22:20 (460 мин назад)
  //   24 дня / 12 = 2 в месяц; за 4 месяца 8; минус 10 использованных = −2
  //   5 последовательно × 3,2 В = 16 В; 4 параллельно × 5 А·ч = 20 А·ч; 320 Вт·ч
  //   60 000 × 4 = 240 000 цель; 90 000 покрывают 1,5 месяца и 37,5 %
  //   треугольная призма: апофема 1/tg60° = 0,5774; основание 1,732; объём 8,66
  //   шестиугольная пирамида: апофема основания 1/tg30° = 1,7321; боковая √19 = 4,359
  //   1 200 и 900 кг на 5 м: F = G·m₁·m₂/r² = 2,883·10⁻⁶ Н; ускорение 2,403·10⁻⁹
  //   Массы планет здесь недопустимы: показательная запись — законно ОТКЛОНЯЕМЫЙ
  //   парсером ввод (Phase 14), и такой сценарий проверял бы не расчёт, а обход поля.
  // Наборы намеренно отличаются от значений по умолчанию: контракт reset
  // проверяет, что сброс возвращает форму к исходному состоянию.
  // У sleep-time выбран НЕ умолчальный режим.
  'ad-budget-funnel': { query: { budget: 60000, cpc: 15, crPct: 5, aov: 2000 }, result: { primary: '400 000,00 ₽', rows: [{ label: 'Кликов', value: '4 000' }, { label: 'Заказов', value: '200' }, { label: 'ROAS', value: '6,6667' }, { label: 'Цена заказа', value: '300,00 ₽' }] } },
  'early-repayment': { query: { amount: 500000, rate: 10, years: 3, extra: 5000 }, result: { primary: '21 563,17 ₽', rows: [{ label: 'Платёж по графику', value: '16 133,59 ₽' }, { label: 'Платежей вместо графика', value: '27' }, { label: 'Всего выплат', value: '559 246,20 ₽' }] } },
  'rafters': { query: { span: 12, rise: 3, overhang: 0.6 }, result: { primary: '7,308 м', rows: [{ label: 'Угол наклона', value: '26,565°' }, { label: 'Заложение', value: '6 м' }, { label: 'Уклон', value: '50,00%' }] } },
  'sleep-time': { query: { mode: 'wake', hour: 6, minute: 0, cycles: 5, fallAsleep: 10 }, result: { primary: '22:20', rows: [{ label: 'Всего в постели', value: '460 мин' }, { label: 'Чистый сон', value: '450 мин' }, { label: 'Циклов', value: '5' }] } },
  'vacation-accrual': { query: { daysPerYear: 24, monthsWorked: 4, daysUsed: 10 }, result: { primary: '-2 дн.', rows: [{ label: 'Накоплено', value: '8 дн.' }, { label: 'За месяц', value: '2 дн.' }, { label: 'Использовано', value: '10 дн.' }] } },
  'battery-series-parallel': { query: { cells: 20, cellVoltage: 3.2, cellCapacity: 5, series: 5, parallel: 4 }, result: { primary: '16 В', rows: [{ label: 'Ёмкость сборки', value: '20 А·ч' }, { label: 'Энергия', value: '320 Вт·ч' }, { label: 'Ячеек', value: '20' }] } },
  'emergency-fund': { query: { monthlyExpenses: 60000, months: 4, saved: 90000 }, result: { primary: '240 000,00 ₽', rows: [{ label: 'Не хватает', value: '150 000,00 ₽' }, { label: 'Уже покрыто месяцев', value: '1,5' }, { label: 'Готовность', value: '37,50%' }] } },
  'geom-prism': { query: { unit: 'm', sides: 3, side: 2, height: 5 }, result: { primary: '8,66 м³', rows: [{ label: 'Площадь основания', value: '1,732 м²' }, { label: 'Боковая поверхность', value: '30 м²' }, { label: 'Периметр основания', value: '6 м' }] } },
  'geom-pyramid': { query: { unit: 'm', sides: 6, side: 2, height: 4 }, result: { primary: '13,856 м³', rows: [{ label: 'Площадь основания', value: '10,392 м²' }, { label: 'Апофема', value: '4,359 м' }, { label: 'Боковая поверхность', value: '26,153 м²' }] } },
  'gravitational-force': { query: { m1: 1200, m2: 900, r: 5 }, result: { primary: '2,883·10^-6 Н', rows: [{ label: 'Ускорение первого тела', value: '2,403·10^-9 м/с²' }, { label: 'Расстояние', value: '5 м' }] } },
  // Волна 20A. Ожидаемые значения выведены независимой моделью Phase 20P
  // (refmodel.py) на НЕумолчальных входах; сброс обязан вернуть форму назад.
  //   (2·10 + 2)·10¹ = 220 Ом, поле ±1 % -> 217,8 … 222,2
  'resistor-color': { query: { b1: 2, b2: 2, mult: 1, tol: 1 }, result: { primary: '220 Ом', rows: [{ label: 'Допуск', value: '±1 %' }, { label: 'Наименьшее допустимое', value: '217,8 Ом' }, { label: 'Наибольшее допустимое', value: '222,2 Ом' }] } },
  //   200·5·500 / (250·100) = 20 л; p·V/T первого состояния = 4
  'gas-laws': { query: { mode: 'v2', p1: 200, v1: 5, t1: 250, p2: 100, v2: 1, t2: 500 }, result: { primary: '20 л', rows: [{ label: 'Состояние 1: p·V/T', value: '4 кПа·л/К' }, { label: 'Первое состояние', value: '200 кПа · 5 л · 250 К' }] } },
  //   полезная 0,22 − 0,03 = 0,19; 45 × 1,05 = 47,25; 47,25 / (4 × 0,19) = 62,2 -> 63
  'cladding-boards': { query: { wall_area: 45, board_len: 4, board_width: 0.22, overlap: 0.03, waste: 5 }, result: { primary: '63 шт', rows: [{ label: 'Полезная ширина доски', value: '0,19 м' }, { label: 'Площадь с запасом', value: '47,25 м²' }, { label: 'Погонных метров доски', value: '252 м' }] } },
  //   1:12,5 при 18 г кофе -> 225 мл воды
  'brew-ratio': { query: { mode: 'water', water: 500, coffee: 18, ratio: 12.5 }, result: { primary: '225 мл', rows: [{ label: 'Вода', value: '225 мл' }, { label: 'Кофе', value: '18 г' }, { label: 'Соотношение', value: '1:12,5' }] } },
  //   8 × 2,5 × 0,15 = 3 м³; +12 % -> 3,36; × 1,35 = 4,536 т; мешков ⌈181,44⌉ = 182
  'bulk-material-volume': { query: { length: 8, width: 2.5, depth: 15, density: 1.35, waste: 12 }, result: { primary: '3,36 м³', rows: [{ label: 'Чистый объём', value: '3 м³' }, { label: 'Масса', value: '4,536 т' }, { label: 'Мешков по 25 кг', value: '182 шт' }] } },
  //   250 000 под 19,9 % платежом 12 000: r = 0,0165833, n = 26, проценты 59 268,16
  //   Набор намеренно даёт ДРУГОЙ срок, чем умолчания (26 мес): контракт
  //   сброса требует, чтобы результат после сброса отличался от набора.
  //   250 000 под 19,9 % платежом 20 000 -> 15 мес, проценты 32 495,23
  'credit-card-payoff': { query: { balance: 250000, apr: 19.9, payment: 20000 }, result: { primary: '15 мес', rows: [{ label: 'Переплата процентами', value: '32 495,23 ₽' }, { label: 'Выплачено всего', value: '282 495,23 ₽' }, { label: 'Доля переплаты', value: '13,00%' }] } },
  //   3,15 / 0,17 = 18,53 -> 19 подступенков по 0,16579; марш 18 × 0,3 = 5,4
  'stairs': { query: { rise_total: 3.15, tread: 0.3, max_riser: 0.17 }, result: { primary: '19 шт', rows: [{ label: 'Высота подступенка', value: '0,1658 м' }, { label: 'Проступей', value: '18 шт' }, { label: 'Длина марша', value: '5,4 м' }] } },
  //   12,3456° -> 12° 20′ 44,16″; 0,3456 × 60 = 20,736′
  //   В режиме «десятичные → ГМС» поля градусов, минут, секунд и полушария
  //   скрыты `showIf`, поэтому в набор они не входят: контракт проверяет,
  //   что КАЖДОЕ поле набора видно и несёт своё значение.
  'coordinate-convert': { query: { mode: 'toDms', decimal: 12.3456 }, result: { primary: '12° 20′ 44,16″', rows: [{ label: 'Десятичные градусы', value: '12,3456°' }, { label: 'Полушарие', value: 'северное или восточное' }, { label: 'Только градусы и минуты', value: '12° 20,736′' }] } },
  //   полоса 50 × 6 = 300 мм²; 300e−6 × 12 × 2,7 × 1000 = 9,72 кг
  'metal-weight': { query: { shape: 'flat', a: 50, b: 6, length: 12, density: 2.7 }, result: { primary: '9,72 кг', rows: [{ label: 'Площадь сечения', value: '300 мм²' }, { label: 'Объём металла', value: '0,0036 м³' }, { label: 'Погонная масса', value: '0,81 кг/м' }] } },
  //   28 м/с под 25° с 1,5 м: vy = 11,833, vx = 25,377, t = 2,534, L = 64,306
  'projectile-motion': { query: { v0: 28, angle: 25, h0: 1.5 }, result: { primary: '64,306 м', rows: [{ label: 'Время полёта', value: '2,534 с' }, { label: 'Высшая точка', value: '8,639 м' }, { label: 'Горизонтальная составляющая', value: '25,377 м/с' }] } },
  //   35 °C при 55 % -> 95 °F -> индекс 108,95 °F -> 42,748 °C
  'heat-index': { query: { t: 35, rh: 55 }, result: { primary: '42,748 °C', rows: [{ label: 'Прибавка к термометру', value: '7,748 °C' }, { label: 'В градусах Фаренгейта', value: '108,95 °F' }] } },
  //   λ 0,7, d 0,15 -> R = 0,2143; q = 84 Вт/м²; Q = 84 × 25 = 2 100 Вт
  'thermal-conduction': { query: { area: 25, thickness: 0.15, k: 0.7, dt: 18 }, result: { primary: '2 100 Вт', rows: [{ label: 'Плотность потока', value: '84 Вт/м²' }, { label: 'Сопротивление слоя', value: '0,2143 м²·К/Вт' }, { label: 'Коэффициент теплопередачи', value: '4,667 Вт/(м²·К)' }] } },
  //   15 + 55 × 1,8 = 114 мин = 1 ч 54 мин; отдых 10 % = 11,4 мин
  'roast-time': { query: { weight: 1.8, minutes_per_kg: 55, base_minutes: 15, rest_pct: 10 }, result: { primary: '1 ч 54 мин', rows: [{ label: 'Минут готовки', value: '114 мин' }, { label: 'Отдых после духовки', value: '11,4 мин' }, { label: 'Всего с отдыхом', value: '125,4 мин' }] } },
  // Волна 20B, партия 1. Значения выведены независимой моделью Phase 20P на
  // НЕумолчальных входах; решаемое поле в набор не входит — оно только для
  // чтения и получает своё значение из расчёта.
  //   жёсткость по паре 90 Н / 0,12 м -> 750 Н/м, энергия 90·0,12/2 = 5,4 Дж
  'hooke-law': { query: { mode: 'stiffness', f: 90, x: 0.12 }, result: { primary: '750 Н/м', rows: [{ label: 'Энергия пружины', value: '5,4 Дж' }, { label: 'Удлинение', value: '0,12 м' }, { label: 'Сила', value: '90 Н' }] } },
  //   напряжение по 1410 мкКл на 47 мкФ -> 30 В, энергия 47e−6·900/2 = 0,02115 Дж
  'capacitor-basics': { query: { mode: 'voltage', c: 47, q: 1410 }, result: { primary: '30 В', rows: [{ label: 'Энергия поля', value: '0,0211 Дж' }, { label: 'Ёмкость', value: '47 мкФ' }, { label: 'Заряд', value: '1 410 мкКл' }] } },
  //   второе плечо по 250 Н · 1,5 м против 1000 Н -> 0,375 м, выигрыш 4
  'lever-moment': { query: { mode: 'distance2', f1: 250, d1: 1.5, f2: 1000 }, result: { primary: '0,375 м', rows: [{ label: 'Выигрыш в силе', value: '4' }, { label: 'Момент первой силы', value: '375 Н·м' }, { label: 'Первое плечо', value: '1,5 м' }] } },
  //   масса алюминия по 100 000 Дж при c 900 и ΔT 25 -> 4,4444 кг
  'specific-heat': { query: { mode: 'mass', q: 100000, c: 900, dt: 25 }, result: { primary: '4,444 кг', rows: [{ label: 'В киловатт-часах', value: '0,0278 кВт·ч' }, { label: 'Изменение температуры', value: '25 К' }, { label: 'Удельная теплоёмкость', value: '900 Дж/(кг·К)' }] } },
  //   500 мл пива 5,4 % -> 27 мл спирта -> 21,303 г -> 1,52 единицы по 14 г
  'alcohol-units': { query: { volume_ml: 500, abv: 5.4, standard_g: 14 }, result: { primary: '1,52', rows: [{ label: 'Чистого спирта по массе', value: '21,303 г' }, { label: 'Чистого спирта по объёму', value: '27 мл' }, { label: 'Норма единицы', value: '14 г' }] } },
  //   2400 мм со стойкой 60 при пределе 90: 15 мало (92,5), 16 даёт 84,71
  'baluster-spacing': { query: { run: 2400, baluster_width: 60, max_gap: 90 }, result: { primary: '16 шт', rows: [{ label: 'Фактический просвет', value: '84,706 мм' }, { label: 'Шаг между осями', value: '146,16 мм' }, { label: 'Просветов', value: '17 шт' }] } },
  // Волна 21, подпартия 21A1. Значения выведены независимой моделью Phase 21P
  // на НЕумолчальных входах; решаемое поле в набор не входит.
  //   модель 72 мм в масштабе 1:72 -> натура 5184 мм
  'scale-model': { query: { mode: 'toReal', model: 72, scale: 72 }, result: { primary: '5 184 мм', rows: [{ label: 'Масштаб', value: '1:72' }, { label: 'Размер модели', value: '72 мм' }, { label: 'Натура больше модели во столько раз', value: '72' }] } },
  //   те же долги снежным комом: 27 месяцев против 26 у лавины
  'debt-snowball-avalanche': { query: { debts: 'small 40000 12 2000\nbig 200000 26 6000', extra: 4000, strategy: 'snowball' }, result: { primary: '27 мес', rows: [{ label: 'Переплата процентами', value: '75 082,64 ₽' }, { label: 'Долгов', value: '2' }] } },
  //   2 000 105 -> «два миллиона сто пять», семь знаков в трёх триадах
  'number-to-words': { query: { value: 2000105 }, result: { primary: 'два миллиона сто пять', rows: [{ label: 'Цифрами', value: '2 000 105' }, { label: 'Триад в записи', value: '3' }, { label: 'Знаков в числе', value: '7' }] } },
  //   сумма чисел лет, первый год: 5/15 от базы 1 000 000 = 333 333,33
  'depreciation-methods': { query: { cost: 1200000, salvage: 200000, life: 5, method: 'syd', year: 1 }, result: { primary: '333 333,33 ₽', rows: [{ label: 'Остаточная стоимость', value: '866 666,67 ₽' }, { label: 'Амортизируемая база', value: '1 000 000,00 ₽' }] } },
  //   горизонтальная цистерна: четверть высоты даёт заметно меньше четверти объёма
  'tank-volume': { query: { shape: 'horizontal-cylinder', d: 2, len: 4, level: 0.5 }, result: { primary: '2,457 м³', rows: [{ label: 'Полный объём', value: '12,566 м³' }, { label: 'Заполнено', value: '19,5501 %' }, { label: 'В литрах', value: '2 456,74 л' }] } },
  //   отношение мощностей 1:10 — ровно 10 дБ
  'decibel': { query: { mode: 'ratio', p1: 1, p2: 10, kind: 'power' }, result: { primary: '10 дБ', rows: [{ label: 'Во сколько раз по мощности', value: '10' }, { label: 'Во сколько раз по амплитуде', value: '3,162' }] } },
  // Волна 21, подпартия 21A2.
  //   5 кроров в миллиарды: 5·10⁷ / 10⁹ = 0,05
  'number-scale-names': { query: { value: 5, from: 'crore', to: 'billion' }, result: { primary: '0,05', rows: [{ label: 'В единицах', value: '50 000 000' }, { label: 'В лакхах', value: '500' }, { label: 'В крорах', value: '5' }] } },
  //   те же номиналы параллельно: ёмкости складываются
  'capacitor-network': { query: { capacitances: '100 220 470', mode: 'parallel' }, result: { primary: '790 мкФ', rows: [{ label: 'Конденсаторов', value: '3' }, { label: 'Соединение', value: 'параллельное' }] } },
  //   стержень через конец: mL²/3 = 3·1,44/3
  'moment-of-inertia': { query: { shape: 'rod-end', m: 3, r: 1.2 }, result: { primary: '1,44 кг·м²', rows: [{ label: 'Радиус инерции', value: '0,6928 м' }, { label: 'Тело', value: 'стержень через конец' }] } },
  //   сечение 50×150 при 9 кН·м: W = 187 500 мм³
  'beam-stress': { query: { moment: 9000, section: 'rect', b: 50, h: 150 }, result: { primary: '48 МПа', rows: [{ label: 'Момент сопротивления', value: '187 500 мм³' }, { label: 'Определяющий размер сечения', value: '150 мм' }] } },
  //   пять секунд падения при лунном ускорении 1,62
  'free-fall': { query: { mode: 'fromTime', t: 5, g: 1.62 }, result: { primary: '8,1 м/с', rows: [{ label: 'Высота падения', value: '20,25 м' }, { label: 'В километрах в час', value: '29,16 км/ч' }] } },
  //   повышающий 200/1000 витков: 12 В -> 60 В, ток падает впятеро
  'transformer-ratio': { query: { mode: 'secondaryVoltage', n1: 200, n2: 1000, v1: 12, i1: 5 }, result: { primary: '60 В', rows: [{ label: 'Отношение витков', value: '5' }, { label: 'Вторичный ток', value: '1 А' }, { label: 'Тип', value: 'повышающий' }] } },
  // Волна 21, подпартия 21B1. Тела и среды взяты НЕ марсианские по умолчанию:
  // все шесть работают на входах, отличных от умолчаний формы.
  //   Марс: масса 0,64171·10²⁴ кг, радиус 3389,5 км -> 5,03 км/с
  'escape-velocity': { query: { mass24: 0.64171, radiusKm: 3389.5 }, result: { primary: '5 027,12 м/с', rows: [{ label: 'Первая космическая скорость', value: '3 554,71 м/с' }, { label: 'В километрах в час', value: '18 097,64 км/ч' }, { label: 'Ускорение свободного падения', value: '3,728 м/с²' }] } },
  //   низкая орбита Марса, радиус 3600 км -> 1,82 часа, 13,175 оборота в сутки
  'orbital-period': { query: { mass24: 0.64171, radiusKm: 3600 }, result: { primary: '6 557,85 с', rows: [{ label: 'В часах', value: '1,822 ч' }, { label: 'Орбитальная скорость', value: '3 449,22 м/с' }, { label: 'Оборотов в сутки', value: '13,175' }] } },
  //   тепловой нейтрон 2,2 км/с -> 0,18 нм, порядок межатомных расстояний
  'de-broglie': { query: { mass27: 1.67492749, velocityKmS: 2.2 }, result: { primary: '1,798·10^-10 м', rows: [{ label: 'Импульс', value: '3,685·10^-24 кг·м/с' }, { label: 'Частота', value: '1,223·10^13 Гц' }, { label: 'В нанометрах', value: '0,1798 нм' }] } },
  //   источник удаляется (-30), наблюдатель догоняет (+25): итог ниже исходной
  'doppler': { query: { f: 1000, vSource: -30, vObserver: 25, c: 343 }, result: { primary: '986,6 Гц', rows: [{ label: 'Сдвиг частоты', value: '-13,405 Гц' }, { label: 'Относительный сдвиг', value: '-1,3405 %' }, { label: 'Скорость волны', value: '343 м/с' }] } },
  //   приближение с 4 м до 1,6 м: рост в 6,25 раза, а не в 2,5
  'inverse-square': { query: { i1: 250, d1: 4, d2: 1.6 }, result: { primary: '1 562,5', rows: [{ label: 'Во сколько раз изменилась', value: '6,25' }, { label: 'Отношение расстояний', value: '0,4' }, { label: 'В процентах от исходной', value: '625 %' }] } },
  //   паровая турбина 811 К / 311 К -> предел 61,65 %, реальная вдвое ниже
  'carnot': { query: { tHot: 811, tCold: 311 }, result: { primary: '61,6523 %', rows: [{ label: 'Полезная работа из 1000 Дж тепла', value: '616,52 Дж' }, { label: 'Отдано холодильнику', value: '383,48 Дж' }, { label: 'Перепад температур', value: '500 К' }] } },
  // Волна 22, подпартия 22A1. Значения выведены независимой моделью Phase 22P
  // на НЕумолчальных входах; ожидания взяты из неё, а не набраны руками.
  'password-entropy': { query: { length: 16, charset: "alnumsym", rate: 100 }, result: { primary: "104,87 бит", rows: [{ label: "Вариантов пароля", value: "3,716·10^31" }, { label: "Средний перебор", value: "1,858·10^20 с" }, { label: "В годах", value: "5,887·10^12" }] } },
  'paper-quantity': { query: { format: "a3", grammage: 160, sheets: 250 }, result: { primary: "4,99 кг", rows: [{ label: "Масса одного листа", value: "19,958 г" }, { label: "Площадь листа", value: "0,1247 м²" }, { label: "Размер листа", value: "297×420 мм" }] } },
  'beam-deflection': { query: { scheme: "point", load: 8, span: 5, e: 210, inertia: 3000 }, result: { primary: "3,307 мм", rows: [{ label: "Относительный прогиб", value: "1/1 512" }, { label: "Жёсткость EI", value: "6 300 000 Н·м²" }, { label: "Предел 1/250", value: "20 мм" }] } },
  'cycle-time': { query: { availableMinutes: 900, demand: 300, actualCycle: 2.8 }, result: { primary: "3 мин/шт", rows: [{ label: "Единиц в час", value: "20" }, { label: "Загрузка такта", value: "93,3333 %" }, { label: "Возможный выпуск за смену", value: "321,43 шт" }] } },
  'air-exchange': { query: { area: 45, height: 3.2, ach: 6 }, result: { primary: "864 м³/ч", rows: [{ label: "Объём помещения", value: "144 м³" }, { label: "В литрах в секунду", value: "240 л/с" }, { label: "Смен воздуха в сутки", value: "144" }] } },
  'headphone-power': { query: { sensitivity: 96, impedance: 250, power: 50 }, result: { primary: "112,99 дБ", rows: [{ label: "Прибавка от мощности", value: "16,99 дБ" }, { label: "Напряжение на выходе", value: "3,536 В" }, { label: "Ток", value: "14,142 мА" }] } },
  // Волна 22, подпартия 22A2.
  'sample-size': { query: { confidence: "99", margin: 2.5, proportion: 40, population: 50000 }, result: { primary: "2 425 чел", rows: [{ label: "Без поправки на совокупность", value: "2 548 чел" }, { label: "Критическое значение z", value: "2,576" }, { label: "Доля от совокупности", value: "4,85 %" }] } },
  'coulomb': { query: { q1: 3, q2: 7, r: 4 }, result: { primary: "0,000118 Н", rows: [{ label: "Характер", value: "отталкивание" }, { label: "Напряжённость поля первого заряда", value: "16 851,66 В/м" }, { label: "Потенциальная энергия", value: "4,718·10^-6 Дж" }] } },
  'wheel-offset': { query: { width: 8.5, offset: -5, newOffset: 30 }, result: { primary: "115,65 мм", rows: [{ label: "Ширина диска", value: "215,9 мм" }, { label: "Смещение колеса", value: "35 мм" }, { label: "Куда сместится", value: "внутрь" }] } },
  'compression-ratio': { query: { displacement: 600, chamber: 52 }, result: { primary: "12,538", rows: [{ label: "Полный объём цилиндра", value: "652 см³" }, { label: "Объём камеры сгорания", value: "52 см³" }, { label: "Записью", value: "12,538:1" }] } },
  'pipe-flow': { query: { flow: 25, diameter: 80 }, result: { primary: "1,382 м/с", rows: [{ label: "Площадь сечения", value: "5 026,55 мм²" }, { label: "Расход в литрах в секунду", value: "6,944 л/с" }, { label: "Расход в литрах в минуту", value: "416,67 л/мин" }] } },
  'belt-length': { query: { center: 450, d1: 80, d2: 320 }, result: { primary: "1 560,32 мм", rows: [{ label: "В метрах", value: "1,56 м" }, { label: "Угол обхвата малого шкива", value: "149,07 °" }, { label: "Передаточное отношение", value: "4" }] } },
  // Волна 22, подпартия 22B1.
  'photon-energy': { query: { wavelengthNm: 1064 }, result: { primary: "1,867·10^-19 Дж", rows: [{ label: "В электронвольтах", value: "1,165 эВ" }, { label: "Частота", value: "2,818·10^14 Гц" }, { label: "Волновое число", value: "9 398,5 1/см" }] } },
  'relativity-dilation': { query: { beta: 0.87, properTime: 3600 }, result: { primary: "7 301,47 с", rows: [{ label: "Множитель Лоренца", value: "2,028" }, { label: "Сокращение длины", value: "49,3052 %" }, { label: "Разница во времени", value: "3 701,47 с" }] } },
  'water-heating': { query: { volume: 50, tFrom: 5, tTo: 45, power: 3.5, efficiency: 88 }, result: { primary: "0,7551 ч", rows: [{ label: "Часы и минуты", value: "0 ч 45 мин" }, { label: "Энергия", value: "2,326 кВт·ч" }, { label: "Перепад температур", value: "40 К" }] } },
  'air-density': { query: { t: 30, pressure: 980, humidity: 70 }, result: { primary: "1,113 кг/м³", rows: [{ label: "Плотность сухого воздуха", value: "1,126 кг/м³" }, { label: "Давление водяного пара", value: "29,698 гПа" }, { label: "Отклонение от 1,225", value: "-9,1219 %" }] } },
  'pendulum': { query: { length: 2.5, g: 1.62 }, result: { primary: "7,805 с", rows: [{ label: "Частота", value: "0,1281 Гц" }, { label: "Колебаний в минуту", value: "7,687" }, { label: "Длина для периода 1 с", value: "0,041 м" }] } },
  'abv-alcohol': { query: { og: 1.062, fg: 1.008, factor: 131.25 }, result: { primary: "7,0875 %", rows: [{ label: "Степень сбраживания", value: "87,0968 %" }, { label: "Падение плотности", value: "0,054" }, { label: "Начальная плотность", value: "1,062" }] } },
  // Волна 21, подпартия 21B2.
  //   брус 300 кг объёмом 0,3 м³ в дизтопливе (840 кг/м³): вытесняет 252 кг — тонет
  'buoyancy': { query: { volume: 0.3, rhoFluid: 840, mass: 300 }, result: { primary: '2 471,28 Н', rows: [{ label: 'Вес тела', value: '2 941,99 Н' }, { label: 'Равнодействующая', value: '-470,72 Н' }, { label: 'Вытесненная масса', value: '252 кг' }, { label: 'Поведение в жидкости', value: 'тонет' }] } },
  //   шесть цилиндров 84×90 мм: почти ровно три литра
  'engine-displacement': { query: { bore: 84, stroke: 90, cylinders: 6 }, result: { primary: '2 992,56 см³', rows: [{ label: 'Объём одного цилиндра', value: '498,76 см³' }, { label: 'В литрах', value: '2,993 л' }, { label: 'Отношение хода к диаметру', value: '1,071' }] } },
  //   2,5 л при 1:40 — доля масла считается от смеси, поэтому 2,44 %, а не 2,5 %
  'fuel-oil-mix': { query: { fuel: 2.5, ratio: 40 }, result: { primary: '62,5 мл', rows: [{ label: 'Объём смеси', value: '2,563 л' }, { label: 'Доля масла', value: '2,439 %' }, { label: 'Соотношение', value: '1:40' }] } },
  //   45°: скатывающая и нормальная равны, трения 0,35 не хватает — груз едет
  'inclined-plane': { query: { m: 80, angle: 45, mu: 0.35 }, result: { primary: '554,75 Н', rows: [{ label: 'Сила нормального давления', value: '554,75 Н' }, { label: 'Сила трения', value: '194,16 Н' }, { label: 'Равнодействующая', value: '360,59 Н' }, { label: 'Ускорение', value: '4,507 м/с²' }] } },
  //   470 мкГн с 22 нФ — середина средневолнового диапазона
  'lc-resonance': { query: { l: 470, c: 22 }, result: { primary: '49 494,83 Гц', rows: [{ label: 'В килогерцах', value: '49,495 кГц' }, { label: 'Период', value: '2,020·10^-5 с' }, { label: 'Волновое сопротивление', value: '146,16 Ом' }] } },
  //   62×45×28 против нормы ручной клади 115 см: перебор на 20 см
  'luggage-linear': { query: { l: 62, w: 45, h: 28, limit: 115 }, result: { primary: '135 см', rows: [{ label: 'Запас до предела', value: '-20 см' }, { label: 'В дюймах', value: '53,15 дюйма' }, { label: 'Объём коробки', value: '78,12 л' }, { label: 'Норма', value: 'превышена' }] } },
  //   угол правильного пятиугольника 108°: рез 54°, а на пиле 36° — числа расходятся
  'miter-angle': { query: { corner: 108 }, result: { primary: '54 °', rows: [{ label: 'Угол на пиле от 90°', value: '36 °' }, { label: 'Угол стыка', value: '108 °' }, { label: 'Сумма двух резов', value: '108 °' }] } },
  // Волна 20B, партия 2. Те же правила: значения выведены независимой моделью,
  // решаемое поле в набор не входит.
  //   25 °C при 45 % -> γ = 0,84479, точка росы 12,229, разрыв 12,771
  'dew-point': { query: { t: 25, rh: 45 }, result: { primary: '12,229 °C', rows: [{ label: 'Разрыв с температурой', value: '12,771 °C' }, { label: 'Относительная влажность', value: '45 %' }, { label: 'Точка росы в градусах Фаренгейта', value: '54,012 °F' }] } },
  //   −5 °C при 35 км/ч -> −13,571, вклад ветра −8,571
  'wind-chill': { query: { t: -5, v: 35 }, result: { primary: '-13,571 °C', rows: [{ label: 'Разница с термометром', value: '-8,571 °C' }, { label: 'Скорость ветра', value: '35 км/ч' }, { label: 'Ощущаемая в градусах Фаренгейта', value: '7,572 °F' }] } },
  //   20 кВА при cosφ 0,9 -> 18 кВт, реактив √(400 − 324) = 8,718 квар
  'kva-kw': { query: { mode: 'kw', kva: 20, pf: 0.9 }, result: { primary: '18 кВт', rows: [{ label: 'Реактивная мощность', value: '8,718 квар' }, { label: 'Полная мощность', value: '20 кВА' }, { label: 'Коэффициент мощности', value: '0,9' }] } },
  //   4,7 кОм и 22 нФ -> τ = 103,4 мкс, срез 1 539,22 Гц
  'rc-filter': { query: { r: 4700, c: 22 }, result: { primary: '1 539,22 Гц', rows: [{ label: 'Постоянная времени', value: '0,000103 с' }, { label: 'Сопротивление', value: '4 700 Ом' }, { label: 'Ёмкость', value: '22 нФ' }] } },
  //   9 В на 2,2 к и 3,3 к -> ровно 60 % входного, 5,4 В при 1,636 мА
  'voltage-divider': { query: { vin: 9, r1: 2200, r2: 3300 }, result: { primary: '5,4 В', rows: [{ label: 'Доля от входного', value: '60 %' }, { label: 'Ток через делитель', value: '1,636 мА' }, { label: 'Мощность нижнего плеча', value: '8,836 мВт' }] } },
  //   алюминий E = 70 000: 25 кН на 200 мм² -> 125 МПа, ε = 0,0017857, 4,464 мм
  'stress-strain': { query: { mode: 'elongation', force: 25000, area: 200, length: 2500, e: 70000 }, result: { primary: '4,464 мм', rows: [{ label: 'Напряжение', value: '125 МПа' }, { label: 'Относительная деформация', value: '0,001786' }, { label: 'Модуль Юнга', value: '70 000 МПа' }] } },
};

const sourceIds = new Set(calculators.map((calculator) => calculator.id));
const unknownScenarioIds = Object.keys(stateScenarios).filter((id) => !sourceIds.has(id));
if (unknownScenarioIds.length > 0) {
  throw new Error(`State scenarios reference unknown calculators: ${unknownScenarioIds.join(', ')}`);
}

const calculatorCases = calculators.map((sourceCalculator) => {
  const calculator = getCalculatorById(sourceCalculator.id, 'ru');
  const scenario = stateScenarios[sourceCalculator.id];
  if (!calculator) throw new Error(`No RU route for ${sourceCalculator.id}`);
  if (!scenario) throw new Error(`No state scenario for ${sourceCalculator.id}`);
  return { calculator, scenario };
});

// Пин на число заменён структурным условием: каждый калькулятор источника
// получил сценарий, и лишних сценариев нет. Это защищает от пропуска
// калькулятора, но не требует благословлять каждое новое значение.
if (calculatorCases.length !== calculators.length) {
  throw new Error(
    `Сценарии покрывают ${calculatorCases.length} калькуляторов из ${calculators.length}`,
  );
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function resultRowValue(page: Page, label: string): Locator {
  const labelCell = page
    .getByTestId('calc-result')
    .locator('dt')
    .filter({ hasText: new RegExp(`^${escapeRegExp(label)}$`, 'i') });
  return labelCell.locator('..').locator('dd');
}

function queryString(query: Record<string, QueryValue>): string {
  const params = new URLSearchParams();
  for (const [name, value] of Object.entries(query)) params.set(name, String(value));
  return params.toString();
}

async function expectHealthyResult(page: Page): Promise<void> {
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('calc-result')).not.toContainText(INVALID_RESULT_TOKENS);
}

async function expectScenarioResult(page: Page, scenario: StateScenario): Promise<void> {
  await expectHealthyResult(page);
  if (scenario.result.primary) {
    await expect(page.getByTestId('calc-result-primary')).toHaveText(scenario.result.primary);
  }
  for (const row of scenario.result.rows ?? []) {
    const value = resultRowValue(page, row.label);
    await expect(value).toHaveCount(1);
    if (row.value !== undefined) await expect(value).toHaveText(row.value);
    if (row.contains !== undefined) await expect(value).toContainText(row.contains);
  }
}

async function expectScenarioResultChanged(page: Page, scenario: StateScenario): Promise<void> {
  if (scenario.result.primary) {
    await expect(page.getByTestId('calc-result-primary')).not.toHaveText(scenario.result.primary);
    return;
  }

  const marker = scenario.result.rows?.[0];
  if (!marker) throw new Error('Every state scenario needs a stable result marker');
  const value = resultRowValue(page, marker.label);
  if (marker.value !== undefined) await expect(value).not.toHaveText(marker.value);
  if (marker.contains !== undefined) await expect(value).not.toContainText(marker.contains);
}

async function localIsoDate(page: Page, offsetDays = 0): Promise<string> {
  return page.evaluate((offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }, offsetDays);
}

function staticDefaultValue(field: Field): string | number | boolean {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'toggle') return field.options?.[0]?.value ?? false;
  if (field.type === 'checkbox') return false;
  if (field.type === 'number') return 0;
  return '';
}

function isVisibleAtDefaults(field: Field, fields: Field[]): boolean {
  if (!field.showIf) return true;
  const controller = fields.find((candidate) => candidate.name === field.showIf?.field);
  return Boolean(controller && staticDefaultValue(controller) === field.showIf.equals);
}

async function browserDefaultValue(page: Page, field: Field): Promise<string | number | boolean> {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'date') {
    if (field.name === 'startDate' || field.name === 'operationDate') return localIsoDate(page);
    if (field.name === 'endDate') return localIsoDate(page, 30);
  }
  return staticDefaultValue(field);
}

async function expectDefaultFields(
  page: Page,
  calculator: CalculatorDef,
  preservedExcludedDraft?: string,
): Promise<void> {
  for (const field of calculator.fields) {
    const control = page.getByTestId(`field-${field.name}`);
    if (!isVisibleAtDefaults(field, calculator.fields)) {
      await expect(control).toHaveCount(0);
      continue;
    }

    const expected = await browserDefaultValue(page, field);
    if (field.name === 'excludedDates') {
      await expect(page.getByTestId('excluded-date-chip')).toHaveCount(0);
      await expect(control).toHaveValue(preservedExcludedDraft ?? '');
    } else if (field.type === 'toggle') {
      await expect(control).toBeVisible();
      await expect(page.getByTestId(`field-${field.name}-opt-${String(expected)}`))
        .toHaveAttribute('aria-pressed', 'true');
    } else if (field.type === 'checkbox') {
      if (expected) await expect(control).toBeChecked();
      else await expect(control).not.toBeChecked();
    } else {
      await expect(control).toHaveValue(String(expected));
    }
  }
}

async function expectQueryFields(
  page: Page,
  calculator: CalculatorDef,
  query: Record<string, QueryValue>,
): Promise<void> {
  for (const [name, expected] of Object.entries(query)) {
    const field = calculator.fields.find((candidate) => candidate.name === name);
    if (!field) throw new Error(`Unknown field ${calculator.id}.${name}`);

    const control = page.getByTestId(`field-${name}`);
    if (name === 'excludedDates') {
      const dates = String(expected).split(/[,;\n]+/).map((value) => value.trim()).filter(Boolean);
      await expect(page.getByTestId('excluded-date-chip')).toHaveText(dates);
      await expect(control).toHaveValue('');
    } else if (field.type === 'toggle') {
      await expect(control).toBeVisible();
      await expect(page.getByTestId(`field-${name}-opt-${String(expected)}`))
        .toHaveAttribute('aria-pressed', 'true');
    } else if (field.type === 'checkbox') {
      if (expected) await expect(control).toBeChecked();
      else await expect(control).not.toBeChecked();
    } else {
      await expect(control).toBeVisible();
      await expect(control).toHaveValue(String(expected));
    }
  }
}

test.describe('RESET contract from the calculator registry', () => {
  for (const { calculator, scenario } of calculatorCases) {
    test(`reset restores defaults for ${calculator.id}`, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.goto(`${calculator.fullPath}?${queryString(scenario.query)}`);

      await expectQueryFields(page, calculator, scenario.query);
      await expectScenarioResult(page, scenario);

      let preservedExcludedDraft: string | undefined;
      if (calculator.id === 'working-days-calculator') {
        preservedExcludedDraft = '2026-01-08';
        await page.getByTestId('field-excludedDates').fill(preservedExcludedDraft);
      }

      await page.getByTestId('calc-reset-btn').click();

      await expectDefaultFields(page, calculator, preservedExcludedDraft);
      await expectScenarioResultChanged(page, scenario);
      await expectHealthyResult(page);
      await expect(page).not.toHaveURL(/\?/);
      expect(new URL(page.url()).pathname).toBe(calculator.fullPath);
      expect(pageErrors).toEqual([]);
    });
  }
});

test.describe('QUERY ROUND-TRIP contract from the calculator registry', () => {
  for (const { calculator, scenario } of calculatorCases) {
    test(`query survives reload for ${calculator.id}`, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.goto(`${calculator.fullPath}?${queryString(scenario.query)}`);

      await expectQueryFields(page, calculator, scenario.query);
      await expectScenarioResult(page, scenario);

      await page.reload();

      await expectQueryFields(page, calculator, scenario.query);
      await expectScenarioResult(page, scenario);
      const restoredUrl = new URL(page.url());
      for (const [name, expected] of Object.entries(scenario.query)) {
        expect(restoredUrl.searchParams.get(name)).toBe(String(expected));
      }
      expect(pageErrors).toEqual([]);
    });
  }
});

type MalformedCase = {
  name: string;
  calculatorId: string;
  query: Record<string, QueryValue>;
  covers: Array<FieldType | 'conditional'>;
  assertImpossibleState: (page: Page) => Promise<void>;
};

const malformedCases: MalformedCase[] = [
  {
    name: 'non-number falls back to the number default',
    calculatorId: 'deposit-calculator',
    query: { amount: 'not-a-number' },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-amount')).toHaveValue('100000');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('112 683 ₽');
    },
  },
  {
    name: 'negative number is blocked before calculation',
    calculatorId: 'deposit-calculator',
    query: { rate: -1 },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-rate')).toHaveValue('-1');
      await expect(page.getByTestId('field-error-rate')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'number below min is blocked before calculation',
    calculatorId: 'credit-calculator',
    query: { amount: 999 },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-amount')).toHaveValue('999');
      await expect(page.getByTestId('field-error-amount')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'number above max is blocked before calculation',
    calculatorId: 'one-rep-max-calculator',
    query: { reps: 13 },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-reps')).toHaveValue('13');
      await expect(page.getByTestId('field-error-reps')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'absurdly large number is blocked before calculation',
    calculatorId: 'calorie-calculator',
    query: { proteinPct: '999999999999999999999999999999999' },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-error-proteinPct')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'NaN string falls back to the number default',
    calculatorId: 'compound-interest',
    query: { rate: 'NaN' },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-rate')).toHaveValue('10');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('1 294 929 ₽');
    },
  },
  {
    name: 'unknown select option falls back to the default option',
    calculatorId: 'percent-calculator',
    query: { mode: 'missing-option' },
    covers: ['select'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-mode')).toHaveValue('of');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('30,00');
    },
  },
  {
    name: 'unknown toggle option falls back to the default option',
    calculatorId: 'credit-calculator',
    query: { type: 'impossible-toggle' },
    covers: ['toggle'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-type-opt-annuity'))
        .toHaveAttribute('aria-pressed', 'true');
      await expectHealthyResult(page);
    },
  },
  {
    name: 'impossible calendar date never reaches the result',
    calculatorId: 'date-shift-calculator',
    query: { startDate: '2026-02-31' },
    covers: ['date'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-startDate')).toHaveValue('');
      await expect(page.getByTestId('field-error-startDate')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'stale hidden showIf value cannot affect the visible mode',
    calculatorId: 'discount-calculator',
    query: {
      mode: 'byPercent',
      discountPct: 20,
      discountAmt: '999999999999999999999999999999999',
    },
    covers: ['conditional'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-discountAmt')).toHaveCount(0);
      await expect(page.getByTestId('field-discountPct')).toHaveValue('20');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('4 000 ₽');
    },
  },
  {
    name: 'invalid excluded date is contained by textarea validation',
    calculatorId: 'working-days-calculator',
    query: {
      startDate: '2026-02-01',
      endDate: '2026-02-28',
      excludedDates: 'not-a-date',
    },
    covers: ['textarea'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('excluded-date-chip')).toHaveText(['not-a-date']);
      await expect(page.getByTestId('field-error-excludedDates')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
];

const registryFieldTypes = new Set(calculators.flatMap((calculator) => (
  calculator.fields.map((field) => field.type)
)));
const malformedCoveredTypes = new Set(malformedCases.flatMap((scenario) => scenario.covers));
const uncoveredFieldTypes = [...registryFieldTypes].filter((type) => !malformedCoveredTypes.has(type));
if (uncoveredFieldTypes.length > 0) {
  throw new Error(`Malformed-query coverage is missing field types: ${uncoveredFieldTypes.join(', ')}`);
}
if (!malformedCoveredTypes.has('conditional')) {
  throw new Error('Malformed-query coverage is missing a showIf conditional case');
}

test.describe('MALFORMED QUERY contract by field class', () => {
  for (const malformed of malformedCases) {
    test(malformed.name, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      const calculator = getCalculatorById(malformed.calculatorId, 'ru');
      if (!calculator) throw new Error(`No RU route for ${malformed.calculatorId}`);

      await page.goto(`${calculator.fullPath}?${queryString(malformed.query)}`);
      await expect(page.getByTestId('calc-form')).toBeVisible();
      await malformed.assertImpossibleState(page);

      // Проверяем только область формы/результата: дефисы в меню и подвале не
      // относятся к отрицательным значениям калькулятора.
      await expect(page.getByTestId('calc-result-wrap')).not.toContainText(INVALID_RESULT_TOKENS);
      await expect(page.getByTestId('calc-form')).not.toContainText(INVALID_RESULT_TOKENS);
      expect(pageErrors).toEqual([]);
    });
  }
});
