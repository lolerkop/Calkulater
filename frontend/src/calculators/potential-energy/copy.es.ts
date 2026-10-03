import type { CalculatorCopy } from '../../lib/platform/types';

export const potentialEnergyCopyEs: CalculatorCopy = {
  name: "Calculadora de energía potencial",
  slug: "energia-potencial",
  shortDescription: "Energía potencial, altura o masa a partir de E = mgh.",
  seoTitle: "Calculadora de energía potencial — E = mgh",
  seoDescription: "Calcula la energía potencial, la altura o la masa a partir de E = mgh con el valor normal g = 9,80665 m/s².",
  h1: "Calculadora de energía potencial",
  keywords: ["calculadora de energía potencial", "energía potencial gravitatoria", "calculadora mgh"],
  longDescription: "Estima el cambio de energía al elevar una carga respecto a un nivel cero elegido, o despeja la altura o la masa. E = mgh supone gravedad terrestre constante; no describe la energía orbital, elástica ni eléctrica. Para comparar dos posiciones usa su diferencia vertical de altura. No se incluyen pérdidas ni rendimiento, por lo que no toda la energía será trabajo útil.",
  howToUse: ["Elige energía, altura o masa; cada modo necesita las otras dos magnitudes.", "Introduce kg, m y J. Para una elevación usa la diferencia vertical, no la longitud de una escalera o rampa.", "La interfaz acepta alturas y energías no negativas respecto al nivel cero. Para hallar la masa, la altura debe ser positiva."],
  howItWorks: "E = m · 9,80665 · h; h = E/(m · 9,80665); m = E/(9,80665 · h). g es la gravedad estándar, no una medida local. El modelo sirve para cambios de altura pequeños frente al radio terrestre; el cálculo directo exige masa positiva.",
  example: "5 kg × 9,80665 m/s² × 10 m = 490,3325 J, mostrado como 490,33 J. A la inversa, 490,3325 J y 5 kg dan 10 m. Una energía de 98,0665 J a 2 m corresponde a 5 kg. Usa la energía sin redondear al comprobar el cálculo inverso.",
  faq: [{"q": "¿La altura debe medirse sobre el mar?", "a": "Solo si ese es el nivel cero elegido. Para mover una carga del suelo a una estantería cuenta la diferencia de sus alturas."}, {"q": "¿Qué significa energía cero?", "a": "Con masa positiva y altura cero, E = 0 respecto a esa referencia. El cuerpo puede tener otras formas de energía."}, {"q": "¿Puedo estimar la potencia de un elevador?", "a": "E es el trabajo ideal de elevación. Divídelo entre el tiempo para obtener la potencia útil media; la potencia consumida también depende de pérdidas que no se calculan aquí."}, {"q": "¿Puedo sustituir la gravedad estándar por la local?", "a": "Aquí g está fijada en 9,80665 m/s². La gravedad local varía con el lugar y la altitud; el cálculo no es una medición geodésica. Si el problema indica otra g, aplica E = mgh con ese valor aparte."}],
  disclaimer: "E = mgh con gravedad estándar constante. No se introducen niveles negativos, gravedad local ni rendimiento.",
};
