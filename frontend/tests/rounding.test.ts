import { describe, it, expect } from 'vitest';
import { ceilUnits, floorUnits } from '../src/lib/rounding';
import { calcTile } from '../src/lib/calculators/tile';
import { calcLaminate } from '../src/lib/calculators/laminate';
import { calcPaint } from '../src/calculators/paint-calculator/compute';
import { calcWallpaper } from '../src/lib/calculators/wallpaper';
import { calcScreed } from '../src/lib/calculators/screed';

const int = (value: string) => Number(value.replace(/[^\d]/g, ''));
const row = (r: { secondary: { label: string; value: string }[] }, label: string) =>
  r.secondary.find((s) => s.label === label)?.value ?? '';

describe('rounding: снап двоичного шума', () => {
  it('шум над целым не добавляет единицу', () => {
    expect(ceilUnits(14.000000000000002)).toBe(14);
    expect(ceilUnits(7.000000000000001)).toBe(7);
    expect(ceilUnits(1.0000000000000002)).toBe(1);
    expect(ceilUnits(990.0000000000001 / 25)).toBe(40);
  });

  it('шум под целым не отнимает единицу у floor', () => {
    expect(floorUnits(4.999999999999999)).toBe(5);
    expect(floorUnits(2.9999999999999996)).toBe(3);
  });

  it('настоящий остаток всё ещё округляется вверх', () => {
    expect(ceilUnits(40.0001)).toBe(41);
    expect(ceilUnits(40.000000001)).toBe(41);
    expect(ceilUnits(7.5)).toBe(8);
    expect(ceilUnits(0.0001)).toBe(1);
    expect(ceilUnits(1_000_000.0001)).toBe(1_000_001);
  });

  it('настоящий остаток всё ещё отбрасывается вниз', () => {
    expect(floorUnits(7.5)).toBe(7);
    expect(floorUnits(0.9999)).toBe(0);
    expect(floorUnits(40.9999)).toBe(40);
  });

  it('точные значения не меняются', () => {
    for (const n of [0, 1, 2, 40, 1000, 123456]) {
      expect(ceilUnits(n)).toBe(n);
      expect(floorUnits(n)).toBe(n);
    }
  });

  it('допуск относителен величине, а не абсолютен', () => {
    // на больших значениях абсолютный шум больше, и он тоже снапится
    expect(ceilUnits(1e6 + 1e-9)).toBe(1e6);
    // но остаток того же абсолютного размера на малом значении остаётся остатком
    expect(ceilUnits(1e-9)).toBe(1);
  });

  it('не ломается на нечисловых значениях', () => {
    expect(ceilUnits(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY);
    expect(Number.isNaN(ceilUnits(Number.NaN))).toBe(true);
  });
});

// Детерминированная сетка: без случайных чисел, все входы заданы явно.
const DIMS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8];
const RESERVES = [0, 5, 7, 10, 12, 15, 20];
const PACKS = [1.44, 1.5, 1.8, 2.13, 2.5];
const TILES = [20, 25, 30, 33, 40, 50, 60];

describe('rounding: инварианты количеств на детерминированной сетке', () => {
  it('плитки и упаковки покрывают требуемую площадь и не превышают её на целую единицу', () => {
    let checked = 0;
    for (const length of DIMS) for (const width of DIMS) for (const reserve of RESERVES) {
      for (const tileLength of TILES) {
        const r = calcTile({ mode: 'room', length, width, tileLength, tileWidth: tileLength, packArea: 1.44, reserve, glueConsumption: 5 });
        const tiles = int(r.primary.value);
        const need = (length * width * (1 + reserve / 100)) / ((tileLength / 100) ** 2);
        expect(tiles, `${length}×${width} r=${reserve} t=${tileLength}`).toBeGreaterThanOrEqual(Math.floor(need));
        expect(tiles).toBeLessThan(need + 1);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(3000);
  });

  it('упаковки ламината монотонны по площади и по запасу', () => {
    for (const width of DIMS) for (const packArea of PACKS) {
      let previous = 0;
      for (const length of DIMS) {
        const packs = int(calcLaminate({ length, width, packArea, reserve: 10 }).primary.value);
        expect(packs, `рост площади уменьшил количество: ${length}×${width}`).toBeGreaterThanOrEqual(previous);
        previous = packs;
      }
      const zero = int(calcLaminate({ length: 5, width, packArea, reserve: 0 }).primary.value);
      for (const reserve of RESERVES) {
        const withReserve = int(calcLaminate({ length: 5, width, packArea, reserve }).primary.value);
        expect(withReserve, `запас ${reserve} уменьшил количество`).toBeGreaterThanOrEqual(zero);
      }
    }
  });

  it('банки краски покрывают требуемый объём', () => {
    for (const area of DIMS.concat([12, 20, 30])) for (const consumption of [0.1, 0.15, 0.2, 0.25])
      for (const coats of [1, 2, 3]) for (const canVolume of [0.9, 2.5, 5]) {
        const r = calcPaint({ mode: 'manual', area, consumption, coats, canVolume, reserve: 0 });
        const cans = int(row(r, 'Количество банок').split('×')[0]);
        const liters = area * consumption * coats;
        expect(cans * canVolume, `${area} м² ${consumption} ${coats}сл ${canVolume}л`).toBeGreaterThanOrEqual(liters - 1e-9);
        expect((cans - 1) * canVolume).toBeLessThan(liters);
      }
  });

  it('рулоны обоев не растут при увеличении длины рулона', () => {
    for (const height of [2.25, 2.5, 2.7, 3]) for (const pattern of [0, 10, 25, 32]) {
      let previous = Number.POSITIVE_INFINITY;
      for (const rollLength of [5, 8, 10, 11.5, 12, 15, 20, 25]) {
        const r = calcWallpaper({ length: 3, width: 4, height, rollWidth: 0.53, rollLength, windows: 0, doors: 0, pattern });
        const rolls = int(r.primary.value);
        expect(rolls, `длиннее рулон дал больше рулонов: h=${height} p=${pattern} rl=${rollLength}`).toBeLessThanOrEqual(previous);
        previous = rolls;
      }
    }
  });

  it('мешки стяжки покрывают массу смеси и согласованы со стоимостью', () => {
    for (const manualArea of DIMS.concat([10, 12, 20])) for (const thickness of [1, 2, 3, 5, 7.5])
      for (const mixConsumption of [15, 18, 20, 22]) for (const bagWeight of [20, 25, 40]) {
        const r = calcScreed({ mode: 'area', manualArea, thickness, mixConsumption, bagWeight, reserve: 10, bagPrice: 300 });
        const bags = int(row(r, 'Мешков'));
        const dry = int(row(r, 'Сухая смесь'));
        expect(bags * bagWeight, `${manualArea} ${thickness} ${mixConsumption} ${bagWeight}`).toBeGreaterThanOrEqual(dry);
        expect((bags - 1) * bagWeight).toBeLessThan(dry);
        const cost = Number(row(r, 'Стоимость смеси').replace(/[^\d,]/g, '').replace(',', '.'));
        expect(cost).toBeCloseTo(bags * 300, 2);
      }
  });
});
