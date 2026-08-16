import { describe, it, expect } from 'vitest';
import { calcScreed } from '../src/lib/calculators/screed';

const norm = (s: string) => s.replace(/[\s  ]+/g, ' ').trim();
const row = (r: ReturnType<typeof calcScreed>, label: string) =>
  norm(r.secondary.find((s) => s.label === label)?.value ?? '');

describe('screed: объём по размерам комнаты', () => {
  it('4 × 3 м при слое 5 см даёт 0,600 м³', () => {
    // 12 м² × 0,05 м = 0,6 м³
    const r = calcScreed({ mode: 'room', length: 4, width: 3, thickness: 5, reserve: 0 });
    expect(norm(r.primary.value)).toBe('0,600 м³');
    expect(row(r, 'Площадь')).toBe('12,00 м²');
    expect(row(r, 'Толщина слоя')).toBe('5,0 см');
  });

  it('режим «по площади» игнорирует длину и ширину', () => {
    const r = calcScreed({ mode: 'area', length: 99, width: 99, manualArea: 20, thickness: 4, reserve: 0 });
    expect(norm(r.primary.value)).toBe('0,800 м³');
    expect(row(r, 'Площадь')).toBe('20,00 м²');
  });
});

describe('screed: сухая смесь и мешки', () => {
  it('12 м², 5 см, расход 18 кг/м²/см = 1080 кг и 44 мешка по 25 кг', () => {
    // 12 × 5 × 18 = 1080 кг; 1080 / 25 = 43,2 -> 44 мешка
    const r = calcScreed({ mode: 'room', length: 4, width: 3, thickness: 5, mixConsumption: 18, bagWeight: 25, reserve: 0 });
    expect(row(r, 'Сухая смесь')).toBe('1 080 кг');
    expect(row(r, 'Мешков')).toBe('44 шт.');
  });

  it('мешки округляются вверх даже при минимальном остатке', () => {
    // 10 м² × 1 см × 20 кг = 200 кг ровно -> 8 мешков по 25 кг
    const exact = calcScreed({ mode: 'area', manualArea: 10, thickness: 1, mixConsumption: 20, bagWeight: 25, reserve: 0 });
    expect(row(exact, 'Мешков')).toBe('8 шт.');
    // 10,05 м² -> 201 кг -> 9 мешков
    const over = calcScreed({ mode: 'area', manualArea: 10.05, thickness: 1, mixConsumption: 20, bagWeight: 25, reserve: 0 });
    expect(row(over, 'Мешков')).toBe('9 шт.');
  });

  it('стоимость показывается только когда указана цена мешка', () => {
    const without = calcScreed({ mode: 'area', manualArea: 10, thickness: 1, mixConsumption: 20, bagWeight: 25 });
    expect(without.secondary.some((s) => s.label === 'Стоимость смеси')).toBe(false);
    const with_ = calcScreed({ mode: 'area', manualArea: 10, thickness: 1, mixConsumption: 20, bagWeight: 25, bagPrice: 300 });
    expect(row(with_, 'Стоимость смеси')).toBe('2 400,00 ₽');
  });
});

describe('screed: запас', () => {
  it('запас 10% увеличивает и объём, и массу смеси', () => {
    const base = calcScreed({ mode: 'area', manualArea: 10, thickness: 5, mixConsumption: 18, bagWeight: 25, reserve: 0 });
    const withReserve = calcScreed({ mode: 'area', manualArea: 10, thickness: 5, mixConsumption: 18, bagWeight: 25, reserve: 10 });
    expect(norm(base.primary.value)).toBe('0,500 м³');
    expect(norm(withReserve.primary.value)).toBe('0,550 м³');
    // 10 × 5 × 18 = 900 кг; +10% = 990 кг
    expect(row(base, 'Сухая смесь')).toBe('900 кг');
    expect(row(withReserve, 'Сухая смесь')).toBe('990 кг');
  });

  it('отрицательный запас не уменьшает результат', () => {
    const r = calcScreed({ mode: 'area', manualArea: 10, thickness: 5, reserve: -50 });
    expect(norm(r.primary.value)).toBe('0,500 м³');
  });
});

describe('screed: граничные значения и ошибки', () => {
  it('нулевая площадь возвращает прочерк', () => {
    const r = calcScreed({ mode: 'area', manualArea: 0, thickness: 5 });
    expect(r.primary.value).toBe('—');
    expect(row(r, 'Проверьте данные')).toContain('размеры и толщину');
  });

  it('нулевая толщина возвращает прочерк', () => {
    expect(calcScreed({ mode: 'area', manualArea: 10, thickness: 0 }).primary.value).toBe('—');
  });

  it('отрицательные размеры возвращают прочерк', () => {
    expect(calcScreed({ mode: 'room', length: -4, width: 3, thickness: 5 }).primary.value).toBe('—');
  });

  it('нулевой вес мешка обрабатывается отдельной ошибкой', () => {
    const r = calcScreed({ mode: 'area', manualArea: 10, thickness: 5, bagWeight: 0 });
    expect(r.primary.value).toBe('—');
    expect(row(r, 'Ошибка')).toContain('Вес мешка');
  });

  it('очень тонкий слой считается без потери точности', () => {
    // 100 м² × 0,003 м = 0,3 м³
    const r = calcScreed({ mode: 'area', manualArea: 100, thickness: 0.3, reserve: 0 });
    expect(norm(r.primary.value)).toBe('0,300 м³');
  });
});

describe('screed: двоичная погрешность не создаёт лишний мешок', () => {
  it('масса ровно на границе мешка не округляется вверх', () => {
    // 10 × 5 × 18 × 1.1 = 990 точно, но в double это 990.0000000000001
    const r = calcScreed({ mode: 'area', manualArea: 10, thickness: 5, mixConsumption: 18, bagWeight: 25, reserve: 10 });
    expect(row(r, 'Сухая смесь')).toBe('990 кг');
    // 990 / 25 = 39,6 -> 40 мешков
    expect(row(r, 'Мешков')).toBe('40 шт.');
  });

  it('целое число мешков не превращается в +1', () => {
    // 20 м² × 2 см × 25 кг = 1000 кг ровно = 40 мешков по 25 кг
    const r = calcScreed({ mode: 'area', manualArea: 20, thickness: 2, mixConsumption: 25, bagWeight: 25, reserve: 0 });
    expect(row(r, 'Сухая смесь')).toBe('1 000 кг');
    expect(row(r, 'Мешков')).toBe('40 шт.');
  });
});
