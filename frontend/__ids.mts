import { getCalculators } from './src/lib/i18n';
import { esCalculatorContent } from './src/data/esCalculatorContent';
const done = new Set(Object.keys(esCalculatorContent));
console.log(getCalculators('en').filter(c=>c.category===process.argv[2] && !done.has(c.id)).map(c=>c.id).join(' ') || '(все готовы)');
