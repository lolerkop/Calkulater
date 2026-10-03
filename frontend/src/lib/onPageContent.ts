/** Compare authored prose without changing its spelling or punctuation. */
export function normalizeOnPageText(text: string): string {
  return text.replace(/[\s\u00a0\u202f]+/g, ' ').trim();
}

/** A separate useful tip survives; a second copy of the visible steps does not. */
export function distinctUsageTip(steps: readonly string[], tip: string): string {
  return normalizeOnPageText(tip) === normalizeOnPageText(steps.join(' ')) ? '' : tip;
}

/** Source-specific prose survives even when the common method is already shown. */
export function distinctSourceMethod(mainMethod: string, sourceMethod: string): string {
  return normalizeOnPageText(mainMethod) === normalizeOnPageText(sourceMethod) ? '' : sourceMethod;
}
