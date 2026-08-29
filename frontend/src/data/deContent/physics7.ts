import type { DeDetailedContent } from './types';

export const dePhysics7Content: Partial<Record<string, DeDetailedContent>> = {
  'terminal-velocity': {
    longDescription: 'Der freie Fall beschleunigt einen Körper nur im Vakuum unbegrenzt: in Luft wächst der Widerstand mit dem Quadrat der Geschwindigkeit und hält dem Gewicht irgendwann die Waage. Von da an ändert sich die Geschwindigkeit nicht mehr, wie lange der Fall auch dauert. Deshalb pendelt sich ein Fallschirmspringer in Bauchlage bei rund 190 km/h ein, während die Kopf-voran-Lage das ungefähr verdoppelt — die Fläche ändert sich, nicht die Schwerkraft. Fläche und Widerstandsbeiwert werden von dir eingetragen, weil sie von Haltung und Form abhängen.',
    howToUse: [
      'Die Fläche wird quer zur Strömung gemessen: ein Mensch in Bauchlage hat rund 0,7 m², kopfüber rund 0,18 m².',
      'Widerstandsbeiwert: eine Kugel rund 0,47, ein Mensch in Bauchlage rund 1, ein Fallschirm rund 1,4.',
      'Die Luftdichte auf Meereshöhe beträgt 1,225 kg/m³; in der Höhe ist sie niedriger, und die Endgeschwindigkeit dort höher.',
      'Die Zeilen zu 95 Prozent beantworten die Frage „wann denn schon“: die Endgeschwindigkeit selbst wird nur asymptotisch erreicht.',
    ],
    howItWorks: 'Das Gleichgewicht von Gewicht und Widerstand ergibt v = √(2mg/(ρ·A·Cd)); Zeit und Weg bis 95 Prozent folgen aus der Lösung mit dem Tangens hyperbolicus.',
    example: 'Ein Mensch mit 80 kg fällt in Bauchlage mit rund 42,7 m/s, also gut 154 km/h.',
    faq: [
      { q: 'Warum fällt ein schwerer Körper schneller als ein leichter?', a: 'Im Vakuum tut er das nicht. In Luft wächst die Endgeschwindigkeit bei gleicher Fläche mit der Wurzel der Masse, eine Feder und ein Stein gleicher Größe unterscheiden sich also grundlegend: bei der Feder hält der Widerstand dem Gewicht beinahe sofort die Waage.' },
      { q: 'Woher bekomme ich den Widerstandsbeiwert?', a: 'Aus einer Tabelle nach Form: eine Kugel rund 0,47, ein Würfel rund 1,05, ein Mensch in Bauchlage rund 1, eine Tropfenform rund 0,04. Er hängt zusätzlich von der Reynolds-Zahl ab und bleibt deshalb stets eine Schätzung.' },
      { q: 'Warum wird die Endgeschwindigkeit nie genau erreicht?', a: 'Weil die verbleibende Beschleunigung umso kleiner wird, je näher man kommt: die Geschwindigkeit nähert sich der Grenze wie ein Tangens hyperbolicus. Die praktische Antwort steht in den Zeilen zu 95 Prozent.' },
      { q: 'Ändert sich die Endgeschwindigkeit mit der Höhe?', a: 'Ja, merklich. Oben ist die Luft dünn, der Widerstand kleiner, und dieselbe Gestalt fällt schneller — genau deshalb erreichen Rekordsprünge aus der Stratosphäre Überschallgeschwindigkeit.' },
    ],
  },
  'thermal-conduction': {
    longDescription: 'Ermittelt, wie viel Wärme durch eine ebene Schicht gegebener Dicke und Leitfähigkeit geht: den Strom in Watt, die Stromdichte, den Wärmedurchlasswiderstand und den U-Wert. Gezählt wird allein die Leitung durch den Werkstoff selbst — Konvektion und Strahlung an den Oberflächen liegen außerhalb des Modells —, dünnes Glas kommt deshalb mit einem verschwindenden Widerstand heraus. Ein wirkliches Fenster hält die Wärme über die Luftschichten an seinen Oberflächen und den Zwischenraum der Verglasung und nicht über das Glas, und diese Rechnung zeigt das klar.',
    howToUse: [
      'Trage die Fläche des Bauteils ein.',
      'Setze die Schichtdicke in Metern: 200 mm sind 0,2.',
      'Gib die Leitfähigkeit an: Mineralwolle 0,04, Ziegel 0,7, Glas 1,0, Holz 0,15 W/(m·K).',
      'Setze den Temperaturunterschied über der Schicht.',
    ],
    howItWorks: 'Strom = Leitfähigkeit × Fläche × Temperaturunterschied ÷ Dicke. Wärmedurchlasswiderstand = Dicke ÷ Leitfähigkeit, und der U-Wert ist sein Kehrwert.',
    example: 'Eine Wand von 10 m² mit 200 mm Mineralwolle lässt bei 25 K Unterschied 50 W durch.',
    faq: [
      { q: 'Warum ergibt Glas einen so riesigen Strom?', a: 'Weil allein die Leitung des Glases selbst gezählt wird und sein Widerstand vernachlässigbar ist. Ein wirkliches Fenster hält die Wärme über die Luftschichten an seinen Oberflächen und den Zwischenraum zwischen den Scheiben.' },
      { q: 'Wie füge ich mehrere Schichten zusammen?', a: 'Die Widerstände addieren sich. Ermittle R für jede Schicht, zähle sie zusammen, und der Kehrwert der Summe ergibt den U-Wert des ganzen Bauteils.' },
      { q: 'Wie unterscheidet sich das von einem Rechner für die Heizleistung?', a: 'Jener ermittelt aus dem Volumen, wie viel Wärme ein Raum braucht. Dieser ermittelt aus der Leitfähigkeit, wie viel durch ein bestimmtes Bauteil entweicht.' },
      { q: 'Warum kann der Unterschied negativ sein?', a: 'Weil der Strom nach innen laufen kann: im Sommer ist es draußen wärmer als im Raum. Das Vorzeichen zeigt die Richtung; der Betrag bleibt derselbe.' },
    ],
  },
  'thin-lens': {
    longDescription: 'Eine Gleichung, 1/f = 1/g + 1/b, beschreibt Lupe, Projektor und Kameraobjektiv gleichermaßen — nur die Lage des Gegenstands zum Brennpunkt unterscheidet sie. Jenseits des Brennpunkts erzeugt die Linse ein reelles umgekehrtes Bild, das sich auf einem Schirm auffangen lässt; näher als der Brennpunkt ein virtuelles aufrechtes Bild, das nur durch die Linse sichtbar ist. Das Vorzeichen der Antwort ist hier keine Formsache, sondern eine unmittelbare Aussage darüber, was du bekommst, deshalb wird die Bildart in Worten genannt.',
    howToUse: [
      'Eine Sammellinse hat eine positive Brennweite, eine Zerstreuungslinse eine negative.',
      'Eine positive Bildweite bedeutet ein reelles Bild auf der anderen Seite der Linse; eine negative ein virtuelles Bild auf derselben Seite wie der Gegenstand.',
      'Ein negativer Abbildungsmaßstab bedeutet ein umgekehrtes Bild, ein positiver ein aufrechtes; der Betrag sagt, um wie viel sich die Größe geändert hat.',
      'Der Modus „Brennweite“ wählt die Linse, wenn beide Abstände durch den Aufbau bereits feststehen.',
    ],
    howItWorks: '1/f = 1/g + 1/b, Abbildungsmaßstab −b/g, Brechkraft 100/f in Dioptrien.',
    example: 'Ein Gegenstand 30 cm vor einer Linse mit 10 cm Brennweite erzeugt ein Bild bei 15 cm, halb so groß und umgekehrt.',
    faq: [
      { q: 'Warum ist der Abbildungsmaßstab negativ?', a: 'Das Minus bedeutet ein umgekehrtes Bild und nicht, dass etwas schiefgegangen ist. Jeder Projektor und jedes Kameraobjektiv arbeitet so: der Sensor empfängt ein auf dem Kopf stehendes Bild, und die Elektronik dreht es zurück.' },
      { q: 'Was passiert, wenn der Gegenstand genau im Brennpunkt steht?', a: 'Es entsteht überhaupt kein Bild: die Strahlen verlassen die Linse als paralleles Bündel und treffen sich nie. Das ist kein „sehr weit weg“, sondern das Fehlen eines Bildes, deshalb weist die Rechnung es ab.' },
      { q: 'Wann wirkt eine Linse als Lupe?', a: 'Wenn der Gegenstand näher steht als der Brennpunkt. Die Bildweite kommt negativ heraus, das Bild ist virtuell und aufrecht, und der Abbildungsmaßstab übersteigt dem Betrag nach eins — genau das siehst du durch eine Lupe.' },
      { q: 'Was ist die Brechkraft in Dioptrien?', a: 'Sie ist der Kehrwert der Brennweite in Metern. Eine Linse mit 10 cm Brennweite hat eine Brechkraft von 10 Dioptrien, und genau diese Zahl steht auf einem Brillenrezept.' },
    ],
  },
  'wave': {
    longDescription: 'Eine Beziehung verbindet die drei Größen, zwei beliebige ergeben also die dritte, und es gibt genau drei Modi. Die Periodendauer daneben ist dieselbe Angabe wie die Frequenz, nur in Zeit ausgedrückt: mit der Frequenz rechnet es sich leichter, die Periodendauer stellt man sich leichter vor. Woran man hängen bleibt: die Wellengeschwindigkeit gehört dem Medium und nicht der Quelle. Schall läuft in Luft mit rund 343 m/s, in Wasser nahe 1500 und in Stahl noch dreimal schneller, derselbe Ton hat unter Wasser also eine viermal längere Welle — und das ist eine Aussage über das Wasser und nicht über den Ton.',
    howToUse: [
      'Wähle, welche der drei Größen du suchst.',
      'Trage die beiden bekannten ein.',
      'Nimm die Geschwindigkeit des Mediums und nicht die der Quelle.',
      'Die Periodendauer steht daneben als Frequenz in Sekunden ausgedrückt.',
    ],
    howItWorks: 'Geschwindigkeit = Wellenlänge × Frequenz. Umgestellt ergibt das Wellenlänge = Geschwindigkeit ÷ Frequenz und Frequenz = Geschwindigkeit ÷ Wellenlänge. Die Periodendauer ist eins geteilt durch die Frequenz.',
    example: 'Bei 343 m/s in Luft hat ein Ton mit 440 Hz eine Wellenlänge von 0,7795 m und eine Periodendauer von 0,002273 s.',
    faq: [
      { q: 'Welche Wellengeschwindigkeit soll ich nehmen?', a: 'Die Geschwindigkeit im Medium, durch das die Welle läuft: rund 343 m/s für Schall in Luft bei Zimmertemperatur, rund 1500 in Wasser und 299 792 458 für Licht im Vakuum.' },
      { q: 'Läuft ein höherer Ton schneller?', a: 'Nein. Die Geschwindigkeit setzt das Medium, eine höhere Frequenz bedeutet also schlicht eine kürzere Welle. Deshalb treffen Höhen und Tiefen aus demselben Lautsprecher gemeinsam ein.' },
      { q: 'Was ist der Unterschied zwischen Frequenz und Periodendauer?', a: 'Sie sind Kehrwerte voneinander. Fünfzig Hertz sind eine Periodendauer von 0,02 Sekunden; die erste zählt Schwingungen je Sekunde, die zweite misst eine Schwingung.' },
      { q: 'Gilt das auch für Licht und Funk?', a: 'Ja, mit der passenden Geschwindigkeit. Im Vakuum nimm 299 792 458 m/s; in Glas oder Kabel ist die Geschwindigkeit niedriger, und die Wellenlänge verkürzt sich entsprechend.' },
    ],
  },
  'wind-chill': {
    longDescription: 'Ermittelt den Windchill nach der kanadisch-amerikanischen Formel von 2001, die beide Wetterdienste übernommen haben. Wind kühlt die Luft nicht: das Thermometer zeigt dasselbe. Er reißt die erwärmte Grenzschicht an der Haut fort, sodass der Körper schneller Wärme verliert — die Empfindung ändert sich, die physikalische Größe nicht. Die Formel hat einen Gültigkeitsbereich: über 10 °C und unter 4,8 km/h liefert sie Zahlen, die niemand spürt, außerhalb dieses Bereichs verweigert der Rechner deshalb, statt eine plausible Zahl anzubieten.',
    howToUse: [
      'Trage die Lufttemperatur ein — 10 °C oder darunter, sonst gilt die Formel nicht.',
      'Trage die Windgeschwindigkeit in Kilometern je Stunde ein, 4,8 oder darüber.',
      'Vorhersagen geben den Wind in zehn Metern Höhe an; am Boden ist er schwächer.',
      'Lies den Abstand zum Thermometer ab — das ist der ganze Beitrag des Windes.',
    ],
    howItWorks: '13,12 + 0,6215·t − 11,37·v^0,16 + 0,3965·t·v^0,16, mit t in °C und v in km/h.',
    example: 'Bei −10 °C und 20 km/h Wind fühlt es sich wie −17,86 °C an: der Wind bringt knapp acht Grad hinzu.',
    faq: [
      { q: 'Senkt Wind tatsächlich die Temperatur?', a: 'Nein. Das Thermometer zeigt bei jeder Windgeschwindigkeit dasselbe. Der Wind reißt die erwärmte Luftschicht von der Haut fort, sodass der Körper schneller Wärme verliert — es ändert sich die Rate des Wärmeverlusts und nicht die Lufttemperatur.' },
      { q: 'Warum verweigert er bei +15 °C?', a: 'Weil die Formel allein für Kälte abgeleitet und geprüft wurde: 10 °C oder darunter bei Wind ab 4,8 km/h. Außerhalb dieses Bereichs liefert sie plausible, aber falsche Zahlen, und sie anzubieten wäre schlechter als eine Verweigerung.' },
      { q: 'Friert ein Auto im Wind stärker durch?', a: 'Nein. Der Windchill gilt allein für einen Körper, der selbst Wärme erzeugt. Ein unbelebter Gegenstand kühlt auf die Lufttemperatur ab; der Wind verkürzt nur den Weg dorthin.' },
      { q: 'Warum nennen manche Dienste eine andere Zahl?', a: 'Vor 2001 wurde die ältere Formel von Siple und Passel verwendet, und sie ergab merklich niedrigere Werte. Die Länder haben zu verschiedenen Zeiten gewechselt, alte Tabellen weichen also von dieser Rechnung ab.' },
    ],
  },
  'wind-power': {
    longDescription: 'Die Windgeschwindigkeit geht in die Leistung mit der dritten Potenz ein: doppelter Wind, achtfache Leistung. Daraus folgt ein Schluss, der mehr zählt als jede einzelne Zahl — der Standort entscheidet mehr als die Rotorgröße, und kein Durchmesser rettet einen schlechten Wind. Die zweite Grenze ist grundsätzlich: die Betz-Zahl 16/27 ist keine Eigenschaft der Bauart, sondern eine Folge der Erhaltung von Masse und Impuls. Die Strömung lässt sich nicht ganz anhalten, sonst hätte die Luft hinter dem Rotor keinen Ort mehr, an den sie ausweichen könnte.',
    howToUse: [
      'Nimm die mittlere Windgeschwindigkeit des Standorts in Nabenhöhe und keine Böen: die Leistung geht mit der dritten Potenz, eine Böe ergibt eine trügerisch große Zahl.',
      'Der Leistungsbeiwert liegt bei modernen Anlagen bei 0,4–0,5 und bei selbst gebauten merklich darunter.',
      'Die Luftdichte beträgt auf Meereshöhe 1,225 kg/m³; im Gebirge ist sie niedriger, und die Leistung fällt mit.',
      'Der Tagesertrag geht von gleichbleibendem Wind aus — der wirkliche Ertrag liegt um den Nutzungsgrad darunter.',
    ],
    howItWorks: 'Leistung im Wind 0,5·ρ·A·v³ über eine überstrichene Fläche von πD²/4; die entnommene Leistung ist dieser Wert mal dem Leistungsbeiwert.',
    example: 'Ein Rotor von 3 m ergibt bei 7 m/s Wind und einem Beiwert von 0,4 genau 0,59 kW.',
    faq: [
      { q: 'Warum ist die Betz-Grenze genau 16/27?', a: 'Sie folgt aus der Erhaltung von Masse und Impuls: Energie zu entnehmen heißt, die Strömung zu bremsen, aber ganz zur Ruhe gebrachte Luft hat hinter dem Rotor keinen Ort mehr, an den sie entweichen könnte. Das Beste bremst sie auf ein Drittel der Ausgangsgeschwindigkeit und liefert 59,3 Prozent.' },
      { q: 'Warum zählt die Geschwindigkeit mehr als der Durchmesser?', a: 'Der Durchmesser geht im Quadrat ein, die Geschwindigkeit in der dritten Potenz. Doppelter Wind ergibt die achtfache Leistung; dasselbe mit einem größeren Rotor zu erreichen bräuchte beinahe den dreifachen Durchmesser.' },
      { q: 'Warum liegt der wirkliche Ertrag unter der Rechnung?', a: 'Weil der Wind nicht gleichbleibend ist. Das Verhältnis des tatsächlichen Ertrags zur rechnerischen Zahl bei stetigem Nennwind heißt Nutzungsgrad; an Land liegt er meist bei einem Viertel bis einem Drittel.' },
      { q: 'Ist die Turmhöhe enthalten?', a: 'Nicht unmittelbar. Der Wind wird mit der Höhe aber stärker, weshalb Türme hoch sind: ein Gewinn an Geschwindigkeit wirkt in der dritten Potenz und zahlt sich schneller aus als ein Gewinn am Durchmesser.' },
    ],
  },
  'work': {
    longDescription: 'Berechnet die Arbeit einer Kraft: Kraft mal Weg mal dem Kosinus des Winkels zwischen beiden. Der Winkel ist keine Formsache — eine quer zur Bewegung wirkende Kraft verrichtet überhaupt keine Arbeit, und bei 90° fällt das Ergebnis ehrlich auf null. Der Winkel wird in Grad eingetragen und nicht im Bogenmaß und innen umgerechnet; Grad unmittelbar in einen Kosinus zu geben ergibt eine sinnlose Zahl, und das ist der klassische Fehler.',
    howToUse: [
      'Wähle, was du brauchst: die Arbeit oder den Weg.',
      'Trage die Kraft und den anderen bekannten Wert ein.',
      'Gib den Winkel in Grad an — null, wenn die Kraft entlang der Bewegung wirkt.',
    ],
    howItWorks: 'W = F · s · cos θ, wobei θ der Winkel zwischen Kraft und Weg ist; daraus s = W ÷ (F · cos θ). Der Winkel wird in Grad eingetragen und innen ins Bogenmaß umgerechnet.',
    example: 'Eine Kraft von 10 N über 5 m entlang der Bewegung verrichtet 50 J Arbeit; bei 60° die Hälfte davon.',
    faq: [
      { q: 'Warum ist die Arbeit bei 90° null?', a: 'Weil eine Kraft senkrecht zum Weg die Bewegung weder unterstützt noch behindert. Der Kosinus eines rechten Winkels ist null, das Produkt verschwindet also.' },
      { q: 'Trage ich den Winkel in Grad oder im Bogenmaß ein?', a: 'In Grad. Die Rechnung wandelt innen ins Bogenmaß um, weil trigonometrische Funktionen im Bogenmaß arbeiten — Grad unmittelbar in einen Kosinus zu geben ist der klassische Ausrutscher.' },
      { q: 'Was bedeutet ein Winkel von 180°?', a: 'Die Kraft wirkt der Bewegung entgegen — zum Beispiel Reibung. Der Kosinus ist minus eins und die Arbeit negativ: es wird Energie entzogen und nicht zugeführt.' },
      { q: 'Warum lässt sich der Weg im rechten Winkel nicht finden?', a: 'Bei 90° ist die Arbeit unabhängig vom Weg null, der umgekehrte Schritt ist also nicht eindeutig — jeder Weg passte.' },
    ],
  },
};
