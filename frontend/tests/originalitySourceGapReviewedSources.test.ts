import {readFileSync} from 'node:fs';
import {expect,it} from 'vitest';
import ts from 'typescript';
import {getReviewedMethodSources,getReviewedSourceCaveat} from '../src/data/reviewedMethodSources';

const languages=['ru','en','uk','de','es'] as const;
const scan='https://vtda.org/pubs/InformationDisplay_SIDJournal/InformationDisplay_V02N03-1965%20MayJune.pdf';
const noxDOI='https://doi.org/10.1002/j.2637-496X.1965.tb05118.x';
const jama='https://jamanetwork.com/journals/jama/article-abstract/337382';
const experiment='https://onlinelibrary.wiley.com/doi/10.1002/fsn3.2319';
const nativeBoundaries={
 ru:{obsolete:'устаревшая',historic:'историческое',notSI:'не подтверждает',originalMiles:'в милях',coefficientDifference:'отличается',notUniversal:'не доказывает',laboratory:'лабораторное'},
 en:{obsolete:'obsolete',historic:'historical',notSI:'does not establish',originalMiles:'uses miles',coefficientDifference:'different',notUniversal:'does not establish',laboratory:'laboratory'},
 uk:{obsolete:'застаріла',historic:'історичне',notSI:'не підтверджує',originalMiles:'в милях',coefficientDifference:'відрізняється',notUniversal:'не доводить',laboratory:'лабораторного'},
 de:{obsolete:'veraltete',historic:'historischen',notSI:'keine heutige Anerkennung',originalMiles:'Meilen',coefficientDifference:'anderen',notUniversal:'keine Genauigkeit',laboratory:'Labormessung'},
 es:{obsolete:'obsoleta',historic:'histórica',notSI:'no demuestra',originalMiles:'millas',coefficientDifference:'distinta',notUniversal:'no demuestra',laboratory:'laboratorio'},
};
for(const language of languages){
 it(language+': historical nox links use the read scan plus the exact bibliographic DOI',()=>{
  const s=getReviewedMethodSources('convert-illuminance',language);
  expect(s.map(x=>x.href)).toEqual(['https://www.bipm.org/documents/d/guest/si-brochure-9-en-pdf','https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9',scan,noxDOI]);
  expect(s[2].label).toContain('Luxenberg (1965)');expect(s[2].label).toContain('I');expect(s[3].label).toContain('DOI');
  if(['en','de','es'].includes(language))expect(JSON.stringify(s)).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
 it(language+': nox caveat preserves0.001 historical factor without modern SI/lighting endorsement',()=>{
  const c=getReviewedSourceCaveat('convert-illuminance',language)!;const b=nativeBoundaries[language];
  for(const phrase of [b.obsolete,b.historic,b.notSI,'Luxenberg (1965)','BIPM','NIST','SI'])expect(c).toContain(phrase);
  expect(c).toMatch(/1 nox = 0[.,]001 lx/);expect(c).not.toMatch(/not yet been confirmed|пока не подтверждён|поки не підтверджено|noch nicht bestätigt|Aún no se ha confirmado/);
 });
 it(language+': original Cooper study and direct metric-estimator use remain separately identified',()=>{
  const s=getReviewedMethodSources('vo2max',language);
  expect(s.map(x=>x.href)).toEqual(['https://pubmed.ncbi.nlm.nih.gov/14624296/',jama,experiment,'https://www.cooperinstitute.org/blog/50-years-of-the-cooper-12-minute-run']);
  expect(s[1].label).toContain('Cooper (1968)');expect(s[2].label).toContain('Soleimani');expect(s[2].label).toMatch(/\(2021\), §2\.6/);expect(s[2].label).toMatch(/\(D−504[.,]9\)\/44[.,]73/);
  expect(JSON.stringify(s)).not.toMatch(/unverified|неподтверждёнными|непідтвердженими|ungeprüft|sin verificar/);
 });
 it(language+': Cooper caveat bounds coefficient attribution and population/laboratory validity',()=>{
  const c=getReviewedSourceCaveat('vo2max',language)!;const b=nativeBoundaries[language];
  for(const phrase of [b.originalMiles,b.coefficientDifference,b.notUniversal,b.laboratory,'1968','Soleimani','2021','§2.6'])expect(c).toContain(phrase);
  expect(c).toMatch(/\(D−504[.,]9\)\/44[.,]73/);
 });
}
it('unsupported languages use explicit English caveats; unrelated IDs gain no caveat',()=>{
 for(const id of ['convert-illuminance','vo2max'])for(const locale of ['fr','toString','__proto__'])expect(getReviewedSourceCaveat(id,locale)).toBe(getReviewedSourceCaveat(id,'en'));
 for(const id of ['convert-length','water-intake','constructor','__proto__','missing'])expect(getReviewedSourceCaveat(id,'en')).toBeUndefined();
});

// This narrow source-only amendment must leave every unrelated subject entry
// and the source-getter algorithm identical to the archived pre-amendment file.
function declarations(text:string){const source=ts.createSourceFile('reviewed.ts',text,ts.ScriptTarget.ES2022,true);const objects:Record<string,Map<string,string>>={};let getter='';
 for(const statement of source.statements){
  if(ts.isFunctionDeclaration(statement)&&statement.name?.text==='getReviewedMethodSources')getter=statement.getText(source);
  if(!ts.isVariableStatement(statement))continue;
  for(const d of statement.declarationList.declarations){if(!ts.isIdentifier(d.name)||!d.initializer)continue;let value=d.initializer;while(ts.isAsExpression(value))value=value.expression;if(!ts.isObjectLiteralExpression(value))continue;
   objects[d.name.text]=new Map(value.properties.filter(ts.isPropertyAssignment).map(x=>[x.name.getText(source).replace(/^['"]|['"]$/g,''),x.getText(source)]));
  }
 }return{objects,getter};
}
it('only the two intended source maps change; unrelated source entries/getter remain byte-identical',()=>{
 const old=declarations(readFileSync(new URL('../reports/originality-source-gap-amendment-before.ts.txt',import.meta.url),'utf8'));
 const current=declarations(readFileSync(new URL('../src/data/reviewedMethodSources.ts',import.meta.url),'utf8'));
 expect(current.getter).toBe(old.getter);
 for(const group of ['sources','converterSources','healthSources'])for(const [key,text]of old.objects[group]){if(group==='converterSources'&&key==='convert-illuminance'||group==='healthSources'&&key==='vo2max')continue;expect(current.objects[group].get(key)).toBe(text);}
 expect([...current.objects.sources.keys()].filter(k=>!old.objects.sources.has(k))).toEqual(['noxHistorical','noxArticle']);
 for(const group of ['converterSources','healthSources'])expect([...current.objects[group].keys()]).toEqual([...old.objects[group].keys()]);
});
