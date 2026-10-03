import {createCountValidator} from '../../../../lib/platform/numericCountValidator';
import type {CalculatorLocalization} from '../../../../lib/platform/types';
const localization:CalculatorLocalization = {
 en:{values:{'Количество должно быть целым в допустимом диапазоне':'Enter a whole count within the allowed range'}},
 uk:{values:{'Количество должно быть целым в допустимом диапазоне':'Введіть цілу кількість у допустимих межах'}},
 de:{values:{'Количество должно быть целым в допустимом диапазоне':'Gib eine ganze Anzahl im zulässigen Bereich ein'}},
 es:{values:{'Количество должно быть целым в допустимом диапазоне':'Introduce una cantidad entera dentro del intervalo permitido'}},
};
export const validate=createCountValidator(['quantity'],localization);
