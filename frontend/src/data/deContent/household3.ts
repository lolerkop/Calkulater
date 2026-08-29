import type { DeDetailedContent } from './types';

export const deHousehold3Content: Partial<Record<string, DeDetailedContent>> = {
  'lighting': {
    longDescription: 'Macht aus einer Raumfläche eine Lumenzahl und eine Zahl von Leuchtmitteln. Die angestrebte Beleuchtungsstärke ist eine änderbare, sichtbare Annahme und keine versteckte Konstante: für ein Wohnzimmer nimmt man gewöhnlich rund 150 Lux, für einen Schreibtisch das Dreifache, und die Normwerte unterscheiden sich von Land zu Land. Sie in ein Feld zu setzen zeigt, worauf die Antwort gebaut ist, und lässt dich sie ändern. Der Wartungsfaktor berücksichtigt Verschmutzung und Alterung — eine Leuchte wird über ihre Lebensdauer dunkler, und durch diesen Faktor zu teilen plant das im Voraus ein. Die Leuchtmittel werden aufgerundet, denn ein halbes gibt es nicht.',
    howToUse: [
      'Trage die Grundfläche des Raumes ein.',
      'Wähle die Beleuchtungsstärke, die du anstrebst.',
      'Trage den Lichtstrom eines Leuchtmittels in Lumen ein — er steht auf der Verpackung.',
      'Passe den Wartungsfaktor an, wenn der Raum staubig ist oder die Leuchten geschlossen sind.',
    ],
    howItWorks: 'Die nötigen Lumen sind die Fläche mal der angestrebten Beleuchtungsstärke, geteilt durch den Wartungsfaktor. Die Zahl der Leuchtmittel ist dieser Wert geteilt durch den Lichtstrom eines Leuchtmittels, aufgerundet.',
    example: '18 m² bei 150 lx mit Leuchtmitteln zu 800 lm und einem Faktor von 0,8 brauchen 3375 lm, also fünf Leuchtmittel.',
    faq: [
      { q: 'Welche Beleuchtungsstärke soll ich anstreben?', a: 'Als grober Anhalt: Schlafzimmer rund 100–150 lx, Wohnzimmer 150–200, Küchenarbeitsfläche 300–500, Schreibtisch 500. Deine örtliche Norm kann andere Zahlen setzen, deshalb ist der Wert änderbar.' },
      { q: 'Wozu der Wartungsfaktor?', a: 'Staub auf der Leuchte und Alterung des Leuchtmittels mindern den Lichtstrom mit der Zeit. Auf 0,8 auszulegen heißt, dass der Raum sein Ziel auch dann noch erreicht, wenn die Leuchtmittel nicht mehr neu sind.' },
      { q: 'Spielt die Raumhöhe eine Rolle?', a: 'In einer vollständigen Lichtplanung ja — eine hohe Decke verteilt dieselben Lumen über einen größeren Kegel. Dieser Rechner nutzt die einfachere Flächenregel, die für gewöhnliche Räume nah genug liegt.' },
      { q: 'Spielen Wand- und Deckenfarben eine Rolle?', a: 'Ja. Ein dunkler Raum schluckt Licht, das ein weißer zurückwirft. Diese Wirkung gehört zum Raumwirkungsgrad, den eine ausführliche Planung berücksichtigt und diese nicht.' },
      { q: 'Kann ich verschiedene Leuchtmittel mischen?', a: 'Trage die Summe ein, die du je Leuchte vorsiehst, oder ermittle zuerst die Lumen und wähle Leuchten, die zusammen darauf kommen.' },
    ],
  },
  'luggage-linear': {
    longDescription: 'Fluggesellschaften setzen die Freigrenze als Summe der Seiten und nicht als drei einzelne Grenzen, ein Koffer mit 78×50×30 hält also dieselben 158 Zentimeter ein wie einer mit 55×50×53, so verschieden sie auch aussehen. Daraus folgt die praktische Lehre: kürze die längste Seite, denn alle drei zählen gleich in die Summe. Die Zeile in Zoll ist für amerikanische Gesellschaften da, die dieselbe Freigrenze als 62 linear inches ausweisen.',
    howToUse: [
      'Miss bis zu den äußersten Punkten: Rollen, Griffe und ausgebeulte Taschen zählen mit.',
      'Übliche Freigrenzen: 158 cm für aufgegebenes Gepäck, 115 cm für Handgepäck.',
      'Eine negative Reserve heißt Übergepäck — es wird gesondert berechnet.',
      'Der Rauminhalt hat mit der Freigrenze nichts zu tun und dient dem Vergleich von Koffern untereinander.',
    ],
    howItWorks: 'Summe = Länge + Breite + Höhe; Reserve = Grenze − Summe.',
    example: 'Ein Koffer mit 55×40×23 cm ergibt 118 cm gegen eine Grenze von 158 — 40 Zentimeter Reserve.',
    faq: [
      { q: 'Warum eine Summe und nicht jede Seite einzeln?', a: 'Das passt der Fluggesellschaft: eine Zahl begrenzt sowohl den Rauminhalt als auch die Art, wie das Stück im Frachtraum verstaut wird. Ein schmaler, langer Koffer kann deshalb durchfallen, während ein klobigerer, gleichmäßig geformter durchkommt.' },
      { q: 'Zählen Rollen und Griff mit?', a: 'Ja, gemessen wird bis zu den äußersten Punkten. Deshalb misst ein als „55 cm“ angebotener Koffer mit dem Maßband oft 58–60, und deshalb bleiben Leute am Schalter hängen.' },
      { q: 'Was sind 62 linear inches?', a: 'Dieselbe Freigrenze von 158 Zentimetern in Zoll geschrieben: so weisen amerikanische Gesellschaften sie aus. Die Zeile in Zoll gibt eine Zahl, die sich unmittelbar mit ihrer Tabelle vergleichen lässt.' },
      { q: 'Was tun bei Überschreitung?', a: 'Umpacken ist am billigsten — kürze die längste Seite, wobei alle drei gleich zählen, 5 cm weniger in der Länge helfen also genauso viel wie 5 cm in der Höhe. Sonst geht das Stück als Übergepäck.' },
    ],
  },
  'pet-age': {
    longDescription: 'Die alte Regel, mit sieben zu multiplizieren, ist falsch, und am stärksten falsch ist sie am Anfang. Ein Haustier legt im ersten Jahr rund fünfzehn Menschenjahre zurück und im zweiten neun weitere; erst danach beruhigt sich der jährliche Zuwachs. Dann übernimmt die Größe: große Hunde altern schneller als kleine, und der Abstand öffnet sich in den späteren Jahren und nicht in den Welpenjahren, weshalb ein siebenjähriger Retriever und ein siebenjähriger Terrier nicht auf derselben Lebensstufe stehen. Die Tabelle hinter diesem Rechner folgt dieser Gestalt statt einem einzelnen Faktor.',
    howToUse: [
      'Wähle die Art und bei Hunden die Größengruppe.',
      'Trage das Alter des Tieres in Jahren ein.',
      'Gebrochene Jahre werden bei Tieren unter zwei angenommen.',
      'Lies den jährlichen Zuwachs ab, um weiter vorauszurechnen.',
    ],
    howItWorks: 'Das erste Jahr zählt als fünfzehn Menschenjahre, und das zweite bringt neun weitere. Jedes Jahr danach bringt einen festen Betrag, der von Art und Größe abhängt.',
    example: 'Eine siebenjährige Katze ist rund 44 in Menschenjahren: 15 + 9 + fünf weitere Jahre zu je vier.',
    faq: [
      { q: 'Warum ist das Multiplizieren mit sieben falsch?', a: 'Es setzt die ersten beiden Jahre stark zu niedrig und die späteren zu hoch an. Ein einjähriger Hund steht einem fünfzehnjährigen Menschen näher als einem siebenjährigen — er ist bereits nahe am Erwachsensein.' },
      { q: 'Warum altern große Hunde schneller?', a: 'Größere Rassen haben eine kürzere Lebenserwartung, und der Unterschied zeigt sich im jährlichen Zuwachs und nicht in der Welpenzeit. Ein großer Hund gewinnt rund sieben Menschenjahre im Jahr gegen vier bei einem kleinen.' },
      { q: 'Wohin gehören mittelgroße Hunde?', a: 'Zwischen die beiden Gruppen. Für eine mittelgroße Rasse von zwölf bis zwanzig Kilogramm ist die Tabelle für kleine Hunde meist die nähere der beiden Möglichkeiten.' },
      { q: 'Wie genau ist diese Umrechnung?', a: 'Es ist eine Übereinkunft und keine Messung. Rasse, Gesundheit und Haltung verschieben das wirkliche Bild erheblich, und die Zahl taugt am besten als grobe Lebensstufe und nicht als Tatsache.' },
    ],
  },
  'pet-food': {
    longDescription: 'Der Energiebedarf wächst nicht geradlinig mit dem Körpergewicht. Er folgt dem Gewicht hoch drei Viertel, weshalb eine Katze mit vier Kilogramm nicht ein Viertel dessen frisst, was ein Hund mit sechzehn frisst — sie frisst näher an einem Drittel. Nach einer linearen Regel zu füttern überfüttert kleine Tiere und unterfüttert große, regelmäßig und jedes Mal in dieselbe Richtung. Dieser Rechner geht vom Ruheumsatz aus, wendet einen Faktor für Alter, Bewegung und Kastration an und rechnet das Ergebnis über den auf der Packung angegebenen Energiegehalt in Gramm um.',
    howToUse: [
      'Trage das derzeitige Körpergewicht des Tieres in Kilogramm ein.',
      'Wähle einen Faktor: 1,0 für Ruhe, 1,2–1,4 für ein kastriertes erwachsenes Tier, 1,6–1,8 für ein bewegungsfreudiges.',
      'Trage den Energiegehalt des Futters je 100 g von der Verpackung ein.',
      'Teile die Tagesration auf die Zahl der Mahlzeiten auf, die du fütterst.',
    ],
    howItWorks: 'Ruheumsatz RER = 70 × Gewicht^0,75 kcal am Tag. Mit dem Faktor multipliziert ergibt sich der Tagesbedarf, der über den Energiegehalt des Futters in Gramm umgerechnet wird.',
    example: 'Ein Hund mit 22 kg braucht bei einem Faktor von 1,6 und Futter mit 350 kcal/100 g rund 325 g am Tag.',
    faq: [
      { q: 'Warum hoch 0,75 und nicht schlicht das Gewicht?', a: 'Weil der Stoffwechsel langsamer wächst als die Körpermasse. Es ist ein bei Säugetieren gesicherter Zusammenhang, und ihn außer Acht zu lassen macht lineare Fütterungstabellen an beiden Enden der Größenskala falsch.' },
      { q: 'Welchen Faktor soll ich nehmen?', a: 'Rund 1,0 für ein ruhendes oder übergewichtiges Tier, 1,2–1,4 für ein kastriertes erwachsenes, 1,6–1,8 für ein bewegungsfreudiges, und mehr bei Wachstum, Trächtigkeit oder Arbeitshunden. Es ist die unsicherste Eingabe hier.' },
      { q: 'Soll ich nach dem Zielgewicht oder dem derzeitigen füttern?', a: 'Zum Abnehmen rechne vom Zielgewicht und nicht vom derzeitigen. Für das Gewicht zu füttern, das du hast, hält das Gewicht, das du hast.' },
      { q: 'Ändert Nassfutter die Rechnung?', a: 'Nur über den Energiegehalt, der bei Nassfutter viel niedriger liegt — oft 70–100 kcal je 100 g gegen 350–400 bei Trockenfutter. Die Grammzahl fällt für dieselbe Energie mehrfach größer aus.' },
    ],
  },
  'picture-frame-mat': {
    longDescription: 'Der untere Rand des Passepartouts wird breiter gemacht als die übrigen — eine alte Rahmenregel mit einem optischen Grund: bei geometrisch gleichen Rändern liest das Auge den unteren als schmaler, und die Arbeit scheint durchzuhängen. Ein bis zwei zusätzliche Zentimeter gleichen die Wahrnehmung aus. Die Beschwerung des unteren Randes hat deshalb ein eigenes Feld: ohne sie ergäbe die Rechnung einen formal richtigen und optisch falschen Rahmen.',
    howToUse: [
      'Nimm die sichtbare Größe des Fotos — das, was nach der Überdeckung im Ausschnitt bleibt.',
      'Die Ränder sind meist ein Fünftel bis ein Drittel der kürzeren Seite der Arbeit.',
      'Beschwere den unteren Rand um ein bis zwei Zentimeter; bei gleichen Rändern scheint die Arbeit durchzuhängen.',
      'Die Rahmengröße ist das Außenmaß des Passepartouts: darauf wird die Leiste zugeschnitten.',
    ],
    howItWorks: 'Rahmenbreite = Foto + 2 Ränder; Höhe = Foto + 2 Ränder + Beschwerung.',
    example: 'Ein Foto von 20×30 braucht bei 5 cm Rand und 1 cm Beschwerung einen Rahmen von 30×41 cm.',
    faq: [
      { q: 'Warum ist der untere Rand breiter?', a: 'Wegen einer optischen Täuschung: bei geometrisch gleichen Rändern liest das Auge den unteren als schmaler, und die Anordnung scheint nach unten zu rutschen. Ein bis zwei Zentimeter gleichen das aus — die Regel ist älter als die Fotografie und stammt aus der Malerei.' },
      { q: 'Wie breit sollen die Ränder sein?', a: 'Meist ein Fünftel bis ein Drittel der kürzeren Seite der Arbeit. Schmale Ränder lassen die Rahmung gedrängt wirken; sehr breite machen das Passepartout zum Hauptelement.' },
      { q: 'Muss ich die Überdeckung berücksichtigen?', a: 'Ja — der Ausschnitt wird ein paar Millimeter kleiner geschnitten als der Abzug, sonst fällt er hindurch. Trage hier die SICHTBARE Größe ein: das, was im Ausschnitt bleibt.' },
      { q: 'Funktioniert das auch für Leinwand?', a: 'Eine aufgespannte Leinwand wird meist ohne Passepartout gerahmt. Willst du aber einen Rahmen mit Schattenfuge, ist die Rechnung dieselbe — das Feld für den Rand wird zur Breite dieser Fuge.' },
    ],
  },
  'pool-fill-time': {
    longDescription: 'Nimmt das Volumen — unmittelbar angegeben oder aus den Maßen eines rechteckigen oder runden Beckens —, rechnet es in Liter um und teilt es durch den Durchfluss. Unterstützt werden genau drei Formen, die, die tatsächlich vorkommen; ein beliebig geformtes Becken passt hier nicht hinein, und der Rechner tut nicht so, als wäre es anders.',
    howToUse: [
      'Wähle, ob du das Volumen oder die Maße kennst.',
      'Trage die Zahlen für diese Form ein.',
      'Trage den Durchfluss ein und wähle seine Einheit.',
    ],
    howItWorks: 'Das Volumen in Kubikmetern wird durch Multiplikation mit tausend zu Litern; die Zeit ist das geteilt durch den Durchfluss je Minute.',
    example: 'Ein Becken mit 32 m³ braucht bei 20 Litern je Minute 1600 Minuten, also rund 26,7 Stunden.',
    faq: [
      { q: 'Woher bekomme ich den Durchfluss?', a: 'Füll einen Eimer bekannten Inhalts und stopp die Zeit. Ein Gartenschlauch und ein Hausanschluss unterscheiden sich um ein Mehrfaches, Messen schlägt also Schätzen.' },
      { q: 'Soll ich die Tiefe messen, bis zu der ich tatsächlich fülle?', a: 'Ja. Becken werden selten bis zum Rand gefüllt, und der Wasserstand bestimmt das Volumen.' },
      { q: 'Werden andere Formen unterstützt?', a: 'Nein, nur ein bekanntes Volumen, ein Rechteck und ein Kreis. Ein ovales oder frei geformtes Becken bräuchte eine Geometrie, die der Rechner nicht hat.' },
      { q: 'Bleibt der Durchfluss in der Praxis gleich?', a: 'Selten. Der Druck fällt, wenn anderswo mehr abgenommen wird, nimm das Ergebnis also als untere Schranke für die Zeit.' },
    ],
  },
};
