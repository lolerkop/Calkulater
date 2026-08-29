import type { DeDetailedContent } from './types';

export const deElectronics1Content: Partial<Record<string, DeDetailedContent>> = {
  'battery-charge-time': {
    longDescription: 'Schätzt die Ladezeit: die Kapazität in Amperestunden geteilt durch den Ladestrom, angepasst um den Wirkungsgrad. Es ist die Umkehrung der Frage nach der Laufzeit — jene Seite sagt, wie lange ein Akku unter Last hält, diese, wie lange das Nachfüllen dauert. Die Schätzung ist idealisiert: ein echtes Ladegerät nimmt den Strom gegen Ende des Zyklus zurück, die letzten Prozent dauern deshalb merklich länger als berechnet.',
    howToUse: [
      'Trage die Kapazität des Akkus in Amperestunden ein.',
      'Gib den Ladestrom an.',
      'Senke den Wirkungsgrad bei Bedarf — die Zeit wächst entsprechend.',
    ],
    howItWorks: 'Zeit = Kapazität ÷ (Strom × Wirkungsgrad ÷ 100). Bei 100 % Wirkungsgrad ist es schlicht Kapazität geteilt durch Strom.',
    example: 'Ein Akku mit 100 Ah lädt bei 10 A in 10 h 0 min bei vollem Wirkungsgrad.',
    faq: [
      { q: 'Worin unterscheidet sich das von der Laufzeit eines Akkus?', a: 'Die Laufzeit beantwortet, wie lange eine Ladung unter Last hält. Dies ist die Umkehrung — wie lange das Auffüllen der Kapazität dauert.' },
      { q: 'Warum dauert echtes Laden länger?', a: 'Weil das Ladegerät den Strom gegen Ende des Zyklus zurücknimmt, damit der Akku nicht zu warm wird. Die letzten Prozent kommen viel langsamer herein, und das steckt hier nicht im Modell.' },
      { q: 'Welchen Wirkungsgrad soll ich nehmen?', a: 'Bei einfachen Ladegeräten meist 80–90 %: ein Teil der Energie geht als Wärme verloren. Bei 100 % ist das Ergebnis eine untere Schranke für die Zeit.' },
      { q: 'Wird die verbleibende Ladung berücksichtigt?', a: 'Nein, es wird vom Laden aus leerem Zustand ausgegangen. Ist der Akku halb voll, trage die halbe Kapazität ein.' },
    ],
  },
  'battery-runtime': {
    longDescription: 'Macht aus Amperestunden über die Akkuspannung Wattstunden, wendet Entladetiefe und Wirkungsgrad der Wandlung an und teilt danach durch die Last. Amperestunden sind keine Energie, und beides zu verwechseln liefert eine Antwort, die um den Faktor der Spannung danebenliegt — deshalb geschieht die Umrechnung in einem sichtbaren Schritt.',
    howToUse: [
      'Trage Kapazität in Amperestunden und die Akkuspannung ein.',
      'Trage die Last in Watt ein.',
      'Setze Entladetiefe und Wirkungsgrad der Wandlung.',
    ],
    howItWorks: 'Energie = Kapazität × Spannung × Entladetiefe × Wirkungsgrad; Laufzeit = Energie ÷ Last.',
    example: '100 Ah bei 12 V mit 80 Prozent Entladetiefe und 90 Prozent Wirkungsgrad ergeben 864 Wh, das trägt eine Last von 200 W über 4,32 Stunden.',
    faq: [
      { q: 'Warum fällt die echte Laufzeit kürzer aus?', a: 'Die Rechnung ist linear. Bleiakkus geben bei hohem Strom weniger her, und Entladekurve, Peukert-Effekt und Temperatur stecken hier nicht im Modell.' },
      { q: 'Wozu die Entladetiefe?', a: 'Die meisten Akkus sollten nicht ganz geleert werden. Sie auf 80 Prozent zu setzen heißt, dass nur dieser Anteil der Kapazität als nutzbar gilt.' },
      { q: 'Soll der Wechselrichter im Wirkungsgrad stecken?', a: 'Ja, wenn die Last über einen läuft. Genau diesen Wandlungsverlust soll das Feld erfassen.' },
      { q: 'Warum wird mit der Spannung multipliziert?', a: 'Amperestunden messen Ladung und keine Energie. Die Multiplikation mit der Spannung macht daraus Wattstunden, und die verbraucht eine Last in Watt.' },
    ],
  },
  'battery-series-parallel': {
    longDescription: 'In Reihe addieren sich die Spannungen, parallel addieren sich die Kapazitäten, und beides zu verwechseln ist teuer. Dieselben zwölf Zellen ergeben als 4S3P 14,8 V bei 10,2 Ah, als 3S4P dagegen 11,1 V bei 13,6 Ah — gleiche gespeicherte Energie, aber nur eine der beiden treibt ein Gerät, das 12 V erwartet. Die Verschaltung muss zur Zellzahl passen: Reihe mal parallel muss die Gesamtzahl ergeben. Eine Abweichung bedeutet einen Fehler im Plan und kein ungewöhnliches Pack, und sie stillschweigend nachzurechnen würde genau den Fehler verdecken, den man vor dem Löten finden will.',
    howToUse: [
      'Trage die Gesamtzahl der Zellen ein, die du hast.',
      'Trage Spannung und Kapazität einer Zelle ein.',
      'Trage ein, wie viele Zellen in Reihe liegen und wie viele Stränge parallel laufen.',
      'Die beiden Zahlen der Verschaltung müssen multipliziert die Gesamtzahl ergeben.',
    ],
    howItWorks: 'Spannung des Packs = Zellspannung × Zellen in Reihe. Kapazität des Packs = Zellkapazität × parallele Stränge. Die Energie ist Spannung mal Kapazität.',
    example: 'Zwölf Zellen mit 3,7 V und 3,4 Ah ergeben als 4S3P 14,8 V, 10,2 Ah und 150,96 Wh.',
    faq: [
      { q: 'Welche Verschaltung soll ich wählen?', a: 'Triff zuerst die Spannung, die dein Gerät braucht, und nutze die übrigen Zellen parallel für die Kapazität. Die Spannung ist eine harte Anforderung; die Kapazität ändert nur, wie lange es läuft.' },
      { q: 'Warum ist die Energie in beiden Fällen gleich?', a: 'Weil Energie Spannung mal Kapazität ist und die Verschaltung dieselbe Gesamtmenge zwischen beiden Faktoren verschiebt. Was sich ändert, ist, ob das Pack zum Gerät passt.' },
      { q: 'Darf ich Zellen verschiedener Kapazität mischen?', a: 'Nicht gefahrlos. In Reihe begrenzt die schwächste Zelle den ganzen Strang und kann in die Umpolung getrieben werden; parallel nimmt eine unpassende Zelle ungleichen Strom auf. Nimm gleiche Zellen.' },
      { q: 'Sind ein Batteriemanagement oder Leitungsverluste berücksichtigt?', a: 'Nein. Echte Packs verlieren unter Last Spannung über Innenwiderstand und Verbindungen, und eine Schutzplatine bringt eigene Abschaltschwellen mit. Nimm diese Zahlen als Nennwerte.' },
    ],
  },
  'capacitor-basics': {
    longDescription: 'Verbindet die drei Größen eines Kondensators — Ladung, Spannung und Kapazität — und löst in jede Richtung auf, daneben steht die Energie des elektrischen Feldes. Die Kapazität wird in Mikrofarad und die Ladung in Mikrocoulomb eingetragen, also in den Einheiten, die auf dem Bauteil stehen. Verwechsle Farad nicht mit den Amperestunden eines Akkus: Amperestunden sind ein Vorrat an Ladung für dauerhafte Abgabe, Farad ist die Fähigkeit, Ladung bei gegebener Spannung zu halten — zwei Dinge verschiedener Art.',
    howToUse: [
      'Wähle, welche der drei Größen du suchst.',
      'Trage die beiden anderen ein — die gesuchte wird schreibgeschützt.',
      'Nimm die Kapazität in Mikrofarad direkt vom Bauteil ab.',
      'Prüfe die Spannung gegen die Nennspannung des Kondensators: diese Rechnung tut das nicht.',
    ],
    howItWorks: 'Die Ladung ist Kapazität mal Spannung: Q = C·V. Die gespeicherte Energie ist die halbe Kapazität mal der Spannung im Quadrat, mit Mikrofarad in Farad umgerechnet.',
    example: 'Ein Kondensator mit 100 µF trägt bei 12 V die Ladung 1200 µC und speichert 0,0072 J.',
    faq: [
      { q: 'Wie unterscheidet sich Farad von den Amperestunden eines Akkus?', a: 'Amperestunden sind ein Vorrat an Ladung für dauerhafte Abgabe. Farad ist die Fähigkeit, Ladung bei gegebener Spannung zu halten. Beides ist verschiedener Art und lässt sich nicht unmittelbar vergleichen.' },
      { q: 'Warum wächst die Energie schneller als die Spannung?', a: 'Weil die Ladung linear mit der Spannung geht, die Energie aber quadratisch. Doppelte Spannung heißt doppelte Ladung und vierfache Energie.' },
      { q: 'Wird die Nennspannung berücksichtigt?', a: 'Nein. Die Rechnung verbindet die Größen über die Formel und weiß nichts von der Grenze im Datenblatt. Die Nennspannung zu überschreiten zerstört das Bauteil, unabhängig vom angezeigten Ergebnis.' },
      { q: 'Und Reihen- und Parallelschaltung?', a: 'Hier geht es um einen Kondensator. Parallel addieren sich die Kapazitäten; in Reihe addieren sich die Kehrwerte.' },
    ],
  },
  'capacitor-network': {
    longDescription: 'Die Formeln für Kondensatoren sind gegenüber denen für Widerstände vertauscht, und daher rühren die meisten Fehler: parallel addieren sich die Kapazitäten, in Reihe addieren sich die Kehrwerte — genau so, wie es Widerstände parallel tun. Der Grund ist physikalisch: eine Parallelschaltung vergrößert die Plattenfläche, eine Reihenschaltung vergrößert den Abstand zwischen den Platten, ein Strang in Reihe hat deshalb weniger Kapazität als sein kleinstes Glied.',
    howToUse: [
      'Liste die Werte mit Leerzeichen, Kommas oder Zeilenumbrüchen getrennt.',
      'Alle Werte stehen in Mikrofarad: trage 0,1 µF als 0.1 ein, und 100 nF ebenfalls als 0.1.',
      'Vergleiche die Antwort mit dem kleinsten Wert: in Reihe liegt die Summe immer darunter.',
      'Rechne gemischte Netze in Teilen: erst die Gruppen, dann deren Ergebnisse.',
    ],
    howItWorks: 'Parallel: C = C₁ + C₂ + …; in Reihe: 1/C = 1/C₁ + 1/C₂ + …',
    example: '100, 220 und 470 µF ergeben in Reihe 59,98 µF und parallel 790 µF.',
    faq: [
      { q: 'Warum ist alles gegenüber Widerständen vertauscht?', a: 'Eine Parallelschaltung vergrößert die Plattenfläche, und die Kapazität ist der Fläche proportional. Eine Reihenschaltung vergrößert den Spalt zwischen den Platten, und die Kapazität ist ihm umgekehrt proportional.' },
      { q: 'Kann die Summe kleiner sein als der kleinste Kondensator?', a: 'In Reihe ist sie das immer. Drei Kondensatoren zu 100 µF ergeben 33,3 µF, und das ist eine Eigenschaft der Schaltung und kein Fehler.' },
      { q: 'Warum überhaupt Kondensatoren in Reihe schalten?', a: 'Wegen der Spannung: ein Strang in Reihe hält die Summe der Betriebsspannungen seiner Glieder aus. Die Kapazität sinkt als Gegenleistung für diese Festigkeit.' },
      { q: 'Ist die Toleranz der Werte berücksichtigt?', a: 'Nein. Elektrolytkondensatoren streuen oft um zwanzig Prozent und mehr, eine echte Bank weicht also stärker vom berechneten Wert ab, als es scheint.' },
    ],
  },
  'coaxial-cable-impedance': {
    longDescription: 'Den Wellenwiderstand eines Kabels setzen allein seine Geometrie und sein Dielektrikum: weder Länge noch Frequenz stehen in der Formel. Ein Kabel mit fünfzig Ohm hat fünfzig Ohm über einen Meter wie über hundert. Alles hängt am Verhältnis von Schirm- zu Leiterdurchmesser: rund 3,6 in Polyethylen ergeben die klassischen 50 Ohm, rund 8,8 die 75 Ohm der Fernsehtechnik. Der Verkürzungsfaktor erklärt, warum ein Stück Kabel elektrisch länger ist als körperlich — und ohne ihn lässt sich keine Viertelwellenleitung ablängen.',
    howToUse: [
      'Nimm den Innendurchmesser des Schirms, gemessen über dem Dielektrikum und nicht über dem Außenmantel.',
      'Permittivität: massives Polyethylen 2,25, geschäumtes 1,4–1,6, PTFE 2,1, Luft 1.',
      'Ein Durchmesserverhältnis von 3,6 in Polyethylen ergibt 50 Ohm, 8,8 ergeben 75 Ohm.',
      'Der Verkürzungsfaktor wird gebraucht, wenn Längen in Bruchteilen einer Wellenlänge abgelängt werden: die körperliche Länge ist kürzer als die elektrische.',
    ],
    howItWorks: 'Z₀ = 138/√εr · log₁₀(D/d); Kapazität 2πε₀εr/ln(D/d); Verkürzungsfaktor 1/√εr.',
    example: 'Ein Innenleiter von 0,9 mm in einem Schirm von 2,95 mm mit Polyethylen ergibt 47,4 Ohm — gewöhnliches RG-58.',
    faq: [
      { q: 'Hängt die Impedanz von der Kabellänge ab?', a: 'Nein. Sie wird vom Querschnitt und vom Dielektrikum gesetzt und ist auf jeder Länge dieselbe. Dämpfung und Laufzeit hängen von der Länge ab, die Impedanz nicht.' },
      { q: 'Warum ausgerechnet 50 und 75 Ohm?', a: 'Es sind Kompromisse. Koaxialkabel überträgt die meiste Leistung nahe 30 Ohm und hat die geringste Dämpfung nahe 77; 50 liegt für Sender in der Mitte, während 75 für Signaltechnik näher am Dämpfungsminimum liegt.' },
      { q: 'Was ist der Verkürzungsfaktor?', a: 'Das Verhältnis der Wellengeschwindigkeit im Kabel zur Lichtgeschwindigkeit. In Polyethylen liegt er bei rund zwei Dritteln, eine Viertelwellenleitung ist deshalb genau um diesen Faktor kürzer als eine Viertelwellenlänge in Luft.' },
      { q: 'Was passiert bei Fehlanpassung?', a: 'Ein Teil der Leistung wird zur Quelle zurückgeworfen. In einem Sender heizt das die Endstufe; auf einer digitalen Leitung führt es zu Reflexionen und Fehlern. Deshalb werden Kabel, Stecker und Last auf eine Impedanz ausgelegt.' },
    ],
  },
  'headphone-power': {
    longDescription: 'Die Empfindlichkeit in Dezibel je Milliwatt ist die Lautstärke bei einem Milliwatt, und von dort bringt jede Verdopplung der Leistung genau drei Dezibel. Daraus folgt der überraschende Schluss: um doppelt so laut zu klingen, braucht es rund die zehnfache Leistung. Spannung und Strom stehen gesondert, weil genau sie ein Verstärker begrenzt — hochohmigen Kopfhörern geht die Spannung aus, niederohmigen der Strom, und die Leistung allein sagt nicht, welches von beidem.',
    howToUse: [
      'Nimm die Empfindlichkeit aus dem Datenblatt. Steht sie in dB/V, rechne sie um: dB/mW und dB/V sind nicht austauschbar.',
      'Die Impedanz steht ebenfalls im Datenblatt; bei dynamischen Kopfhörern ändert sie sich mit der Frequenz, hier wird der Nennwert verwendet.',
      'Vergleiche die sich ergebende Spannung und den Strom mit den Grenzen deines Verstärkers — meist gehen diese aus und nicht die Leistung.',
      'Dauerhaftes Hören über 85 dB schädigt das Gehör; 110 dB sind nur für Sekunden unbedenklich.',
    ],
    howItWorks: 'Schalldruckpegel = Empfindlichkeit + 10·log₁₀(P); U = √(P·R), I = √(P/R).',
    example: 'Kopfhörer mit 100 dB/mW an 32 Ω ergeben bei 10 mW einen Pegel von 110 dB, 0,566 V und 17,68 mA.',
    faq: [
      { q: 'Warum bringt doppelte Leistung nur +3 dB?', a: 'Das Dezibel ist logarithmisch: der Zugewinn ist 10·log₁₀ des Leistungsverhältnisses, und log₁₀2 ≈ 0,3. Empfunden „doppelt so laut“ entspricht rund +10 dB, also der zehnfachen Leistung.' },
      { q: 'Was zählt mehr, Impedanz oder Empfindlichkeit?', a: 'Die Empfindlichkeit setzt die Lautstärke; die Impedanz setzt, was der Verstärker dafür liefern muss. Hochohmige Kopfhörer wollen Spannung, niederohmige Strom; bei gleicher Empfindlichkeit sind sie bei gleicher Leistung gleich laut.' },
      { q: 'Brauche ich einen eigenen Verstärker?', a: 'Vergleiche die sich ergebende Spannung und den Strom mit den Angaben deiner Quelle. Braucht bequemes Hören mehr, als sie liefert, klingt es leise oder verzerrt — dann hilft ein Verstärker, sonst nicht.' },
      { q: 'Warum sind dB/mW und dB/V verschieden?', a: 'Es sind zwei Arten, dieselbe Eigenschaft anzugeben. Die Umrechnung hängt von der Impedanz ab: rund 15 dB bei 32 Ω, rund 5 dB bei 300 Ω. Eines für das andere einzusetzen liegt bei der Leistung um eine Größenordnung daneben.' },
    ],
  },
};
