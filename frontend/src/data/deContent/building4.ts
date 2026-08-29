import type { DeDetailedContent } from './types';

export const deBuilding4Content: Partial<Record<string, DeDetailedContent>> = {
  'plaster': {
    longDescription: 'Ermittelt die Masse an Trockenmörtel und die Zahl der Säcke aus Wandfläche und Schichtdicke. Der Verbrauch bleibt ein sichtbares und änderbares Feld: Gips-, Zement- und Kalkmörtel unterscheiden sich, und der Hersteller druckt seinen eigenen Wert auf den Sack. Die Vorgabe von 8,5 kg je Quadratmeter und Millimeter Schicht ist ein üblicher Gipsmörtel — eine auf der Seite genannte Annahme und keine Norm. Säcke werden aufgerundet, denn ein halber Sack wird nicht verkauft.',
    howToUse: [
      'Gib die Wandfläche an oder ihre Länge und Höhe.',
      'Trage die Schichtdicke und den Verbrauch vom Sack ein.',
      'Lies die Masse an Mörtel und die Zahl der Säcke ab.',
    ],
    howItWorks: 'Masse = Fläche × Schichtdicke in Millimetern × Verbrauch je Quadratmeter bei einem Millimeter. Die Zahl der Säcke ist die Masse geteilt durch das Sackgewicht, aufgerundet.',
    example: 'Eine Wand von 20 m² braucht bei 10 mm Schicht und einem Verbrauch von 8,5 genau 1700 kg Mörtel — 57 Säcke zu 30 kg.',
    faq: [
      { q: 'Woher kommt der Verbrauchswert?', a: 'Von der Verpackung: Hersteller geben ihn in Kilogramm je Quadratmeter bei einem Millimeter Schicht an. Die Vorgabe ist ein üblicher Gipsmörtel und lohnt es, durch deinen eigenen ersetzt zu werden.' },
      { q: 'Wie unterscheidet sich das vom Estrichrechner?', a: 'Estrich gleicht einen Boden aus und wird über das Schichtvolumen auf der Bodenfläche gerechnet. Putz geht an eine Wand, und sein Verbrauch wird je Millimeter Dicke angegeben.' },
      { q: 'Wie dick soll die Putzschicht sein?', a: 'So dick, dass die Wand in die Ebene kommt — 5–10 mm bei einer geraden Wand, mehr, wo die Abweichung sichtbar ist. Beurteile das nach den Putzlehren und nicht nach einem Mittelwert.' },
      { q: 'Sind Öffnungen und Laibungen berücksichtigt?', a: 'Nein. Zieh die Öffnungen selbst ab und rechne die Laibungen hinzu: ihre Geometrie ist in jedem Raum anders.' },
    ],
  },
  'rafters': {
    longDescription: 'Ein Sparren läuft vom First zur Wand, die Spannweite wird also zuallererst halbiert — die volle Spannweite zu nehmen ist der Fehler, der Holz doppelt so lang macht, wie das Dach es braucht. Der Überstand kommt nach der Hypotenuse hinzu und nicht zur waagerechten Ausladung, denn er setzt dieselbe geneigte Linie fort; ihn an der falschen Stelle zu addieren verkürzt jeden Sparren der Bestellung um einige Zentimeter, und ein Dach ist kein Ort, das zu entdecken. Das Gefälle steht in Prozent neben der Neigung, weil Dachdeckungen ein Mindestgefälle vorschreiben, während die Säge auf einen Winkel eingestellt wird.',
    howToUse: [
      'Trage die Spannweite des Gebäudes zwischen den Außenwänden ein.',
      'Trage die Höhe von der Fußpfette bis zum First ein.',
      'Trage den Dachüberstand über die Wand hinaus ein.',
      'Rechne vor der Holzbestellung einen Zuschnittzuschlag hinzu.',
    ],
    howItWorks: 'Ausladung = Spannweite ÷ 2. Länge = die Hypotenuse aus Ausladung und Höhe, plus Überstand. Die Neigung ist der Arkustangens aus Höhe durch Ausladung.',
    example: 'Eine Spannweite von 8 m mit 2,4 m Firsthöhe und 0,5 m Überstand braucht einen Sparren von 5,165 m bei 30,964 Grad.',
    faq: [
      { q: 'Wird die Spannweite zwischen den Wänden oder über das ganze Gebäude gemessen?', a: 'Über das Gebäude, zwischen den äußeren Fußpfetten. Die Rechnung halbiert sie, weil ein Sparren eine Dachfläche abdeckt.' },
      { q: 'Warum kommt der Überstand nach der Hypotenuse hinzu?', a: 'Weil der Überstand den Sparren auf derselben Neigung fortsetzt. Ihn zur waagerechten Ausladung zu addieren setzt die Länge bei jedem Stück um einige Zentimeter zu niedrig an.' },
      { q: 'Welches Dachgefälle ist brauchbar?', a: 'Das hängt von der Deckung ab: Profilblech braucht meist mindestens 12 %, Ziegel weit mehr, und Abdichtungsbahnen kommen fast flach aus. Prüfe den Mindestwert des Herstellers, bevor du die Firsthöhe wählst.' },
      { q: 'Deckt das Walmdächer ab?', a: 'Nein. Hier geht es um ein Satteldach mit zwei gleichen Flächen. Gratsparren laufen schräg und sind länger als der Wert hier.' },
    ],
  },
  'roof-area': {
    longDescription: 'Ermittelt die Dachfläche aus den Maßen des Grundrisses und der Neigung. Gut zu wissen, bevor du anfängst: bei jedem Dach gleichbleibender Neigung über demselben Grundriss ist die Fläche dieselbe — der Grundriss geteilt durch den Kosinus des Winkels. Pultdach, Satteldach und Walmdach unterscheiden sich nicht in der Summe, sondern darin, auf wie viele Flächen sie aufgeteilt wird, die Form ändert also die Aufteilung und nicht die Summe. Die Neigung wird in Grad oder als Prozentwert angegeben, und ein Prozentwert wird über einen Arkustangens umgerechnet und nicht als Winkel behandelt.',
    howToUse: [
      'Wähle die Dachform.',
      'Trage Länge und Breite des Grundrisses ein.',
      'Gib die Neigung in Grad oder als Prozentwert an.',
    ],
    howItWorks: 'Die Grundrissfläche wird durch den Kosinus der Neigung geteilt: eine Dachfläche ist genau um diesen Faktor länger als ihre Projektion. Der Winkel wird ausdrücklich ins Bogenmaß umgerechnet, und eine Neigung in Prozent wird über einen Arkustangens zum Winkel. Bei 90 Grad steht die Fläche senkrecht, der Kosinus geht auf null, und es gibt keine Fläche.',
    example: 'Ein Satteldach über einem Grundriss von 10 × 8 m hat bei 30° Neigung eine Fläche von 92,376 m² — 46,188 m² je Dachfläche.',
    faq: [
      { q: 'Warum haben Pult- und Satteldach dieselbe Fläche?', a: 'Weil sie allein vom Grundriss und der Neigung abhängt. Ein Satteldach teilt dieselbe Fläche auf zwei halb so große auf — die Summe ändert sich nicht.' },
      { q: 'Wie unterscheidet sich eine Neigung in Prozent von Grad?', a: 'Ein Prozentwert ist die Höhe über der Ausladung mal hundert. Der Winkel folgt über einen Arkustangens: 100 % Neigung sind 45° und nicht 90°.' },
      { q: 'Ist der Dachüberstand enthalten?', a: 'Nein. Trage die Maße des Rechtecks ein, das das Dach tatsächlich überdeckt, samt Überstand, wenn er mitzählen soll.' },
      { q: 'Warum wird beim Walmdach keine Fläche je Dachfläche angezeigt?', a: 'Weil sie an der Firstlänge hängt, nach der hier nicht gefragt wird. Die Summe bleibt richtig: sie folgt allein aus Grundriss und Neigung.' },
    ],
  },
  'roof-battens': {
    longDescription: 'Zählt die Lattung aus der Dachfläche und nicht aus ihrer Länge, denn der Abstand entscheidet darüber, wie viele Laufmeter jeder Quadratmeter braucht. Dieses Verhältnis — eins geteilt durch den Abstand — steht in einer eigenen Zeile, weil es die Zahl ist, mit der auf der Baustelle tatsächlich geschätzt wird. Latten werden aufgerundet: ein Stück Holz wird ganz verkauft. Das Volumen folgt aus den Laufmetern und dem Querschnitt in Millimetern, denn so wird Schnittholz bestellt — nach Kubikmetern und nicht nach Stück.',
    howToUse: [
      'Trage die Dachfläche ein — die geneigte Fläche und nicht den Grundriss.',
      'Trage den Lattenabstand ein, den deine Deckung verlangt.',
      'Trage Länge und Querschnitt der Latten ein, die du kaufst.',
      'Ergänze einen Zuschlag für Zuschnitt und Stöße.',
    ],
    howItWorks: 'Die Laufmeter sind die Fläche geteilt durch den Abstand, plus Zuschlag. Die Latten sind diese Länge geteilt durch eine Latte, aufgerundet, und das Volumen sind die Laufmeter mal dem Querschnitt.',
    example: '60 m² bei 350 mm Abstand und 10 % Zuschlag brauchen 188,57 m, das sind 32 Latten zu sechs Metern.',
    faq: [
      { q: 'Soll ich die Dachfläche oder die Grundfläche nehmen?', a: 'Die Dachfläche — die tatsächliche geneigte Fläche. Ein Dach mit 30° ist rund 15 % größer als das Gebäude darunter, und der Rechner für die Dachfläche liefert diesen Wert.' },
      { q: 'Welchen Abstand soll ich nehmen?', a: 'Ihn setzt die Deckung: Ziegel binden den Abstand an ihr eigenes Deckmaß, Profilblech liegt meist bei 350–500 mm, und weiche Deckungen brauchen statt Latten eine vollflächige Schalung.' },
      { q: 'Wozu das Volumen?', a: 'Weil Schnittholz nach Kubikmetern bepreist und geliefert wird. Die Laufmeter sagen dir, was zu verlegen ist; das Volumen sagt dir, was zu bestellen ist.' },
      { q: 'Sind die Konterlatten enthalten?', a: 'Nein. Hat dein Dach eine Hinterlüftung, laufen die Konterlatten quer im Sparrenabstand und sind eine eigene Zählung.' },
      { q: 'Warum werden die Latten so stark aufgerundet?', a: 'Sie werden gar nicht stark aufgerundet — die Länge wird durch ein Stück geteilt und einmal aufgerundet. Jeder Schnitt lässt einen Rest, und dafür ist der Zuschlag da.' },
    ],
  },
  'room-volume': {
    longDescription: 'Berechnet das Raumvolumen entweder aus Länge, Breite und Höhe oder aus einer bekannten Bodenfläche und der Höhe. Mit den Maßen nennt er zusätzlich Umfang und Wandfläche, und damit beginnen Schätzungen für Farbe und Tapete.',
    howToUse: [
      'Wähle, wie du misst.',
      'Trage die Maße oder die Bodenfläche ein.',
      'Trage die Raumhöhe ein.',
    ],
    howItWorks: 'Volumen = Bodenfläche × Höhe. Mit den Maßen ist die Wandfläche 2 × (Länge + Breite) × Höhe.',
    example: 'Ein Raum von 5 × 4 m mit 2,7 m Höhe fasst 54 m³.',
    faq: [
      { q: 'Warum zeigt der Flächenmodus keine Wandfläche?', a: 'Die Wände hängen am Umfang, und viele verschiedene Raumformen teilen eine Bodenfläche. Ohne Länge und Breite gibt es nichts, woraus sie sich berechnen ließe.' },
      { q: 'Werden Türen und Fenster abgezogen?', a: 'Nein. Das ist der Bruttowert; Öffnungen behandeln die Rechner für Farbe und Tapete.' },
      { q: 'Wozu dient das Raumvolumen?', a: 'Vor allem für die Auslegung von Lüftung und Heizung, wo es auf die bewegte oder erwärmte Luft ankommt.' },
      { q: 'Spielt die Deckenform eine Rolle?', a: 'Der Rechner geht von einer ebenen Decke aus. Schrägen oder Gewölbe brauchen stattdessen die mittlere Höhe.' },
    ],
  },
  'sealant-volume': {
    longDescription: 'Die eigentliche Frage im Baumarkt lautet nicht „wie viele Milliliter“, sondern „reicht eine Kartusche“. Deshalb steht neben der Menge eine Zeile dafür, wie viele Meter Fuge eine Kartusche füllt: bei einem Querschnitt von sechs mal sechs reicht eine gewöhnliche Kartusche rund achteinhalb Meter, bei zehn mal acht weniger als vier. Die Rechnung ist bequem: ein Millimeter mal einem Millimeter mal einem Meter ergibt genau einen Milliliter.',
    howToUse: [
      'Die Fugentiefe ist meist gleich der Breite oder halb so groß — tieferer Dichtstoff arbeitet schlechter und reißt.',
      'Eine übliche Kartusche fasst 310 ml, ein Schlauchbeutel für die Presse 600 ml, kleine Packungen 80 und 100 ml.',
      'Ein Zuschlag von 10 Prozent deckt das Anschneiden der Düse, die erste ungleichmäßige Raupe und Unebenheiten der Fuge ab.',
      'Breite Fugen bekommen zuerst ein Hinterfüllprofil: es begrenzt die Tiefe und spart Dichtstoff.',
    ],
    howItWorks: 'Menge = Breite × Tiefe × Länge; ein Millimeter mal einem Millimeter mal einem Meter ergibt genau einen Milliliter; Kartuschen werden aufgerundet.',
    example: 'Eine Fuge von 6×6 mm über 12 m braucht mit Zuschlag 475 ml — zwei Kartuschen zu 310 ml.',
    faq: [
      { q: 'Warum die Fuge nicht tiefer machen als breit?', a: 'Dichtstoff arbeitet auf Zug, und eine zu tiefe Fuge lässt ihn nicht dehnen: er reißt an der Kante. Die Regel ist einfach — Tiefe gleich Breite, und bei breiten Fugen die halbe Breite.' },
      { q: 'Wozu ein Hinterfüllprofil?', a: 'Es begrenzt die Tiefe von unten und verhindert, dass der Dichtstoff an einer dritten Fläche haftet. Eine dreiseitig haftende Raupe kann sich nicht frei dehnen und reißt als Erste.' },
      { q: 'Wie genau ist die Zahl?', a: 'Die Rechnung liefert die Geometrie der Fuge. Der tatsächliche Verbrauch liegt höher wegen des Anschneidens der Düse, der ersten ungleichmäßigen Raupe und dessen, was in der Kartusche bleibt — dafür ist der Zuschlag da.' },
      { q: 'Kann ich erkennen, für wie viele Türöffnungen eine Kartusche reicht?', a: 'Die Zeile „Meter je Kartusche“ tut das unmittelbar: teile sie durch den Umfang deiner Öffnung.' },
    ],
  },
};
