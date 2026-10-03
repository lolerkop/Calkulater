import json,math,random
from decimal import Decimal as D,localcontext,ROUND_CEILING,ROUND_FLOOR
from fractions import Fraction as F
from pathlib import Path
random.seed(1612)
PI=D.from_float(math.pi)
ROOT=Path(__file__).resolve().parent.parent
before=json.loads((ROOT/'reports/originality-building-wave-16-before.json').read_text())['ownedBaseline']['records']
defs={r['id']:{f['name']:f['defaultValue'] for f in r['definition']['presentation']['fields']}for r in before}
def B(n):return D.from_float(float(n))
def C(n):return D(str(n))
def ceiling(x):return int(x.to_integral_value(rounding=ROUND_CEILING))
def floor(x):return int(x.to_integral_value(rounding=ROUND_FLOOR))
records=[]
def add(id,name,patch):
 x={**defs[id],**patch};v={k:B(n) for k,n in x.items()if isinstance(n,(int,float))};w=v.get('waste',D(0));q=1+w/100;out={}
 if id=='rafters':
  a=v['span']/2;r=v['rise'];out={'primary':(a*a+r*r).sqrt()+v['overhang'],'Угол наклона':(r/a*180/PI if r/a<D('1e-8')else D(str(math.degrees(math.atan2(float(r),float(a)))))),'Заложение':a,'Уклон':100*r/a}
 elif id=='roof-area':
  A=v['length']*v['width'];p=v['slopePercent'];degrees=x['slopeMode']=='degrees';alpha=float(v['angle'])if degrees else math.degrees(math.atan2(float(p),100));total=A/B(math.cos(math.radians(alpha)))if degrees else A*(1+(p/100)**2).sqrt()
  out={'primary':total,'Площадь основания':A,'Уклон':D(str(alpha))}
  if x['mode']=='gable':out['Площадь одного ската']=total/2
 elif id=='roof-battens':
  length=v['area']/v['step']*q;pieces=ceiling(C(x['area'])/C(x['step'])*(1+C(x['waste'])/100)/C(x['battenLength']));out={'primary':length,'Брусков':pieces,'Объём древесины':length*v['sectionWidth']*v['sectionHeight']/1000000,'Площадь крыши':v['area'],'Шаг обрешётки':v['step'],'Метров на квадратный метр':1/v['step']}
 elif id=='room-volume':
  a=v['length']*v['width']if x['mode']=='dimensions'else v['area'];out={'primary':a*v['height'],'Площадь пола':a,'Высота':v['height']}
  if x['mode']=='dimensions':out.update({'Периметр':2*(v['length']+v['width']),'Площадь стен':2*(v['length']+v['width'])*v['height']})
 elif id=='sealant-volume':
  section=v['width']*v['depth'];net=section*v['length'];carts=ceiling(C(x['width'])*C(x['depth'])*C(x['length'])*(1+C(x['waste'])/100)/C(x['cart']));out={'primary':net*q,'Без запаса':net,'Картриджей':carts,'Метров из одного картриджа':v['cart']/section,'Сечение шва':section}
 elif id=='skirting':
  perimeter=2*(v['length']+v['width']);opening=v['doors']*v['doorWidth'];total=(perimeter-opening)*q;pieces=ceiling((2*(C(x['length'])+C(x['width']))-C(x['doors'])*C(x['doorWidth']))*(1+C(x['waste'])/100)/C(x['plank']));out={'primary':total,'Периметр комнаты':perimeter,'Вычет на проёмы':opening,'Планок':pieces,'Куплено с запасом':pieces*v['plank']}
 elif id=='slab-foundation':
  nl=floor(C(x['width'])/C(x['meshStep']))+1;nw=floor(C(x['length'])/C(x['meshStep']))+1;steel=2*(nl*v['length']+nw*v['width']);net=v['length']*v['width']*v['thickness'];out={'primary':net*q,'Площадь плиты':v['length']*v['width'],'Чистый объём':net,'Запас':net*w/100,'Длина арматуры':steel,'Вес арматуры':steel*PI*v['rebarDiameter']**2*7850/4000000,'Прутков':2*(nl+nw)}
 elif id=='stairs':
  n=ceiling(C(x['rise_total'])/C(x['max_riser']));h=v['rise_total']/n;out={'primary':n,'Высота подступенка':h,'Проступей':n-1,'Длина марша':(n-1)*v['tread'],'Угол наклона':(h/v['tread']*180/PI if h/v['tread']<D('1e-8')else D(str(math.degrees(math.atan2(float(h),float(v['tread'])))))),'Формула удобства 2h + b':2*h+v['tread']}
 elif id=='strip-foundation':
  net=v['perimeter']*v['width']*v['depth'];out={'primary':net*q,'Чистый объём':net,'Площадь сечения ленты':v['width']*v['depth']}
  if w>0:out['Запас']=net*w/100
 elif id=='tank-volume':
  d,L,h=v['d'],v['len'],v['level'];shape=x['shape']
  if shape=='horizontal-cylinder':
   full=PI*d*d*L/4;smallh=min(h,d-h);t=smallh/d;term=D(1);correction=D(1)
   # Independent integrated binomial series, convergent for 0<=t<=1/2.
   # 220 terms give >60 reliable decimal places even at t=1/2.
   for k in range(1,221):term*=((D('.5')-(k-1))/k)*(-t);correction+=term*3/(2*k+3)
   small=D(4)/3*(d*smallh**3).sqrt()*L*correction;filled=small if h<=d/2 else full-small;free=full-filled
  elif shape=='rect':full=d*d*L;filled=d*d*h;free=full-filled
  elif shape=='capsule':full=PI*d*d*L/4+PI*d**3/6;filled=full*h/(L+d);free=full-filled
  else:full=PI*d*d*L/4;filled=PI*d*d*h/4;free=full-filled
  out={'primary':filled,'Полный объём':full,'Заполнено':100*filled/full,'В литрах':filled*1000,'Свободно':free}
 elif id=='underfloor-heating':
  a=v['area']-v['edgeZone'];total=(a/v['step']+v['edgeZone']/v['edgeStep'])*q;loops=ceiling(((C(x['area'])-C(x['edgeZone']))/C(x['step'])+C(x['edgeZone'])/C(x['edgeStep']))*(1+C(x['waste'])/100)/C(x['loopMax']));out={'primary':total,'Петель':loops,'На петлю':total/loops,'Площадь':v['area'],'Основная зона':a,'Краевая зона':v['edgeZone']}
 elif id=='wood-weight':
  base={'pine':520,'spruce':450,'birch':650,'oak':700,'larch':660,'aspen':490}[x['species']];density=base*(1+(v['moisture']-12)/100);out={'primary':v['volume']*density,'Плотность при заданной влажности':density,'Базовая плотность при 12 %':base,'Объём':v['volume'],'Килограммов на кубометр':density}
 record={'id':id,'name':name,'inputs':x,'expected':{k:float(v) for k,v in out.items()},'decimalProof':{k:str(v)[:100]for k,v in out.items()}}
 assert all(math.isfinite(v)for v in record['expected'].values()),record
 records.append(record)
with localcontext()as ctx:
 ctx.prec=2500
 for id in defs:
  for i in range(6):
   x={}
   if id=='rafters':x={'span':round(random.uniform(2,15),5),'rise':round(random.uniform(.5,4),5),'overhang':round(random.uniform(0,1),5)}
   elif id=='roof-area':x={'mode':['shed','gable','hip'][i%3],'slopeMode':'degrees'if i<3 else'percent','angle':[0,30,45][i%3],'slopePercent':[0,75,100][i%3]}
   elif id=='roof-battens':x={'area':round(random.uniform(10,100),5),'step':round(random.uniform(.2,.6),5),'waste':[0,5,10,15,25,50][i]}
   elif id=='room-volume':x={'mode':'dimensions'if i%2 else'area','length':round(random.uniform(3,7),5),'width':round(random.uniform(2,6),5),'area':round(random.uniform(10,25),5),'height':round(random.uniform(2,3.5),5)}
   elif id=='sealant-volume':x={'width':round(random.uniform(2,12),5),'depth':round(random.uniform(2,8),5),'length':round(random.uniform(1,30),5),'cart':[100,310,600][i%3],'waste':[0,5,10,15,25,50][i]}
   elif id=='skirting':x={'length':round(random.uniform(3,7),5),'width':round(random.uniform(2,6),5),'doors':i%3,'waste':[0,5,10,15,25,50][i]}
   elif id=='slab-foundation':x={'length':round(random.uniform(4,12),5),'width':round(random.uniform(3,10),5),'meshStep':[.1,.2,.3][i%3],'waste':[0,5,10,15,25,50][i]}
   elif id=='stairs':x={'rise_total':round(random.uniform(.15,4),5),'tread':round(random.uniform(.2,.35),5),'max_riser':round(random.uniform(.14,.2),5)}
   elif id=='strip-foundation':x={'perimeter':round(random.uniform(10,60),5),'width':round(random.uniform(.2,.6),5),'depth':round(random.uniform(.3,1.5),5),'waste':[0,5,10,15,25,50][i]}
   elif id=='tank-volume':x={'shape':['vertical-cylinder','horizontal-cylinder','rect','capsule','horizontal-cylinder','capsule'][i],'d':1.5,'len':2,'level':[0,.375,.5,1.75,.75,3.5][i]}
   elif id=='underfloor-heating':x={'area':round(random.uniform(12,30),5),'edgeZone':[0,1,2,3,4,5][i],'step':[.1,.15,.2][i%3],'waste':[0,5,10,15,25,50][i]}
   elif id=='wood-weight':x={'species':['pine','spruce','birch','oak','larch','aspen'][i],'volume':round(random.uniform(.1,10),5),'moisture':[0,12,20,35,60,100][i]}
   add(id,f'seed1612-{i}',x)
 for id,name,x in [
 ('rafters','rescued final subnormal angle',{'span':200,'rise':float.fromhex('0x0.0000000000001p-1022'),'overhang':0}),
 ('stairs','rescued one-step subnormal angle',{'rise_total':float.fromhex('0x0.0000000000001p-1022'),'max_riser':float.fromhex('0x0.0000000000001p-1022'),'tread':100}),
 ('rafters','large finite hypotenuse',{'span':2e100,'rise':1e100,'overhang':0}),
 ('roof-area','huge percent but finite complete area',{'length':1e-150,'width':1e-150,'slopeMode':'percent','slopePercent':1e308}),
 ('roof-battens','reciprocal section factors',{'sectionWidth':1e200,'sectionHeight':1e-200}),
 ('room-volume','large finite volumes',{'length':1e100,'width':1e100,'height':1e100}),
 ('sealant-volume','reciprocal section factors',{'width':1e200,'depth':1e-200,'length':1,'waste':0}),
 ('sealant-volume','real remainder above one pack',{'width':1,'depth':1,'length':3.0000000000000004,'cart':3,'waste':0}),
 ('skirting','irregular perimeter P20 modeled as P4 and P4',{'length':5,'width':5,'doors':0,'waste':0}),
 ('slab-foundation','decimal edge fit',{'length':1,'width':.3,'thickness':.2,'meshStep':.1,'rebarDiameter':12,'waste':0}),
 ('stairs','one riser zero run',{'rise_total':.18,'max_riser':.18,'tread':.3}),
 ('strip-foundation','complete product recovers overflow intermediate',{'perimeter':1e200,'width':1e200,'depth':1e-200,'waste':0}),
 ('tank-volume','tiny horizontal level',{'shape':'horizontal-cylinder','d':1,'len':1,'level':1e-20}),
 ('tank-volume','giant diameter tiny cylinder length',{'shape':'horizontal-cylinder','d':1e100,'len':1e-200,'level':1}),
 ('tank-volume','series threshold below',{'shape':'horizontal-cylinder','d':1,'len':1,'level':.000999999}),
 ('tank-volume','series threshold above',{'shape':'horizontal-cylinder','d':1,'len':1,'level':.001000001}),
 ('tank-volume','near full independent free volume',{'shape':'horizontal-cylinder','d':1,'len':1,'level':1-math.ulp(1.0)}),
 ('tank-volume','subnormal vertical volume percent not ratio rounded outputs',{'shape':'vertical-cylinder','d':1e-150,'len':1e-23,'level':4e-24}),
 ('tank-volume','capsule full height equals cylinder plus diameter',{'shape':'capsule','d':2,'len':3,'level':5}),
 ('underfloor-heating','two spacing lengths with zero reserve',{'area':20,'edgeZone':4,'step':.15,'edgeStep':.1,'waste':0}),
 ('wood-weight','tiny nonzero mass',{'volume':1e-300,'species':'pine','moisture':12})
 ]:add(id,name,x)
(ROOT/'tests/originalityBuildingWave16Oracle.json').write_text(json.dumps({'provenance':'Independent Python Decimal2500 exact-binary inputs, integrated binomial series 220 terms for circular segment; shortest-decimal rational floor/ceil for counts; seed1612. Expected never calls tested compute. Decimal proofs bounded to first100characters.','records':records},ensure_ascii=False,indent=2)+'\n')
print(len(records))
