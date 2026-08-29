import type { DeDetailedContent } from './types';

export const dePhysics4Content: Partial<Record<string, DeDetailedContent>> = {
  'inclined-plane': {
    longDescription: 'Das Gewicht auf einer Schräge teilt sich in zwei Teile: der eine zieht die Fläche hinab, der andere drückt in sie hinein. Der drückende Teil erzeugt die Reibung, die Steilheit arbeitet also doppelt gegen die Last — sie vergrößert den treibenden Anteil und schwächt zugleich den haltenden. Die resultierende Kraft kann negativ herauskommen: das ist kein Fehler, sondern eine Standfestigkeitsreserve — die Reibung gewinnt, und ihr Betrag zeigt, wie weit die Schräge davon entfernt ist, nachzugeben.',
    howToUse: [
      'Die Reibungszahl hängt vom Werkstoffpaar ab: Stahl auf Stahl rund 0,15, Gummi auf Asphalt rund 0,7, Eis rund 0,03.',
      'Null Grad sind eine ebene Fläche, neunzig eine senkrechte Wand ohne Anpressdruck.',
      'Eine negative resultierende Kraft heißt, dass der Körper liegen bleibt: die Reibung überwiegt die treibende Kraft.',
      'Der Körper gilt als bereits in Bewegung; die Haftreibung kann etwas höher sein als die Gleitreibung.',
    ],
    howItWorks: 'Entlang der Schräge m · g · sin α, quer dazu m · g · cos α, die Reibung μ · N, die Beschleunigung ihre Differenz durch die Masse.',
    example: 'Eine Kiste mit 50 kg rutscht auf einer Schräge von 30° bei einer Reibungszahl von 0,2 mit 3,205 m/s².',
    faq: [
      { q: 'Warum wirkt sich die Masse nicht auf die Beschleunigung aus?', a: 'Sowohl die treibende Kraft als auch die Reibung sind der Masse proportional, das Teilen durch die Masse kürzt sie also heraus. Eine schwere und eine leichte Kiste rutschen dieselbe Schräge gleich hinab — bei gleicher Reibungszahl.' },
      { q: 'Bei welchem Winkel beginnt das Rutschen?', a: 'Wenn der Tangens des Winkels die Reibungszahl übersteigt. Bei μ = 0,2 sind das rund 11,3°, bei μ = 0,7 rund 35°. Genau so werden Reibungszahlen gemessen: kippen, bis es rutscht.' },
      { q: 'Was bedeutet eine negative Beschleunigung?', a: 'Dass sich der Körper nicht von selbst bewegt: die haltende Kraft schlägt die treibende. Die Zahl zeigt, welche Beschleunigung nötig wäre, um die Last gegen die Reibung loszureißen.' },
      { q: 'Warum ist die Reibung in der Ebene nicht null?', a: 'Dort ist der Anpressdruck am größten und gleich dem vollen Gewicht, die Reibung ist also ebenfalls am größten. Zugleich gibt es keinen treibenden Anteil — übrig bleibt reiner Widerstand gegen das Schieben.' },
    ],
  },
  'inverse-square': {
    longDescription: 'Doppelt so weit wegzutreten lässt dir ein Viertel und nicht die Hälfte: die Energie verteilt sich über eine Kugel, deren Fläche mit dem Quadrat des Radius wächst. Das ist der unanschauliche Kern des Gesetzes und der Grund, warum eine „nur ein wenig“ zurückgesetzte Lampe den Raum dunkel lässt. Die Einheiten der Intensität sind bewusst offen — das Gesetz gilt gleich für Lux, Watt je Quadratmeter und Strahlendosen; wichtig ist allein, dass beide Abstände dasselbe Maß teilen.',
    howToUse: [
      'Die Einheiten der Intensität wählst du, aber in beiden Feldern dieselben: Lux, Watt je Quadratmeter, Mikrosievert je Stunde.',
      'Auch beide Abstände teilen ein Maß — in die Formel geht allein ihr Verhältnis ein.',
      'Das Gesetz beschreibt eine punktförmige Quelle in einem durchsichtigen Medium. Ein Scheinwerfer mit Reflektor und ein Laser folgen ihm nicht.',
      'Für Schall ergibt es einen Abfall von rund 6 dB je Verdopplung des Abstands.',
    ],
    howItWorks: 'I₂ = I₁ · (d₁ / d₂)².',
    example: '1000 Lux in einem Meter werden in drei Metern zu 111,11 Lux.',
    faq: [
      { q: 'Warum gerade ein Quadrat?', a: 'Die Quelle strahlt in alle Richtungen, und ihre ganze Energie durchquert eine Kugel um sie herum. Die Fläche einer Kugel ist 4πr² und wächst mit dem Quadrat des Radius — jeder Flächeneinheit bleibt also um so viel weniger.' },
      { q: 'Warum gilt es bei einem Scheinwerfer nicht?', a: 'Der Reflektor bündelt das Licht zu einem Strahl, die Energie verteilt sich also über einen engen Kegel statt über eine Kugel. Je enger der Strahl, desto langsamer der Abfall; bei einem Laser fällt er auf Zimmerabständen kaum.' },
      { q: 'Folgt Schall dem wirklich?', a: 'Im Freien und fern von reflektierenden Flächen ja — das sind die vertrauten 6 dB je Verdopplung. In Räumen stören Reflexionen an den Wänden das Bild merklich.' },
      { q: 'Was, wenn der neue Abstand kleiner ist?', a: 'Die Rechnung gilt weiter und liefert einen Anstieg der Intensität. Die einzige Grenze ist, dass beide Abstände über null liegen müssen: am Ort der Quelle selbst geht das Gesetz ins Unendliche.' },
    ],
  },
  'kinetic-energy': {
    longDescription: 'Berechnet die Energie eines bewegten Körpers und löst die Formel auch rückwärts: Energie und Masse ergeben die Geschwindigkeit, Energie und Geschwindigkeit ergeben die Masse. Die Geschwindigkeit geht im Quadrat ein, und das lohnt es sich zu merken — ein doppelt so schneller Körper trägt die vierfache Energie. Deshalb wächst der Bremsweg weit schneller als die Geschwindigkeit.',
    howToUse: [
      'Wähle die gesuchte Größe.',
      'Trage die beiden anderen in SI-Einheiten ein.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'E = ½ · m · v², daraus v = √(2E ÷ m) und m = 2E ÷ v².',
    example: 'Ein Körper von 2 kg bei 3 m/s trägt 9 J kinetische Energie.',
    faq: [
      { q: 'Warum steht die Geschwindigkeit im Quadrat?', a: 'Weil die Energie beim Beschleunigen aufwächst und jeder weitere Meter je Sekunde mehr kostet als der vorige. Ein doppelt so schneller Körper trägt die vierfache Energie.' },
      { q: 'Was passiert bei der Geschwindigkeit null?', a: 'Die Energie ist null: ein ruhender Körper hat keine kinetische Energie. Das ist ein gültiges Ergebnis und kein Fehler.' },
      { q: 'Warum lässt sich die Masse bei der Geschwindigkeit null nicht finden?', a: 'Die Masse ist 2E ÷ v². Bei der Geschwindigkeit null verschwindet der Nenner, über die Masse lässt sich also nichts schließen.' },
      { q: 'Ist die Drehung enthalten?', a: 'Nein. Berechnet wird allein die Energie der fortschreitenden Bewegung; die Rotationsenergie folgt einer anderen Formel mit dem Trägheitsmoment.' },
    ],
  },
  'lever-moment': {
    longDescription: 'Ermittelt das Gleichgewicht an einem Hebel: welche Kraft auf der anderen Seite des Drehpunkts nötig ist und um wie viel der Hebel sie vervielfacht. Er unterscheidet sich merklich von einem Drehmomentrechner — jener liefert das Moment EINER Kraft über ihren Arm und Winkel, während hier zwei Kräfte an zwei Armen verbunden werden. Der Vorteil ist nicht umsonst: der lange Arm legt einen entsprechend längeren Weg zurück. Ein Hebel erzeugt keine Arbeit, er verteilt sie nur zwischen Kraft und Weg um, und etwas anderes zu erwarten ist das häufigste Missverständnis über ihn.',
    howToUse: [
      'Wähle, was du suchst: die Kraft am zweiten Arm oder seine Länge.',
      'Trage Kraft und Arm auf der ersten Seite des Drehpunkts ein.',
      'Fülle die bekannte Größe auf der zweiten Seite aus.',
      'Die Arme werden vom Drehpunkt bis zum Angriffspunkt der Kraft gemessen und nicht bis zum Ende der Stange.',
    ],
    howItWorks: 'Ein Hebel ist im Gleichgewicht, wenn die Momente gleich sind: F₁·d₁ = F₂·d₂. Der Kraftgewinn ist das Verhältnis der Arme.',
    example: 'Eine Kraft von 100 N an einem Arm von 2 m wird von 400 N an einem Arm von 0,5 m ausgeglichen — ein vierfacher Gewinn.',
    faq: [
      { q: 'Wie unterscheidet sich das vom Drehmoment?', a: 'Das Drehmoment ist das Moment einer einzelnen Kraft an ihrem Arm, Winkel eingeschlossen. Hier wird das Gleichgewicht zweier Kräfte an zwei Armen ermittelt, samt ihrem Verhältnis.' },
      { q: 'Erzeugt ein Hebel Energie?', a: 'Nein. Was du an Kraft gewinnst, verlierst du an Weg. Die Arbeit bleibt dieselbe; nur ihre Aufteilung ändert sich.' },
      { q: 'Wovon werden die Arme gemessen?', a: 'Vom Drehpunkt bis zum Angriffspunkt, senkrecht zur Wirkungslinie. Die Stange darüber hinaus spielt keine Rolle.' },
      { q: 'Was, wenn beide Kräfte auf derselben Seite angreifen?', a: 'Dann ist es eine Summe von Momenten und kein Gleichgewicht zweier Arme. Diese Seite deckt die klassische Anordnung mit dem Drehpunkt zwischen den Kräften ab.' },
    ],
  },
  'mach-number': {
    longDescription: 'Die Mach-Zahl ist keine Geschwindigkeit, sondern ein Verhältnis zur Schallgeschwindigkeit in derselben Luft, dieselbe Geschwindigkeit über Grund bedeutet in verschiedenen Höhen also Verschiedenes. In Reiseflughöhe, bei rund −56 °C, läuft der Schall beinahe zehn Prozent langsamer als auf Meereshöhe, und ein Verkehrsflugzeug mit 900 km/h liegt merklich näher an der Schallmauer, als es scheint. Deshalb wird hier die Temperatur eingetragen und nicht die Höhe: die Schallgeschwindigkeit hängt allein von der Temperatur ab.',
    howToUse: [
      'Trage die Temperatur in der betreffenden Höhe ein: rund 15 °C auf Meereshöhe, rund −50 °C auf zehn Kilometern.',
      'Die Schallgeschwindigkeit hängt weder vom Druck noch unmittelbar von der Höhe ab — allein von der Lufttemperatur.',
      'Der Bereich folgt den üblichen Grenzen: unter 0,8 Unterschall, unter 1,2 Transschall, unter 5 Überschall.',
      'Für Wasser oder andere Medien gilt das nicht: der Faktor ist für Luft gesetzt.',
    ],
    howItWorks: 'Schallgeschwindigkeit 331,3·√(1 + t/273,15) m/s; die Mach-Zahl ist die Geschwindigkeit geteilt durch sie.',
    example: '900 km/h bei −50 °C sind Mach 0,873 — der Transschallbereich ist bereits nah.',
    faq: [
      { q: 'Warum hängt die Mach-Zahl von der Temperatur ab?', a: 'Die Schallgeschwindigkeit wird davon gesetzt, wie schnell Moleküle eine Störung weiterreichen, und das hängt an ihrer thermischen Geschwindigkeit. Kalte Luft trägt Schall langsamer, dieselbe Geschwindigkeit über Grund ergibt also eine höhere Mach-Zahl.' },
      { q: 'Warum liegt die Überschallgrenze nicht genau bei eins?', a: 'Weil ein Flugzeug kein Punkt ist: die Strömung über der Tragfläche wird schneller als die Anströmung, und örtlicher Überschall entsteht schon ab rund 0,8. Genau deshalb heißt das Band von 0,8 bis 1,2 Transschall.' },
      { q: 'Welche Temperatur herrscht in welcher Höhe?', a: 'In der Normatmosphäre fällt die Temperatur bis elf Kilometer um rund 6,5 Grad je Kilometer und bleibt danach nahe −56,5 °C. Für einen genauen Wert nimm die gemeldete Temperatur.' },
      { q: 'Gilt das auch für Wasser?', a: 'Nein. In Wasser läuft der Schall mit rund 1500 m/s, und die Formel für Luft gilt dort nicht. Diese Rechnung ist für Luft gedacht.' },
    ],
  },
  'mass-energy': {
    longDescription: 'Die berühmteste Gleichung der Physik beantwortet eine einfache Frage: wie viel Energie in Materie steckt, wenn sie vollständig umgesetzt würde. Die Antwort ist riesig und deshalb in Joule unlesbar — ein Gramm Materie liefert beinahe neun mal zehn hoch dreizehn. Deshalb stehen Kilowattstunden und Tonnen TNT-Äquivalent daneben: sie liefern den Maßstab. Die Masse wird in Gramm eingetragen, denn in Kilogramm bräuchte jede alltägliche Zahl drei Nullen nach dem Komma.',
    howToUse: [
      'Die Masse wird in Gramm eingetragen: für ein Kilogramm tippst du 1000.',
      'Die Lichtgeschwindigkeit ist der genaue Wert 299 792 458 m/s — das ist die Festlegung des Meters und keine Messung.',
      'Die Tonnen TNT-Äquivalent nutzen 4,184 Gigajoule je Tonne, die übliche Übereinkunft.',
      'Das ist die vollständige Umsetzung von Masse in Energie: wirkliche Reaktionen setzen nur einen kleinen Bruchteil davon frei.',
    ],
    howItWorks: 'E = m·c², die Masse von Gramm in Kilogramm umgerechnet, die Antwort in Exponentialschreibweise und zusätzlich in Kilowattstunden und Tonnen TNT.',
    example: 'Ein Gramm Materie enthält 8,988·10¹³ Joule — rund 25 Millionen Kilowattstunden.',
    faq: [
      { q: 'Heißt das, ein Gramm Materie zu verbrennen setzt so viel frei?', a: 'Nein. Die Formel liefert die Energie einer vollständigen Umsetzung der Masse, und das geschieht nur, wenn Materie mit Antimaterie zerstrahlt. Kernspaltung setzt rund ein Tausendstel der Masse um, chemisches Verbrennen rund ein Milliardstel.' },
      { q: 'Warum steht die Antwort als Zehnerpotenz?', a: 'Weil sich 89 875 517 873 681,8 Joule nicht lesen lassen. Die Exponentialschreibweise behält die tragenden Stellen und die Größenordnung, und hier ist die Größenordnung der ganze Punkt.' },
      { q: 'Woher kommen die Tonnen TNT?', a: 'Eine Tonne TNT-Äquivalent ist als 4,184 Gigajoule festgelegt. Es ist keine Eigenschaft eines bestimmten Sprengstoffs, sondern eine Vergleichseinheit, gerade damit sich solche Zahlen vorstellen lassen.' },
      { q: 'Gilt die Formel für einen bewegten Körper?', a: 'Bei einem bewegten Körper kommt die kinetische Energie zur Ruheenergie hinzu, und die Summe folgt über den relativistischen Faktor. Berechnet wird hier die Ruheenergie — die Energie, die in der Masse selbst steckt.' },
    ],
  },
  'moment-of-inertia': {
    longDescription: 'Das Trägheitsmoment misst den Widerstand gegen Drehung, und es hängt nicht allein von der Masse ab, sondern davon, wie diese Masse zur Achse liegt. Ein Ring trägt seinen ganzen Werkstoff außen am Radius, sein Moment ist deshalb doppelt so groß wie das einer Vollscheibe gleicher Masse und gleichen Radius. Aus demselben Grund setzt ein Stab, der um sein Ende geschwungen wird, viermal so viel Widerstand entgegen wie derselbe Stab um seine Mitte.',
    howToUse: [
      'Wähle den Körper: die Drehachse ist damit festgelegt.',
      'Bei Scheibe, Ring oder Kugel trägst du den Radius ein; bei einem Stab seine Länge.',
      'Der Trägheitsradius sagt dir, wie weit von der Achse die ganze Masse liegen müsste, um dasselbe Moment zu ergeben.',
      'Bei einem zusammengesetzten Körper rechne die Teile einzeln und addiere ihre Momente um dieselbe Achse.',
    ],
    howItWorks: 'Stab um die Mitte mL²/12, um das Ende mL²/3, Scheibe mr²/2, Ring mr², Vollkugel 2mr²/5, Hohlkugel 2mr²/3.',
    example: 'Eine Scheibe mit 2 kg und 15 cm Radius hat ein Trägheitsmoment von 0,0225 kg·m².',
    faq: [
      { q: 'Warum ist ein Ring doppelt so groß wie eine Scheibe?', a: 'Ein Ring hat seine ganze Masse am Radius, während eine Scheibe sie von der Mitte bis zum Rand verteilt. Das Moment wächst mit dem Quadrat des Abstands, die inneren Lagen einer Scheibe steuern also weit weniger bei.' },
      { q: 'Warum zwei Möglichkeiten für einen Stab?', a: 'Das Moment hängt davon ab, wo die Achse verläuft. Um die Mitte ist es viermal kleiner als um das Ende — weshalb sich eine Schaukel aus der Mitte leichter bewegen lässt als vom Rand.' },
      { q: 'Was zeigt der Trägheitsradius?', a: 'Den Abstand von der Achse, in dem die ganze Masse als Punkt liegen müsste, damit das Moment unverändert bliebe. Er ersetzt eine verwickelte Form durch eine Zahl.' },
      { q: 'Wie behandle ich einen zusammengesetzten Körper?', a: 'Addiere die Momente der Teile um dieselbe Achse. Läuft die Achse nicht durch die Mitte eines Teils, addiere seine Masse mal dem Versatz im Quadrat — der Satz von Steiner, der hier nicht berechnet wird.' },
    ],
  },
};
