import { describe, expect, it } from 'vitest';
import { contractContent } from '../src/calculators/profit/contractContent';
import { compute } from '../src/calculators/profit/compute';
describe('independent profit copy amendment preserves signed comparisons',()=>{
  for(const locale of ['ru','en','uk','de','es']as const)it(`${locale}: loss−50percent markup isgreater than−100percent margin`,()=>{
    const text=contractContent[locale].faq[0].a;expect(text).toContain('100');expect(text).toContain('200');expect(text).toContain('−100%');expect(text).toContain('−50%');
    expect(text).not.toMatch(/comparison changes|comparison revers|ändert sich der Vergleich|cambia la comparación|порівняння зміню|сравнение меняется/);
    const result=compute({revenue:100,cost:200});expect(result.primary.value).toBe('-100,00 ₽');expect(result.secondary.find(r=>r.label==='Маржа')!.value).toBe('-100,00%');expect(result.secondary.find(r=>r.label==='Наценка')!.value).toBe('-50,00%');expect(-50).toBeGreaterThan(-100);
  });
  for(const locale of ['ru','en','de','es']as const)it(`${locale}:40percentbases give140and166.67, ratio25/21`,()=>{
    const text=contractContent[locale].longDescription;expect(text).toContain('140');expect(text).toMatch(/166[,.]67/);expect(text).toContain('25/21');expect(text).not.toMatch(/полтора раза|one and a half times|um die Hälfte auseinander|una vez y media/);
    // Independent literal algebra:price140 atmarkup40%, price500/3 atmargin40%.
    expect(100*1.4).toBe(140);expect((100/.6)/140).toBeCloseTo(25/21,14);
  });
});
