import type { DeDetailedContent } from './types';

export const deElectronics3Content: Partial<Record<string, DeDetailedContent>> = {
  'resistor-network': {
    longDescription: 'Ermittelt den Widerstand einer Schaltung aus mehreren Widerständen für beide Arten der Verbindung. In Reihe addieren sich die Widerstände; parallel addieren sich die Kehrwerte. Der kleinste und der größte Wert stehen aus gutem Grund neben der Summe: eine Parallelschaltung fällt immer unter ihren kleinsten Widerstand und eine Reihenschaltung über ihren größten, mit diesen beiden Zeilen lässt sich die Antwort also prüfen, ohne die Rechnung zu wiederholen. Ein Widerstand von null Ohm wird abgewiesen — in einer Parallelschaltung würde er sie kurzschließen, und die Formel gäbe null zurück statt einer Warnung.',
    howToUse: [
      'Trage die Widerstandswerte in Ohm ein.',
      'Trenne sie mit Leerzeichen, Semikola oder Zeilenumbrüchen.',
      'Wähle, wie sie verbunden sind.',
      'Für Kiloohm und Megohm trage 4700 und 1000000 ein.',
    ],
    howItWorks: 'In Reihe R = R₁ + R₂ + … Parallel 1/R = 1/R₁ + 1/R₂ + … Daher die Probe: eine Parallelschaltung ist immer schwächer als ihr kleinster Wert und eine Reihenschaltung stärker als ihr größter.',
    example: 'Drei Widerstände mit 100, 220 und 330 Ohm ergeben in Reihe 650 Ohm.',
    faq: [
      { q: 'In welchen Einheiten stehen die Werte?', a: 'In Ohm. Rechne Kiloohm und Megohm vorher um: 4,7 kΩ sind 4700 und 1 MΩ sind 1000000. Einheiten in einer Liste zu mischen funktioniert nicht.' },
      { q: 'Warum ist eine Parallelschaltung schwächer als ihr kleinster Widerstand?', a: 'Weil jeder weitere Widerstand ein zusätzlicher Weg für den Strom ist. Je mehr Wege es gibt, desto leichter fließt der Strom, die Summe fällt also unter jeden einzelnen.' },
      { q: 'Wie behandle ich eine gemischte Schaltung?', a: 'In Schritten. Fasse zuerst die parallelen Gruppen zusammen, notiere die erhaltenen Werte und addiere sie danach in Reihe — ein Netzwerk beliebiger Verschachtelung zerfällt so in Schritte.' },
      { q: 'Warum wird ein Widerstand von null abgewiesen?', a: 'Ein Widerstand von null Ohm ist in einer Parallelschaltung ein Kurzschluss, und die Formel gäbe ehrlich null zurück. Eine plausible Null auf dem Bildschirm ist schlechter, als die Rechnung anzuhalten.' },
      { q: 'Müssen parallele Widerstände gleich sein?', a: 'Nein, aber gleiche haben eine praktische Eigenschaft: n gleiche Widerstände parallel ergeben genau R/n. Zwei Widerstände mit 470 Ohm ergeben 235 Ohm.' },
    ],
  },
  'rms-voltage': {
    longDescription: 'Ein Vielfachmessgerät im Wechselspannungsbereich zeigt den Effektivwert, ein Oszilloskop den Spitze-Spitze-Wert, und das Datenblatt nennt die Amplitude: drei verschiedene Zahlen für ein und dasselbe Signal. Der Scheitelfaktor verbindet sie, und er hängt allein von der Signalform ab — √2 beim Sinus, eins beim Rechteck, √3 beim Dreieck. Der Gleichrichtwert steht gesondert: einfache Messgeräte messen ihn und multiplizieren mit dem Formfaktor des Sinus, weshalb sie bei jedem nicht sinusförmigen Signal falsch anzeigen.',
    howToUse: [
      'Wähle, welchen der drei Werte du kennst, und trage ihn ein — die beiden anderen folgen sofort.',
      'Die Signalform ist nötig: derselbe Effektivwert entsteht bei Sinus und Rechteck aus verschiedenen Amplituden.',
      'Ein Oszilloskop zeigt meist Spitze-Spitze, wähle also diesen Modus, wenn du vom Bildschirm ausgehst.',
      'Die Zeile „Gleichrichtwert“ zeigt, wie weit ein Messgerät ohne echte Effektivwertmessung danebenliegt.',
    ],
    howItWorks: 'Scheitelfaktor nach Signalform: √2 Sinus, 1 Rechteck, √3 Dreieck; Effektivwert = Scheitelwert ÷ Scheitelfaktor, Spitze-Spitze = 2 × Scheitelwert.',
    example: 'Eine Sinusamplitude von 311 V ergibt einen Effektivwert von 219,91 V — gewöhnliche Netzspannung.',
    faq: [
      { q: 'Warum sind es im Netz 230 V, die Amplitude aber über 300 V?', a: 'Die Netzspannung ist der Effektivwert: die Gleichspannung, die im selben Widerstand dieselbe Wärme freisetzen würde. Eine Sinusamplitude ist um √2 größer, und die Isolierung wird auf diesen Wert ausgelegt.' },
      { q: 'Warum zählt die Signalform?', a: 'Der Scheitelfaktor hängt allein von der Form ab. Ein Rechteck hat einen Effektivwert gleich seiner Amplitude, ein Sinus ist um das 1,414-Fache kleiner, ein Dreieck um das 1,732-Fache. Ohne die Form ist die Frage schlicht nicht gestellt.' },
      { q: 'Was misst ein einfaches Vielfachmessgerät wirklich?', a: 'Es misst den Gleichrichtwert und multipliziert mit dem Formfaktor des Sinus. Beim Sinus stimmt das, bei Rechteck oder pulsweitenmoduliertem Signal liegt es um Zehnerprozente daneben — deshalb werben Geräte mit True RMS.' },
      { q: 'Was ist der Spitze-Spitze-Wert?', a: 'Es ist der Abstand vom unteren zum oberen Scheitel, also die doppelte Amplitude. Oszilloskope zeigen genau das an, und ihn mit der Amplitude zu verwechseln ist der häufigste Fehler beim Ablesen vom Bildschirm.' },
    ],
  },
  'single-phase': {
    longDescription: 'Ein einphasiger Stromkreis hat drei Leistungen, und sie zu verwechseln ist es, was Leitungen verbrennt. Die Wirkleistung in Watt ist der Teil, der Arbeit leistet und den der Zähler abrechnet. Die Scheinleistung in Voltampere ist das Produkt aus Spannung und Strom, und sie ist das, was Leitung und Schutzschalter tatsächlich tragen müssen. Die Blindleistung in var ist die Differenz: Energie, die zur Last und zurück wandert, ohne etwas zu bewirken. Ein Motor mit einem Leistungsfaktor von 0,7 zieht weit mehr Strom, als seine Wattzahl vermuten lässt — genau der Fall, in dem eine Auslegung nach Watt allein schiefgeht.',
    howToUse: [
      'Wähle, ob du den Strom oder die Wirkleistung kennst.',
      'Trage die Versorgungsspannung ein.',
      'Trage den Strom ein oder die Nennleistung, wenn du den Stromkreis auslegst.',
      'Trage den Leistungsfaktor ein — ohmsche Lasten haben 1, Motoren meist 0,7 bis 0,9.',
    ],
    howItWorks: 'Wirkleistung P = U × I × cos φ, Scheinleistung S = U × I, und die Blindleistung Q ist die Wurzel aus S² − P². Für den Strom wird die erste Formel umgestellt: I = P ÷ (U × cos φ).',
    example: 'Bei 230 V und 6,5 A mit einem Leistungsfaktor von 0,95 beträgt die Wirkleistung 1420,25 W und die Scheinleistung 1495 VA.',
    faq: [
      { q: 'Nach welcher Leistung lege ich die Leitung aus?', a: 'Nach der Scheinleistung oder unmittelbar nach dem Strom. Leitung und Schutzschalter erwärmt der Strom, der fließt, und nicht der Teil davon, der nützliche Arbeit leistet.' },
      { q: 'Welchen Leistungsfaktor nehme ich, wenn er nicht auf dem Schild steht?', a: 'Heizgeräte, Wasserkocher und Glühlampen liegen praktisch bei 1. Motoren, Pumpen und Verdichter liegen meist zwischen 0,7 und 0,9, und Schaltnetzteile streuen stark — ein Blick auf das Typenschild lohnt sich.' },
      { q: 'Warum kann der Leistungsfaktor nicht über eins liegen?', a: 'Er ist das Verhältnis von Wirk- zu Scheinleistung, und die Wirkleistung kann die Scheinleistung nie übersteigen. Ein Wert über eins machte aus dem Blindanteil die Wurzel einer negativen Zahl.' },
      { q: 'Steht die Blindleistung auf einer Haushaltsrechnung?', a: 'Haushaltszähler rechnen gewöhnlich nur Wirkenergie ab. Industrietarife berechnen oft Blindleistung oder einen schlechten Leistungsfaktor, weshalb sich Kompensationskondensatoren dort rechnen.' },
    ],
  },
  'transformer-ratio': {
    longDescription: 'Das Wort ideal ist eine Bedingung und keine Verzierung: die Leistung gilt als vollständig erhalten, was also die Spannung um einen Faktor hebt, senkt den Strom um denselben Faktor. Ein echter Transformator erwärmt sich, und seine Sekundärspannung bricht unter Last ein; um wie viel, hängt von Kern, Draht und Betriebsart ab, und das kann die Rechnung nicht wissen. Der Unterschied zur einphasigen Leistung zählt: jene verbindet Spannung, Strom und Leistungsfaktor einer Wicklung, hier sind zwei Wicklungen über das Windungsverhältnis verbunden.',
    howToUse: [
      'Wähle, was du kennst: die Windungszahlen beider Wicklungen oder die gewünschte Sekundärspannung.',
      'Primärspannung und Primärstrom werden in beiden Modi eingetragen — sie ergeben die Leistung.',
      'Ein Verhältnis unter eins bedeutet einen abwärts, über eins einen aufwärts übersetzenden Transformator.',
      'Runde das erhaltene Windungsverhältnis auf: gebrochene Windungen gibt es nicht.',
    ],
    howItWorks: 'U₂ = U₁ · n₂/n₁, und der Strom geht den umgekehrten Weg: I₂ = I₁ · n₁/n₂. Die Leistung gilt als erhalten.',
    example: 'Wicklungen mit 500 und 100 Windungen setzen 220 V auf 44 V herab, und aus 2 A Primärstrom werden 10 A.',
    faq: [
      { q: 'Warum steigt der Strom, wenn die Spannung fällt?', a: 'Weil die Leistung im idealen Transformator erhalten bleibt: Spannung mal Strom ist auf beiden Seiten gleich. Senke die Spannung auf ein Fünftel, und der fünffache Strom steht bereit.' },
      { q: 'Wie weit ist das von einem echten Transformator entfernt?', a: 'Ein echter hat Kupfer- und Eisenverluste, die Sekundärspannung bricht unter Last also ein, und die abgegebene Leistung liegt unter der aufgenommenen. Bei kleinen Transformatoren erreicht der Abstand rund zehn Prozent.' },
      { q: 'Können die Windungen gebrochen herauskommen?', a: 'Nein. Die Rechnung liefert ein genaues Verhältnis, gewickelt wird aber in ganzen Windungen, das Ergebnis wird also gerundet — meist auf, damit die Spannung nicht zu kurz kommt.' },
      { q: 'Gilt das auch für einen Spartransformator?', a: 'Das Windungsverhältnis wirkt genauso, aber ein Spartransformator trennt die Wicklungen nicht galvanisch, und die Sicherheitsfragen sind dort völlig andere.' },
    ],
  },
  'voltage-divider': {
    longDescription: 'Rechnet einen Spannungsteiler aus zwei Widerständen durch: die Ausgangsspannung, den Strom hindurch und die Leistung, die jeder Zweig umsetzt. Das Verhältnis hängt allein vom Verhältnis der Zweige ab und nicht von ihren Werten: 10 kΩ mit 4,7 kΩ teilen genauso wie 100 kΩ mit 47 kΩ. Die Werte entscheiden etwas anderes — den Strom und damit die Erwärmung und den Einbruch am Ausgang. Die Formel gilt für einen unbelasteten Teiler: hängt etwas mit vergleichbarem Widerstand am unteren Zweig, wird es zu einem dritten Widerstand und zieht den Ausgang unter den berechneten Wert.',
    howToUse: [
      'Trage die Eingangsspannung und beide Widerstandswerte in Ohm ein.',
      'Der obere Zweig läuft von der Quelle zum Abgriff, der untere vom Abgriff nach Masse.',
      'Vergleiche die Leistung je Zweig mit der Belastbarkeit der Widerstände: übliche vertragen 0,25 W.',
      'Hängt eine Last am Ausgang, muss ihr Widerstand weit höher sein als der untere Zweig.',
    ],
    howItWorks: 'Ausgang = Eingang × R2 / (R1 + R2); Strom = Eingang / (R1 + R2); Leistung je Zweig = Strom² × dessen Widerstand.',
    example: '12 V an 10 kΩ und 4,7 kΩ ergeben 3,84 V bei 0,82 mA.',
    faq: [
      { q: 'Kann ein Teiler eine Last versorgen?', a: 'Nicht, wenn ihr Widerstand mit dem unteren Zweig vergleichbar ist. Sie liegt parallel zu diesem Zweig und wird zu einem dritten Widerstand: der Ausgang bricht unter den berechneten Wert ein, umso stärker, je mehr Strom die Last zieht.' },
      { q: 'Welche Widerstandswerte wähle ich für ein gegebenes Verhältnis?', a: 'Das Verhältnis hängt allein vom Verhältnis ab, es taugt also jedes Paar mit dieser Proportion. Kleine Werte ziehen mehr Strom und werden wärmer; große reagieren stärker auf Belastung und fangen Störungen ein. Kiloohm sind der übliche Kompromiss.' },
      { q: 'Warum wird die Leistung aus dem Strom und nicht aus der Spannung gerechnet?', a: 'Beide Formen sind gleichwertig, aber der Strom ist beiden Zweigen gemeinsam, das ist der kürzere Weg: jeder Zweig setzt Strom im Quadrat mal seinem eigenen Widerstand um.' },
      { q: 'Funktioniert das bei Wechselspannung?', a: 'Bei einem rein ohmschen Teiler ja, wenn die Spannung als Effektivwert gelesen wird. Kommen Kapazität oder Induktivität hinzu, entsteht eine Frequenzabhängigkeit, die hier nicht im Modell steckt.' },
    ],
  },
  'voltage-drop': {
    longDescription: 'Beziffert den Verlust, den eine lange Leitung kostet. Mit dem ohmschen Gesetz allein geht das nicht: der Widerstand muss aus der Geometrie des Leiters und dem spezifischen Widerstand seines Metalls kommen, und genau das ergänzt dieser Rechner. Der Faktor unterscheidet sich nach Versorgungsart: in einem einphasigen Stromkreis läuft der Strom über zwei Leiter hin und zurück, die Länge zählt also doppelt; bei symmetrischer dreiphasiger Last gibt es keinen Rückleiter, und der Faktor ist die Wurzel aus drei. Beides zu verwechseln ist ein verlässlicher Weg, um die Hälfte danebenzuliegen.',
    howToUse: [
      'Trage den Strom ein, den die Leitung tatsächlich führt.',
      'Trage die einfache Länge der Strecke ein, nicht hin und zurück.',
      'Trage den Leiterquerschnitt in Quadratmillimetern ein.',
      'Wähle das Metall und die Versorgungsart.',
    ],
    howItWorks: 'Der Widerstand ist der spezifische Widerstand mal Länge geteilt durch den Querschnitt. Der Spannungsfall ist dieser Widerstand mal dem Strom, mal zwei bei einphasiger oder mal der Wurzel aus drei bei dreiphasiger Versorgung.',
    example: '16 A über 20 m Kupferleitung mit 2,5 mm² bei einphasigen 230 V ergeben einen Spannungsfall von 4,48 V, also 1,95 %.',
    faq: [
      { q: 'Trage ich die Länge einfach oder hin und zurück ein?', a: 'Einfach. Die Verdopplung für den Rückleiter steckt schon im einphasigen Faktor; die Strecke hin und zurück einzutragen würde sie zweimal verdoppeln.' },
      { q: 'Wie viel Spannungsfall ist zulässig?', a: 'Üblich ist, bei Beleuchtung unter 3 % und bei anderen Verbrauchern unter 5 % zu bleiben, verbindlich ist aber, was deine örtlichen Errichtungsbestimmungen sagen. Dieser Rechner liefert die Zahl und nicht das Urteil.' },
      { q: 'Warum wird dreiphasig nicht einfach verdoppelt?', a: 'Weil sich bei symmetrischer dreiphasiger Last die Rückströme im Neutralleiter aufheben. Der Spannungsfall zwischen den Außenleitern ergibt sich als Wurzel aus drei mal dem Fall über einem Leiter.' },
      { q: 'Spielt die Temperatur eine Rolle?', a: 'Ja. Der spezifische Widerstand gilt hier für 20 °C; ein warm laufender Leiter setzt mehr Widerstand entgegen, der echte Spannungsfall ist deshalb etwas größer. Nimm die Antwort als das optimistische Ende.' },
      { q: 'Kann ich damit einen Leitungsquerschnitt wählen?', a: 'Vergleichen kannst du Querschnitte damit, aber zur Auslegung gehört auch die Strombelastbarkeit für deine Verlegeart, und das ist eine Normtabelle, die dieser Rechner bewusst nicht mitführt.' },
    ],
  },
};
