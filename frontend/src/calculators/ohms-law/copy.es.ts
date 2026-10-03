import type { CalculatorCopy } from '../../lib/platform/types';

export const ohmsLawCopyEs: CalculatorCopy = {
  name: "Calculadora de la ley de Ohm",
  slug: "ley-de-ohm",
  shortDescription: "Tensión, corriente o resistencia a partir de la pareja conocida, con potencia disipada.",
  seoTitle: "Calculadora de la ley de Ohm — tensión, corriente, resistencia y potencia",
  seoDescription: "Obtén la tensión, corriente o resistencia que falta y la potencia disipada de una carga óhmica a partir de dos magnitudes.",
  h1: "Calculadora de la ley de Ohm",
  keywords: ["ley de Ohm", "calcular resistencia", "tensión corriente resistencia", "potencia eléctrica"],
  longDescription: "Obtén la tensión, corriente o resistencia que falta en una carga óhmica y su potencia disipada. Elige la pareja conocida: U/I, U/R o I/R. La potencia es un resultado, no un modo de entrada. Se usan magnitudes no negativas; no se modelan la dirección de la corriente, la característica no lineal de un diodo ni el cambio de resistencia por temperatura.",
  howToUse: ["Elige la pareja realmente conocida; el tercer campo marcado como calculado no se usa.", "Introduce voltios, amperios y ohmios. Divide los miliamperios entre 1000: 20 mA = 0,020 A.", "Compara la disipación calculada con la potencia admisible del componente en sus condiciones de refrigeración; aquí no se elige el componente."],
  howItWorks: "U = IR; I = U/R con R > 0; R = U/I con I > 0. P = UI = I²R = U²/R para R positiva. En continua es potencia resistiva; para una carga de alterna puramente resistiva usa tensión y corriente eficaces.",
  example: "12 V y 2 A dan R = 12/2 = 6,00 Ω y P = 12 × 2 = 24,00 W. 5 V sobre 250 Ω dan I = 0,020 A y P = 0,10 W. U = 0 con R = 100 Ω da I = 0 y P = 0.",
  faq: [{"q": "¿Puedo introducir potencia en lugar de tensión?", "a": "No. Se admiten U/I, U/R e I/R; la potencia se calcula tras obtener la tercera magnitud."}, {"q": "¿Cuándo se admite cero en la ley de Ohm?", "a": "U = 0 con R > 0 da corriente cero. I = 0 con R conocida también da U = P = 0. Hallar R con I = 0 o I con R = 0 no está definido."}, {"q": "¿Describe un motor o un diodo?", "a": "No en general. Las cargas reactivas necesitan impedancia y factor de potencia; un diodo no tiene una resistencia óhmica U/I constante."}, {"q": "¿Qué ocurre con la potencia al duplicar la resistencia con la misma tensión?", "a": "Con tensión ideal constante U, I = U/R y P = U²/R. Duplicar R reduce corriente y potencia a la mitad. A 12 V y 6 Ω hay 24 W; a 12 Ω, 12 W. Con corriente constante la relación cambia: P = I²R."}],
  disclaimer: "Carga óhmica ideal con resistencia constante. El cálculo no acredita la seguridad del circuito, refrigeración o potencia nominal del componente.",
};
