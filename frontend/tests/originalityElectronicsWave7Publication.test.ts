import { expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getElectronicsWave7MethodSources } from '../src/data/electronicsWave7MethodSources';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { definition as d0 } from '../src/calculators/battery-charge-time/definition';
import { definition as d1 } from '../src/calculators/battery-runtime/definition';
import { definition as d2 } from '../src/calculators/battery-series-parallel/definition';
import { definition as d3 } from '../src/calculators/resistor-network/definition';
import { definition as d4 } from '../src/calculators/capacitor-network/definition';
import { definition as d5 } from '../src/calculators/capacitor-basics/definition';
import { definition as d6 } from '../src/calculators/kva-kw/definition';
import { definition as d7 } from '../src/calculators/single-phase/definition';
const tools=[d0,d1,d2,d3,d4,d5,d6,d7];
const paths=[["/ru/electronics/battery-charge-time/", "/en/electronics/battery-charge-time-calculator/", "/uk/elektronika/chas-zaryadzhannya/", "/de/elektronik/akku-ladezeit-rechner/", "/es/electronica/tiempo-de-carga-de-bateria/"], ["/ru/electronics/battery-runtime/", "/en/electronics/battery-runtime-calculator/", "/uk/elektronika/chas-roboty-akumulyatora/", "/de/elektronik/akku-laufzeit-rechner/", "/es/electronica/autonomia-de-bateria/"], ["/ru/electronics/battery-series-parallel/", "/en/electronics/battery-series-parallel-calculator/", "/uk/elektronika/batareyi-zednannya/", "/de/elektronik/akkupack-reihe-parallel/", "/es/electronica/baterias-en-serie-y-paralelo/"], ["/ru/electronics/resistor-network/", "/en/electronics/resistor-network-calculator/", "/uk/elektronika/zednannya-rezystoriv/", "/de/elektronik/widerstaende-reihe-parallel/", "/es/electronica/red-de-resistencias/"], ["/ru/electronics/kondensatory-v-cepi/", "/en/electronics/capacitors-in-series-parallel/", "/uk/elektronika/kondensatory-v-koli/", "/de/elektronik/kondensatoren-reihe-parallel/", "/es/electronica/condensadores-en-serie-y-paralelo/"], ["/ru/electronics/zaryad-kondensatora/", "/en/electronics/capacitor-charge-energy/", "/uk/elektronika/zaryad-kondensatora/", "/de/elektronik/kondensator-ladung-energie/", "/es/electronica/carga-y-energia-de-un-condensador/"], ["/ru/electronics/kva-v-kvt/", "/en/electronics/kva-to-kw/", "/uk/elektronika/kva-v-kvt/", "/de/elektronik/kva-in-kw/", "/es/electronica/de-kva-a-kw/"], ["/ru/electronics/single-phase-power/", "/en/electronics/single-phase-power-calculator/", "/uk/elektronika/odnofazna-potuzhnist/", "/de/elektronik/einphasige-leistung/", "/es/electronica/potencia-monofasica/"]];
const locales=['ru','en','uk','de','es'] as const;
const units:Record<string,string>={'А·ч':'Ah','А':'A','В':'V','Вт':'W','Ом':'Ω','мкФ':'µF','мкКл':'µC','кВт':'kW','кВА':'kVA','%':'%','1':'1'};
const fixtures=[{capacityAh:50,currentA:10,efficiency:100},{capacity:100,voltage:12,load:200,dod:80,efficiency:90},{cells:12,series:3,parallel:4,cellVoltage:3.7,cellCapacity:3.4},{mode:'parallel',resistances:'100 220 330'},{mode:'series',capacitances:'100 220'},{mode:'charge',c:100,v:-12},{mode:'kw',kva:5,pf:.8},{mode:'P',voltage:230,current:8,powerFactor:.9}] as const;
const active=['capacityAh','capacity','cells','resistances','capacitances','c','kva','voltage'];
for(const [i,tool]of tools.entries())for(const [l,locale]of locales.entries())it(tool.id+'/'+locale+' actual published body, route, units, sources and runtime',()=>{
 const page=getCalculatorById(tool.id,locale)!;const owned=locale==='ru'?tool.presentation:tool.copy![locale]!;
 expect(page.fullPath).toBe(paths[i][l]);expect(page.name).toBe(owned.name);expect(page.h1).toBe(owned.h1);expect(page.seoTitle).toBe(owned.seoTitle);
 expect(page.seoContent).toEqual({intro:owned.longDescription,howItWorks:owned.howItWorks,example:owned.example,tips:owned.howToUse.join(' '),faq:owned.faq});
 expect(page.disclaimer).toBe(owned.disclaimer);expect(page.howToUse).toEqual(owned.howToUse);
 for(const source of getElectronicsWave7MethodSources(tool.id,locale))expect(getCalculatorEditorial(page,locale).sources).toContainEqual(source);
 for(const raw of tool.presentation.fields.filter(f=>f.type==='number')){
  const field=page.fields.find(f=>f.name===raw.name)!;
  const expected=locale==='ru'?raw.unit:locale==='uk'?(raw.unit==='А·ч'?'А·год':raw.unit):units[raw.unit!];
  expect(fieldUnitLabel(field,locale,tool.id)).toBe(expected);
 }
 const runtime=runtimeFor(tool.id);const input=fixtures[i];
 expect(runtime.compute(input)).toEqual(tool.compute(input));
 const result=localizeResult(runtime.compute(input),locale,tool.id,runtime);
 const invalid=localizeResult(runtime.compute({...input,[active[i]]:true}),locale,tool.id,runtime);
 expect(invalid.primary.value).toBe('—');expect(invalid.secondary[0].accent).toBe('red');
 if(locale!=='ru'){const foreign=locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/;expect(JSON.stringify(result)).not.toMatch(foreign);expect(JSON.stringify(invalid)).not.toMatch(foreign);}
 if(tool.id==='capacitor-basics')expect(page.fields.filter(f=>isFieldVisible(f,{mode:'charge'})).map(f=>f.name)).toEqual(['mode','c','v']);
 if(tool.id==='kva-kw')expect(page.fields.filter(f=>isFieldVisible(f,{mode:'kw'})).map(f=>f.name)).toEqual(['mode','kva','pf']);
});
