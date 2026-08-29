import type { DeDetailedContent } from './types';

export const deBuilding5Content: Partial<Record<string, DeDetailedContent>> = {
  'slab-foundation': {
    longDescription: 'Ermittelt beide Hälften einer Bodenplatte: den Beton, den du vergießt, und den Stahl, den du hineinlegst. Die Zahl der Stäbe je Richtung ist die Seite geteilt durch den Abstand, abgerundet, plus eins — der Stab an der äußersten Kante ist nicht freiwillig, und ohne dieses Plus eins käme die Matte an jeder Kante um eine Reihe zu kurz. Angenommen werden zwei Lagen, oben und unten, die Länge verdoppelt sich also. Das Metergewicht folgt aus dem Querschnitt und der Dichte von Stahl, 7850 kg/m³ — ein Nachschlagewert und kein angepasster Faktor —, und es ergibt die vertrauten 0,888 kg/m für einen Stab mit 12 mm.',
    howToUse: [
      'Trage Länge, Breite und Dicke der Platte ein.',
      'Trage den Mattenabstand ein — 200 mm sind eine verbreitete Wahl.',
      'Trage den Durchmesser der Bewehrung in Millimetern ein.',
      'Ergänze einen Zuschlag für das, was bei Anlieferung und Einbau verloren geht.',
    ],
    howItWorks: 'Der Beton ist Länge mal Breite mal Dicke plus Zuschlag. Die Stäbe je Richtung sind die Gegenseite geteilt durch den Abstand, abgerundet, plus eins, und die ganze Matte wird für zwei Lagen verdoppelt. Das Metergewicht ist die Kreisfläche des Stabes mal der Dichte von Stahl.',
    example: 'Eine Platte von 10 mal 8 m mit 0,3 m Dicke und einer Matte mit 200 mm aus Stäben zu 12 mm braucht 25,2 m³ Beton und 1452,46 kg Stahl.',
    faq: [
      { q: 'Warum ein Stab mehr?', a: 'Weil die Stäbe an einer Kante beginnen und die andere ebenfalls erreichen müssen. Zehn Abstände über zwei Meter bedeuten elf Stäbe und nicht zehn.' },
      { q: 'Sind zwei Lagen immer richtig?', a: 'Bei einer Bodenplatte meist ja: die obere Lage arbeitet in der einen Biegerichtung und die untere in der anderen. Eine dünne Platte auf festem Grund wird bisweilen mit einer gebaut.' },
      { q: 'Woher kommen die 0,888 kg je Meter?', a: 'Aus der Geometrie: ein Kreis mit 12 mm hat 113,1 mm², und Stahl mit 7850 kg/m³ ergibt 0,888 kg für jeden Meter davon. Es ist Rechnerei und kein Tabellenwert.' },
      { q: 'Ist der Stoß der Stäbe enthalten?', a: 'Nein. Stäbe, die länger als die Platte sind, brauchen einen Übergriff, und dessen Länge hängt vom Durchmesser und von der Betongüte ab. Rechne ihn zum Zuschlag, wenn deine Stäbe kürzer als die Platte sind.' },
      { q: 'Warum ein eigener Rechner, wenn der allgemeine Betonrechner das Volumen liefert?', a: 'Weil eine Platte mehr braucht als eine Betonage. Dieser zählt auch die Matte in zwei Lagen mit dem zusätzlichen Stab an jeder Kante — etwas, das eine Volumenrechnung nicht liefert.' },
    ],
  },
  'stairs': {
    longDescription: 'Legt einen Treppenlauf aus: aus der Geschosshöhe und einer höchstzulässigen Steigung ermittelt er die Zahl der Steigungen und rechnet die Steigungshöhe danach zurück, damit jede Stufe gleich hoch wird. Ungleiche Steigungen in einem Lauf sind die häufigste Ursache für einen Fehltritt, und das Aufrunden ist hier kein Zuschlag, sondern eine Vorgabe — Abrunden triebe die Stufe über die zulässige Höhe. Die Schrittmaßregel 2h + b zeigt danach, ob der Lauf zum menschlichen Schritt passt.',
    howToUse: [
      'Miss die Geschosshöhe — vom Fertigfußboden unten bis zum Fertigfußboden oben.',
      'Setze die Auftrittstiefe, auf der dein Fuß landet.',
      'Gib die höchste Steigungshöhe an, meist zwischen 0,15 und 0,19 m.',
      'Prüfe die Schrittmaßregel: die doppelte Steigung plus der Auftritt sollte bei 0,60–0,65 m landen.',
    ],
    howItWorks: 'Steigungen = Geschosshöhe geteilt durch die höchste Steigungshöhe, aufgerundet. Steigungshöhe = Geschosshöhe geteilt durch diese Zahl. Es gibt einen Auftritt weniger: das obere Podest ist keine Stufe.',
    example: 'Eine Geschosshöhe von 2,8 m ergibt bei einer Grenze von 0,18 m sechzehn Steigungen zu 0,175 m, fünfzehn Auftritte und eine Lauflänge von 4,2 m.',
    faq: [
      { q: 'Warum gibt es einen Auftritt weniger als Steigungen?', a: 'Weil die letzte Steigung auf dem oberen Geschoss endet und es dort keine eigene Stufe gibt.' },
      { q: 'Warum wird die Zahl der Stufen aufgerundet?', a: 'Abrunden machte die Steigung höher als die von dir gesetzte Grenze. Diese Grenze ist eine Sicherheitsvorgabe, sie darf also auch nicht knapp überschritten werden.' },
      { q: 'Was bedeutet die Regel 2h + b?', a: 'Die doppelte Steigungshöhe plus die Auftrittstiefe. Der Wert entspricht ungefähr einem menschlichen Schritt, und bequeme Treppen landen bei 0,60–0,65 m.' },
      { q: 'Welcher Neigungswinkel ist üblich?', a: 'Bei einer Treppe im Haus meist 30–40°. Steiler als 45° braucht zum Hinabsteigen einen Handlauf, flacher als 25° frisst schlicht Grundfläche.' },
    ],
  },
  'strip-foundation': {
    longDescription: 'Ermittelt das Betonvolumen für ein Streifenfundament. Einzutragen ist die Länge des Streifens selbst und nicht der Umriss des Gebäudes: der Streifen läuft auch unter den inneren tragenden Wänden, und deren Länge kommt zum äußeren Umriss hinzu. Den Gebäudeumfang einzusetzen ist der übliche Fehler, und er bestellt genau um die inneren Wände zu wenig. Nettovolumen und Volumen mit Zuschlag stehen getrennt da: gegen das erste prüfst du, das zweite bestellst du.',
    howToUse: [
      'Zähle den äußeren Umriss und jeden inneren Streifen zusammen.',
      'Trage Breite und Tiefe des Streifens ein.',
      'Setze den Zuschlag und lies das zu bestellende Volumen ab.',
    ],
    howItWorks: 'Das Volumen ist die Streifenlänge mal Breite und Tiefe seines Querschnitts. Dieser Wert wird mit eins plus dem Zuschlag als Bruchteil multipliziert, während das Nettovolumen in einer eigenen Zeile bleibt.',
    example: 'Ein Streifen von 40 m mit einem Querschnitt von 0,4 × 0,8 m sind 12,8 m³ Beton; mit 5 % Zuschlag bestellst du 13,44 m³.',
    faq: [
      { q: 'Trage ich die Streifenlänge oder den Gebäudeumfang ein?', a: 'Die Streifenlänge. Er läuft auch unter den inneren tragenden Wänden, und das muss zum äußeren Umriss hinzugerechnet werden — sonst fällt die Bestellung genau um diese Wände zu klein aus.' },
      { q: 'Wie unterscheidet sich das vom Betonrechner?', a: 'Der Betonrechner deckt drei Formen allgemein ab. Dieser deckt nur den Streifen ab, aber über die Größe, in der er tatsächlich gemessen wird, und mit Beschriftungen, die verhindern, dass die Streifenlänge mit der Größe des Hauses verwechselt wird.' },
      { q: 'Wie berücksichtige ich das Sandbett?', a: 'Gar nicht — es ist kein Beton. Rechne sein Volumen gesondert aus derselben Streifenlänge und der Bettungsdicke.' },
      { q: 'Soll die Bewehrung abgezogen werden?', a: 'Nein. Das Stahlvolumen ist neben dem Beton gering und wird in der Praxis nicht abgezogen.' },
    ],
  },
  'tank-volume': {
    longDescription: 'Ermittelt sowohl das Fassungsvermögen als auch, wie viel Flüssigkeit gerade im Behälter ist. In einem stehenden Behälter oder einer rechteckigen Wanne ist die Füllung dem Stand proportional; in einem liegenden Behälter nicht. Dort ist der benetzte Querschnitt ein Kreisabschnitt, die halbe Höhe ergibt also genau das halbe Volumen, während ein Viertel der Höhe merklich weniger als ein Viertel ergibt. Der Unterschied zu einem geometrischen Zylinder zählt: jener liefert das Volumen eines Körpers, hier lautet die Antwort, wie viele Liter bei diesem Stand darin sind.',
    howToUse: [
      'Wähle die Form: bei einem liegenden Behälter wird der Stand ab dem Boden des Mantels gemessen.',
      'Bei einem Zylinder trägst du den Durchmesser ein, bei einem rechteckigen Behälter die Grundseite.',
      'Höhe oder Länge: ein stehender Behälter nutzt seine Höhe, ein liegender seine Mantellänge.',
      'Miss den Stand mit einem Peilstab vom Boden aus; er kann den Behälter nicht übersteigen.',
    ],
    howItWorks: 'Stehende Formen: Grundfläche mal Stand. Liegender Behälter: Fläche des Kreisabschnitts r²(θ − sin θ)/2 mal Länge.',
    example: 'Ein stehender Behälter mit 1,5 m Durchmesser und 2 m Höhe fasst bei 1,2 m Stand 2,12 m³ — das sind 2121 Liter.',
    faq: [
      { q: 'Warum ergibt die halbe Höhe eines liegenden Behälters genau das halbe Volumen?', a: 'Weil ein Kreis zu seiner waagerechten Achse symmetrisch ist: der Abschnitt bis zur Mitte ist der halbe Kreis. Ein Viertel der Höhe ergibt dagegen weit weniger als ein Viertel — der Querschnitt ist dort unten schmal.' },
      { q: 'Wie unterscheidet sich das von einem Zylinderrechner?', a: 'Ein geometrischer Zylinder liefert das Volumen des ganzen Körpers. Hier gibt es einen Füllstand und eine Lage, und die Antwort lautet, wie viel Flüssigkeit jetzt darin ist.' },
      { q: 'Wie wird eine Kapsel behandelt?', a: 'Als Zylinder plus eine Kugel desselben Durchmessers, wobei sich die Füllung über die Gesamthöhe verteilt. Das ist eine Näherung: der genaue Abschnitt eines gewölbten Bodens braucht die gemessene Form dieser Wölbung.' },
      { q: 'Ist die Wandstärke berücksichtigt?', a: 'Nein. Die Maße gelten als Innenmaße. Hast du von außen gemessen, zieh zwei Wandstärken vom Durchmesser und eine von der Höhe ab.' },
    ],
  },
  'underfloor-heating': {
    longDescription: 'Ermittelt, wie viel Rohr ein Boden braucht und auf wie viele Heizkreise es aufzuteilen ist. Die Randzone wird enger verlegt als der Rest — entlang einer Außenwand sind die Verluste höher —, deshalb wird die Fläche in zwei geteilt, mit eigenem Abstand für jede, statt sie zu einem Mittelwert zu verschmelzen. Ein Mittelwert sähe plausibel aus und ließe einen kalten Streifen am Fenster. Die Zahl der Heizkreise wird aufgerundet, denn Rohr über der Grenzlänge arbeitet hydraulisch nicht, und „2,3 Kreise“ bedeutet drei.',
    howToUse: [
      'Trage die beheizte Bodenfläche ein — nicht den ganzen Raum, wenn Möbel einen Teil abdecken.',
      'Trage den Verlegeabstand ein; 150 mm sind eine verbreitete Wahl.',
      'Trage die Fläche der Randzone und ihren engeren Abstand ein.',
      'Setze die Höchstlänge eines Heizkreises, die Verteiler und Pumpe zulassen.',
    ],
    howItWorks: 'Die Rohrlänge ist die Hauptfläche geteilt durch ihren Abstand plus die Randzone geteilt durch ihren eigenen Abstand, alles um den Zuschlag erhöht. Die Heizkreise sind diese Länge geteilt durch die Höchstlänge, aufgerundet.',
    example: '20 m² bei 150 mm mit einer Randzone von 4 m² bei 100 mm brauchen 161,33 m Rohr in zwei Heizkreisen.',
    faq: [
      { q: 'Warum wird die Randzone enger verlegt?', a: 'Weil die Wärme nahe einer Außenwand und einem Fenster schneller entweicht. Überall derselbe Abstand ergibt eine gleichmäßige Rohrverlegung und einen ungleichmäßigen Boden.' },
      { q: 'Was begrenzt die Länge eines Heizkreises?', a: 'Der Druckverlust. Über rund 90–120 m bei einem Rohr mit 16 mm kann die Pumpe nicht genug Wasser hindurchdrücken, und das Ende des Kreises bleibt kalt.' },
      { q: 'Soll ich den ganzen Raum zählen?', a: 'Zähle das, was du tatsächlich beheizt. Unter Einbauküchen und einer Badewanne wird gewöhnlich kein Rohr verlegt, und sie mitzuzählen kauft Rohr, das du nicht nutzt.' },
      { q: 'Ändert der Abstand die Wärmeleistung?', a: 'Ja — ein engerer Abstand bedeutet mehr Rohr je Quadratmeter und mehr Wärme. Dieser Rechner liefert dir das Rohr für einen von dir gewählten Abstand und nicht den Abstand für einen Wärmebedarf.' },
      { q: 'Ist der Estrich enthalten?', a: 'Nein. Das Estrichvolumen ist eine eigene Rechnung aus Fläche und Dicke.' },
    ],
  },
  'wood-weight': {
    longDescription: 'Macht aus Kubikmetern Holz Kilogramm, wofür die Holzart gebraucht wird: Eiche ist bei gleichem Volumen um ein Drittel schwerer als Fichte. Die Bezugsdichten gelten bei 12 % Feuchte, dem üblichen Bezugszustand, auf den Tabellen normiert sind, und die Umrechnung von dort ist linear — ein Prozent Feuchte bringt ein Prozent Gewicht. Dieses Modell ist für frisches Holz grob, wo das Wasser so viel wiegen kann wie das Holz, deshalb steht die tatsächlich verwendete Dichte immer in einer eigenen Zeile: ein Gewicht, das sich nicht auf eine Dichte zurückführen lässt, ist ein Gewicht, das sich nicht prüfen lässt.',
    howToUse: [
      'Trage das Volumen in Kubikmetern ein.',
      'Wähle die Holzart — die Dichte schwankt über die gebräuchlichen um ein Drittel.',
      'Trage die Holzfeuchte ein: 12 % ist trocken, 20 % lufttrocken, mehr ist frisch.',
      'Prüfe die Zeile mit der Dichte, um zu sehen, worauf die Antwort gebaut ist.',
    ],
    howItWorks: 'Die Dichte ist die Bezugsdichte der Holzart, um ein Prozent je Prozent Feuchte abweichend von 12 % angepasst. Das Gewicht ist das Volumen mal dieser Dichte.',
    example: 'Ein Kubikmeter Kiefer bei 12 % Feuchte wiegt 520 kg.',
    faq: [
      { q: 'Warum ändert die Feuchte das Gewicht so stark?', a: 'Weil das Wasser Teil dessen ist, was du hebst. Frisch geschlagenes Nadelholz kann zur Hälfte aus Wasser bestehen, weshalb ein frischer und ein abgelagerter Stamm gleicher Größe sich wie verschiedene Dinge anfühlen.' },
      { q: 'Woher kommen die 12 %?', a: 'Es ist der übliche Bezugszustand für Holztabellen — ungefähr das, worauf sich Holz in Innenräumen einstellt. Eine Dichte ohne Angabe der Feuchte sagt sehr wenig.' },
      { q: 'Ist die lineare Anpassung genau?', a: 'Nahe am Bezugswert reicht sie für Last- und Transportrechnungen. Weit darüber — frisches Holz bei 60 % — biegt sich der wirkliche Zusammenhang, und die Antwort ist eine Schätzung.' },
      { q: 'Gilt das für Bretter ebenso wie für Stämme?', a: 'Ja, wenn du das tatsächliche Volumen einträgst. Der Rechner für das Volumen von Brettern liefert dir diesen Wert aus Maßen und Anzahl.' },
      { q: 'Warum steht meine Holzart nicht in der Liste?', a: 'Die Liste enthält die gebräuchlichen Bauhölzer mit gut gesicherten Bezugsdichten. Seltenere aufzunehmen hieße, Zahlen zu nennen, die nicht ebenso gut gesichert sind.' },
    ],
  },
};
