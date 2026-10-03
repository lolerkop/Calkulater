import{expect,it}from'vitest';
import{definition as ohm}from'../src/calculators/ohms-law/definition';
import{definition as lever}from'../src/calculators/lever-moment/definition';
import{isFieldVisible}from'../src/lib/fieldVisibility';
import{validateValues}from'../src/components/islands/calculator/validation';
const cases=[
 {calc:ohm,mode:'vi',known:['voltage','current'],unknown:'resistance',input:{voltage:12,current:3,resistance:'invalid'},expected:'4,00 Ом'},
 {calc:ohm,mode:'vr',known:['voltage','resistance'],unknown:'current',input:{voltage:12,current:'invalid',resistance:4},expected:'3,000 А'},
 {calc:ohm,mode:'ir',known:['current','resistance'],unknown:'voltage',input:{voltage:'invalid',current:3,resistance:4},expected:'12,00 В'},
 {calc:lever,mode:'force2',known:['f1','d1','d2'],unknown:'f2',input:{f1:100,d1:2,d2:1,f2:'invalid'},expected:'200 Н'},
 {calc:lever,mode:'distance2',known:['f1','d1','f2'],unknown:'d2',input:{f1:100,d1:2,d2:'invalid',f2:100},expected:'2 м'},
];
for(const c of cases)it(`${c.calc.id} ${c.mode}: visible known fields match actual arithmetic and validation`,()=>{
 const values={mode:c.mode,...c.input};const fields=c.calc.presentation.fields;
 expect(fields.filter(f=>f.type==='number'&&isFieldVisible(f,values)).map(f=>f.name).sort()).toEqual([...c.known].sort());
 expect(isFieldVisible(fields.find(f=>f.name===c.unknown)!,values)).toBe(false);
 expect(c.calc.compute(values).primary.value).toBe(c.expected);
 expect(validateValues(c.calc.id,fields,values,'en')).toEqual({});
 const invalid={...values,[c.known[0]]:'invalid'};
 expect(validateValues(c.calc.id,fields,invalid,'en')).toHaveProperty(c.known[0]);
});
