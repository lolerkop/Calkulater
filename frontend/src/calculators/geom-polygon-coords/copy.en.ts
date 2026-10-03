import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const geomPolygonCoordsCopyEn: CalculatorCopy = {
  name: "Polygon area from coordinates calculator",
  slug: "polygon-area-coordinates",
  seoTitle: "Polygon area calculator from vertex coordinates (shoelace formula)",
  h1: "Polygon area from coordinates",
  keywords: ["polygon area from coordinates", "shoelace formula calculator", "irregular polygon area", "land plot area by coordinates"],
  ...contractContent.en,
};
