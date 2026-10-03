"""Independent Decimal90 literal fixtures; no project compute module is imported.
Run from frontend: python3 tests/fixtures/originalityHouseholdWave17Oracle.py
"""
from decimal import Decimal as D, getcontext, ROUND_CEILING, ROUND_HALF_UP
import random,json
from pathlib import Path
getcontext().prec=90
rng=random.Random(172901)
rows=[]
def money(n):return str(n.quantize(D('.01'),rounding=ROUND_HALF_UP))
def add(id,i,inputs,targets):rows.append(dict(id=id,name='seed172901-'+str(i),inputs=inputs,targets=targets))
def target(label,n,kind='measure'):return dict(label=label,expected=money(n)if kind=='money'else str(n),kind=kind)
for i in range(20):
 w=rng.randint(50,450);f=D(rng.randint(10,32))/10;fw=rng.choice([120,140,150,280,300]);h=rng.randint(60,350);hem=rng.randint(0,40);n=(D(w)*f/fw).to_integral_value(rounding=ROUND_CEILING)
 add('curtain-size',i,dict(windowWidth=w,fullness=str(f),fabricWidth=fw,height=h,hem=hem),[target('primary',n*(h+hem)/100),target('Полотнищ',n,'count')])
 l=D(rng.randint(10,900))/10;w=D(rng.randint(10,600))/10;h=D(rng.randint(10,500))/10;limit=D(rng.randint(100,2000))/10;s=l+w+h
 add('luggage-linear',i,{k:str(v)for k,v in dict(l=l,w=w,h=h,limit=limit).items()},[target('primary',s),target('Запас до предела',limit-s),target('В дюймах',s/D('2.54')),target('Объём коробки',l*w*h/1000)])
 w=D(rng.randint(30,500))/10;h=D(rng.randint(30,700))/10;b=D(rng.randint(1,100))/10;e=D(rng.randint(0,30))/10;ow=w+2*b;oh=h+2*b+e
 add('picture-frame-mat',i,{k:str(v)for k,v in dict(photoWidth=w,photoHeight=h,border=b,bottomExtra=e).items()},[target('Площадь паспарту',ow*oh-w*h),target('Нижнее поле',b+e),target('Соотношение сторон паспарту',ow/oh)])
 p=D(rng.randint(1,100000))/100;a=D(rng.randint(1,1000))/100
 add('price-per-unit',i,dict(mode='single',unit=rng.choice(['kg','l','pcs']),price=str(p),amount=str(a)),[target('primary',p/a,'money')])
 g=D(rng.randint(1,1500))/10;p=D(rng.randint(0,40000))/100;s=D(rng.choice([250,500,750,1000]));h=D(rng.randint(1,400))/10;w=D(rng.randint(0,350));tariff=D(rng.randint(0,1200))/100;wear=D(rng.randint(0,500))/100;pct=D(rng.randint(0,100));material=g*p/s;energy=w*h*tariff/1000;base=material+energy+wear*h;total=base*(1+pct/100)
 add('print-3d-cost',i,{k:str(v)for k,v in dict(grams=g,spoolPrice=p,spoolWeight=s,hours=h,powerW=w,kwhPrice=tariff,wearPerHour=wear,markupPct=pct).items()},[target('primary',total,'money'),target('Пластик',material,'money'),target('Электричество',energy,'money')])
 stock=D(rng.randint(0,10000));daily=D(rng.randint(1,200));reserve=D(rng.randint(0,10))
 add('stock-duration',i,dict(stock=str(stock),perDay=str(daily),reserveDays=str(reserve)),[target('primary',stock/daily,'day')])
 p=D(rng.randint(0,90000))/100;m=D(rng.choice(['.5','1','3','6','12']));q=D(rng.randint(0,10000))/100;n=D(rng.choice(['.25','1','2','4']));monthly=p/m+q/n
 add('subscriptions-cost',i,dict(items=f'A {p} {m}\nB {q} {n}'),[target('primary',monthly,'money'),target('В год',monthly*12,'money'),target('Её вклад в месяц',max(p/m,q/n),'money')])
 bill=D(rng.randint(1,400000))/100;pct=D(rng.randint(0,70));people=D(rng.randint(1,12));rounding=rng.choice(['yes','no']);plain=bill*(1+pct/100);share=plain/people
 if rounding=='yes':share=share.to_integral_value(rounding=ROUND_CEILING)
 total=share*people if rounding=='yes'else plain
 targets=[target('primary',total,'money'),target('Чаевые',bill*pct/100,'money')]
 if people>1:targets.append(target('С человека',share,'money'))
 add('tip',i,dict(bill=str(bill),tipPercent=str(pct),people=int(people),roundPerPerson=rounding),targets)
 nights=rng.randint(0,20);days=rng.randint(1,25);people=rng.randint(1,8);hotel=rng.randint(0,10000);food=rng.randint(0,3000);transport=rng.randint(0,10000);activities=rng.randint(0,10000);other=rng.randint(0,1000);total=D(nights*hotel+days*people*food+transport+activities+other)
 add('trip-budget',i,dict(nights=nights,days=days,people=people,hotelPerNight=hotel,foodPerDayPerPerson=food,transport=transport,activities=activities,other=other),[target('primary',total,'money'),target('На человека',total/people,'money'),target('В день',total/days,'money')])
Path(__file__).with_suffix('.json').write_text(json.dumps(dict(precision=90,seed=172901,independentMethod='Python Decimal90 identities; monetary ROUND_HALF_UP, no application imports',cases=rows),ensure_ascii=False,indent=2)+'\n')
