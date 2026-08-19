// Оформление измеренной величины.
//
// Извлечено ПОСЛЕ десяти реальных потребителей, а не до них: ровно тот же код
// стоял побайтово одинаково в десяти калькуляторах геометрии. Здесь только две
// вещи, у которых потребители уже есть, — подбор разрядов и символ единицы
// длины. Формул фигур здесь нет и не будет: площадь трапеции и площадь эллипса
// не сводятся к общему выражению, и попытка описать их данными превратила бы
// модуль в язык описания фигур.

/** Символ единицы длины по ASCII-коду поля. Коды латинские: кириллица в value утекает в английские данные. */
export const LENGTH_SYMBOL: Record<string, string> = { mm: 'мм', cm: 'см', m: 'м' };

export const lengthSymbol = (code: string): string => LENGTH_SYMBOL[code] ?? 'см';

/**
 * Разряды подбираются по величине: у площади в квадратных миллиметрах и у
 * объёма в кубометрах разумная точность разная, а хвост нулей читать мешает.
 * Округление — только на выводе; считается всё в полной точности.
 */
export const formatMeasure = (
  value: number,
  fmtNumber: (value: number, digits: number) => string,
): string => {
  const abs = Math.abs(value);
  const digits = abs >= 100 ? 2 : abs >= 1 ? 3 : abs >= 0.01 ? 4 : 6;
  const text = fmtNumber(Number(value.toFixed(digits)), digits);
  return text.includes(',') ? text.replace(/0+$/, '').replace(/,$/, '') : text;
};

/**
 * Оформление физической величины.
 *
 * Извлечено ПОСЛЕ восьми реальных потребителей: во всех восьми калькуляторах
 * физики этот блок стоял побайтово одинаково. Диапазон физических величин шире,
 * чем у размеров фигур, — сила 10⁻¹² Н законна, а обычное оформление показало
 * бы её нулём, — поэтому у краёв диапазона включается показательная запись.
 *
 * Здесь только оформление. Ни соотношений, ни единиц, ни решателя: Phase 12A
 * измерила, что сама алгебра (f = m·a, v = √(2E/m)) не повторяется вовсе.
 */
export const formatQuantity = (
  value: number,
  fmtNumber: (value: number, digits: number) => string,
): string => {
  const abs = Math.abs(value);
  if (abs > 0 && (abs < 1e-4 || abs >= 1e12)) {
    const [mantissa, exponent] = value.toExponential(3).split('e');
    return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
  }
  return formatMeasure(value, fmtNumber);
};
