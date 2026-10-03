import type {CalcFunction,CalcResult,Field} from '../../src/lib/types';
export type Inputs=Parameters<CalcFunction>[0];
export interface BeforePage {id:string;locale:string;path:string;name:string;h1:string;seoTitle:string;seoDescription:string;fields:Field[];defaults:Inputs;defaultResult:CalcResult;}
export interface OracleCase {id:string;input:Inputs;primary:number;digits:number;rows:Record<string,number>;}
