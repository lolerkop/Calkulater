// Подробный испанский текст: раздел «converters».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esConvertersContent: Partial<Record<string, EsDetailedContent>> = {
  "convert-angle": {
    longDescription: "Convierte ángulos entre radianes, grados, gradianes, vueltas completas, minutos y segundos de arco. Todos los factores se expresan a través de π y no con una aproximación decimal, de modo que 180° dan exactamente π y 400 gradianes dan exactamente una vuelta.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del radián con factores escritos como fracciones de π.",
    example: "180 grados son π radianes, y un grado son 60 minutos de arco o 3600 segundos de arco.",
    faq: [
      { q: "¿Qué es un gradián?", a: "La centésima parte de un ángulo recto, de modo que una vuelta completa son 400 gradianes. Se usa en topografía." },
      { q: "¿Por qué no guardar el grado como 0,0174533 rad?", a: "Una aproximación decimal ya falla en la sexta cifra, y relaciones exactas como 180° = π dejarían de cumplirse." },
      { q: "¿Dónde se usan los minutos de arco?", a: "En astronomía, navegación y óptica: un minuto de arco es la sexagésima parte de un grado." },
      { q: "¿Sirve para latitudes y longitudes?", a: "Convierte el ángulo en sí. La notación de coordenadas en grados, minutos y segundos es otro formato distinto." },
    ],
  },
  "convert-area": {
    longDescription: "Convierte superficies entre milímetros, centímetros, metros y kilómetros cuadrados, hectáreas, pulgadas y pies cuadrados y acres. Los factores al cuadrado son exactos, así que las medidas de terreno no acumulan error de redondeo.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad tiene un factor exacto respecto al metro cuadrado.",
    example: "Una hectárea son 10.000 m² y un acre son 4046,8564224 m².",
    faq: [
      { q: "¿En qué se diferencian la hectárea y el acre?", a: "La hectárea son exactamente 10.000 m², mientras que el acre son 4046,86 m². Una hectárea equivale a unos 2,47 acres." },
      { q: "¿Por qué los factores no son los cuadrados de los de longitud?", a: "Lo son, pero están escritos como números terminados: así el conversor no depende de un análisis dimensional y resulta fácil de comprobar." },
      { q: "¿Sirve para parcelas?", a: "Sí, la hectárea y el acre son medidas habituales de terreno. Para documentos, compruébalo contra la medición oficial." },
      { q: "¿Son exactas las unidades imperiales de superficie?", a: "Sí. Una pulgada cuadrada son 0,00064516 m² por la propia definición de la pulgada." },
    ],
  },
  "convert-cooking-volume": {
    longDescription: "Convierte volúmenes de cocina entre mililitros, litros, cucharaditas, cucharadas, tazas y onzas líquidas. La taza estadounidense son 236,59 ml y la métrica, 250 ml, así que cada medida se nombra de forma explícita.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada medida se convierte a través del mililitro con factores exactos.",
    example: "Una taza estadounidense son 236,59 ml y una métrica, 250 ml: copiar una receta sin fijarse desvía el resultado un cinco por ciento.",
    faq: [
      { q: "¿A qué taza se refiere una receta?", a: "Depende de la fuente: la taza estadounidense son 236,59 ml y la métrica, 250 ml. Aquí ambas se nombran de forma explícita para que la elección sea tuya." },
      { q: "¿Se puede convertir una taza de harina a gramos?", a: "No: para eso hace falta la densidad del ingrediente concreto, y este conversor trabaja solo con volumen." },
      { q: "¿Cuántas cucharaditas hay en una cucharada?", a: "Tres, tanto en el sistema métrico como en el estadounidense." },
      { q: "¿Qué es una onza líquida?", a: "La onza líquida estadounidense son exactamente 29,5735295625 ml; la imperial es distinta y aquí no se usa." },
    ],
  },
  "convert-cooking-weight": {
    longDescription: "Convierte volumen de cocina en peso, para lo cual hace falta el producto además del número: una taza de harina y una de miel se diferencian casi en el triple. Las densidades son una tabla pequeña propiedad de esta calculadora, y la que ha usado siempre aparece en su propia línea: un número sin su densidad sería un número que no puedes comprobar. La taza aquí es la métrica de 240 ml, dicha en voz alta y no supuesta, porque la estadounidense son 236,6 ml y ese desacuerdo silencioso es justo lo que estropea las recetas.",
    howToUse: [
      "Elige el producto: la densidad es lo que convierte volumen en peso.",
      "Elige la unidad en la que estás midiendo.",
      "Introduce la cantidad.",
      "Cambia el sentido si tienes gramos y necesitas volumen.",
    ],
    howItWorks: "La cantidad se pasa a mililitros con el factor de la unidad y se multiplica por la densidad del producto. En sentido contrario, los gramos se dividen entre la densidad y luego se convierten a la unidad elegida.",
    example: "Una taza métrica de harina, a 0,53 g/ml, son 127,2 g.",
    faq: [
      { q: "¿Por qué importa el producto?", a: "Porque el peso por mililitro es una propiedad de la sustancia. Una taza de agua son 240 g, una de harina unos 127 g y una de miel unos 341 g." },
      { q: "¿Qué exactitud tienen las densidades?", a: "Son valores convencionales de cocina, y la calculadora muestra el que ha usado. Los productos secos varían según cómo se hayan echado: la harina cucharada, cogida a cazo o compactada puede diferir en una cuarta parte." },
      { q: "¿Qué taza se utiliza?", a: "La métrica, de 240 ml. Si tu receta es estadounidense, su taza son 236,6 ml: un 1,4 % menos, lo que importa en repostería y no en un caldo." },
      { q: "¿Puedo convertir gramos otra vez en tazas?", a: "Sí, cambia el sentido. Se usa la misma densidad, así que ir y volver devuelve el número de partida." },
      { q: "¿Por qué no usar sin más una balanza?", a: "Úsala si la tienes. Esto es para recetas escritas en tazas cuando tienes gramos, o al revés." },
    ],
  },
  "convert-data-rate": {
    longDescription: "Convierte la velocidad de datos entre bits y bytes por segundo, con prefijos decimales y binarios. Los operadores anuncian megabits mientras el navegador muestra megabytes: la diferencia es exactamente ocho.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del bit por segundo; un byte cuenta como ocho bits.",
    example: "Una línea de 100 Mbit/s entrega 12,5 MB/s: el operador cuenta bits y el navegador muestra bytes.",
    faq: [
      { q: "¿Por qué 100 Mbit/s dan solo 12,5 MB/s?", a: "Un byte contiene ocho bits. Los operadores anuncian bits y los gestores de archivos muestran bytes, así que la relación es exactamente ocho." },
      { q: "¿En qué se diferencian MiB/s y MB/s?", a: "Un mebibyte son 1024² bytes y un megabyte, 10⁶ bytes: alrededor de un 4,9 % más." },
      { q: "¿Se incluye la sobrecarga del protocolo?", a: "No: aquí se convierten unidades. La velocidad real de descarga siempre es menor que la de la línea." },
      { q: "¿Cómo obtengo un volumen a partir de una velocidad?", a: "Multiplícala por el tiempo. Para volúmenes existe un conversor de almacenamiento aparte." },
    ],
  },
  "convert-density": {
    longDescription: "Convierte densidades entre kilogramos por metro cúbico, gramos por centímetro cúbico, kilogramos por litro, toneladas por metro cúbico, gramos por litro, libras por pie cúbico y por galón estadounidense, y onzas por pulgada cúbica.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del kilogramo por metro cúbico con factores exactos.",
    example: "El agua ronda 1 g/cm³, es decir, 1000 kg/m³ o unas 62,43 libras por pie cúbico.",
    faq: [
      { q: "¿Por qué 1 g/cm³ equivale a 1000 kg/m³?", a: "Un kilogramo tiene mil gramos y un metro cúbico, un millón de centímetros cúbicos; un millón dividido entre mil son mil." },
      { q: "¿Cuál es la densidad del agua?", a: "Alrededor de 1 g/cm³ a 4 °C. El valor exacto depende de la temperatura, así que esta herramienta convierte unidades y no consulta sustancias." },
      { q: "¿Se puede convertir densidad en masa?", a: "No: para eso hace falta un volumen. La densidad es masa por volumen, y el conversor trabaja solo con esa magnitud." },
      { q: "¿Qué galón se utiliza?", a: "El estadounidense, de 3,785411784 litros. El galón imperial es mayor y aquí no se usa." },
    ],
  },
  "convert-digital": {
    longDescription: "Convierte almacenamiento digital entre unidades decimales (kB, MB, GB, TB) y binarias (KiB, MiB, GiB, TiB). Los dos sistemas no son lo mismo: un gigabyte son mil millones de bytes mientras que un gibibyte son 1.073.741.824, y por eso un disco de 1 TB aparece como 931 GiB.",
    howToUse: [
      "Introduce el tamaño.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Los prefijos decimales avanzan en potencias de 1000 y los binarios, en potencias de 1024.",
    example: "1 TB son 931,32 GiB, y por eso la capacidad de los discos parece menor en el sistema operativo.",
    faq: [
      { q: "¿Es lo mismo un megabyte que un mebibyte?", a: "No. Un megabyte son 1.000.000 de bytes y un mebibyte, 1.048.576. La diferencia crece con cada salto de prefijo." },
      { q: "¿Por qué mi disco de 1 TB muestra 931 GB?", a: "El fabricante cuenta terabytes decimales mientras que el sistema operativo informa en gibibytes binarios, aunque a menudo los etiquete como GB. El valor es el mismo; las unidades, no." },
      { q: "¿Qué sistema debo usar?", a: "Los fabricantes de almacenamiento y de red usan unidades decimales. Los sistemas operativos y las memorias suelen usar binarias. Sigue el que use tu fuente." },
      { q: "¿Dónde encajan los bits?", a: "Un byte son ocho bits. Las velocidades de red se indican normalmente en bits por segundo y el almacenamiento, en bytes." },
    ],
  },
  "convert-energy": {
    longDescription: "Convierte energía entre julios, kilojulios, megajulios, vatios hora, kilovatios hora, calorías, kilocalorías, BTU y electronvoltios. Los kilovatios hora aparecen en la factura de la luz, las kilocalorías en el etiquetado de los alimentos y los BTU en los equipos de calefacción y aire acondicionado.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del julio con factores exactos definidos.",
    example: "Un kilovatio hora son exactamente 3.600.000 julios, y una kilocaloría, exactamente 4184 julios.",
    faq: [
      { q: "¿Por qué un kilovatio hora son 3.600.000 julios?", a: "Un vatio es un julio por segundo, así que un kilovatio durante una hora son 1000 × 3600 julios." },
      { q: "¿La caloría de los alimentos es la misma que la de aquí?", a: "La «Caloría» de los alimentos es una kilocaloría. Elige kcal para el etiquetado nutricional y cal para la caloría termoquímica pequeña, de 4,184 J." },
      { q: "¿Qué BTU se utiliza?", a: "El BTU de la International Table, 1055,05585262 J. Otras definiciones de BTU difieren en la tercera cifra decimal." },
      { q: "¿Por qué el electronvoltio aparece en notación exponencial?", a: "Porque son unos 1,6 × 10⁻¹⁹ julios, y la notación posicional necesitaría diecinueve ceros a la izquierda." },
    ],
  },
  "convert-flow": {
    longDescription: "Convierte caudal volumétrico entre metros cúbicos por segundo y por hora, litros por segundo, minuto y hora, pies cúbicos por minuto y galones estadounidenses por minuto.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del metro cúbico por segundo con factores exactos.",
    example: "Un metro cúbico por hora son 16,67 litros por minuto.",
    faq: [
      { q: "¿Es caudal volumétrico o másico?", a: "Volumétrico: trabaja con volumen por unidad de tiempo y no necesita la densidad de la sustancia." },
      { q: "¿Qué son CFM y GPM?", a: "CFM son pies cúbicos por minuto, habituales en ventilación; GPM son galones estadounidenses por minuto, habituales en bombas." },
      { q: "¿Cómo obtengo el caudal másico?", a: "Multiplica el caudal volumétrico por la densidad de la sustancia. Hay un conversor de densidad aparte." },
      { q: "¿A qué galón se refiere GPM?", a: "Al estadounidense, de 3,785411784 litros. El imperial es mayor; las bombas se especifican con el estadounidense." },
    ],
  },
  "convert-force": {
    longDescription: "Convierte fuerza entre newtons, kilonewtons, milinewtons, kilogramos-fuerza, toneladas-fuerza, libras-fuerza y dinas. El kilogramo-fuerza aparece en fichas técnicas de ingeniería y la libra-fuerza, en documentación estadounidense.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del newton con factores exactos definidos.",
    example: "Un kilogramo-fuerza son 9,80665 newtons: el peso de un kilogramo bajo la gravedad normal.",
    faq: [
      { q: "¿En qué se diferencian el kilogramo-fuerza y el kilogramo?", a: "El kilogramo mide masa; el kilogramo-fuerza mide fuerza: el peso de un kilogramo bajo la gravedad normal de 9,80665 m/s²." },
      { q: "¿Es exacta la conversión de la libra-fuerza?", a: "Sí. La libra está definida como 0,45359237 kg y la gravedad normal como 9,80665 m/s², de modo que una libra-fuerza son exactamente 4,4482216152605 N." },
      { q: "¿Dónde se usa la dina?", a: "En el sistema CGS y en referencias antiguas de física: una dina es la cienmilésima parte de un newton." },
      { q: "¿Se puede convertir fuerza en masa?", a: "No: son magnitudes distintas. El kilogramo-fuerza solo toma su nombre de la masa que lo produce bajo la gravedad normal." },
    ],
  },
  "convert-frequency": {
    longDescription: "Convierte frecuencia entre hercios, kilohercios, megahercios, gigahercios, milihercios y revoluciones por minuto. Los gigahercios aparecen en las especificaciones de procesadores y wifi, y las rpm en las fichas de los motores.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del hercio con los factores exactos de los prefijos del SI.",
    example: "El wifi de 2,4 GHz son 2400 MHz, y un motor a 3000 rpm gira a 50 Hz.",
    faq: [
      { q: "¿Qué relación hay entre hercios y rpm?", a: "Un hercio es una revolución por segundo, es decir, sesenta revoluciones por minuto." },
      { q: "¿Por qué los procesadores se miden en gigahercios?", a: "Un gigahercio son mil millones de ciclos por segundo: una escala cómoda para los chips actuales." },
      { q: "¿En qué se diferencian mHz y MHz?", a: "La m minúscula es mili, la milésima parte de un hercio; la M mayúscula es mega, un millón de hercios. Entre ambos hay un factor de mil millones." },
      { q: "¿Se puede convertir frecuencia en periodo?", a: "El periodo es el inverso de la frecuencia. Este conversor no hace transformaciones inversas: divide uno entre la frecuencia por tu cuenta." },
    ],
  },
  "convert-fuel-economy": {
    longDescription: "Convierte el consumo entre cuatro unidades. Lo que distingue a este conversor es que la relación es INVERSA: cuantos más litros a los cien kilómetros, menos millas por galón, así que un multiplicador corriente no vale — doblar los litros reduce a la mitad la distancia por galón. Todo pasa por l/100 km y no por una tabla de pares: con cuatro unidades esa tabla costaría dieciséis entradas, y cualquiera de ellas podría desincronizarse del resto. El galón estadounidense y el imperial se diferencian casi en una cuarta parte, así que las mpg americanas y las británicas aparecen en filas separadas: confundirlas es un error del 20 %.",
    howToUse: [
      "Introduce la cifra de consumo.",
      "Elige la unidad en la que viene.",
      "Elige la unidad que quieres.",
      "Las otras tres se muestran al lado para comparar.",
    ],
    howItWorks: "Toda unidad pasa por l/100 km. Los kilómetros por litro guardan relación inversa: 100 ÷ valor. Las millas por galón se convierten como 100 × volumen del galón ÷ (valor × 1,609344). Un galón estadounidense son 3,785411784 l y uno imperial, 4,54609 l.",
    example: "Un consumo de 8 l/100 km son 12,5 km/l, 29,402 mpg (EE. UU.) y 35,31 mpg (Reino Unido).",
    faq: [
      { q: "¿Por qué no basta con multiplicar por un factor?", a: "Porque la relación es inversa, no proporcional. Los litros a los cien kilómetros suben a medida que bajan las millas por galón, así que la conversión pasa por una división y no existe ningún multiplicador constante entre ambas." },
      { q: "¿En qué se diferencian las mpg estadounidenses y las británicas?", a: "En el tamaño del galón: el americano son 3,785 l y el imperial, 4,546. Eso es casi una cuarta parte, así que el mismo coche «hace» 30 mpg en Estados Unidos y 36 mpg en Gran Bretaña." },
      { q: "¿Qué unidad se usa en cada sitio?", a: "Los litros a los 100 km son el estándar en Europa continental, los kilómetros por litro se usan en parte de Asia y de América Latina, y las millas por galón en Estados Unidos y el Reino Unido." },
      { q: "¿Un número más bajo es mejor o peor?", a: "Depende de la unidad, y ahí está la confusión habitual. En litros a los 100 km, cuanto más bajo mejor; en kilómetros por litro y en millas por galón, cuanto más alto mejor." },
      { q: "¿Por qué pasar de 10 a 9 l/100 km ahorra más que pasar de 6 a 5?", a: "Por esa misma relación inversa: un mismo escalón en litros da un ahorro distinto en mpg. Es también la razón por la que mejorar un coche que bebe mucho se amortiza antes que la misma mejora en uno económico." },
    ],
  },
  "convert-illuminance": {
    longDescription: "Convierte la iluminancia entre lux, kilolux, mililux, bujías-pie, fots y nox. El lux aparece en las normas de iluminación de los puestos de trabajo y la bujía-pie, en la documentación estadounidense de alumbrado.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del lux con factores de superficie exactos.",
    example: "Un nivel de 500 lux en un puesto de trabajo son unas 46,45 bujías-pie.",
    faq: [
      { q: "¿En qué se diferencia la iluminancia del flujo luminoso?", a: "El flujo luminoso se mide en lúmenes y describe la lámpara entera; la iluminancia es el flujo que cae sobre un metro cuadrado de superficie." },
      { q: "¿Qué es una bujía-pie?", a: "Un lumen por pie cuadrado. Como el pie está definido de forma exacta, una bujía-pie son 10,7639 lux." },
      { q: "¿Dónde se usa el fot?", a: "En el sistema CGS: un lumen por centímetro cuadrado, es decir, diez mil lux." },
      { q: "¿Se pueden convertir lux en vatios?", a: "No: son magnitudes distintas, y la relación depende del espectro de la fuente." },
    ],
  },
  "convert-length": {
    longDescription: "Convierte longitudes entre unidades métricas e imperiales: milímetros, centímetros, metros, kilómetros, pulgadas, pies, yardas, millas y millas náuticas. El sentido lo marca la elección de unidades, así que un solo conversor cubre todas las parejas.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad tiene un factor exacto respecto al metro, y la conversión pasa por esa base.",
    example: "Una pulgada son exactamente 2,54 cm, y una milla, exactamente 1609,344 m.",
    faq: [
      { q: "¿Son exactas las conversiones imperiales?", a: "Sí. La pulgada está definida como exactamente 0,0254 m, y pies, yardas y millas son múltiplos enteros suyos, así que la conversión es exacta y no aproximada." },
      { q: "¿Qué es una milla náutica?", a: "Exactamente 1852 metros; se usa en navegación marítima y aérea. Es más larga que la milla terrestre de 1609,344 m." },
      { q: "¿El conversor funciona en ambos sentidos?", a: "Sí. Intercambia la unidad de origen y la de destino y la conversión va en sentido contrario." },
      { q: "¿Por qué la misma unidad devuelve el valor sin cambios?", a: "Convertir una unidad a sí misma no pasa por la base, así que no se introduce ninguna deriva de coma flotante." },
    ],
  },
  "convert-mass": {
    longDescription: "Convierte masas entre miligramos, gramos, kilogramos, toneladas, onzas, libras y stones. Las unidades imperiales están definidas de forma exacta, así que pasar libras a gramos es exacto y no aproximado.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad tiene un factor exacto respecto al kilogramo, y la conversión pasa por esa base.",
    example: "Una libra son exactamente 453,59237 gramos y un stone, catorce libras.",
    faq: [
      { q: "¿Es exacta la conversión de la libra?", a: "Sí. La libra está definida como exactamente 0,45359237 kg, de modo que el resultado es exacto por definición y no redondeado." },
      { q: "¿En qué se diferencian la onza y la onza troy?", a: "Este conversor usa la onza avoirdupois, la del comercio. La onza troy de los metales preciosos es más pesada y no está incluida." },
      { q: "¿Qué es un stone?", a: "Una unidad británica de 14 libras, unos 6,35 kg. Todavía se usa para el peso corporal en el Reino Unido e Irlanda." },
      { q: "¿Son lo mismo masa y peso?", a: "En el uso corriente sí, pero en rigor el peso depende de la gravedad. Este conversor trabaja con la masa." },
    ],
  },
  "convert-power": {
    longDescription: "Convierte potencia entre vatios, kilovatios, megavatios, caballo mecánico, caballo métrico y BTU por hora. El caballo mecánico y el métrico son unidades distintas: este conversor las mantiene separadas en lugar de promediarlas.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del vatio con factores definidos.",
    example: "100 kW son unos 136 caballos métricos, o unos 134 caballos mecánicos.",
    faq: [
      { q: "¿Por qué hay dos clases de caballo?", a: "El caballo mecánico son 550 ft·lbf/s = 745,6999 W; el métrico son 75 kgf·m/s = 735,49875 W exactos. Se diferencian en torno a un 1,4 %." },
      { q: "¿Cuál usan las fichas de los coches?", a: "Las especificaciones europeas usan normalmente el caballo métrico (CV o «hp» en sentido laxo); las cifras estadounidenses y británicas suelen referirse al mecánico." },
      { q: "¿Para qué se usan los BTU por hora?", a: "Para la capacidad de calefacción y aire acondicionado. Un kilovatio son unos 3412 BTU/h." },
      { q: "¿El kilovatio hora es una unidad de potencia?", a: "No, es de energía: potencia multiplicada por tiempo. Para kilovatios hora usa el conversor de energía." },
    ],
  },
  "convert-pressure": {
    longDescription: "Convierte presión entre pascales, bares, atmósferas, psi y milímetros de mercurio. En una misma lista se encuentran cuatro sistemas: los manómetros y los neumáticos usan bar o psi, los partes meteorológicos usan hectopascales y la medicina, milímetros de mercurio.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del pascal con factores exactos.",
    example: "Un bar son 100.000 Pa y unas 14,5 psi.",
    faq: [
      { q: "¿Son lo mismo el bar y la atmósfera?", a: "Casi: un bar son 100.000 Pa y una atmósfera, 101.325 Pa; se diferencian en torno a un 1,3 %." },
      { q: "¿Qué presión deben tener los neumáticos?", a: "Normalmente entre 2 y 2,5 bar, unas 29–36 psi. La cifra exacta está en el montante de la puerta o en el manual." },
      { q: "¿Por qué la medicina usa milímetros de mercurio?", a: "Es una unidad histórica del manómetro de mercurio: 1 mmHg son exactamente 133,322387415 Pa. La atmósfera normal son 760 torr, que equivalen a 759,9999 milímetros convencionales: el torr y el mmHg están definidos de forma ligeramente distinta." },
      { q: "¿Qué es el hectopascal de los partes meteorológicos?", a: "Son 100 Pa, exactamente un milibar. Las dos unidades coinciden numéricamente." },
    ],
  },
  "convert-radiation": {
    longDescription: "Deliberadamente limitado a una sola magnitud física: la dosis equivalente. La dosis absorbida en grays y la actividad en becquerelios son magnitudes distintas, y meterlas en una única lista plana de unidades ofrecería una conversión que no existe: el sievert y el gray coinciden numéricamente solo cuando el factor de calidad vale uno, y el becquerelio no se convierte en dosis en absoluto. Dentro de la dosis equivalente la aritmética es exacta por definición: un rem son exactamente 0,01 Sv, así que aquí no hay ninguna aproximación.",
    howToUse: [
      "Introduce el valor que tienes.",
      "Elige la unidad en la que está.",
      "Elige la unidad que quieres.",
      "La línea de la relación muestra el factor, por si quieres reutilizarlo.",
    ],
    howItWorks: "Cada unidad tiene un factor exacto respecto al sievert: mili es la milésima parte, micro la millonésima, nano la milmillonésima, y un rem son 0,01 Sv. El resultado es el valor por el factor de origen dividido entre el de destino.",
    example: "1 mSv son 1000 µSv, y 250 mrem son 2,5 mSv: un rem es exactamente la centésima parte de un sievert.",
    faq: [
      { q: "¿Por qué no está el gray en la lista?", a: "Porque mide otra cosa: la energía absorbida, no el efecto biológico. Coinciden numéricamente solo con un factor de calidad de uno, y fingir lo contrario ocultaría la física." },
      { q: "¿Y los becquerelios?", a: "La actividad es cuánto se desintegra una fuente, no cuánta dosis recibes. Convertir entre ambas cosas exige distancia, tiempo, blindaje e isótopo: eso no es una conversión de unidades." },
      { q: "¿Es exacta la conversión del rem?", a: "Sí, por definición: 1 rem = 0,01 Sv. Aquí no se redondea nada salvo en la presentación." },
      { q: "¿Qué unidad veré en la práctica?", a: "Milisieverts para la exposición anual y los procedimientos médicos, y microsieverts para medidas puntuales y vuelos. El rem todavía aparece en fuentes antiguas y estadounidenses." },
      { q: "¿Un sievert es mucho?", a: "Un sievert es una dosis muy alta. Las cifras cotidianas viven en milisieverts y microsieverts: el fondo natural son unos pocos milisieverts al año." },
    ],
  },
  "convert-speed": {
    longDescription: "Convierte velocidades entre metros por segundo, kilómetros por hora, millas por hora, nudos y pies por segundo. Los nudos se usan en navegación marítima y aérea, y las millas por hora en las señales de tráfico estadounidenses y británicas.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del metro por segundo con factores exactos.",
    example: "36 km/h son exactamente 10 m/s, y un nudo son 1,852 km/h.",
    faq: [
      { q: "¿Qué es un nudo?", a: "Una milla náutica por hora, es decir, 1,852 km/h. Se usa en navegación marítima y aérea." },
      { q: "¿Por qué 36 km/h son exactamente 10 m/s?", a: "Una hora tiene 3600 segundos y un kilómetro, 1000 metros, así que el km/h es exactamente 3,6 veces menor que el m/s." },
      { q: "¿Es exacta la conversión de mph?", a: "Sí. La milla está definida como 1609,344 m, de modo que una mph son exactamente 0,44704 m/s." },
      { q: "¿Sirve para correr?", a: "El ritmo de carrera se mide normalmente en minutos por kilómetro: para eso hay una calculadora de ritmo aparte." },
    ],
  },
  "convert-time": {
    longDescription: "Convierte una duración entre milisegundos, segundos, minutos, horas, días y semanas. Los meses y los años se dejan fuera a propósito: su duración no es fija, y un único multiplicador daría una respuesta verosímil y equivocada.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del segundo con factores exactos.",
    example: "90 minutos son 1,5 horas, y una semana son exactamente 604.800 segundos.",
    faq: [
      { q: "¿Por qué faltan los meses y los años?", a: "Un mes tiene de 28 a 31 días y un año puede ser bisiesto. Un multiplicador fijo elegiría una suposición por ti y en silencio." },
      { q: "¿Cómo obtengo el tiempo entre dos fechas?", a: "Con la calculadora de diferencia de fechas: trabaja con el calendario y no con un multiplicador." },
      { q: "¿Un día son siempre 86.400 segundos aquí?", a: "Sí. Los segundos intercalares y los cambios de hora son efectos del calendario, no definiciones de unidad." },
      { q: "¿Puedo convertir el ritmo de carrera con esto?", a: "No: el ritmo mezcla tiempo y distancia. De eso se ocupa la calculadora de ritmo." },
    ],
  },
  "convert-torque": {
    longDescription: "Convierte el par entre newton metro, kilonewton metro, newton centímetro, kilogramo-fuerza metro, libra-fuerza pie, libra-fuerza pulgada y onza-fuerza pulgada.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad se convierte a través del newton metro con factores exactos de fuerza y longitud.",
    example: "Un par de apriete de 100 N·m son unas 73,76 libras-fuerza pie.",
    faq: [
      { q: "¿En qué se diferencian el par y la fuerza?", a: "El par es fuerza por brazo de palanca, así que su unidad es compuesta: un newton multiplicado por un metro." },
      { q: "¿Es exacta la conversión de la libra-fuerza pie?", a: "Sí: la libra, el pie y la gravedad normal están definidos de forma exacta, de modo que 1 lbf·ft son exactamente 1,3558179483314 N·m." },
      { q: "¿Qué es una onza-fuerza pulgada?", a: "Una unidad estadounidense pequeña, para mecánica de precisión: la dieciseisava parte de una libra-fuerza pulgada." },
      { q: "¿Se puede convertir par en energía?", a: "No. Un newton metro de par y un julio de energía comparten dimensiones, pero son magnitudes distintas." },
    ],
  },
  "convert-volume": {
    longDescription: "Convierte volúmenes entre mililitros, litros, centímetros, metros y pies cúbicos, más galones estadounidenses e imperiales. El galón estadounidense y el británico se diferencian en torno a un 20 %, así que la lista los mantiene separados.",
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen.",
      "Elige la unidad de destino.",
    ],
    howItWorks: "Cada unidad tiene un factor exacto respecto al metro cúbico.",
    example: "Un galón estadounidense son 3,785 litros y uno imperial, 4,546 litros.",
    faq: [
      { q: "¿En qué se diferencian el galón estadounidense y el imperial?", a: "Son medidas históricamente distintas: 3,785 litros frente a 4,546. Ese 20 % de diferencia pasa desapercibido con facilidad en una receta o en un manual." },
      { q: "¿Es lo mismo un litro que un decímetro cúbico?", a: "Sí, exactamente. El litro está definido como un decímetro cúbico, es decir, 0,001 m³." },
      { q: "¿Es lo mismo un mililitro que un centímetro cúbico?", a: "Sí, exactamente. Ambos equivalen a 10⁻⁶ m³." },
      { q: "¿Incluye las medidas de cocina?", a: "Las tazas y las cucharadas no: su volumen cambia según el país. Para eso hace falta un conversor de cocina específico." },
    ],
  },
  "coordinate-convert": {
    longDescription: "Convierte una coordenada geográfica de grados, minutos y segundos a grados decimales y al revés. Los mapas y los aparatos no se ponen de acuerdo en la notación: las cartas en papel y los datos de aviación mantienen minutos y segundos, mientras que los mapas del navegador y los archivos GPX usan grados decimales con signo. En esa pareja el signo lleva el hemisferio —los GMS nunca escriben un menos, escriben una letra—, así que aquí la dirección vive en su propio campo y no dentro del número.",
    howToUse: [
      "Elige el sentido de la conversión.",
      "Desde GMS, introduce grados, minutos y segundos y elige el hemisferio.",
      "En el otro sentido, introduce grados decimales con signo: un menos significa sur u oeste.",
      "Ten en cuenta el intervalo: la latitud se queda dentro de 90° y la longitud, dentro de 180°.",
    ],
    howItWorks: "Grados decimales = grados + minutos ÷ 60 + segundos ÷ 3600. A la inversa: la parte entera da los grados, la fracción por 60 da los minutos y el resto por 60 da los segundos.",
    example: "55°45′30″ norte son 55,7583 grados decimales.",
    faq: [
      { q: "¿Por qué el hemisferio es un campo aparte?", a: "Porque los GMS nunca escriben un menos: la dirección es una letra. El signo solo aparece en la notación decimal, y mezclar los dos sistemas en un mismo campo invitaría al error." },
      { q: "¿Cuántos decimales bastan?", a: "Cuatro decimales son unos once metros de latitud. Eso cubre una dirección o una chincheta en el mapa; la topografía necesita seis o más." },
      { q: "¿Por qué los segundos aparecen con decimales?", a: "Porque redondear un segundo a un número entero desplaza el punto unos treinta metros. La fracción es precisión, no pedantería." },
      { q: "¿Latitud o longitud?", a: "La fórmula es idéntica. Solo cambia el intervalo: la latitud se detiene en 90° y la longitud, en 180°." },
    ],
  },
  "number-scale-names": {
    longDescription: "El sistema del sur de Asia no cuenta de tres en tres: después del millar viene el lakh, cien mil, y después el crore, diez millones. Así que dos crore no son dos millones, sino veinte, y 1,00,00,000 agrupa sus cifras de otra manera que el habitual 10.000.000. El conversor funciona en ambos sentidos y muestra la cantidad en unidades, en lakh y en crore a la vez, de modo que el orden de magnitud se ve entero.",
    howToUse: [
      "Introduce el número y elige la escala en la que está escrito.",
      "Elige la escala a la que quieres convertirlo.",
      "Las filas de unidades, lakh y crore muestran la misma cantidad de tres maneras a la vez.",
      "Los resultados muy grandes y muy pequeños se muestran en notación exponencial.",
    ],
    howItWorks: "Cada escala es un multiplicador sobre la unidad: millar 10³, lakh 10⁵, millón 10⁶, crore 10⁷, mil millones 10⁹.",
    example: "25 lakh son 2,5 millones, es decir, 2.500.000.",
    faq: [
      { q: "¿Cuánto es un crore?", a: "Diez millones. El crore sigue al lakh, que son cien mil, así que un crore contiene exactamente cien lakh." },
      { q: "¿Por qué se agrupan las cifras de otra forma?", a: "Porque tras el primer grupo de tres las cifras van de dos en dos: 1,00,00,000 es un crore. La notación occidental lo agrupa todo de tres en tres." },
      { q: "¿Dónde se usan estos nombres?", a: "En India, Pakistán, Bangladés, Nepal y Sri Lanka: en las noticias, en los precios de la vivienda y en los informes financieros. Al encontrarlos en un texto es fácil equivocarse en un orden de magnitud." },
      { q: "¿Por qué una unidad en lakh aparece con exponente?", a: "Una unidad son 0,00001 lakh, y la plataforma pasa a notación exponencial por debajo de 10⁻⁴ para que el valor no se redondee hasta desaparecer." },
    ],
  },
  "paper-quantity": {
    longDescription: "El papel se especifica en gramos por metro cuadrado pero se compra por hojas, y la serie A es lo que une ambas cosas. Según la norma ISO 216, una hoja A0 es exactamente un metro cuadrado, y cada formato siguiente es la mitad del anterior. Así que «80 g/m²» en A4 significa exactamente 80/16 = 5 gramos por hoja, y una resma de 500 hojas pesa 2,5 kilogramos. Eso importa para los tramos de franqueo, para elegir impresora y para calcular el transporte.",
    howToUse: [
      "El gramaje viene impreso en el envoltorio: 80 g/m² es papel de oficina y 160–300 es cartulina o papel fotográfico.",
      "Los formatos siguen la norma ISO 216, donde A0 es un metro cuadrado y cada siguiente es su mitad.",
      "Para un formato no normalizado, toma el más próximo y escala por la relación de superficies.",
      "El peso no incluye el embalaje: la caja y el envoltorio suman aparte.",
    ],
    howItWorks: "Peso = superficie de la hoja × gramaje × número de hojas.",
    example: "Una resma de 500 hojas A4 de 80 g/m² pesa exactamente 2,5 kilogramos.",
    faq: [
      { q: "¿Por qué una resma de A4 pesa lo que pesa?", a: "Porque A0 es un metro cuadrado y A4 es dieciséis veces menor. A 80 g/m² una hoja pesa 5 gramos, así que 500 hojas suman 2500 gramos de papel; a 64 g/m² la misma resma se queda en 2 kg." },
      { q: "¿En qué se diferencian el gramaje y el grosor?", a: "El gramaje es masa por superficie, mientras que el grosor depende además de lo voluminosa que sea la fibra. Dos papeles de 80 g/m² pueden diferir en grosor hasta la mitad: el papel offset suelto es más grueso que el estucado denso." },
      { q: "¿Cómo calculo el franqueo?", a: "Suma todas las hojas e incluye el sobre. Las tarifas postales van por tramos, así que lo que importa no es el peso exacto sino en qué tramo cae: el cálculo enseña si te mantienes dentro." },
      { q: "¿Qué son las «hojas por kilogramo»?", a: "La cifra inversa: cuántas hojas de este formato y gramaje caben en un kilogramo. Es útil en el mayorista, donde el papel se vende por toneladas y se usa por hojas." },
    ],
  },
  "scale-model": {
    longDescription: "Convierte en tres sentidos: cuál será la medida de la maqueta, cuánto medía el original y qué escala representa un par de medidas ya existente. El denominador de la escala es una entrada de primera clase en el vocabulario propio del modelista —1:87, 1:43, 1:72— y no un término anónimo de una proporción que tengas que colocar tú. Las respuestas vienen en milímetros, y una escala que consultes se imprime de la manera habitual, como 1:N.",
    howToUse: [
      "Elige qué hallar: la medida de la maqueta, la real o la propia escala.",
      "Introduce las medidas en milímetros: así se acotan los planos y se miden las maquetas.",
      "El denominador de la escala es el segundo número de la notación: en 1:87 es 87.",
      "El campo que se está despejando lleva la etiqueta «se calcula» y lo rellena el cálculo.",
    ],
    howItWorks: "Maqueta = original ÷ denominador; original = maqueta × denominador; escala = original ÷ maqueta.",
    example: "Un vagón de 4350 mm a escala 1:87 da una maqueta de 50 mm.",
    faq: [
      { q: "¿Qué significa el segundo número de 1:87?", a: "Cuántas veces menor es la maqueta. A 1:87, cada milímetro de la maqueta representa 87 milímetros del original." },
      { q: "¿En qué se diferencia de una calculadora de proporciones?", a: "Una proporción resuelve un anónimo a : b = c : d y te deja a ti colocar el denominador. Aquí la escala es un campo propio, las respuestas llevan milímetros y una escala consultada se imprime como 1:N." },
      { q: "La escala ha salido con decimales, ¿está mal?", a: "No. Un par arbitrario de medidas rara vez cae en un número redondo: 1:12,5 significa simplemente que el original es 12,5 veces mayor. Para reglas normalizadas, elige la escala aceptada más próxima." },
      { q: "¿Sirve para superficies y volúmenes?", a: "Los campos manejan medidas lineales. La superficie se reduce por N² y el volumen por N³, así que aquí no deben introducirse metros cuadrados." },
    ],
  },
};
