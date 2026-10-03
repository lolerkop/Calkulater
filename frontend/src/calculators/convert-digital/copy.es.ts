import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertDigitalCopyEs: CalculatorCopy = {
  "name": "Conversor de almacenamiento digital",
  "slug": "conversor-de-almacenamiento",
  "shortDescription": "Convierte bytes entre unidades decimales y binarias.",
  "seoTitle": "Conversor de almacenamiento — GB, GiB, MB y MiB",
  "seoDescription": "Convierte almacenamiento digital entre bytes, kilobytes, megabytes, gigabytes y sus equivalentes binarios.",
  "h1": "Conversor de almacenamiento digital",
  "keywords": [
    "conversor de almacenamiento",
    "gb a gib",
    "mb a mib",
    "bytes"
  ],
  "longDescription": "Convierte datos entre unidades decimales (kB, MB, GB, TB) y binarias (KiB, MiB, GiB, TiB). Un gigabyte tiene 1.000.000.000 bytes y un gibibyte, 1.073.741.824. Un terabyte son unos 931,32 GiB; los programas pueden mostrar cualquiera de los dos sistemas.",
  "howToUse": [
    "Introduce el tamaño.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Los prefijos decimales avanzan en potencias de 1000 y los binarios, en potencias de 1024.",
  "example": "1 TB son 931,32 GiB, y por eso la capacidad de los discos parece menor en el sistema operativo.",
  "faq": [
    {
      "q": "¿Es lo mismo un megabyte que un mebibyte?",
      "a": "No. Un megabyte son 1.000.000 de bytes y un mebibyte, 1.048.576. La diferencia crece con cada salto de prefijo."
    },
    {
      "q": "¿Por qué mi disco de 1 TB muestra 931 GB?",
      "a": "El fabricante cuenta terabytes decimales mientras que el sistema operativo informa en gibibytes binarios, aunque a menudo los etiquete como GB. El valor es el mismo; las unidades, no."
    },
    {
      "q": "¿Qué sistema debo usar?",
      "a": "Los fabricantes de almacenamiento y de red usan unidades decimales. Los sistemas operativos y las memorias suelen usar binarias. Sigue el que use tu fuente."
    },
    {
      "q": "¿Dónde encajan los bits?",
      "a": "Un byte son ocho bits. Las velocidades de red se indican normalmente en bits por segundo y el almacenamiento, en bytes."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
