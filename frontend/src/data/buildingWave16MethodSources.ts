import type { EditorialSource } from './calculatorEditorial';
type Locale='ru'|'en'|'uk'|'de'|'es';
// Actual bounded primary passages read on 2026-10-02. These sources support
// limitations, not six timber constants, linear moisture correction or reserve percentages.
const wood='https://research.fs.usda.gov/download/treesearch/62243.pdf';
const sealant='https://usa.sika.com/en/construction-products/joint-sealants/architectural-sealants/polyurethane/sikaflex-np-2.html';
const labels:Record<Locale,{wood:string;sealant:string}>={
 ru:{wood:'USDA, Wood Handbook, гл. 4: влажность по сухой массе и изменчивость плотности; не подтверждение параметров модели',sealant:'Sikaflex NP 2: глубина и подкладочный шнур для конкретного продукта; не универсальное правило расхода'},
 en:{wood:'USDA Wood Handbook, chapter 4: dry-mass moisture and density variation; not verification of model parameters',sealant:'Sikaflex NP 2: product-specific joint depth and backer rod; not a universal consumption rule'},
 uk:{wood:'USDA, Wood Handbook, розд. 4: вологість за сухою масою та мінливість густини; не підтвердження параметрів моделі',sealant:'Sikaflex NP 2: глибина й підкладний шнур конкретного продукту; не універсальне правило витрати'},
 de:{wood:'USDA Wood Handbook, Kapitel 4: Feuchte auf Trockenmassebasis und Dichtestreuung; keine Bestätigung der Modellparameter',sealant:'Sikaflex NP 2: produktspezifische Fugentiefe und Hinterfüllprofil; keine allgemeine Verbrauchsregel'},
 es:{wood:'USDA Wood Handbook, capítulo 4: humedad sobre masa seca y variación de densidad; no verifica parámetros del modelo',sealant:'Sikaflex NP 2: profundidad y fondo de junta específicos del producto; no regla universal de consumo'},
};
export function getBuildingWave16MethodSources(id:string,locale:string):EditorialSource[]{
 const native:Locale=locale==='ru'||locale==='uk'||locale==='de'||locale==='es'?locale:'en';
 if(id==='wood-weight')return [{href:wood,label:labels[native].wood}];
 if(id==='sealant-volume')return [{href:sealant,label:labels[native].sealant}];
 return [];
}
