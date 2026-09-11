// Подробный испанский текст: раздел «chemistry».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esChemistryContent: Partial<Record<string, EsDetailedContent>> = {
  "dilution": {
    longDescription: "Resuelve el problema de la dilución en ambos sentidos: hasta qué volumen enrasar la disolución y cuánta disolución madre tomar. Una línea aparte indica cuánto disolvente hay que añadir, que suele ser la cifra que de verdad se busca en el laboratorio. La concentración final no puede superar a la inicial: añadir disolvente nunca hace más fuerte una disolución, así que un dato así se rechaza en vez de resolverse en silencio como una evaporación.",
    howToUse: [
      "Elige qué volumen necesitas hallar.",
      "Introduce las otras tres magnitudes.",
      "Consulta la respuesta y el volumen de disolvente que hay que añadir.",
    ],
    howItWorks: "La cantidad de sustancia disuelta no cambia al diluir, así que el producto de concentración por volumen se mantiene: C₁·V₁ = C₂·V₂. El volumen de disolvente es la diferencia entre el volumen final y el inicial.",
    example: "50 ml de una disolución 2 M enrasados hasta 200 ml dan 0,5 M: son 150 ml de disolvente añadidos.",
    faq: [
      { q: "¿En qué unidades deben ir las concentraciones?", a: "En cualquiera, mientras ambas vayan en las mismas. La regla trabaja con un cociente, así que la molaridad, el porcentaje y los gramos por litro sirven igual." },
      { q: "¿Por qué la concentración final no puede ser mayor que la inicial?", a: "Porque eso ya no es una dilución. Añadir disolvente no puede subir una concentración: eso exige evaporar, que es otra física y otra respuesta." },
      { q: "¿Qué indica la línea de «disolvente a añadir»?", a: "La diferencia entre el volumen final y el inicial, es decir, cuánto hay que verter de verdad. Esa es la cifra que suele hacer falta al preparar una disolución a mano." },
      { q: "¿Se tiene en cuenta el cambio de volumen al mezclar?", a: "No. Los volúmenes se tratan como aditivos, la aproximación habitual para disoluciones acuosas diluidas. En mezclas concentradas, contrasta con la densidad." },
    ],
  },
  "gas-laws": {
    longDescription: "Calcula cómo una misma porción de gas pasa de un primer estado a un segundo según la ley combinada de los gases. La diferencia con la ecuación de los gases ideales es sencilla: aquella página describe un solo estado a través de la cantidad de sustancia y la constante de los gases, mientras que aquí la cantidad se cancela —ambos estados contienen el mismo gas— y solo queda un cociente de tres magnitudes. Las leyes de Boyle, Charles y Gay-Lussac salen de esta fórmula al mantener constante una de ellas.",
    howToUse: [
      "Elige qué magnitud del segundo estado buscas.",
      "Introduce la presión, el volumen y la temperatura del primer estado.",
      "Rellena las dos magnitudes conocidas del segundo estado.",
      "Da las temperaturas en kelvin: suma 273,15 a una lectura en Celsius.",
    ],
    howItWorks: "Para una porción fija de gas el cociente p·V/T se mantiene constante, así que p₁V₁/T₁ = p₂V₂/T₂. La incógnita se despeja de esa igualdad.",
    example: "Dos litros a 100 kPa y 300 K, comprimidos a un litro a la misma temperatura, quedan en 200 kPa.",
    faq: [
      { q: "¿En qué se diferencia de la ecuación de los gases ideales?", a: "Aquella describe un solo estado a través de la cantidad de sustancia y la constante de los gases. Esta describe una transición entre dos estados de la misma porción, y la cantidad se cancela." },
      { q: "¿Por qué solo kelvin?", a: "Porque la fórmula usa un cociente de temperaturas. En Celsius el punto cero es arbitrario, y a cero grados el denominador se anularía." },
      { q: "¿Dónde están aquí las leyes de Boyle y de Charles?", a: "Son casos particulares. Mantén constante la temperatura y obtienes la ley de Boyle; mantén la presión y obtienes la de Charles." },
      { q: "¿Vale para un gas real?", a: "Como aproximación sí, a presiones moderadas y lejos de la condensación. Los gases comprimidos y los que están cerca de licuarse se desvían de forma apreciable." },
    ],
  },
  "ideal-gas-law": {
    longDescription: "Resuelve la ley de los gases ideales para la presión o para el volumen. La constante de los gases 8,314462618 solo vale en unidades base —pascales, metros cúbicos, moles y kelvin—, así que cada unidad que elijas se convierte a la base antes de sustituir y la respuesta se convierte de vuelta después. Justo ahí ocurre el error habitual: litros con kilopascales en la misma fórmula dan un resultado numéricamente verosímil y equivocado. Las temperaturas por debajo del cero absoluto se rechazan, y cero grados Celsius son 273,15 K y no cero.",
    howToUse: [
      "Elige si quieres hallar la presión o el volumen.",
      "Introduce la cantidad de sustancia y la temperatura, eligiendo su unidad.",
      "Introduce la magnitud restante en las unidades que te convengan y consulta la respuesta.",
    ],
    howItWorks: "PV = nRT con R = 8,314462618 J/(mol·K). Esa constante vale en pascales, metros cúbicos, moles y kelvin, así que las unidades elegidas se convierten a las base antes de sustituir y el resultado se convierte de vuelta después. Los grados Celsius pasan a kelvin sumando 273,15.",
    example: "Dos moles de gas a 300 K en 0,05 m³ ejercen una presión de 99 773,55 Pa, algo por debajo de la atmosférica.",
    faq: [
      { q: "¿Por qué hay que elegir las unidades en vez de escribirlas libremente?", a: "Porque la constante de los gases está atada a sus unidades. En pascales y metros cúbicos vale 8,314463; meter litros y kilopascales en la misma fórmula da un número verosímil y equivocado." },
      { q: "¿La temperatura tiene que ir en kelvin?", a: "La ecuación necesita temperatura absoluta, sí. Si te resulta más cómodo el Celsius, elígelo: la conversión de 273,15 se aplica por ti." },
      { q: "¿Qué ocurre a temperatura absoluta cero?", a: "La presión tiende a cero, que es un caso límite legítimo. Una temperatura por debajo del cero absoluto se rechaza: no existe tal estado." },
      { q: "¿Con qué fidelidad modela esto los gases reales?", a: "Bien a presiones moderadas y a temperaturas lejanas de la condensación. Cerca de la licuefacción y a presiones altas hacen falta correcciones que la ley de los gases ideales no incluye." },
    ],
  },
  "molar-mass": {
    longDescription: "Analiza una fórmula química y suma las masas atómicas, mostrando cuánto aporta cada elemento y qué proporción de la masa total lleva. Admite paréntesis, y anidados: Ca(OH)2 se lee como calcio más un grupo duplicado, no como cuatro símbolos seguidos. El alcance se declara con claridad: hay ocho elementos admitidos —hidrógeno, carbono, nitrógeno, oxígeno, sodio, azufre, cloro y calcio—, que cubren el agua, la sal, los ácidos, la glucosa, los carbonatos y el amoníaco. Un símbolo desconocido se rechaza junto con la lista de los disponibles, en vez de contarse como masa cero.",
    howToUse: [
      "Introduce la fórmula en letras latinas: el símbolo del elemento en mayúscula inicial y el índice como número.",
      "Usa paréntesis para los grupos: Ca(OH)2.",
      "Consulta la tabla de composición para ver la aportación y la proporción de masa de cada elemento.",
      "La masa molar puede pasarse directamente a la calculadora de cantidad de sustancia.",
    ],
    howItWorks: "La fórmula se analiza carácter a carácter, y un multiplicador tras un paréntesis de cierre se aplica a todo el grupo. Las masas de los elementos se multiplican por su número de átomos y se suman.",
    example: "El ácido sulfúrico H2SO4 pesa 98,072 g/mol, de los que casi dos tercios son oxígeno.",
    faq: [
      { q: "¿Qué elementos se admiten?", a: "Ocho: H, C, N, O, Na, S, Cl y Ca. Cubren el agua, la sal, los ácidos sulfúrico y nítrico, la glucosa, los carbonatos y el amoníaco." },
      { q: "¿Por qué no toda la tabla periódica?", a: "Porque las masas atómicas son valores de referencia y no pueden escribirse de memoria: un error en la tercera cifra parece verosímil y ningún cálculo lo delataría. Ampliar la tabla exige contrastarla con una fuente primaria." },
      { q: "¿De dónde salen las masas atómicas?", a: "Son los pesos atómicos estándar de la IUPAC en forma abreviada, los mismos valores que imprimen las tablas de referencia." },
      { q: "¿Cómo escribo grupos entre paréntesis?", a: "De la forma habitual: Ca(OH)2 o Al2(SO4)3. Un multiplicador tras un paréntesis de cierre se aplica a todo el grupo, y los paréntesis pueden anidarse." },
      { q: "¿Se admite el agua de cristalización?", a: "La notación con punto no se entiende. Escribe las moléculas de agua directamente en la fórmula en vez de usar la forma de hidrato." },
    ],
  },
  "molarity": {
    longDescription: "Calcula la concentración molar: cuántos moles de sustancia disuelta hay por litro de disolución. Si no se conoce la cantidad de sustancia, aquí puede deducirse de una masa y una masa molar, sin un cálculo previo aparte. El volumen se convierte a litros antes de aplicar la fórmula, así que los mililitros y los metros cúbicos se eligen de una lista en lugar de convertirse a mano: en esa conversión es donde suele ocurrir el error, y produce una cifra mil veces desviada y del todo verosímil.",
    howToUse: [
      "Elige si conoces la cantidad de sustancia o su masa.",
      "Introduce el valor y, si partes de una masa, la masa molar.",
      "Elige la unidad de volumen e introduce el volumen de la disolución.",
    ],
    howItWorks: "C = n / V, donde n es la cantidad de sustancia en moles y V el volumen de disolución en litros. A partir de una masa, la cantidad se halla primero como n = m / M. La unidad de volumen elegida se convierte a litros antes de la división.",
    example: "Medio mol en dos litros de disolución da una concentración de 0,25 mol/l.",
    faq: [
      { q: "¿La molaridad se basa en el volumen de disolución o en el de disolvente?", a: "En el volumen de la disolución terminada. No son lo mismo: disolver cambia el volumen, así que un litro de agua más la sustancia no es un litro de disolución." },
      { q: "¿Cómo hallo la molaridad a partir de una masa?", a: "Elige el modo de la masa e indica la masa molar de la sustancia. La cantidad se halla como masa dividida entre masa molar, y el resto del cálculo es idéntico." },
      { q: "¿Por qué hay que elegir la unidad de volumen?", a: "Porque la fórmula trabaja en litros. Los mililitros y los metros cúbicos se convierten automáticamente: sin eso el resultado saldría mil veces desviado y seguiría pareciendo verosímil." },
      { q: "¿En qué se diferencia la molaridad de la concentración porcentual?", a: "La molaridad cuenta partículas y la concentración porcentual cuenta masa. Para una misma disolución son dos cifras distintas y no se puede sustituir una por la otra." },
    ],
  },
  "moles": {
    longDescription: "Convierte una masa en cantidad de sustancia y al revés, y muestra a cuántas partículas equivale. La constante de Avogadro es exacta —6,02214076×10²³ mol⁻¹ por la definición del SI de 2019—, así que en el cálculo no hay nada que redondear. La masa molar se introduce como un número corriente: la calculadora no analiza una fórmula química y no pretende ser una tabla de referencia, pero tampoco se equivoca por ti.",
    howToUse: [
      "Elige si conoces la masa o la cantidad de sustancia.",
      "Introduce el valor.",
      "Indica la masa molar de la sustancia según una tabla de referencia.",
    ],
    howItWorks: "n = m / M, la masa dividida entre la masa molar. El modo inverso halla la masa como m = n · M. El número de partículas es la cantidad multiplicada por la constante de Avogadro N_A = 6,02214076×10²³ mol⁻¹.",
    example: "18 gramos de agua con una masa molar de 18,02 g/mol dan 0,9989 mol, algo menos de un mol.",
    faq: [
      { q: "¿De dónde saco la masa molar?", a: "De la tabla periódica: suma las masas atómicas de todos los átomos de la fórmula. La calculadora no la deduce, porque no analiza fórmulas químicas ni pretende ser una referencia." },
      { q: "¿Por qué 18 gramos de agua no son exactamente un mol?", a: "Porque la masa molar del agua es de unos 18,02 y no 18. Un mol exacto son 18,02 gramos; la diferencia es pequeña pero visible en el resultado." },
      { q: "¿Qué significa el número de partículas?", a: "Cuántas moléculas, átomos o iones contiene esa cantidad de sustancia. Es la cantidad en moles multiplicada por la constante de Avogadro." },
      { q: "¿La constante de Avogadro está redondeada?", a: "No. Desde 2019 está fijada exactamente en 6,02214076×10²³ mol⁻¹: define la unidad en vez de medirse." },
    ],
  },
  "solution-concentration": {
    longDescription: "Calcula la concentración de una disolución en las dos formas más habituales, más las partes por millón. El modo es una elección explícita porque el porcentaje en masa y el porcentaje en volumen son magnitudes distintas, y cambiar una por otra da una cifra diferente con el mismo nombre. No puede haber más sustancia que disolución: un dato así se rechaza en vez de recortarse al cien por cien, porque recortarlo convertiría un error en una respuesta verosímil.",
    howToUse: [
      "Elige la forma de la concentración.",
      "Introduce la masa de sustancia disuelta.",
      "Indica la masa o el volumen de la disolución terminada.",
    ],
    howItWorks: "El porcentaje en masa es la masa de sustancia dividida entre la masa de disolución y multiplicada por cien. La masa por volumen divide esa misma masa entre el volumen de disolución. Las partes por millón son ese mismo cociente multiplicado por un millón.",
    example: "25 gramos de sustancia en 500 gramos de disolución dan un 5 % en masa, y quedan 475 gramos de disolvente.",
    faq: [
      { q: "¿Introduzco la masa de la disolución o la del disolvente?", a: "La masa de la disolución terminada, sustancia y disolvente juntos. La masa de disolvente se indica aparte como la diferencia." },
      { q: "¿En qué se diferencia el porcentaje en masa de la masa por volumen?", a: "En el denominador. Uno usa la masa de la disolución en gramos y el otro, su volumen en mililitros. Siempre que la densidad no sea uno, las dos cifras difieren." },
      { q: "¿Qué es ppm?", a: "Partes por millón: el mismo cociente de masas multiplicado por un millón en lugar de por cien. Va bien para disoluciones muy diluidas, donde el porcentaje se va a las milésimas." },
      { q: "¿Por qué no puedo introducir más sustancia que disolución?", a: "Porque esa disolución no existe: la sustancia forma parte de su masa. Recortar el resultado al cien por cien presentaría un error de entrada como una respuesta correcta." },
    ],
  },
};
