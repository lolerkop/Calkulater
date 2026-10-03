import { describe, expect, it } from 'vitest';
import { editorialShingles, editorialSimilarity, isCompactFormula, normalizeEditorialText } from '../src/lib/originalityAudit';

describe('local editorial repeat heuristics', () => {
  it('finds a reused paragraph despite punctuation, capitalization and page names elsewhere', () => {
    const paragraph = 'Enter the amount and annual interest rate. The contribution is added at the end of each month.';
    const other = 'ENTER THE AMOUNT, AND ANNUAL INTEREST RATE! The contribution is added at the end of each month.';
    expect(editorialSimilarity(editorialShingles(paragraph), editorialShingles(other)).jaccard).toBe(1);
  });
  it('does not equate two subject-specific paragraphs sharing only short interface phrases', () => {
    const a = editorialShingles('Enter the amount. A loan fee increases total repayment without changing the scheduled principal payment.');
    const b = editorialShingles('Enter the amount. Paint coverage depends on coats, surface area and consumption per square metre.');
    expect(editorialSimilarity(a, b).jaccard).toBe(0);
  });
  it('handles empty text and detects a copied subsection embedded in a longer article', () => {
    const text = 'Each contribution earns interest only after it has been added to the capital at the end of the month.';
    expect(editorialSimilarity(new Set(), editorialShingles(text)).containment).toBe(0);
    expect(editorialSimilarity(editorialShingles(text), editorialShingles(text + ' Tax and lender contract dates require a separate calculation.')).containment).toBe(1);
  });
  it('excludes compact formulas without excluding long prose which mentions one', () => {
    expect(isCompactFormula('E = m × g × h')).toBe(true);
    expect(isCompactFormula('E = mgh. ' + 'This paragraph explains the reference level and the circumstances in which gravitational acceleration varies. '.repeat(4))).toBe(false);
    expect(normalizeEditorialText('Масса, кг — MÄßE １２')).toContain('масса');
  });
});
