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
