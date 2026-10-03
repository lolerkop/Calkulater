import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const angleCopyEn: CalculatorCopy = {
  "name": "Angle converter",
  "slug": "angle-converter",
  "shortDescription": "Convert angles between degrees, radians, gradians and turns.",
  "longDescription": "Converts angles between radians, degrees, gradians, turns, arcminutes and arcseconds. By definition, 180° = π rad and 400 gradians = one turn; the displayed numerical result is rounded.",
  "seoTitle": "Angle converter — degrees, radians, gradians, arcminutes",
  "seoDescription": "Convert angles between degrees, radians, gradians, turns, arcminutes and arcseconds.",
  "h1": "Angle converter",
  "keywords": [
    "angle converter",
    "degrees to radians",
    "gradians"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Conversion uses each unit’s relation to the radian, such as 1° = π/180 rad. The calculation uses a numerical approximation of π, so the result is not a symbolic expression of an exact angle.",
  "example": "180 degrees is π radians, and one degree is 60 arcminutes or 3600 arcseconds.",
  "faq": [
    {
      "q": "What is a gradian?",
      "a": "A hundredth of a right angle, so a full turn is 400 gradians. It is used in surveying."
    },
    {
      "q": "Why use π/180 instead of a short decimal?",
      "a": "The defining relation is 1° = π/180 rad. The calculation uses the available numerical approximation of π and rounds its display; writing 0.0174533 rad reduces precision further."
    },
    {
      "q": "Where are arcminutes used?",
      "a": "Astronomy, navigation and optics — one arcminute is a sixtieth of a degree."
    },
    {
      "q": "Does this handle latitude and longitude?",
      "a": "It converts the angle itself. Degrees-minutes-seconds coordinate notation is a separate format."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
