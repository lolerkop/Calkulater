import {test,expect} from '@playwright/test';
import {getCalculatorById} from '../src/lib/i18n';
const locales=['ru','en','uk','de','es'] as const;
// Independent fixed example: revenue480000-costs315000=profit165000.
// Visual defect before fix: desktop actionbuttons forced its currency onto
// a separate line in the436px resultcolumn. Text/copy is still verbatim.
for(const locale of locales)for(const width of [390,1365])test(`profit/${locale}/${width} primary stays readable beside result actions`,async({page,context})=>{
 const calc=getCalculatorById('profit',locale)!;await context.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
 await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(s:string)=>{(window as unknown as{headerCopied:string}).headerCopied=s;}}}));
 await page.setViewportSize({width,height:900});await page.goto(calc.fullPath+'?revenue=480000&costs=315000');const primary=page.getByTestId('calc-result-primary');await expect(primary).toBeVisible();await expect(primary).not.toContainText(/NaN|Infinity|undefined/);const text=(await primary.innerText()).trim();const numeric=text.replace(/[\s\u00a0\u202f]/g,'').match(/^[\d.,]+/)?.[0];expect(numeric).toBeTruthy();expect(Number(locale==='en'?numeric!.replaceAll(',',''):numeric!.replace(',','.'))).toBe(165000);
 const rows=await primary.evaluate(el=>{const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node:Node|null;const nodes:Node[]=[];while((node=walker.nextNode()))if(node.textContent?.trim())nodes.push(node);const range=document.createRange();range.setStart(nodes[0],0);range.setEnd(nodes.at(-1)!,nodes.at(-1)!.textContent!.length);return [...range.getClientRects()].filter(r=>r.width>0).map(r=>({top:Math.round(r.top),bottom:r.bottom}));});expect(new Set(rows.map(r=>r.top)).size).toBe(1);
 const primaryBox=await primary.boundingBox();for(const id of ['calc-edit-inputs-btn','calc-print-btn','calc-copy-result-btn']){const box=await page.getByTestId(id).boundingBox();expect(primaryBox&&box).toBeTruthy();expect(box!.y>=primaryBox!.y+primaryBox!.height||box!.x>=primaryBox!.x+primaryBox!.width).toBe(true);}
 await page.getByTestId('calc-copy-result-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as{headerCopied:string}).headerCopied)).toContain(text);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
