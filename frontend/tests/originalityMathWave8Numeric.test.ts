import { describe, expect, it } from 'vitest';
import oracle from './originalityMathWave8Oracle.json';
import { add, exact, moments, negative, ratio, sqrtRatio, times } from '../src/calculators/stats-descriptive/statisticsNumeric';
import { compute as ci } from '../src/calculators/confidence-interval/compute';
import { compute as quartile } from '../src/calculators/quartile/compute';
import { compute as probability } from '../src/calculators/probability-basic/compute';
import { compute as binomial } from '../src/calculators/binomial-probability/compute';
import { compute as sample } from '../src/calculators/sample-size/compute';

// Literal oracle values were generated independently with Python Fraction and
// Decimal precision1600. No expected value is derived from a tested compute.
describe('single-round rational roots on the final binary grid',()=>{
 for (const [index, fixture] of oracle.sqrtRatios.entries()) it(`independent literal sqrt ratio ${index}`,()=>{
  expect(sqrtRatio({coefficient:BigInt(fixture.n),exponent:fixture.exp},{coefficient:BigInt(fixture.d),exponent:0})).toBe(Number(fixture.expected));
 });
});
describe('exact centered moments and correlation across binary scales',()=>{
 for (const [index, fixture] of oracle.moments.entries()) {
  it(`literal exact mean X ${index}`,()=>expect(ratio(moments(fixture.xs).sum,exact(fixture.xs.length))).toBe(Number(fixture.meanX)));
  it(`literal exact mean Y ${index}`,()=>expect(ratio(moments(fixture.ys).sum,exact(fixture.ys.length))).toBe(Number(fixture.meanY)));
  it(`literal population deviation ${index}`,()=>expect(sqrtRatio(moments(fixture.xs).centered,exact(fixture.xs.length**2))).toBe(Number(fixture.populationSd)));
  it(`literal sample deviation ${index}`,()=>expect(sqrtRatio(moments(fixture.xs).centered,exact(fixture.xs.length*(fixture.xs.length-1)))).toBe(Number(fixture.sampleSd)));
  it(`literal Pearson r ${index}`,()=>{
   const x=moments(fixture.xs),y=moments(fixture.ys), n=fixture.xs.length;
   const cross=add(times(exact(n),fixture.xs.reduce((sum,value,i)=>add(sum,times(exact(value),exact(fixture.ys[i]))),exact(0))),negative(times(x.sum,y.sum)));
   const actual=(cross.coefficient<0n?-1:1)*sqrtRatio(times(cross,cross),times(x.centered,y.centered));
   expect(actual).toBe(Number(fixture.r));
  });
 }
});
describe('explicit precision boundaries and independent quantitative claims',()=>{
 it('an unresolved nonzero interval is a range error, not a point estimate',()=>expect(ci({mean:1,sd:1e-300,n:4,confidence:'95'}).primary.value).toBe('—'));
 it('a narrow but resolvable interval shows distinct bounds rather than equal rounded numbers',()=>{
  const result=ci({mean:1,sd:1e-10,n:100,confidence:'95'});
  expect(result.primary.value).not.toBe('1 … 1');
  const [low,high]=result.primary.value.split(' … ');
  expect(low).not.toBe(high);
  expect(result.secondary?.find(r=>r.label==='Нижняя граница')?.value).toBe(low);
  expect(result.secondary?.find(r=>r.label==='Верхняя граница')?.value).toBe(high);
 });
 it('unrepresentable positive quartile median errors',()=>expect(quartile({values:'0 0 5e-324 5e-324'}).primary.value).toBe('—'));
 it('true zero median is retained',()=>expect(quartile({values:'-5e-324 -5e-324 5e-324 5e-324'}).primary.value).toBe('0'));
 it('tiny exact fences still classify the actual value rather than rounded fences',()=>{
  const result=quartile({values:'0 0 0 5e-324'});
  expect(result.primary.value).toBe('0');expect(result.secondary?.find(r=>r.label==='Выбросов')?.value).toBe('1');
 });
 it('representable probability preserves unrepresentable odds as a separate diagnostic',()=>{
  const result=probability({mode:'independentBoth',p1:Number.MIN_VALUE,p2:1});
  expect(result.primary.value).toBe('4,941·10^-324');
  expect(result.secondary?.find(r=>r.label==='Шансы')?.value).toBe('Вне числового диапазона');
 });
 it('binomial p=0 retains the exact deterministic zero outcome',()=>expect(binomial({n:1000,k:1000,p:0}).primary.value).toBe('0'));
 it('tiny nonzero binomial expectation/deviation are visible',()=>{
  const result=binomial({n:1,k:1,p:Number.MIN_VALUE});
  expect(result.primary.value).toBe('4,941·10^-324');
  expect(result.secondary?.find(r=>r.label==='Математическое ожидание')?.value).toBe('4,941·10^-324');
  expect(result.secondary?.find(r=>r.label==='Стандартное отклонение')?.value).toBe('2,223·10^-162');
 });
 it('finite population correction remains finite when raw n is enormous',()=>expect(sample({confidence:'95',margin:Number.MIN_VALUE,proportion:50,population:500}).primary.value).toBe('500 чел'));
 it('finite N1 retains one required respondent for nondegenerate proportion',()=>expect(sample({confidence:'95',margin:5,proportion:50,population:1}).primary.value).toBe('1 чел'));
 it('same confidence and halved margin gives 1537, rather than exactly4×rounded385',()=>expect(sample({confidence:'95',margin:2.5,proportion:50,population:0}).primary.value).toBe('1 537 чел'));
 it('binary64 exact factorial claim independently verified against literal integers',()=>{
  const exact=[2432902008176640000n,51090942171709440000n,1124000727777607680000n];
  for(const n of exact) expect(BigInt(Number(n))).toBe(n);
  expect(BigInt(Number(25852016738884976640000n))).not.toBe(25852016738884976640000n);
 });
 it('10d20 lies below the safe-integer boundary while10d100 is above',()=>{
  expect(20n**10n).toBe(10240000000000n);expect(20n**10n<2n**53n).toBe(true);
  expect(100n**10n).toBe(100000000000000000000n);expect(100n**10n>2n**53n).toBe(true);
 });
});
