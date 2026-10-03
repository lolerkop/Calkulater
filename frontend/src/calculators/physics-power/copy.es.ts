import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsPowerCopyEs: CalculatorCopy = {
  name: "Calculadora de potencia mecánica",
  slug: "potencia-mecanica",
  shortDescription: "Potencia, trabajo o tiempo a partir de P = W ÷ t.",
  seoTitle: "Calculadora de potencia mecánica — P = W ÷ t",
  seoDescription: "Calcula la potencia mecánica, el trabajo o el tiempo a partir de P = W ÷ t en unidades del SI.",
  h1: "Calculadora de potencia mecánica",
  keywords: ["calculadora de potencia mecánica", "potencia a partir del trabajo y el tiempo", "calculadora p = w/t"],
  longDescription: "Relaciona trabajo mecánico y tiempo: calcula potencia media, duración o trabajo con una potencia media constante. Compara así ritmos de elevación y transferencia de energía. Un vatio es un julio por segundo; la potencia no es energía almacenada. El resultado no es la potencia eléctrica consumida por un motor porque no se incluyen pérdidas ni rendimiento.",
  howToUse: ["Elige potencia, tiempo o trabajo e introduce las dos magnitudes conocidas.", "Usa julios, segundos y vatios: multiplica minutos por 60 y kilojulios por 1000.", "Trabajo y potencia son no negativos. Los modos de potencia y trabajo exigen duración positiva; potencia cero no permite determinar duración."],
  howItWorks: "Pmedia = W/t; t = W/P; W = Pmedia t. Es un promedio temporal; una potencia variable requiere integración. El caballo de vapor métrico equivale a 735,49875 W. El trabajo de una fuerza puede ser negativo, pero esta interfaz calcula una cantidad no negativa de energía transferida.",
  example: "1000 J en 10 s dan P = 100 W = 0,136 CV. El mismo trabajo en 20 s da 50 W. En modo inverso, 600 J a 50 W necesitan 12 s; 75 W durante 4 s transfieren 300 J.",
  faq: [{"q": "¿Es la potencia instantánea del motor?", "a": "No. W/t da la potencia media del intervalo. La potencia máxima o instantánea puede ser distinta."}, {"q": "¿Puedo usar el trabajo de elevación mgh?", "a": "Sí, como trabajo útil ideal. Dividirlo entre el tiempo da potencia útil media; para la potencia de entrada al motor también hace falta su rendimiento."}, {"q": "¿Por qué cero vatios no determina el tiempo?", "a": "Un trabajo no nulo no se completa en tiempo finito con potencia cero. Si ambos son cero, el tiempo sigue indeterminado: 0/0 no da una respuesta."}, {"q": "¿El caballo de vapor métrico equivale al horsepower mecánico?", "a": "No. Aquí se usa el CV métrico: 735,49875 W. Un hp mecánico equivale aproximadamente a 745,6999 W. Así, 100 W son unos 0,136 CV. Comprueba la unidad de la ficha técnica antes de comparar equipos."}],
  disclaimer: "Potencia mecánica media no negativa. No se calculan rendimiento, cargas máximas ni potencia de la red eléctrica.",
};
