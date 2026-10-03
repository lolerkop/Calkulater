import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const coordinateConvertCopyEn: CalculatorCopy = {
  name: "Coordinate converter — DMS and decimal degrees",
  slug: "coordinates-dms-decimal",
  shortDescription: "Convert coordinates between degrees-minutes-seconds and decimal degrees.",
  seoTitle: "Coordinate converter — degrees minutes seconds to decimal",
  seoDescription: "Convert geographic coordinates from degrees, minutes and seconds into decimal degrees and back, with the hemisphere handled explicitly.",
  h1: "Coordinate converter — DMS and decimal degrees",
  keywords: ["coordinate converter", "dms to decimal degrees", "gps coordinate converter", "decimal degrees converter"],
  ...contractContent.en
};
