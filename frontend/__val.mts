import { getCalculators } from './src/lib/i18n';
import { runtimeFor } from './src/calculators/runtime.generated';
import { localizeResult } from './src/components/islands/calculator/resultLocalization';
import { validateValues } from './src/components/islands/calculator/validation';
import { buildInitialValues } from './src/lib/shareLink';
const CYR = /[А-Яа-яЁё]/;
const EN = /\b(the|and|with|from|your|this|that|which|must|cannot|choose|enter|value|greater|less|than|invalid|check|use|format|be|number|positive|required)\b/i;
for (const loc of ['es','de'] as const) {
  let checked = 0; const cyr: string[] = []; const eng: string[] = [];
  for (const c of getCalculators(loc as never)) {
    const rt = runtimeFor(c.id);
    const base = buildInitialValues(c.fields) as Record<string, unknown>;
    const broken: Record<string, unknown>[] = [
      Object.fromEntries(Object.entries(base).map(([k, v]) => [k, typeof v === 'number' ? -1 : v])),
      Object.fromEntries(Object.entries(base).map(([k, v]) => [k, typeof v === 'number' ? 0 : v])),
      Object.fromEntries(Object.entries(base).map(([k, v]) => [k, typeof v === 'number' ? '' : (typeof v === 'string' && /^\d{4}-/.test(v) ? '2026-13-45' : v)])),
      Object.fromEntries(Object.entries(base).map(([k, v]) => [k, typeof v === 'number' ? 1e12 : v])),
    ];
    for (const vals of broken) {
      const errs = validateValues(c.id, c.fields, vals as never, loc as never, rt);
      for (const [f, m] of Object.entries(errs)) {
        checked++;
        if (CYR.test(String(m))) cyr.push(`${c.id}/${f}: «${m}»`);
        else if (EN.test(String(m))) eng.push(`${c.id}/${f}: «${m}»`);
      }
      let r; try { r = rt.compute(vals as never); } catch { continue; }
      if (!r) continue;
      const l = localizeResult(r, loc as never, c.id, rt);
      const blob = [l.primary?.label, l.primary?.value, l.note, ...(l.secondary ?? []).flatMap((x: any) => [x.label, x.value])].filter(Boolean).join(' ');
      checked++;
      if (CYR.test(blob)) cyr.push(`${c.id} (результат): «${blob.slice(0, 130)}»`);
      else if (EN.test(blob)) eng.push(`${c.id} (результат): «${blob.slice(0, 130)}»`);
    }
  }
  console.log(`  ${loc}: проверено ${checked} | с кириллицей ${cyr.length} | с английскими словами ${eng.length}`);
  for (const x of cyr.slice(0, 5)) console.log('       CYR', x);
  for (const x of eng.slice(0, 5)) console.log('       EN ', x);
}
