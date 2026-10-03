import { describe,expect,it } from 'vitest';
import {compute as combined} from '../src/calculators/gas-laws/compute';
import {compute as ideal} from '../src/calculators/ideal-gas-law/compute';
import {positiveRatio as combinedRatio,readScalar as combinedRead} from '../src/calculators/gas-laws/numeric';
import {positiveRatio as idealRatio,readScalar as idealRead} from '../src/calculators/ideal-gas-law/numeric';
import {gasLawsReferenceCases} from '../src/calculators/gas-laws/referenceCases';
import {idealGasLawReferenceCases} from '../src/calculators/ideal-gas-law/referenceCases';
const gas={mode:'p2',p1:100,v1:2,t1:300,p2:100,v2:1,t2:300};
const state={solve:'p',n:2,tempUnit:'k',t:300,volumeUnit:'m3',v:0.05,pressureUnit:'pa'};
function number(text:unknown) {const t=String(text).split(' ')[0].replaceAll('\u00a0','').replace(',','.');const match=t.match(/^([+-]?[\d.]+)·10\^([+-]?\d+)$/);return match?Number(match[1])*10**Number(match[2]):Number(t);}
function relative(actual:unknown,expected:number) {expect(number(actual)/expected).toBeCloseTo(1,3);}
for(const [id,compute,cases] of [['gas-laws',combined,gasLawsReferenceCases],['ideal-gas-law',ideal,idealGasLawReferenceCases]] as const)
 for(const c of cases) it(`${id}: retained independent legacy case ${c.name}`,()=>{const result=compute(c.inputs);expect(result.primary.value).toBe(c.expectPrimary);for(const row of c.expectSecondary??[])expect(result.secondary).toContainEqual(expect.objectContaining(row));});

describe('fixed-amount combined law',()=>{
 for(const [mode,input,expected] of [
  ['p2',{...gas,t2:450,v2:3},100],
  ['v2',{...gas,mode:'v2',t2:600,p2:100},4],
  ['t2',{...gas,mode:'t2',p2:200,v2:2},600],
 ] as const) it(`independent algebra for ${mode}`,()=>expect(number(combined(input).primary.value)).toBe(expected));
 for(const mode of ['p2','v2','t2']) it(`computed field is ignored in ${mode}`,()=>{const valid={...gas,mode};expect(combined({...valid,[mode]:'invalid'})).toEqual(combined(valid));});
 for(const field of ['p1','v1','t1','v2','t2']) for(const bad of [undefined,'',true,'23x',Infinity,0,-1,'1e-999']) it(`rejects ${field}=${String(bad)}`,()=>expect(combined({...gas,[field]:bad}).primary.value).toBe('—'));
 it('rejects an unknown operation',()=>expect(combined({...gas,mode:'wrong'}).primary.value).toBe('—'));
 for(const size of [1e200,1e-200]) it(`cancels independent powers at ${size}`,()=>{const result=combined({...gas,p1:size,v1:size,t1:size,v2:size,t2:size});relative(result.primary.value,size);expect(JSON.stringify(result)).not.toMatch(/Infinity|NaN|undefined/);});
 it('rejects unrepresentable positive result and auxiliary state',()=>{expect(combined({...gas,p1:Number.MAX_VALUE,v1:2,t1:1,v2:Number.MIN_VALUE,t2:1}).primary.value).toBe('—');});
});

describe('ideal gas dimensions and numerical limits',()=>{
 // 1kPa·1L =1000Pa·0.001m³ =1J; same R is valid in either product unit.
 for(const [pu,pf] of [['pa',1],['kpa',1000],['atm',101325]] as const) for(const [vu,vf] of [['m3',1],['l',0.001]] as const)
  it(`independent pressure conversion ${pu}/${vu}`,()=>relative(ideal({...state,pressureUnit:pu,volumeUnit:vu,v:0.05/vf}).primary.value,99773.551416/pf));
 for(const [pu,p] of [['pa',101325],['kpa',101.325],['atm',1]] as const) for(const [vu,expected] of [['m3',0.022413969544601],[ 'l',22.413969544601]] as const)
  it(`independent molar volume at one atmosphere ${pu}/${vu}`,()=>{
    const result = ideal({...state,solve:'v',n:1,t:273.15,pressureUnit:pu,p,volumeUnit:vu});
    // Existing adaptive display rounds 0.022413…m³ to 0.0224; litres retain22.414.
    expect(number(result.primary.value)).toBe(vu === 'm3' ? 0.0224 : 22.414);
    expect(idealRatio([1,8.314462618,273.15],[p,pu === 'pa' ? 1 : pu === 'kpa' ? 1000 : 101325,vu === 'm3' ? 1 : 0.001])).toBeCloseTo(expected,10);
  });
 it('distinguishes100kPa from one standard atmosphere',()=>relative(ideal({...state,solve:'v',n:1,t:273.15,pressureUnit:'kpa',p:100,volumeUnit:'l'}).primary.value,22.710954641485));
 it('0°C maps to273.15K',()=>expect(ideal({...state,tempUnit:'c',t:0})).toEqual(ideal({...state,t:273.15})));
 for(const field of ['n','v','t']) for(const bad of [undefined,'',true,'23x',Infinity,'1e-999']) it(`rejects ${field}=${String(bad)}`,()=>expect(ideal({...state,[field]:bad}).primary.value).toBe('—'));
 for(const field of ['solve','pressureUnit','volumeUnit','tempUnit']) it(`rejects unknown ${field}`,()=>expect(ideal({...state,[field]:'bogus'}).primary.value).toBe('—'));
 it('ignores inactive supplied pressure',()=>expect(ideal({...state,p:'not a number'})).toEqual(ideal(state)));
 it('keeps0K only as an explicit formal algebraic limit',()=>{const result=ideal({...state,t:0});expect(result.primary.value).toBe('0 Па');expect(result.secondary).toContainEqual({label:'Предел модели',value:'0 K — формальный предел уравнения, а не физическое состояние идеального газа'});});
 it('rejects temperature below absolute zero',()=>expect(ideal({...state,tempUnit:'c',t:-273.16}).primary.value).toBe('—'));
 for(const size of [1e200,1e-200]) it(`avoids intermediate overflow/underflow at ${size}`,()=>{const result=ideal({...state,n:size,t:size,v:size});relative(result.primary.value,8.314462618*size);expect(JSON.stringify(result)).not.toMatch(/Infinity|NaN|undefined/);});
 it('handles unit factors without overflowing temporary pascals',()=>relative(ideal({...state,n:1e308,t:300,v:1e308,pressureUnit:'kpa'}).primary.value,2.4943387854));
 it('rejects a genuinely out-of-range result',()=>expect(ideal({...state,n:Number.MAX_VALUE,t:300,v:Number.MIN_VALUE}).primary.value).toBe('—'));
 // Existing unexposed compute branches remain supported; the published form still has p/v.
 it('retains independent internal amount branch',()=>relative(ideal({...state,solve:'n',p:99773.551416,t:300}).primary.value,2));
 it('retains independent internal temperature branch',()=>relative(ideal({...state,solve:'t',p:99773.551416,n:2}).primary.value,300));
});

for(const [label,ratio,read] of [['combined',combinedRatio,combinedRead],['ideal',idealRatio,idealRead]] as const) describe(`${label} private Number arithmetic`,()=>{
 for(const [numerators,denominators,expected] of [
  [[1e200,1e200],[1e200,1e200],1],[[1e-200,1e-200],[1e-200,1e-200],1],
  [[Number.MAX_VALUE,2],[2],Number.MAX_VALUE],[[Number.MIN_VALUE,2],[Number.MIN_VALUE],2],
  [[Number.MIN_VALUE,1.5],[2],Number.MIN_VALUE],[[Number.MIN_VALUE],[2],0],
 ] as const) it(`analytical scale identity ${numerators.join('*')}/${denominators.join('*')}`,()=>expect(ratio(numerators,denominators)).toBe(expected));
 it('valid0 can retain an underflowing textual exponent',()=>{expect(read('0e-999')).toBe(0);expect(read('1e-999')).toBeNaN();});
 it('parses local decimals and rejects Boolean coercion',()=>{expect(read('2,5')).toBe(2.5);expect(read(true)).toBeNaN();});
});
