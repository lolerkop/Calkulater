import {test,expect} from '@playwright/test';
import {appendFileSync} from 'node:fs';
import {fixture,assertScope,hydrated,checkDocument,checkResult,documentSnapshot,checkFields} from './helpers/calculatorRouteSmoke';

// Keep the original operation limits and per-route assertions. A fresh context
// every twelve routes bounds lifecycle/resource accumulation. Record each route
// immediately, so an interruption cannot erase already completed evidence.
const locales=['ru','en','uk','de','es'];
const groupSize=12;
type Outcome={route:string;id:string;locale:string;width:number;group:string;status:'PASS'|'FAIL'|'NOT_RUN';phase:string;message?:string;timings:Record<string,number>;sourceDigest:string;sourceAggregate?:string;distAggregate?:string;recordedAt:string};
for(const locale of locales){
 const rows=fixture.rows.filter(row=>row.locale===locale),half=Math.ceil(rows.length/2);
 for(const side of[0,1]){
  const originalHalf=rows.slice(side*half,(side+1)*half),width=side===0?390:1365;
  for(let offset=0;offset<originalHalf.length;offset+=groupSize){
   const batch=originalHalf.slice(offset,offset+groupSize),group=`${locale}/half${side+1}/group${Math.floor(offset/groupSize)+1}`;
   test(`all-routes/${group}: ${batch.length} hydrated native calculators with fixed-source controls`,async({page},info)=>{
    test.setTimeout(30*60_000);assertScope();
    await page.context().route('**/*',route=>{
     const url=route.request().url();
     if(/^(?:data:|blob:)/.test(url)||['localhost','127.0.0.1','::1','[::1]'].includes(new URL(url).hostname))return route.continue();
     return route.abort();
    });
    const errors:string[]=[],outcomes:Outcome[]=[];let contextClosed=false;
    page.on('pageerror',e=>errors.push(e.message));page.context().on('close',()=>{contextClosed=true;});
    const record=(outcome:Outcome)=>{
     outcomes.push(outcome);
     if(process.env.CALCUWAY_ROUTE_LEDGER)appendFileSync(process.env.CALCUWAY_ROUTE_LEDGER,JSON.stringify(outcome)+'\n');
    };
    for(const [index,row]of batch.entries()){
     let phase='viewport',phaseStart=performance.now();const timings:Record<string,number>={},errorStart=errors.length;
     const begin=(next:string)=>{timings[phase]=Math.round(performance.now()-phaseStart);phase=next;phaseStart=performance.now();};
     const base={route:row.route,id:row.id,locale,width,group,sourceDigest:fixture.sourceDigest,sourceAggregate:process.env.CALCUWAY_SOURCE_AGGREGATE,distAggregate:process.env.CALCUWAY_DIST_AGGREGATE};
     try{
      await page.setViewportSize({width,height:950});begin('navigation');
      const response=await page.goto(row.route+`?${row.scenario.query}`,{waitUntil:'domcontentloaded',timeout:25_000});
      expect(response?.status()).toBe(200);expect(new URL(page.url()).pathname).toBe(row.route);
      begin('actual hydration');await hydrated(page,row);
      begin('full native document and result');await checkDocument(page,row);
      begin('query reload');await page.reload({waitUntil:'domcontentloaded',timeout:25_000});
      begin('reload hydration');await hydrated(page,row);
      begin('reload result and fields');checkResult((await documentSnapshot(page)).result,row);await checkFields(page,row);
      expect(errors.slice(errorStart)).toEqual([]);timings[phase]=Math.round(performance.now()-phaseStart);
      record({...base,status:'PASS',phase:'hydration/document/fields/units/fixed-source bundle result/reload',timings,recordedAt:new Date().toISOString()});
     }catch(error){
      timings[phase]=Math.round(performance.now()-phaseStart);
      record({...base,status:'FAIL',phase,message:error instanceof Error?error.message:String(error),timings,recordedAt:new Date().toISOString()});
      if(page.isClosed()||contextClosed||!page.context().browser()?.isConnected()){
       for(const pending of batch.slice(index+1))record({...base,route:pending.route,id:pending.id,status:'NOT_RUN',phase:'ABORTED_AFTER_CONTEXT_CLOSED',message:`First failure retained at ${row.route}; no further page operations attempted`,timings:{},recordedAt:new Date().toISOString()});
       break;
      }
     }
    }
    await info.attach(`all-routes-${group.replaceAll('/','-')}`,{body:JSON.stringify({sourceDigest:fixture.sourceDigest,scope:'Integration and fixed-source excerpt proof, not independent mathematical/human approval',width,planned:batch.length,visited:outcomes.filter(o=>o.status!=='NOT_RUN').length,outcomes},null,2),contentType:'application/json'});
    expect(outcomes.length).toBe(batch.length);
    expect(outcomes.filter(row=>row.status!=='PASS'),JSON.stringify(outcomes.filter(row=>row.status!=='PASS').map(({route,status,phase,message})=>({route,status,phase,message:message?.slice(0,1300)})),null,2)).toEqual([]);
   });
  }
 }
}
