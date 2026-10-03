// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Адрес сети, маска, широковещательный адрес и число узлов по записи CIDR.",
    "seoDescription": "Рассчитайте адрес сети, маску подсети, широковещательный адрес, диапазон узлов и их количество по адресу IPv4 и длине префикса.",
    "longDescription": "Раскладывает сеть IPv4 по адресу и длине префикса. Вся арифметика битовая: адрес — 32-разрядное число, маска — префикс единиц слева, адрес сети — их поразрядное И. Именно поэтому граница подсети может лежать внутри октета: у префикса /20 маска равна 255.255.240.0, и такую сеть не посчитать в уме. Три случая разведены отдельно, потому что привычная формула «два в степени минус два» для них неверна: /32 задаёт единственный адрес узла, /31 — два адреса линка точка-точка без широковещательного, и только начиная с /30 вычитаются адрес сети и широковещательный.",
    "howToUse": [
      "Введите любой адрес из нужной сети — не обязательно адрес самой сети.",
      "Укажите длину префикса: число после косой черты в записи CIDR.",
      "Смотрите первый и последний узел — это диапазон для раздачи адресов.",
      "Обратная маска пригодится для списков доступа на оборудовании Cisco."
    ],
    "howItWorks": "Четыре десятичных октета 0–255 образуют 32-битный адрес. Целый префикс p от 0 до 32 задаёт p старших единиц маски; сеть получается побитовым И. Для p≤30 число адресов без двух крайних = 2^(32−p)−2. В /31 показаны два адреса по модели линии точка-точка RFC3021 без отдельного directed broadcast; /32 — один адрес. Это границы CIDR, а не проверка разрешения назначать адрес устройству.",
    "example": "Адрес 192.168.1.10 с префиксом /24 принадлежит сети 192.168.1.0 с маской 255.255.255.0 и 254 узлами.",
    "faq": [
      {
        "q": "Обязательно ли вводить адрес самой сети?",
        "a": "Нет, подойдёт любой адрес из неё. Калькулятор сам отбросит младшие разряды по маске и найдёт адрес сети."
      },
      {
        "q": "Почему у /20 маска 255.255.240.0?",
        "a": "Потому что граница подсети не обязана совпадать с границей октета. Двадцать единиц маски заканчиваются в середине третьего октета, что и даёт 240."
      },
      {
        "q": "Сколько узлов в сети /31?",
        "a": "Два, и оба доступны. Это линк точка-точка по RFC 3021: адрес сети и широковещательный в нём не выделяются."
      },
      {
        "q": "А в сети /32?",
        "a": "Один-единственный адрес. Такой префикс задаёт конкретный узел, например для маршрута к одному серверу."
      },
      {
        "q": "Поддерживается ли IPv6?",
        "a": "Нет, только IPv4. Адресация IPv6 устроена иначе, и смешивать их в одном расчёте значило бы путать две разные модели."
      }
    ],
    "disclaimer": "Только арифметика IPv4/CIDR. Не проверяет специальные диапазоны, маршрутизацию, DHCP или наличие узла. /31 относится к поддерживаемой линии точка-точка; limited broadcast 255.255.255.255 этим не отменяется."
  },
  "en": {
    "shortDescription": "Network address, mask, broadcast address and host count from CIDR notation.",
    "seoDescription": "Calculate the network address, subnet mask, broadcast address, host range and host count from an IPv4 address and prefix length.",
    "longDescription": "Breaks an IPv4 network down from an address and a prefix length. All the arithmetic is bitwise: the address is a 32-bit number, the mask is a run of ones on the left, and the network address is their bitwise AND. That is exactly why a subnet boundary can fall inside an octet: a /20 prefix gives a mask of 255.255.240.0, which is not a network you work out in your head. Three cases are handled separately because the familiar «two to the power minus two» is wrong for them: /32 is a single host address, /31 is a two-address point-to-point link with no broadcast, and only from /30 down are the network and broadcast addresses subtracted.",
    "howToUse": [
      "Enter any address from the network — it need not be the network address itself.",
      "Enter the prefix length: the number after the slash in CIDR notation.",
      "Read the first and last host — that is the range available for assignment.",
      "The wildcard mask is handy for access lists on Cisco equipment."
    ],
    "howItWorks": "Four decimal octets from 0 to 255 form a 32-bit address. Integer prefix p from 0 to 32 supplies p leading mask bits; bitwise AND gives the network. For p≤30, the count excluding the two endpoints is 2^(32−p)−2. /31 shows two addresses under RFC3021 point-to-point semantics without a separate directed broadcast; /32 shows one address. These are CIDR boundaries, not permission to assign an address.",
    "example": "Address 192.168.1.10 with a /24 prefix belongs to 192.168.1.0 with mask 255.255.255.0 and 254 hosts.",
    "faq": [
      {
        "q": "Must I enter the network address itself?",
        "a": "No, any address from the network works. The calculator drops the low bits according to the mask and finds the network address itself."
      },
      {
        "q": "Why does /20 give 255.255.240.0?",
        "a": "Because a subnet boundary need not align with an octet boundary. Twenty mask bits end halfway through the third octet, which yields 240."
      },
      {
        "q": "How many hosts are in a /31?",
        "a": "Two, and both are usable. It is a point-to-point link under RFC 3021: no network or broadcast address is set aside."
      },
      {
        "q": "And in a /32?",
        "a": "A single address. That prefix designates one specific host, for example a route to a single server."
      },
      {
        "q": "Is IPv6 supported?",
        "a": "No, IPv4 only. IPv6 addressing works differently, and mixing them in one calculation would conflate two different models."
      }
    ],
    "disclaimer": "IPv4/CIDR arithmetic only. Special-use blocks, routing, DHCP and host presence are not checked. /31 semantics require a supported point-to-point link; limited broadcast 255.255.255.255 is not removed."
  },
  "uk": {
    "shortDescription": "Адреса мережі, маска, широкомовна адреса та кількість вузлів за записом CIDR.",
    "seoDescription": "Розрахуйте адресу мережі, маску підмережі, широкомовну адресу, діапазон вузлів та їхню кількість за адресою IPv4 і довжиною префікса.",
    "longDescription": "Підмережа визначається префіксом — кількістю старших одиниць маски. Розрахунок знаходить межі CIDR, маску й діапазон для введеної IPv4-адреси. Для /30 і коротших префіксів два краї віднімаються; /31 має окрему модель лінії точка-точка, а /32 означає одну адресу. Це не перевірка доступності або права призначення адрес.",
    "howToUse": [
      "Введіть IP-адресу.",
      "Введіть префікс від 0 до 32.",
      "Прочитайте адресу мережі, маску, діапазон і кількість вузлів."
    ],
    "howItWorks": "Чотири десяткові октети 0–255 утворюють 32-бітну адресу. Цілий префікс p від 0 до 32 задає p старших одиниць маски; мережа знаходиться побітовим І. За p≤30 кількість без двох крайніх адрес = 2^(32−p)−2. Для /31 показано дві адреси за моделлю лінії точка-точка RFC3021 без окремого directed broadcast; /32 — одна адреса. Це межі CIDR, а не перевірка дозволу призначати адресу.",
    "example": "Адреса 192.168.1.10 з префіксом /24 належить мережі 192.168.1.0 з маскою 255.255.255.0 і 254 вузлами.",
    "faq": [
      {
        "q": "Чому вузлів на два менше?",
        "a": "Для /30 і коротших префіксів ця модель віднімає адресу мережі й directed broadcast: у /24 виходить 254. Для /31 на лінії точка-точка за RFC3021 використовуються дві адреси, а /32 описує одну. Зарезервовані блоки та правила призначення перевіряються окремо."
      },
      {
        "q": "Що означає префікс /24?",
        "a": "Що перші 24 біти адреси — це номер мережі, а решта 8 — номер вузла. Маска при цьому дорівнює 255.255.255.0."
      },
      {
        "q": "Скільки адрес у /30?",
        "a": "Чотири, з яких дві придатні. Такі підмережі використовують для з’єднань точка-точка між маршрутизаторами — більше там і не потрібно."
      },
      {
        "q": "Що таке приватні діапазони?",
        "a": "10.0.0.0/8, 172.16.0.0/12 і 192.168.0.0/16. Вони не маршрутизуються в інтернеті й призначені для внутрішніх мереж — саме тому домашні роутери й роздають 192.168.x.x."
      }
    ],
    "disclaimer": "Лише арифметика IPv4/CIDR. Спеціальні діапазони, маршрутизація, DHCP і наявність вузла не перевіряються. /31 стосується підтримуваної лінії точка-точка; limited broadcast 255.255.255.255 не скасовується."
  },
  "de": {
    "shortDescription": "Netzadresse, Maske, Broadcast-Adresse und Zahl der Hosts aus der CIDR-Schreibweise.",
    "seoDescription": "Berechne Netzadresse, Subnetzmaske, Broadcast-Adresse, Hostbereich und Hostzahl aus einer IPv4-Adresse und der Präfixlänge.",
    "longDescription": "Zerlegt ein IPv4-Netz aus einer Adresse und einer Präfixlänge. Die ganze Rechnerei ist bitweise: die Adresse ist eine 32-Bit-Zahl, die Maske eine Folge von Einsen von links, und die Netzadresse ist ihr bitweises UND. Genau deshalb kann eine Subnetzgrenze mitten in ein Oktett fallen: ein Präfix /20 ergibt die Maske 255.255.240.0, und die rechnet man nicht im Kopf aus. Drei Fälle werden gesondert behandelt, weil das vertraute „zwei hoch minus zwei“ für sie falsch ist: /32 ist eine einzelne Hostadresse, /31 eine Punkt-zu-Punkt-Strecke mit zwei Adressen und ohne Broadcast, und erst ab /30 abwärts werden Netz- und Broadcast-Adresse abgezogen.",
    "howToUse": [
      "Trage eine beliebige Adresse aus dem Netz ein — es muss nicht die Netzadresse selbst sein.",
      "Trage die Präfixlänge ein: die Zahl nach dem Schrägstrich in der CIDR-Schreibweise.",
      "Lies den ersten und den letzten Host ab — das ist der Bereich, der sich vergeben lässt.",
      "Die Wildcard-Maske ist für Zugriffslisten auf Cisco-Geräten praktisch."
    ],
    "howItWorks": "Vier dezimale Oktette von 0 bis 255 bilden eine 32-Bit-Adresse. Das ganzzahlige Präfix p von 0 bis 32 setzt p führende Maskenbits; bitweises UND ergibt das Netz. Für p≤30 ist die Zahl ohne beide Randadressen 2^(32−p)−2. /31 zeigt gemäß RFC3021 zwei Adressen für eine Punkt-zu-Punkt-Verbindung ohne gesonderten gerichteten Broadcast; /32 zeigt eine Adresse. Das sind CIDR-Grenzen, keine Freigabe zur Adresszuweisung.",
    "example": "Die Adresse 192.168.1.10 mit dem Präfix /24 gehört zu 192.168.1.0 mit der Maske 255.255.255.0 und 254 Hosts.",
    "faq": [
      {
        "q": "Muss ich die Netzadresse selbst eintragen?",
        "a": "Nein, jede Adresse aus dem Netz reicht. Der Rechner lässt die unteren Bit gemäß der Maske fallen und findet die Netzadresse selbst."
      },
      {
        "q": "Warum ergibt /20 die Maske 255.255.240.0?",
        "a": "Weil eine Subnetzgrenze nicht auf einer Oktettgrenze liegen muss. Zwanzig Maskenbit enden mitten im dritten Oktett, und das ergibt 240."
      },
      {
        "q": "Wie viele Hosts sind in einem /31?",
        "a": "Zwei, und beide sind nutzbar. Es ist eine Punkt-zu-Punkt-Strecke nach RFC 3021: es wird weder eine Netz- noch eine Broadcast-Adresse zurückgelegt."
      },
      {
        "q": "Und in einem /32?",
        "a": "Eine einzige Adresse. Dieses Präfix bezeichnet genau einen Host, zum Beispiel eine Route zu einem einzelnen Server."
      },
      {
        "q": "Wird IPv6 unterstützt?",
        "a": "Nein, nur IPv4. Die Adressierung in IPv6 arbeitet anders, und beides in einer Rechnung zu vermengen, würde zwei verschiedene Modelle vermischen."
      }
    ],
    "disclaimer": "Nur IPv4/CIDR-Arithmetik. Sonderbereiche, Routing, DHCP und vorhandene Hosts werden nicht geprüft. /31 setzt eine unterstützte Punkt-zu-Punkt-Verbindung voraus; der begrenzte Broadcast 255.255.255.255 entfällt dadurch nicht."
  },
  "es": {
    "shortDescription": "Red, máscara, difusión y rango de hosts a partir de una dirección y un prefijo.",
    "seoDescription": "Calcula la dirección de red, la máscara de subred, la dirección de difusión, el rango de hosts y la máscara comodín a partir de una dirección IPv4 y un prefijo CIDR.",
    "longDescription": "Convierte una dirección IPv4 y un prefijo en todo lo que hace falta para configurar una red: dirección de red, máscara, dirección de difusión, primer y último host, número de hosts utilizables, máscara comodín y la notación CIDR. No hace falta introducir la dirección de red: vale cualquier dirección de la red, porque la calculadora descarta los bits bajos según la máscara. Los casos límite se tratan como corresponde y no como excepciones incómodas: una /31 son dos direcciones y ambas se usan, y una /32 designa un único host.",
    "howToUse": [
      "Introduce cualquier dirección de la red: no hace falta que sea la de red.",
      "Introduce la longitud del prefijo: el número que va tras la barra en notación CIDR.",
      "Lee el primer y el último host: ese es el rango disponible para asignar.",
      "La máscara comodín resulta útil en las listas de acceso de equipos Cisco."
    ],
    "howItWorks": "Cuatro octetos decimales de 0 a 255 forman una dirección de 32 bits. El prefijo entero p, entre 0 y 32, fija los p bits iniciales de la máscara; el AND binario obtiene la red. Para p≤30, el recuento sin los extremos es 2^(32−p)−2. /31 muestra dos direcciones para un enlace punto a punto según RFC3021, sin broadcast dirigido aparte; /32 muestra una dirección. Son límites CIDR, no autorización para asignar una dirección.",
    "example": "La dirección 192.168.1.10 con prefijo /24 pertenece a 192.168.1.0 con máscara 255.255.255.0 y 254 hosts.",
    "faq": [
      {
        "q": "¿Hay que introducir la dirección de red?",
        "a": "No, vale cualquier dirección de la red. La calculadora descarta los bits bajos según la máscara y encuentra por sí sola la dirección de red."
      },
      {
        "q": "¿Por qué una /20 da 255.255.240.0?",
        "a": "Porque el límite de una subred no tiene por qué coincidir con el de un octeto. Veinte bits de máscara terminan a mitad del tercer octeto, y eso da 240."
      },
      {
        "q": "¿Cuántos hosts caben en una /31?",
        "a": "Dos, y los dos se usan. Es un enlace punto a punto según el RFC 3021: no se reserva ni dirección de red ni de difusión."
      },
      {
        "q": "¿Y en una /32?",
        "a": "Una sola dirección. Ese prefijo designa un host concreto, por ejemplo una ruta hacia un único servidor."
      },
      {
        "q": "¿Admite IPv6?",
        "a": "No, solo IPv4. El direccionamiento IPv6 funciona de otra manera, y mezclar ambos en un mismo cálculo confundiría dos modelos distintos."
      }
    ],
    "disclaimer": "Solo aritmética IPv4/CIDR. No comprueba bloques especiales, rutas, DHCP ni presencia de equipos. /31 exige un enlace punto a punto compatible; no elimina el broadcast limitado 255.255.255.255."
  }
};
