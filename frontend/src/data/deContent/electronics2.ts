import type { DeDetailedContent } from './types';

export const deElectronics2Content: Partial<Record<string, DeDetailedContent>> = {
  'inverter-power': {
    longDescription: 'Teilt die Nutzleistung durch den Wirkungsgrad und erhält so, was der Wechselrichter der Batterie tatsächlich entnimmt, und rechnet das bei der Batteriespannung in Strom um. Ein Wirkungsgrad über hundert Prozent wird abgewiesen und nicht als Tippfehler durchgewinkt: er würde die Energieerhaltung brechen und eine Zahl liefern, die es nicht geben kann.',
    howToUse: [
      'Trage die nutzbare Ausgangsleistung ein.',
      'Trage den Wirkungsgrad des Wechselrichters aus dem Datenblatt ein.',
      'Trage die Batteriespannung ein.',
    ],
    howItWorks: 'Eingangsleistung = Ausgang ÷ Wirkungsgrad; Strom = Eingangsleistung ÷ Batteriespannung; die Verluste sind die Differenz.',
    example: '1000 W bei 85 Prozent Wirkungsgrad ziehen 1176,5 W, das sind 98,04 A aus einer Batterie mit 12 V.',
    faq: [
      { q: 'Warum wird ein Wirkungsgrad über 100 Prozent abgewiesen?', a: 'Er hieße, dass der Wechselrichter mehr Energie erzeugt, als er aufnimmt. Das ist keine Rundungsfrage, sondern eine unmögliche Zahl, deshalb wird sie verweigert statt gerechnet.' },
      { q: 'Ist der Anlaufstrom enthalten?', a: 'Nein. Motoren und Verdichter ziehen für einen Moment ein Mehrfaches ihrer Nennleistung, und diese Spitze liegt außerhalb dieser Rechnung.' },
      { q: 'Wo finde ich den Wirkungsgrad?', a: 'Im Datenblatt des Wechselrichters. Er ändert sich meist mit der Last, es lohnt sich also, den Wert bei deiner üblichen Last einzutragen.' },
      { q: 'Wird die Zellchemie der Batterie berücksichtigt?', a: 'Nein. Die Rechnung ist rein elektrisch; wie sich die Batterie bei diesem Strom verhält, ist eine eigene Frage.' },
    ],
  },
  'kva-kw': {
    longDescription: 'Rechnet Kilovoltampere über den Leistungsfaktor in Kilowatt um und zurück. Drei Größen laufen im Alltag unter dem einen Wort „Leistung“ und sind doch nicht dasselbe: Generatoren und USV-Anlagen werden in kVA angegeben, und das ist eine Stromgrenze, während die Last Wirkleistung in kW aufnimmt — und nur die wird zu Wärme und Arbeit. Der Unterschied geht in die Blindleistung, die zwischen Quelle und Last hin und her pendelt, ohne etwas zu leisten, dabei aber Strom und Leitungsquerschnitt belegt. Daher der übliche Irrtum: ein Generator mit „5 kVA“ liefert bei einem Leistungsfaktor von 0,8 nur 4 kW.',
    howToUse: [
      'Wähle, was du kennst: die Angabe in kVA oder die Aufnahme in kW.',
      'Trage die bekannte Zahl ein — die andere wird schreibgeschützt.',
      'Setze den Leistungsfaktor: 0,8 für gemischte Haushaltslast, näher an 1 für rein ohmsche.',
      'Vergleiche den Blindanteil mit der Reserve deiner Leitung und deines Schutzschalters.',
    ],
    howItWorks: 'Wirkleistung = Scheinleistung × Leistungsfaktor; Blindleistung = √(Schein² − Wirk²).',
    example: 'Eine Last von 10 kW braucht bei einem Leistungsfaktor von 0,8 eine Quelle mit 12,5 kVA — 7,5 kvar Blindleistung.',
    faq: [
      { q: 'Gibt ein Generator mit 5 kVA auch 5 kW?', a: 'Nein. Bei einem Leistungsfaktor von 0,8 liefert er 4 kW; der Rest wird vom Blindanteil belegt. Kilovoltampere sind eine Stromgrenze, Kilowatt sind das, was bei der Last ankommt.' },
      { q: 'Welchen Leistungsfaktor soll ich annehmen, wenn ich ihn nicht kenne?', a: 'Für eine Mischung aus Haushaltslasten ist 0,8 der übliche Wert. Heizgeräte, Glühlampen und Heizwendeln sind nahezu rein ohmsch mit einem Faktor nahe eins; Motoren und Transformatoren liegen deutlich darunter.' },
      { q: 'Was macht die Blindleistung eigentlich?', a: 'Sie wird zweimal je Periode zwischen Quelle und Last hin und her gepumpt und leistet unter dem Strich nichts. Der Strom, den sie zieht, ist allerdings vollkommen real — deshalb werden Leitung und Schutzschalter nach der Scheinleistung ausgelegt und nicht nach der Wirkleistung.' },
      { q: 'Warum wird ein Leistungsfaktor von null abgewiesen?', a: 'Weil die Last bei null gar keine Wirkleistung aufnimmt und die Umrechnung ihren Sinn verliert: es gibt nichts, wodurch geteilt werden könnte. Der Faktor liegt definitionsgemäß über null und höchstens bei eins.' },
    ],
  },
  'lc-resonance': {
    longDescription: 'In die Formel geht allein das Produkt aus Induktivität und Kapazität ein, deshalb schwingen 100 µH mit 100 nF und 10 µH mit 1000 nF auf derselben Frequenz. Was solche Paare unterscheidet, ist der Kennwiderstand √(L/C): er setzt den Strom, der im Kreis fließt, und die Spannung, die sich darüber aufbaut — daher seine eigene Zeile. Die Einheiten sind die auf den Bauteilen aufgedruckten: Mikrohenry und Nanofarad, nicht Henry und Farad.',
    howToUse: [
      'Induktivität in Mikrohenry, Kapazität in Nanofarad — so, wie die Bauteile beschriftet sind.',
      'Rechne Pikofarad in Nanofarad um, indem du durch 1000 teilst: 470 pF sind 0,47 nF.',
      'Nur das Produkt L·C verschiebt die Frequenz: vervierfache das eine und viertle das andere, und sie bleibt stehen.',
      'Der Kennwiderstand zeigt, welchen Strom eine gegebene Spannung über dem Kreis treibt.',
    ],
    howItWorks: 'f = 1 / (2π√(L · C)) — die thomsonsche Formel; Kennwiderstand √(L/C).',
    example: '100 µH mit 100 nF ergeben 50,329 kHz bei einem Kennwiderstand von 31,623 Ω.',
    faq: [
      { q: 'Warum ergeben verschiedene Paare eine Frequenz?', a: 'Weil die Formel das Produkt L·C nimmt und nicht die Werte selbst. Die Paare 100 µH + 100 nF und 10 µH + 1000 nF teilen ein Produkt, die Frequenz stimmt also überein — verschieden ist der Kennwiderstand.' },
      { q: 'Wozu der Kennwiderstand?', a: 'Er verbindet Strom und Spannung im Kreis. Ein niedriger Kennwiderstand bedeutet große Ströme bei kleinen Spannungen, das passt zu Leistungsendstufen; ein hoher ist das Gegenteil und passt zu Empfangskreisen.' },
      { q: 'Ist der Drahtwiderstand berücksichtigt?', a: 'Nein, es ist ein idealer Kreis. Echte Verluste senken die Güte und schieben die Frequenz leicht nach unten, was beim Abgleichen gewöhnlich vernachlässigt wird.' },
      { q: 'Unterscheidet sich ein Reihen- von einem Parallelkreis?', a: 'Ihre Resonanzfrequenz ist dieselbe. Das Verhalten unterscheidet sich: bei Resonanz zeigt ein Reihenkreis den kleinsten Widerstand, ein Parallelkreis den größten.' },
    ],
  },
  'led-resistor': {
    longDescription: 'Ermittelt den Vorwiderstand, der die Differenz zwischen deiner Versorgung und der Flussspannung der LED abfängt, und zeigt danach, wie viel Leistung Widerstand und LED jeweils umsetzen. Die Flussspannung wird vor jeder Rechnung gegen die Versorgung geprüft, denn ein Widerstand kann keine Differenz abfangen, die es nicht gibt.',
    howToUse: [
      'Trage die Versorgungsspannung deiner Schaltung ein.',
      'Trage die Flussspannung der LED aus ihrem Datenblatt ein.',
      'Trage den Durchlassstrom in Milliampere oder Ampere ein.',
    ],
    howItWorks: 'R = (Versorgungsspannung − Flussspannung) ÷ Strom; der Widerstand setzt diesen Spannungsabfall mal demselben Strom um.',
    example: 'Eine LED mit 2 V bei 20 mA an 5 V braucht (5 − 2) ÷ 0,02 = 150 Ohm.',
    faq: [
      { q: 'Warum muss die Flussspannung unter der Versorgung liegen?', a: 'Der Widerstand ist dazu da, die Differenz abzufangen. Ohne Differenz gibt es nichts abzufangen und keinen Arbeitspunkt einzustellen.' },
      { q: 'Welchen Widerstand soll ich tatsächlich kaufen?', a: 'Nimm den nächsten Normwert bei oder über dem berechneten und prüfe seine Belastbarkeit gegen die hier angezeigte Leistung.' },
      { q: 'Spielt die Einheit des Stroms eine Rolle?', a: 'Nur bei der Eingabe. Milliampere und Ampere ergeben nach der Umrechnung dieselbe Antwort, und der Rechner rechnet für dich um.' },
      { q: 'Ist die Leistung in der LED dieselbe wie im Widerstand?', a: 'Nein. Beide führen denselben Strom, aber jedes Bauteil setzt seine eigene Spannung mal diesem Strom um, die beiden Zahlen unterscheiden sich also.' },
    ],
  },
  'ne555-timer-astable': {
    longDescription: 'Der NE555 im astabilen Betrieb ist der langlebigste Baustein der Hobbyelektronik: Blinker, Oszillatoren, Pulsweitensteuerung. Der Kondensator lädt über beide Widerstände, entlädt sich aber allein über den zweiten, deshalb ist die High-Zeit stets länger als die Low-Zeit, und das Tastverhältnis der klassischen Schaltung fällt nie unter fünfzig Prozent. Das ist eine Eigenschaft der Schaltung und keine Grenze der Rechnung, und das zu wissen zählt mehr als die Frequenz selbst.',
    howToUse: [
      'R1 liegt zwischen Versorgung und Anschluss 7, R2 zwischen Anschluss 7 und 6, und der Kondensator geht von Anschluss 6 nach Masse.',
      'Ein Tastverhältnis unter fünfzig Prozent ist in der klassischen Schaltung nicht möglich: dafür braucht es eine Entladediode über R2.',
      'Um die Frequenz zu senken, vergrößere den Kondensator: Widerstände über einem Megohm machen die Schaltung empfindlich gegen Kriechströme.',
      'Die echte Frequenz weicht von der berechneten um die Bauteiltoleranz ab — Elektrolytkondensatoren erreichen zwanzig Prozent.',
    ],
    howItWorks: 'High-Zeit ln2·(R1+R2)·C, Low-Zeit ln2·R2·C; die Frequenz ist der Kehrwert ihrer Summe, das Tastverhältnis der High-Anteil.',
    example: 'R1 10 kΩ, R2 47 kΩ und 100 nF ergeben 136 Hz bei einem Tastverhältnis von rund 55 Prozent.',
    faq: [
      { q: 'Warum fällt das Tastverhältnis nie unter fünfzig Prozent?', a: 'Weil der Kondensator über R1 und R2 lädt, sich aber allein über R2 entlädt. Die Ladezeit ist immer länger, und genau fünfzig Prozent werden nur im Grenzfall erreicht, wenn R1 sehr viel kleiner als R2 ist.' },
      { q: 'Wie bekomme ich ein Tastverhältnis unter der Hälfte?', a: 'Setze eine Diode über R2 mit der Kathode zu Anschluss 7: das Laden umgeht dann R2 und läuft nur über R1. Die Schaltung ist damit nicht mehr die klassische, und diese Formel beschreibt sie nicht mehr.' },
      { q: 'Warum steht ln2 in der Formel?', a: 'Die Schwellen des NE555 liegen bei einem Drittel und zwei Dritteln der Versorgung. Die exponentielle Ladung braucht dazwischen genau RC·ln2, und die Versorgungsspannung kürzt sich heraus: die Frequenz hängt nicht von ihr ab.' },
      { q: 'Warum weicht die echte Frequenz ab?', a: 'Bauteiltoleranz. Widerstände liegen meist innerhalb von 1–5 Prozent, Elektrolytkondensatoren aber bei 20, und der Kondensator setzt gewöhnlich den Fehler.' },
    ],
  },
  'rc-filter': {
    longDescription: 'Ermittelt Grenzfrequenz und Zeitkonstante einer RC-Stufe erster Ordnung. Dieselbe Schaltung ist zugleich Filter und Verzögerung: sie wird als die Frequenz gelesen, bei der das Signal um 3 dB abfällt, und als die Zeit, die der Kondensator braucht, um auf 63 % der Versorgung zu laden. Beides ruht auf dem einen Produkt R·C, wird deshalb zusammen berechnet und bewegt sich zusammen: 10 kΩ mit 100 nF und 1 kΩ mit 1000 nF ergeben genau dieselbe Antwort. Der Abfall hinter der Grenzfrequenz beträgt 20 dB je Dekade; zweipolige und aktive Filter mit ihrer Güte liegen außerhalb dessen, was diese Formel beschreibt.',
    howToUse: [
      'Trage den Widerstand in Ohm ein: 10 kΩ sind 10000.',
      'Trage die Kapazität in Nanofarad ein, so wie sie beschriftet ist: 0,1 µF sind 100 nF.',
      'Die Grenzfrequenz ist die Stelle, an der das Signal um 3 dB abgefallen ist.',
      'Die Zeitkonstante zählt, wenn die Schaltung als Verzögerung dient und nicht als Filter.',
    ],
    howItWorks: 'τ = R · C, Grenzfrequenz = 1 / (2π · τ). Die Kapazität wird von Nanofarad in Farad umgerechnet.',
    example: '10 kΩ mit 100 nF ergeben eine Grenzfrequenz von 159,15 Hz und eine Zeitkonstante von 1 ms.',
    faq: [
      { q: 'Warum ergeben verschiedene Paare aus R und C dieselbe Frequenz?', a: 'Weil allein das Produkt R·C in die Formel eingeht. 10 kΩ mit 100 nF und 1 kΩ mit 1000 nF sind dasselbe Produkt, also dieselbe Grenzfrequenz und dieselbe Zeitkonstante.' },
      { q: 'Wie unterscheidet sich die Grenzfrequenz vom Ende des Durchlassbereichs?', a: 'Die Grenzfrequenz ist keine Wand. Das Signal ist dort bereits um 3 dB gefallen — die halbe Leistung — und fällt danach um weitere 20 dB je Dekade. Der Durchlassbereich endet allmählich.' },
      { q: 'Was zeigt die Einschwingzeit?', a: 'In einer Zeitkonstante erreicht der Kondensator 63 % der Spannung, in fünf rund 99 %. Fünf τ gilt als praktische Einschwingzeit.' },
      { q: 'Gilt das auch für ein Filter zweiter Ordnung?', a: 'Nein. Die Formel beschreibt eine einzelne RC-Stufe mit 20 dB Abfall je Dekade. Zweipolige und aktive Filter bringen eine Güte mit, die ein reines RC-Glied überhaupt nicht hat.' },
    ],
  },
  'resistor-color': {
    longDescription: 'Liest den Widerstandswert vom Bauteil ab: die ersten beiden Ringe sind Ziffern, der dritte ist der Multiplikator, der vierte die Toleranz. Über den Wert hinaus zeigt die Seite den Bereich, in den ein echter Widerstand fallen muss — die Beschriftung verspricht ein Band und keine genaue Zahl, und bei ±10 % ist ein gemessener Widerstand ein Zehntel neben dem Nennwert normal und nicht defekt. Silberne und goldene Multiplikatorringe ergeben Bruchteile eines Ohms; solche Bauteile arbeiten meist als Strommesswiderstände.',
    howToUse: [
      'Dreh den Widerstand so, dass der einzeln stehende Toleranzring rechts liegt.',
      'Wähle die Farben der ersten beiden Ringe — das sind die Ziffern.',
      'Wähle die Farbe des dritten Rings — den Multiplikator.',
      'Wähle die Farbe des vierten Rings — die Toleranz.',
    ],
    howItWorks: 'Wert = (erste Ziffer × 10 + zweite Ziffer) × 10 hoch dem Multiplikator. Die Toleranzgrenzen sind der Wert mal 1 ± Toleranz ÷ 100.',
    example: 'Gelb, violett, rot und gold ergeben 4,7 kOhm ±5 %, also von 4,465 bis 4,935 kOhm.',
    faq: [
      { q: 'Von welchem Ende lese ich ab?', a: 'Von der Seite, auf der die Ringe ohne Lücke beieinanderstehen. Der Toleranzring steht etwas abgesetzt und ist fast immer gold oder silber — halte ihn rechts.' },
      { q: 'Warum weicht der gemessene Widerstand vom Nennwert ab?', a: 'Weil die Beschriftung einen Bereich verspricht und keine genaue Zahl. Bei ±5 % misst ein Widerstand mit 4,7 kOhm völlig regelgerecht zwischen 4,465 und 4,935 kOhm.' },
      { q: 'Was bedeuten silberne und goldene Multiplikatorringe?', a: 'Multiplikatoren von 0,01 beziehungsweise 0,1. Solche Widerstände liegen bei Bruchteilen eines Ohms und dienen gewöhnlich als Strommesswiderstände.' },
      { q: 'Und bei fünf Ringen?', a: 'Ein Widerstand mit fünf Ringen hat drei Ziffern statt zwei, und Multiplikator und Toleranz rücken um eine Stelle weiter. Diese Seite liest die Beschriftung mit vier Ringen, die gebräuchliche.' },
    ],
  },
};
