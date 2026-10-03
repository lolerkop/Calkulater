import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {expect,it} from 'vitest';
import ts from 'typescript';
import {fitnessLegacyContractContent,getFitnessMethodSources} from '../src/data/fitnessLegacyContractContent';

const locales=['ru','en','uk','de','es'] as const;
const base='../reports/originality-final-bodyfat-source-amendment-evidence/';
const before=readFileSync(new URL(base+'fitnessLegacyContractContent.ts.before.txt',import.meta.url),'utf8');
const current=readFileSync(new URL('../src/data/fitnessLegacyContractContent.ts',import.meta.url),'utf8');
const army='https://api.army.mil/e2/c/downloads/566092.pdf#page=3';
function initializer(text:string,name:string){
 const source=ts.createSourceFile('fitness.ts',text,ts.ScriptTarget.ES2022,true);
 for(const s of source.statements)if(ts.isVariableStatement(s))for(const d of s.declarationList.declarations)if(ts.isIdentifier(d.name)&&d.name.text===name&&d.initializer)return d.initializer.getText(source);
 throw new Error('missing literal '+name);
}
function literal(text:string,name:string){
 const value=ts.transpileModule('return ('+initializer(text,name)+');',{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
 // The archived and current initializers are data literals, never engine output.
 return Function(value)();
}
const oldCopy=literal(before,'fitnessLegacyContractContent') as typeof fitnessLegacyContractContent;
const oldLinks=literal(before,'methodLinks') as Record<string,string>;
const oldLabels=literal(before,'methodLabels') as Record<string,Record<string,string>>;
const oldById=literal(before,'methodsById') as Record<string,string[]>;
const boundaries={
 ru:{history:'Историческая',derivation:'исходный вывод',pending:'пока не проверен',current:'не является текущей оценкой Navy',individual:'для отдельного человека не гарантируется'},
 en:{history:'historical',derivation:'derivation',pending:'remains unverified',current:'neither a current Navy assessment',individual:'no universal individual accuracy is promised'},
 uk:{history:'Історична',derivation:'первинне виведення',pending:'ще не перевірено',current:'не є чинною оцінкою Navy',individual:'для окремої людини не гарантується'},
 de:{history:'historische',derivation:'ursprüngliche Herleitung',pending:'bleibt ungeprüft',current:'keine aktuelle Navy-Bewertung',individual:'für Einzelpersonen wird nicht zugesichert'},
 es:{history:'histórico',derivation:'derivación',pending:'sigue sin verificarse',current:'no es una evaluación Navy vigente',individual:'para cada persona'},
};
for(const locale of locales){
 it(locale+': Army exact-coefficient use and existing Navy measurement-site source have separate scopes',()=>{
  const sources=getFitnessMethodSources('body-fat-calculator',locale);
  expect(sources).toEqual([
   {href:oldLinks.navyHistorical,label:oldLabels[locale].navyHistorical},
   {href:army,label:{
    ru:'Армия США, 26 марта 2019, с. 3, §f: историческое использование точных коэффициентов в дюймах',
    en:'US Army, 26 March 2019, p. 3, §f: historical use of the exact inch-based coefficients',
    uk:'Армія США, 26 березня 2019, с. 3, §f: історичне використання точних коефіцієнтів у дюймах',
    de:'US Army, 26. März 2019, S. 3, §f: historische Verwendung der exakten Zollkoeffizienten',
    es:'Ejército de EE. UU., 26 de marzo de 2019, p. 3, §f: uso histórico de los coeficientes exactos en pulgadas',
   }[locale]},
  ]);
 });
 it(locale+': derivation remains distinct from documented historical use and personal/current-military validity',()=>{
  const disclaimer=fitnessLegacyContractContent[locale]['body-fat-calculator'].disclaimer!;
  expect(disclaimer).toContain('2019');expect(disclaimer).toContain('NHRC');expect(disclaimer).toContain('§f');
  for(const phrase of Object.values(boundaries[locale]))expect(disclaimer).toContain(phrase);
  if(['en','de','es'].includes(locale))expect(disclaimer).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
 it(locale+': all non-disclaimer body-fat content and every other fitness copy remain identical',()=>{
  const old=structuredClone(oldCopy[locale]);const next=structuredClone(fitnessLegacyContractContent[locale]);
  delete old['body-fat-calculator'].disclaimer;delete next['body-fat-calculator'].disclaimer;
  expect(next).toEqual(old);
  for(const id of Object.keys(oldById))if(id!=='body-fat-calculator')expect(getFitnessMethodSources(id,locale)).toEqual(oldById[id].map(key=>({href:oldLinks[key],label:oldLabels[locale][key]})));
 });
}
it('historical PDF evidence has the immutable verified-TLS download hash',()=>{
 const bytes=readFileSync(new URL(base+'army-query.pdf',import.meta.url));
 expect(createHash('sha256').update(bytes).digest('hex')).toBe('0d19b09c0cc826a071da319460d2ed3b37944f6bd850a27daedf3225249abf04');
 expect(bytes.subarray(0,5).toString()).toBe('%PDF-');
});
it('numeric engine and original fitness report remain byte-identical to the exact before archive',()=>{
 for(const [live,archive]of [['../src/lib/calculators/bodyFat.ts','bodyFat.ts.before.txt'],['../reports/originality-fitness-wave-3.json','originality-fitness-wave-3.json.before.txt']])expect(readFileSync(new URL(live,import.meta.url))).toEqual(readFileSync(new URL(base+archive,import.meta.url)));
});
it('source getter implementation and all prior source records remain intact',()=>{
 const links=literal(current,'methodLinks'),labels=literal(current,'methodLabels'),byId=literal(current,'methodsById');
 for(const [key,url]of Object.entries(oldLinks))expect(links[key]).toBe(url);
 expect(Object.keys(links).filter(key=>!Object.hasOwn(oldLinks,key))).toEqual(['armyHistoricalCoefficients']);
 for(const locale of locales)for(const [key,label]of Object.entries(oldLabels[locale]))expect(labels[locale][key]).toBe(label);
 for(const [id,keys]of Object.entries(oldById))expect(byId[id]).toEqual(id==='body-fat-calculator'?[...keys,'armyHistoricalCoefficients']:keys);
 function getter(text:string){const s=ts.createSourceFile('fitness.ts',text,ts.ScriptTarget.ES2022,true);return s.statements.find(x=>ts.isFunctionDeclaration(x)&&x.name?.text==='getFitnessMethodSources')?.getText(s);}
 expect(getter(current)).toBe(getter(before));
});
