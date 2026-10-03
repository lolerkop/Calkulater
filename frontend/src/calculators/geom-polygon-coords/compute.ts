import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, dim, exact, add, times, negative, number as rounded, ratio, scale, sqrt, INPUT, RANGE, type Dyadic } from '../../lib/platform/geometryNumericInput';

type Point={x:number;y:number;dx:Dyadic;dy:Dyadic};
const same=(a:Point,b:Point)=>a.x===b.x&&a.y===b.y;
const difference=(a:Dyadic,b:Dyadic)=>add(a,negative(b));
const cross=(a:Dyadic,b:Dyadic,c:Dyadic,d:Dyadic)=>add(times(a,d),negative(times(b,c)));
const orientation=(a:Point,b:Point,c:Point)=>cross(difference(b.dx,a.dx),difference(b.dy,a.dy),difference(c.dx,a.dx),difference(c.dy,a.dy)).coefficient;
const sign=(value:bigint)=>value<0n?-1:value>0n?1:0;
const between=(a:number,b:number,c:number)=>Math.min(a,b)<=c&&c<=Math.max(a,b);
const onSegment=(a:Point,b:Point,c:Point)=>between(a.x,b.x,c.x)&&between(a.y,b.y,c.y);
function intersects(a:Point,b:Point,c:Point,d:Point):boolean{
 const abC=sign(orientation(a,b,c)),abD=sign(orientation(a,b,d)),cdA=sign(orientation(c,d,a)),cdB=sign(orientation(c,d,b));
 return (abC*abD<0&&cdA*cdB<0)||(abC===0&&onSegment(a,b,c))||(abD===0&&onSegment(a,b,d))||(cdA===0&&onSegment(c,d,a))||(cdB===0&&onSegment(c,d,b));
}
// Exact signs/products on finite binary coordinates. Product caps are UI limits, not a geometric definition.
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Площадь',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 if(typeof inputs.points!=='string'||!inputs.points.trim())return fail(INPUT);
 if(inputs.points.length>32768)return fail('Контур ограничен 256 вершинами и 32768 символами');
 const pts:Point[]=[];
 for(const line of inputs.points.split('\n')){
  const text=line.trim();if(!text)continue;
  const tokens=text.replace(/,(?=\s|$)/g,' ').split(/[\s;]+/).filter(Boolean);
  if(tokens.length!==2)return fail('В каждой строке нужны две конечные координаты');
  const x=read(tokens[0]),y=read(tokens[1]);if(![x,y].every(Number.isFinite))return fail('В каждой строке нужны две конечные координаты');
  pts.push({x,y,dx:exact(x),dy:exact(y)});
  if(pts.length>257)return fail('Контур ограничен 256 вершинами и 32768 символами');
 }
 // An optional repeated closing point is ignored; any other repeated vertex is rejected.
 if(pts.length>3&&same(pts[0],pts[pts.length-1]))pts.pop();
 if(pts.length<3)return fail('Нужно не меньше трёх вершин');
 if(pts.length>256)return fail('Контур ограничен 256 вершинами и 32768 символами');
 const n=pts.length;
 for(let i=0;i<n;i++){
  for(let j=i+1;j<n;j++)if(same(pts[i],pts[j]))return fail('Вершины не должны повторяться или образовывать нулевую сторону');
  const previous=pts[(i+n-1)%n],current=pts[i],next=pts[(i+1)%n];
  if(orientation(previous,current,next)===0n){
   const dot=add(times(difference(current.dx,previous.dx),difference(next.dx,current.dx)),times(difference(current.dy,previous.dy),difference(next.dy,current.dy)));
   if(dot.coefficient<0n)return fail('Контур самопересекается или его стороны накладываются');
  }
 }
 for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){
  if(j===i+1||(i===0&&j===n-1))continue;
  if(intersects(pts[i],pts[(i+1)%n],pts[j],pts[(j+1)%n]))return fail('Контур самопересекается или его стороны накладываются');
 }
 const crosses:Dyadic[]=[],xWeighted:Dyadic[]=[],yWeighted:Dyadic[]=[],lengths:Dyadic[]=[];
 for(let i=0;i<n;i++){
  const a=pts[i],b=pts[(i+1)%n],w=cross(a.dx,a.dy,b.dx,b.dy);
  crosses.push(w);xWeighted.push(times(add(a.dx,b.dx),w));yWeighted.push(times(add(a.dy,b.dy),w));
  const x=difference(b.dx,a.dx),y=difference(b.dy,a.dy),length=sqrt(add(times(x,x),times(y,y)));
  if(!Number.isFinite(length)||!(length>0))return fail(RANGE);lengths.push(exact(length));
 }
 const twiceArea=add(...crosses);if(twiceArea.coefficient===0n)return fail('Контур имеет нулевую площадь');
 const area=Math.abs(rounded(scale(twiceArea,-1))),perimeter=rounded(add(...lengths));
 const denominator=times(exact(3),twiceArea),cx=ratio(add(...xWeighted),denominator),cy=ratio(add(...yWeighted),denominator);
 if(![area,perimeter,cx,cy].every(Number.isFinite)||!(area>0&&perimeter>0)||(add(...xWeighted).coefficient!==0n&&cx===0)||(add(...yWeighted).coefficient!==0n&&cy===0))return fail(RANGE);
 return {primary:{label:'Площадь',value:dim(area)},secondary:[{label:'Периметр',value:dim(perimeter)},{label:'Вершин',value:fmtNumber(n,0)},
 {label:'Центроид X',value:dim(cx)},{label:'Центроид Y',value:dim(cy)},{label:'Обход',value:twiceArea.coefficient>0n?'против часовой':'по часовой'},
 {label:'Единица площади',value:'квадрат единицы координат'},{label:'Единица периметра',value:'единица координат'}]};
};
