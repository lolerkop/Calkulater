import type { CalculatorCopy } from '../../lib/platform/types';

export const molarityCopyEs: CalculatorCopy = {
  "name": "Calculadora de molaridad",
  "slug": "calculadora-de-molaridad",
  "shortDescription": "Concentración molar de una disolución a partir de los moles o de una masa.",
  "seoTitle": "Calculadora de molaridad — concentración de una disolución en mol/l",
  "seoDescription": "Calcula la concentración molar de una disolución a partir de la cantidad de sustancia o de una masa y una masa molar.",
  "h1": "Calculadora de molaridad",
  "keywords": [
    "calculadora de molaridad",
    "concentración molar",
    "moles por litro",
    "concentración de una disolución"
  ],
  "longDescription": "La molaridad es la cantidad de sustancia por volumen de disolución terminada. Introduce moles o masa en gramos con masa molar en g/mol. El volumen admite ml, l y m³. No se identifica la sustancia ni se comprueba su solubilidad.",
  "howItWorks": "C = n/V en litros; en el modo de masa, n = m/M. 1 ml = 0,001 l y 1 m³ = 1000 l. Las divisiones se reordenan para conservar resultados finitos cuando una conversión intermedia desborda. Masa y cantidad deben ser finitas y no negativas; volumen y masa molar deben ser finitos y positivos. El volumen suele mostrarse en litros; si esa conversión no es representable, se mantiene la unidad original.",
  "example": "0,5 mol en 2 l dan 0,25 mol/l. 58,44 g con M = 58,44 g/mol en un volumen final de 500 ml dan 1 mol / 0,5 l = 2 mol/l.",
  "howToUse": [
    "Elige cantidad de sustancia o masa.",
    "Introduce un valor finito no negativo; para masa indica M en g/mol.",
    "Selecciona la unidad e introduce el volumen final de toda la disolución."
  ],
  "faq": [
    {
      "q": "¿Qué volumen se necesita?",
      "a": "El de la disolución terminada a la temperatura elegida. Los volúmenes de disolvente y soluto no tienen por qué sumarse; no se presupone un aumento universal."
    },
    {
      "q": "¿Puedo introducir mililitros?",
      "a": "Sí, selecciona ml. 500 ml se interpretan como 0,5 l. No conviertas antes el número manualmente."
    },
    {
      "q": "¿En qué difiere de la molalidad?",
      "a": "La molaridad divide moles por volumen de disolución; la molalidad, por masa de disolvente en kg. Aquí no se calcula la molalidad."
    },
    {
      "q": "¿Puedo introducir un porcentaje en masa?",
      "a": "No. Convertirlo a mol/l requiere una masa molar adecuada y la densidad de la disolución. Un porcentaje no es una cantidad de moles."
    },
    {
      "q": "¿Puede ser cero la masa o cantidad de sustancia?",
      "a": "Sí. 0 mol con volumen positivo da 0 mol/l; 0 g con masa molar y volumen positivos también. Perder una cantidad o concentración positiva hasta cero produce un error."
    }
  ],
  "disclaimer": "Se utiliza el volumen final introducido. No se modelan temperatura, densidad, actividad ni solubilidad. Las magnitudes no representables producen un error; la visualización se redondea."
};
