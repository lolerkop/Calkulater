import type { DeDetailedContent } from './types';

export const deHousehold2Content: Partial<Record<string, DeDetailedContent>> = {
  'cooked-weight': {
    longDescription: 'Getreide nimmt Wasser auf und Fleisch verliert es, und die Umrechnung wird in beide Richtungen gebraucht, gerade weil die Kalorien auf der Packung für das trockene Erzeugnis gelten, während eine Portion gekocht gewogen wird. Daher die zweite Hälfte der Rechnung: die Kalorien je hundert Gramm des fertigen Gerichts, die bei gekochtem Reis weit unter der Hälfte der Packungsangabe liegen. Die Packungsangabe auf eine gekochte Portion anzuwenden verdoppelt die Zählung ungefähr — der häufigste Fehler beim Kalorienzählen überhaupt. Der Quellfaktor wird von Hand eingetragen, denn er hängt vom Getreide, vom Wasser und von der Kochzeit ab.',
    howToUse: [
      'Wähle, welches Gewicht du kennst: das trockene oder das gekochte.',
      'Trage dieses Gewicht in Gramm ein.',
      'Setze den Quellfaktor: rund 2,5 für Reis, 2,2 für Buchweizen, unter 1 für Fleisch.',
      'Trage die Kalorien von der Packung ein — sie gelten für das trockene Erzeugnis.',
    ],
    howItWorks: 'Kochgewicht = Trockengewicht × Faktor, und umgekehrt wird geteilt. Die Kalorien werden aus dem Trockengewicht gezählt, weil Wasser keine beisteuert, und die Kalorien je hundert Gramm gekocht folgen aus der Division durch das Kochgewicht.',
    example: '200 g trockener Reis ergeben 500 g gekocht: 700 kcal insgesamt und nur 140 kcal je 100 g des fertigen Gerichts.',
    faq: [
      { q: 'Warum sind die Kalorien gekocht niedriger als auf der Packung?', a: 'Weil Wasser keine Kalorien beisteuert, wohl aber Gewicht. Gekochter Reis trägt rund 140 kcal je hundert Gramm gegen 350 im trockenen Zustand.' },
      { q: 'Welchen Quellfaktor soll ich nehmen?', a: 'Als Anhalt: Reis und Nudeln rund 2,5, Buchweizen 2,2, Haferflocken bis 3. Fleisch liegt unter 1, weil es schrumpft. Es sind Schätzwerte, deshalb wird der Wert von Hand eingetragen.' },
      { q: 'Funktioniert das auch für Fleisch?', a: 'Ja — trage einen Faktor unter eins ein, zum Beispiel 0,65 für ein Drittel verlorenes Gewicht. Der umgekehrte Modus zeigt dann, wie viel rohes Fleisch eine Portion braucht.' },
      { q: 'Zählen Öl und Soßen mit?', a: 'Sie bringen ihre eigenen Kalorien mit und sind nicht Teil dieser Rechnung. Zähle sie gesondert und rechne sie zur Summe.' },
      { q: 'Was, wenn ich länger koche als gewöhnlich?', a: 'Erhöhe den Faktor: das Getreide nimmt mehr Wasser auf, das Kochgewicht steigt, und die Kalorien je hundert Gramm fallen.' },
    ],
  },
  'curtain-size': {
    longDescription: 'Den Stoffbedarf treibt nicht die Länge der Gardine, sondern das Faltenverhältnis — wie oft die Schienenbreite an Stoff genommen wird. Bei anderthalb liegt die Bahn nahezu flach, bei drei bildet sie eine dichte Welle, und die Meterzahl verdoppelt sich dazwischen. Die Breite in Falten wird danach durch die Stoffbreite geteilt und auf ganze Bahnen aufgerundet: eine halbe Bahn lässt sich nicht kaufen, und niemand näht eine Gardine in der Mitte zusammen.',
    howToUse: [
      'Faltenverhältnis: 1,5 ist nahezu flach, 2 ist eine gewöhnliche Falte, 2,5–3 eine dichte Welle.',
      'Die Stoffbreite kommt von der Rolle; Gardinenstoff ist oft 280–300 cm breit.',
      'Die Zugabe deckt Saum unten und Gardinenband oben ab — meist 20–30 cm.',
      'Bei großem Muster rechne den Rapport hinzu: das Angleichen frisst bis zu einem halben Meter je Bahn.',
    ],
    howItWorks: 'Breite in Falten = Schiene × Faltenverhältnis; Bahnen aufgerundet; Stoff = Bahnen × (Höhe + Zugabe).',
    example: 'Eine Schiene von 140 cm braucht bei Faltenverhältnis 2 und 280 cm Stoffbreite 2,7 m.',
    faq: [
      { q: 'Welches Faltenverhältnis soll ich wählen?', a: 'Anderthalb ergibt eine nahezu flache Bahn und passt zu leichtem Voile an Ösen; zwei ist eine gewöhnliche Falte; zweieinhalb und mehr sind eine dichte Welle für schwere Gardinen. Der Verbrauch steigt unmittelbar mit, was dies zur teuersten Entscheidung im Zuschnitt macht.' },
      { q: 'Warum werden Bahnen aufgerundet?', a: 'Eine Bahn ist ein Zuschnitt über die volle Rollenbreite, und eine halbe lässt sich nicht kaufen. Der Überschuss geht in die Seitensäume; niemand näht eine Gardine in der Mitte zusammen.' },
      { q: 'Muss ich den Rapport berücksichtigen?', a: 'Bei einfarbigem Stoff nicht. Bei großem, sich wiederholendem Muster rechne einen Rapport je Bahn hinzu: das Angleichen frisst bis zu einem halben Meter.' },
      { q: 'Welche Stoffbreite ist sparsamer?', a: 'Die, die weniger Verschnitt lässt. Ist die Gardinenhöhe kleiner als die Stoffbreite, wird der Stoff bisweilen quer verarbeitet — dann folgt der Verbrauch der Höhe statt der Breite.' },
    ],
  },
  'drip-water-leak': {
    longDescription: 'Ein einzelner Tropfen scheint nichts zu sein, und darin liegt die Falle: zehn Tropfen je Minute sind fast dreihundert Liter im Jahr, und ein gleichmäßiges Tropfen im Sekundentakt trägt mehr als einen Kubikmeter fort. Der Zähler zählt Kubikmeter und keine Tropfen, weshalb diese Zeile neben dem Geld steht. Das Tropfenvolumen wird gesondert eingetragen: es hängt vom Hahn ab und davon, ob das Wasser noch tropft oder schon läuft.',
    howToUse: [
      'Zähle die Tropfen über fünfzehn Sekunden und nimm sie mal vier — einfacher, als eine ganze Minute zu stoppen.',
      'Tropfenvolumen: rund 0,05 ml an einem gewöhnlichen Hahn, weniger durch einen Perlator, mehr an einer verschlissenen Dichtung.',
      'Läuft der Hahn als dünner durchgehender Strahl, ist das Zählen von Tropfen sinnlos — das sind schon Liter je Stunde.',
      'Nimm den Wasserpreis von deiner Abrechnung: er wird meist je Kubikmeter einschließlich Abwasser angegeben.',
    ],
    howItWorks: 'Liter am Tag = Tropfen je Minute × 1440 × Tropfenvolumen in Millilitern ÷ 1000.',
    example: 'Zehn Tropfen je Minute sind 0,72 Liter am Tag und fast 263 Liter im Jahr.',
    faq: [
      { q: 'Ist ein Tropfen je Sekunde wirklich viel?', a: 'Ja. Einer je Sekunde sind sechzig je Minute, rund dreieinhalb Liter am Tag und mehr als ein Kubikmeter im Jahr. Ein Kubikmeter ist die Einheit, in der abgerechnet wird, und er fällt bereits auf.' },
      { q: 'Warum ist das Tropfenvolumen eine Eingabe und keine Konstante?', a: 'Weil es schwankt: ein Perlator macht feinere Tropfen, eine verschlissene Dichtung größere. Der Unterschied zwischen 0,03 und 0,08 ml ändert die Antwort um beinahe das Dreifache, und das in einer Konstante zu verstecken wäre unredlich.' },
      { q: 'Ist das Abwasserentgelt enthalten?', a: 'Nur, wenn du den vollen Tarif eingetragen hast. Abrechnungen führen das Abwasser meist gesondert zu einem ähnlichen Satz, die wirklichen Kosten können deshalb doppelt so hoch sein.' },
      { q: 'Wann lohnt sich die Reparatur?', a: 'Immer: eine Dichtung kostet weniger als ein Kubikmeter Wasser. Läuft der Hahn aber, statt zu tropfen, geht der Verlust in Dutzende Kubikmeter im Jahr.' },
    ],
  },
  'electricity-usage': {
    longDescription: 'Rechnet die Leistungsangabe eines Geräts einmal in Kilowatt um und multipliziert sie danach mit den Betriebsstunden und den gezählten Tagen. Watt und Kilowattstunden lassen sich leicht verwechseln — das eine ist Leistung, das andere über die Zeit angesammelte Energie —, deshalb geschieht die Umrechnung in einem sichtbaren Schritt. Trage deinen Tarif ein, und die Kosten folgen.',
    howToUse: [
      'Trage die Leistung des Geräts vom Typenschild ein.',
      'Trage ein, wie viele Stunden am Tag es läuft und über wie viele Tage.',
      'Ergänze deinen Tarif für die Kosten.',
    ],
    howItWorks: 'kWh = Leistung in Kilowatt × Stunden am Tag × Tage; die Kosten sind diese Zahl mal dem Tarif.',
    example: 'Ein Heizgerät mit 2000 W über 3 Stunden am Tag an 30 Tagen verbraucht 2 × 3 × 30 = 180 kWh.',
    faq: [
      { q: 'Wo finde ich meinen Tarif?', a: 'Auf deiner Stromabrechnung, als Preis je Kilowattstunde. Zweitarifzähler sind nicht abgebildet, rechne die Tarifzeiten also getrennt.' },
      { q: 'Ist die Leistung vom Typenschild das, was tatsächlich fließt?', a: 'Es ist der Nennwert im Höchstfall. Alles, was taktet — ein Kühlschrank oder ein thermostatgeregeltes Heizgerät —, verbraucht weniger, weil es nicht durchgehend läuft.' },
      { q: 'Was ist der Unterschied zwischen Watt und Kilowattstunde?', a: 'Watt ist eine Leistung; eine Kilowattstunde ist die Energie, die diese Leistung über die Zeit ansammelt. Ein Gerät mit 1000 W verbraucht in einer Stunde genau 1 kWh.' },
      { q: 'Ist der Tarif nötig?', a: 'Nein. Ohne ihn bekommst du weiterhin den Verbrauch in Kilowattstunden, nur ohne die Zeile mit den Kosten.' },
    ],
  },
  'generator-fuel': {
    longDescription: 'Ermittelt den Kraftstoffverbrauch eines Stromerzeugers aus Last, spezifischem Verbrauch und Laufzeit. Der spezifische Verbrauch bleibt ein Feld: 0,3 Liter je Kilowattstunde ist eine übliche Dieselmaschine bei rund drei Vierteln ihrer Nennleistung, aber Benziner sind merklich durstiger, und jede Maschine wird bei geringer Last schlechter. Es ist eine Annahme und keine Norm, und sie bleibt sichtbar. Der Kraftstoffpreis ist freiwillig: ohne ihn erscheint nur die Menge, mit ihm kommen die Kosten der Schicht hinzu.',
    howToUse: [
      'Trage die tatsächliche Last in Kilowatt ein, nicht die Nennleistung des Erzeugers.',
      'Gib den spezifischen Verbrauch aus dem Datenblatt der Maschine an.',
      'Setze die Laufzeit und, wenn du sie brauchst, den Kraftstoffpreis.',
    ],
    howItWorks: 'Kraftstoff = Last × spezifischer Verbrauch × Zeit. Der spezifische Verbrauch sagt, wie viele Liter die Maschine je erzeugter Kilowattstunde verbrennt; er hängt von der Bauart des Motors und davon ab, wie stark der Erzeuger belastet wird.',
    example: 'Ein Stromerzeuger unter 5 kW Last bei 0,3 l/kWh verbrennt über acht Stunden 12 Liter — bei 1,60 € je Liter also 19,20 €.',
    faq: [
      { q: 'Woher kommt der spezifische Verbrauch?', a: 'Aus dem Datenblatt des Erzeugers: Hersteller geben ihn je Kilowattstunde an oder nennen den Verbrauch bei 50, 75 und 100 % Last. Der Vorgabewert ist eine übliche Dieselmaschine und lohnt es, durch deinen eigenen ersetzt zu werden.' },
      { q: 'Trage ich die Last oder die Nennleistung ein?', a: 'Die tatsächliche Last. Ein Erzeuger bei halber Leistung verbrennt weniger Kraftstoff je Stunde, aber mehr je Kilowattstunde, der spezifische Verbrauch sollte also ebenfalls zu deinem Betrieb passen.' },
      { q: 'Warum ist geringe Last unwirtschaftlich?', a: 'Der Motor wendet einen Teil des Kraftstoffs allein dafür auf, seine Drehzahl zu halten. Bei einem Viertel Last kann der spezifische Verbrauch das Anderthalb- bis Zweifache des Nennwerts erreichen.' },
      { q: 'Sind Warmlaufen und Leerlauf enthalten?', a: 'Nein. Gezählt wird allein die eingetragene Zeit unter Last; rechne den Leerlauf gesondert dazu oder verlängere die Zeit.' },
    ],
  },
  'heating-power': {
    longDescription: 'Legt die Heizung nach dem Volumen aus und nicht nach der Grundfläche. Bei 3,2 m Raumhöhe braucht derselbe Raum fast ein Fünftel mehr Wärme als bei 2,7 m, und die vertraute Faustregel „hundert Watt je Quadratmeter“ verliert diesen Unterschied vollständig. Der spezifische Bedarf wird von Hand eingetragen, weil er von Dämmung, Gegend und Alter des Gebäudes abhängt: die übliche Spanne von 30 bis 50 Watt je Kubikmeter bedeutet einen anderthalbfachen Unterschied in der Endzahl, kein einzelner Wert lässt sich also als allgemeine Norm ausgeben. Der Zuschlag für Fenster kommt gesondert hinzu — der Wärmeverlust durch Verglasung skaliert nicht mit dem Raumvolumen.',
    howToUse: [
      'Trage Grundfläche und Raumhöhe ein — die Rechnung arbeitet mit dem Volumen.',
      'Setze den spezifischen Bedarf: rund 30 W/m³ für ein gedämmtes Haus, 40 für ein gewöhnliches, 50 für ein kaltes.',
      'Trage die Zahl der Fenster ein — jedes bringt hundert Watt hinzu.',
      'Vergleiche die Kilowatt mit der Nennleistung des Geräts, das du wählst.',
    ],
    howItWorks: 'Volumen = Grundfläche × Raumhöhe. Leistung = Volumen × spezifischer Bedarf, plus hundert Watt je Fenster. Das Ergebnis erscheint in Kilowatt und in Watt.',
    example: 'Ein Raum von 20 m² mit 2,7 m Höhe und einem Fenster braucht bei 40 W/m³ 2,26 kW.',
    faq: [
      { q: 'Warum vom Volumen und nicht von der Grundfläche aus?', a: 'Weil Luft erwärmt wird, und wie viel davon da ist, hängt an der Raumhöhe. Bei 3,2 m statt 2,7 m braucht derselbe Raum fast ein Fünftel mehr Wärme.' },
      { q: 'Welchen spezifischen Bedarf soll ich wählen?', a: 'Als Anhalt: 30 W/m³ für ein gut gedämmtes Haus, 40 für eine übliche Wohnung, 50 für ein Eckzimmer oder ein ungedämmtes Haus. Es ist eine Schätzung und keine Norm, deshalb wird der Wert von Hand eingetragen.' },
      { q: 'Woher kommen die hundert Watt je Fenster?', a: 'Es ist ein verbreiteter Zuschlag für den Wärmeverlust durch Verglasung. Er kommt gesondert hinzu, weil er an der Zahl der Fenster hängt und nicht am Raumvolumen.' },
      { q: 'Gilt das auch für eine Fußbodenheizung?', a: 'Es liefert die nötige Wärmeleistung, gleich mit welchem Verfahren. Verlegeplan und Rohrabstand werden gesondert berechnet.' },
      { q: 'Soll ich eine Reserve einplanen?', a: 'Meist 10–20 % obendrauf, damit das Gerät nicht dauerhaft an seiner Grenze läuft. Erhöhe den spezifischen Bedarf, wenn du diese Reserve eingebaut haben willst.' },
    ],
  },
};
