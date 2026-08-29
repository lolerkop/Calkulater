import type { DeDetailedContent } from './types';

export const deComputers2Content: Partial<Record<string, DeDetailedContent>> = {
  'network-bandwidth': {
    longDescription: 'Multipliziert die Zahl der Nutzer mit dem gleichzeitig aktiven Anteil und der Bandbreite, die jeder braucht, und rechnet danach die von dir gewählte Reserve hinzu. Nichts steckt versteckt in einem Protokollfaktor: der tatsächliche Mehraufwand hängt von Protokoll, Codec und Netz ab, deshalb ist jeder Faktor, der die Antwort ändert, ein sichtbares Feld.',
    howToUse: [
      'Trage ein, wie viele Nutzer die Leitung bedient.',
      'Trage die Bandbreite ein, die jeder braucht.',
      'Setze den gleichzeitig aktiven Anteil und die Reserve.',
    ],
    howItWorks: 'Rohbandbreite = Nutzer × aktiver Anteil × Bedarf je Nutzer; der Bedarf rechnet die Reserve obendrauf.',
    example: '50 Nutzer zu je 5 Mbit/s ergeben 250 Mbit/s roh, mit 20 Prozent Reserve also 300 Mbit/s.',
    faq: [
      { q: 'Soll ich alle Nutzer zählen oder nur die aktiven?', a: 'Beides, getrennt. Trage die Gesamtzahl ein und setze den gleichzeitig aktiven Anteil — hundert Arbeitsplätze streamen selten alle zugleich.' },
      { q: 'Wo geht der Reserveprozentsatz hinein?', a: 'Er kommt oben auf die Rohzahl. Dahinter wird nichts weiter angewendet, weil der tatsächliche Protokollaufwand zu stark schwankt, um ihn für dich zu raten.' },
      { q: 'Wie viel Reserve ist sinnvoll?', a: 'Das hängt davon ab, wie stoßweise der Verkehr ist. Das Feld gibt es, damit die Annahme deine bleibt und sichtbar bleibt.' },
      { q: 'Warum Megabit und nicht Megabyte?', a: 'Leitungen werden in Bit je Sekunde verkauft. Das Ergebnis zeigt zusätzlich Megabyte je Sekunde, damit sich der Wert mit Downloadgeschwindigkeiten vergleichen lässt.' },
    ],
  },
  'password-entropy': {
    longDescription: 'Die Stärke eines Passworts kommt nicht davon, dass es kompliziert aussieht, sondern von der Größe des Raums, der durchsucht werden muss: seiner Länge und seinem Zeichenvorrat. Ein Zeichen mehr bei einem zwölfstelligen Passwort aus Buchstaben und Ziffern vervielfacht die Suche um 62; von Kleinbuchstaben auf gemischte Schreibung mit Ziffern zu wechseln, vervielfacht sie um Größenordnungen. Die Zahl der Möglichkeiten übersteigt schnell 10²¹, deshalb erscheinen sie und die Suchdauer in Exponentialform.',
    howToUse: [
      'Zähle die tatsächliche Länge: Leerzeichen und Satzzeichen sind auch Zeichen.',
      'Wähle den Zeichenvorrat danach, was du wirklich verwendet hast, nicht danach, was das Anmeldeformular erlaubt.',
      'Die Rate hängt davon ab, wie das Passwort gespeichert ist: schnelle Hashes erlauben zig Milliarden Versuche je Sekunde, langsame nur Tausende.',
      'Geschätzt wird vollständiges Durchprobieren. Ein Passwort aus Wörterbuchwörtern fällt weit schneller, als seine Entropie vermuten lässt.',
    ],
    howItWorks: 'H = L · log₂(N), Möglichkeiten N^L, und die mittlere Suche ist der halbe Raum.',
    example: 'Zwölf Zeichen aus Buchstaben und Ziffern ergeben 71,45 Bit und rund 3,2·10²¹ Möglichkeiten.',
    faq: [
      { q: 'Wie viele Bit reichen?', a: 'Unter 60 Bit fällt ein Passwort auf gewöhnlicher Hardware in überschaubarer Zeit. 70–80 Bit decken die meisten Fälle ab; über 100 Bit ist Durchprobieren gar nicht mehr die Gefahr — dann sind Datenlecks und Mehrfachverwendung das eigentliche Risiko.' },
      { q: 'Warum ist die mittlere Suche der halbe Raum?', a: 'Durchprobieren geht den Raum der Reihe nach durch, und im Mittel liegt das Passwort in der Mitte. Es ist die übliche Schätzung: sie ändert die Größenordnung nicht, ist aber ehrlicher als den ganzen Raum zu zählen.' },
      { q: 'Was zählt mehr, Länge oder Zeichenvorrat?', a: 'Die Länge. Sie steht im Exponenten, der Zeichenvorrat in der Basis. Zwanzig Kleinbuchstaben schlagen zwölf Zeichen mit allen Sonderzeichen: 94 Bit gegen 78.' },
      { q: 'Gilt das auch für Passphrasen?', a: 'Für eine Folge zufälliger Wörter nimmst du die Wörterbuchgröße als Zeichenvorrat und die Zahl der Wörter als Länge. Ein Satz aus einem echten Text hat fast keine Entropie — er wird über das Zitat erraten und nicht Zeichen für Zeichen.' },
    ],
  },
  'ppi-dpi': {
    longDescription: 'Berechnet PPI — wie viele Pixel auf einen Zoll Bildschirm fallen. Diese Zahl entscheidet darüber, ob du das Raster siehst, und nicht die Auflösung allein: 1920×1080 wirkt auf einem Notebook scharf und auf einem großen Fernseher grob, weil dieselben Pixel über eine längere Diagonale gezogen werden. Die Diagonale in Pixeln folgt aus dem Satz des Pythagoras und wird durch die Diagonale in Zoll geteilt.\n\nBildschirme werden in PPI beschrieben, der Druck in DPI: die Rechnung ist dieselbe, aber ein Druckpunkt und ein Bildschirmpixel sind verschiedene Dinge und sollten nicht vermengt werden.',
    howToUse: [
      'Trage die Auflösung des Bildschirms in Pixeln ein.',
      'Gib die Diagonale in Zoll an.',
      'Lies die Pixeldichte und die Größe eines Pixels ab.',
    ],
    howItWorks: 'Diagonale in Pixeln = √(Breite² + Höhe²); PPI = diese Diagonale ÷ Diagonale in Zoll. Die Pixelgröße sind 25,4 mm geteilt durch die PPI.',
    example: 'Ein Bildschirm mit 1920×1080 und 15,6 Zoll Diagonale hat eine Dichte von 141,21 ppi.',
    faq: [
      { q: 'Wie unterscheidet sich PPI von DPI?', a: 'Die Rechnung ist dieselbe, aber PPI beschreibt Bildschirmpixel und DPI gedruckte Punkte. Ein Druckpunkt und ein Monitorpixel arbeiten verschieden, die eine Zahl lässt sich also nicht auf die andere übertragen.' },
      { q: 'Warum sieht dieselbe Auflösung verschieden aus?', a: 'Weil nicht das Pixelraster zählt, sondern seine Dichte. 1920×1080 ergeben bei 15 Zoll rund 141 ppi und bei 40 Zoll rund 55, wo das Raster sichtbar wird.' },
      { q: 'Welche Dichte reicht?', a: 'Das hängt vom Betrachtungsabstand ab: ein Telefon wird nah gehalten und braucht mehr, ein Fernseher wird aus der Ferne gesehen und braucht weniger. Eine allgemeingültige Schwelle gibt es nicht.' },
      { q: 'Was zeigt die Pixelgröße?', a: 'Die Kantenlänge eines Pixels in Millimetern. Damit lässt sich gut abschätzen, ob eine dünne Linie oder kleine Schrift noch lesbar bleibt.' },
    ],
  },
  'raid': {
    longDescription: 'Zeigt, wie viel der gekauften Kapazität verfügbar bleibt und wie viel in die Redundanz geht. Genau dieser Preis unterscheidet die Stufen: RAID 0 gibt nichts aus und überlebt keinen einzigen Ausfall, RAID 5 opfert eine Platte für die Parität, RAID 6 zwei, und ein Spiegel gibt die Hälfte des Verbunds her. Die für RAID 10 gezeigte Ausfallzahl ist die garantierte — der Verbund kann die Hälfte seiner Platten überleben, wenn die Ausfälle in verschiedene Spiegel fallen, aber auf eine glückliche Verteilung plant man nicht. Eine Stufe mit zu wenigen Platten wird abgewiesen und nicht stillschweigend auf ihr Mindestmaß aufgefüllt.',
    howToUse: [
      'Wähle die Stufe des Verbunds.',
      'Trage die Zahl der Platten ein — RAID 10 braucht eine gerade Zahl.',
      'Trage die Größe einer einzelnen Platte in Terabyte ein.',
      'Es wird von gleichen Platten ausgegangen: ein Verbund richtet sich nach seiner kleinsten.',
    ],
    howItWorks: 'RAID 0 ergibt n×S, RAID 1 die Größe einer Platte, RAID 5 (n−1)×S, RAID 6 (n−2)×S, und RAID 10 die halbe Gesamtkapazität. Die Effizienz ist der nutzbare Anteil an der Rohkapazität.',
    example: 'RAID 5 aus sechs Platten zu 4 TB ergibt 20 TB nutzbar von 24 TB roh, also 83,33 %.',
    faq: [
      { q: 'Welche Stufe passt zu einem Speicher für zu Hause?', a: 'Meist RAID 5 mit drei bis sechs Platten und RAID 6 ab acht: mit wachsender Zahl und Größe der Platten ist die Wahrscheinlichkeit eines zweiten Ausfalls während des Wiederaufbaus nicht mehr vernachlässigbar.' },
      { q: 'Was passiert bei Platten verschiedener Größe?', a: 'Der Verbund richtet sich nach der kleinsten: eine 8-TB-Platte neben einer 4-TB-Platte steuert nur 4 TB bei. Deshalb geht die Rechnung von gleichen Platten aus.' },
      { q: 'Warum zeigt RAID 10 nur einen verkraftbaren Ausfall?', a: 'Das ist die garantierte Zahl. Der Verbund kann die Hälfte seiner Platten überleben, wenn die Ausfälle in verschiedene Spiegel fallen, aber zwei Ausfälle in einem Spiegel zerstören ihn bei jeder Größe — eine glückliche Verteilung lässt sich nicht zusagen.' },
      { q: 'Ersetzt RAID eine Sicherung?', a: 'Nein. RAID schützt gegen den Ausfall einer Platte, nicht gegen eine gelöschte Datei, Erpressungssoftware, Feuer oder Diebstahl — die treffen den ganzen Verbund gleichermaßen. Eine Sicherung ist eine eigene Anforderung.' },
      { q: 'Warum verspricht der Hersteller mehr Terabyte, als das System zeigt?', a: 'Hersteller zählen ein Terabyte als 10¹² Byte, das System zeigt Tebibyte zu 2⁴⁰ Byte. Der Abstand liegt bei rund 9 % und hat mit der Stufe des Verbunds nichts zu tun.' },
    ],
  },
  'text-word-char-count': {
    longDescription: 'Misst den Umfang eines Textes und nennt die Regeln, nach denen gezählt wird, denn „Wort“ und „Satz“ sind Übereinkünfte und keine Eigenschaften einer Zeichenkette — verschiedene Zähler liefern verschiedene Zahlen. Ein Wort beginnt hier mit einem Buchstaben oder einer Ziffer, und ein Bindestrich oder Apostroph darin trennt es nicht: „E-Mail“ und „geht\'s“ zählen je einmal. Ein Satz ist eine nicht leere Folge zwischen Punkt, Ausrufe- und Fragezeichen, und ein Text ohne abschließendes Zeichen zählt trotzdem als ein Satz. Ein Absatz ist eine nicht leere Zeile, ein doppelter Zeilenumbruch verdoppelt die Zahl also nicht.',
    howToUse: [
      'Füge einen Text ein oder tippe ihn — Zeilenumbrüche bleiben erhalten.',
      'Nutze die Zahl mit Leerzeichen, wenn ein Beitrag oder eine Anzeige eine Grenze hat.',
      'Nutze die Zahl ohne Leerzeichen, wenn nach Zeichen bezahlt wird.',
      'Mittlere Wortlänge und Wörter je Satz helfen, die Lesbarkeit einzuschätzen.',
    ],
    howItWorks: 'Ein Wort ist eine Folge von Buchstaben oder Ziffern; ein Bindestrich oder Apostroph darin trennt es nicht. Ein Satz ist eine nicht leere Folge zwischen Punkt, Ausrufe- und Fragezeichen. Ein Absatz ist eine nicht leere Zeile.',
    example: 'Die Zeile „Der schnelle braune Fuchs springt über den faulen Hund. Alles erledigt!“ hat 11 Wörter und 71 Zeichen.',
    faq: [
      { q: 'Zählen Leerzeichen als Zeichen?', a: 'Beide Zahlen werden angezeigt. Grenzen in sozialen Netzen und Anzeigen zählen Leerzeichen meist mit, Honorare je Zeichen im Texten meist nicht.' },
      { q: 'Wie wird ein Wort mit Bindestrich gezählt?', a: 'Als eines: „E-Mail“, „geht\'s“ und „Sozialversicherungs-Nummer“ werden nicht getrennt. Satzzeichen gehören nicht zum Wort.' },
      { q: 'Was ist, wenn am Ende der Punkt fehlt?', a: 'Es zählt trotzdem als ein Satz. Sonst meldete der Zähler null, wo offensichtlich ein Satz steht.' },
      { q: 'Warum wird eine Leerzeile zwischen Absätzen nicht gezählt?', a: 'Ein Absatz ist eine nicht leere Zeile, ein doppelter Zeilenumbruch zwischen Absätzen verdoppelt die Zahl also nicht.' },
      { q: 'Zählen Umlaute und ß wie andere Buchstaben?', a: 'Ja — gezählt wird in Codepunkten, ein ä oder ß wiegt also genau so viel wie ein a oder s.' },
    ],
  },
  'tv-monitor-viewing-distance': {
    longDescription: 'Den richtigen Abstand zum Fernseher setzt der Blickwinkel und nicht die Diagonale: THX schlägt vor, dass der Bildschirm rund vierzig Grad des Blickfelds ausfüllt, SMPTE rund dreißig. Der erste liegt näher am Kino, der zweite am gewöhnlichen Fernsehen, und beide sind für denselben Bildschirm richtig. Eine eigene Zahl nennt den Abstand, ab dem das Auge einzelne Pixel nicht mehr auflöst — sie erklärt, warum 4K bei großer Diagonale etwas bringt und bei kleiner nichts.',
    howToUse: [
      'Die Diagonale steht in Zoll, so wie auf dem Karton; die Abstände kommen in Metern heraus.',
      'Zeilen der Auflösung: 1080 für Full HD, 2160 für 4K, 4320 für 8K.',
      'Der THX-Abstand ist näher und passt zu Filmen; der SMPTE-Abstand ist weiter und für gewöhnliches Fernsehen bequemer.',
      'Sitzt du weiter als die Sichtbarkeitsgrenze, ist die höhere Auflösung nicht zu sehen.',
    ],
    howItWorks: 'Bildschirmbreite aus Diagonale und Seitenverhältnis, Abstand = Breite/2 ÷ Tangens des halben Blickwinkels; die Sichtbarkeitsgrenze folgt daraus, dass ein Pixel eine Bogenminute einnimmt.',
    example: 'Für einen 55-Zoll-Fernseher mit 4K liegt der THX-Abstand bei rund 1,67 m, und ab 1,08 m verschwinden die Pixel.',
    faq: [
      { q: 'Warum zwei verschiedene Empfehlungen?', a: 'Weil die Ziele verschieden sind. THX zielt auf das Eintauchen wie im Kino und gibt rund vierzig Grad, SMPTE auf Bequemlichkeit beim langen gewöhnlichen Sehen und gibt rund dreißig. Die Praxis liegt dazwischen.' },
      { q: 'Was bedeutet die Grenze der Pixelsichtbarkeit?', a: 'Es ist der Abstand, in dem ein Pixel eine Bogenminute einnimmt — die Auflösungsgrenze normalen Sehens. Dahinter ist der Unterschied zwischen 4K und Full HD nicht mehr zu sehen.' },
      { q: 'Heißt das, 4K ist sinnlos?', a: 'Nicht, wenn du näher sitzt als diese Grenze — und genau das passiert bei großer Diagonale in einem gewöhnlichen Zimmer. Auf einem kleinen Bildschirm vom üblichen Sofa aus ist der Gewinn tatsächlich unsichtbar.' },
      { q: 'Warum wird aus der Breite und nicht aus der Diagonale gerechnet?', a: 'Der Blickwinkel ist über das waagerechte Blickfeld festgelegt, und das setzt die Bildschirmbreite. Bei gleicher Diagonale ist ein besonders breiter Bildschirm breiter als ein normaler, sein Abstand fällt also anders aus.' },
    ],
  },
  'unix-timestamp': {
    longDescription: 'Zählt Sekunden ab dem ersten Januar 1970 und wieder zurück, immer in UTC. Die Zeitzone des Browsers geht bewusst nicht ein: dieselbe Zahl muss für jeden dasselbe Datum ergeben, sonst zeigte ein geteilter Link jedem Leser etwas anderes. Negative Werte sind gewöhnliche Daten vor dem Epochenbeginn.',
    howToUse: [
      'Wähle die gewünschte Richtung.',
      'Trage den Zeitstempel ein oder Datum und Uhrzeit in UTC.',
      'Lies den umgerechneten Wert und den Wochentag ab.',
    ],
    howItWorks: 'Ein Zeitstempel ist die Zahl der Sekunden seit 1970-01-01T00:00:00Z; die Rückumrechnung addiert diese Sekunden zum Epochenbeginn.',
    example: '1 700 000 000 entsprechen dem 14.11.2023 um 22:13:20 UTC, einem Dienstag.',
    faq: [
      { q: 'Warum nur UTC?', a: 'Damit derselbe Zeitstempel immer dasselbe Datum zeigt. Die Zeitzone des Lesers anzuwenden hieße, dass ein geteiltes Ergebnis auf verschiedenen Rechnern Verschiedenes bedeutet.' },
      { q: 'Werden Schaltsekunden berücksichtigt?', a: 'Nein, und die Unix-Zeit selbst tut es auch nicht: jeder Tag gilt als genau 86 400 Sekunden, so schreibt es der Standard vor.' },
      { q: 'Kann ein Zeitstempel negativ sein?', a: 'Ja. Negative Werte sind Daten vor 1970, und sie werden genauso umgerechnet.' },
      { q: 'Sekunden oder Millisekunden?', a: 'Die Eingabe erfolgt in Sekunden, so ist es unter Unix üblich. Systeme, die in Millisekunden zählen, brauchen den Wert mal tausend.' },
    ],
  },
  'video-file-size': {
    longDescription: 'Macht aus Bitrate und Dauer eine Dateigröße. Video- und Tonspur werden vor der Umrechnung in Byte zusammengezählt: sie werden in einen Container geschrieben, und sie getrennt mit Rundung bei jedem Schritt zu zählen, verliert an der Naht Genauigkeit. Ton mit 128 kbit/s bringt fast 58 MB je Stunde Aufnahme hinzu — eine Menge, die gern weggewinkt wird. Das Gigabyte ist hier dezimal, 10⁹ Byte, so wie Bitraten angegeben und Datenträger beschriftet werden. Das binäre Mebibyte steht in einer eigenen Zeile, damit der Unterschied zum Dateimanager sichtbar wird und nicht wie ein Fehler aussieht.',
    howToUse: [
      'Trage die Videobitrate ein — sie wird in der Kamera oder im Encoder gesetzt.',
      'Trage die Tonbitrate ein, meist zwischen 96 und 320 kbit/s.',
      'Trage die Länge der Aufnahme in Minuten ein.',
      'Vergleiche Gigabyte mit Mebibyte, wenn du gegen den Dateimanager prüfst.',
    ],
    howItWorks: 'Video- und Tonbitrate werden zu einem Strom addiert, mit der Länge in Sekunden multipliziert und durch acht geteilt, um Bit in Byte umzurechnen. Das Gigabyte ist dezimal, das Mebibyte binär.',
    example: 'Zehn Minuten mit 8 Mbit/s Video und 128 kbit/s Ton brauchen 0,6096 GB, im Dateimanager angezeigt als 581,36 MiB.',
    faq: [
      { q: 'Warum weicht die Größe von der Anzeige im Dateimanager ab?', a: 'Windows behandelt ein Gigabyte als 2³⁰ Byte, während Bitrate und Datenträger 10⁹ verwenden. Dieselbe Aufnahme sind deshalb sowohl 0,6096 GB als auch 581,36 MiB.' },
      { q: 'Muss der Ton gesondert gezählt werden?', a: 'Er ist schon gezählt: die Bitraten werden vor der Umrechnung in Byte addiert. Über eine Stunde bringt eine Tonspur mit 128 kbit/s fast 58 MB hinzu.' },
      { q: 'Funktioniert das bei variabler Bitrate?', a: 'Näherungsweise. Trage bei VBR die mittlere Bitrate ein, die der Encoder meldet — das Ergebnis liegt nah dran, wenn auch nicht auf das Byte genau.' },
      { q: 'Und der Aufwand des Containers?', a: 'Die Verwaltungsdaten von MP4 oder MKV nehmen Bruchteile eines Prozents ein und werden nicht gezählt: gegenüber den Strömen selbst liegen sie unter dem Fehler einer mittleren Bitrate.' },
      { q: 'Wie wähle ich eine Bitrate für eine Zielgröße?', a: 'Verändere die Bitrate, bis die Größe zu deinem Ziel passt. Der Zusammenhang ist linear: die halbe Bitrate ergibt die halbe Datei.' },
    ],
  },
};
