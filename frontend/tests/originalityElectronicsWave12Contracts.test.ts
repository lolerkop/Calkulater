import {describe,expect,it} from 'vitest';
import type {CalcFunction,CalcResult} from '../src/lib/types';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import {isFieldVisible} from '../src/lib/fieldVisibility';
import {getElectronicsWave12MethodSources} from '../src/data/electronicsWave12MethodSources';
import {definition as d0} from '../src/calculators/coaxial-cable-impedance/definition';
import {localization as l0} from '../src/calculators/coaxial-cable-impedance/localization';
import {definition as d1} from '../src/calculators/headphone-power/definition';
import {localization as l1} from '../src/calculators/headphone-power/localization';
import {definition as d2} from '../src/calculators/inverter-power/definition';
import {localization as l2} from '../src/calculators/inverter-power/localization';
import {definition as d3} from '../src/calculators/lc-resonance/definition';
import {localization as l3} from '../src/calculators/lc-resonance/localization';
import {definition as d4} from '../src/calculators/led-resistor/definition';
import {localization as l4} from '../src/calculators/led-resistor/localization';
import {definition as d5} from '../src/calculators/ne555-timer-astable/definition';
import {localization as l5} from '../src/calculators/ne555-timer-astable/localization';
import {definition as d6} from '../src/calculators/rc-filter/definition';
import {localization as l6} from '../src/calculators/rc-filter/localization';
import {definition as d7} from '../src/calculators/resistor-color/definition';
import {localization as l7} from '../src/calculators/resistor-color/localization';
import {definition as d8} from '../src/calculators/rms-voltage/definition';
import {localization as l8} from '../src/calculators/rms-voltage/localization';
import {definition as d9} from '../src/calculators/transformer-ratio/definition';
import {localization as l9} from '../src/calculators/transformer-ratio/localization';
import {definition as d10} from '../src/calculators/voltage-divider/definition';
import {localization as l10} from '../src/calculators/voltage-divider/localization';
const tools=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10];
const locs=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10];

const locales=['ru','en','uk','de','es'] as const;
type Inputs=Parameters<CalcFunction>[0];
const numeric=(text:string)=>{const t=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const close=(text:string,expected:number,tolerance=0.00055)=>{const n=numeric(text);expect(Number.isFinite(n)).toBe(true);if(expected===0)expect(n).toBe(0);else expect(Math.abs(n/expected-1)).toBeLessThan(tolerance);};
const error=(r:CalcResult)=>{expect(r.primary.value).toBe('—');expect(r.secondary[0].accent).toBe('red');};
const defaults=(i:number):Inputs=>{const values:Inputs={};for(const field of tools[i].presentation.fields)if(field.defaultValue!==undefined)values[field.name]=field.defaultValue;return values;};

const cases:{tool:number;inputs:Inputs;primary:number;secondary:[string,number][]}[]=[
  {
    "tool": 0,
    "inputs": {
      "dIn": 1,
      "dOut": 2,
      "eps": 1
    },
    "primary": 41.5421394016294,
    "secondary": [
      [
        "Коэффициент укорочения",
        1
      ],
      [
        "Задержка на метр",
        3.33564095198152
      ]
    ]
  },
  {
    "tool": 1,
    "inputs": {
      "sensitivity": -5,
      "impedance": 100,
      "power": 4
    },
    "primary": 1.02059991327962,
    "secondary": [
      [
        "Напряжение на выходе",
        0.632455532033676
      ],
      [
        "Ток",
        6.32455532033676
      ]
    ]
  },
  {
    "tool": 1,
    "inputs": {
      "sensitivity": 100,
      "impedance": 1e+308,
      "power": 1e+308
    },
    "primary": 3180,
    "secondary": [
      [
        "Напряжение на выходе",
        3.162277660168379e+306
      ],
      [
        "Ток",
        31.622776601683793
      ]
    ]
  },
  {
    "tool": 1,
    "inputs": {
      "sensitivity": 100,
      "impedance": 1e+308,
      "power": 5e-324
    },
    "primary": -3133.062153431158,
    "secondary": [
      [
        "Напряжение на выходе",
        7.028980337440464e-10
      ],
      [
        "Ток",
        7.02898034e-315
      ]
    ]
  },
  {
    "tool": 1,
    "inputs": {
      "sensitivity": 0,
      "impedance": 32,
      "power": 1
    },
    "primary": 0,
    "secondary": [
      [
        "Прибавка от мощности",
        0
      ]
    ]
  },
  {
    "tool": 2,
    "inputs": {
      "outputPower": 1000,
      "efficiency": 80,
      "batteryVoltage": 25
    },
    "primary": 1250,
    "secondary": [
      [
        "Ток от батареи",
        50
      ],
      [
        "Потери",
        250
      ]
    ]
  },
  {
    "tool": 2,
    "inputs": {
      "outputPower": 1e+300,
      "efficiency": 99.99999999999999,
      "batteryVoltage": 1e+300
    },
    "primary": 1e+300,
    "secondary": [
      [
        "Ток от батареи",
        1
      ],
      [
        "Потери",
        1.4210854715202005e+284
      ]
    ]
  },
  {
    "tool": 3,
    "inputs": {
      "l": 1e+200,
      "c": 1e-200
    },
    "primary": 5032921.210448704,
    "secondary": [
      [
        "Волновое сопротивление",
        3.162277660168379e+201
      ]
    ]
  },
  {
    "tool": 3,
    "inputs": {
      "l": 100,
      "c": 100
    },
    "primary": 50329.21210448704,
    "secondary": [
      [
        "Период",
        1.9869176531592203e-05
      ],
      [
        "Волновое сопротивление",
        31.622776601683793
      ]
    ]
  },
  {
    "tool": 4,
    "inputs": {
      "supplyVoltage": 5,
      "forwardVoltage": 2,
      "current": 0.02,
      "currentUnit": "a"
    },
    "primary": 150,
    "secondary": [
      [
        "Рабочий ток",
        20
      ],
      [
        "Мощность на резисторе",
        0.06
      ],
      [
        "Мощность на светодиоде",
        0.04
      ]
    ]
  },
  {
    "tool": 4,
    "inputs": {
      "supplyVoltage": 1e+200,
      "forwardVoltage": 1,
      "current": 1e-100,
      "currentUnit": "ma"
    },
    "primary": 1e+303,
    "secondary": [
      [
        "Мощность на резисторе",
        1e+97
      ],
      [
        "Мощность на светодиоде",
        1e-103
      ]
    ]
  },
  {
    "tool": 5,
    "inputs": {
      "r1": 10,
      "r2": 47,
      "c": 100
    },
    "primary": 138.7206962393234,
    "secondary": [
      [
        "Период",
        7.208730677823431
      ],
      [
        "Время высокого уровня",
        3.950938929191688
      ],
      [
        "Время низкого уровня",
        3.257791748631743
      ],
      [
        "Доля высокого уровня",
        54.80769230769231
      ]
    ]
  },
  {
    "tool": 5,
    "inputs": {
      "r1": 1e+200,
      "r2": 1e+200,
      "c": 1e-200
    },
    "primary": 480898.34696298785,
    "secondary": [
      [
        "Период",
        0.002079441541679836
      ],
      [
        "Доля высокого уровня",
        66.66666666666667
      ]
    ]
  },
  {
    "tool": 6,
    "inputs": {
      "r": 1e+308,
      "c": 1e-308
    },
    "primary": 159154943.09189534,
    "secondary": [
      [
        "Постоянная времени",
        1e-09
      ],
      [
        "Заряд почти до конца",
        5e-09
      ]
    ]
  },
  {
    "tool": 7,
    "inputs": {
      "b1": 4,
      "b2": 7,
      "mult": -1,
      "tol": 5
    },
    "primary": 4.7,
    "secondary": [
      [
        "Наименьшее допустимое",
        4.465
      ],
      [
        "Наибольшее допустимое",
        4.935
      ]
    ]
  },
  {
    "tool": 8,
    "inputs": {
      "mode": "rms",
      "wave": "sine",
      "value": 1e-200
    },
    "primary": 1e-200,
    "secondary": [
      [
        "Размах",
        2.8284271247461905e-200
      ]
    ]
  },
  {
    "tool": 8,
    "inputs": {
      "mode": "pp",
      "wave": "square",
      "value": 10
    },
    "primary": 5,
    "secondary": [
      [
        "Амплитудное значение",
        5
      ],
      [
        "Среднее по модулю",
        5
      ]
    ]
  },
  {
    "tool": 8,
    "inputs": {
      "mode": "peak",
      "wave": "triangle",
      "value": 3
    },
    "primary": 1.7320508075688772,
    "secondary": [
      [
        "Размах",
        6
      ],
      [
        "Среднее по модулю",
        1.5
      ]
    ]
  },
  {
    "tool": 9,
    "inputs": {
      "mode": "turnsRatio",
      "v1": 1e+300,
      "v2": 1e+300,
      "i1": 1
    },
    "primary": 1,
    "secondary": [
      [
        "Вторичный ток",
        1
      ],
      [
        "Мощность",
        1e+300
      ]
    ]
  },
  {
    "tool": 9,
    "inputs": {
      "mode": "secondaryVoltage",
      "n1": 500,
      "n2": 100,
      "v1": 220,
      "i1": 0
    },
    "primary": 44,
    "secondary": [
      [
        "Вторичный ток",
        0
      ],
      [
        "Мощность",
        0
      ]
    ]
  },
  {
    "tool": 10,
    "inputs": {
      "vin": 1e+300,
      "r1": 1e+308,
      "r2": 1e+308
    },
    "primary": 5e+299,
    "secondary": [
      [
        "Ток через делитель",
        5e-06
      ],
      [
        "Мощность верхнего плеча",
        2.5e+294
      ],
      [
        "Мощность нижнего плеча",
        2.5e+294
      ]
    ]
  },
  {
    "tool": 10,
    "inputs": {
      "vin": -12,
      "r1": 10000,
      "r2": 4700
    },
    "primary": -3.836734693877551,
    "secondary": [
      [
        "Ток через делитель",
        -0.8163265306122449
      ],
      [
        "Мощность верхнего плеча",
        6.663890041186543
      ],
      [
        "Мощность нижнего плеча",
        3.132028321532694
      ]
    ]
  },
  {
    "tool": 10,
    "inputs": {
      "vin": 0,
      "r1": 1,
      "r2": 1
    },
    "primary": 0,
    "secondary": [
      [
        "Ток через делитель",
        0
      ],
      [
        "Мощность верхнего плеча",
        0
      ],
      [
        "Мощность нижнего плеча",
        0
      ]
    ]
  }
];

describe('electronics wave12 preserved contracts and independent subject values',()=>{
 for(const tool of tools)for(const r of tool.referenceCases??[])it(tool.id+': preserved reference '+r.name,()=>{const out=tool.compute(r.inputs);expect(out.primary.value).toBe(r.expectPrimary);for(const expected of r.expectSecondary??[])expect(row(out,expected.label)).toBe(expected.value);});
 for(const tool of tools)it(tool.id+': published example unchanged',()=>{const out=JSON.stringify(tool.compute(tool.publishedExample!.inputs)).replace(/[\u00a0\u202f]/g,' ');for(const token of tool.publishedExample!.expected)expect(out).toContain(token.replace(/[\u00a0\u202f]/g,' '));});
 for(const c of cases)it(tools[c.tool].id+': independent '+JSON.stringify(c.inputs),()=>{const out=tools[c.tool].compute(c.inputs);expect(out.primary.value).not.toBe('—');close(out.primary.value,c.primary);for(const [label,value]of c.secondary)close(row(out,label as string),value as number);});
 it('coax impedance remains nonzero between neighboring huge diameters',()=>{const out=d0.compute({dIn:1e308,dOut:1.0000000000000002e308,eps:1});expect(out.primary.value).not.toBe('—');expect(numeric(out.primary.value)).toBeGreaterThan(0);close(out.primary.value,1.196155828341698e-14);});
 it('coax scaling both diameters preserves every result',()=>expect(d0.compute({dIn:1,dOut:4,eps:2})).toEqual(d0.compute({dIn:2,dOut:8,eps:2})));
 it('LED current units are physically identical',()=>expect(d4.compute({supplyVoltage:5,forwardVoltage:2,current:20,currentUnit:'ma'})).toEqual(d4.compute({supplyVoltage:5,forwardVoltage:2,current:.02,currentUnit:'a'})));
 it('555 doublingC halves frequency and keeps high fraction',()=>{const a=d5.compute({r1:10,r2:47,c:100}),b=d5.compute({r1:10,r2:47,c:200});close(b.primary.value,138.7206962393234/2);expect(row(a,'Доля высокого уровня')).toBe(row(b,'Доля высокого уровня'));});
 it('RMS mode preserves input instead of recomputing through two rounded conversions',()=>{close(d8.compute({mode:'rms',wave:'triangle',value:12}).primary.value,12);});
 it('transformer active inputs ignore malformed hidden turns',()=>{const a={mode:'turnsRatio',v1:220,v2:12,i1:2};expect(d9.compute({...a,n1:true,n2:''})).toEqual(d9.compute(a));});
 it('transformer equal turns do not certify isolation',()=>expect(row(d9.compute({mode:'secondaryVoltage',n1:100,n2:100,v1:220,i1:2}),'Тип')).toBe('1:1'));
 it('divider powers remain positive under reversed source polarity',()=>{const a=d10.compute({vin:12,r1:10000,r2:4700}),b=d10.compute({vin:-12,r1:10000,r2:4700});expect(row(a,'Мощность верхнего плеча')).toBe(row(b,'Мощность верхнего плеча'));expect(row(a,'Мощность нижнего плеча')).toBe(row(b,'Мощность нижнего плеча'));});
 for(let i=0;i<tools.length;i++)for(const locale of locales)it(tools[i].id+'/'+locale+': complete authored body and actual result localization',()=>{
  const tool=tools[i],copy=locale==='ru'?tool.presentation:tool.copy?.[locale];expect(isCompleteCalculatorCopy(copy)).toBe(true);if(!isCompleteCalculatorCopy(copy))throw new Error('Expected complete owned copy');expect(copy.faq).toHaveLength(4);expect(copy!.longDescription.length).toBeGreaterThan(130);expect(copy!.howItWorks.length).toBeGreaterThan(80);expect(copy!.example.length).toBeGreaterThan(90);expect(copy!.howToUse).toHaveLength(4);expect(copy!.disclaimer).toBeTruthy();
  const input=defaults(i),out=localizeResult(tool.compute(input),locale,tool.id,{compute:tool.compute,localization:locs[i]});expect(out.primary.value).not.toBe('—');expect(JSON.stringify(out)).not.toMatch(/NaN|Infinity|undefined/);
  if(locale==='en'||locale==='de'||locale==='es')expect(JSON.stringify(out)).not.toMatch(/[А-Яа-яЁё]/);
  expect(getElectronicsWave12MethodSources(tool.id,locale).length).toBeGreaterThan(0);
 });
 for(let i=0;i<tools.length;i++)for(const locale of locales)it(tools[i].id+'/'+locale+': native numeric INPUT error',()=>{const tool=tools[i];const input=defaults(i);const f=tool.presentation.fields.find(f=>f.type==='number'&&isFieldVisible(f,input));if(!f)return;const raw=tool.compute({...input,[f.name]:true});error(raw);const out=localizeResult(raw,locale,tool.id,{compute:tool.compute,localization:locs[i]});if(locale!=='ru')expect(out.secondary[0].value).not.toBe(raw.secondary[0].value);});
 for(const locale of ['ru','uk'] as const)it('NE555/'+locale+': metadata describes displayed high-level fraction',()=>{const copy=locale==='ru'?d5.presentation:d5.copy?.[locale];expect(copy).toBeTruthy();expect(copy!.shortDescription+' '+copy!.seoDescription).not.toMatch(/скважность|шпаруватість/);expect(row(d5.compute({r1:10,r2:47,c:100}),'Доля высокого уровня')).toBe('54,808 %');});
 it('source helper rejects prototype and unknown ids',()=>{expect(getElectronicsWave12MethodSources('__proto__','en')).toEqual([]);expect(getElectronicsWave12MethodSources('other','en')).toEqual([]);});
});
