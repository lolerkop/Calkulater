import type { CalculatorCopy } from '../../lib/platform/types';

export const angleCopyEn: CalculatorCopy = {
  name: 'Angle converter',
  slug: 'angle-converter',
  shortDescription: 'Convert angles between degrees, radians, gradians and turns.',
  longDescription:
    'Converts angles between radians, degrees, gradians, full turns, arcminutes and arcseconds. All factors are expressed through π rather than a decimal approximation, so 180° gives exactly π and 400 gradians give exactly one turn.',
  seoTitle: 'Angle converter — degrees, radians, gradians, arcminutes',
  seoDescription: 'Convert angles between degrees, radians, gradians, turns, arcminutes and arcseconds.',
  h1: 'Angle converter',
  keywords: ['angle converter', 'degrees to radians', 'gradians'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the radian using factors written as fractions of π.',
  example: '180 degrees is π radians, and one degree is 60 arcminutes or 3600 arcseconds.',
  faq: [
    { q: 'What is a gradian?', a: 'A hundredth of a right angle, so a full turn is 400 gradians. It is used in surveying.' },
    { q: 'Why not store degrees as 0.0174533 rad?', a: 'A decimal approximation is wrong in the sixth digit, and exact relationships such as 180° = π would stop holding.' },
    { q: 'Where are arcminutes used?', a: 'Astronomy, navigation and optics — one arcminute is a sixtieth of a degree.' },
    { q: 'Does this handle latitude and longitude?', a: 'It converts the angle itself. Degrees-minutes-seconds coordinate notation is a separate format.' },
  ],
};
