import type { CalculatorContextualField } from '../../lib/platform/types';
const labels={
 ru:{d:'Внутренний диаметр',side:'Сторона квадратного основания',height:'Внутренняя высота',length:'Внутренняя длина цилиндра',capsule:'Длина цилиндрической части'},
 en:{d:'Internal diameter',side:'Square-base side',height:'Internal height',length:'Internal cylinder length',capsule:'Length of cylindrical part'},
 uk:{d:'Внутрішній діаметр',side:'Сторона квадратної основи',height:'Внутрішня висота',length:'Внутрішня довжина циліндра',capsule:'Довжина циліндричної частини'},
 de:{d:'Innendurchmesser',side:'Seite der quadratischen Grundfläche',height:'Innenhöhe',length:'Innere Zylinderlänge',capsule:'Länge des zylindrischen Teils'},
 es:{d:'Diámetro interior',side:'Lado de base cuadrada',height:'Altura interior',length:'Longitud interior del cilindro',capsule:'Longitud de la parte cilíndrica'},
};
const capsuleHelp={ru:'Общая высота капсулы равна этой длине плюс диаметр. Налив оценивается линейно.',en:'Total capsule height is this length plus diameter. Fill is estimated linearly.',uk:'Загальна висота капсули дорівнює цій довжині плюс діаметр. Налив оцінюється лінійно.',de:'Gesamthöhe der Kapsel ist diese Länge plus Durchmesser. Füllung wird linear geschätzt.',es:'La altura total de la cápsula es esta longitud más el diámetro. El llenado se estima linealmente.'};
export const contextualField:CalculatorContextualField=(field,values,locale)=>{
 const shape=values.shape===undefined?'vertical-cylinder':values.shape;
 if(shape!=='vertical-cylinder'&&shape!=='horizontal-cylinder'&&shape!=='rect'&&shape!=='capsule')return field;
 const key=locale==='ru'||locale==='uk'||locale==='de'||locale==='es'?locale:'en',native=labels[key];
 if(field.name==='d')return {...field,label:shape==='rect'?native.side:native.d};
 if(field.name==='len')return {...field,label:shape==='capsule'?native.capsule:shape==='horizontal-cylinder'?native.length:native.height,...(shape==='capsule'?{help:[field.help,capsuleHelp[key]].filter(Boolean).join(' ')}:{})};
 return field;
};
