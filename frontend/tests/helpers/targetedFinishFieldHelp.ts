import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import type {Field} from '../../src/lib/types';
const bytes=readFileSync(new URL('../platform/__baseline__/targeted-finish-field-help-amendments.json',import.meta.url));
if(createHash('sha256').update(bytes).digest('hex')!=='ca8f5bb82e3b5a7ac7e854f03cf284c27527be4b1c8fb2a6549328074be933f9')throw Error('Help amendment evidence changed');
const amendments=JSON.parse(bytes.toString('utf8')).records as {id:string;locale:string;field:string;before:string|null;after:string}[];
if(amendments.length!==10||new Set(amendments.map(r=>`${r.id}/${r.locale}/${r.field}`)).size!==10)throw Error('Expected exactly ten authorized help-only amendments');
export function amendedFieldHelp(id:string,locale:string,field:Field):Field{
 const amendment=amendments.find(r=>r.id===id&&r.locale===locale&&r.field===field.name);
 if(!amendment)return field;
 if((field.help??null)!==amendment.before)throw Error(`Historical help differs: ${id}/${locale}/${field.name}`);
 return {...field,help:amendment.after};
}
