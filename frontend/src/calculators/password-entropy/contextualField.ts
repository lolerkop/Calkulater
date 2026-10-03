import type { CalculatorContextualField } from '../../lib/platform/types';
const units = {"length": "знаков", "rate": "10⁹ попыток/с"};
const native: Record<string, readonly string[]> = {"знаков": ["знаков", "characters", "знаків", "Zeichen", "caracteres"], "10⁹ попыток/с": ["10⁹ попыток/с", "10⁹ attempts/s", "10⁹ спроб/с", "10⁹ Versuche/s", "10⁹ intentos/s"]};
const localeIndex: Record<string,number> = {ru:0,en:1,uk:2,de:3,es:4};
const rateHelp = [
  "Предполагаемая скорость перебора в миллиардах попыток в секунду: 1 = 10⁹ попыток/с. Это значение сценария, а не измеренная скорость атаки.",
  "Assumed verification speed in billions of attempts per second: 1 = 10⁹ attempts/s. This is a scenario value, not a measured attack speed.",
  "Припущена швидкість перебору в мільярдах спроб за секунду: 1 = 10⁹ спроб/с. Це значення сценарію, а не виміряна швидкість атаки.",
  "Angenommene Prüfrate in Milliarden Versuchen pro Sekunde: 1 = 10⁹ Versuche/s. Dies ist ein Szenariowert, keine gemessene Angriffsgeschwindigkeit.",
  "Velocidad de comprobación supuesta en miles de millones de intentos por segundo: 1 = 10⁹ intentos/s. Es un valor del escenario, no una velocidad de ataque medida."
];
const dynamic: Record<string, readonly [string,Record<string,string>]> = {};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
 const i = localeIndex[locale] ?? 1;
 const pair = dynamic[field.name];
 if (pair) { const key = values[pair[0]]; const unit = typeof key === 'string' && Object.hasOwn(pair[1],key) ? pair[1][key] : undefined; return {...field,unit}; }
 if (field.name === 'rate') return {...field, unit: native[units.rate]?.[i] ?? units.rate, help: rateHelp[i]};
 const unit = units[field.name as keyof typeof units];
 return unit ? {...field,unit:native[unit]?.[i] ?? unit} : field;
};
