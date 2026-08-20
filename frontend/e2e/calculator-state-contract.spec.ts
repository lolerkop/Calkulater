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
  'bakers-percentage': { query: { flour: 900, ingredients: 'water 72\nsalt 2\nyeast 0.8' }, result: { primary: '1 573,2 г', rows: [{ label: 'Гидратация', value: '72,00%' }, { label: 'Мука', value: '900 г' }] } },
  'color-convert': { query: { hex: '#F0A' }, result: { primary: 'rgb(255, 0, 170)', rows: [{ label: 'HSL', value: 'hsl(320, 100,00%, 50,00%)' }, { label: 'HEX', value: '#FF00AA' }, { label: 'Яркость', value: '50,00' }] } },
  'dca': { query: { monthly: 5000, months: 24, priceGrowthPct: -1, startPrice: 200 }, result: { primary: '107 160,93 ₽', rows: [{ label: 'Вложено всего', value: '120 000,00 ₽' }, { label: 'Куплено единиц', value: '675,14' }, { label: 'Средняя цена', value: '177,74 ₽' }] } },
  'fibonacci': { query: { n: 30 }, result: { primary: '514 229', rows: [{ label: 'Сумма ряда', value: '1 346 268' }, { label: 'Отношение к предыдущему', value: '1,618' }] } },
  'gcd-lcm': { query: { numbers: '15 25 35' }, result: { primary: '5', rows: [{ label: 'НОК', value: '525' }, { label: 'Чисел', value: '3' }, { label: 'Взаимно простые', value: 'нет' }] } },
  'power-root': { query: { mode: 'root', base: 27, exponent: 3 }, result: { primary: '3', rows: [{ label: 'Основание', value: '27' }, { label: 'Показатель', value: '3' }] } },
  'raid': { query: { level: '6', disks: 8, sizeTb: 12 }, result: { primary: '72 ТБ', rows: [{ label: 'Сырая ёмкость', value: '96 ТБ' }, { label: 'Допустимо отказов', value: '2' }, { label: 'Эффективность', value: '75,00%' }] } },
  'ratio': { query: { parts: '12 18', total: 4500 }, result: { primary: '2:3', rows: [{ label: 'Сумма частей', value: '30' }, { label: 'Доля первой части', value: '40,00%' }, { label: 'Разбиение суммы', value: '1 800 · 2 700' }] } },
  'recipe-cost': { query: { ingredients: 'flour 1.2 60\nbutter 0.4 750\nsugar 0.25 90', servings: 6 }, result: { primary: '65,75 ₽', rows: [{ label: 'Стоимость всего', value: '394,50 ₽' }, { label: 'Ингредиентов', value: '3' }, { label: 'Самый дорогой', value: 'butter' }] } },
  'recipe-scale': { query: { ingredients: 'flour 800\nwater 520\nsalt 16', fromServings: 6, toServings: 10 }, result: { primary: '1,6667', rows: [{ label: 'Ингредиентов', value: '3' }, { label: 'Было всего', value: '1 336' }, { label: 'Стало всего', value: '2 226,67' }] } },
  'resistor-network': { query: { resistances: '470 680 1000', mode: 'parallel' }, result: { primary: '217,47 Ом', rows: [{ label: 'Резисторов', value: '3' }, { label: 'Наименьший', value: '470 Ом' }, { label: 'Наибольший', value: '1 000 Ом' }] } },
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
