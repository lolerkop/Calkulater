import {describe,expect,it} from 'vitest';
import {definition as sealant} from '../src/calculators/sealant-volume/definition';
import {definition as skirting} from '../src/calculators/skirting/definition';
import {definition as tank} from '../src/calculators/tank-volume/definition';
import amendment from '../reports/originality-building-wave-16-disclaimer-amendment.json';
// Regression for three actual empty RU editorial limitations. The already
// declared models and established reference payloads retain their exact values.
describe('Building16 RU limitations added after coherent publication check',()=>{
 for(const tool of [sealant,skirting,tank])it(tool.id+': subject limitation is visible copy and keeps numerical contract',()=>{
  const change=amendment.ownedAmendment.find(c=>c.id===tool.id)!;
  expect(change.before).toBe('');expect(tool.presentation.disclaimer).toBe(change.after);
  if(tool.id==='sealant-volume'){
   expect(tool.presentation.disclaimer).toContain('постоянного прямоугольного сечения');
   expect(tool.presentation.disclaimer).toContain('запас не гарантирует');
  }else if(tool.id==='skirting'){
   expect(tool.presentation.disclaimer).toContain('Раскрой, углы и соединители не оптимизируются');
   expect(tool.presentation.disclaimer).toContain('целых планок');
  }else{
   expect(tool.presentation.disclaimer).toContain('внутренние размеры');
   expect(tool.presentation.disclaimer).toContain('для капсулы налив оценён линейно');
  }
  for(const ref of tool.referenceCases!){
   const result=tool.compute(ref.inputs);expect(result.primary.value).toBe(ref.expectPrimary);
   for(const row of ref.expectSecondary??[])expect(result.secondary).toContainEqual(row);
  }
 });
});
