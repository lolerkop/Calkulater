import type { CalculatorContextualField } from '../../lib/platform/types';
// Visibility is owned by static showIf; preserve the already localized label and unit.
export const contextualField:CalculatorContextualField=(field,values)=>field.name==='length'||field.name==='delta'?{...field,optional:(values.mode??'stress')==='stress'}:field;
