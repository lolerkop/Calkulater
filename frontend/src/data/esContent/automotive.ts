// Подробный испанский текст: раздел «automotive».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esAutomotiveContent: Partial<Record<string, EsDetailedContent>> = {
  "car-depreciation": {
    longDescription: "Un coche pierde valor siguiendo una curva, no una recta, y el primer año es su tramo más pronunciado. Esta calculadora mantiene ese año con su propia tasa y aplica la tasa anual corriente a los años siguientes, así que un coche de tres años no se valora como si hubiera envejecido de forma uniforme desde nuevo. La cifra que produce es la parte del precio de compra que todavía puedes esperar recuperar; la pérdida que aparece al lado es el coste real de haber tenido el coche, y en la mayoría de los casos supera al combustible y al mantenimiento juntos.",
    howToUse: [
      "Introduce el precio al que se compró el coche.",
      "Introduce cuántos años completos lo has tenido.",
      "Introduce la tasa de pérdida anual que se aplica tras el primer año.",
      "Introduce aparte la pérdida del primer año: normalmente es la mayor.",
    ],
    howItWorks: "Valor = precio × (1 − pérdida del primer año) × (1 − tasa anual) elevado al número de años posteriores al primero. Con cero años el valor es igual al precio.",
    example: "Un coche comprado por 24 000 pierde un 20 % el primer año y un 12 % anual después: cuatro años más tarde vale 13 084,26.",
    faq: [
      { q: "¿Por qué el primer año tiene una tasa aparte?", a: "Porque la caída es real y grande: un coche deja de ser nuevo en cuanto se matricula. Repartir esa pérdida a lo largo de todo el periodo sobrevaloraría todos los coches de dos y tres años." },
      { q: "¿Qué tasa anual es realista?", a: "En modelos de gran serie, del diez al quince por ciento anual tras el primero es un rango habitual. Los modelos raros, los vehículos comerciales y los coches con poca oferta pueden quedar muy fuera de él, así que toma el valor por defecto como punto de partida y no como un hecho." },
      { q: "¿El kilometraje cambia el resultado?", a: "En este modelo no: solo usa la edad. Un kilometraje alto empuja el precio real por debajo de esta cifra, y uno inusualmente bajo, por encima." },
      { q: "¿Por qué no cuentan los años parciales?", a: "El mercado fija el precio de los coches por años de edad, así que tres años y medio se negocian como tres. Los años se redondean hacia abajo exactamente por eso." },
    ],
  },
  "compression-ratio": {
    longDescription: "La relación de compresión es el volumen total del cilindro dividido entre el volumen de la cámara de combustión, y determina tanto el rendimiento como el combustible que exige el motor. La sensibilidad es acusada y asimétrica: quitar un centímetro cúbico a la cámara sube la relación de forma apreciable, mientras que añadir uno a la cilindrada apenas la mueve. De ahí la práctica: la compresión se sube en la culata, no rectificando el bloque.",
    howToUse: [
      "La cilindrada es la de UN cilindro, no la del motor entero.",
      "El volumen de la cámara se mide llenando la culata con líquido y las válvulas cerradas.",
      "La cámara completa incluye la junta y la holgura de plano: mídelas también.",
      "Esto da la relación geométrica; los motores con cierre tardío de admisión trabajan con una efectiva menor.",
    ],
    howItWorks: "Relación de compresión = (cilindrada + cámara) / cámara.",
    example: "Un cilindro de 454,17 cm³ con una cámara de 45 cm³ da 11,093.",
    faq: [
      { q: "¿Qué aporta una relación de compresión mayor?", a: "Más rendimiento y más potencia con la misma cilindrada: la mezcla arde a mayor presión y cede más energía. El precio es la exigencia de octanaje: si te pasas, empieza la detonación." },
      { q: "¿Por qué rebajar la culata la sube tanto?", a: "Porque la cámara está en el denominador y es pequeña. Quitar 3 cm³ de 45 es un siete por ciento del denominador; esos mismos 3 cm³ sobre una cilindrada de 454 cm³ no llegan al uno por ciento." },
      { q: "¿En qué se diferencia la compresión geométrica de la efectiva?", a: "La geométrica se calcula con volúmenes; la efectiva empieza cuando la válvula de admisión se cierra de verdad. Los motores con cierre tardío trabajan con una compresión efectiva bastante menor, que es justo por lo que toleran una cifra geométrica alta." },
      { q: "¿Y en motores sobrealimentados?", a: "La presión de soplado sube la presión de admisión y la presión total al final de la compresión. Por eso los motores turbo trabajan con una relación geométrica MENOR: de lo contrario la detonación llegaría antes." },
    ],
  },
  "engine-displacement": {
    longDescription: "La cifra de la documentación viene redondeada: «1,8 litros» puede significar 1796 o 1816 centímetros cúbicos, mientras que Hacienda y la aduana trabajan con el número exacto. Aquí sale de las tres medidas que aparecen en los catálogos de recambios y grabadas en el bloque. Una fila aparte da la relación carrera-diámetro: explica por qué dos motores de la misma cilindrada se comportan de forma distinta; uno de carrera larga tira desde bajas vueltas y uno de carrera corta prefiere subir de vueltas.",
    howToUse: [
      "Diámetro y carrera en milímetros, tal como los imprimen los catálogos de recambios.",
      "Rectificar el bloque cambia el diámetro pero no la carrera: introduce el tamaño real de la camisa.",
      "Una relación carrera-diámetro mayor que uno indica un motor de carrera larga y menor que uno, de carrera corta.",
      "Esta es la cilindrada. El volumen total de la cámara de combustión es mayor por el volumen muerto.",
    ],
    howItWorks: "V = π/4 · D² · S · n, con los milímetros cúbicos divididos entre 1000.",
    example: "Cuatro cilindros de 82×86 mm dan 1816,67 cm³: los conocidos «1,8 litros».",
    faq: [
      { q: "¿Por qué la documentación dice otra cosa?", a: "La cilindrada declarada se redondea a la décima, y a veces a la cifra comercial del modelo. El volumen exacto según las medidas del cilindro difiere en decenas de centímetros cúbicos, y ese es el número con el que trabajan la aduana y Hacienda." },
      { q: "¿Qué consigue rectificar el bloque?", a: "Cada milímetro extra de diámetro añade volumen de forma cuadrática: en un motor de 82 mm, rectificar a 83 añade unos 45 cm³ entre los cuatro cilindros. La carrera no cambia: la fija el cigüeñal." },
      { q: "¿En qué se diferencia un motor de carrera larga?", a: "Con una carrera mayor que el diámetro, el pistón alcanza una velocidad media mayor al mismo régimen, así que el motor tira desde abajo pero sube peor de vueltas. Uno de carrera corta hace lo contrario, y por eso los deportivos lo prefieren." },
      { q: "¿Vale para una motocicleta?", a: "Sí, a la fórmula le da igual el vehículo. Para un motor monocilíndrico introduce uno y el cálculo mostrará el mismo volumen en ambas filas." },
    ],
  },
  "fuel-oil-mix": {
    longDescription: "Una motosierra, una desbrozadora y un fueraborda se lubrican con aceite disuelto en el combustible, y un error aquí cuesta el conjunto del pistón: poco aceite raya el cilindro y demasiado carboniza los segmentos. Toma la proporción del manual de tu motor y no de memoria: los aceites sintéticos modernos van de 1:25 a 1:100. La proporción de aceite se mide respecto a la mezcla terminada, así que 1:50 sale un 1,96 % y no un dos redondo.",
    howToUse: [
      "Toma la proporción del manual de tu motor: 1:25 en equipos antiguos y 1:50 en la mayoría de las máquinas modernas.",
      "Solo aceite de dos tiempos: el aceite de motor de coche no sirve aquí y carboniza el pistón.",
      "Mezcla en la garrafa antes de repostar, no en el depósito: de lo contrario el aceite se queda en el fondo.",
      "El combustible mezclado aguanta alrededor de un mes: pasado ese tiempo la gasolina se pasa y los aditivos lubricantes se degradan.",
    ],
    howItWorks: "Aceite = gasolina · 1000 / N mililitros con una proporción 1:N.",
    example: "Cinco litros de gasolina a 1:50 necesitan 100 ml de aceite y dan 5,1 litros de mezcla.",
    faq: [
      { q: "¿Qué pasa con demasiado aceite?", a: "El exceso no arde: deposita carbonilla en el pistón, carboniza los segmentos y obstruye el silenciador. El motor pierde potencia y humea, y la bujía se engrasa. No es más seguro que quedarse corto: la avería solo tarda más." },
      { q: "¿Por qué la proporción de aceite no es exactamente el 2 % en 1:50?", a: "Porque la proporción se declara respecto a la gasolina mientras que el porcentaje se mide respecto a la mezcla terminada. 1000 ml de gasolina llevan 20 ml de aceite, pero la mezcla son 1020 ml, y 20/1020 da un 1,96 %." },
      { q: "¿Puede la mezcla ir a un motor de cuatro tiempos?", a: "No. Allí el aceite trabaja en un cárter aparte, y en el combustible solo deja carbonilla y arruina la bujía. La mezcla está pensada precisamente para motores cuya lubricación viaja con el combustible." },
      { q: "¿Sirve la gasolina con etanol?", a: "Se separa antes y mantiene peor el aceite en suspensión. Para máquinas de temporada se usa gasolina sin etanol, o se preparan mezclas pequeñas y se agitan antes de cada repostaje." },
    ],
  },
  "power-to-weight": {
    longDescription: "Divide la potencia del motor entre la masa del vehículo y muestra el resultado de las tres maneras en que la gente habla de él. El caballo de aquí es el métrico, 735,49875 W, que es la cifra que figura en la documentación europea de los vehículos; la variante mecánica difiere en alrededor de un uno y medio por ciento y estropearía en silencio cualquier comparación.",
    howToUse: [
      "Introduce la potencia del motor y elige su unidad.",
      "Introduce la masa en vacío.",
      "Añade cualquier carga adicional que quieras incluir.",
    ],
    howItWorks: "La potencia se convierte a kilovatios, la masa a toneladas, y la relación sale de ahí; los kg por CV son esa misma relación invertida.",
    example: "150 CV en un coche de 1400 kg son 110,32 kW sobre 1,4 t, es decir, 78,80 kW por tonelada.",
    faq: [
      { q: "¿Qué caballo se usa?", a: "El métrico, 735,49875 W, escrito también CV. Es el que aparece en la documentación de los vehículos en toda Europa." },
      { q: "¿Debo incluir a los pasajeros y el combustible?", a: "Es tu elección. La masa en vacío es la base habitual de comparación, y el campo de carga adicional te permite sumar lo que quieras contar." },
      { q: "¿Por qué se muestran también los kilogramos por caballo?", a: "Mucha gente recuerda la cifra así, y un número menor significa mejor aceleración, lo que a algunos les resulta más intuitivo." },
      { q: "¿Predice la aceleración?", a: "Solo de forma aproximada. Las relaciones de cambio, la tracción, la aerodinámica y en qué punto del régimen llega la potencia influyen y no están modelados." },
    ],
  },
  "quarter-mile-elapsed-time": {
    longDescription: "Un cuarto de milla es lo bastante largo como para que la relación potencia-peso decida la tirada por encima de la salida. Por eso la vieja regla práctica de Roger Huntington relaciona el resultado solo con la masa y la potencia, y todavía describe bastante bien a los coches corrientes. En coches de aceleración preparados falla, y por un motivo evidente: allí la mitad del resultado se hace en el primer medio segundo, en la tracción y en el reglaje de salida más que en el motor.",
    howToUse: [
      "Usa la masa en vacío incluyendo al conductor: ochenta kilos se notan en la pista.",
      "Introduce la potencia en rueda si la conoces; la cifra declarada al volante de inercia da un resultado más optimista.",
      "La fórmula está definida para caballos y libras; la masa se convierte por dentro.",
      "En tracción total y coches preparados la estimación es pesimista: salen mejor de lo que supone la regla.",
    ],
    howItWorks: "Regla de Huntington: tiempo = 5,825·∛(masa en libras / potencia), velocidad final = 234·∛(potencia / masa en libras) mph.",
    example: "150 CV y 1300 kg dan 15,6 segundos y unos 141 km/h al cruzar la meta.",
    faq: [
      { q: "¿Por qué en la fórmula no aparecen la tracción ni las relaciones de cambio?", a: "Porque en un cuarto de milla influyen en los primeros metros, y a partir de ahí lo decide todo la capacidad del motor de acelerar la masa. En esa distancia la relación potencia-peso se traga las diferencias de desarrollo." },
      { q: "¿Qué exactitud tiene?", a: "En un coche de serie corriente, normalmente unas décimas de segundo. En tracción total, en coches con mucho retardo de turbo y en coches de aceleración preparados la diferencia llega al segundo o más." },
      { q: "¿Qué cifra de potencia debo usar?", a: "Preferiblemente una medida en rueda: la declarada se toma en el volante de inercia e ignora unas pérdidas de transmisión del diez al veinte por ciento. Con la cifra declarada el resultado sale optimista." },
      { q: "¿Por qué importa más la velocidad final que el tiempo?", a: "Depende menos de la salida y por eso caracteriza mejor al motor. Los pilotos la comparan cuando quieren saber si el límite está en el motor o en la técnica." },
    ],
  },
  "speed-distance-time": {
    longDescription: "Resuelve el triángulo en el sentido que necesites, y muestra al lado el tiempo de viaje desglosado en horas y minutos. Solo velocidad media: las paradas y las aceleraciones no se modelan, así que la cifra responde a cuánto dura un viaje constante y no a lo que marca el velocímetro en un momento dado.",
    howToUse: [
      "Elige qué valor necesitas.",
      "Introduce los dos que conoces.",
      "Consulta el resultado y el tiempo de viaje.",
    ],
    howItWorks: "Velocidad = distancia ÷ tiempo, distancia = velocidad × tiempo, tiempo = distancia ÷ velocidad.",
    example: "420 km recorridos en 5 horas son una media de 84 km/h.",
    faq: [
      { q: "¿Es velocidad media o instantánea?", a: "Media. Responde a lo rápido que fuiste en conjunto, incluyendo lo que hiciera el tráfico por el camino." },
      { q: "¿Debo incluir las paradas en el tiempo?", a: "Es tu elección, y cambia el significado. Incluirlas da la media de todo el viaje; excluirlas da la media en movimiento." },
      { q: "¿Puedo usar millas?", a: "No directamente: el cálculo trabaja en kilómetros. Convierte antes con el conversor de unidades si tus cifras están en millas." },
      { q: "¿Por qué se rechaza una velocidad de cero al hallar el tiempo?", a: "Dividir entre ella no tiene valor: parado no se recorre ninguna distancia, así que ningún tiempo responde a la pregunta." },
    ],
  },
  "stopping-distance": {
    longDescription: "La distancia de parada se compone de dos partes desiguales. La distancia de reacción crece de forma lineal con la velocidad, y la de frenado CUADRÁTICAMENTE: el doble de velocidad significa cuatro veces la frenada. Por eso «solo un poco de más» en autopista cuesta más de lo que parece: de 100 a 120 km/h la distancia de frenado crece casi la mitad. La pendiente lleva signo: una bajada resta agarre y una subida lo suma.",
    howToUse: [
      "Coeficiente de rozamiento: asfalto seco unos 0,7, mojado 0,4, nieve 0,2, hielo 0,1.",
      "El tiempo de reacción es de alrededor de un segundo en un conductor atento y bastante más si está cansado o distraído.",
      "Pendiente en porcentaje: una bajada es negativa y una subida, positiva.",
      "Esto es una frenada de emergencia en línea recta. El derrape, el ABS y los firmes irregulares no se modelan.",
    ],
    howItWorks: "Distancia de reacción = v·t; frenada = v²/(2g(μ + pendiente)); la distancia de parada es la suma.",
    example: "A 90 km/h sobre asfalto seco y con un segundo de reacción la distancia es de 70,52 m.",
    faq: [
      { q: "¿Por qué la distancia de frenado crece de forma cuadrática?", a: "Porque los frenos disipan la energía cinética, que va con el cuadrado de la velocidad. Al doble de velocidad hay cuatro veces la energía, así que con el mismo agarre la distancia es cuatro veces mayor." },
      { q: "¿Cuánto peligro entraña pasarse de velocidad?", a: "De 100 a 120 km/h la distancia de frenado crece alrededor de 1,44 veces. Donde el coche a 100 ya se ha detenido, el que iba a 120 sigue circulando a unos 66 km/h: de sobra para un impacto grave." },
      { q: "¿Cómo influye la pendiente?", a: "Una bajada reduce el agarre efectivo y una subida lo aumenta. En una bajada del diez por ciento con un agarre de 0,7 la distancia de frenado crece alrededor de un quince por ciento; con poco agarre, una bajada puede hacer imposible detenerse." },
      { q: "¿El ABS acorta la distancia?", a: "No siempre. El ABS mantiene la dirección y evita que las ruedas se bloqueen, pero en asfalto seco la distancia sale más o menos igual, y en nieve suelta o grava puede ser incluso mayor." },
    ],
  },
  "tire-size": {
    longDescription: "Lee un código como 205/55 R16, cuyos tres números están escritos en unidades distintas, y en eso consiste todo el cálculo. La anchura va en milímetros, el perfil es un porcentaje de esa anchura y el diámetro de la llanta va en pulgadas. La cifra del medio no es, por tanto, una altura: un 55 en un neumático de 205 de ancho son 112,75 mm, y leerlo como milímetros falla en un factor de dos. El diámetro exterior es la llanta más dos flancos, arriba y abajo, y de él salen el perímetro y las vueltas por kilómetro que se usan para comparar medidas y estimar el error del velocímetro.",
    howToUse: [
      "Introduce el primer número del código: la anchura del neumático en milímetros.",
      "Introduce el segundo número: el perfil como porcentaje de la anchura, no en milímetros.",
      "Introduce el diámetro de la llanta en pulgadas, la cifra tras la R.",
      "Compara el diámetro exterior con el de otra medida.",
    ],
    howItWorks: "Flanco = anchura × perfil ÷ 100. Diámetro exterior = diámetro de la llanta × 25,4 + dos flancos. Perímetro = π × diámetro exterior, y vueltas por kilómetro = un millón dividido entre él.",
    example: "Un neumático 205/55 R16 tiene un flanco de 112,75 mm y un diámetro exterior de 631,9 mm: 503,73 vueltas por kilómetro.",
    faq: [
      { q: "¿Por qué la cifra del medio no es una altura en milímetros?", a: "Porque es un porcentaje de la anchura. En un neumático 205/55 el flanco es el 55 % de 205, es decir, 112,75 mm y no 55 mm." },
      { q: "¿Por qué el flanco cuenta dos veces?", a: "El diámetro exterior pasa por el centro de la rueda, y hay flanco tanto por debajo como por encima de la llanta. Por eso se suman dos alturas de flanco al diámetro de la llanta." },
      { q: "¿Para qué sirven las vueltas por kilómetro?", a: "Sirven para comparar medidas: si un neumático nuevo da menos vueltas por kilómetro, el velocímetro empezará a marcar de menos, y el cuentakilómetros también." },
      { q: "¿Cómo estimo el error del velocímetro?", a: "Compara las vueltas por kilómetro de la medida antigua y de la nueva: la diferencia porcentual es aproximadamente el error de la velocidad indicada." },
      { q: "¿Se incluye la deformación bajo carga?", a: "No, el cálculo es geométrico y da el diámetro sin carga. Bajo el peso del coche el radio de rodadura es unos milímetros menor." },
    ],
  },
  "trip-cost": {
    longDescription: "Convierte la distancia y el consumo en litros, los valora al precio de surtidor y suma los peajes. Solo se cuenta lo que gastas de verdad en la carretera: la depreciación, el desgaste y los impuestos por kilómetro dependen del coche y del kilometraje, y ponerles cifra haría pasar una suposición por un cálculo.",
    howToUse: [
      "Introduce la distancia y tu consumo.",
      "Introduce el precio del combustible que pagas.",
      "Añade los peajes y los ocupantes si procede.",
    ],
    howItWorks: "Litros = distancia ÷ 100 × consumo; coste = litros × precio + peajes; la parte de cada uno es eso dividido entre los ocupantes.",
    example: "800 km a 7,5 l/100 km y 1,62 el litro consumen 60 litros y cuestan 97,20.",
    faq: [
      { q: "¿Se incluyen el desgaste y la depreciación?", a: "No, solo el combustible y los peajes. El coste por kilómetro del desgaste depende mucho del coche y sería una suposición y no un cálculo." },
      { q: "¿Cómo cuento el viaje de vuelta?", a: "Activa la opción de ida y vuelta y la distancia se duplica, junto con el combustible que necesita." },
      { q: "¿Qué cifra de consumo debo usar?", a: "La que hayas medido tú. La autopista y la ciudad difieren lo bastante como para que la cifra del fabricante rara vez coincida con un viaje real." },
      { q: "¿Los peajes son por sentido o en total?", a: "En total. Introduce lo que cuesta el viaje entero en peajes, incluida la vuelta si has elegido ida y vuelta." },
    ],
  },
  "wheel-offset": {
    longDescription: "El ET es la distancia de la cara de apoyo al centro de la llanta, y puede ser negativo: en llantas de plato profundo la cara queda hacia dentro. La pregunta práctica es casi siempre la misma: cuánto se moverá la rueda hacia dentro o hacia fuera con otro ET. El signo es contraintuitivo: un ET MENOR empuja la rueda HACIA FUERA, así que el sentido se explica con palabras y no solo con un número.",
    howToUse: [
      "Anchura de la llanta en pulgadas según el marcado: 7J significa 7 pulgadas.",
      "La cifra ET va grabada en la llanta y puede ser negativa.",
      "La distancia al plano interior tiene en cuenta las pestañas: la llanta completa es una pulgada más ancha que la anchura marcada.",
      "Sacar la rueda hacia fuera carga el rodamiento de la mangueta y puede rozar con el paso de rueda.",
    ],
    howItWorks: "Distancia al plano interior = anchura/2 + ET + 12,7 mm; desplazamiento = ET antiguo − ET nuevo.",
    example: "Una llanta de 7 pulgadas con ET 35 da 136,6 mm al plano interior; pasar a ET 45 mete la rueda 10 mm hacia dentro.",
    faq: [
      { q: "¿Por qué un ET menor saca la rueda hacia fuera?", a: "El ET se mide desde la cara de apoyo, la superficie que se aprieta contra la mangueta. Esa cara no se mueve, así que reducir el ET aleja el centro de la llanta de la mangueta: hacia fuera." },
      { q: "¿Cuánto puede cambiar el ET?", a: "Los fabricantes suelen admitir unos pocos milímetros. Un desplazamiento apreciable hacia fuera aumenta el radio de pivotamiento, carga el rodamiento y puede rozar con el paso de rueda a lo largo del recorrido de la suspensión." },
      { q: "¿En qué se diferencia el ET del backspacing?", a: "El ET se mide desde el centro de la llanta y el backspacing, desde el borde interior. El primero va grabado en las llantas europeas y el segundo aparece en las tablas americanas; media anchura de llanta los relaciona." },
      { q: "¿Ayudan los separadores?", a: "Un separador reduce el ET efectivo y saca la rueda hacia fuera, así que resuelve solo uno de los dos problemas. Además acorta el agarre de los espárragos y exige tornillos más largos: sin ellos la fijación deja de ser segura." },
    ],
  },
};
