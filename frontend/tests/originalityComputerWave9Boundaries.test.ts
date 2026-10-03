import { describe, expect, it } from 'vitest';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { parseLocalizedNumber } from '../src/lib/format';
import type { CalcFunction,CalcResult } from '../src/lib/types';
import { definition as c0 } from '../src/calculators/aspect-ratio/definition';
import { localization as l0 } from '../src/calculators/aspect-ratio/localization';
import { definition as c1 } from '../src/calculators/color-convert/definition';
import { localization as l1 } from '../src/calculators/color-convert/localization';
import { definition as c2 } from '../src/calculators/css-units/definition';
import { localization as l2 } from '../src/calculators/css-units/localization';
import { definition as c3 } from '../src/calculators/download-time/definition';
import { localization as l3 } from '../src/calculators/download-time/localization';
import { definition as c4 } from '../src/calculators/files-on-disk/definition';
import { localization as l4 } from '../src/calculators/files-on-disk/localization';
import { definition as c5 } from '../src/calculators/fps-frametime/definition';
import { localization as l5 } from '../src/calculators/fps-frametime/localization';
import { definition as c6 } from '../src/calculators/internet-traffic/definition';
import { localization as l6 } from '../src/calculators/internet-traffic/localization';
import { definition as c7 } from '../src/calculators/ipv4-subnet/definition';
import { localization as l7 } from '../src/calculators/ipv4-subnet/localization';
import { definition as c8 } from '../src/calculators/modular-scale/definition';
import { localization as l8 } from '../src/calculators/modular-scale/localization';
import { definition as c9 } from '../src/calculators/network-bandwidth/definition';
import { localization as l9 } from '../src/calculators/network-bandwidth/localization';
import { definition as c10 } from '../src/calculators/password-entropy/definition';
import { localization as l10 } from '../src/calculators/password-entropy/localization';
import { definition as c11 } from '../src/calculators/ppi-dpi/definition';
import { localization as l11 } from '../src/calculators/ppi-dpi/localization';
import { definition as c12 } from '../src/calculators/raid/definition';
import { localization as l12 } from '../src/calculators/raid/localization';
import { definition as c13 } from '../src/calculators/tv-monitor-viewing-distance/definition';
import { localization as l13 } from '../src/calculators/tv-monitor-viewing-distance/localization';
import { definition as c14 } from '../src/calculators/unix-timestamp/definition';
import { localization as l14 } from '../src/calculators/unix-timestamp/localization';
import { definition as c15 } from '../src/calculators/video-file-size/definition';
import { localization as l15 } from '../src/calculators/video-file-size/localization';
const tools = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15];
const locs = [l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15];

type Inputs=Parameters<CalcFunction>[0];
const error=(r:CalcResult)=>{expect(r.primary.value).toBe('—');expect(r.secondary.some(x=>x.accent==='red')).toBe(true);expect(JSON.stringify(r)).not.toMatch(/NaN|Infinity/);};
const cases:{i:number,inputs:Inputs,active:string[]}[]=[
 {i:0,inputs:{mode:'reduce',width:1920,height:1080},active:['width','height']},
 {i:0,inputs:{mode:'side',known:'width',side:1280,ratioW:16,ratioH:9},active:['side','ratioW','ratioH']},
 {i:2,inputs:{value:24,fromUnit:'px',toUnit:'rem',rootSize:16,parentSize:16},active:['value','rootSize','parentSize']},
 {i:3,inputs:{size:1,sizeUnit:'gb',speed:100,speedUnit:'mbit'},active:['size','speed']},
 {i:4,inputs:{capacity:1,capacityUnit:'gb',fileSize:100,fileUnit:'mb',reserved:0},active:['capacity','fileSize','reserved']},
 {i:5,inputs:{mode:'fps',fps:60},active:['fps']},{i:5,inputs:{mode:'ms',frameTime:20},active:['frameTime']},
 {i:6,inputs:{mbps:5,hoursPerDay:3,days:30,quotaGb:0},active:['mbps','hoursPerDay','days','quotaGb']},
 {i:7,inputs:{address:'192.168.1.11',prefix:24},active:['prefix']},
 {i:8,inputs:{base:16,ratio:1.25,stepsUp:5,stepsDown:2},active:['base','ratio','stepsUp','stepsDown']},
 {i:9,inputs:{users:50,perUser:5,concurrency:100,overhead:20},active:['users','perUser','concurrency','overhead']},
 {i:10,inputs:{length:12,charset:'alnum',rate:10},active:['length','rate']},
 {i:11,inputs:{w:1920,h:1080,diagonal:15.6},active:['w','h','diagonal']},
 {i:12,inputs:{level:'5',disks:6,sizeTb:4},active:['disks','sizeTb']},
 {i:13,inputs:{diag:55,ratio:'16:9',lines:2160},active:['diag','lines']},
 {i:14,inputs:{mode:'toDate',timestamp:1700000000},active:['timestamp']},
 {i:14,inputs:{mode:'toTimestamp',date:'2000-01-01',hour:0,minute:0,second:0},active:['hour','minute','second']},
 {i:15,inputs:{videoMbps:8,audioKbps:128,minutes:10},active:['videoMbps','audioKbps','minutes']},
];
const enums:{i:number,inputs:Inputs,fields:string[]}[]=[
 {i:0,inputs:{mode:'side',known:'width',side:1280,ratioW:16,ratioH:9},fields:['mode','known']},
 {i:2,inputs:cases[2].inputs,fields:['fromUnit','toUnit']},{i:3,inputs:cases[3].inputs,fields:['sizeUnit','speedUnit']},
 {i:4,inputs:cases[4].inputs,fields:['capacityUnit','fileUnit']},{i:5,inputs:cases[5].inputs,fields:['mode']},
 {i:10,inputs:{length:12,charset:'alnum',rate:10},fields:['charset']},{i:12,inputs:{level:'5',disks:6,sizeTb:4},fields:['level']},
 {i:13,inputs:{diag:55,ratio:'16:9',lines:2160},fields:['ratio']},{i:14,inputs:{mode:'toDate',timestamp:1700000000},fields:['mode']}
];
describe('Computer16 strict active fields, enums, raw-count provenance and range',()=>{
 for(const c of cases)for(const field of c.active)for(const [name,value]of [['blank',''],['whitespace','  '],['malformed','oops'],['boolean true',true],['boolean false',false],['NaN',NaN],['Infinity',Infinity],['-Infinity',-Infinity],['nonzero decimal underflow','1e-400']]as const)it(`${tools[c.i].id}/${c.inputs.mode??'fixed'}:${field} rejects${name}`,()=>error(tools[c.i].compute({...c.inputs,[field]:value} as Inputs)));
 for(const c of enums)for(const field of c.fields)for(const value of ['unsupported','__proto__','constructor',true,'',null,['fps'],{toString:()=> 'fps'}])it(`${tools[c.i].id}:${field} rejects${String(value)}`,()=>error(tools[c.i].compute({...c.inputs,[field]:value} as Inputs)));
 for(const value of [123,true,null,'#ABCD','#FF000080','#GG0000',''])it(`HEX text/opaque scope rejects${String(value)}`,()=>error(c1.compute({hex:value}as Inputs)));
 for(const value of [123,true,null,'256.1.1.1','1.2.3','a.2.3.4','1.2.3.4.5','1.2.3.-1'])it(`IPv4 dotted-decimal input rejects${String(value)}`,()=>error(c7.compute({address:value,prefix:24}as Inputs)));
 for(const date of ['0000-01-01','1900-02-29','2000-02-30','0100-02-29','2024-04-31','2024-00-01','2024-13-01','2024-01-00','2024-01-32','2024-1-01'])it(`Gregorian invalid${date} is rejected rather than normalized`,()=>error(c14.compute({mode:'toTimestamp',date,hour:0,minute:0,second:0})));
 for(const [i,inputs]of [
 [0,{mode:'reduce',width:1.5,height:1080}],[0,{mode:'reduce',width:9007199254740992,height:1080}],
 [0,{mode:'side',side:1,known:'width',ratioW:10000,ratioH:1}],
 [4,{capacity:1,capacityUnit:'gb',fileSize:100,fileUnit:'mb',reserved:100}],
 [4,{capacity:1e16,capacityUnit:'gb',fileSize:1,fileUnit:'gb',reserved:0}],
 [6,{mbps:5,hoursPerDay:25,days:30,quotaGb:0}],
 [8,{base:16,ratio:1.25,stepsUp:21,stepsDown:0}],[8,{base:16,ratio:1.25,stepsUp:2.7,stepsDown:0}],
 [9,{users:1.5,perUser:5,concurrency:100,overhead:20}],[9,{users:10,perUser:5,concurrency:101,overhead:20}],
 [10,{length:1.5,charset:'digits',rate:1}],[10,{length:320,charset:'digits',rate:1}],
 [11,{w:9007199254740992,h:1080,diagonal:15.6}],[11,{w:1920,h:1080,diagonal:1e-320}],
 [12,{level:'10',disks:5,sizeTb:4}],[12,{level:'5',disks:3.5,sizeTb:4}],[12,{level:'5',disks:6,sizeTb:1e308}],
 [13,{diag:55,ratio:'16:9',lines:2160.5}],[14,{mode:'toTimestamp',date:'2000-01-01',hour:1.5,minute:0,second:0}],
 [14,{mode:'toDate',timestamp:253402300800}],[14,{mode:'toDate',timestamp:-62135596801}]
 ]as [number,Inputs][])it(`${tools[i].id} rejects owned domain or representability boundary${JSON.stringify(inputs)}`,()=>error(tools[i].compute(inputs)));
 for(const i of [0,7,8,9,10,11,12,13,14])for(const locale of ['ru','en','uk','de','es']as const)it(`${tools[i].id}/${locale} preserves original fractional count provenance`,()=>{const field={0:'width',7:'prefix',8:'stepsUp',9:'users',10:'length',11:'w',12:'disks',13:'lines',14:'timestamp'}[i]!;const lexical=locale==='en'?'1.0000000000000001':'1,0000000000000001';const e=tools[i].validate!({values:{[field]:lexical},locale,fields:tools[i].presentation.fields,parseNumber:text=>parseLocalizedNumber(text,locale)});expect(e[field]).toBeTruthy();});
 for(const[i,field]of[[4,'reserved'],[6,'quotaGb'],[9,'overhead']]as const)it(`${tools[i].id} omitted optional${field} means0; malformed explicit input is not omitted`,()=>{const c=cases.find(x=>x.i===i)!;const inputs={...c.inputs};delete inputs[field];expect(tools[i].compute(inputs).primary.value).not.toBe('—');error(tools[i].compute({...inputs,[field]:'bad'}));});
 it('valid enum wrapped in an array or object is still malformed',()=>{for(const [i,field,valid]of [[0,'mode','side'],[2,'fromUnit','px'],[3,'sizeUnit','gb'],[4,'capacityUnit','gb'],[5,'mode','fps'],[10,'charset','alnum'],[12,'level','5'],[13,'ratio','16:9'],[14,'mode','toDate']]as const){const c=enums.find(x=>x.i===i)!;for(const v of [[valid],{toString:()=>valid},null])error(tools[i].compute({...c.inputs,[field]:v}as Inputs));}});
 it('FPS ignores stale invalid unknown input in both directions',()=>{expect(c5.compute({mode:'fps',fps:60,frameTime:true}).primary.value).toBe('16,667 мс');expect(c5.compute({mode:'ms',frameTime:20,fps:'bad'}).primary.value).toBe('50,00 FPS');});
 for(const locale of ['ru','en','uk','de','es']as const)it(`selected field units are real enum units without a fallback/${locale}`,()=>{for(const [tool,name,selector,from,to]of[[c2,'value','fromUnit','px','rem'],[c3,'size','sizeUnit','gb','mib'],[c3,'speed','speedUnit','mbit','mbyte'],[c4,'capacity','capacityUnit','gb','gib'],[c4,'fileSize','fileUnit','mb','mib']]as const){const f=tool.presentation.fields.find(x=>x.name===name)!;expect(tool.contextualField!(f,{[selector]:from},locale).unit).not.toBe(tool.contextualField!(f,{[selector]:to},locale).unit);expect(tool.contextualField!(f,{[selector]:'__proto__'},locale).unit).toBeUndefined();}});
});
