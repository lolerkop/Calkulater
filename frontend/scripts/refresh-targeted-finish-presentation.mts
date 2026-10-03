import {readFileSync,writeFileSync,readdirSync,statSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';
import {getCalculatorById,localeMeta,type Locale} from '../src/lib/i18n';
import {getCalculatorEditorial} from '../src/data/calculatorEditorial';

// Refresh presentation only. No runtime compute, scenario selection, or numeric
// expected-value generation occurs here. Every original scenario is immutable.
const evidence=resolve('reports/targeted-finish-2026-10-03');
const original=JSON.parse(readFileSync(join(evidence,'route-fixture-before.json'),'utf8'));
const next=structuredClone(original);
const allowedTitles=new Set(JSON.parse(readFileSync(join(evidence,'targeted-title-source-changes.json'),'utf8')).map((row:any)=>row.url));
const changes:any[]=[];
for(const row of next.rows){
 const before=original.rows.find((r:any)=>r.route===row.route);
 const calculator=getCalculatorById(row.id,row.locale as Locale)!;
 if(calculator.fullPath!==row.route)throw Error(`Route drift ${row.route}`);
 const title=calculator.seoTitle.includes(localeMeta[row.locale as Locale].siteName)?calculator.seoTitle:`${calculator.seoTitle} — ${localeMeta[row.locale as Locale].siteName}`;
 if(title!==row.expectedTitle){
  if(!allowedTitles.has(row.route))throw Error(`Out-of-scope title ${row.route}`);
  changes.push({route:row.route,field:'expectedTitle',before:row.expectedTitle,after:title});row.expectedTitle=title;
 }
 for(const key of ['intro','howItWorks','example','tips','faq']){
  const value=(calculator.seoContent as any)[key];
  if(!isDeepStrictEqual(value,row.body[key])){
   if(!(row.id==='divisors'&&key==='tips')&&!(row.id==='discount-calculator'&&row.locale==='es'&&key==='faq'))throw Error(`Out-of-scope body ${row.route}/${key}`);
   changes.push({route:row.route,field:`body.${key}`,before:row.body[key],after:value});row.body[key]=value;
  }
 }
 if(!isDeepStrictEqual(calculator.howToUse,row.howToUse)){
  if(row.id!=='divisors')throw Error(`Out-of-scope instructions ${row.route}`);
  changes.push({route:row.route,field:'howToUse',before:row.howToUse,after:calculator.howToUse});row.howToUse=calculator.howToUse;
 }
 for(const entry of row.fields){
  const field=calculator.fields.find(f=>f.name===entry.source.name)!;
  const withoutHelp=({help,...rest}:any)=>rest;
  if(!isDeepStrictEqual(withoutHelp(JSON.parse(JSON.stringify(field))),withoutHelp(entry.source)))throw Error(`Field model drift ${row.route}/${field.name}`);
  if(field.help!==entry.source.help){
   if(!(row.id==='credit-calculator'&&field.name==='term')&&!(row.id==='paint-calculator'&&field.name==='coats'))throw Error(`Out-of-scope help ${row.route}/${field.name}`);
   changes.push({route:row.route,field:`fields.${field.name}.help`,before:entry.source.help??null,after:field.help});
   entry.source.help=field.help;entry.dynamic.help=field.help;
  }
 }
 if(!isDeepStrictEqual(JSON.parse(JSON.stringify(getCalculatorEditorial(calculator,row.locale))),row.editorial))throw Error(`Editorial source/limit drift ${row.route}`);
 if(!isDeepStrictEqual(row.scenario,before.scenario))throw Error(`Numeric scenario drift ${row.route}`);
}
function files(dir:string):string[]{return readdirSync(dir).flatMap(name=>{const p=join(dir,name);return statSync(p).isDirectory()?files(p):/\.(?:ts|tsx|astro|json|css)$/.test(name)?[p]:[];});}
const sourceFiles=files(resolve('src')).sort().map(p=>({path:relative(resolve('.'),p).replaceAll('\\','/'),sha256:createHash('sha256').update(readFileSync(p)).digest('hex')}));
next.sourceDigest=createHash('sha256').update(sourceFiles.map(f=>f.path+'\0'+f.sha256+'\n').join('')).digest('hex');
next.sourceFileCount=sourceFiles.length;next.presentationRefreshedAt=new Date().toISOString();
next.presentationRefreshScope='Only authorized titles, divisors instructions, ES discount FAQ and credit/paint help. All 1866 original scenario objects and numeric/option field properties retained unchanged; no compute invoked.';
const target=resolve('e2e/fixtures/originality-final-calculator-route-smoke.json');writeFileSync(target,JSON.stringify(next,null,2)+'\n');
const numericHash=(rows:any[])=>createHash('sha256').update(JSON.stringify(rows.map(({route,scenario})=>({route,scenario})))).digest('hex');
writeFileSync(join(evidence,'presentation-refresh.json'),JSON.stringify({routes:next.rows.length,changes,numericScenariosUnchanged:next.rows.every((r:any,i:number)=>isDeepStrictEqual(r.scenario,original.rows[i].scenario)),beforeScenarioHash:numericHash(original.rows),afterScenarioHash:numericHash(next.rows),sourceDigest:next.sourceDigest},null,2)+'\n');
console.log(JSON.stringify({routes:next.rows.length,presentationChanges:changes.length,numericScenariosUnchanged:true,numericScenarioHash:numericHash(next.rows),sourceDigest:next.sourceDigest}));
