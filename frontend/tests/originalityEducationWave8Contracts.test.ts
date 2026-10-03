import { describe, expect, it } from 'vitest';
import { definition as gpa } from '../src/calculators/gpa/definition';
import { definition as final } from '../src/calculators/final-grade/definition';
import { definition as score } from '../src/calculators/test-score-percent/definition';
import { definition as reading } from '../src/calculators/reading-speed/definition';
import { definition as duration } from '../src/calculators/text-reading-time/definition';
import { definition as counter } from '../src/calculators/text-word-char-count/definition';
import type { CalculatorDefinitionV2 } from '../src/lib/platform/types';
const tools=[gpa,final,score,reading,duration,counter];
const defaults=(tool:CalculatorDefinitionV2)=>Object.fromEntries(tool.presentation.fields.map(f=>[f.name,f.defaultValue]));
const primary=(tool:CalculatorDefinitionV2,input:Record<string,unknown>)=>tool.compute(input as never).primary.value;
const row=(tool:CalculatorDefinitionV2,input:Record<string,unknown>,label:string)=>tool.compute(input as never).secondary.find(r=>r.label===label)?.value;

describe('43 inherited and explicitly amended education contracts',()=>{
 for(const tool of tools)for(const ref of tool.referenceCases??[])it(`${tool.id}/${ref.name}`,()=>{
  const result=tool.compute(ref.inputs);expect(result.primary.value).toBe(ref.expectPrimary);
  for(const expected of ref.expectSecondary??[])expect(result.secondary).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
 });
 for(const tool of tools)it(`${tool.id}: published example remains an actual result`,()=>{
  const example=tool.publishedExample!;const result=tool.compute(example.inputs);const text=JSON.stringify(result);
  for(const expected of example.expected)expect(text).toContain(expected);
 });
});
describe('fixed algebra and exact-weight expectations',()=>{
 for(const [grades,expected]of[
  ['5 3\n4 4\n3 2','4,1111'],['4 5\n5 3\n3 4\n5 2','4,0714'],
  ['1 1e308\n3 1e308','2'],['1 1e-308\n3 1e-308','2'],['0 1\n0 2','0'],
  ['2 9\n2 1','2'],['4,5; 2\n3,5; 2','4'],['1.5\n2.5','2'],
 ]as const)it(`GPA independent weighted mean ${grades}`,()=>expect(primary(gpa,{grades})).toBe(expected));
 for(const [current,target,weight,expected]of[
  [78,85,30,'101,33%'],[50,50,1e-300,'50,00%'],[50,50,Number.MIN_VALUE,'50,00%'],
  [60,67,20,'95,00%'],[100,50,50,'0,00%'],[100,40,50,'-20,00%'],[25,75,100,'75,00%'],
 ]as const)it(`final weighted equation C${current} T${target} w${weight}`,()=>expect(primary(final,{current,target,weight})).toBe(expected));
 it('same tiny current and target retain a nonzero required score',()=>expect(primary(final,{current:1e-300,target:1e-300,weight:1e-300})).toContain('·10^-300'));
 it('unrepresentable required score is explicit, not Infinity',()=>expect(primary(final,{current:0,target:100,weight:Number.MIN_VALUE})).toBe('—'));
 it('GPA exact accumulation retains a finite mean when product sums exceed binary64',()=>{
  expect(primary(gpa,{grades:'1e308 1e308\n1e308 1e308'})).toContain('·10^308');
  expect(row(gpa,{grades:'1e308 1e308\n1e308 1e308'},'Сумма произведений')).toBe('Значение выходит за числовой диапазон');
 });
});
describe('whole answer counts and thresholds before display rounding',()=>{
 it('exact250/3 is below the next binary64 threshold and above the preceding threshold',()=>{
  // Fraction.from_float(83.33333333333334) −250/3 =1/105553116266496.
  expect(row(score,{correct:5,total:6,passMark:83.33333333333334},'Проходной балл')).toBe('Тест не сдан');
  expect(row(score,{correct:5,total:6,passMark:83.33333333333333},'Проходной балл')).toBe('Тест сдан');
  expect(primary(score,{correct:5,total:6,passMark:83.33333333333334})).toBe('83,33%');
 });
 it('one of three is33.33 but fails33.334',()=>{
  expect(primary(score,{correct:1,total:3,passMark:33.334})).toBe('33,33%');
  expect(row(score,{correct:1,total:3,passMark:33.334},'Проходной балл')).toBe('Тест не сдан');
 });
 it('zero, blank and omitted threshold explicitly disable the verdict',()=>{
  for(const passMark of [0,'',undefined])expect(row(score,{correct:0,total:1,passMark},'Проходной балл')).toBeUndefined();
 });
 for(const [correct,total,expected]of[[0,5,'0,00%'],[18,20,'90,00%'],[20,20,'100,00%'],[1,8,'12,50%']]as const)
  it(`fraction ${correct}/${total}`,()=>expect(primary(score,{correct,total})).toBe(expected));
 for(const input of [{correct:1.9,total:2.4},{correct:21,total:20},{correct:-1,total:20},{correct:1,total:0},{correct:1,total:3,passMark:101},{correct:1,total:3,passMark:-1}])
  it(`score invalid ${JSON.stringify(input)}`,()=>expect(primary(score,input)).toBe('—'));
});
describe('time models retain unrounded speed and round the whole duration',()=>{
 it('half a word per minute remains0.5 while the hourly rate is30',()=>{
  const input={words:1,minutes:2,bookWords:1};expect(primary(reading,input)).toBe('0,5 слов/мин');
  expect(row(reading,input,'Слов в час')).toBe('30');expect(row(reading,input,'Время на книгу')).toBe('2 мин');
 });
 it('book119.6min rounds120min without60-minute suffix',()=>{
  const input={words:150,minutes:149.5,bookWords:120};expect(primary(reading,input)).toBe('1 слов/мин');
  expect(row(reading,input,'Время на книгу')).toBe('2 ч 0 мин');
 });
 it('book uses3000/13 speed, not displayed231',()=>expect(row(reading,{words:3000,minutes:13,bookWords:90000},'Время на книгу')).toBe('6 ч 30 мин'));
 it('six characters per word is the disclosed arithmetic assumption',()=>{
  const input={words:3000,minutes:12};expect(row(reading,input,'Знаков в минуту (примерно)')).toBe('1 500');
 });
 it('tiny positive speed is not silently zero',()=>expect(primary(reading,{words:1,minutes:1e307})).toContain('·10^-307'));
 it('primary speed survives an overflowing optional book duration',()=>{
  const input={words:1,minutes:1e308,bookWords:9007199254740991};expect(primary(reading,input)).not.toBe('—');
  expect(row(reading,input,'Время на книгу')).toBe('Значение выходит за числовой диапазон');
 });
 for(const input of [{words:1,minutes:0},{words:1,minutes:1,bookWords:-1},{words:1.5,minutes:1},{words:1,minutes:1,bookWords:1.5},{words:1,minutes:Number.MIN_VALUE}])
  it(`reading invalid ${JSON.stringify(input)}`,()=>expect(primary(reading,input)).toBe('—'));
 it('1200words use independently set200/130 paces',()=>{
  const input={mode:'words',words:1200,wpm:200,speechWpm:130};expect(primary(duration,input)).toBe('6 мин 0 с');expect(row(duration,input,'Время вслух')).toBe('9 мин 14 с');
 });
 it('119.6s rounds120s with a zero-second suffix',()=>expect(primary(duration,{mode:'words',words:299,wpm:150,speechWpm:150})).toBe('2 мин 0 с'));
 it('tiny positive duration retains seconds',()=>expect(primary(duration,{mode:'words',words:1,wpm:1e300,speechWpm:1e300})).toContain('·10^-299'));
 it('inactive text and word count do not affect the chosen mode',()=>{
  expect(primary(duration,{mode:'words',words:5,text:{bad:true},wpm:60,speechWpm:60})).toBe('0 мин 5 с');
  expect(primary(duration,{mode:'text',words:false,text:'größer résumé español З’їж м’яких',wpm:60,speechWpm:60})).toBe('0 мин 5 с');
 });
 for(const input of [{mode:'alien',words:1,wpm:200,speechWpm:130},{mode:'words',words:1.5,wpm:200,speechWpm:130},{mode:'words',words:1,wpm:0,speechWpm:130},{mode:'words',words:1,wpm:200,speechWpm:0},{mode:'text',text:'👨‍👦',wpm:200,speechWpm:130}])
  it(`duration invalid ${JSON.stringify(input)}`,()=>expect(primary(duration,input)).toBe('—'));
});
describe('independent token and code-point conventions',()=>{
 for(const [text,words,characters,average]of[
  ['größer résumé español З’їж м’яких','5','33','5,8'],
  ['e\u0301 café','2','7','3'],['👨‍👦','0','3','—'],
  ['a\r\nb\rc','3','6','1'],['... !!!','0','7','—'],
  ['中文没有空格','1','6','6'],['a--b','2','4','1'],
 ]as const)it(`fixed tokens and original code points ${text}`,()=>{
  expect(primary(counter,{text})).toBe(words);expect(row(counter,{text},'Символов с пробелами')).toBe(characters);expect(row(counter,{text},'Средняя длина слова')).toBe(average);
 });
 for(const join of ["'",'’','ʼ','-','‐','‑'])it(`one internal joining mark ${join}`,()=>{
  expect(primary(counter,{text:'a'+join+'b'})).toBe('1');expect(row(counter,{text:'a'+join+'b'},'Средняя длина слова')).toBe('3');
 });
 it('punctuation outside words is excluded from mean word length',()=>expect(row(counter,{text:'Hi!!! bye.'},'Средняя длина слова')).toBe('2,5'));
 it('CRLF and CR delimit three nonempty lines without phantom paragraphs',()=>expect(row(counter,{text:'a\r\nb\rc'},'Абзацев')).toBe('3'));
 for(const text of ['', ' \n\t ',undefined,null,true,{}])it(`counter malformed/empty ${String(text)}`,()=>expect(primary(counter,{text})).toBe('—'));
});
describe('strict active numeric values never coerce to plausible results',()=>{
 const bad=[null,undefined,true,false,{},[],Number.NaN,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,'abc','1x','--','0x10','1,2,3'];
 for(const tool of tools)for(const field of tool.presentation.fields.filter(f=>f.type==='number'&&(!f.showIf||f.name==='words'))){
  for(const value of bad)it(`${tool.id}/${field.name}/${String(value)}`,()=>{
   const input={...defaults(tool),[field.name]:value};
   // Optional absent counts and thresholds are a stated zero/disabled contract.
   if(field.optional&&value===undefined)expect(primary(tool,input)).not.toBe('—');else expect(primary(tool,input)).toBe('—');
  });
 }
 for(const grades of ['5 0','-1 1','5 -1','5 1 2','5x 1','5 Infinity','5 NaN','5 1e-400','true 1'])it(`GPA malformed row ${grades}`,()=>expect(primary(gpa,{grades})).toBe('—'));
 it('GPA10000 rows are bounded and10001 rows are refused',()=>{
  expect(primary(gpa,{grades:Array(10000).fill('1').join('\n')})).toBe('1');expect(primary(gpa,{grades:Array(10001).fill('1').join('\n')})).toBe('—');
 });
});
