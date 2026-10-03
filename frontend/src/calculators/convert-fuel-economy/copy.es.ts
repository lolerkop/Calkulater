import type { CalculatorCopy } from '../../lib/platform/types';

export const convertFuelEconomyCopyEs: CalculatorCopy = {
  "name": "Conversor de consumo de combustible",
  "slug": "conversor-de-consumo",
  "shortDescription": "Convierte el consumo entre l/100 km, km/l y millas por galón.",
  "seoTitle": "Conversor de consumo: l/100 km, km/l y mpg",
  "seoDescription": "Convierte el consumo de combustible entre litros a los 100 km, kilómetros por litro y millas por galón, tanto estadounidense como británico.",
  "h1": "Conversor de consumo de combustible",
  "keywords": [
    "conversor de consumo",
    "l/100km a mpg",
    "mpg a litros",
    "consumo de combustible"
  ],
  "longDescription": "Convierte l/100 km, km/l y mpg estadounidenses o británicas. El consumo por distancia y la distancia por combustible guardan una relación inversa: doblar l/100 km reduce las mpg a la mitad. La relación entre km/l y mpg es proporcional. Los galones difieren y sus mpg aparecen por separado.",
  "howToUse": [
    "Introduce la cifra de consumo.",
    "Elige la unidad en la que viene.",
    "Elige la unidad que quieres.",
    "Las otras tres se muestran al lado para comparar."
  ],
  "howItWorks": "Toda unidad pasa por l/100 km. Los kilómetros por litro guardan relación inversa: 100 ÷ valor. Las millas por galón se convierten como 100 × volumen del galón ÷ (valor × 1,609344). Un galón estadounidense son 3,785411784 l y uno imperial, 4,54609 l.",
  "example": "Un consumo de 8 l/100 km son 12,5 km/l, 29,402 mpg (EE. UU.) y 35,31 mpg (Reino Unido).",
  "faq": [
    {
      "q": "¿Por qué no basta con multiplicar por un factor?",
      "a": "Porque la relación es inversa, no proporcional. Los litros a los cien kilómetros suben a medida que bajan las millas por galón, así que la conversión pasa por una división y no existe ningún multiplicador constante entre ambas."
    },
    {
      "q": "¿En qué se diferencian las mpg estadounidenses y las británicas?",
      "a": "Para el mismo consumo real, la cifra de mpg británicas es aproximadamente un 20,1% mayor que la estadounidense porque el galón es mayor. La misma cifra, como 30 mpg, expresa consumos distintos en ambos sistemas; elige el galón indicado."
    },
    {
      "q": "¿Qué unidad se usa en cada sitio?",
      "a": "Los litros a los 100 km son el estándar en Europa continental, los kilómetros por litro se usan en parte de Asia y de América Latina, y las millas por galón en Estados Unidos y el Reino Unido."
    },
    {
      "q": "¿Un número más bajo es mejor o peor?",
      "a": "Depende de la unidad, y ahí está la confusión habitual. En litros a los 100 km, cuanto más bajo mejor; en kilómetros por litro y en millas por galón, cuanto más alto mejor."
    },
    {
      "q": "¿La misma reducción en l/100 km ahorra la misma cantidad de combustible?",
      "a": "Sí, para la misma distancia. Tanto 10→9 como 6→5 l/100 km ahorran 1 l por cada 100 km, o 10 l en 1000 km. Los cambios correspondientes en mpg difieren por la relación inversa; la amortización también necesita datos de coste y distancia."
    }
  ],
  "disclaimer": "Conversión de unidades del valor introducido. No predice el consumo real ni la amortización; las cifras mostradas están redondeadas."
};
