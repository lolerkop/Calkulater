import {describe,it,expect}from'vitest';
import {definition as coordinates}from'../src/calculators/coordinate-convert/definition';
import {definition as names}from'../src/calculators/number-scale-names/definition';
import {definition as words}from'../src/calculators/number-to-words/definition';
import {definition as paper}from'../src/calculators/paper-quantity/definition';
import {definition as model}from'../src/calculators/scale-model/definition';
import before from'./fixtures/originalityConverterWave10Before.json';
import oracle from'./fixtures/originalityConverterWave10Independent.json';
const tools=[coordinates,names,words,paper,model];
const defaults=(d:typeof coordinates)=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue??'']));
const numeric=(s:string)=>{const t=s.replace(/^1:/,'').replace(/\s/g,'').replace(',','.');const n=t.match(/[-+]?\d+(?:\.\d+)?/);const e=t.match(/·10\^([-+]?\d+)/);return n?Number(n[0])*(e?10**Number(e[1]):1):NaN;};
describe('25 original numeric payloads preserved;3 scale label meanings corrected',()=>{for(const row of before.originalReferenceCases)it(`${row.id}: ${row.ref.name}`,()=>{const expected=row.id==='scale-model'&&row.result.primary.value!=='—'?{...row.result,secondary:row.result.secondary.map(r=>({...r,label:r.label==='Натура больше модели во столько раз'?'Отношение натуры к модели':r.label}))}:row.result;expect(tools.find(t=>t.id===row.id)!.compute(row.ref.inputs as unknown as Record<string,string|number|boolean>)).toEqual(expected);});});
describe('independent Decimal values',()=>{for(const[rowIndex,row]of oracle.cases.entries())it(`${row.id}/${rowIndex}: independently derived number`,()=>{
 const tool=tools.find(t=>t.id===row.id)!;const result=tool.compute({...defaults(tool),...row.input} as unknown as Record<string,string|number|boolean>);expect(result.primary.value).not.toBe('—');const expected=Number(row.expected),actual=numeric(result.primary.value);
 // The declared display rounding only; tiny physical values use three-significant scientific display.
 const tolerance=Math.abs(expected)<1e-4?Math.abs(expected)*.00051:Math.abs(expected)>=1e12?Math.abs(expected)*.00051:.50001*10**(-row.decimals);
 expect(Math.abs(actual-expected)).toBeLessThanOrEqual(tolerance);expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity|undefined/);
 });});
const bad=[undefined,null,true,false,[],[1],{},'',' ','3kg','1/2','1.2.3','1e999','1e-999',Infinity,NaN];
for(const[id,key]of [['coordinate-convert','deg'],['coordinate-convert','minutes'],['coordinate-convert','seconds'],['number-scale-names','value'],['number-to-words','value'],['paper-quantity','grammage'],['paper-quantity','sheets'],['scale-model','real'],['scale-model','scale']]){
 const tool=tools.find(t=>t.id===id)!;for(const[vIndex,value]of bad.entries())it(`${id}/${key}/${vIndex}: malformed active input fails`,()=>{const result=tool.compute({...defaults(tool),[key]:value} as never);expect(result.primary.value).toBe('—');expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity|undefined/);});
}
for(const[id,key]of [['coordinate-convert','mode'],['coordinate-convert','hemisphere'],['number-scale-names','from'],['number-scale-names','to'],['paper-quantity','format'],['scale-model','mode']]){
 const tool=tools.find(t=>t.id===id)!;for(const value of [null,true,[],{},'__proto__','constructor','unknown'])it(`${id}/${key}/${JSON.stringify(value)}: unsupported option fails`,()=>{expect(tool.compute({...defaults(tool),[key]:value} as never).primary.value).toBe('—');});
}
for(const[id,key]of [['coordinate-convert','deg'],['coordinate-convert','minutes'],['number-to-words','value'],['paper-quantity','sheets']]){
 const tool=tools.find(t=>t.id===id)!;for(const value of ['3.00000000000000001','3.00000000000000001e0',3.5,9007199254740992])it(`${id}/${key}/${value}: count is not rounded into validity`,()=>expect(tool.compute({...defaults(tool),[key]:value} as never).primary.value).toBe('—'));
}
it('59.5 angular seconds accepted and60 rejected',()=>{expect(coordinates.compute({deg:0,minutes:0,seconds:59.5}).primary.value).toBe('0,0165°');expect(coordinates.compute({deg:0,minutes:0,seconds:60}).primary.value).toBe('—');});
it('four-place DMS rounding carries into degrees, not60seconds',()=>{expect(coordinates.compute({mode:'toDms',decimal:1+59/60+59.99996/3600}).primary.value).toBe('2° 0′ 0″');expect(coordinates.compute({mode:'toDms',decimal:179+59/60+59.99996/3600}).primary.value).toBe('180° 0′ 0″');});
it('180 degrees with a nonzero tiny remainder rejected before binary absorption',()=>expect(coordinates.compute({deg:180,minutes:0,seconds:Number.MIN_VALUE}).primary.value).toBe('—'));
it('unknown latitude axis is not inferred: generic120degree accepted',()=>expect(coordinates.compute({mode:'toDms',decimal:120}).primary.value).toBe('120° 0′ 0″'));
it('inactive coordinate values are ignored',()=>expect(coordinates.compute({mode:'toDms',decimal:-37.6173,deg:true,minutes:[],seconds:NaN,hemisphere:'unknown'} as never).primary.value).toBe('37° 37′ 2,28″'));
it('finite identity remains valid while an auxiliary named-scale row overflows',()=>{const r=names.compute({value:1e308,from:'billion',to:'billion'});expect(r.primary.value).toBe('1,000·10^308');expect(r.secondary[0].value).toBe('Вне числового диапазона');expect(JSON.stringify(r)).not.toMatch(/NaN|Infinity/);});
it('unrepresentable primary named scale range is explicit',()=>expect(names.compute({value:1e308,from:'billion',to:'unit'}).primary.value).toBe('—'));
it('tiny positive named-scale identity preserved',()=>expect(names.compute({value:Number.MIN_VALUE,from:'unit',to:'unit'}).primary.value).not.toBe('0'));
it('paper scaled multiplication keeps a finite huge mass',()=>{expect(paper.compute({format:'a4',grammage:1e308,sheets:1}).primary.value).not.toBe('—');expect(JSON.stringify(paper.compute({format:'a4',grammage:1e308,sheets:1}))).not.toMatch(/NaN|Infinity/);});
it('paper huge inverse row cannot inventInfinity while the mass remains finite',()=>{const r=paper.compute({format:'a4',grammage:1e-308,sheets:1});expect(r.primary.value).not.toBe('—');expect(r.secondary[3].value).toBe('Вне числового диапазона');});
for(const mode of ['toModel','toReal','findScale'])it(`${mode}: inactive unknown ignored and positive scale below1allowed`,()=>{const r=model.compute(mode==='toModel'?{mode,real:5,scale:.5,model:'malformed'}:mode==='toReal'?{mode,model:10,scale:.5,real:true}:{mode,real:5,model:10,scale:NaN});expect(r.primary.value).toBe(mode==='findScale'?'1:0,5':mode==='toReal'?'5 мм':'10 мм');});
it('model output range is checked without overflowing finite identity',()=>{expect(model.compute({mode:'findScale',real:1e308,model:1e308}).primary.value).toBe('1:1');expect(model.compute({mode:'toReal',model:1e308,scale:10}).primary.value).toBe('—');});
it('number spelling limits are implementation limits and0is valid',()=>{expect(words.compute({value:0}).primary.value).toBe('ноль');expect(words.compute({value:-999999999999}).primary.value).not.toBe('—');expect(words.compute({value:1000000000000}).primary.value).toBe('—');});
it('secondsMIN division cannot invent a zero angle',()=>{const r=coordinates.compute({deg:0,minutes:0,seconds:Number.MIN_VALUE});expect(r.primary.value).toBe('—');expect(r.secondary[0].value).toBe('Ненулевой угол меньше числового диапазона');});
it('tiny representable seconds survive reverseDMS rounding',()=>{const r=coordinates.compute({mode:'toDms',decimal:1e-10});expect(r.primary.value).toBe('0° 0′ 3,600·10^-7″');expect(r.secondary[0].value).toBe('1,000·10^-10°');});
it('smallest represented decimal angle has nonzero DMS seconds',()=>{const r=coordinates.compute({mode:'toDms',decimal:Number.MIN_VALUE});expect(r.primary.value).not.toBe('0° 0′ 0″');expect(r.primary.value).not.toMatch(/NaN|Infinity/);});
