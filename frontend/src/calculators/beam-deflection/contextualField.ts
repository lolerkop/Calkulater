import type { CalculatorContextualField } from '../../lib/platform/types';
const help = {
  ru: { uniform:'Равномерная нагрузка на всю длину балки, кН на метр.', point:'Одна сосредоточенная сила в середине пролёта, кН.' },
  en: { uniform:'Uniform load over the whole span, kN per metre.', point:'One concentrated force at midspan, kN.' },
  uk: { uniform:'Рівномірне навантаження по всій довжині балки, кН на метр.', point:'Одна зосереджена сила посередині прольоту, кН.' },
  de: { uniform:'Gleichmäßig verteilte Last über die gesamte Stützweite, kN je Meter.', point:'Eine Einzellast in der Mitte der Stützweite, kN.' },
  es: { uniform:'Carga uniforme en toda la luz, kN por metro.', point:'Una fuerza concentrada en el centro de la luz, kN.' },
};
export const contextualField:CalculatorContextualField = (field,values,locale)=>{
  if(field.name!=='load')return field;
  const scheme=values.scheme===undefined?'uniform':values.scheme;
  if(scheme!=='uniform'&&scheme!=='point')return field;
  const native=help[locale==='ru'||locale==='uk'||locale==='de'||locale==='es'?locale:'en'];
  const uniformUnit=locale==='ru'||locale==='uk'?'кН/м':'kN/m';
  const pointUnit=locale==='ru'||locale==='uk'?'кН':'kN';
  return {...field,unit:scheme==='uniform'?uniformUnit:pointUnit,help:[field.help,native[scheme]].filter(Boolean).join(' ')};
};
