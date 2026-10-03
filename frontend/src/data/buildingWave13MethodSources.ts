import type { EditorialSource } from './calculatorEditorial';
type Locale = 'ru'|'en'|'uk'|'de'|'es';
type Source = 'ach'|'deflection'|'stress'|'epoxy'|'plaster';
// Actual primary bodies read on 2026-10-02. Scope is deliberately limited:
// geometric identities and unverified procurement coefficients have no external citation.
const urls:Record<Source,string>={
 ach:'https://www.cdc.gov/niosh/ventilation/faq/index.html',
 deflection:'https://ocw.mit.edu/courses/3-11-mechanics-of-materials-fall-1999/13534abb67b86d2fb8ee11a1f4f2b8c4_MIT3_11F99_bdisp.pdf',
 stress:'https://ocw.mit.edu/courses/3-11-mechanics-of-materials-fall-1999/96d839b02e4a6c63cf8031800e89cccd_MIT3_11F99_bstress.pdf',
 epoxy:'https://www.westsystem.com/instruction/epoxy-basics/dispensing-and-mixing/',
 plaster:'https://www.knauf.ru/catalog/sukhie-stroitelnye-smesi-i-gotovye-sostavy/shtukaturki/knauf-rotband/',
};
const labels:Record<Locale,Record<Source,string>>={
 ru:{ach:'CDC/NIOSH: связь кратности, расхода и объёма; не выбор нормативной кратности',deflection:'MIT, Roylance: упругий прогиб балки на двух опорах, центральная сила и равномерная нагрузка',stress:'MIT, Roylance: упругое напряжение σ = −My/I и момент инерции прямоугольника',epoxy:'WEST SYSTEM: масса и объём при смешивании — пропорция зависит от конкретного продукта',plaster:'КНАУФ-Ротбанд: примерно 8,5 кг/м² при 10 мм, пример 0,85 кг/м²/мм'},
 en:{ach:'CDC/NIOSH: air-change rate, airflow and volume; not selection of a required rate',deflection:'MIT, Roylance: elastic simply supported beam deflection, midspan force and uniform load',stress:'MIT, Roylance: elastic stress σ = −My/I and rectangular second moment of area',epoxy:'WEST SYSTEM: mass and volume mixing ratios depend on the specific product',plaster:'KNAUF Rotband: about 8.5 kg/m² at 10 mm, illustrating 0.85 kg/m²/mm'},
 uk:{ach:'CDC/NIOSH: зв’язок кратності, витрати й об’єму; не вибір нормативної кратності',deflection:'MIT, Roylance: пружний прогин балки на двох опорах, центральна сила й рівномірне навантаження',stress:'MIT, Roylance: пружне напруження σ = −My/I та момент інерції прямокутника',epoxy:'WEST SYSTEM: масові й об’ємні пропорції змішування залежать від конкретного продукту',plaster:'КНАУФ-Ротбанд: приблизно 8,5 кг/м² за 10 мм, приклад 0,85 кг/м²/мм'},
 de:{ach:'CDC/NIOSH: Luftwechselrate, Volumenstrom und Raumvolumen; keine Auswahl eines Sollwerts',deflection:'MIT, Roylance: elastische Durchbiegung eines beidseitig gelagerten Balkens, Mittellast und Gleichlast',stress:'MIT, Roylance: elastische Spannung σ = −My/I und Flächenträgheitsmoment des Rechtecks',epoxy:'WEST SYSTEM: Mischungsverhältnisse nach Masse und Volumen sind produktspezifisch',plaster:'KNAUF Rotband: etwa 8,5 kg/m² bei 10 mm, Beispiel für 0,85 kg/m²/mm'},
 es:{ach:'CDC/NIOSH: renovaciones de aire, caudal y volumen; no elección de una tasa requerida',deflection:'MIT, Roylance: flecha elástica de una viga simplemente apoyada, fuerza central y carga uniforme',stress:'MIT, Roylance: tensión elástica σ = −My/I y segundo momento de área rectangular',epoxy:'WEST SYSTEM: proporciones de mezcla en masa y volumen según el producto concreto',plaster:'KNAUF Rotband: unos 8,5 kg/m² a 10 mm, ejemplo de 0,85 kg/m²/mm'},
};
const byId:Record<string,Source>={'air-exchange':'ach','beam-deflection':'deflection','beam-stress':'stress','epoxy-volume':'epoxy','plaster':'plaster'};
export function getBuildingWave13MethodSources(id:string,locale:string):EditorialSource[]{
 const source=Object.hasOwn(byId,id)?byId[id]:undefined;
 if(!source)return [];
 const native:Locale=locale==='ru'||locale==='uk'||locale==='de'||locale==='es'?locale:'en';
 return [{label:labels[native][source],href:urls[source]}];
}
