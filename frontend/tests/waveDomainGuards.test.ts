import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../src/calculators/manifest.generated';

// Phase 20B — защиты области, добавленные СВЕРХ закреплённых случаев волны.
//
// Три режима волны делят на знаковую величину. Если знаки делимого и делителя
// расходятся, ответ выходит отрицательным — а жёсткости, ёмкости и массы
// отрицательными не бывают. Это не край диапазона существующей величины, а
// несогласованная пара, и отвечать на неё числом нельзя.
//
// Файл намеренно отдельный: закреплённых случаев ровно 125, и ни один из них
// эти пары не проверяет. Здесь у каждой защиты есть и допустимая сторона, и
// недопустимая — иначе защита доказывала бы только то, что она срабатывает,
// но не то, что она срабатывает лишь там, где должна.
const def = (id: string) => {
  const found = v2Definitions.find((d) => d.id === id);
  if (!found) throw new Error(`нет определения ${id}`);
  return found;
};
const run = (id: string, inputs: Record<string, unknown>) =>
  def(id).compute(inputs as never);
const message = (out: ReturnType<typeof run>) =>
  out.secondary.map((row) => row.value).join(' | ');

describe('защиты области волны 20B', () => {
  describe('hooke-law: жёсткость не бывает отрицательной', () => {
    it('допустимо: растяжение — сила и удлинение положительны', () => {
      const out = run('hooke-law', { mode: 'stiffness', k: 0, x: 0.02, f: 10 });
      expect(out.primary.value).toBe('500 Н/м');
      expect(message(out)).toContain('0,1 Дж');
    });

    it('допустимо: сжатие — сила и деформация отрицательны обе', () => {
      const out = run('hooke-law', { mode: 'stiffness', k: 0, x: -0.05, f: -10 });
      expect(out.primary.value).toBe('200 Н/м');
      expect(message(out)).toContain('0,25 Дж');
    });

    it('недопустимо: знаки силы и деформации разошлись', () => {
      const out = run('hooke-law', { mode: 'stiffness', k: 0, x: -0.05, f: 10 });
      expect(out.primary.value).toBe('—');
      expect(message(out)).toBe('Сила и деформация должны быть направлены в одну сторону');
    });

    it('режим удлинения отрицательный ответ сохраняет: это сжатие', () => {
      const out = run('hooke-law', { mode: 'extension', k: 200, x: 0, f: -10 });
      expect(out.primary.value).toBe('-0,05 м');
    });
  });

  describe('capacitor-basics: ёмкость не бывает отрицательной', () => {
    it('допустимо: заряд и напряжение положительны', () => {
      const out = run('capacitor-basics', { mode: 'capacitance', c: 0, v: 12, q: 1200 });
      expect(out.primary.value).toBe('100 мкФ');
    });

    it('допустимо: обкладка заряжена отрицательно — оба знака минус', () => {
      const out = run('capacitor-basics', { mode: 'capacitance', c: 0, v: -12, q: -1200 });
      expect(out.primary.value).toBe('100 мкФ');
      expect(message(out)).toContain('0,0072 Дж');
    });

    it('недопустимо: знаки заряда и напряжения разошлись', () => {
      const out = run('capacitor-basics', { mode: 'capacitance', c: 0, v: -12, q: 1200 });
      expect(out.primary.value).toBe('—');
      expect(message(out)).toBe('Заряд и напряжение должны быть одного знака');
    });

    it('режим напряжения отрицательный ответ сохраняет', () => {
      const out = run('capacitor-basics', { mode: 'voltage', c: 100, v: 0, q: -1200 });
      expect(out.primary.value).toBe('-12 В');
    });
  });

  describe('specific-heat: масса не бывает отрицательной', () => {
    it('допустимо: нагрев — энергия и перепад положительны', () => {
      const out = run('specific-heat', { mode: 'mass', mass: 0, c: 900, dt: 25, q: 100000 });
      expect(out.primary.value).toBe('4,444 кг');
    });

    it('допустимо: охлаждение — оба знака минус', () => {
      const out = run('specific-heat', { mode: 'mass', mass: 0, c: 900, dt: -50, q: -18000 });
      expect(out.primary.value).toBe('0,4 кг');
    });

    it('недопустимо: отведённое тепло при нагреве', () => {
      const out = run('specific-heat', { mode: 'mass', mass: 0, c: 900, dt: 50, q: -18000 });
      expect(out.primary.value).toBe('—');
      expect(message(out)).toBe('Энергия и изменение температуры должны быть одного знака');
    });

    it('режим энергии знаковый ответ сохраняет: охлаждение отдаёт тепло', () => {
      const out = run('specific-heat', { mode: 'energy', mass: 1, c: 900, dt: -20, q: 0 });
      expect(out.primary.value).toBe('-18 000 Дж');
    });

    it('режим перепада знаковый ответ сохраняет', () => {
      const out = run('specific-heat', { mode: 'deltaT', mass: 2, c: 900, dt: 0, q: -18000 });
      expect(out.primary.value).toBe('-10 К');
    });
  });

  it('защиты не тронули ни одного закреплённого случая волны', () => {
    const WAVE = [
      'brew-ratio', 'bulk-material-volume', 'cladding-boards', 'coordinate-convert',
      'credit-card-payoff', 'gas-laws', 'heat-index', 'metal-weight', 'projectile-motion',
      'resistor-color', 'roast-time', 'stairs', 'thermal-conduction', 'hooke-law',
      'capacitor-basics', 'lever-moment', 'specific-heat', 'alcohol-units',
      'baluster-spacing', 'dew-point', 'wind-chill', 'kva-kw', 'rc-filter',
      'voltage-divider', 'stress-strain',
    ];
    let total = 0;
    for (const id of WAVE) {
      const cases = def(id).referenceCases;
      expect(cases, id).toHaveLength(5);
      for (const c of cases) {
        expect(def(id).compute(c.inputs as never).primary.value, `${id}/${c.name}`).toBe(c.expectPrimary);
        total += 1;
      }
    }
    expect(total, 'закреплённых случаев волны').toBe(125);
  });
});
