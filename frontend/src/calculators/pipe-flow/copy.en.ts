import type { CalculatorCopy } from '../../lib/platform/types';

export const pipeFlowCopyEn: CalculatorCopy = {
  name: "Pipe flow velocity calculator",
  slug: "pipe-flow-velocity",
  shortDescription: "Water velocity in a pipe from flow rate and inner diameter.",
  longDescription:
    "Flow velocity drives noise, head loss and pipe wear, so it is checked before a pump is chosen. It is the flow rate divided by the cross-section, and two details matter: the diameter must be the INNER one, and it enters squared. On polypropylene the outer and inner diameters differ so much that a mistake here doubles the answer.",
  seoTitle: "Pipe flow velocity calculator \u2014 from flow rate and diameter",
  seoDescription: "Calculate water velocity in a pipe from the flow rate in cubic metres per hour and the inner diameter.",
  h1: "Pipe flow velocity calculator",
  keywords: ["pipe flow velocity", "water flow rate", "pipe inner diameter", "pipe sizing"],
  howToUse: [
    "Use the INNER diameter: on polypropylene and multilayer pipe it is noticeably smaller than the outer.",
    "Flow rate is in cubic metres per hour \u2014 the unit pumps and meters are rated in.",
    "Domestic heating and plumbing usually keep velocity within 1.5\u20132 m/s.",
    "Above two metres per second the pipe starts to sing and bends wear faster.",
  ],
  howItWorks: "Velocity = flow rate / cross-section area, area = \u03c0d\u00b2/4.",
  example: "10 m\u00b3/h through a 50 mm inner diameter gives 1.415 m/s.",
  faq: [
    { q: "What velocity is normal?", a: "Domestic systems usually aim for 1.5\u20132 m/s. Below that the pipework gets needlessly expensive; above it the system becomes audible, head loss climbs and bends and fittings wear faster." },
    { q: "Why the inner diameter specifically?", a: "Because that is where the water goes. A polypropylene pipe with a 32 mm outer diameter may have a 21 mm bore \u2014 2.3 times less area and 2.3 times the velocity you would get from the outer figure." },
    { q: "How do I bring the velocity down?", a: "Increase the diameter. Area grows as the square: going from 50 to 63 mm cuts velocity by about 1.6 times. Reducing the flow is usually not an option \u2014 the consumers set it." },
    { q: "Is head loss included?", a: "No, this is velocity only. Losses also depend on length, roughness and fittings, but velocity is the first check: it shows immediately whether the diameter is undersized." },
  ],
};
