import type { EditorialSource } from './calculatorEditorial';
// Primary bodies read by AI on 2026-10-02; bounded support, no human approval.
const sources = {
  inch: { href: 'https://www.nist.gov/pml/owm/si-units-length', label: { ru:'NIST: точное определение дюйма',en:'NIST: exact definition of the inch',uk:'NIST: точне визначення дюйма',de:'NIST: exakte Definition des Zolls',es:'NIST: definición exacta de la pulgada' } },
  outside: { href: 'https://www.aa.com/pubcontent/en_EU/travel-info/baggage/checked-baggage-policy.html', label: { ru:'American Airlines: пример суммы внешних габаритов и условий перевозчика',en:'American Airlines: an example of outside dimensions and carrier conditions',uk:'American Airlines: приклад суми зовнішніх габаритів та умов перевізника',de:'American Airlines: Beispiel für Außenmaße und Beförderungsbedingungen',es:'American Airlines: ejemplo de dimensiones exteriores y condiciones del operador' } },
  separate: { href: 'https://www.aa.com/pubcontent/en_US/travel-info/baggage/oversize-and-overweight-baggage.html', label: { ru:'American Airlines: пример ограничений отдельных сторон по направлению',en:'American Airlines: a route-specific example of individual dimension limits',uk:'American Airlines: приклад обмежень окремих сторін за напрямком',de:'American Airlines: Beispiel streckenabhängiger Grenzen einzelner Seiten',es:'American Airlines: ejemplo de límites por lado según la ruta' } },
  average: { href: 'https://help.prusa3d.com/article/faq-frequently-asked-questions_1932', label: { ru:'Prusa: измеренная средняя мощность при указанных условиях',en:'Prusa: measured average power under stated conditions',uk:'Prusa: виміряна середня потужність за вказаних умов',de:'Prusa: gemessene mittlere Leistung unter angegebenen Bedingungen',es:'Prusa: potencia media medida en condiciones especificadas' } },
};
const methods:Record<string,readonly (keyof typeof sources)[]>={'luggage-linear':['inch','outside','separate'],'print-3d-cost':['average']};
export function getHouseholdWave17MethodSources(id:string,locale:string):EditorialSource[]{
 return (Object.hasOwn(methods,id)?methods[id]:[]).map(key=>({href:sources[key].href,label:sources[key].label[locale as keyof typeof sources[typeof key]['label']]??sources[key].label.en}));
}
