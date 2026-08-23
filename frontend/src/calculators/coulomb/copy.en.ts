import type { CalculatorCopy } from '../../lib/platform/types';

export const coulombCopyEn: CalculatorCopy = {
  name: "Coulomb's law calculator",
  slug: "coulombs-law",
  shortDescription: "The force between two point charges.",
  longDescription:
    "The force falls off as the square of the distance \u2014 like gravity \u2014 but unlike gravity it can both attract and repel: the charges set the sign. So the headline answer is shown as a magnitude and the nature of the interaction is spelled out in words: \"attraction\" reads better than a minus sign. Charges are entered in nanocoulombs and the distance in centimetres, the units textbooks actually use.",
  seoTitle: "Coulomb's law calculator \u2014 force between charges",
  seoDescription: "Calculate the force between two point charges by Coulomb's law, with field strength and potential energy.",
  h1: "Coulomb's law calculator",
  keywords: ["coulombs law", "force between charges", "electrostatics", "electric field strength"],
  howToUse: [
    "Charges in nanocoulombs: 1 nC is 10\u207b\u2079 C, a typical classroom magnitude.",
    "The sign matters: opposite signs attract, like signs repel.",
    "The distance is between centres and assumes point charges.",
    "This is for vacuum. In a medium with permittivity \u03b5 the force is \u03b5 times smaller.",
  ],
  howItWorks: "F = k\u00b7q\u2081\u00b7q\u2082/r\u00b2, with k = 8.99\u00b710\u2079 N\u00b7m\u00b2/C\u00b2.",
  example: "Charges of 1 and \u22121 nC 10 cm apart attract with 8.988\u00b710\u207b\u2077 N.",
  faq: [
    { q: "How is Coulomb's law like gravitation?", a: "Both fall off as the square of the distance and scale with the product of the \"charges\" \u2014 electric or mass. The key difference: mass is always positive, so gravity only attracts, while electric charge comes in two signs." },
    { q: "How much stronger is electrostatics than gravity?", a: "Incomparably. Two electrons repel electrically about 10\u2074\u00b2 times more strongly than they attract gravitationally. That is why bulk matter is electrically neutral: any imbalance is pulled straight back." },
    { q: "What is field strength?", a: "The force that would act on a unit positive charge at that point. It does not depend on the second charge and describes the field itself rather than a pair of bodies, which makes sources comparable." },
    { q: "Why can potential energy be negative?", a: "It is measured from infinity. For attracting charges you must do work to pull them infinitely apart, so their present energy sits below zero." },
  ],
};
