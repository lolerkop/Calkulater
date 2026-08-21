import { describe, expect, it } from 'vitest';
import {
  JS_OWN_MEDIAN_GZIP,
  JS_OWN_P95_GZIP,
  JS_PER_CALCULATOR_GZIP,
  JS_SHARED_GZIP_CEILING,
  JS_UBIQUITOUS_BYTES_PER_CHUNK,
  jsScaleBudget,
  normalizedFragments,
  percentile,
  ubiquitousMass,
} from '../scripts/js-scale.mjs';

// Гейт масштаба выпуска JS.
//
// Проверка ловит не размер, а ВЫРОЖДЕНИЕ проверки — ровно то, что случилось с
// прежним абсолютным потолком в 400 КиБ. Он был выбран при десяти чанках
// рантайма, а архитектура намеренно даёт каждому калькулятору собственный
// чанк: суммарный выпуск растёт линейно с продуктом (1266 Б на калькулятор,
// R² = 0,99933 по девяти историческим сборкам от 80 до 250). На 250-м
// калькуляторе потолок сработал на честном росте — прирост 225 → 250 на
// 100,0 % пришёлся на новые изолированные чанки, а все общие чанки остались
// побайтово теми же.
//
// Здесь закреплено, что новые инварианты этим свойством не обладают:
// один новый калькулятор с одним изолированным чанком не может провалить
// ни один из них, а встраивание общего кода в чанки — проваливает.

/** Чанк калькулятора: общий каркас плюс собственная реализация. */
const chunk = (scaffold: string, unique: string) => `${scaffold}${unique}`;
const SCAFFOLD = 'import{j as w}from"./clientI18n.hash.js";import{C}from"./CalculatorIsland.hash.js";';
const unique = (seed: number) => {
  let body = `const calc${seed}=input=>{`;
  for (let i = 0; i < 12; i += 1) body += `const value${seed}x${i}=Number(input.field${seed}${i})*${seed + i}.${i}5;`;
  return `${body}return{primary:{label:"Итог ${seed}",value:String(value${seed}x0)}}};`;
};

describe('наклонный бюджет выпуска JS', () => {
  it('растёт вместе с числом калькуляторов, а не остаётся потолком', () => {
    for (const count of [0, 1, 80, 225, 250, 300, 500, 1000]) {
      expect(jsScaleBudget(count + 1)).toBeGreaterThan(jsScaleBudget(count));
    }
  });

  it('всегда оставляет место измеренной стоимости калькулятора', () => {
    // Измерено: средний собственный чанк 1,20 КиБ, крупнейший за всю
    // историю — 1,94 КиБ. Бюджет обязан вмещать выпуск, целиком собранный
    // из самых тяжёлых калькуляторов проекта.
    const heaviestObservedGzip = 1991;
    for (const count of [225, 250, 300, 1000]) {
      expect(jsScaleBudget(count)).toBeGreaterThan(JS_SHARED_GZIP_CEILING + heaviestObservedGzip * count);
    }
  });

  it('не пропускает перенос стоимости из чанков в общий код', () => {
    // Постоянная часть ограничена отдельно: иначе надбавку можно обойти,
    // сложив всё в общий чанк, который скачивает каждый маршрут.
    expect(jsScaleBudget(0)).toBe(JS_SHARED_GZIP_CEILING);
  });

  it('измеренные постоянные остались теми, из которых выведены пороги', () => {
    expect(JS_SHARED_GZIP_CEILING).toBe(120 * 1024);
    expect(JS_PER_CALCULATOR_GZIP).toBe(2 * 1024);
    expect(JS_OWN_MEDIAN_GZIP).toBe(2 * 1024);
    expect(JS_OWN_P95_GZIP).toBe(3 * 1024);
    expect(JS_UBIQUITOUS_BYTES_PER_CHUNK).toBe(512);
  });
});

describe('вездесущая масса', () => {
  it('считает каркас, который несёт каждый чанк', () => {
    const chunks = [1, 2, 3, 4, 5, 6].map((i) => chunk(SCAFFOLD, unique(i)));
    const { bytes } = ubiquitousMass(chunks);
    expect(bytes).toBeGreaterThan(0);
    expect(bytes).toBeLessThan(SCAFFOLD.length + 40);
  });

  it('не растёт от добавления честных изолированных чанков', () => {
    // Это и есть свойство, которого не было у абсолютного потолка.
    const six = [1, 2, 3, 4, 5, 6].map((i) => chunk(SCAFFOLD, unique(i)));
    const sixty = Array.from({ length: 60 }, (_, i) => chunk(SCAFFOLD, unique(i + 1)));
    expect(ubiquitousMass(sixty).bytes).toBe(ubiquitousMass(six).bytes);
  });

  it('срабатывает, когда общий код встроен в каждый чанк вместо импорта', () => {
    const sharedBody = Array.from({ length: 40 }, (_, i) => `function shared${i}(a,b){return a*${i}+b/${i + 1};}`).join('');
    const clean = Array.from({ length: 20 }, (_, i) => chunk(SCAFFOLD, unique(i + 1)));
    const inlined = clean.map((source) => sharedBody + source);
    expect(ubiquitousMass(clean).bytes).toBeLessThanOrEqual(JS_UBIQUITOUS_BYTES_PER_CHUNK);
    expect(ubiquitousMass(inlined).bytes).toBeGreaterThan(JS_UBIQUITOUS_BYTES_PER_CHUNK);
  });

  it('не считает вездесущим то, что несёт меньшинство чанков', () => {
    const marker = 'const sharedByAFew=(x)=>x*1.23456789+42;';
    const chunks = Array.from({ length: 20 }, (_, i) => chunk(SCAFFOLD, (i < 4 ? marker : '') + unique(i + 1)));
    expect(ubiquitousMass(chunks).fragments.some((f) => f.fragment.includes('1.23456789'))).toBe(false);
  });

  it('на пустом наборе не падает', () => {
    expect(ubiquitousMass([]).bytes).toBe(0);
  });
});

describe('нормализация фрагментов', () => {
  it('снимает произвольные имена минификатора', () => {
    const a = normalizedFragments('const q=(w,e)=>w*e+12345;');
    const b = normalizedFragments('const z=(x,c)=>x*c+12345;');
    expect(a).toEqual(b);
  });

  it('оставляет строковые литералы различимыми', () => {
    const a = normalizedFragments('const q="Литры краски применяются здесь";');
    const b = normalizedFragments('const q="Объём бетона применяется здесь";');
    expect(a).not.toEqual(b);
  });

  it('не режет внутри строки с точкой с запятой', () => {
    expect(normalizedFragments('const q="a;b;c;d;e;f;g;h";').length).toBe(1);
  });
});

describe('процентиль', () => {
  it('берёт медиану и верхний хвост', () => {
    const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(percentile(sorted, 0.5)).toBe(6);
    expect(percentile(sorted, 0.95)).toBe(10);
    expect(percentile([], 0.5)).toBe(0);
  });
});
