import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';
import { howToJsonLd } from '../src/lib/seo';

describe('service and structured-data factual accuracy', () => {
  it('does not invent a completion duration for arbitrary calculator instructions', () => {
    const data = howToJsonLd({ name: 'A calculator', description: 'Use the supplied inputs', path: '/en/example/', steps: ['Enter values'] });
    expect(data).not.toHaveProperty('totalTime');
    expect(data.step).toEqual([expect.objectContaining({ text: 'Enter values', url: 'https://calcuway.com/en/example/#step-1' })]);
  });

  it('keeps both German privacy-contact states in German', () => {
    const source = readFileSync(new URL('../src/pages/[locale]/contacts.astro', import.meta.url), 'utf8');
    const expression = source.match(/const privacyCopy = (\{[\s\S]*?\}\[[\s\S]*?\]);/)?.[1];
    expect(expression).toBeTruthy();
    const copy = runInNewContext(`(${expression})`, { locale: 'de' });
    expect(copy.action).toBe('Bei Datenschutzfragen schreiben');
    expect(copy.unavailable).toContain('Datenschutzanfragen');
    expect(copy.unavailable).not.toContain('A private privacy email');
  });

  it('provides the complete German contact card and subject blocks without an English fallback', () => {
    const source = readFileSync(new URL('../src/pages/[locale]/contacts.astro', import.meta.url), 'utf8');
    const expression = source.match(/const contactDetails: Partial<Record<Locale, ContactDetails>> = (\{[\s\S]*?\n\});/)?.[1];
    expect(expression).toBeTruthy();
    const details = runInNewContext(`(${expression})`).de;
    expect(details.channelTitle).toBe('Kontakt aufnehmen');
    expect(details.channelAction).toBe('Supportanfrage öffnen');
    expect(details.topicsTitle).toBe('Wobei wir helfen können');
    expect(details.publicChannelNote).toContain('öffentlich');
    expect(details.topics.map((topic: { title: string }) => topic.title)).toEqual([
      'Rechenfehler', 'Fragen zu den Daten', 'Datenschutz', 'Zusammenarbeit',
    ]);
    expect(Object.values(details).join(' ')).not.toContain('How to contact us');
  });

  for (const [locale, label] of Object.entries({
    ru: 'Сообщить об ошибке в калькуляторе',
    en: 'Report a calculator error',
    uk: 'Повідомити про помилку в калькуляторі',
    de: 'Fehler im Rechner melden',
    es: 'Informar de un error en la calculadora',
  })) {
    it(`${locale}: uses a localized calculator-error action in the shared footer`, () => {
      const source = readFileSync(new URL('../src/components/Footer.astro', import.meta.url), 'utf8');
      const expression = source.match(/const reportIssue = (\{[\s\S]*?\}\[locale\] \?\? 'Report a calculator error');/)?.[1];
      expect(expression).toBeTruthy();
      expect(runInNewContext(`(${expression})`, { locale })).toBe(label);
    });
  }
});
