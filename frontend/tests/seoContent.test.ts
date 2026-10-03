import { describe, expect, it } from 'vitest';
import { calculatorSeoContent } from '../src/data/calculatorSeoContent';
import { getCalculators, locales } from '../src/lib/i18n';
import { reviewedSharedFaqQuestions } from '../src/data/reviewedSharedFaqQuestions';

const forbiddenBoilerplate = [
  'перед разговором с банком, тренером, подрядчиком',
  'комиссии, точные даты, налоги, физические свойства материалов, состояние здоровья',
  'before talking to a bank, coach, contractor',
  'fees, exact dates, taxes, physical properties of materials, health conditions',
];

describe('calculator SEO content', () => {
  it('exists for every generated calculator page', () => {
    for (const locale of locales) {
      for (const calculator of getCalculators(locale)) {
        expect(calculator.seoContent, `${locale}/${calculator.id}`).toBeDefined();
      }
    }
  });

  it('keeps every content block specific and complete', () => {
    for (const locale of locales) {
      for (const calculator of getCalculators(locale)) {
        const id = calculator.id;
        const content = calculator.seoContent!;
        expect.soft(content.intro.trim(), `${locale}/${id} intro`).not.toBe('');
        expect.soft(content.howItWorks.trim(), `${locale}/${id} howItWorks`).not.toBe('');
        expect.soft(content.example.trim(), `${locale}/${id} example`).not.toBe('');
        expect.soft(content.tips.trim(), `${locale}/${id} tips`).not.toBe('');
        expect.soft(content.faq.length, `${locale}/${id} faq count`).toBeGreaterThan(0);
        expect.soft(content.faq.length, `${locale}/${id} faq count`).toBeLessThanOrEqual(7);

        for (const item of content.faq) {
          expect.soft(item.q.trim(), `${locale}/${id} FAQ question`).not.toBe('');
          expect.soft(item.a.trim(), `${locale}/${id} FAQ: ${item.q}`).not.toBe('');
        }

        const combined = [content.intro, content.howItWorks, content.example, content.tips, ...content.faq.flatMap((item) => [item.q, item.a])]
          .join(' ')
          .toLowerCase();
        for (const phrase of forbiddenBoilerplate) {
          expect.soft(combined, `${locale}/${id} boilerplate`).not.toContain(phrase);
        }
      }
    }
  });

  it('does not duplicate FAQ questions inside one calculator', () => {
    for (const locale of locales) {
      for (const calculator of getCalculators(locale)) {
        const questions = calculator.seoContent!.faq.map((item) => item.q.toLowerCase().trim());
        expect(new Set(questions).size, `${locale}/${calculator.id} FAQ questions`).toBe(questions.length);
      }
    }
  });

  it('requires a specific reviewed exception for shared FAQ questions across pages', () => {
    for (const locale of locales) {
      if (!['ru', 'en', 'uk'].includes(locale)) continue;
      const questions = new Map<string, { id: string; answer: string }[]>();
      for (const calculator of getCalculators(locale)) for (const item of calculator.seoContent!.faq) {
        const question = item.q.toLowerCase().trim();
        const records = questions.get(question) ?? [];
        records.push({ id: calculator.id, answer: item.a.toLowerCase().trim() });
        questions.set(question, records);
      }
      for (const [question, records] of questions) {
        if (records.length === 1) continue;
        const review = reviewedSharedFaqQuestions.find((entry) =>
          entry.locale === locale && entry.question.toLowerCase().trim() === question);
        expect(review, `${locale}: unreviewed shared question ${question}`).toBeDefined();
        expect(records.map((entry) => entry.id).sort()).toEqual([...review!.ids].sort());
        expect(new Set(records.map((entry) => entry.answer)).size, `${locale}: repeated FAQ answers`).toBe(records.length);
      }
    }
  });

  for (const review of reviewedSharedFaqQuestions.filter(review=>review.ids.length===2&&review.ids.includes('molarity' as never)&&review.ids.includes('moles' as never))) {
    it(`${review.locale}: the reviewed zero-input question retains two different subject answers`, () => {
      const calculators = getCalculators(review.locale);
      const answers = review.ids.map((id) => {
        const entry = calculators.find((calculator) => calculator.id === id)!.seoContent!.faq
          .find((item) => item.q === review.question);
        expect(entry, `${review.locale}/${id}: reviewed question disappeared`).toBeDefined();
        return entry!.a;
      });
      expect(answers[0]).not.toBe(answers[1]);
      expect(answers[0]).toMatch(/0\s*(?:моль|mol)\s*\/\s*(?:л|l)/i);
      expect(answers[1]).toMatch(/0\s*(?:г|g)/i);
    });
  }

  it('keeps manually written SEO content registered for priority pages', () => {
    expect(Object.keys(calculatorSeoContent.ru)).toContain('credit-calculator');
    expect(Object.keys(calculatorSeoContent.en)).toContain('bmi-calculator');
  });
});
