// Подробный испанский текст: раздел «sport».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esSportContent: Partial<Record<string, EsDetailedContent>> = {
  "calorie-calculator": {
    longDescription: "Usa esta calculadora de calorías para estimar las necesidades energéticas diarias de mantenimiento, pérdida de peso o aumento de peso.",
    howToUse: [
      "Introduce el sexo, la edad, la estatura y el peso.",
      "Elige el nivel de actividad y el objetivo.",
      "Revisa las calorías y los macronutrientes.",
    ],
    howItWorks: "La calculadora estima el metabolismo basal y lo ajusta según el nivel de actividad y el objetivo elegido.",
    example: "Usa la calculadora para comparar los objetivos calóricos de mantenimiento y de pérdida de peso.",
    faq: [
      { q: "¿Qué exactitud tiene esta calculadora de calorías?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar la calculadora de calorías?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado de la calculadora de calorías?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "body-fat-calculator": {
    longDescription: "Esta calculadora estima el porcentaje de grasa corporal a partir de los perímetros del cuerpo y la estatura con el método de la Marina de EE. UU. Los hombres necesitan los perímetros de cuello y cintura, y las mujeres también el de cadera. El método se basa en la regresión de Hodgdon y Beckett calibrada frente a la pesada hidrostática, y da una estimación y no una medida: el error es de unos pocos puntos porcentuales y crece de forma apreciable si la cinta se coloca con descuido.",
    howToUse: [
      "Elige tu sexo: hombres y mujeres usan fórmulas distintas y un conjunto distinto de perímetros.",
      "Introduce tu estatura y el perímetro del cuello, medido justo por debajo de la laringe con los hombros relajados.",
      "Mide la cintura en su punto más estrecho por encima del hueso de la cadera e introduce el valor.",
      "Las mujeres necesitan además el perímetro de la cadera en su punto más ancho, con los pies juntos.",
    ],
    howItWorks: "El método de la Marina de EE. UU. estima la grasa corporal con una regresión sobre los perímetros y la estatura. Los hombres usan la diferencia entre cintura y cuello; las mujeres, cintura más cadera menos cuello. Los coeficientes originales están definidos en pulgadas, así que los centímetros que introduces se convierten primero a pulgadas y solo después entran en la fórmula. El logaritmo exige una diferencia de perímetros estrictamente positiva, así que no se produce ningún resultado cuando la cintura no es mayor que el cuello.",
    example: "Un hombre de 180 cm de estatura con 38 cm de cuello y 90 cm de cintura obtiene una estimación de alrededor del 19,9 % de grasa corporal. Una mujer de 165 cm con 32 cm de cuello, 72 cm de cintura y 96 cm de cadera obtiene alrededor del 26,7 %.",
    faq: [
      { q: "¿Qué exactitud tiene este método?", a: "Estima la grasa corporal con unos pocos puntos porcentuales de diferencia frente a la pesada hidrostática. Se creó para cribados a gran escala y no para un análisis preciso de la composición corporal, así que una cifra suelta conviene leerla como una orientación aproximada, mientras que una tendencia a lo largo de varios meses es una señal mucho más fiable." },
      { q: "¿Cómo deben medirse los perímetros?", a: "La cinta debe apoyarse plana sobre la piel sin clavarse y mantenerse horizontal. Mide el cuello justo por debajo de la laringe, la cintura en su punto más estrecho por encima del hueso de la cadera y la cadera en su punto más ancho con los pies juntos. Mide a la misma hora del día, a ser posible varias veces, y toma la media." },
      { q: "¿Por qué hombres y mujeres usan fórmulas distintas?", a: "La grasa corporal se reparte de forma diferente, así que las regresiones se ajustaron por separado sobre muestras masculinas y femeninas. La fórmula femenina incluye el perímetro de la cadera, y tanto los coeficientes como el término constante son completamente distintos entre ambas." },
      { q: "¿Por qué hace falta la estatura para un porcentaje?", a: "La estatura entra en la regresión como corrección por el tamaño corporal: la misma diferencia de perímetros significa una proporción de grasa distinta en una persona alta y en una baja. Por eso la estatura figura en la fórmula junto a los perímetros." },
      { q: "¿Por qué el cálculo se niega a veces a ejecutarse?", a: "La fórmula toma el logaritmo de una diferencia de perímetros, y un logaritmo solo está definido para números positivos. Si la cintura no es mayor que el cuello —en mujeres, si cintura más cadera no es mayor que el cuello— el cálculo es imposible. Las combinaciones extremas también producen un porcentaje negativo sin sentido, que la calculadora no publica." },
      { q: "¿La calculadora muestra una categoría o un rango saludable?", a: "No, a propósito. Los límites de una proporción saludable de grasa corporal difieren entre organizaciones y dependen de la edad y el sexo, y los estándares de servicio de las fuerzas armadas no son recomendaciones médicas. Presentar una escala como la respuesta definitiva sería una falsa precisión." },
      { q: "¿Puede usarse el resultado para juzgar mi salud?", a: "No. Esto es una estimación aproximada a partir de perímetros, no un diagnóstico médico. Para evaluar la composición corporal y los riesgos para la salud, consulta a un profesional y usa métodos instrumentales." },
    ],
  },
  "running-pace-calculator": {
    longDescription: "Usa esta calculadora de ritmo de carrera para convertir la distancia y el tiempo en ritmo y estimar las distancias de carrera habituales.",
    howToUse: [
      "Introduce la distancia y la unidad.",
      "Introduce el tiempo de llegada.",
      "Consulta el ritmo, la velocidad y las previsiones.",
    ],
    howItWorks: "La calculadora divide el tiempo total entre la distancia y usa una fórmula sencilla de previsión para las distancias de carrera habituales.",
    example: "Introduce 5 km y 25 minutos para obtener el ritmo por kilómetro.",
    faq: [
      { q: "¿Qué exactitud tiene esta calculadora de ritmo de carrera?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar la calculadora de ritmo de carrera?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado de la calculadora de ritmo de carrera?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "one-rep-max-calculator": {
    longDescription: "Usa esta calculadora de 1RM para estimar tu una repetición máxima y los porcentajes de entrenamiento.",
    howToUse: [
      "Introduce el peso de trabajo.",
      "Introduce las repeticiones.",
      "Revisa el 1RM estimado y los porcentajes.",
    ],
    howItWorks: "La calculadora usa una fórmula habitual de estimación del 1RM para series de hasta un número moderado de repeticiones.",
    example: "Introduce 80 kg con 5 repeticiones para estimar tu una repetición máxima aproximada.",
    faq: [
      { q: "¿Qué exactitud tiene esta calculadora de una repetición máxima?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar la calculadora de una repetición máxima?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado de la calculadora de una repetición máxima?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "activity-calories": {
    longDescription: "Calcula el gasto de una actividad concreta y no una ración diaria: el MET expresa cuántas veces más energía cuesta una actividad que el reposo, y todo el cálculo se sigue de él. El peso corporal entra como multiplicador y no como corrección: un ciclista de 90 kg quema casi un tercio más que uno de 70 kg en la misma bicicleta, y una media de tabla lo subestima. Los coeficientes que se ofrecen son los valores de referencia más usados, pero son medias y no medidas, así que tu propio ritmo puede introducirse mediante una entrada aparte de la lista.",
    howToUse: [
      "Elige una actividad, o la entrada para tu propio coeficiente MET.",
      "Introduce tu peso corporal: entra en el cálculo como multiplicador.",
      "Introduce la duración de la sesión en minutos.",
      "Consulta el gasto por hora si planificas una sesión más larga.",
    ],
    howItWorks: "Calorías = MET × 3,5 × peso en kilogramos ÷ 200 × minutos. El 3,5 es el consumo de oxígeno en reposo en mililitros por kilogramo y minuto, y el MET indica cuánto lo supera la actividad.",
    example: "Pedalear 45 minutos con 70 kg y un MET de 7,5 quema 413 kcal, es decir, 9,19 kcal por minuto.",
    faq: [
      { q: "¿Qué significa el coeficiente MET?", a: "Cuántas veces más energía cuesta una actividad que el reposo. Un MET de 7,5 significa que pedalear consume siete veces y media más energía que estar sentado tranquilo." },
      { q: "¿Por qué importa tanto el peso?", a: "Entra en la fórmula como multiplicador: mover un cuerpo más pesado cuesta más energía. Con 90 kg en lugar de 70 el gasto es casi un tercio mayor." },
      { q: "¿Qué exactitud tienen los coeficientes de la lista?", a: "Son medias para un ritmo moderado. El gasto real depende de la velocidad, el terreno y la forma física, y por eso puede introducirse tu propio coeficiente a mano." },
      { q: "¿Incluye el metabolismo en reposo?", a: "No. Este es el gasto de la propia sesión; una ración diaria que incluya el metabolismo es otra calculadora." },
      { q: "¿Puedo restar estas calorías de mi ingesta diaria?", a: "Solo en parte: tu cuerpo habría gastado energía en reposo durante ese tiempo de todos modos. En rigor, resta el gasto menos el metabolismo en reposo del mismo periodo." },
    ],
  },
  "barbell-plates": {
    longDescription: "Toma el peso que quieres en la barra y calcula qué colgar en cada lado, empezando por el disco más pesado de que dispones y bajando desde ahí. La lista de discos disponibles es tuya y puedes editarla: un gimnasio sin discos de 1,25 da otras respuestas, y fingir lo contrario te daría una carga que no puedes montar. Si el objetivo no se alcanza con exactitud, lo que falta se muestra en su propia línea en vez de redondearse: saber que te faltan 1,25 kg es más útil que un número que en silencio no es el peso que pediste.",
    howToUse: [
      "Introduce el peso total que quieres en la barra.",
      "Introduce el peso de la propia barra: una barra olímpica son 20 kg.",
      "Enumera los discos de que dispones, separados por espacios.",
      "Monta en cada lado la combinación que se muestra.",
    ],
    howItWorks: "La barra se resta del objetivo y el resto se divide entre dos para obtener un lado. Después los discos se toman de forma voraz, del más pesado al más ligero, cada uno tantas veces como quepa.",
    example: "100 kg en una barra de 20 kg salen como 25 + 15 en cada lado.",
    faq: [
      { q: "¿Por qué empieza por el disco más pesado?", a: "Porque así se carga una barra en la práctica: los discos grandes contra el collarín y los pequeños por fuera. Tomar el más pesado que quepa da además el menor número de discos." },
      { q: "¿Y si el peso exacto es imposible?", a: "Se muestra lo que falta. Con solo discos de 25 y de 20 no se pueden montar 87,5 kg, y la calculadora dice cuánto falta en lugar de redondear la respuesta." },
      { q: "¿Introduzco los discos por lado o en total?", a: "Solo los pesos que tienes, una vez cada uno. La calculadora supone una carga simétrica y cuenta los pares por su cuenta." },
      { q: "¿Cómo trato una barra distinta?", a: "Cambia el peso de la barra: una barra olímpica femenina son 15 kg, una de entrenamiento suele pesar 10 kg y algunas barras fijas pesan más de lo que parecen." },
      { q: "¿Se incluyen los collarines?", a: "No. Si tus collarines son pesados —los de competición pesan 2,5 kg cada uno—, suma su peso al de la barra." },
    ],
  },
  "bike-gear-ratio": {
    longDescription: "Calcula la relación de transmisión: cuántas veces gira la rueda trasera por cada vuelta de los pedales. Una relación de 2 significa dos vueltas de rueda por vuelta de pedal. Si indicas el perímetro de la rueda obtienes además el desarrollo: la distancia que avanza la bicicleta por vuelta de pedal, que es la cifra con la que de verdad se comparan los desarrollos, porque ya tiene en cuenta el tamaño de rueda y no depende de qué números de dientes produjeron la relación.",
    howToUse: [
      "Introduce el número de dientes del plato y del piñón.",
      "Si quieres, indica el perímetro de la rueda.",
      "Consulta la relación y el desarrollo.",
    ],
    howItWorks: "Relación de transmisión = dientes del plato ÷ dientes del piñón. Desarrollo = relación × perímetro de la rueda.",
    example: "Un plato de 50 dientes con un piñón de 25 da una relación de 2,00: dos vueltas de rueda por vuelta de pedal.",
    faq: [
      { q: "¿Qué significa la relación de transmisión?", a: "Cuántas veces la rueda adelanta a los pedales. Una relación de 4 es un desarrollo duro para ir rápido en llano; alrededor de 1 es un desarrollo suave para subir." },
      { q: "¿Por qué importa el desarrollo?", a: "Convierte la relación en metros y permite comparar desarrollos entre bicicletas con ruedas distintas. La misma relación en ruedas de 26 y de 29 pulgadas recorre distancias diferentes." },
      { q: "¿De dónde saco el perímetro de la rueda?", a: "Medirlo es lo más fácil: marca un punto en la cubierta, haz rodar la bicicleta una vuelta completa y mide la distancia. Así se recogen también la presión y el montaje de la cubierta." },
      { q: "¿Por qué el número de dientes debe ser entero?", a: "Porque los dientes vienen en unidades enteras. Un valor fraccionario significa una errata, y la calculadora lo dice." },
    ],
  },
  "bike-wheel-size": {
    longDescription: "Dos maneras de introducir un tamaño, porque la llanta dice una cosa y los ciclistas otra. El ETRTO da el diámetro de asiento de la llanta y la anchura de la cubierta en milímetros, y el diámetro de la rueda es la llanta más DOS anchuras, porque la cubierta queda por encima y por debajo. El tamaño en pulgadas es una herencia redondeada, así que «26 pulgadas» y el ETRTO 559 salen distintos: se calcula exactamente lo que introduzcas. El perímetro es lo que pide un ciclocomputador y lo que toma como dato la calculadora de desarrollo: no hay otro sitio de donde sacarlo salvo aquí o la caja de la cubierta.",
    howToUse: [
      "Mira el flanco de la cubierta: el ETRTO son dos números como 25-622.",
      "Introduce el segundo como llanta y el primero como anchura de cubierta.",
      "O cambia a pulgadas si es lo único que conoces.",
      "Usa el perímetro para configurar un ciclocomputador.",
    ],
    howItWorks: "En modo ETRTO el diámetro es la llanta más dos veces la anchura de la cubierta. En modo pulgadas es las pulgadas por 25,4. El perímetro es pi por el diámetro, y las vueltas por kilómetro son un millón de milímetros divididos entre él.",
    example: "Una cubierta 25-622 da una rueda de 672 mm y un perímetro de 2111,15 mm.",
    faq: [
      { q: "¿Dónde encuentro el tamaño ETRTO?", a: "En el flanco de la cubierta, como dos números separados por un guion: 25-622 significa 25 mm de ancho sobre una llanta de 622 mm. Es la única marca de tamaño que está realmente normalizada." },
      { q: "¿Por qué la anchura de la cubierta se cuenta dos veces?", a: "Porque la cubierta queda a ambos lados de la llanta. La rueda crece una anchura de cubierta por arriba y otra por abajo." },
      { q: "¿Por qué no coinciden las pulgadas y el ETRTO?", a: "Porque los tamaños en pulgadas son etiquetas históricas y no medidas. 26 pulgadas son 660,4 mm por aritmética, pero una llanta de BTT de 26 pulgadas mide 559 mm: la diferencia es la cubierta y el redondeo." },
      { q: "¿Es esta cifra bastante exacta para un ciclocomputador?", a: "Es un buen punto de partida. Para exactitud real, haz rodar la rueda una vuelta con tu peso encima y mide: una cubierta cargada es algo menor que una libre." },
      { q: "¿Qué relación tiene con la calculadora de desarrollo?", a: "Aquella pide el perímetro de la rueda. De aquí sale ese número." },
    ],
  },
  "calories-from-macros": {
    longDescription: "Convierte los gramos de proteínas, grasas e hidratos de carbono en calorías con los factores de Atwater, y muestra qué proporción del total aporta cada macronutriente.",
    howToUse: [
      "Introduce los gramos de proteínas.",
      "Introduce los gramos de grasas.",
      "Introduce los gramos de hidratos de carbono.",
    ],
    howItWorks: "Calorías = 4 × proteínas + 9 × grasas + 4 × hidratos de carbono.",
    example: "100 g de proteínas, 50 g de grasas y 200 g de hidratos dan 1650 kcal.",
    faq: [
      { q: "¿Por qué las grasas son 9 y no 4?", a: "Las grasas son más densas en energía por gramo que las proteínas o los hidratos. Los factores de Atwater reflejan la energía que el cuerpo extrae de verdad." },
      { q: "¿Incluye la fibra o el alcohol?", a: "No. La calculadora cubre solo los tres macronutrientes principales; la fibra y el alcohol usan otros factores." },
      { q: "¿Los factores son exactos?", a: "Son medias convencionales. La absorción real varía según el alimento y la persona, así que toma el resultado como una estimación de trabajo." },
      { q: "¿Por qué importan las proporciones?", a: "Dos dietas con las mismas calorías pueden diferir mucho en composición, y el reparto suele ser lo que un plan busca de verdad." },
    ],
  },
  "ideal-weight": {
    longDescription: "Las cuatro fórmulas están construidas igual: un peso base a los cinco pies más un suplemento por cada pulgada por encima, y por eso la estatura se convierte a pulgadas: forma parte de cómo funcionan, no es un adorno. Ninguna es más correcta que las demás: difieren en varios kilogramos y todas descienden de estadísticas de mediados del siglo XX. Por eso se muestran las cuatro junto con su media, y al lado el rango de peso saludable según el IMC, que es el único de los cinco que llega como intervalo en vez de como punto. Una sola cifra aquí parecería una precisión que no existe.",
    howToUse: [
      "Elige tu sexo: cada fórmula tiene constantes distintas para cada uno.",
      "Introduce tu estatura en centímetros.",
      "Compara los cuatro resultados: su dispersión es la incertidumbre honesta.",
      "Lee el rango de IMC como el intervalo dentro del cual las fórmulas estiman un punto.",
    ],
    howItWorks: "Cada fórmula toma un peso base y añade un suplemento por pulgada por cada pulgada de estatura por encima de los cinco pies. El rango de IMC son 18,5 y 24,9 multiplicados por la estatura en metros al cuadrado.",
    example: "Un hombre de 180 cm obtiene 74,99 kg por Devine y 71,52 por Miller, con una media de 74,12 kg.",
    faq: [
      { q: "¿Cuál de los cuatro resultados es la respuesta?", a: "Ninguno por sí solo. Se ajustaron a poblaciones distintas con fines distintos —Devine para dosificar medicamentos, no para dar consejos de salud— y su desacuerdo es justo el motivo de mostrar los cuatro." },
      { q: "¿Por qué el rango de IMC no coincide con las fórmulas?", a: "Porque responde a otra pregunta. Las fórmulas estiman un peso; el rango dice qué pesos no llaman la atención para tu estatura. Una persona sana puede estar en cualquier punto de él." },
      { q: "¿Las fórmulas tienen en cuenta la musculatura?", a: "No. Ninguna sabe nada de ti salvo tu estatura, y por eso una persona delgada y musculada superará las cuatro y estará perfectamente sana." },
      { q: "¿Por qué no hay más opciones que hombre y mujer?", a: "Porque las fórmulas publicadas definen solo dos conjuntos de constantes. Inventar un tercero sería inventar cifras, y la calculadora no hace eso." },
      { q: "¿Es lo mismo que una calculadora de IMC?", a: "No. El IMC toma tu peso real y lo clasifica. Esta va al revés: de la estatura sola a un peso que las fórmulas esperarían." },
    ],
  },
  "max-heart-rate": {
    longDescription: "Estima la frecuencia cardíaca máxima a partir de la edad y despliega las zonas de entrenamiento. Existen varias fórmulas y difieren de forma apreciable: «220 − edad» es la más sencilla pero sobreestima sistemáticamente la cifra en personas mayores y la subestima en jóvenes, mientras que la fórmula de Tanaka está construida sobre medidas y tiene otra pendiente. La elección queda en tus manos, porque cinco o siete pulsaciones desplazan todos los límites de zona. Si se indica una frecuencia en reposo, las zonas siguen el método de Karvonen: se calculan a partir de la reserva cardíaca y no directamente del máximo, lo que sube de forma apreciable las zonas bajas.",
    howToUse: [
      "Introduce tu edad en años enteros.",
      "Elige una fórmula: la clásica es más sencilla y la de Tanaka se acerca más en adultos.",
      "Mide tu frecuencia en reposo por la mañana antes de levantarte e introdúcela.",
      "Usa la tabla de zonas: las bajas para trabajo continuo y las altas para series.",
    ],
    howItWorks: "La frecuencia máxima se estima a partir de la edad con la fórmula elegida. Reserva cardíaca = máxima menos frecuencia en reposo. Un límite de zona = frecuencia en reposo + una proporción de la reserva; sin frecuencia en reposo la reserva es igual al máximo y las zonas pasan a ser proporciones directas de él.",
    example: "A los 35 la fórmula «220 − edad» da 185, y con una frecuencia en reposo de 60 la zona aeróbica va de 148 a 160 pulsaciones.",
    faq: [
      { q: "¿Qué exactitud tiene una estimación por edad?", a: "Es una media poblacional y no una medida: la variación individual llega a diez o doce pulsaciones en cualquier sentido. La cifra exacta sale de una prueba de esfuerzo progresiva." },
      { q: "¿Qué fórmula debo elegir?", a: "«220 − edad» es más conocida pero sobreestima el resultado en personas mayores. Tanaka se apoya en medidas posteriores, y Gulati se dedujo de una cohorte femenina." },
      { q: "¿Por qué importa la frecuencia en reposo?", a: "Permite calcular las zonas a partir de la reserva cardíaca y no del máximo. En una persona entrenada con una frecuencia en reposo baja las zonas se desplazan de forma apreciable, y sin ella los límites inferiores salen demasiado bajos." },
      { q: "¿Cómo mido la frecuencia en reposo?", a: "Por la mañana, nada más despertarte, tumbado, antes de levantarte o de tomar café. Una media de tres o cuatro días funciona bien." },
      { q: "¿Puedo entrenar con estas zonas sin preparación?", a: "El cálculo es un punto de referencia, no un plan de entrenamiento. Con problemas de corazón o de tensión, o tras una parada larga, acuerda la carga con un médico." },
    ],
  },
  "steps-distance-calories": {
    longDescription: "Convierte la cifra de tu podómetro en distancia y energía. La zancada sale de tu estatura por la proporción habitual de 0,415 o directamente de una medida que hayas tomado tú: una zancada medida siempre gana a una estimada, y quien haya medido la suya no tiene motivo para fiarse de un coeficiente. La energía por kilómetro es una suposición visible y editable: 0,53 kcal por kilogramo de peso corporal y kilómetro es andar normal, y correr, llevar mochila o subir cuesta lo cambian. Esconder esa cifra dentro del código aparentaría una precisión que este cálculo no tiene.",
    howToUse: [
      "Introduce el número de pasos.",
      "Indica tu estatura o cambia a introducir la zancada que has medido.",
      "Introduce tu peso corporal: las calorías escalan con él.",
      "Ajusta la energía por kilómetro si no ibas simplemente andando.",
    ],
    howItWorks: "La zancada es la estatura por 0,415 salvo que la introduzcas directamente. La distancia son los pasos por la zancada, y las calorías son el coeficiente de energía por el peso por la distancia en kilómetros.",
    example: "10 000 pasos con 175 cm de estatura son 7,263 km y unas 269 kcal para quien pese 70 kg.",
    faq: [
      { q: "¿Qué exactitud tiene la proporción de 0,415?", a: "Es una regla práctica habitual para andar, no una ley. Las zancadas individuales varían con la longitud de pierna, el ritmo y el calzado; si importa, mide diez pasos y divide." },
      { q: "¿Por qué el coeficiente calórico es un campo?", a: "Porque depende de lo que estuvieras haciendo. Andar ronda las 0,5 kcal por kilogramo y kilómetro; correr es bastante más, y también cargar peso o subir cuesta." },
      { q: "¿Cuenta las calorías que gastaría de todos modos?", a: "No. La cifra es la energía del propio movimiento, no la diferencia respecto a estar tumbado, así que sobreestima ligeramente el gasto adicional." },
      { q: "¿Por qué el peso cambia las calorías?", a: "Porque mover un cuerpo más pesado la misma distancia exige más trabajo. La distancia sigue siendo la misma; la energía no." },
      { q: "¿En qué se diferencia de la calculadora de calorías del ejercicio?", a: "Aquella parte de una actividad y una duración a través de los valores MET. Esta parte de los pasos y una zancada, sin reloj de por medio." },
    ],
  },
  "vo2max": {
    longDescription: "El consumo máximo de oxígeno es el techo de cuánto oxígeno puede usar el cuerpo durante un esfuerzo intenso, y es la mejor cifra de laboratorio para la forma aeróbica. Los dos métodos de aquí son estimaciones y no medidas: una cifra real sale de analizar el aire espirado sobre una cinta. El test de Cooper se apoya en una distancia realmente recorrida y por eso es sensible al reparto del esfuerzo, al firme y al tiempo. La fórmula por frecuencia cardíaca no exige correr en absoluto, pero se apoya por completo en la frecuencia en reposo, que se mueve más con el sueño, la cafeína y los nervios que con la forma física. Los dos se muestran por separado porque tienen datos distintos y fiabilidad distinta.",
    howToUse: [
      "Elige el método del que tengas datos.",
      "Para el test de Cooper, introduce los metros recorridos en exactamente 12 minutos.",
      "Para el método por frecuencia cardíaca, introduce la frecuencia en reposo y la máxima en pulsaciones por minuto.",
      "Mide la frecuencia en reposo por la mañana, antes de levantarte de la cama.",
    ],
    howItWorks: "Cooper: VO₂máx. = (distancia − 504,9) ÷ 44,73. Frecuencia cardíaca: VO₂máx. = 15,3 × frecuencia máxima ÷ frecuencia en reposo.",
    example: "Recorrer 2600 m en 12 minutos da una estimación de 46,839 ml/kg/min.",
    faq: [
      { q: "¿Qué método es más fiable?", a: "El test de Cooper, siempre que el esfuerzo haya sido de verdad máximo y el ritmo uniforme. La fórmula por frecuencia cardíaca es cómoda pero depende de una frecuencia en reposo que varía de un día a otro." },
      { q: "¿Qué es un buen VO2 máx.?", a: "Depende mucho de la edad y del sexo. Los adultos sin entrenar suelen estar en los treinta y tantos, los corredores aficionados en los cuarenta y cincuenta, y los atletas de resistencia de élite por encima de 70." },
      { q: "¿Cómo hallo mi frecuencia cardíaca máxima?", a: "Lo mejor es un máximo medido en un esfuerzo intenso. La estimación habitual de 220 menos la edad es una media poblacional aproximada y puede fallar en más de diez pulsaciones en una persona concreta." },
      { q: "¿Puedo comparar entre sí estas dos estimaciones?", a: "No de forma útil. Se apoyan en supuestos distintos y difieren habitualmente en varias unidades; comparar tu propia cifra a lo largo del tiempo dentro de un mismo método es mucho más informativo." },
    ],
  },
  "waist-ratio": {
    longDescription: "Ambos índices son adimensionales, así que las unidades dan igual mientras las medidas se tomen del mismo modo. La franja sale del índice cintura-estatura y no del cintura-cadera: el primero compara entre personas de distinta estatura, mientras que el segundo depende más de la complexión. El límite en la mitad de tu estatura es el más conocido y el más sencillo de los criterios —cintura por debajo de la mitad de la estatura— y es justo donde termina la franja saludable y empieza la elevada.",
    howToUse: [
      "Mide la cintura en el punto más estrecho, espirando con normalidad.",
      "Mide la cadera en el punto más ancho.",
      "Introduce tu estatura medida sin calzado.",
      "Consulta el índice cintura-estatura: por debajo de 0,5 es la franja saludable.",
    ],
    howItWorks: "El índice cintura-estatura es la cintura dividida entre la estatura. El cintura-cadera es la cintura dividida entre la cadera. La franja se toma del primero: por debajo de 0,4 por debajo de lo habitual, por debajo de 0,5 saludable, por debajo de 0,6 elevado y por encima, alto.",
    example: "Una cintura de 84 cm con 178 cm de estatura da 0,4719: dentro de la franja saludable.",
    faq: [
      { q: "¿Dónde se mide exactamente la cintura?", a: "En el punto más estrecho entre las costillas y las caderas, espirando pero sin meter tripa. Medir en el ombligo da una cifra mayor y otra respuesta." },
      { q: "¿Por qué cintura-estatura y no IMC?", a: "Porque se fija en dónde está el peso. Dos personas con el mismo IMC pueden tener cinturas muy distintas, y la cintura es la parte que la investigación asocia al riesgo." },
      { q: "¿La regla de la mitad de la estatura vale de verdad con cualquier estatura?", a: "Es un criterio, no una ley, y funciona mejor en el centro del rango de estaturas que en los extremos. Por eso el índice exacto se muestra junto a la franja." },
      { q: "¿Para qué sirve entonces el cintura-cadera?", a: "Describe la forma más que el tamaño y se usa por derecho propio, con umbrales distintos para hombres y mujeres. Aquí se muestra como cifra, sin veredicto." },
      { q: "¿Sustituye a un médico?", a: "No. Es una cifra entre muchas, y ningún índice puede decirte nada que una cinta métrica no vea." },
    ],
  },
  "water-intake": {
    longDescription: "La cifra parte del peso corporal a razón de unos 33 ml por kilogramo, añade unos 350 ml por cada media hora de actividad y sube todo el total una décima parte cuando hace calor. El multiplicador se aplica a todo y no solo a la parte de actividad, porque el calor aumenta las pérdidas de fondo por la piel y la respiración, no solo el sudor durante el ejercicio. Son reglas prácticas aceptadas y no medidas de un cuerpo concreto: la dieta, la salud y el clima mueven la necesidad real más que el peso. La cifra en vasos aparece al lado porque nadie bebe en litros, y once vasos es un número que todavía puedes retener en la cabeza al llegar la tarde.",
    howToUse: [
      "Introduce tu peso corporal en kilogramos.",
      "Introduce cuántos minutos de actividad prevés en el día.",
      "Marca que hace calor cuando el día sea caluroso o la habitación esté cálida.",
      "Reparte el total a lo largo del día en vez de beberlo de una vez.",
    ],
    howItWorks: "Base = peso × 0,033 litros. La actividad añade minutos ÷ 30 × 0,35 litros. El calor multiplica todo el total por 1,1.",
    example: "Con 72 kg y 45 minutos de actividad el total son 2,901 litros, unos 11,6 vasos.",
    faq: [
      { q: "¿El té y el café cuentan para el total?", a: "Sí. La vieja idea de que la cafeína deshidrata no se sostiene con un consumo normal; el líquido del té, del café y de la comida cuenta todo, y por eso la cifra es de consumo y no de agua a secas." },
      { q: "¿Por qué se multiplica todo el total con calor y no solo la parte de actividad?", a: "Porque el calor aumenta las pérdidas por la piel y la respiración se haga ejercicio o no. Aplicar el multiplicador solo a la actividad subestimaría un día caluroso pasado sentado." },
      { q: "¿Cuanta más agua, mejor?", a: "No. Beber mucho más allá de la sed diluye el sodio de la sangre y en casos extremos es peligroso. Esta cifra es un objetivo para repartir en un día, no un mínimo que forzar." },
      { q: "¿Qué exactitud tienen los 33 ml por kilogramo?", a: "Es un convenio, y bastante aproximado. La salud renal, la medicación, la altitud y la dieta desplazan la necesidad real bastante más allá de lo que cualquier regla basada en el peso puede recoger." },
    ],
  },
};
