import type { DeDetailedContent } from './types';

export const deHousehold4Content: Partial<Record<string, DeDetailedContent>> = {
  'price-per-unit': {
    longDescription: 'Bringt einen Packungspreis auf einen Preis je Einheit — je Kilogramm, Liter oder Stück — und vergleicht zwei Angebote. Es ist die Rechnung, die Geschäfte einem schwer machen: 1,50 € für 500 g und 2,60 € für ein Kilogramm sehen vergleichbar aus, dabei ist das erste um 15 % teurer. Der Vergleich zeigt beide Grundpreise und den Mehrpreis und nicht nur den Sieger.',
    howToUse: [
      'Wähle die Einheit, in der die Ware verkauft wird.',
      'Trage den Packungspreis und den Inhalt ein.',
      'Wechsle in den Modus mit zwei Packungen, um zu vergleichen.',
    ],
    howItWorks: 'Preis je Einheit = Packungspreis ÷ Inhalt der Packung. Beim Vergleich werden beide Grundpreise gleich berechnet, und der Unterschied erscheint als Mehrpreis je Einheit.',
    example: '1,50 € für 500 g sind 3,00 € je kg — teurer als eine Kilogrammpackung zu 2,60 €.',
    faq: [
      { q: 'Warum Preise auf eine Einheit bringen?', a: 'Weil Packungen selten gleich groß sind und sich nicht auf einen Blick vergleichen lassen. Auf ein Kilogramm oder einen Liter gebracht werden die Preise vergleichbar.' },
      { q: 'Was gehört ins Feld für den Inhalt?', a: 'Die Menge in der oben gewählten Einheit: rechne Gramm vorher in Kilogramm und Milliliter in Liter um.' },
      { q: 'Was zeigt der Mehrpreis?', a: 'Um wie viel eine Einheit in der ungünstigeren Packung teurer ist. Multipliziere ihn mit der Menge, die du brauchst, um den vollen Mehrpreis zu sehen.' },
      { q: 'Sind Rabatte enthalten?', a: 'Nein — trage den Endpreis ein, den du an der Kasse zahlst, mit bereits abgezogenem Rabatt.' },
    ],
  },
  'print-3d-cost': {
    longDescription: 'Ermittelt, was ein gedrucktes Teil tatsächlich kostet. Das Filament wird nach Gramm und nicht nach Spule berechnet: der Preis je Gramm folgt aus Spulenpreis und Spulengewicht, ein Teil kostet also genau, was es wiegt. Der Strom folgt aus der Leistungsaufnahme des Druckers und der Druckzeit, der Verschleiß wird je Stunde eingetragen, und beides wird von Hand gesetzt, weil es vom jeweiligen Drucker und Tarif abhängt. Ein Aufschlag gilt für die gesamten Kosten und nicht allein für das Filament — sonst deckte er nicht die Stunden ab, die der Drucker belegt ist.',
    howToUse: [
      'Trage das Gewicht des Teils ein — der Slicer nennt es neben der Druckzeit.',
      'Trage Preis und Gewicht der Spule ein, damit der Rechner den Preis je Gramm herleiten kann.',
      'Setze die Leistungsaufnahme des Druckers und deinen Preis je Kilowattstunde.',
      'Ergänze Verschleiß und Aufschlag, wenn du einem Kunden einen Preis nennst.',
    ],
    howItWorks: 'Filament = Gewicht des Teils × (Spulenpreis ÷ Spulengewicht). Strom = Leistung ÷ 1000 × Stunden × Preis je kWh. Verschleiß = Stundensatz × Stunden. Ein Aufschlag gilt für ihre Summe.',
    example: 'Ein Teil von 85 g aus einer Spule zu 25 € je Kilogramm, über 6,5 Stunden gedruckt, kostet mit Strom 2,44 €.',
    faq: [
      { q: 'Warum wird der Preis je Gramm nicht unmittelbar eingetragen?', a: 'Weil das Etikett stets den Spulenpreis nennt. Der Rechner teilt ihn selbst durch das Spulengewicht, du kannst dich also beim Umrechnen von Kilogramm in Gramm nicht vertun.' },
      { q: 'Welche Leistung des Druckers soll ich eintragen?', a: 'Die mittlere Aufnahme über einen Druck, nicht die Spitze. Ein FDM-Drucker für den Schreibtisch mit beheiztem Bett liegt meist bei 100–150 W; der genaue Wert steht im Datenblatt.' },
      { q: 'Was zählt als Verschleiß?', a: 'Düse, Riemen und Druckbett geteilt durch ihre Lebensdauer in Stunden. Das ist deine eigene Schätzung, deshalb ist das Feld freiwillig und in der Vorgabe leer.' },
      { q: 'Gilt der Aufschlag nur für das Filament?', a: 'Nein — für die gesamten Kosten, Strom und Verschleiß eingeschlossen. Ein Aufschlag allein auf das Filament deckte die Stunden nicht ab, die der Drucker belegt ist.' },
      { q: 'Sind fehlgeschlagene Drucke enthalten?', a: 'Nein. Gelingt ein Teil erst im zweiten Anlauf, trage das Gesamtgewicht und die Gesamtzeit aller Versuche ein.' },
    ],
  },
  'rainfall-volume': {
    longDescription: 'Die Rechnung ist hier ungewöhnlich bequem: ein Quadratmeter unter einem Millimeter Regen ergibt genau einen Liter. Ein Dach von sechs mal zehn Metern sammelt aus einem gewöhnlichen Guss von fünfundzwanzig Millimetern also mehr als eine Tonne Wasser — eine Zahl, die meist überrascht. Etwas Wasser geht beim Benetzen des Daches und durch Verdunstung verloren, und der Abflussbeiwert setzt diesen Anteil: rund neun Zehntel bei Blech und Ziegel, merklich weniger bei rauen Oberflächen.',
    howToUse: [
      'Nimm die Fläche im Grundriss — den Fußabdruck des Daches auf dem Boden, nicht die Schrägfläche: der Regen fällt senkrecht.',
      'Nimm die Niederschlagshöhe in Millimetern aus einer Vorhersage oder einem Bericht: 25 mm sind ein kräftiger Schauer.',
      'Abflussbeiwert: rund 0,9 bei Blech und Ziegel, 0,8 bei Schiefer, 0,7 bei rauen Oberflächen.',
      'Die Tonnen werden aufgerundet: eine halbe Tonne lässt sich nicht aufstellen.',
    ],
    howItWorks: 'Menge = Fläche × Höhe × Abflussbeiwert; ein Quadratmeter unter einem Millimeter Regen ergibt genau einen Liter.',
    example: 'Ein Dach von 60 m² sammelt bei 25 mm Regen und einem Beiwert von 0,9 genau 1350 Liter.',
    faq: [
      { q: 'Warum die Fläche im Grundriss und nicht die Schräge?', a: 'Regen fällt senkrecht, es zählt also der Fußabdruck des Daches. Ein steiles Satteldach hat eine größere Oberfläche, fängt aber genau so viel Wasser wie seine Projektion.' },
      { q: 'Was ist der Abflussbeiwert?', a: 'Der Anteil des gefallenen Wassers, der die Sammelstelle erreicht. Ein Teil bleibt auf dem Dach, benetzt es und verdunstet. Ein glattes Blechdach verliert rund ein Zehntel; raue Oberflächen verlieren merklich mehr.' },
      { q: 'Wie viel bringt gewöhnlicher Regen?', a: 'Leichter Regen sind 2–5 mm, mäßiger 5–15, starker 15–30, ein Guss mehr als 30. Von einem Dach mit sechzig Quadratmetern bringt ein kräftiger Schauer über eine Tonne.' },
      { q: 'Ist das Wasser trinkbar?', a: 'Unbehandelt nicht: Staub, Vogelkot und Dachteilchen werden abgewaschen. Zum Gießen und für den Hausgebrauch ist es sofort geeignet, zum Trinken braucht es Filterung und Entkeimung.' },
    ],
  },
  'recipe-cost': {
    longDescription: 'Baut die Kosten eines Gerichts aus einer Liste von Zutaten auf und teilt sie durch die Zahl der Portionen. Jede Zeile besteht aus einem Namen, einer Menge und einem Einheitspreis, und die letzten beiden Zahlen werden als Menge und Preis gelesen, während alles davor als Name zählt — „Weizenmehl Type 405 0.5 1.20“ wird also auch mit Leerzeichen im Namen richtig verstanden. Eine Zeile ohne Preis wird abgewiesen statt mit einer Null gefüllt: ein eingesetzter Preis setzte die Kosten still zu niedrig an, und der Fehler sähe plausibel aus. Die Tabelle zeigt, was jede Zutat beiträgt, und meist stellt sich heraus, dass eine von ihnen fast die ganzen Kosten trägt.',
    howToUse: [
      'Trage die Zutaten je Zeile ein.',
      'In jeder Zeile sind die letzten beiden Zahlen die Menge und der Einheitspreis.',
      'Der Name darf mehrere Wörter haben: „Weizenmehl Type 405 0.5 1.20“.',
      'Trage ein, wie viele Portionen das Rezept ergibt.',
    ],
    howItWorks: 'Jede Zeile kostet Menge × Preis. Ihre Summe wird durch die Zahl der Portionen geteilt. Menge und Preis kommen aus den letzten beiden Zahlen der Zeile; der Name ist alles davor.',
    example: 'Drei Zutaten mit zusammen 4,42 € ergeben bei vier Portionen 1,11 € je Portion.',
    faq: [
      { q: 'In welchen Einheiten steht die Menge?', a: 'In beliebigen, solange der Preis sich auf dieselbe Einheit bezieht. Gilt der Preis je Kilogramm, trage die Menge in Kilogramm ein: 0,5 statt 500.' },
      { q: 'Was, wenn der Name Leerzeichen enthält?', a: 'Nichts Besonderes: die letzten beiden Zahlen werden als Menge und Preis gelesen, und alles davor ist der Name. „Weizenmehl Type 405 0.5 1.20“ wird richtig verstanden.' },
      { q: 'Warum wird eine Zeile ohne Preis abgewiesen?', a: 'Weil ein eingesetzter Preis die Kosten still zu niedrig ansetzte. Die Rechnung anzuhalten ist besser, als eine plausible und falsche Zahl zu zeigen.' },
      { q: 'Sind Gas, Strom und Arbeit enthalten?', a: 'Nein — nur die Kosten der Lebensmittel. Die Energie zum Kochen ist ein eigener Rechner.' },
      { q: 'Wie berücksichtige ich Gewürze in winzigen Mengen?', a: 'Trage die wirkliche Menge ein, die das Rezept braucht: 0,005 kg Salz zum Kilopreis ergeben einen richtigen, wenn auch kleinen Beitrag.' },
    ],
  },
  'recipe-scale': {
    longDescription: 'Nimmt das Verhältnis der benötigten Portionen zu den Portionen des Rezepts und multipliziert jede Menge damit. Eine Rezeptzeile ist ein Name gefolgt von einer einzelnen Zahl, „Weizenmehl Type 405 500“ wird also auch mit Leerzeichen im Namen richtig verstanden. Der Faktor steht mit Absicht in einer eigenen Zeile: um wie viel größer die Menge wird, behält man leichter im Kopf als vier neue Gewichte, und er sagt dir auf einen Blick, ob der Teig noch in die Form passt. Das Umrechnen ist linear, und darin liegt seine Grenze — Salz, Hefe und Gewürze werden im selben Verhältnis mitgerechnet wie das Mehl, obwohl in der Praxis oft weniger genommen wird.',
    howToUse: [
      'Trage die Zutaten je Zeile ein.',
      'In jeder Zeile ist die letzte Zahl die Menge.',
      'Trage ein, wie viele Portionen das Rezept ergibt.',
      'Trage ein, wie viele Portionen du brauchst.',
    ],
    howItWorks: 'Faktor = benötigte Portionen ÷ Portionen im Rezept. Jede Menge wird damit multipliziert. Die Einheiten spielen keine Rolle: der Faktor ist einheitenlos, Gramm bleiben Gramm und Stück bleiben Stück.',
    example: 'Ein Rezept für 4 Portionen auf 6 umgerechnet ergibt den Faktor 1,5 und macht aus 837 g Zutaten 1255,5 g.',
    faq: [
      { q: 'Spielt es eine Rolle, in welchen Einheiten die Zutaten stehen?', a: 'Nein — der Faktor ist einheitenlos, die Einheiten ändern sich also nie. Gramm bleiben Gramm, Milliliter bleiben Milliliter, Stück bleiben Stück, und sie in einer Liste zu mischen braucht keine Sonderbehandlung.' },
      { q: 'Lässt sich ein Rezept auch verkleinern?', a: 'Ja. Brauchst du weniger Portionen, als das Rezept ergibt, kommt der Faktor unter eins heraus, und jede Menge schrumpft im selben Verhältnis.' },
      { q: 'Warum werden Hefe und Salz genauso mitgerechnet wie das Mehl?', a: 'Weil das Umrechnen linear ist. In der Praxis nehmen Bäcker bei einer viel größeren Menge oft etwas weniger Hefe und halten das Salz bei einem festen Prozentsatz des Mehls — dafür ist die Rechnung mit Bäckerprozenten da.' },
      { q: 'Was tue ich, wenn 1,5 Eier verlangt werden?', a: 'Runde in die Richtung, die dir passt, und gleiche die Flüssigkeit bei Bedarf aus. Ein halbes Ei heißt meist, dass sich das Rezept besser verdoppeln als mit 1,5 umrechnen lässt.' },
      { q: 'Skaliert die Backzeit mit der Menge?', a: 'Nein, und das ist die klassische Falle. Die Zeit hängt an Dicke und Form und nicht an der Masse: die doppelte Menge in derselben Form braucht merklich länger, während dieselbe Menge auf zwei Bleche verteilt etwa so lange braucht wie das Original.' },
    ],
  },
  'roast-time': {
    longDescription: 'Ermittelt die Bratzeit aus dem Gewicht des Bratens: ein fester Anteil plus ein Richtwert an Minuten je Kilogramm, und danach die Ruhezeit gesondert. Der feste Anteil ist keine Verzierung — er deckt das Aufheizen des Ofens und die Krustenbildung ab, einen Abschnitt, der kaum von der Größe des Stücks abhängt, und ohne ihn bekäme ein kleines Stück eine entsprechend kurze Zeit. Die Ruhezeit steht mit Absicht in einer eigenen Zeile: du nimmst das Fleisch nach dem ersten Abschnitt heraus und trägst nach dem zweiten auf, und beides zu einer Zahl zu addieren verwechselte zwei verschiedene Zeitpunkte.',
    howToUse: [
      'Wiege den Braten samt Füllung.',
      'Setze die Minuten je Kilogramm aus deinem Rezept: Geflügel meist 40, Rind 25–35.',
      'Gib den festen Anteil an, der Durchwärmen und Kruste abdeckt.',
      'Setze die Ruhezeit, gewöhnlich zwischen einem Zehntel und einem Fünftel der Garzeit.',
    ],
    howItWorks: 'Garzeit = fester Anteil + Richtwert je Kilogramm × Gewicht. Ruhezeit = Garzeit × Ruheanteil ÷ 100, gesondert von der Garzeit gezählt.',
    example: 'Ein Truthahn mit 5 kg bei 40 min/kg und 20 min festem Anteil brät 3 h 40 min und ruht weitere 44 Minuten.',
    faq: [
      { q: 'Wozu ein fester Anteil?', a: 'Er deckt das Aufheizen des Ofens, die Kruste und den Anfangsabschnitt ab, die kaum von der Größe abhängen. Ohne ihn bekäme ein kleines Stück eine entsprechend kurze Zeit.' },
      { q: 'Warum steht die Ruhezeit gesondert?', a: 'Weil es verschiedene Zeitpunkte sind: du nimmst das Fleisch nach dem Garen heraus und trägst nach dem Ruhen auf. Während der Ruhe verteilt sich der Saft neu, und der Anschnitt läuft nicht mehr aus.' },
      { q: 'Ersetzt das ein Thermometer?', a: 'Nein. Die Zeit ist eine Schätzung aus dem Gewicht, während der Garpunkt eine Temperatur im Kern ist. Dicke und Form ändern das Ergebnis stärker als das Gewicht.' },
      { q: 'Wie unterscheidet sich das von einem Rechner für den Garverlust?', a: 'Jener rechnet das Gewicht der Speise zwischen roh und gegart um. Dieser ermittelt die Zeit, und das Gewicht ist allein die Eingabe.' },
    ],
  },
};
