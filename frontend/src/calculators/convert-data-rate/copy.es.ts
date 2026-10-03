import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertDataRateCopyEs: CalculatorCopy = {
  "name": "Conversor de velocidad de datos",
  "slug": "conversor-de-velocidad-de-datos",
  "shortDescription": "Convierte la velocidad entre Mbit/s y MB/s: los bits no son bytes.",
  "seoTitle": "Conversor de velocidad de datos — de Mbit/s a MB/s",
  "seoDescription": "Convierte la velocidad de datos entre bits y bytes por segundo, megabits, megabytes y mebibytes.",
  "h1": "Conversor de velocidad de datos",
  "keywords": [
    "mbit a mb",
    "velocidad de internet",
    "conversor de velocidad de datos"
  ],
  "longDescription": "Convierte velocidades entre bits y bytes por segundo con prefijos decimales y a MiB/s con un prefijo binario. La relación entre Mbit/s y MB/s es ocho; por sí sola no determina la velocidad real de descarga.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del bit por segundo; un byte cuenta como ocho bits.",
  "example": "100 Mbit/s = 12,5 MB/s como conversión de unidades. La transferencia real depende del protocolo, del servidor y de la conexión.",
  "faq": [
    {
      "q": "¿Por qué 100 Mbit/s dan solo 12,5 MB/s?",
      "a": "Un byte contiene ocho bits. Los operadores anuncian bits y los gestores de archivos muestran bytes, así que la relación es exactamente ocho."
    },
    {
      "q": "¿En qué se diferencian MiB/s y MB/s?",
      "a": "Un mebibyte son 1024² bytes y un megabyte, 10⁶ bytes: alrededor de un 4,9 % más."
    },
    {
      "q": "¿Se incluye la sobrecarga del protocolo?",
      "a": "No: solo se convierten unidades. El rendimiento útil puede variar por la sobrecarga y las condiciones de la conexión."
    },
    {
      "q": "¿Cómo obtengo un volumen a partir de una velocidad?",
      "a": "Multiplícala por el tiempo. Para volúmenes existe un conversor de almacenamiento aparte."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
