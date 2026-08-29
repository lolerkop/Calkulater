import type { DeDetailedContent } from './types';

export const deLegacy2Content: Partial<Record<string, DeDetailedContent>> = {
  'tile-calculator': {
    longDescription: 'Rechnet vom Raum zur Bestellung und nicht nur zur Fläche: Fliesenzahl, Pakete und ungefährer Kleberbedarf stehen nebeneinander, weil im Baumarkt alle drei zugleich gebraucht werden. Die Reserve wird vor dem Aufrunden aufgeschlagen, denn Zuschnitt an Rändern und Ecken, Bruch und ein späterer Austausch einzelner Fliesen kosten Material, das keine Flächenrechnung kennt. Pakete werden aufgerundet, weil ein halbes Paket niemand verkauft, und diese Rundung ist bei großformatigen Fliesen der teuerste Schritt der ganzen Rechnung.',
    howToUse: [
      'Wähle, ob du Raummaße oder eine fertige Fläche eingibst.',
      'Trage das Fliesenformat in Zentimetern ein.',
      'Trage die Fläche eines Pakets ein — sie steht auf der Verpackung.',
      'Setze die Reserve: 5–10 % bei geradem Verlegen, mehr bei Diagonale oder Muster.',
    ],
    howItWorks: 'Fläche mit Reserve = Fläche × (1 + Reserve ÷ 100). Fliesenzahl = diese Fläche ÷ der Fläche einer Fliese, aufgerundet. Pakete = dieselbe Fläche ÷ der Paketfläche, aufgerundet. Der Kleber folgt der angegebenen Ergiebigkeit je Quadratmeter.',
    example: 'Ein Raum von 4 × 3 m mit Fliesen 30 × 60 cm, Paketen zu 1,44 m² und 10 % Reserve ergibt 13,2 m², 74 Fliesen und 10 Pakete.',
    faq: [
      { q: 'Wie viel Reserve ist sinnvoll?', a: 'Beim geraden Verlegen genügen 5–10 %. Diagonal oder mit Muster entstehen mehr Verschnitt und mehr Ausschuss, dort sind 15 % realistischer. Lege ein paar Fliesen für spätere Reparaturen zurück — nachgekaufte Ware hat oft einen anderen Farbton.' },
      { q: 'Warum werden die Pakete aufgerundet?', a: 'Fliesen werden paketweise verkauft. Selbst ein kleiner Rest verlangt ein weiteres Paket, und die Rundung geschieht nach dem Aufschlag der Reserve.' },
      { q: 'Woher nehme ich die Ergiebigkeit des Klebers?', a: 'Vom Sack. Hersteller geben sie in Kilogramm je Quadratmeter für eine bestimmte Zahnung an, und die Zahnung richtet sich nach dem Fliesenformat: großes Format heißt mehr Kleber.' },
      { q: 'Ist die Fugenbreite berücksichtigt?', a: 'Nein. Bei üblichen Fugen von 2–3 mm liegt der Unterschied unter einem Prozent der Fläche und geht in der Reserve auf. Bei breiten Fugen rechne die Fliesenzahl über das Rastermaß nach.' },
      { q: 'Taugt das auch für die Wand?', a: 'Ja, die Rechnung ist dieselbe. Trage die Wandfläche ein und zieh Türen und Fenster vorher ab.' },
    ],
  },
  'wallpaper-calculator': {
    longDescription: 'Zählt Bahnen und erst daraus Rollen, denn genau daran scheitert die Überschlagsrechnung nach Fläche: eine Rolle von 10,05 m liefert bei 2,7 m Wandhöhe nur drei Bahnen und nicht 3,7 — der Rest ist zu kurz für eine weitere Bahn und geht als Verschnitt weg. Der Rapport verlängert jede Bahn auf das nächste volle Vielfache des Musters und kann die Zahl der Rollen sprunghaft erhöhen. Fenster und Türen werden nach Stückzahl abgezogen, mit den üblichen Mittelwerten von 1,5 und 1,8 m².',
    howToUse: [
      'Trage Länge, Breite und Wandhöhe des Raums ein.',
      'Trage das Rollenmaß ein — meist 0,53 × 10,05 m.',
      'Gib die Zahl der Fenster und Türen an.',
      'Trage den Rapport in Zentimetern ein; bei glatter Tapete bleibt er null.',
    ],
    howItWorks: 'Wandfläche = Umfang × Höhe minus 1,5 m² je Fenster und 1,8 m² je Tür. Die Bahnenlänge wird auf ein volles Vielfaches des Rapports aufgerundet, Bahnen je Rolle ist die Rollenlänge geteilt durch diese Bahnenlänge, abgerundet. Die Zahl der Bahnen folgt aus der Wandbreite und der Rollenbreite, die Rollen aus beidem, aufgerundet.',
    example: 'Ein Raum von 4 × 3 m mit 2,7 m Wandhöhe, einem Fenster und einer Tür ergibt bei einer Rolle von 0,53 × 10,05 m eine Wandfläche von 34,5 m², 25 Bahnen und 9 Rollen.',
    faq: [
      { q: 'Warum genügt eine Rechnung nach Fläche nicht?', a: 'Weil Tapete in Bahnen verlegt wird. Aus einer Rolle von 10,05 m werden bei 2,7 m Höhe drei Bahnen, der Rest von 1,95 m ist zu kurz für eine vierte — nach Fläche gerechnet fehlten Rollen.' },
      { q: 'Was ist der Rapport und wie wirkt er?', a: 'Der Musterversatz. Jede Bahn wird auf ein volles Vielfaches des Musters verlängert, damit die Bahnen zusammenpassen. Bei 64 cm Rapport wird aus 2,7 m Bahnenlänge 3,2 m, und aus einer Rolle werden statt drei nur noch drei knappe Bahnen.' },
      { q: 'Wie werden Fenster und Türen berücksichtigt?', a: 'Nach Stückzahl mit Mittelwerten: 1,5 m² je Fenster und 1,8 m² je Tür. Weichen deine Öffnungen stark davon ab, rechne die Wandfläche von Hand und plane etwas großzügiger.' },
      { q: 'Wie viel Reserve sollte ich einplanen?', a: 'Die ausgewiesene Reserve entsteht durch das Aufrunden auf ganze Rollen. Kaufe bei Mustertapeten lieber eine Rolle mehr: Nachkäufe haben oft eine andere Chargennummer und einen sichtbar anderen Farbton.' },
      { q: 'Zählt die Decke mit?', a: 'Nein, gerechnet werden nur die Wände. Für die Decke rechne ihre Fläche gesondert und addiere die Rollen.' },
    ],
  },
  'paint-calculator': {
    longDescription: 'Führt zwei Wege zur Fläche — von den Raummaßen oder als fertige Zahl — und rechnet danach in Litern, weil Farbe in Litern verkauft wird und die Ergiebigkeit je Anstrich gilt. Die Zahl der Anstriche multipliziert den Verbrauch geradeaus: zwei Anstriche brauchen doppelt so viel wie einer, und mit einer dünneren ersten Schicht zu rechnen führt regelmäßig zu einer zu knappen Bestellung. Zwei Prozentzahlen stehen getrennt im Ergebnis: die Reserve, die du selbst setzt, und der Rest, der durch das Aufrunden auf ganze Dosen entsteht — die zweite ist oft die größere.',
    howToUse: [
      'Wähle, ob du die Fläche selbst kennst oder aus den Raummaßen rechnest.',
      'Trage die Zahl der Anstriche ein — zwei sind der Normalfall.',
      'Trage die Ergiebigkeit in Litern je Quadratmeter und Anstrich ein.',
      'Trage das Gebindevolumen ein und setze bei Bedarf eine Reserve.',
    ],
    howItWorks: 'Liter = Fläche × Ergiebigkeit × Anstriche, danach mal (1 + Reserve ÷ 100). Die Zahl der Dosen ist diese Menge geteilt durch das Gebindevolumen, aufgerundet. Beim Weg über die Raummaße ist die Fläche der Umfang mal der Höhe minus 1,5 m² je Fenster und 1,8 m² je Tür.',
    example: '40 m² in zwei Anstrichen bei 0,12 l/m² und 10 % Reserve ergeben 10,6 Liter, also 5 Dosen zu 2,5 l.',
    faq: [
      { q: 'Woher nehme ich die Ergiebigkeit?', a: 'Vom Eimer. Hersteller geben sie meist als Quadratmeter je Liter für einen Anstrich an — der Kehrwert davon gehört in dieses Feld. Auf saugendem Untergrund liegt der wirkliche Verbrauch über der Angabe.' },
      { q: 'Warum stehen zwei Prozentzahlen im Ergebnis?', a: 'Die eine ist die Reserve, die du setzt, die andere der Rest, der beim Aufrunden auf ganze Dosen übrig bleibt. Bei großen Gebinden ist die zweite oft die größere und wird gern übersehen.' },
      { q: 'Wie viele Anstriche brauche ich?', a: 'Zwei sind der Normalfall. Auf kräftigen Farben, bei starkem Farbwechsel oder auf ungrundiertem Putz sind es drei. Die Rechnung ist linear: jeder Anstrich kostet dieselbe Menge.' },
      { q: 'Ist die Grundierung enthalten?', a: 'Nein. Sie hat eine eigene Ergiebigkeit und wird gesondert gerechnet. Eine Grundierung senkt allerdings den Verbrauch der Farbe darüber.' },
      { q: 'Wie werden Fenster und Türen abgezogen?', a: 'Nach Stückzahl mit Mittelwerten von 1,5 und 1,8 m². Weichen deine Öffnungen stark ab, gib die Fläche lieber direkt ein.' },
    ],
  },
  'laminate-calculator': {
    longDescription: 'Zählt Pakete und nicht Quadratmeter, denn gekauft wird in Paketen und der Rest eines angebrochenen Pakets ist bezahlt, ob verlegt oder nicht. Die Reserve wird vor dem Aufrunden aufgeschlagen: Zuschnitt an Wänden, der Versatz der Stöße von Reihe zu Reihe und beschädigte Dielen kosten Material, das keine Bodenfläche zeigt. Ein Preis je Paket und ein Preis der Trittschalldämmung je Quadratmeter lassen sich mitgeben, weil die Dämmung fast immer zusammen mit dem Boden bestellt wird und in der Rechnung leicht vergessen geht.',
    howToUse: [
      'Trage Länge und Breite des Raums ein.',
      'Trage die Fläche eines Pakets ein — sie steht auf der Verpackung.',
      'Setze die Reserve: 5 % bei geradem Verlegen, 10–15 % diagonal.',
      'Ergänze bei Bedarf Paketpreis und Preis der Trittschalldämmung je Quadratmeter.',
    ],
    howItWorks: 'Bodenfläche = Länge × Breite. Fläche mit Reserve = Bodenfläche × (1 + Reserve ÷ 100). Pakete = diese Fläche geteilt durch die Paketfläche, aufgerundet.',
    example: 'Ein Raum von 5 × 4 m mit Paketen zu 2,13 m² und 7 % Reserve ergibt 21,4 m² und 11 Pakete.',
    faq: [
      { q: 'Wie viel Reserve ist richtig?', a: 'Beim geraden Verlegen 5 %, diagonal oder im Fischgrätmuster 10–15 %. In einem verwinkelten Raum mit vielen Nischen eher mehr, weil jeder Zuschnitt Verschnitt erzeugt.' },
      { q: 'Warum werden die Pakete aufgerundet?', a: 'Laminat wird paketweise verkauft. Ein angebrochenes Paket gibt es nicht, und ein kleiner Rest verlangt ein weiteres.' },
      { q: 'Ist die Trittschalldämmung enthalten?', a: 'Nur als Preis je Quadratmeter, wenn du ihn einträgst. Ihre Fläche entspricht der Bodenfläche; sie wird nicht in Paketen gerechnet.' },
      { q: 'Zählt der Abstand zur Wand mit?', a: 'Nein, die Dehnungsfuge von 8–10 mm liegt innerhalb der Bodenfläche und braucht kein eigenes Feld. Sie ist Teil des Zuschnitts und geht in der Reserve auf.' },
      { q: 'Taugt das auch für Vinyl oder Parkett?', a: 'Ja. Die Rechnung ist für jeden Bodenbelag dieselbe, der nach Paketfläche verkauft wird — nur Paketfläche und Reserve ändern sich.' },
    ],
  },
  'screed-calculator': {
    longDescription: 'Rechnet zwei Größen, die man leicht verwechselt: das Volumen des Estrichs in Kubikmetern und die Masse der Trockenmischung in Kilogramm. Das Volumen folgt aus Fläche und Schichtdicke, die Masse dagegen aus der Ergiebigkeit auf dem Sack, und diese Angabe gilt je Quadratmeter bei einem Zentimeter Schicht — genau so ist das Feld gemeint. Säcke werden aufgerundet, weil Trockenmischung in ganzen Säcken verkauft wird, und die Rundung geschieht nach dem Aufschlag der Reserve.',
    howToUse: [
      'Wähle, ob du Raummaße oder eine fertige Fläche eingibst.',
      'Trage die Schichtdicke in Zentimetern ein.',
      'Trage die Ergiebigkeit vom Sack ein: Kilogramm je Quadratmeter bei 1 cm Schicht.',
      'Trage das Sackgewicht ein und setze eine Reserve von 5–10 %.',
    ],
    howItWorks: 'Volumen = Fläche × Schichtdicke in Metern. Masse der Trockenmischung = Fläche × Schichtdicke in Zentimetern × Ergiebigkeit. Beides wird mit der Reserve multipliziert, und die Zahl der Säcke ist die Masse geteilt durch das Sackgewicht, aufgerundet.',
    example: 'Ein Raum von 5 × 4 m, 5 cm Schicht, 18 kg/m² je Zentimeter, Säcke zu 25 kg und 10 % Reserve ergeben 1,1 m³, 1980 kg Mischung und 80 Säcke.',
    faq: [
      { q: 'Welche Schichtdicke brauche ich?', a: 'Das hängt vom Untergrund, vom Belag darüber und davon ab, ob Rohre oder Leitungen im Estrich liegen. Die kleinste zulässige Schicht steht immer auf dem Sack und unterscheidet sich stark zwischen Zementestrich und Fließspachtel.' },
      { q: 'Woher nehme ich die Ergiebigkeit?', a: 'Von der Verpackung. Hersteller geben sie in Kilogramm je Quadratmeter bei 1 cm Schicht an, und eine Angabe für 10 mm ist dieselbe Zahl.' },
      { q: 'Warum werden die Säcke aufgerundet?', a: 'Weil Trockenmischung in ganzen Säcken verkauft wird. Auch ein kleiner Rest verlangt einen weiteren, und gerundet wird nach der Reserve.' },
      { q: 'Wie viel Reserve ist sinnvoll?', a: 'Meist 5–10 % für einen unebenen Untergrund, Verluste beim Anmischen und Material im Eimer. Auf einem stark welligen Boden lieber mehr, weil die tatsächliche mittlere Dicke über der geplanten liegt.' },
      { q: 'Rechnet das Zement und Sand getrennt?', a: 'Nein, gerechnet wird eine fertige Trockenmischung. Die Anteile von Zement und Sand hängen von der geforderten Festigkeitsklasse ab und gehören in die Planung.' },
      { q: 'Taugt das für Fließspachtel?', a: 'Ja, sofern du die Ergiebigkeit genau dieses Produkts einträgst. Die Formel ist für jede Trockenmischung dieselbe, es ändern sich nur Ergiebigkeit und kleinste Schicht.' },
    ],
  },
  'brick-calculator': {
    longDescription: 'Der Kern der Rechnung ist das Rastermaß: jeder Stein besitzt eine Fuge rechts von sich und eine über sich, die nächste Fuge gehört bereits zum nächsten Stein. Deshalb wird die Fugendicke einmal zur Länge und einmal zur Höhe gezählt und nicht zweimal — ein Stein von 250 × 65 mm belegt mit 10 mm Fuge 260 × 75 mm in der Wand. Gerechnet wird eine einschalige Wand nach ihrer sichtbaren Fläche: Verband, Wandstärke über einen Stein hinaus, Pfeiler und Ergänzungssteine brauchen eine Geometrie und nicht nur eine Fläche und werden hier bewusst nicht abgebildet.',
    howToUse: [
      'Wähle, ob du Wandmaße oder eine fertige Fläche eingibst.',
      'Trage die Fläche aller Fenster und Türen ein — sie wird abgezogen.',
      'Trage Länge und Höhe des Steins in Millimetern ein.',
      'Trage die Fugendicke ein: 10 mm im Mörtelbett, 2–3 mm im Dünnbett.',
    ],
    howItWorks: 'Mauerwerksfläche = Wandfläche minus Öffnungen. Rastermaß = (Steinlänge + Fuge) × (Steinhöhe + Fuge). Die Zahl der Steine ist die Mauerwerksfläche geteilt durch dieses Rastermaß, aufgerundet, und die Reserve wird gesondert ausgewiesen.',
    example: 'Eine Wand von 6 × 2,8 m ohne Öffnungen aus Steinen 250 × 65 mm mit 10 mm Fuge ergibt ein Rastermaß von 0,0195 m², also 862 Steine für 16,8 m² und 905 mit 5 % Reserve.',
    faq: [
      { q: 'Ist die Fuge berücksichtigt?', a: 'Ja, und zwar einmal je Richtung. Jeder Stein besitzt eine Fuge rechts und eine oben, die benachbarte gehört schon zum nächsten Stein — sie doppelt zu zählen ergäbe zu wenig Steine.' },
      { q: 'Für welche Wandstärke gilt das?', a: 'Für eine Schale, gemessen an der sichtbaren Wandfläche. Wände von einem Stein Dicke und mehr, zweischalige Wände und Wände mit Verblendschale brauchen den Verband und werden hier nicht gerechnet — rechne jede Schale einzeln.' },
      { q: 'Warum wird aufgerundet?', a: 'Einen halben Stein kann man nicht kaufen, und ein Stein weniger deckt die Fläche nicht. Geht die Rechnung genau auf, kommt kein zusätzlicher Stein hinzu.' },
      { q: 'Wie viel Reserve für Bruch und Zuschnitt?', a: 'Meist 5 bis 10 % für Transportbruch, Schnitte an Öffnungen und Ausschuss. Aufwendiges Mauerwerk mit vielen Schnitten braucht mehr; die Reserve steht in einer eigenen Zeile, damit sie sichtbar bleibt.' },
      { q: 'Gilt das auch für Porenbeton?', a: 'Ja, sofern du die tatsächlichen Maße und die Fugendicke einträgst. Im Dünnbett sind es 2–3 mm statt 10; das Modell gilt für jeden rechteckigen Stein.' },
      { q: 'Ist der Mörtelbedarf enthalten?', a: 'Nein. Gezählt werden Steine, nicht Mörtelvolumen: das hängt von Wandstärke und Verband ab, die hier nicht abgebildet sind.' },
    ],
  },
};
