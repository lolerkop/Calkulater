import type { CalculatorCopy } from '../../lib/platform/types';

export const coordinateConvertCopyEn: CalculatorCopy = {
  name: "Coordinate converter — DMS and decimal degrees",
  slug: "coordinates-dms-decimal",
  shortDescription: "Convert coordinates between degrees-minutes-seconds and decimal degrees.",
  longDescription:
    "Converts a geographic coordinate from degrees, minutes and seconds into decimal degrees and back. Maps and devices disagree on the notation: paper charts and aviation data keep minutes and seconds, while browser maps and GPX files use signed decimal degrees. In that pair the sign carries the hemisphere — DMS never writes a minus, it writes a letter instead — so the direction lives in its own field here rather than inside the number.",
  seoTitle: "Coordinate converter — degrees minutes seconds to decimal",
  seoDescription: "Convert geographic coordinates from degrees, minutes and seconds into decimal degrees and back, with the hemisphere handled explicitly.",
  h1: "Coordinate converter — DMS and decimal degrees",
  keywords: ["coordinate converter", "dms to decimal degrees", "gps coordinate converter", "decimal degrees converter"],
  howToUse: [
    "Choose the direction of the conversion.",
    "From DMS, enter degrees, minutes and seconds and pick the hemisphere.",
    "The other way, enter signed decimal degrees: a minus means south or west.",
    "Mind the range: latitude stays within 90°, longitude within 180°.",
  ],
  howItWorks: "Decimal degrees = degrees + minutes ÷ 60 + seconds ÷ 3600. Back again: the integer part gives degrees, the fraction times 60 gives minutes, and the remainder times 60 gives seconds.",
  example: "55°45′30″ north is 55.7583 decimal degrees.",
  faq: [
    { q: "Why is the hemisphere a separate field?", a: "Because DMS never writes a minus — direction is a letter. The sign only appears in the decimal notation, and mixing the two systems in one field would invite mistakes." },
    { q: "How many decimals are enough?", a: "Four decimals is roughly eleven metres of latitude. That covers an address or a map pin; surveying needs six or more." },
    { q: "Why are seconds shown with a fraction?", a: "Because rounding a second to a whole number shifts the point by about thirty metres. The fraction is precision, not pedantry." },
    { q: "Latitude or longitude?", a: "The formula is identical. Only the range differs: latitude stops at 90°, longitude at 180°." },
  ],
};
