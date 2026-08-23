import type { CalculatorCopy } from '../../lib/platform/types';

export const coaxialCableImpedanceCopyEn: CalculatorCopy = {
  name: "Coaxial cable impedance calculator",
  slug: "coaxial-cable-impedance",
  shortDescription: "Characteristic impedance of coax from the conductor and shield diameters and the dielectric.",
  longDescription:
    "The characteristic impedance of a cable is set by its geometry and dielectric alone: neither length nor frequency appears in the formula. A fifty-ohm cable is fifty ohms over a metre and over a hundred metres alike. Everything turns on the ratio of the shield diameter to the conductor: about 3.6 in polyethylene gives the classic 50 ohms, about 8.8 gives the television 75. The velocity factor explains why a piece of cable is electrically longer than it is physically — and without it you cannot cut a quarter-wave stub.",
  seoTitle: "Coaxial cable impedance calculator",
  seoDescription: "Compute the characteristic impedance of coaxial cable from the conductor and shield diameters, with capacitance per metre and velocity factor.",
  h1: "Coaxial cable impedance calculator",
  keywords: ["characteristic impedance", "coaxial cable", "velocity factor", "50 ohm"],
  howToUse: [
    "Use the inner diameter of the shield, measured over the dielectric rather than over the outer jacket.",
    "Permittivity: solid polyethylene 2.25, foamed 1.4–1.6, PTFE 2.1, air 1.",
    "A diameter ratio of 3.6 in polyethylene gives 50 ohms, 8.8 gives 75 ohms.",
    "The velocity factor is needed when cutting lengths in fractions of a wavelength: the physical length is shorter than the electrical one.",
  ],
  howItWorks: "Z₀ = 138/√εr · log₁₀(D/d); capacitance 2πε₀εr/ln(D/d); velocity factor 1/√εr.",
  example: "A 0.9 mm conductor inside a 2.95 mm shield with polyethylene gives 47.4 ohms — ordinary RG-58.",
  faq: [
    { q: "Does the impedance depend on cable length?", a: "No. It is set by the cross-section and the dielectric and is the same on any length. Attenuation and delay depend on length; the impedance does not." },
    { q: "Why 50 and 75 ohms specifically?", a: "They are compromises. Coax handles the most power near 30 ohms and has the least loss near 77; 50 sits in the middle for transmitters, while 75 is closer to the loss minimum for signal work." },
    { q: "What is the velocity factor?", a: "The ratio of the wave speed in the cable to the speed of light. In polyethylene it is about two thirds, so a quarter-wave stub is physically shorter than a quarter wavelength in air by exactly that factor." },
    { q: "What happens on a mismatch?", a: "Part of the power reflects back to the source. In a transmitter that heats the output stage; on a digital line it causes reflections and errors. That is why cable, connectors and load are all chosen for one impedance." },
  ],
};
