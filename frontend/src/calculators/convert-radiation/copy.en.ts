import type { CalculatorCopy } from '../../lib/platform/types';

export const convertRadiationCopyEn: CalculatorCopy = {
  "name": "Radiation dose converter",
  "slug": "radiation-converter",
  "shortDescription": "Sieverts, millisieverts, microsieverts and rem, converted both ways.",
  "longDescription": "Converts equivalent-dose units: Sv, mSv, µSv, nSv, rem and mrem. Keep the same dosimetric quantity and exposure period. Absorbed dose in grays, activity in becquerels and dose rate in Sv/h are outside the unit list.",
  "seoTitle": "Radiation dose converter: sievert, millisievert, rem",
  "seoDescription": "Convert between sieverts, millisieverts, microsieverts, nanosieverts, rem and millirem.",
  "h1": "Radiation dose converter",
  "keywords": [
    "sievert to rem",
    "radiation dose converter",
    "mSv to µSv",
    "millirem conversion"
  ],
  "howToUse": [
    "Enter a finite nonnegative dose.",
    "Choose source and target units for the same dosimetric quantity.",
    "Read the multiplier in the ratio row; the exposure period is unchanged."
  ],
  "howItWorks": "1 mSv = 10⁻³ Sv; 1 µSv = 10⁻⁶ Sv; 1 nSv = 10⁻⁹ Sv; 1 rem = 0.01 Sv; 1 mrem = 10⁻⁵ Sv. Multiply the input by the ratio of unit factors. These factors are exact; machine arithmetic and display are rounded. Finite nonnegative input includes zero. Small nonzero results use scientific notation; overflow or loss to zero returns an error.",
  "example": "1 mSv = 1000 µSv; 250 mrem = 2.5 mSv. 1 nSv = 1 × 10⁻⁹ Sv, not a zero dose.",
  "faq": [
    {
      "q": "Why is Gy not included?",
      "a": "The gray measures absorbed energy per mass: 1 Gy = 1 J/kg. Equivalent dose in Sv uses radiation weighting factors. The relationship requires an exposure model, not a universal unit-conversion factor."
    },
    {
      "q": "Can Bq be converted to Sv?",
      "a": "No. Becquerels measure source activity rather than dose. Dose calculation needs radiation properties, geometry and exposure conditions."
    },
    {
      "q": "Are equivalent and effective dose interchangeable?",
      "a": "No, although both use Sv. Effective dose additionally applies tissue weights. This converter changes units of the entered quantity, not its physical meaning."
    },
    {
      "q": "What about µSv/h?",
      "a": "It is dose rate, not dose. There is no time input here. Finding dose requires a separate model integrating dose rate over the exposure period."
    },
    {
      "q": "Does the result determine safety?",
      "a": "No. A number without dose type, period and exposure conditions does not assess risk. The converter sets no medical or regulatory limits."
    }
  ],
  "disclaimer": "Only units of the same dosimetric quantity are changed. Gy, Bq and dose rates are not converted; exposure risk or acceptability is not assessed. Displayed values are rounded."
};
