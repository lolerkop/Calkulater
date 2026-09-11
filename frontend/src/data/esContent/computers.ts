// Подробный испанский текст: раздел «computers».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esComputersContent: Partial<Record<string, EsDetailedContent>> = {
  "aspect-ratio": {
    longDescription: "Divide el ancho y el alto entre su máximo común divisor para dar la relación exacta, y funciona también al revés: das una relación y un lado, y sale el otro. La relación habitual más cercana aparece al lado, porque una reducción exacta y el número impreso en la caja no siempre son lo mismo.",
    howToUse: [
      "Elige si tienes una resolución o una relación.",
      "Introduce los valores conocidos.",
      "Consulta la relación exacta o el lado que falta.",
    ],
    howItWorks: "La relación es el ancho y el alto divididos entre su máximo común divisor; un lado que falta es el conocido por la parte opuesta de la relación dividido entre la propia.",
    example: "1920 y 1080 comparten un divisor de 120, que reduce la pareja a 16:9.",
    faq: [
      { q: "¿Por qué 2560×1080 da 64:27?", a: "Es la reducción exacta por el máximo común divisor. El conocido 21:9 es una cifra redonda de marketing, que aquí se muestra como la relación habitual más cercana." },
      { q: "¿Y si el lado que falta no es un número entero?", a: "El valor en píxeles redondeado se muestra como respuesta y la cifra exacta aparece al lado, para que veas hasta dónde llegó el redondeo." },
      { q: "¿Se admiten píxeles no cuadrados?", a: "No. La calculadora supone píxeles cuadrados, que es el caso de todos los formatos de pantalla modernos." },
      { q: "¿Sirve para imágenes y no solo para pantallas?", a: "Sí, la aritmética es la misma para cualquier par de dimensiones en píxeles." },
    ],
  },
  "color-convert": {
    longDescription: "Convierte un código de color hexadecimal en notación rgb() y hsl() y muestra cada canal por separado. La forma de tres caracteres se expande duplicando cada dígito: #F0A es #FF00AA y no #F00A00, porque así está definido el formato. Los canales se analizan byte a byte y siguen siendo números enteros exactos de 0 a 255, así que convertir de vuelta devuelve el código original. El tono se muestra como un número entero de grados mientras que la saturación y la luminosidad llevan dos decimales: las fracciones de grado en la rueda de color son invisibles al ojo, mientras que las décimas de por ciento de luminosidad ya se notan.",
    howToUse: [
      "Introduce un código de color, por ejemplo #2E86DE.",
      "La almohadilla es opcional: 2E86DE también funciona.",
      "La forma corta de tres caracteres se expande sola.",
      "Da igual si usas mayúsculas o minúsculas.",
    ],
    howItWorks: "Cada pareja de caracteres hexadecimales es un canal de 0 a 255. Para HSL los canales se dividen entre 255; después el tono sale de cuál es el canal mayor, la luminosidad es la media del mayor y el menor, y la saturación sale de su diferencia. La fila de luminosidad es la luminosidad HSL en porcentaje.",
    example: "El código #2E86DE es rgb(46, 134, 222) y hsl(210, 72,73 %, 52,55 %).",
    faq: [
      { q: "¿Por qué #F0A pasa a ser #FF00AA?", a: "La forma corta se expande duplicando cada carácter: así está definido el formato. Rellenar con ceros daría otro color: #F00A00 en vez de #FF00AA." },
      { q: "¿Hace falta la almohadilla?", a: "No, es opcional, y tampoco importan las mayúsculas. Tanto #2e86de como 2E86DE funcionan." },
      { q: "¿Qué significa la fila de luminosidad?", a: "Es la luminosidad HSL en porcentaje: 0 es negro, 100 es blanco y alrededor de 50 es un color puro saturado. Es también el tercer número de la notación hsl()." },
      { q: "¿En qué se diferencia la luminosidad HSL del brillo percibido?", a: "La luminosidad usa una misma fórmula para todos los canales, mientras que el ojo ve el verde mucho más claro que el azul. Dos colores con la misma luminosidad HSL pueden verse bastante distintos, y comprobar el contraste exige otra medida." },
      { q: "¿Se pierde precisión en la conversión?", a: "No. Los canales se analizan byte a byte y siguen siendo números enteros de 0 a 255, así que la fila HEX siempre coincide con lo que introdujiste, salvo la expansión de la forma corta y las mayúsculas." },
    ],
  },
  "css-units": {
    longDescription: "Todo pasa por el píxel CSS, que es una unidad de referencia y no física: aquí una pulgada son siempre exactamente 96 píxeles, sea cual sea la pantalla en la que acabe. Las unidades absolutas —pt, pc, in, cm, mm— son múltiplos fijos de ese píxel y nunca cambian. Las relativas dependen del contexto, y esa es toda la diferencia entre ellas: rem es igual en todas partes porque sigue al tamaño de fuente raíz, mientras que em sigue al padre y por tanto se multiplica consigo mismo en elementos anidados, que es justo cómo una lista de tres niveles acaba con un texto ilegible de pequeño.",
    howToUse: [
      "Introduce el valor que quieres convertir.",
      "Elige la unidad en la que está escrito y la unidad que quieres.",
      "Fija el tamaño de fuente raíz: 16 px salvo que la página lo cambie.",
      "Fija el tamaño de fuente del padre solo si trabajas con em.",
    ],
    howItWorks: "El valor se convierte primero a píxeles CSS: rem usa el tamaño raíz, em el tamaño del padre, y pt, pc, in, cm y mm son múltiplos fijos. Después se divide entre la unidad de destino.",
    example: "Con una raíz de 16 px, 24 px son 1,5 rem y 18 pt.",
    faq: [
      { q: "¿Qué diferencia hay entre rem y em?", a: "rem es relativo al tamaño de fuente raíz y por tanto estable en toda la página. em es relativo al padre, así que se acumula en elementos anidados: 0,9 em a tres niveles de profundidad son 0,73 de la base." },
      { q: "¿Un centímetro CSS es un centímetro real?", a: "En pantalla no. Está definido como 96/2,54 píxeles CSS, así que coincide con un centímetro físico solo en impresión o en una pantalla que dé la casualidad de tener la densidad de referencia." },
      { q: "¿Debo usar px o rem para los tamaños de fuente?", a: "rem respeta el ajuste de tamaño de fuente del navegador del lector, que px anula. Por accesibilidad eso suele zanjar la cuestión a favor de rem." },
      { q: "¿Por qué el tamaño de fuente raíz es ajustable aquí?", a: "Porque a veces las páginas lo cambian. Si tu CSS pone html { font-size: 62.5% }, la raíz son 10 px y todas las conversiones a rem se desplazan en consecuencia." },
    ],
  },
  "download-time": {
    longDescription: "Convierte el tamaño de un archivo a bits, lo divide entre la velocidad de tu enlace y muestra el tiempo. Los prefijos decimales como MB y los binarios como MiB son opciones separadas y no una suposición oculta, y lo mismo ocurre con las velocidades en bits por segundo y en bytes por segundo. La cifra es teórica: no se incorpora a tus espaldas ninguna sobrecarga de protocolo.",
    howToUse: [
      "Introduce el tamaño del archivo y elige su unidad.",
      "Introduce la velocidad de tu conexión y su unidad.",
      "Consulta el tiempo que tardaría la transferencia.",
    ],
    howItWorks: "Bits = bytes × 8, y tiempo = bits ÷ velocidad del enlace en bits por segundo.",
    example: "Un archivo de 1 GB por un enlace de 100 Mbit/s tarda 8 000 000 000 ÷ 100 000 000 = 80 segundos.",
    faq: [
      { q: "¿Por qué mi descarga real es más lenta?", a: "La cifra es el mínimo teórico. La sobrecarga del protocolo, los límites del servidor y la capacidad compartida reducen el rendimiento real." },
      { q: "¿Qué diferencia hay entre MB y MiB?", a: "Un megabyte es un millón de bytes; un mebibyte son 1 048 576. La diferencia es de alrededor del cinco por ciento y crece con el tamaño del archivo." },
      { q: "¿Por qué se divide entre bits y no entre bytes?", a: "Las velocidades de enlace se dan en bits por segundo mientras que los archivos se miden en bytes, así que hay que convertir uno de los dos lados. Multiplicar los bytes por ocho lo resuelve." },
      { q: "¿Puedo introducir la velocidad en megabytes por segundo?", a: "Sí, MB/s es una de las unidades de velocidad y se convierte a bits internamente." },
    ],
  },
  "files-on-disk": {
    longDescription: "Divide la capacidad de la unidad entre el tamaño del archivo y redondea hacia abajo, porque un archivo a medias no cabe. Los prefijos decimales y binarios son opciones separadas y no una suposición: un fabricante escribe un terabyte como diez elevado a doce, el sistema muestra tebibytes, y esa diferencia es justo donde parece irse el espacio que falta.",
    howToUse: [
      "Introduce la capacidad de la unidad y elige su unidad de medida.",
      "Introduce el tamaño del archivo y elige su unidad.",
      "Añade una reserva si parte del espacio está comprometido.",
    ],
    howItWorks: "El espacio aprovechable es la capacidad menos la reserva; el recuento es eso dividido entre el tamaño del archivo, redondeado hacia abajo.",
    example: "Una unidad de 1000 GB alberga 250 000 archivos de 4 MB cada uno.",
    faq: [
      { q: "¿Por qué mi unidad muestra menos que la etiqueta?", a: "La etiqueta cuenta un terabyte como diez elevado a doce bytes; el sistema cuenta tebibytes de 1024⁴. La diferencia es de alrededor del nueve por ciento y no es espacio perdido." },
      { q: "¿Se resta la sobrecarga del sistema de archivos?", a: "No de forma automática. El tamaño de clúster y los metadatos varían según el sistema de archivos, así que el campo de reserva permite tenerlos en cuenta de forma explícita." },
      { q: "¿Y si el archivo es mayor que la unidad?", a: "La respuesta es cero, que es un resultado correcto y no un error." },
      { q: "¿Se supone que todos los archivos son iguales?", a: "Sí. El cálculo responde a cuántos archivos de un tamaño dado caben, no a cómo se acomodaría una colección variada." },
    ],
  },
  "fps-frametime": {
    longDescription: "La tasa de fotogramas y el tiempo de fotograma son inversos: mil milisegundos divididos entre la tasa dan el tiempo que ocupa cada fotograma. Los dos sentidos usan esa única relación, y una fila de referencia muestra las frecuencias habituales una junto a otra para situar fácilmente un objetivo.",
    howToUse: [
      "Elige el sentido que necesitas.",
      "Introduce el valor conocido.",
      "Consulta el valor convertido y la fila de comparación.",
    ],
    howItWorks: "Tiempo de fotograma en ms = 1000 ÷ tasa de fotogramas, y tasa de fotogramas = 1000 ÷ tiempo de fotograma.",
    example: "60 FPS significa que cada fotograma dura 1000 ÷ 60 = 16,667 milisegundos.",
    faq: [
      { q: "¿Por qué 60 FPS no son exactamente 16 ms?", a: "Mil no se divide de forma exacta entre sesenta. La cifra exacta son 16,667 ms, y redondearla a 16 se desviaría un fotograma cada pocos segundos." },
      { q: "¿Una tasa de fotogramas mayor significa siempre menor tiempo de fotograma?", a: "Sí, son inversos estrictos, así que uno cae exactamente en la medida en que el otro sube." },
      { q: "¿Es lo mismo que los tiempos de fotograma del 1 % peor?", a: "No. Esto es la relación media entre tasa y tiempo; las estadísticas por percentiles exigen un registro completo de fotogramas." },
      { q: "¿Por qué se rechaza el cero?", a: "Dividir entre cero no tiene valor. Una tasa de cero significa que no hay imagen y un tiempo de cero, que no hay fotograma en absoluto." },
    ],
  },
  "internet-traffic": {
    longDescription: "Calcula el volumen que se acumula con un uso constante: la tasa de transmisión se multiplica por el tiempo, no se divide entre él. El ocho del denominador convierte bits en bytes, y eso es lo que más a menudo se pierde: una conexión se mide en megabits mientras que una tarifa se da en gigabytes, y confundirlos falla en un factor de exactamente ocho. Si introduces una tarifa, la calculadora añade cuánto dura y en cuánto se supera, respondiendo a «¿llegará a fin de mes?» y no solo a «¿cuántos gigabytes son?».",
    howToUse: [
      "Introduce la tasa de transmisión: la calidad estándar son 3-5 Mbit/s y el 4K, unos 25.",
      "Introduce cuántas horas al día dura la reproducción o la llamada.",
      "Fija la duración del periodo, normalmente 30 o 31 días.",
      "Añade tu tarifa de datos para comprobar si basta.",
    ],
    howItWorks: "La tasa en megabits se divide entre ocho para dar megabytes por segundo, se multiplica por 3600 segundos y se convierte a gigabytes. Esa cifra se escala después por las horas al día y los días del periodo.",
    example: "Tres horas al día a cinco megabits consumen 6,75 GB diarios y 202,5 GB al mes: el doble de una tarifa de 100 GB.",
    faq: [
      { q: "¿Por qué se divide la tasa entre ocho?", a: "Porque las conexiones se miden en megabits y el volumen en megabytes, y un byte tiene ocho bits. Sin esa división el consumo sale ocho veces exagerado." },
      { q: "¿Qué tasa de transmisión introduzco?", a: "Aquella a la que va realmente la reproducción: aproximadamente 3-5 Mbit/s en calidad estándar, 8 en Full HD y unos 25 en 4K. Las estadísticas del reproductor dan la cifra exacta." },
      { q: "¿Se cuenta el tráfico de fondo?", a: "No. Las actualizaciones, la sincronización y los mensajeros suman aparte, así que el consumo real suele quedar algo por encima de la cifra calculada." },
      { q: "¿Qué indica la duración de la tarifa?", a: "Cuántos días dura la tarifa con el mismo consumo diario. Un número fraccionario significa que se agota a mitad de un día." },
      { q: "¿El gigabyte de aquí es decimal?", a: "Sí, 10⁹ bytes, tal como lo dan los operadores en una tarifa. La diferencia frente a un gigabyte binario ronda el 7 %." },
    ],
  },
  "modular-scale": {
    longDescription: "Una escala modular produce tamaños de letra por multiplicación y no a ojo: cada paso es el anterior multiplicado por una razón fija, así que los títulos, el texto y los pies mantienen una única relación por muchos tamaños que acabe necesitando un diseño. El paso cero es la base —normalmente el texto corrido—, con los pasos positivos subiendo hacia los títulos y los negativos bajando hacia pies y letra pequeña. La razón hace casi todo el trabajo: 1,2 da una escala discreta en la que los tamaños quedan cerca, mientras que 1,618 abre huecos lo bastante grandes como para que un título dos pasos por encima mida más del doble que el texto.",
    howToUse: [
      "Introduce el tamaño base, normalmente el del texto corrido.",
      "Elige una razón: 1,2 para una escala apretada y 1,618 para una llamativa.",
      "Introduce cuántos pasos necesitas por encima de la base para los títulos.",
      "Introduce cuántos necesitas por debajo para pies y letra pequeña.",
    ],
    howItWorks: "Cada tamaño es base × razón elevada al número de paso. El paso cero es la propia base, los pasos positivos crecen y los negativos menguan.",
    example: "Una base de 16 con una razón de 1,25 llega a 48,828 cinco pasos arriba y a 10,24 dos pasos abajo.",
    faq: [
      { q: "¿Qué razón elijo?", a: "Las razones entre 1,125 y 1,25 mantienen los tamaños cerca y van bien en interfaces densas. Las mayores —1,414, 1,5, 1,618— dan un contraste fuerte y funcionan mejor en composiciones editoriales con pocos niveles." },
      { q: "¿Debo redondear los tamaños?", a: "Para CSS no hace falta: los navegadores manejan bien los píxeles y los rem fraccionarios. Redondea solo si un sistema de diseño exige números enteros, y redondea toda la escala igual." },
      { q: "¿La base tiene que ser el tamaño del texto corrido?", a: "No tiene por qué, pero normalmente debería serlo. Anclar la escala al tamaño que más se lee mantiene el resto de tamaños en una relación definida con él." },
      { q: "¿Por qué la escala crece tan deprisa por arriba?", a: "Porque es geométrica. Cada paso multiplica en vez de sumar, así que las distancias se ensanchan a medida que suben los pasos: esa es la propiedad que mantiene el extremo pequeño finamente espaciado sin apretar el grande." },
    ],
  },
  "network-bandwidth": {
    longDescription: "Multiplica el número de usuarios por la proporción que está activa a la vez y por el ancho de banda que necesita cada uno, y añade después el margen que elijas. Nada se esconde en un coeficiente de protocolo: la sobrecarga real depende del protocolo, el códec y la red, así que cada factor que cambia la respuesta es un campo visible.",
    howToUse: [
      "Introduce a cuántos usuarios sirve el enlace.",
      "Introduce el ancho de banda que necesita cada uno.",
      "Fija la proporción activa a la vez y el margen.",
    ],
    howItWorks: "Ancho de banda bruto = usuarios × proporción activa × demanda por usuario; el requisito le suma el margen por encima.",
    example: "50 usuarios a 5 Mbit/s cada uno son 250 Mbit/s brutos, o 300 Mbit/s con un 20 por ciento de margen.",
    faq: [
      { q: "¿Cuento todos los usuarios o solo los activos?", a: "Ambos, por separado. Introduce el total y fija la proporción activa a la vez: cien puestos rara vez transmiten a la vez." },
      { q: "¿Adónde va el porcentaje de margen?", a: "Se suma por encima de la cifra bruta. Detrás no se aplica nada más, porque la sobrecarga real del protocolo varía demasiado como para adivinarla por ti." },
      { q: "¿Cuánto margen es razonable?", a: "Depende de lo irregular que sea el tráfico. El campo existe para que la suposición siga siendo tuya y siga estando a la vista." },
      { q: "¿Por qué megabits y no megabytes?", a: "Los enlaces se venden en bits por segundo. El resultado muestra también megabytes por segundo para compararlo con las velocidades de descarga." },
    ],
  },
  "password-entropy": {
    longDescription: "La robustez de una contraseña no viene de parecer complicada, sino del tamaño del espacio en el que hay que buscarla: su longitud y su alfabeto. Añadir un carácter a una contraseña alfanumérica de doce multiplica la búsqueda por 62; pasar de minúsculas a mayúsculas y minúsculas con cifras la multiplica por órdenes de magnitud. El número de combinaciones pasa enseguida de 10²¹, así que tanto él como el tiempo de búsqueda se muestran en forma exponencial.",
    howToUse: [
      "Cuenta la longitud real: los espacios y los signos de puntuación también son caracteres.",
      "Elige el alfabeto por lo que usaste de verdad, no por lo que permite el formulario de registro.",
      "La velocidad de prueba depende de cómo se guarde la contraseña: los resúmenes rápidos permiten decenas de miles de millones de pruebas por segundo y los lentos, solo miles.",
      "Esto estima una fuerza bruta completa. Una contraseña hecha con palabras de diccionario cae mucho antes de lo que sugiere su entropía.",
    ],
    howItWorks: "H = L · log₂(N), combinaciones N^L, y la búsqueda media es la mitad del espacio.",
    example: "Doce caracteres de letras y cifras dan 71,45 bits y unas 3,2·10²¹ combinaciones.",
    faq: [
      { q: "¿Cuántos bits bastan?", a: "Por debajo de 60 bits una contraseña cae por fuerza bruta en un tiempo razonable con equipos corrientes. De 70 a 80 bits cubre la mayoría de las necesidades; por encima de 100 bits la fuerza bruta deja de ser la amenaza y el riesgo real pasan a ser las filtraciones y la reutilización." },
      { q: "¿Por qué la búsqueda media es la mitad?", a: "La fuerza bruta recorre el espacio en orden, y de media la contraseña está en el centro. Es la estimación habitual: no cambia el orden de magnitud, pero es más honesta que contar el espacio entero." },
      { q: "¿Qué importa más, la longitud o el alfabeto?", a: "La longitud. Está en el exponente mientras que el alfabeto está en la base. Veinte letras minúsculas superan a doce caracteres con todos los símbolos disponibles: 94 bits frente a 78." },
      { q: "¿Vale para frases de paso?", a: "Para un conjunto de palabras aleatorias, usa el tamaño del diccionario como alfabeto y el número de palabras como longitud. Una frase tomada de un texto real casi no tiene entropía: se adivina por la cita, no por los caracteres." },
    ],
  },
  "ppi-dpi": {
    longDescription: "Calcula los PPI: cuántos píxeles caben en una pulgada de pantalla. Esa cifra, y no la resolución por sí sola, decide si se ve el grano: 1920×1080 se ve nítido en un portátil y basto en un televisor grande, porque los mismos píxeles se estiran sobre una diagonal más larga. La diagonal en píxeles sale del teorema de Pitágoras y se divide entre la diagonal en pulgadas.\n\nLas pantallas se describen en PPI y la impresión en DPI: la aritmética es la misma, pero un punto de impresora y un píxel de pantalla son cosas distintas y no deben confundirse.",
    howToUse: [
      "Introduce la resolución de la pantalla en píxeles.",
      "Indica la diagonal en pulgadas.",
      "Consulta la densidad de píxeles y el tamaño de un píxel.",
    ],
    howItWorks: "Diagonal en píxeles = √(ancho² + alto²); PPI = esa diagonal ÷ la diagonal en pulgadas. El tamaño del píxel son 25,4 mm divididos entre los PPI.",
    example: "Una pantalla de 1920×1080 con una diagonal de 15,6 pulgadas tiene una densidad de 141,21 ppi.",
    faq: [
      { q: "¿En qué se diferencian PPI y DPI?", a: "La aritmética es la misma, pero PPI describe píxeles de pantalla y DPI, puntos impresos. Un punto de impresora y un píxel de monitor funcionan de forma distinta, así que una cifra no puede trasladarse a la otra." },
      { q: "¿Por qué la misma resolución se ve distinta?", a: "Porque lo que cuenta no es la retícula de píxeles, sino su densidad. 1920×1080 da unos 141 ppi en 15 pulgadas y unos 55 en 40, donde el grano se hace visible." },
      { q: "¿Qué densidad basta?", a: "Depende de la distancia de visión: un móvil se sostiene cerca y necesita más, un televisor se mira de lejos y necesita menos. No hay un umbral universal." },
      { q: "¿Qué indica el tamaño del píxel?", a: "El lado de un píxel en milímetros. Es una manera cómoda de juzgar si una línea fina o una letra pequeña serán legibles." },
    ],
  },
  "raid": {
    longDescription: "Muestra cuánta de la capacidad que compraste queda disponible y cuánta se va en redundancia. Ese precio es justo lo que separa a los niveles: RAID 0 no gasta nada y no sobrevive a ningún fallo, RAID 5 cede un disco a la paridad, RAID 6 cede dos y un espejo cede la mitad del conjunto. El número de fallos que se muestra para RAID 10 es el garantizado: el conjunto puede sobrevivir a la mitad de sus discos si los fallos caen en espejos distintos, pero una distribución afortunada no es algo con lo que planificar. Un nivel con demasiados pocos discos se rechaza en vez de completarse en silencio hasta su mínimo.",
    howToUse: [
      "Elige el nivel del conjunto.",
      "Introduce el número de discos: RAID 10 exige una cantidad par.",
      "Introduce el tamaño de un solo disco en terabytes.",
      "Se supone que los discos son idénticos: un conjunto se nivela por el más pequeño.",
    ],
    howItWorks: "RAID 0 da n×S, RAID 1 da el tamaño de un disco, RAID 5 da (n−1)×S, RAID 6 da (n−2)×S y RAID 10 da la mitad de la capacidad combinada. La eficiencia es la proporción aprovechable de la capacidad bruta.",
    example: "Un RAID 5 formado con seis discos de 4 TB da 20 TB aprovechables de 24 TB brutos, es decir, un 83,33 %.",
    faq: [
      { q: "¿Qué nivel va bien en un almacenamiento doméstico?", a: "Normalmente RAID 5 con tres a seis discos y RAID 6 a partir de ocho: a medida que los discos crecen en número y tamaño, la probabilidad de un segundo fallo durante una reconstrucción deja de ser despreciable." },
      { q: "¿Qué ocurre con discos de distinto tamaño?", a: "El conjunto se nivela por el más pequeño: un disco de 8 TB emparejado con uno de 4 TB aporta solo 4 TB. Por eso el cálculo supone discos idénticos." },
      { q: "¿Por qué RAID 10 muestra solo un fallo tolerado?", a: "Es la cifra garantizada. El conjunto puede sobrevivir a la mitad de sus discos si los fallos caen en espejos distintos, pero dos fallos dentro de un mismo espejo lo destruyen con cualquier tamaño: una distribución afortunada no puede prometerse." },
      { q: "¿RAID sustituye a una copia de seguridad?", a: "No. RAID protege frente al fallo de un disco, no frente a un archivo borrado, un secuestro de datos, un incendio o un robo, que golpean por igual a todo el conjunto. Una copia de seguridad es un requisito aparte." },
      { q: "¿Por qué el fabricante promete más terabytes de los que muestra el sistema?", a: "Los fabricantes cuentan un terabyte como 10¹² bytes mientras que el sistema muestra tebibytes de 2⁴⁰ bytes. La diferencia ronda el 9 % y no tiene nada que ver con el nivel del conjunto." },
    ],
  },
  "text-word-char-count": {
    longDescription: "Mide el tamaño de un texto y declara las reglas con las que cuenta, porque «palabra» y «frase» son convenios y no propiedades de una cadena, y distintos contadores devuelven cifras distintas. Aquí una palabra empieza por una letra o una cifra, y un guion o un apóstrofo dentro no la parte: «d’acord» y «teórico-práctico» cuentan una vez cada uno. Una frase es un tramo no vacío entre puntos, signos de exclamación y de interrogación, y un texto sin signo de cierre sigue contando como una frase. Un párrafo es una línea no vacía, así que un salto de línea doble no duplica el recuento.",
    howToUse: [
      "Pega o escribe el texto en el campo: los saltos de línea se conservan.",
      "Usa el recuento con espacios cuando una publicación o un anuncio tenga un límite.",
      "Usa el recuento sin espacios cuando el trabajo se pague por caracteres.",
      "La longitud media de palabra y las palabras por frase ayudan a juzgar la legibilidad.",
    ],
    howItWorks: "Una palabra es un tramo de letras o cifras; un guion o un apóstrofo dentro no la parte. Una frase es un tramo no vacío entre puntos, signos de exclamación y de interrogación. Un párrafo es una línea no vacía.",
    example: "La línea «El veloz murciélago hindú comía feliz cardillo y kiwi. ¡Ya está!» son 11 palabras y 65 caracteres.",
    faq: [
      { q: "¿Los espacios cuentan como caracteres?", a: "Se muestran las dos cifras. Los límites de redes sociales y anuncios suelen contar los espacios, mientras que las tarifas de redacción por carácter no suelen hacerlo." },
      { q: "¿Cómo se cuenta una palabra con guion?", a: "Como una: «teórico-práctico» o «díselo» no se parten. La puntuación no forma parte de una palabra." },
      { q: "¿Y si el texto no termina en punto?", a: "Sigue contando como una frase. De lo contrario el contador daría cero donde es evidente que hay una frase." },
      { q: "¿Por qué no se cuenta una línea en blanco entre párrafos?", a: "Un párrafo es una línea no vacía, así que un salto de línea doble entre párrafos no duplica el recuento." },
      { q: "¿El cirílico y el latino se cuentan igual?", a: "Sí: los caracteres se cuentan en puntos de código, así que una letra cirílica pesa exactamente lo mismo que una latina." },
    ],
  },
  "tv-monitor-viewing-distance": {
    longDescription: "La distancia adecuada a un televisor la fija el ángulo de visión y no la diagonal: THX propone que la pantalla ocupe unos cuarenta grados del campo visual y SMPTE, unos treinta. La primera se acerca más al cine y la segunda al visionado corriente, y ambas son correctas para una misma pantalla. Una cifra aparte da la distancia a partir de la cual el ojo ya no distingue píxeles sueltos: explica por qué el 4K importa en una diagonal grande y no aporta nada en una pequeña.",
    howToUse: [
      "La diagonal va en pulgadas, tal como viene en la caja; las distancias salen en metros.",
      "Líneas de resolución: 1080 para Full HD, 2160 para 4K y 4320 para 8K.",
      "La distancia THX es más corta y va bien para cine; la SMPTE es más larga y resulta más cómoda para el visionado corriente.",
      "Si tu asiento queda más lejos que el límite de visibilidad, la resolución adicional no se verá.",
    ],
    howItWorks: "El ancho de la pantalla sale de la diagonal y la proporción, y la distancia = ancho/2 ÷ tangente de la mitad del ángulo de visión; el límite de visibilidad sale de que un píxel abarque un minuto de arco.",
    example: "Para un televisor 4K de 55 pulgadas la distancia THX es de unos 1,67 m, y los píxeles desaparecen más allá de 1,08 m.",
    faq: [
      { q: "¿Por qué dos recomendaciones distintas?", a: "Porque los objetivos difieren. THX busca la inmersión de cine y da unos cuarenta grados; SMPTE busca la comodidad en visionados largos y corrientes y da unos treinta. La práctica queda entre ambas." },
      { q: "¿Qué significa el límite de visibilidad de los píxeles?", a: "Es la distancia a la que un píxel abarca un minuto de arco, el límite de resolución de una vista normal. Más allá, la diferencia entre 4K y Full HD deja de verse." },
      { q: "¿Significa eso que el 4K no sirve de nada?", a: "No si te sientas más cerca que el límite, que es justo lo que ocurre con una diagonal grande en una habitación corriente. En una pantalla pequeña desde un sofá típico la ganancia sí es invisible." },
      { q: "¿Por qué se calcula a partir del ancho y no de la diagonal?", a: "El ángulo de visión lo define el campo visual horizontal, y lo fija el ancho de la pantalla. A igualdad de diagonal, una pantalla ultrapanorámica es más ancha que una normal, así que su distancia es distinta." },
    ],
  },
  "unix-timestamp": {
    longDescription: "Cuenta segundos desde el uno de enero de 1970 y de vuelta, siempre en UTC. La zona horaria del navegador no entra a propósito: el mismo número tiene que dar la misma fecha para todo el mundo, o un enlace compartido mostraría algo distinto a cada lector. Los valores negativos son fechas corrientes anteriores a la época.",
    howToUse: [
      "Elige el sentido que necesitas.",
      "Introduce la marca de tiempo, o la fecha y la hora en UTC.",
      "Consulta el valor convertido y el día de la semana.",
    ],
    howItWorks: "Una marca de tiempo es el número de segundos desde 1970-01-01T00:00:00Z; convertirla de vuelta suma esos segundos a la época.",
    example: "1 700 000 000 corresponde al 14-11-2023 a las 22:13:20 UTC, un martes.",
    faq: [
      { q: "¿Por qué solo UTC?", a: "Para que la misma marca de tiempo muestre siempre la misma fecha. Aplicar la zona horaria del lector haría que un resultado compartido significara cosas distintas en cada máquina." },
      { q: "¿Se tienen en cuenta los segundos intercalares?", a: "No, y el propio tiempo Unix tampoco: cada día se trata como exactamente 86 400 segundos, que es lo que fija la norma." },
      { q: "¿Una marca de tiempo puede ser negativa?", a: "Sí. Los valores negativos son fechas anteriores a 1970, y se convierten exactamente igual." },
      { q: "¿Segundos o milisegundos?", a: "El dato va en segundos, el convenio habitual de Unix. Los sistemas que cuentan en milisegundos necesitan el valor multiplicado por mil." },
    ],
  },
  "video-file-size": {
    longDescription: "Convierte la tasa de bits y la duración en un tamaño de archivo. Los flujos de vídeo y de audio se suman antes de convertirlos a bytes: se escriben en un mismo contenedor, y contarlos por separado redondeando en cada paso pierde precisión en la unión. El audio a 128 kbit/s añade casi 58 MB a una hora de grabación, una cantidad que suele despacharse con la mano. El gigabyte de aquí es decimal, 10⁹ bytes, tal como se especifica la tasa de bits y se etiqueta el almacenamiento. El mebibyte binario aparece en su propia fila para que la discrepancia con el explorador de Windows quede a la vista en vez de parecer un error.",
    howToUse: [
      "Introduce la tasa de bits de vídeo: se fija en la cámara o en el codificador.",
      "Introduce la tasa de bits de audio, normalmente entre 96 y 320 kbit/s.",
      "Introduce la duración de la grabación en minutos.",
      "Compara los gigabytes con los mebibytes si estás contrastando con el explorador.",
    ],
    howItWorks: "Las tasas de bits de vídeo y de audio se suman en un solo flujo, se multiplican por la duración en segundos y se dividen entre ocho para convertir bits en bytes. El gigabyte es decimal y el mebibyte, binario.",
    example: "Diez minutos con vídeo a 8 Mbit/s y audio a 128 kbit/s ocupan 0,6096 GB, que el explorador muestra como 581,36 MiB.",
    faq: [
      { q: "¿Por qué el tamaño difiere del que muestra el explorador?", a: "Windows trata un gigabyte como 2³⁰ bytes, mientras que la tasa de bits y el almacenamiento usan 10⁹. La misma grabación son por tanto 0,6096 GB y 581,36 MiB." },
      { q: "¿Hay que contar el audio aparte?", a: "Ya está contado: las tasas de bits se suman antes de la conversión a bytes. A lo largo de una hora, una pista de 128 kbit/s añade casi 58 MB." },
      { q: "¿Vale para tasa de bits variable?", a: "De forma aproximada. Para VBR introduce la tasa media que indique el codificador: el resultado será cercano, aunque no exacto al byte." },
      { q: "¿Y la sobrecarga del contenedor?", a: "Los datos de servicio de MP4 o MKV ocupan una fracción de por ciento y no se cuentan: frente a los propios flujos quedan por debajo del error de una tasa media." },
      { q: "¿Cómo elijo una tasa de bits para un tamaño objetivo?", a: "Ajusta la tasa hasta que el tamaño coincida con tu objetivo. La relación es lineal: la mitad de tasa da la mitad de archivo." },
    ],
  },
};
