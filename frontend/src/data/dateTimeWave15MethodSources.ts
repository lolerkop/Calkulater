import type {EditorialSource} from './calculatorEditorial';
type Labels=Record<'ru'|'en'|'uk'|'de'|'es',string>;
const calendar={href:'https://eclipse.gsfc.nasa.gov/SEhelp/calendars.html',label:{
 ru:'NASA, раздел 2.1: григорианское правило и продолженный календарь; правила годовщин и сдвига выбирает эта модель',
 en:'NASA, section 2.1: Gregorian leap rule and proleptic dates; anniversary and shift conventions belong to this model',
 uk:'NASA, розділ 2.1: григоріанське правило і продовжений календар; річниці та зсув визначає ця модель',
 de:'NASA, Abschnitt 2.1: gregorianische Schaltregel und proleptische Daten; Jubiläums- und Verschieberegeln gehören zu diesem Modell',
 es:'NASA, sección 2.1: regla gregoriana y fechas prolépticas; aniversarios y desplazamientos son convenios de este modelo',
}satisfies Labels};
const stages={href:'https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep',label:{
 ru:'NHLBI: длительность настоящих циклов меняется; фиксированный блок 90 минут здесь не определяет фазу сна',
 en:'NHLBI: actual cycle length varies; a fixed 90-minute block here cannot identify a sleep stage',
 uk:'NHLBI: тривалість справжніх циклів змінюється; блок 90 хвилин тут не визначає фазу сну',
 de:'NHLBI: echte Zyklen sind unterschiedlich lang; ein fester 90-Minuten-Block erkennt hier keine Schlafphase',
 es:'NHLBI: la duración real de los ciclos varía; el bloque fijo de 90 minutos no identifica una fase del sueño',
}satisfies Labels};
const duration={href:'https://www.cdc.gov/sleep/about/',label:{
 ru:'CDC: рекомендации длительности сна зависят от возраста; блоки формулы не задают личную потребность',
 en:'CDC: sleep duration guidance depends on age; formula blocks do not determine personal sleep needs',
 uk:'CDC: рекомендована тривалість сну залежить від віку; блоки формули не визначають особистої потреби',
 de:'CDC: Schlafdauerempfehlungen hängen vom Alter ab; Formelblöcke bestimmen keinen persönlichen Schlafbedarf',
 es:'CDC: la duración recomendada depende de la edad; los bloques no determinan la necesidad personal de sueño',
}satisfies Labels};
const zones={href:'https://www.iana.org/time-zones',label:{
 ru:'IANA: смещения и летнее время меняются по месту и дате; этот расчёт использует только введённые фиксированные смещения',
 en:'IANA: offsets and daylight-saving rules vary by place and date; this calculation uses only entered fixed offsets',
 uk:'IANA: зміщення й літній час залежать від місця і дати; розрахунок використовує лише введені фіксовані зміщення',
 de:'IANA: Versatz und Sommerzeit hängen von Ort und Datum ab; hier gelten nur die eingegebenen festen Versätze',
 es:'IANA: los desplazamientos y el horario de verano dependen del lugar y fecha; aquí solo se usan los desplazamientos fijos introducidos',
}satisfies Labels};
export function getDateTimeWave15MethodSources(id:string,locale:string):EditorialSource[]{
 const own=id==='sleep-time'?[stages,duration]:id==='timezone-difference'?[zones]:['leap-year','age-calculator','working-days-calculator','date-shift-calculator'].includes(id)?[calendar]:[];
 return own.map(source=>({href:source.href,label:source.label[locale as keyof Labels]??source.label.en}));
}
