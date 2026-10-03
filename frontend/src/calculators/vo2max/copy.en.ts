import type { CalculatorCopy } from '../../lib/platform/types';

export const vo2maxCopyEn: CalculatorCopy = {
  "name": "VO2 max calculator",
  "slug": "vo2-max-calculator",
  "shortDescription": "Two empirical VO₂max estimates from existing Cooper or pulse data, with applicability limits.",
  "longDescription": "Estimates relative maximal oxygen uptake with two separate empirical models. Cooper mode uses an existing 12-minute distance; the original study compared 115 Air Force men’s runs with laboratory testing. The 15.3×HRmax/HRrest equation was initially tested in 46 well-trained men aged 21–51. Those groups do not establish equal applicability to every visitor. Expired-gas analysis directly measures oxygen uptake; distance or pulse calculations do not replace it.",
  "seoTitle": "VO2 max calculator — Cooper test and heart rate",
  "seoDescription": "Two empirical VO₂max estimates from existing Cooper or pulse data, with applicability limits.",
  "h1": "VO2 max calculator",
  "keywords": [
    "vo2 max calculator",
    "cooper test",
    "maximal oxygen uptake",
    "aerobic fitness"
  ],
  "howToUse": [
    "Choose the method for which suitable data already exist.",
    "Enter exactly 12-minute distance from an appropriately conducted test; this calculator does not ask you to begin maximal effort.",
    "For pulse mode enter rest and a known maximum; an age-estimated maximum adds its own prediction error.",
    "Compare repeat results from one method under comparable conditions."
  ],
  "howItWorks": "Commonly used distance estimate: VO₂max = (D−504.9)/44.73, D in metres. Pulse estimate: VO₂max =15.3×HRmax/HRrest. Output is mL oxygen/kg/min. D≤504.9 makes the first expression nonpositive, so the estimate is unavailable. That mathematical boundary does not validate every larger distance.",
  "example": "2600 m in 12 minutes: (2600−504.9)/44.73=46.839 mL/kg/min. Other mode: maximum 190, rest 60 →15.3×190/60=48.45. With rest 55 the same maximum gives 52.855. Different assumptions mean these figures do not validate each other.",
  "faq": [
    {
      "q": "Which VO₂max estimate here is more reliable?",
      "a": "There is no universal winner. Distance depends on conditions and pacing; pulse ratio on measurements and fit to the studied group. Displayed decimal places do not measure personal accuracy."
    },
    {
      "q": "What calculated VO₂max should count as good?",
      "a": "This calculator supplies no universal age or sex norms. Interpretation depends on population and method; one value does not establish diagnosis or suitability for exertion."
    },
    {
      "q": "Should I seek maximum pulse specifically for VO₂max?",
      "a": "Not to use this calculation. Use existing data from an appropriate assessment or test. Maximal testing requires suitable participants; unprepared people need an individually chosen assessment."
    },
    {
      "q": "Can I compare Cooper and the pulse ratio?",
      "a": "They are two models, but agreement does not confirm measured oxygen uptake. Initial pulse-ratio validation covered trained men 21–51, not a universally safe substitute for testing."
    },
    {
      "q": "How does distance error affect Cooper’s estimate?",
      "a": "In this equation 50 m changes the answer by 50/44.73≈1.118 mL/kg/min. Track length, the final partial lap and GPS measurement matter even without a fitness change."
    }
  ],
  "disclaimer": "Empirical estimates, not diagnosis or exercise prescription. Cooper Institute describes testing for apparently healthy regularly active participants. Illness and pulse-altering medicines can limit the pulse model."
};
