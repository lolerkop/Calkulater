import {expect,it} from 'vitest';
import {definition} from '../src/calculators/stress-strain/definition';
// Independent dimensional literals: 1 N/mm² = 1 MPa; signed compression.
it('axial force and length change explicitly permit signed input',()=>{for(const name of ['force','delta']){const f=definition.presentation.fields.find(f=>f.name===name)!;expect(f.signed).toBe(true);expect(f.min).toBeUndefined();}});
it('compression −100N/10mm² is−10MPa with no strain inputs required',()=>{const r=definition.compute({mode:'stress',force:-100,area:10,length:0,delta:0});expect(r.primary.value).toBe('-10 МПа');});
it('compression force−100N and shortening−.1mm over20mm yield positive modulus2000MPa',()=>{const r=definition.compute({mode:'modulus',force:-100,area:10,length:20,delta:-.1});expect(r.primary.value).toBe('2 000 МПа');expect(r.secondary).toContainEqual({label:'Напряжение',value:'-10 МПа'});expect(r.secondary).toContainEqual({label:'Относительная деформация',value:'-0,005'});});
it('linear model computes shortening−.1mm from the same positive modulus',()=>{const r=definition.compute({mode:'elongation',force:-100,area:10,length:20,e:2000});expect(r.primary.value).toBe('-0,1 мм');});
for(const ref of definition.referenceCases!)it('unchanged original reference:'+ref.name,()=>{const r=definition.compute(ref.inputs);expect(r.primary.value).toBe(ref.expectPrimary);for(const s of ref.expectSecondary??[])expect(r.secondary).toContainEqual(s);});
