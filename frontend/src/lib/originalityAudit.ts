/** Local review heuristics, never a plagiarism certificate or a Google quality score. */
export function normalizeEditorialText(text: string): string {
  return text.normalize('NFKC').toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

export function editorialShingles(text: string, size = 6): Set<string> {
  const words = normalizeEditorialText(text).split(/\s+/).filter(Boolean);
  const result = new Set<string>();
  for (let index = 0; index + size <= words.length; index++) {
    result.add(words.slice(index, index + size).join(' '));
  }
  return result;
}

export function editorialSimilarity(a: Set<string>, b: Set<string>) {
  let intersection = 0;
  for (const shingle of a) if (b.has(shingle)) intersection++;
  return {
    jaccard: a.size + b.size > intersection ? intersection / (a.size + b.size - intersection) : 0,
    containment: Math.min(a.size, b.size) > 0 ? intersection / Math.min(a.size, b.size) : 0,
    intersection,
  };
}

/** Ignore compact symbolic formulas; their reuse is mathematically justified. */
export function isCompactFormula(text: string): boolean {
  return /[=÷×]/.test(text) && normalizeEditorialText(text).split(/\s+/).length <= 30;
}
