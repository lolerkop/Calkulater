import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const contributionMarginCopyEs: CalculatorCopy = {
  name: "Calculadora de margen de contribución",
  slug: "margen-de-contribucion",
  shortDescription: "Lo que queda del precio tras los costes variables.",
  seoTitle: "Calculadora de margen de contribución — margen por unidad y su proporción",
  seoDescription: "Calcula el margen de contribución por unidad, su proporción sobre el precio y el margen de un volumen dado.",
  h1: "Calculadora de margen de contribución",
  keywords: ["margen de contribución","margen por unidad","economía unitaria"],
  ...contractContent.es,
};
