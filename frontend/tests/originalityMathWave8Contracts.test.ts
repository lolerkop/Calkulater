import { describe, it, expect } from 'vitest';
import { definition as d0 } from '../src/calculators/binomial-probability/definition';
import { definition as d1 } from '../src/calculators/confidence-interval/definition';
import { definition as d2 } from '../src/calculators/correlation/definition';
import { definition as d3 } from '../src/calculators/dice-probability/definition';
import { definition as d4 } from '../src/calculators/probability-basic/definition';
import { definition as d5 } from '../src/calculators/quartile/definition';
import { definition as d6 } from '../src/calculators/roman-numerals/definition';
import { definition as d7 } from '../src/calculators/rounding/definition';
import { definition as d8 } from '../src/calculators/sample-size/definition';
import { definition as d9 } from '../src/calculators/stats-descriptive/definition';
import { definition as d10 } from '../src/calculators/weighted-mean/definition';
import { definition as d11 } from '../src/calculators/z-score/definition';
const definitions = [d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
const byId = Object.fromEntries(definitions.map(d => [d.id,d]));
const run = (id: string, input: Record<string, any>) => byId[id].compute(input);
const row = (result: any, label: string) => result.secondary?.find((r: any) => r.label === label)?.value;

describe('MathWave8 inherited numerical payloads', () => {
  for (const definition of definitions) for (const reference of definition.referenceCases ?? []) {
    it(`${definition.id}: ${reference.name}`, () => {
      const result = definition.compute(reference.inputs);
      expect(result.primary.value).toBe(reference.expectPrimary);
      for (const expected of reference.expectSecondary ?? []) expect(row(result,expected.label)).toBe(expected.value);
    });
  }
});
const fixed: [string,Record<string,any>,string][] = [
 ['stats-descriptive',{values:'1e308 1e308',mode:'population'},'1,000·10^308'],
 ['stats-descriptive',{values:'1e308 -1e308 3',mode:'population'},'1'],
 ['stats-descriptive',{values:'1e-300 2e-300 3e-300',mode:'sample'},'2,000·10^-300'],
 ['weighted-mean',{pairs:'1e308 1e308\n1e308 1e308'},'1,000·10^308'],
 ['weighted-mean',{pairs:'-1e308 1e308\n1e308 1e308'},'0'],
 ['weighted-mean',{pairs:'1e-300 1e-300\n3e-300 1e-300'},'2,000·10^-300'],
 ['correlation',{xs:'1e308 0 -1e308',ys:'-1e308 0 1e308'},'-1'],
 ['correlation',{xs:'1e-300 2e-300 3e-300',ys:'3e-300 2e-300 1e-300'},'-1'],
 ['correlation',{xs:'1 2 3',ys:'1 2 4'},'0,982'],
 ['quartile',{values:'-1e308 -1e308 1e308 1e308'},'0'],
 ['z-score',{x:1e308,mean:-1e308,sd:1e308},'2'],
 ['z-score',{x:1e-300,mean:0,sd:1e-300},'1'],
 ['confidence-interval',{mean:0,sd:1e308,n:4,confidence:'95'},'-9,800·10^307 … 9,800·10^307'],
 ['confidence-interval',{mean:1,sd:0,n:2,confidence:'90'},'1 … 1'],
 ['binomial-probability',{n:1000,k:500,p:.5,mode:'exactly'},'0,0252'],
 ['binomial-probability',{n:10,k:0,p:0,mode:'exactly'},'1'],
 ['binomial-probability',{n:10,k:10,p:1,mode:'atLeast'},'1'],
 ['binomial-probability',{n:1000,k:1000,p:.5,mode:'exactly'},'9,333·10^-302'],
 ['probability-basic',{mode:'independentEither',p3:1e-300,p4:1e-300},'2,000·10^-300'],
 ['probability-basic',{mode:'single',favourable:0,total:6},'0'],
 ['dice-probability',{count:10,sides:100,target:10},'1,000·10^-18%'],
 ['rounding',{value:1.005,digits:2,mode:'half'},'1,01'],
 ['rounding',{value:-1.005,digits:2,mode:'half'},'-1,01'],
 ['rounding',{value:-2.44,digits:1,mode:'down'},'-2,5'],
 ['rounding',{value:-2.44,digits:1,mode:'up'},'-2,4'],
 ['rounding',{value:.00000000015,digits:10,mode:'half'},'0,0000000002'],
 ['rounding',{value:1e308,digits:10,mode:'half'},'1'+String.fromCharCode(160)+'000'+(String.fromCharCode(160)+'000').repeat(101)+String.fromCharCode(160)+'00'],
 ['roman-numerals',{mode:'toRoman',arabic:3888},'MMMDCCCLXXXVIII'],
 ['roman-numerals',{mode:'toArabic',roman:'  mmmdccclxxxviii  '},'3888'],
 ['sample-size',{confidence:'95',margin:5,proportion:50,population:500},'218 чел'],
 ['sample-size',{confidence:'95',margin:5,proportion:10,population:0},'139 чел'],
 ['sample-size',{confidence:'99',margin:5,proportion:50,population:0},'664 чел'],
];
// The 1e308 decimal result is independently specified by its integer digits.
fixed.find(([id,input])=>id==='rounding'&&input.value===1e308)![2] = ('1'+'0'.repeat(308)).replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0');
describe('independent fixed mathematical examples', () => {
 for (const [id,input,expected] of fixed) it(`${id}: ${JSON.stringify(input)}`,()=>expect(run(id,input).primary.value).toBe(expected));
 it('recoverable descriptive spread preserves stddev despite variance underflow',()=>{
  const result=run('stats-descriptive',{values:'1e-300 2e-300 3e-300',mode:'sample'});
  expect(row(result,'Дисперсия')).toBe('Ненулевое значение меньше числового диапазона');
  expect(row(result,'Стандартное отклонение')).toBe('1,000·10^-300');
 });
 it('unknown population fraction is unavailable, not zero',()=>expect(row(run('sample-size',{confidence:'95',margin:5,proportion:50,population:0}),'Доля от совокупности')).toBe('—'));
 it('known finite population fraction is independently 43.6%',()=>expect(row(run('sample-size',{confidence:'95',margin:5,proportion:50,population:500}),'Доля от совокупности')).toBe('43,6 %'));
 it('conditional inactive fields do not affect valid probability',()=>expect(run('probability-basic',{mode:'single',favourable:1,total:2,p1:false,p2:'bad'}).primary.value).toBe('0,5'));
 it('decimal original and difference remain visible at ten places',()=>{
  const result=run('rounding',{value:.00000000015,digits:10,mode:'half'});
  expect(row(result,'Исходное значение')).toBe('0,00000000015'); expect(row(result,'Разница')).toBe('0,00000000005');
 });
});
const bases: Record<string,Record<string,any>> = {
 'binomial-probability':{n:10,k:3,p:.5,mode:'exactly'}, 'confidence-interval':{mean:100,sd:15,n:36,confidence:'95'},
 'dice-probability':{count:2,sides:6,target:7}, 'probability-basic':{mode:'single',favourable:1,total:6},
 'roman-numerals':{mode:'toRoman',arabic:1994},'rounding':{value:1.005,digits:2,mode:'half'},
 'sample-size':{confidence:'95',margin:5,proportion:50,population:0},'z-score':{x:80,mean:75,sd:8},
 'stats-descriptive':{values:'1 2 3',mode:'sample'},'correlation':{xs:'1 2 3',ys:'3 2 1'},
 'weighted-mean':{pairs:'1 1\n3 1'},'quartile':{values:'1 2 3 4'},
};
describe('strict active inputs and explicit product limits',()=>{
 for (const [id,input] of Object.entries(bases)) for(const [field,original] of Object.entries(input)) {
  if(typeof original==='string'&&['mode','confidence'].includes(field)) continue;
  for(const bad of ['',false,true,null,NaN,Infinity,'not-a-number','1e-9999']) it(`${id}.${field} rejects ${String(bad)}`,()=>expect(run(id,{...input,[field]:bad}).primary.value).toBe('—'));
 }
 for(const id of ['binomial-probability','confidence-interval','probability-basic','roman-numerals','rounding','sample-size','stats-descriptive']) {
  const field=id==='confidence-interval'||id==='sample-size'?'confidence':'mode';
  for(const invalid of ['unknown','',false,99]) it(`${id} rejects unsupported ${String(invalid)}`,()=>expect(run(id,{...bases[id],[field]:invalid}).primary.value).toBe('—'));
 }
 for(const [id,field] of [['binomial-probability','n'],['binomial-probability','k'],['dice-probability','count'],['dice-probability','sides'],['dice-probability','target'],['probability-basic','favourable'],['probability-basic','total'],['confidence-interval','n'],['rounding','digits'],['sample-size','population'],['roman-numerals','arabic']]) {
  for(const value of [2.5,'3.00000000000000001','3.00000000000000001e0',Number.MAX_SAFE_INTEGER+1]) it(`${id}.${field} rejects rounded fractional or unsafe integer ${value}`,()=>expect(run(id,{...bases[id],[field]:value}).primary.value).toBe('—'));
 }
 for(const id of ['stats-descriptive','quartile']) it(`${id} bounds list length`,()=>expect(run(id,{...bases[id],values:'1 '.repeat(10001)}).primary.value).toBe('—'));
 it('correlation bounds paired data',()=>expect(run('correlation',{xs:'1 '.repeat(10001),ys:'2 '.repeat(10001)}).primary.value).toBe('—'));
 it('weighted mean bounds pairs',()=>expect(run('weighted-mean',{pairs:'1 1\n'.repeat(10001)}).primary.value).toBe('—'));
 it('binomial bounds loop at 1000 trials',()=>expect(run('binomial-probability',{n:1001,k:0,p:.5}).primary.value).toBe('—'));
 it('roman parser bounds long text',()=>expect(run('roman-numerals',{mode:'toArabic',roman:'M'.repeat(100000)}).primary.value).toBe('—'));
 it('positive unrepresentable binomial selected probability errors',()=>expect(run('binomial-probability',{n:1000,k:1000,p:.01,mode:'exactly'}).primary.value).toBe('—'));
 it('positive unrepresentable z errors',()=>expect(run('z-score',{x:Number.MIN_VALUE,mean:0,sd:2}).primary.value).toBe('—'));
});
