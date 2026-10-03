import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const coaxialCableImpedanceCopyEn: CalculatorCopy = {
  ...{
    "name": "Coaxial cable impedance calculator",
    "slug": "coaxial-cable-impedance",
    "shortDescription": "Characteristic impedance of coax from the conductor and shield diameters and the dielectric.",
    "seoTitle": "Coaxial cable impedance calculator",
    "seoDescription": "Compute the characteristic impedance of coaxial cable from the conductor and shield diameters, with capacitance per metre and velocity factor.",
    "h1": "Coaxial cable impedance calculator",
    "keywords": [
      "characteristic impedance",
      "coaxial cable",
      "velocity factor",
      "50 ohm"
    ]
  },
  ...contract.en,
};
