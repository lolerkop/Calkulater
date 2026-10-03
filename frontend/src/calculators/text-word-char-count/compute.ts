import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
import { unicodeWords } from '../../lib/platform/unicodeWords';
const stat=(n:number)=>formatStatistic(n,fmtNumber);
export const compute:CalcFunction=inputs=>{
 const text=typeof inputs.text==='string'?inputs.text:'';
 if(!text.trim())return{primary:{label:'Слов',value:'—'},secondary:[{label:'Проверьте данные',value:'Введите текст',accent:'red' as const}]};
 const words=unicodeWords(text),charsWithSpaces=[...text].length,charsWithoutSpaces=[...text.replace(/\s/g,'')].length;
 const sentences=text.split(/[.!?…]+/).filter(s=>s.trim().length>0),paragraphs=text.split(/\r\n|\r|\n/).filter(s=>s.trim().length>0);
 const wordLength=words.reduce((sum,word)=>sum+[...word].length,0);
 return{primary:{label:'Слов',value:fmtNumber(words.length,0)},secondary:[
  {label:'Символов с пробелами',value:fmtNumber(charsWithSpaces,0)},{label:'Символов без пробелов',value:fmtNumber(charsWithoutSpaces,0)},
  {label:'Предложений',value:fmtNumber(sentences.length,0)},{label:'Абзацев',value:fmtNumber(paragraphs.length,0)},
  {label:'Средняя длина слова',value:words.length?stat(wordLength/words.length):'—'},
  {label:'Слов в предложении',value:sentences.length?stat(words.length/sentences.length):'—'},
 ]};
};
