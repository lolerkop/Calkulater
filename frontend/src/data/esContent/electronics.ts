// Подробный испанский текст: раздел «electronics».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esElectronicsContent: Partial<Record<string, EsDetailedContent>> = {
  "battery-charge-time": {
    longDescription: "Estima el tiempo de carga: la capacidad en amperios hora dividida entre la corriente del cargador, ajustada por el rendimiento. Es lo inverso de la pregunta sobre la autonomía: aquella página dice cuánto dura una batería bajo carga y esta, cuánto tarda en rellenarse. La estimación es idealizada: un cargador real reduce la corriente hacia el final del ciclo, así que el último puñado de por ciento tarda bastante más de lo calculado.",
    howToUse: [
      "Introduce la capacidad de la batería en amperios hora.",
      "Indica la corriente del cargador.",
      "Baja el rendimiento si hace falta: el tiempo crece en consecuencia.",
    ],
    howItWorks: "Tiempo = capacidad ÷ (corriente × rendimiento ÷ 100). Con un 100 % de rendimiento es simplemente la capacidad dividida entre la corriente.",
    example: "Una batería de 100 Ah a 10 A se carga en 10 h 0 min con rendimiento pleno.",
    faq: [
      { q: "¿En qué se diferencia de la autonomía de una batería?", a: "La autonomía responde a cuánto dura una carga bajo consumo. Esto es lo inverso: cuánto se tarda en rellenar la capacidad." },
      { q: "¿Por qué la carga real tarda más?", a: "Porque el cargador reduce la corriente hacia el final del ciclo para no sobrecalentar la batería. El último puñado de por ciento entra mucho más despacio, y eso no se modela aquí." },
      { q: "¿Qué rendimiento debo usar?", a: "En cargadores sencillos, normalmente del 80 al 90 %: parte de la energía se pierde en calor. Al 100 % el resultado es una cota inferior del tiempo." },
      { q: "¿Se tiene en cuenta la carga restante?", a: "No, se supone una carga desde vacío. Si la batería está a la mitad, introduce la mitad de la capacidad." },
    ],
  },
  "battery-runtime": {
    longDescription: "Convierte los amperios hora en vatios hora usando la tensión de la batería, aplica la profundidad de descarga y el rendimiento de conversión, y divide entre el consumo. Los amperios hora no son energía, y confundirlos da una respuesta equivocada por un factor igual a la tensión, así que la conversión se hace en un paso visible.",
    howToUse: [
      "Introduce la capacidad en amperios hora y la tensión de la batería.",
      "Introduce el consumo en vatios.",
      "Fija la profundidad de descarga y el rendimiento de conversión.",
    ],
    howItWorks: "Energía = capacidad × tensión × profundidad de descarga × rendimiento; autonomía = energía ÷ consumo.",
    example: "100 Ah a 12 V con un 80 por ciento de profundidad y un 90 por ciento de rendimiento dan 864 Wh, que alimentan un consumo de 200 W durante 4,32 horas.",
    faq: [
      { q: "¿Por qué la autonomía real sale más corta?", a: "El cálculo es lineal. Las baterías de plomo entregan menos con corriente alta, y aquí no se modelan la curva de descarga, el efecto Peukert ni la temperatura." },
      { q: "¿Para qué sirve la profundidad de descarga?", a: "La mayoría de las baterías no deben vaciarse del todo. Ponerla al 80 por ciento significa que solo esa parte de la capacidad se considera aprovechable." },
      { q: "¿El rendimiento debe incluir el inversor?", a: "Sí, si el consumo pasa por uno. Esa es justo la pérdida de conversión que pretende recoger el campo." },
      { q: "¿Por qué se multiplica por la tensión?", a: "Los amperios hora miden carga, no energía. Multiplicar por la tensión los convierte en vatios hora, que es lo que consume una carga en vatios." },
    ],
  },
  "battery-series-parallel": {
    longDescription: "La conexión en serie suma tensiones, la conexión en paralelo suma capacidades, y confundirlas sale caro. Las mismas doce celdas conectadas 4S3P dan 14,8 V con 10,2 Ah, mientras que 3S4P dan 11,1 V con 13,6 Ah: la misma energía almacenada, pero solo una de las dos alimentará un aparato que espera 12 V. El esquema tiene que cuadrar con el número de celdas: serie por paralelo debe ser igual al total. Un desajuste significa un error en el plan y no un pack raro, y recalcularlo en silencio escondería justo el fallo que conviene detectar antes de soldar nada.",
    howToUse: [
      "Introduce el número total de celdas de que dispones.",
      "Introduce la tensión y la capacidad de una celda.",
      "Introduce cuántas celdas van en serie y cuántas ramas van en paralelo.",
      "Los dos números del esquema deben multiplicarse hasta el total.",
    ],
    howItWorks: "Tensión del pack = tensión de la celda × celdas en serie. Capacidad del pack = capacidad de la celda × ramas en paralelo. La energía es la tensión por la capacidad.",
    example: "Doce celdas de 3,7 V y 3,4 Ah en 4S3P dan 14,8 V, 10,2 Ah y 150,96 Wh.",
    faq: [
      { q: "¿Qué esquema debo elegir?", a: "Ajusta primero la tensión que necesita tu aparato y usa después las celdas restantes en paralelo para ganar capacidad. La tensión es un requisito rígido; la capacidad solo cambia cuánto dura." },
      { q: "¿Por qué la energía es la misma en ambos casos?", a: "Porque la energía es tensión por capacidad, y el esquema reparte el mismo total entre los dos factores. Lo que cambia es si el pack encaja en el aparato." },
      { q: "¿Puedo mezclar celdas de distinta capacidad?", a: "No con seguridad. En serie la celda más débil limita toda la rama y puede llegar a invertirse; en paralelo una celda descompensada absorbe una corriente desigual. Usa celdas emparejadas." },
      { q: "¿Se tienen en cuenta el BMS o las pérdidas del cableado?", a: "No. Los packs reales pierden algo de tensión bajo carga por la resistencia interna y las conexiones, y una placa de protección añade sus propios cortes. Toma estas cifras como nominales." },
    ],
  },
  "capacitor-basics": {
    longDescription: "Relaciona las tres magnitudes de un condensador —carga, tensión y capacidad— resolviendo en cualquier sentido, y muestra al lado la energía del campo eléctrico. La capacidad se introduce en microfaradios y la carga en microculombios, las unidades impresas en el cuerpo del componente. No confundas los faradios con los amperios hora de una batería: los amperios hora son una reserva de carga para una entrega sostenida y los faradios, la capacidad de retener carga a una tensión dada; son cosas de distinta naturaleza.",
    howToUse: [
      "Elige cuál de las tres magnitudes buscas.",
      "Introduce las otras dos: la que se despeja pasa a ser de solo lectura.",
      "Toma la capacidad en microfaradios directamente del cuerpo del componente.",
      "Comprueba la tensión frente a la nominal del condensador: este cálculo no lo hace.",
    ],
    howItWorks: "La carga es la capacidad por la tensión: Q = C·V. La energía almacenada es la mitad de la capacidad por la tensión al cuadrado, con los microfaradios convertidos a faradios.",
    example: "Un condensador de 100 µF a 12 V lleva 1200 µC y almacena 0,0072 J.",
    faq: [
      { q: "¿En qué se diferencian los faradios de los amperios hora de una batería?", a: "Los amperios hora son una reserva de carga para una entrega sostenida. Los faradios son la capacidad de retener carga a una tensión dada. Son de distinta naturaleza y no se comparan directamente." },
      { q: "¿Por qué la energía crece más deprisa que la tensión?", a: "Porque la carga es lineal en la tensión mientras que la energía es cuadrática. El doble de tensión da el doble de carga y cuatro veces la energía." },
      { q: "¿Se tiene en cuenta la tensión nominal?", a: "No. El cálculo relaciona las magnitudes por fórmula y no sabe nada del límite de la hoja de datos. Superar la tensión nominal destruye el componente sea cual sea el resultado mostrado." },
      { q: "¿Y la conexión en serie y en paralelo?", a: "Esto cubre un solo condensador. En paralelo las capacidades se suman; en serie se suman las inversas." },
    ],
  },
  "capacitor-network": {
    longDescription: "Las fórmulas de los condensadores son las inversas de las de las resistencias, y de ahí vienen casi todos los errores: en paralelo las capacidades se suman y en serie se suman las inversas, exactamente como hacen las resistencias en paralelo. El motivo es físico: una conexión en paralelo suma superficie de placas y una conexión en serie suma distancia entre placas, así que una rama en serie acaba con menos capacidad que su miembro más pequeño.",
    howToUse: [
      "Escribe los valores separados por espacios, comas o saltos de línea.",
      "Todos los valores van en microfaradios: introduce 0,1 µF como 0,1, y 100 nF también como 0,1.",
      "Compara la respuesta con el valor más pequeño: en serie el total siempre queda por debajo.",
      "Resuelve las redes mixtas por partes: primero los grupos y después sus resultados.",
    ],
    howItWorks: "Paralelo: C = C₁ + C₂ + …; serie: 1/C = 1/C₁ + 1/C₂ + …",
    example: "100, 220 y 470 µF en serie dan 59,98 µF; en paralelo dan 790 µF.",
    faq: [
      { q: "¿Por qué está todo al revés que en las resistencias?", a: "Una conexión en paralelo suma superficie de placas, y la capacidad es proporcional a la superficie. Una conexión en serie suma la separación entre placas, y la capacidad es inversamente proporcional a ella." },
      { q: "¿El total puede ser menor que el condensador más pequeño?", a: "En serie siempre lo es. Tres condensadores de 100 µF dan 33,3 µF, y eso es una propiedad del circuito, no un error." },
      { q: "¿Para qué conectar condensadores en serie?", a: "Por la tensión: una rama en serie soporta la suma de las tensiones de trabajo de sus miembros. La capacidad baja a cambio de esa resistencia." },
      { q: "¿Se tiene en cuenta la tolerancia de los valores?", a: "No. Los condensadores electrolíticos varían a menudo un veinte por ciento o más, así que un banco real se aparta del valor calculado más de lo que parece." },
    ],
  },
  "coaxial-cable-impedance": {
    longDescription: "La impedancia característica de un cable la fijan solo su geometría y su dieléctrico: en la fórmula no aparece ni la longitud ni la frecuencia. Un cable de cincuenta ohmios son cincuenta ohmios lo mismo en un metro que en cien. Todo depende de la relación entre el diámetro de la malla y el del conductor: unos 3,6 en polietileno dan los clásicos 50 ohmios y unos 8,8, los 75 de televisión. El factor de velocidad explica por qué un trozo de cable es eléctricamente más largo que físicamente, y sin él no se puede cortar un tramo de cuarto de onda.",
    howToUse: [
      "Usa el diámetro interior de la malla, medido sobre el dieléctrico y no sobre la cubierta exterior.",
      "Permitividad: polietileno macizo 2,25, espumado 1,4-1,6, PTFE 2,1, aire 1.",
      "Una relación de diámetros de 3,6 en polietileno da 50 ohmios y 8,8 da 75 ohmios.",
      "El factor de velocidad hace falta al cortar longitudes en fracciones de onda: la longitud física es menor que la eléctrica.",
    ],
    howItWorks: "Z₀ = 138/√εr · log₁₀(D/d); capacidad 2πε₀εr/ln(D/d); factor de velocidad 1/√εr.",
    example: "Un conductor de 0,9 mm dentro de una malla de 2,95 mm con polietileno da 47,4 ohmios: un RG-58 corriente.",
    faq: [
      { q: "¿La impedancia depende de la longitud del cable?", a: "No. La fijan la sección y el dieléctrico, y es la misma en cualquier longitud. La atenuación y el retardo dependen de la longitud; la impedancia no." },
      { q: "¿Por qué 50 y 75 ohmios precisamente?", a: "Son compromisos. El coaxial soporta más potencia cerca de los 30 ohmios y tiene menos pérdidas cerca de los 77; los 50 quedan en el medio para transmisores, mientras que los 75 están más cerca del mínimo de pérdidas para señal." },
      { q: "¿Qué es el factor de velocidad?", a: "La relación entre la velocidad de la onda en el cable y la de la luz. En polietileno ronda dos tercios, así que un tramo de cuarto de onda es físicamente más corto que un cuarto de onda en el aire exactamente en ese factor." },
      { q: "¿Qué ocurre con un desajuste?", a: "Parte de la potencia se refleja hacia la fuente. En un transmisor eso calienta la etapa de salida; en una línea digital provoca reflexiones y errores. Por eso el cable, los conectores y la carga se eligen todos para una misma impedancia." },
    ],
  },
  "headphone-power": {
    longDescription: "La sensibilidad en decibelios por milivatio es el volumen con un milivatio, y a partir de ahí cada duplicación de la potencia añade exactamente tres decibelios. De ahí la conclusión sorprendente: para sonar el doble de fuerte hacen falta unas diez veces la potencia. La tensión y la corriente se muestran aparte porque es lo que un amplificador limita de verdad: a unos auriculares de alta impedancia se les acaba la tensión y a los de baja, la corriente, y la potencia por sí sola no dice cuál.",
    howToUse: [
      "Toma la sensibilidad de la hoja de datos. Si viene en dB/V, conviértela: dB/mW y dB/V no son intercambiables.",
      "La impedancia también sale de la hoja de datos; en auriculares dinámicos varía con la frecuencia, así que aquí se usa el valor nominal.",
      "Compara la tensión y la corriente resultantes con los límites de tu amplificador: son esas, y no la potencia, las que suelen agotarse.",
      "Escuchar de forma prolongada por encima de 85 dB daña el oído; 110 dB solo son seguros durante segundos.",
    ],
    howItWorks: "SPL = sensibilidad + 10·log₁₀(P); U = √(P·R), I = √(P/R).",
    example: "Unos auriculares de 100 dB/mW a 32 Ω con 10 mW dan 110 dB, 0,566 V y 17,68 mA.",
    faq: [
      { q: "¿Por qué el doble de potencia da solo +3 dB?", a: "El decibelio es logarítmico: la ganancia es 10·log₁₀ del cociente de potencias, y log₁₀2 ≈ 0,3. Subjetivamente, «el doble de fuerte» corresponde a unos +10 dB, que son diez veces la potencia." },
      { q: "¿Qué importa más, la impedancia o la sensibilidad?", a: "La sensibilidad fija el volumen; la impedancia fija lo que el amplificador debe aportar para alcanzarlo. Los auriculares de alta impedancia piden tensión y los de baja, corriente; a igual sensibilidad suenan igual de fuerte con la misma potencia." },
      { q: "¿Necesito un amplificador aparte?", a: "Compara la tensión y la corriente resultantes con lo que da tu fuente. Si escuchar con comodidad exige más de lo que entrega, el sonido saldrá flojo o distorsionado: entonces un amplificador ayuda, y si no, no." },
      { q: "¿Por qué dB/mW y dB/V son distintos?", a: "Son dos maneras de expresar la misma propiedad. La conversión depende de la impedancia: unos 15 dB a 32 Ω y unos 5 dB a 300 Ω. Sustituir una por otra te deja a un orden de magnitud en potencia." },
    ],
  },
  "inverter-power": {
    longDescription: "Divide la salida útil entre el rendimiento para dar lo que el inversor toma de verdad de la batería, y convierte esa cifra en corriente a la tensión de la batería. Un rendimiento por encima del cien por cien se rechaza en vez de aceptarse como una errata: rompería la conservación de la energía y produciría una cifra que no puede existir.",
    howToUse: [
      "Introduce la potencia de salida útil.",
      "Introduce el rendimiento del inversor según su hoja de datos.",
      "Introduce la tensión de la batería.",
    ],
    howItWorks: "Potencia de entrada = salida ÷ rendimiento; corriente = potencia de entrada ÷ tensión de la batería; las pérdidas son la diferencia.",
    example: "1000 W con un rendimiento del 85 por ciento consumen 1176,5 W, que son 98,04 A de una batería de 12 V.",
    faq: [
      { q: "¿Por qué se rechaza un rendimiento por encima del 100 por cien?", a: "Significaría que el inversor produce más energía de la que consume. Eso no es una cuestión de redondeo, sino una cifra imposible, así que se rechaza en vez de calcularse." },
      { q: "¿Incluye el pico de arranque?", a: "No. Los motores y los compresores consumen varias veces su potencia nominal durante un instante, y ese pico queda fuera de este cálculo." },
      { q: "¿Dónde encuentro el rendimiento?", a: "En la hoja de datos del inversor. Suele variar con la carga, así que conviene introducir el valor correspondiente a tu carga habitual." },
      { q: "¿Se tiene en cuenta la química de la batería?", a: "No. El cálculo es puramente eléctrico; cómo se comporta la batería con esa corriente es otra cuestión." },
    ],
  },
  "kva-kw": {
    longDescription: "Convierte kilovoltamperios en kilovatios y al revés a través del factor de potencia. Tres magnitudes se llaman en el habla corriente «potencia» y no son lo mismo: los generadores y los SAI se etiquetan en kVA, que es un límite de corriente, mientras que la carga consume potencia activa en kW, y solo esa se convierte en calor y trabajo. La diferencia se va en potencia reactiva, que va y viene entre la red y la carga sin hacer nada, pero ocupa igualmente corriente y sección de cable. De ahí el error habitual: un generador «de 5 kVA» entrega solo 4 kW con un factor de potencia de 0,8.",
    howToUse: [
      "Elige qué conoces: los kVA nominales o el consumo en kW.",
      "Introduce el dato conocido: el otro pasa a ser de solo lectura.",
      "Fija el factor de potencia: 0,8 para una carga doméstica mixta y más cerca de 1 para las puramente resistivas.",
      "Contrasta la componente reactiva con el margen de tu cable y tu magnetotérmico.",
    ],
    howItWorks: "Activa = aparente × factor de potencia; reactiva = √(aparente² − activa²).",
    example: "Una carga de 10 kW necesita una fuente de 12,5 kVA con un factor de potencia de 0,8: 7,5 kvar de potencia reactiva.",
    faq: [
      { q: "¿Un generador de 5 kVA da 5 kW?", a: "No. Con un factor de potencia de 0,8 entrega 4 kW; el resto se lo lleva la componente reactiva. Los kilovoltamperios son un límite de corriente y los kilovatios, lo que llega a la carga." },
      { q: "¿Qué factor de potencia supongo si no lo conozco?", a: "Para una mezcla de cargas domésticas, 0,8 es la cifra habitual. Los calefactores, las bombillas incandescentes y las resistencias son casi puramente resistivos, con un factor cercano a uno; los motores y los transformadores están bastante por debajo." },
      { q: "¿Qué hace en realidad la potencia reactiva?", a: "Se bombea entre la red y la carga dos veces por ciclo y no hace ningún trabajo neto. La corriente que consume sí es del todo real, y por eso el cable y el magnetotérmico se dimensionan por la potencia aparente y no por la activa." },
      { q: "¿Por qué se rechaza un factor de potencia de cero?", a: "Porque con cero la carga no consume nada de potencia activa y la conversión pierde sentido: no hay entre qué dividir. Por definición el factor está por encima de cero y como mucho vale uno." },
    ],
  },
  "lc-resonance": {
    longDescription: "En la fórmula solo entra el producto de inductancia por capacidad, así que 100 µH con 100 nF y 10 µH con 1000 nF resuenan a la misma frecuencia. Lo que distingue a esas parejas es la impedancia característica √(L/C): fija la corriente que circulará por el lazo y la tensión que se acumulará en él, y de ahí que tenga fila propia. Las unidades son las impresas en los componentes: microhenrios y nanofaradios, no henrios y faradios.",
    howToUse: [
      "Inductancia en microhenrios y capacidad en nanofaradios, tal como se marcan los componentes.",
      "Convierte los picofaradios a nanofaradios dividiendo entre 1000: 470 pF son 0,47 nF.",
      "Solo el producto L·C mueve la frecuencia: cuadruplica uno y reduce el otro a la cuarta parte y se queda igual.",
      "La impedancia característica indica qué corriente moverá una tensión dada en el circuito.",
    ],
    howItWorks: "f = 1 / (2π√(L · C)), la fórmula de Thomson; impedancia característica √(L/C).",
    example: "100 µH con 100 nF dan 50,329 kHz con una impedancia característica de 31,623 Ω.",
    faq: [
      { q: "¿Por qué parejas distintas dan una misma frecuencia?", a: "Porque la fórmula toma el producto L·C y no los valores en sí. Las parejas 100 µH + 100 nF y 10 µH + 1000 nF comparten producto, así que la frecuencia coincide; lo que cambia es la impedancia característica." },
      { q: "¿Para qué sirve la impedancia característica?", a: "Relaciona la corriente con la tensión en el circuito. Una impedancia baja significa corrientes grandes con tensiones pequeñas, lo que va bien para etapas de potencia; una alta es lo contrario, y va bien para circuitos de recepción." },
      { q: "¿Se tiene en cuenta la resistencia del hilo?", a: "No, este es un circuito ideal. Las pérdidas reales bajan el factor Q y desplazan la frecuencia ligeramente hacia abajo, pero en trabajos de sintonía eso suele despreciarse." },
      { q: "¿Un circuito serie se diferencia de uno paralelo?", a: "Su frecuencia de resonancia es la misma. Lo que cambia es el comportamiento: en resonancia un circuito serie presenta impedancia mínima y uno paralelo, máxima." },
    ],
  },
  "led-resistor": {
    longDescription: "Calcula la resistencia en serie que absorbe la diferencia entre tu alimentación y la tensión directa del LED, y muestra después cuánta potencia disipan la resistencia y el LED. La tensión directa se comprueba frente a la de alimentación antes de calcular nada, porque una resistencia no puede absorber una diferencia que no existe.",
    howToUse: [
      "Introduce la tensión de alimentación de tu circuito.",
      "Introduce la tensión directa del LED según su hoja de datos.",
      "Introduce la corriente directa en miliamperios o en amperios.",
    ],
    howItWorks: "R = (tensión de alimentación − tensión directa) ÷ corriente; la resistencia disipa esa caída de tensión por la misma corriente.",
    example: "Un LED de 2 V a 20 mA con una alimentación de 5 V necesita (5 − 2) ÷ 0,02 = 150 ohmios.",
    faq: [
      { q: "¿Por qué la tensión directa debe ser menor que la de alimentación?", a: "La resistencia existe para absorber la diferencia. Sin diferencia no hay nada que absorber ni punto de trabajo que fijar." },
      { q: "¿Qué resistencia debo comprar en realidad?", a: "La siguiente de la serie normalizada igual o superior a la calculada, y comprueba su potencia nominal frente a la cifra que se muestra aquí." },
      { q: "¿Importa la unidad de corriente?", a: "Solo para introducirla. Los miliamperios y los amperios dan la misma respuesta una vez convertidos, y la calculadora convierte por ti." },
      { q: "¿La potencia del LED es la misma que la de la resistencia?", a: "No. Ambos llevan la misma corriente, pero cada uno disipa su propia tensión por esa corriente, así que las dos cifras son distintas." },
    ],
  },
  "ne555-timer-astable": {
    longDescription: "El NE555 en modo astable es el chip más resistente de la electrónica aficionada: intermitentes, osciladores, PWM. El condensador se carga a través de ambas resistencias pero se descarga solo por la segunda, así que el tiempo en alto siempre es mayor que el tiempo en bajo y el ciclo de trabajo del circuito clásico nunca baja del cincuenta por ciento. Eso es una propiedad del circuito y no un límite del cálculo, y saberlo importa más que la propia frecuencia.",
    howToUse: [
      "R1 va entre la alimentación y la patilla 7, R2 entre las patillas 7 y 6, y el condensador va de la patilla 6 a masa.",
      "Un ciclo de trabajo por debajo del cincuenta por ciento es imposible en el circuito clásico: hace falta un diodo de descarga en paralelo con R2.",
      "Para bajar la frecuencia, aumenta el condensador: las resistencias por encima de un megaohmio hacen el circuito sensible a las fugas.",
      "La frecuencia real se apartará de la calculada según la tolerancia de los componentes: los electrolíticos llegan al veinte por ciento.",
    ],
    howItWorks: "Tiempo en alto ln2·(R1+R2)·C, tiempo en bajo ln2·R2·C; la frecuencia es la inversa de su suma y el ciclo de trabajo, la proporción en alto.",
    example: "R1 de 10 kΩ, R2 de 47 kΩ y 100 nF dan 136 Hz con un ciclo de trabajo de alrededor del 55 por ciento.",
    faq: [
      { q: "¿Por qué el ciclo de trabajo nunca baja del cincuenta por ciento?", a: "Porque el condensador se carga a través de R1 y R2 pero se descarga solo por R2. El tiempo de carga siempre es mayor, y el cincuenta por ciento exacto solo se alcanza en el límite en que R1 es mucho menor que R2." },
      { q: "¿Cómo consigo un ciclo de trabajo por debajo de la mitad?", a: "Pon un diodo en paralelo con R2 con el cátodo hacia la patilla 7: la carga esquiva entonces R2 y pasa solo por R1. El circuito deja de ser el clásico y esta fórmula ya no lo describe." },
      { q: "¿Por qué aparece ln2 en la fórmula?", a: "Los umbrales del NE555 son un tercio y dos tercios de la alimentación. La carga exponencial tarda exactamente RC·ln2 en recorrer ese tramo, y la tensión de alimentación se cancela: la frecuencia no depende de ella." },
      { q: "¿Por qué la frecuencia real es distinta?", a: "Por la tolerancia de los componentes. Las resistencias suelen estar dentro del 1 al 5 por ciento, pero los condensadores electrolíticos llegan al 20, y el condensador es lo que suele marcar el error." },
    ],
  },
  "rc-filter": {
    longDescription: "Calcula la frecuencia de corte y la constante de tiempo de una etapa RC de primer orden. El mismo circuito es a la vez un filtro y un retardo: se lee como la frecuencia a la que la señal cae 3 dB y como el tiempo que tarda el condensador en cargarse al 63 % de la alimentación. Ambas cosas se apoyan en el único producto R·C, así que se calculan juntas y se mueven juntas: 10 kΩ con 100 nF y 1 kΩ con 1000 nF dan exactamente la misma respuesta. La caída pasado el corte es de 20 dB por década; los filtros de dos polos y los activos, con su factor Q, quedan fuera de lo que describe esta fórmula.",
    howToUse: [
      "Introduce la resistencia en ohmios: 10 kΩ son 10000.",
      "Introduce la capacidad en nanofaradios tal como viene marcada: 0,1 µF son 100 nF.",
      "La frecuencia de corte es aquella en la que la señal ya ha caído 3 dB.",
      "La constante de tiempo importa cuando el circuito se usa como retardo y no como filtro.",
    ],
    howItWorks: "τ = R · C, corte = 1 / (2π · τ). La capacidad se convierte de nanofaradios a faradios.",
    example: "10 kΩ con 100 nF dan un corte en 159,15 Hz y una constante de tiempo de 1 ms.",
    faq: [
      { q: "¿Por qué parejas distintas de R y C dan la misma frecuencia?", a: "Porque en la fórmula solo entra el producto R·C. 10 kΩ con 100 nF y 1 kΩ con 1000 nF son el mismo producto, y de ahí la misma frecuencia de corte y la misma constante de tiempo." },
      { q: "¿En qué se diferencia el corte del borde de la banda pasante?", a: "El corte no es un muro. Allí la señal ya ha caído 3 dB —la mitad de la potencia— y sigue cayendo otros 20 dB por década. La banda pasante termina de forma gradual." },
      { q: "¿Qué indica el tiempo de establecimiento?", a: "En una constante de tiempo el condensador alcanza el 63 % de la tensión; en cinco alcanza cerca del 99 %. Cinco τ es la cifra que se toma como tiempo práctico de establecimiento." },
      { q: "¿Vale para un filtro de segundo orden?", a: "No. La fórmula describe una sola etapa RC con caída de 20 dB por década. Los filtros de dos polos y los activos introducen un factor Q que un circuito RC simple no tiene en absoluto." },
    ],
  },
  "resistor-color": {
    longDescription: "Lee el valor de una resistencia en su cuerpo: las dos primeras bandas son cifras, la tercera es el multiplicador y la cuarta, la tolerancia. Además del valor en sí, la página muestra el margen en el que debe caer una resistencia real: el marcado promete una banda, no un número exacto, y con un ±10 % una resistencia medida una décima parte por encima o por debajo del nominal es normal y no defectuosa. Las bandas multiplicadoras plateada y dorada dan fracciones de ohmio; esos componentes suelen usarse como resistencias de medida de corriente.",
    howToUse: [
      "Gira la resistencia de modo que la banda suelta de tolerancia quede a la derecha.",
      "Elige los colores de las dos primeras bandas: son las cifras.",
      "Elige el color de la tercera banda: el multiplicador.",
      "Elige el color de la cuarta banda: la tolerancia.",
    ],
    howItWorks: "Valor = (primera cifra × 10 + segunda cifra) × 10 elevado al multiplicador. Los límites de tolerancia son el valor multiplicado por 1 ± tolerancia ÷ 100.",
    example: "Amarillo, violeta, rojo y dorado dan 4,7 kΩ ±5 %, es decir, de 4,465 a 4,935 kΩ.",
    faq: [
      { q: "¿Por qué extremo se lee?", a: "Por el lado en el que las bandas van juntas sin hueco. La banda de tolerancia queda algo separada y casi siempre es dorada o plateada: mantenla a la derecha." },
      { q: "¿Por qué la resistencia medida difiere del nominal?", a: "Porque el marcado promete un margen, no un número exacto. Con un ±5 % una resistencia de 4,7 kΩ mide legítimamente entre 4,465 y 4,935 kΩ." },
      { q: "¿Qué significan las bandas multiplicadoras plateada y dorada?", a: "Multiplicadores de 0,01 y 0,1 respectivamente. Esas resistencias son fracciones de ohmio y suelen servir como resistencias de medida de corriente." },
      { q: "¿Y las de cinco bandas?", a: "Una resistencia de cinco bandas tiene tres cifras en lugar de dos, y el multiplicador y la tolerancia se desplazan una posición. Esta página descodifica el marcado de cuatro bandas, que es el habitual." },
    ],
  },
  "resistor-network": {
    longDescription: "Calcula la resistencia de un circuito formado por varias resistencias en las dos formas de conectarlas. En serie las resistencias se suman; en paralelo se suman las inversas. Los valores menor y mayor aparecen junto al total por un motivo: un circuito en paralelo sale siempre por debajo de su resistencia más pequeña y uno en serie, por encima de la mayor, así que esas dos filas permiten comprobar la respuesta sin rehacer la aritmética. Una resistencia de cero ohmios se rechaza: en un circuito en paralelo lo cortocircuitaría, y la fórmula devolvería cero en lugar de un aviso.",
    howToUse: [
      "Introduce los valores de las resistencias en ohmios.",
      "Sepáralos con espacios, punto y coma o saltos de línea.",
      "Elige cómo están conectadas.",
      "Para kiloohmios y megaohmios introduce 4700 y 1000000.",
    ],
    howItWorks: "En serie R = R₁ + R₂ + … En paralelo 1/R = 1/R₁ + 1/R₂ + … De ahí la comprobación: un circuito en paralelo siempre es menor que su valor más pequeño y uno en serie, mayor que el más grande.",
    example: "Tres resistencias de 100, 220 y 330 ohmios en serie suman 650 ohmios.",
    faq: [
      { q: "¿En qué unidades van los valores?", a: "En ohmios. Convierte antes los kiloohmios y megaohmios: 4,7 kΩ son 4700 y 1 MΩ son 1000000. Mezclar unidades en una misma lista no funciona." },
      { q: "¿Por qué un circuito en paralelo es menor que su resistencia más pequeña?", a: "Porque cada resistencia añadida es otro camino para la corriente. Cuantos más caminos hay, más fácil circula la corriente, así que el total cae por debajo de cualquiera de ellas." },
      { q: "¿Cómo trato un circuito mixto?", a: "Por etapas. Reduce primero los grupos en paralelo, anota los valores obtenidos y súmalos después en serie: una red de cualquier complejidad se desarma con pasos así." },
      { q: "¿Por qué se rechaza una resistencia de cero?", a: "Una resistencia de cero ohmios en un circuito en paralelo es un cortocircuito, y la fórmula devolvería cero con toda honestidad. Un cero verosímil en pantalla es peor que detener el cálculo." },
      { q: "¿Las resistencias en paralelo tienen que ser iguales?", a: "No, pero las iguales tienen una propiedad cómoda: n resistencias iguales en paralelo dan exactamente R/n. Dos de 470 ohmios dan 235 ohmios." },
    ],
  },
  "rms-voltage": {
    longDescription: "Un multímetro en tensión alterna muestra el valor eficaz, un osciloscopio muestra el pico a pico y la hoja de datos da la amplitud: tres cifras distintas para una misma señal. El factor de cresta las relaciona, y depende solo de la forma de onda: √2 para una senoidal, uno para una cuadrada y √3 para una triangular. El valor medio absoluto se imprime aparte: los multímetros baratos miden eso y lo multiplican por el factor de forma de la senoide, y por eso se equivocan con cualquier señal no senoidal.",
    howToUse: [
      "Elige cuál de los tres valores conoces e introdúcelo: los otros dos salen al momento.",
      "La forma de onda es obligatoria: el mismo valor eficaz sale de amplitudes distintas en una senoidal y en una cuadrada.",
      "Un osciloscopio suele leer pico a pico, así que elige ese modo cuando trabajes con la pantalla.",
      "La fila del «valor medio absoluto» indica cuánto se desviará un multímetro sin verdadero valor eficaz.",
    ],
    howItWorks: "Factor de cresta según la forma: √2 senoidal, 1 cuadrada, √3 triangular; eficaz = pico ÷ factor de cresta, pico a pico = 2 × pico.",
    example: "Una amplitud senoidal de 311 V da una tensión eficaz de 219,91 V: una red doméstica corriente.",
    faq: [
      { q: "¿Por qué la red son 220 V pero la amplitud 311 V?", a: "220 voltios son el valor eficaz: la tensión continua que desprendería el mismo calor en la misma resistencia. Una amplitud senoidal es √2 veces mayor, unos 311 voltios, y el aislamiento se dimensiona para esa cifra." },
      { q: "¿Por qué importa la forma de onda?", a: "El factor de cresta depende solo de la forma. Una onda cuadrada tiene un valor eficaz igual a su amplitud, una senoidal es 1,414 veces menor y una triangular, 1,732. Sin la forma la pregunta ni siquiera está planteada." },
      { q: "¿Qué mide en realidad un multímetro barato?", a: "Mide el valor medio absoluto y lo multiplica por el factor de forma de la senoide. Eso es correcto en una senoidal, pero se desvía decenas de por ciento en una onda cuadrada o en una señal PWM, y por eso los instrumentos anuncian True RMS." },
      { q: "¿Qué es el pico a pico?", a: "Es la distancia del pico inferior al superior, el doble de la amplitud. Los osciloscopios muestran exactamente eso, y confundirlo con la amplitud es el error más común al leer la pantalla." },
    ],
  },
  "single-phase": {
    longDescription: "Un circuito monofásico tiene tres potencias, y confundirlas es lo que quema el cable. La potencia activa en vatios es la parte que hace trabajo y la que factura el contador. La potencia aparente en voltamperios es el producto de tensión por corriente, y es la que el cableado y el magnetotérmico tienen que soportar de verdad. La potencia reactiva en var es la diferencia entre ambas: energía que va a la carga y vuelve sin hacer nada útil. Un motor con un factor de potencia de 0,7 consume bastante más corriente de lo que sugiere su vataje, y ese es justo el caso en que dimensionar solo por vatios sale mal.",
    howToUse: [
      "Elige si conoces la corriente o la potencia activa.",
      "Introduce la tensión de alimentación.",
      "Introduce la corriente, o la potencia nominal si estás dimensionando el circuito.",
      "Introduce el factor de potencia: las cargas resistivas son 1 y los motores suelen estar entre 0,7 y 0,9.",
    ],
    howItWorks: "Potencia activa P = U × I × cos φ, potencia aparente S = U × I, y la potencia reactiva Q es la raíz cuadrada de S² − P². Hallar la corriente invierte la primera fórmula: I = P ÷ (U × cos φ).",
    example: "A 230 V y 6,5 A con un factor de potencia de 0,95 la potencia activa es de 1420,25 W y la aparente, de 1495 VA.",
    faq: [
      { q: "¿Con qué potencia dimensiono el cable?", a: "Con la potencia aparente, o directamente con la corriente. El cable y los magnetotérmicos los calienta la corriente que circula, no la parte de ella que hace trabajo útil." },
      { q: "¿Qué factor de potencia uso si no está en la etiqueta?", a: "Los calefactores, los hervidores y las bombillas incandescentes son prácticamente 1. Los motores, las bombas y los compresores suelen estar entre 0,7 y 0,9, y las fuentes conmutadas varían mucho: conviene mirar la placa." },
      { q: "¿Por qué el factor de potencia no puede superar a uno?", a: "Es la relación entre la potencia activa y la aparente, y la activa nunca puede superar a la aparente. Un valor por encima de uno haría del término reactivo la raíz cuadrada de un número negativo." },
      { q: "¿La potencia reactiva aparece en una factura doméstica?", a: "Los contadores domésticos suelen facturar solo la energía activa. Las tarifas industriales cobran a menudo la potencia reactiva o un factor de potencia pobre, y por eso allí las baterías de condensadores se amortizan." },
    ],
  },
  "transformer-ratio": {
    longDescription: "La palabra ideal es una condición, no un adorno: se supone que la potencia se conserva por completo, así que el factor que sube la tensión baja la corriente en la misma proporción. Un transformador real se calienta y la tensión de su secundario cae bajo carga; cuánto depende del núcleo, del hilo y del régimen, y el cálculo no puede saberlo. La diferencia con la potencia monofásica importa: aquella relaciona la tensión, la corriente y el factor de potencia de un devanado, mientras que aquí se relacionan dos devanados a través de la relación de espiras.",
    howToUse: [
      "Elige qué conoces: las espiras de ambos devanados o la tensión de secundario que necesitas.",
      "La tensión y la corriente del primario se introducen en ambos modos: dan la potencia.",
      "Una relación menor que uno significa un transformador reductor y mayor que uno, elevador.",
      "Redondea hacia arriba la relación de espiras que obtengas: las espiras fraccionarias no existen.",
    ],
    howItWorks: "U₂ = U₁ · n₂/n₁, y la corriente va al revés: I₂ = I₁ · n₁/n₂. Se supone que la potencia se conserva.",
    example: "Devanados de 500 y 100 espiras reducen 220 V a 44 V, y una corriente de primario de 2 A pasa a 10 A.",
    faq: [
      { q: "¿Por qué sube la corriente cuando baja la tensión?", a: "Porque en un transformador ideal la potencia se conserva: tensión por corriente es la misma a ambos lados. Baja la tensión cinco veces y pones cinco veces la corriente a disposición." },
      { q: "¿Cuánto se aleja esto de un transformador real?", a: "Uno real tiene pérdidas en el cobre y en el hierro, así que la tensión del secundario cae bajo carga y la potencia de salida queda por debajo de la de entrada. En transformadores pequeños la diferencia llega a un diez por ciento." },
      { q: "¿Las espiras pueden salir fraccionarias?", a: "No. El cálculo da una relación exacta, pero el bobinado se hace con espiras enteras, así que el resultado se redondea, normalmente hacia arriba para que la tensión no se quede corta." },
      { q: "¿Vale para un autotransformador?", a: "La relación de espiras funciona igual, pero un autotransformador no aísla galvánicamente los devanados, y allí las cuestiones de seguridad son completamente distintas." },
    ],
  },
  "voltage-divider": {
    longDescription: "Calcula un divisor de tensión de dos resistencias: la tensión de salida, la corriente que lo atraviesa y la potencia que disipa cada rama. La proporción depende solo de la relación entre las ramas y no de sus valores: 10 kΩ con 4,7 kΩ divide exactamente igual que 100 kΩ con 47 kΩ. Los valores deciden otra cosa: la corriente y, con ella, el calentamiento y cuánto cae la salida. La fórmula vale para un divisor sin carga: conecta a la rama inferior algo de resistencia comparable y pasa a ser una tercera resistencia, que arrastra la salida por debajo de la cifra calculada.",
    howToUse: [
      "Introduce la tensión de entrada y ambos valores de resistencia en ohmios.",
      "La rama superior va de la fuente a la toma y la inferior, de la toma a masa.",
      "Compara la potencia de cada rama con la nominal de las resistencias: las corrientes aguantan 0,25 W.",
      "Si cuelga una carga de la salida, su resistencia debe ser mucho mayor que la de la rama inferior.",
    ],
    howItWorks: "Salida = entrada × R2 / (R1 + R2); corriente = entrada / (R1 + R2); potencia de una rama = corriente² × su resistencia.",
    example: "12 V sobre 10 kΩ y 4,7 kΩ dan 3,84 V con 0,82 mA.",
    faq: [
      { q: "¿Puede un divisor alimentar una carga?", a: "No si la resistencia de la carga es comparable a la de la rama inferior. Queda en paralelo con esa rama y se convierte en una tercera resistencia: la salida cae por debajo de la cifra calculada, tanto más cuanta más corriente consuma la carga." },
      { q: "¿Qué valores de resistencia elijo para una relación dada?", a: "La relación depende solo de la proporción, así que sirve cualquier pareja con esa proporción. Los valores pequeños consumen más corriente y se calientan más; los grandes reaccionan más a la carga y captan ruido. Los kiloohmios son el compromiso habitual." },
      { q: "¿Por qué la potencia se calcula con la corriente y no con la tensión?", a: "Ambas formas son equivalentes, pero la corriente la comparten las dos ramas, lo que la convierte en el camino más corto: cada rama disipa la corriente al cuadrado por su propia resistencia." },
      { q: "¿Vale en corriente alterna?", a: "En un divisor puramente resistivo sí, leyendo la tensión como eficaz. Añade capacidad o inductancia y aparece una dependencia con la frecuencia que aquí no se modela." },
    ],
  },
  "voltage-drop": {
    longDescription: "Pone precio a la pérdida que cuesta una línea larga. La ley de Ohm sola no basta: la resistencia hay que sacarla de la geometría del conductor y de la resistividad de su metal, que es lo que añade esta calculadora. El multiplicador cambia según la alimentación: en un circuito monofásico la corriente va y vuelve por dos conductores, así que el trayecto cuenta dos veces; en una carga trifásica equilibrada no hay conductor de retorno y el factor es la raíz cuadrada de tres. Confundirlos es una forma segura de equivocarse en la mitad otra vez.",
    howToUse: [
      "Introduce la corriente que la línea lleva de verdad.",
      "Introduce la longitud de ida del trayecto, no la de ida y vuelta.",
      "Introduce la sección del conductor en milímetros cuadrados.",
      "Elige el metal y el tipo de alimentación.",
    ],
    howItWorks: "La resistencia es la resistividad por la longitud dividida entre la sección. La caída es esa resistencia por la corriente, multiplicada por dos en monofásica o por la raíz cuadrada de tres en trifásica.",
    example: "16 A a lo largo de 20 m de cobre de 2,5 mm² con alimentación monofásica de 230 V dan una caída de 4,48 V, es decir, un 1,95 %.",
    faq: [
      { q: "¿La longitud es de ida o de ida y vuelta?", a: "De ida. La duplicación por el conductor de retorno ya está en el factor monofásico; introducir el trayecto completo la duplicaría dos veces." },
      { q: "¿Qué caída es admisible?", a: "La práctica habitual es mantenerse dentro del 3 % en alumbrado y del 5 % en el resto de cargas, pero la cifra vinculante es la que diga tu reglamento local. Esta calculadora te da el número, no el veredicto." },
      { q: "¿Por qué la trifásica no es simplemente el doble?", a: "Porque en una carga trifásica equilibrada las corrientes de retorno se cancelan en el neutro. La caída entre fases sale como la raíz cuadrada de tres por la caída de un conductor." },
      { q: "¿Influye la temperatura?", a: "Sí. La resistividad de aquí es a 20 °C; un conductor que trabaja caliente resiste más, así que la caída real es algo mayor. Toma la respuesta como el extremo optimista." },
      { q: "¿Sirve para elegir la sección de un cable?", a: "Con ella puedes comparar secciones, pero elegir un cable exige además la intensidad admisible para tu método de instalación, que es una tabla normativa que esta calculadora no incorpora a propósito." },
    ],
  },
};
