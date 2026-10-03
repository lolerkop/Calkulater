import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

type Locale = 'ru'|'en'|'uk'|'de'|'es';
type Row = { id:string;locale:Locale;path:string;expectedTitle:string[];copy:{slug:string;h1:string;seoDescription:string;longDescription:string};faq:{q:string;a:string}[];guidance:{choices:{calculatorId:string;reason:string}[];checklist:string;mistake:string} };
const fixture=JSON.parse(readFileSync(new URL('./fixtures/originality-category-native-followup.json',import.meta.url),'utf8')) as {records:Row[]};
const breadcrumbs={ru:'Хлебные крошки',en:'Breadcrumbs',uk:'Навігаційний ланцюжок',de:'Brotkrumennavigation',es:'Migas de pan'};
const languages={ru:'ru-RU',en:'en-US',uk:'uk-UA',de:'de-DE',es:'es-ES'};

test.beforeEach(async ({ context }) => {
  await context.route('**/*',route=> {
    const url=new URL(route.request().url());
    return ['localhost','127.0.0.1','::1'].includes(url.hostname)||url.protocol==='data:'||url.protocol==='blob:' ? route.continue() : route.abort();
  });
});

// All80native pages run at two meaningful widths in10 bounded tests. Expected
// copy is the fixed, reviewed publication fixture, not the rendered UI itself.
for (const locale of ['ru','en','uk','de','es'] as const) for (const width of [390,1365]) {
  test(`${locale}/${width}: all16categories publish the reviewed native intro, FAQ and schema`,async({page})=> {
    test.setTimeout(120_000);
    await page.setViewportSize({width,height:900});
    const rows=fixture.records.filter(row=>row.locale===locale);
    expect(rows).toHaveLength(16);
    for (const row of rows) {
      const response=await page.goto(row.path);
      expect(response?.status(),row.path).toBe(200);
      const hero=page.getByTestId(`category-page-${row.copy.slug}`);
      await expect(page.getByTestId('category-h1'),row.path).toHaveText(row.copy.h1);
      await expect(hero.locator('p').first(),row.path).toHaveText(row.copy.longDescription);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',row.copy.seoDescription);
      expect(Array.isArray(row.expectedTitle),`${row.path} one captured title`).toBe(true);
      expect(row.expectedTitle,`${row.path} one captured title`).toHaveLength(1);
      expect(typeof row.expectedTitle[0],`${row.path} captured title type`).toBe('string');
      await expect(page).toHaveTitle(row.expectedTitle[0]);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',`https://calcuway.com${row.path}`);
      await expect(hero.getByRole('navigation',{name:breadcrumbs[locale],exact:true})).toBeVisible();
      const items=page.getByTestId('category-faq').locator('details');
      await expect(items,row.path).toHaveCount(row.faq.length);
      for (let i=0;i<row.faq.length;i++) {
        await expect(items.nth(i).locator('summary span').first(),`${row.path} question${i}`).toHaveText(row.faq[i].q);
        await items.nth(i).locator('summary').click();
        await expect(items.nth(i).locator('p'),`${row.path} answer${i}`).toHaveText(row.faq[i].a);
        await expect(items.nth(i).locator('p')).toBeVisible();
      }
      const guide=page.getByTestId('category-guidance');
      await expect(guide).toBeVisible();
      await expect(guide.locator('article p')).toHaveText(row.guidance.choices.map(x=>x.reason));
      await expect(page.getByTestId('category-guidance-checklist').locator('p')).toHaveText(row.guidance.checklist);
      await expect(page.getByTestId('category-guidance-mistake').locator('p')).toHaveText(row.guidance.mistake);
      const schema=await page.locator('script[type="application/ld+json"]').evaluateAll(nodes=>nodes.flatMap(node=>{
        const parsed=JSON.parse(node.textContent||'null');
        return Array.isArray(parsed)?parsed:parsed?.['@graph']||[parsed];
      }));
      const faq=schema.find(x=>x?.['@type']==='FAQPage');
      expect(faq?.mainEntity,row.path).toEqual(row.faq.map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}})));
      const collection=schema.find(x=>x?.['@type']==='CollectionPage');
      expect(collection,row.path).toMatchObject({name:row.copy.h1,description:row.copy.seoDescription,inLanguage:languages[locale]});
      const overflow=await page.evaluate(()=>({width:window.innerWidth,scroll:document.documentElement.scrollWidth}));
      expect(overflow.scroll,`${row.path} horizontal overflow`).toBeLessThanOrEqual(overflow.width+1);
    }
  });
}
