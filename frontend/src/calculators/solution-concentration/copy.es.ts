import type { CalculatorCopy } from '../../lib/platform/types';

export const solutionConcentrationCopyEs: CalculatorCopy = {
  "name": "Calculadora de concentración de disoluciones",
  "slug": "concentracion-de-disoluciones",
  "shortDescription": "Porcentaje en masa, masa por volumen y partes por millón.",
  "seoTitle": "Calculadora de concentración de disoluciones — porcentaje y ppm",
  "seoDescription": "Calcula la concentración de una disolución: porcentaje en masa, masa por volumen y partes por millón.",
  "h1": "Calculadora de concentración de disoluciones",
  "keywords": [
    "calculadora de concentración de disoluciones",
    "concentración porcentual",
    "fracción másica",
    "calculadora de ppm"
  ],
  "longDescription": "Elige fracción másica o masa de soluto por volumen de disolución terminada. El primer modo muestra porcentaje en masa y ppm en masa; el segundo, gramos por 100 ml (% m/v) y g/l. La masa o el volumen del disolvente no sustituyen la cantidad total de disolución.",
  "howItWorks": "m/m: 100 × masa de soluto/masa de disolución; ppm: 10⁶ × la misma relación de masas. m/v: 100 × m/V, con m en g y V en ml, da g por 100 ml; 1000 × m/V da g/l. El límite masa de soluto ≤ masa de disolución solo se aplica a m/m. La masa de soluto debe ser finita y no negativa; la masa y el volumen de disolución deben ser finitos y positivos. Los resultados no representables producen un error; los valores pequeños no se muestran como cero.",
  "example": "25 g en 500 g de disolución dan 5,00% en masa, 50 000 ppm y 475 g de disolvente. 3 g en 100 ml de disolución terminada dan 3,00% m/v y 30 g/l.",
  "howToUse": [
    "Elige fracción másica o masa por volumen.",
    "Introduce la masa de soluto en gramos.",
    "Introduce la masa total de disolución en gramos o su volumen final en mililitros."
  ],
  "faq": [
    {
      "q": "¿Por qué se introduce la masa de disolución?",
      "a": "El soluto forma parte del total. Para 25 g de soluto y 475 g de disolvente se introducen 500 g de disolución. La diferencia se muestra por separado."
    },
    {
      "q": "¿Qué significa el porcentaje masa por volumen?",
      "a": "Gramos de soluto por 100 ml de disolución, no fracción volumétrica. Compararlo con el porcentaje en masa requiere la densidad de la disolución."
    },
    {
      "q": "¿Puede superar el 100%?",
      "a": "La fracción másica no: un componente no puede superar la masa total. Para g por 100 ml no existe un límite universal de 100; no se comprueba la solubilidad."
    },
    {
      "q": "¿ppm equivale a mg/l?",
      "a": "Aquí ppm significa mg por kg de disolución, una relación de masas. La igualdad con mg/l exige una densidad de 1 kg/l, que no se presupone."
    },
    {
      "q": "¿Puede ser cero la masa de soluto?",
      "a": "Sí. Con masa o volumen de disolución positivos, 0 g de soluto dan 0% y respectivamente 0 ppm o 0 g/l. Perder una concentración positiva hasta cero durante el cálculo produce un error."
    }
  ],
  "disclaimer": "Se calculan fracción másica y concentración másica, no fracción volumétrica ni solubilidad. ppm se refiere a masa. La aritmética y la visualización se redondean."
};
