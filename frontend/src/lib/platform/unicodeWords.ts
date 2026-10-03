// Product word-count convention, not linguistic segmentation. Letters and
// numbers from every script, combining marks and internal apostrophes/hyphens.
// Preserves the original code points: character counts do not normalize text.
const WORD = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*(?:['’ʼ‐‑-][\p{L}\p{N}][\p{L}\p{N}\p{M}]*)*/gu;
export const unicodeWords = (text: string): string[] => text.match(WORD) ?? [];
