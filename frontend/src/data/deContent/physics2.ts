import type { DeDetailedContent } from './types';

export const dePhysics2Content: Partial<Record<string, DeDetailedContent>> = {
  'centripetal-force': {
    longDescription: 'Alles, was sich auf einer Kreisbahn bewegt, wird zur Mitte gezogen, und die nötige Kraft wächst mit dem Quadrat der Geschwindigkeit, während sie mit dem Radius nur geradlinig fällt. Diese Ungleichheit ist das praktische Ergebnis, das man sich merken sollte: die doppelte Geschwindigkeit durch eine Kurve vervierfacht die Kraft, die Reifen, Seil oder Schiene aufbringen müssen, während der halbe Radius sie lediglich verdoppelt. Eine doppelt so enge Kurve zu nehmen ist also leichter, als dieselbe Kurve doppelt so schnell zu nehmen, und die Zahlen hier machen die Größe dieses Unterschieds sichtbar.',
    howToUse: [
      'Trage die Masse des bewegten Körpers in Kilogramm ein.',
      'Trage seine Geschwindigkeit auf der Kreisbahn in Metern je Sekunde ein.',
      'Trage den Radius der Kreisbahn in Metern ein.',
      'Vergleiche die Kraft mit dem, was Reifen, Seil oder Schiene tatsächlich aufbringen können.',
    ],
    howItWorks: 'F = m × v² ÷ r. Die Beschleunigung ist v² ÷ r, die Winkelgeschwindigkeit v ÷ r, und die Dauer eines Umlaufs 2πr ÷ v.',
    example: 'Ein Fahrzeug mit 1200 kg braucht bei 15 m/s auf einem Radius von 40 m 6750 N zur Mitte hin.',
    faq: [
      { q: 'Ist die Zentripetalkraft eine eigene Kraftart?', a: 'Nein. Sie ist eine Rolle und keine Quelle. Reibung, Seilzug, Schwerkraft oder die Fahrbahn bringen sie auf; die Formel sagt, wie viel nötig ist, und nicht, woher es kommt.' },
      { q: 'Und die Fliehkraft?', a: 'Das ist es, wie sich die Bewegung von innerhalb des drehenden Körpers anfühlt, und keine von außen wirkende Kraft. Im Bezugssystem des Bodens gibt es allein den Zug nach innen.' },
      { q: 'Warum zählt die Geschwindigkeit so viel mehr als der Radius?', a: 'Die Geschwindigkeit geht im Quadrat ein und der Radius nur in der ersten Potenz. Doppelte Geschwindigkeit braucht die vierfache Kraft; der halbe Radius nur die doppelte.' },
      { q: 'Wird die Umlaufdauer bei einem ruhenden Körper angezeigt?', a: 'Nein. Bei der Geschwindigkeit null kommt ein Umlauf nie zustande, die Zeile entfällt also, statt eine unbegrenzte Zahl zu zeigen. Die Kraft selbst ist berechtigterweise null.' },
    ],
  },
  'coulomb': {
    longDescription: 'Die Kraft fällt mit dem Quadrat des Abstands — wie die Schwerkraft —, aber anders als jene kann sie anziehen und abstoßen: die Ladungen setzen das Vorzeichen. Deshalb wird die Hauptantwort als Betrag angezeigt und die Art der Wechselwirkung in Worten genannt: „Anziehung“ liest sich besser als ein Minuszeichen. Die Ladungen werden in Nanocoulomb und der Abstand in Zentimetern eingetragen, den Einheiten, mit denen Lehrbücher tatsächlich arbeiten.',
    howToUse: [
      'Ladungen in Nanocoulomb: 1 nC sind 10⁻⁹ C, eine übliche Größenordnung im Unterricht.',
      'Das Vorzeichen zählt: ungleiche Vorzeichen ziehen an, gleiche stoßen ab.',
      'Der Abstand gilt zwischen den Mittelpunkten und setzt Punktladungen voraus.',
      'Das gilt für das Vakuum. In einem Medium mit der Permittivität ε ist die Kraft um ε kleiner.',
    ],
    howItWorks: 'F = k·q₁·q₂/r², mit k = 8,99·10⁹ N·m²/C².',
    example: 'Ladungen von 1 und −1 nC im Abstand von 10 cm ziehen sich mit 8,988·10⁻⁷ N an.',
    faq: [
      { q: 'Wie ähnelt das coulombsche Gesetz der Gravitation?', a: 'Beide fallen mit dem Quadrat des Abstands und wachsen mit dem Produkt der „Ladungen“ — elektrisch oder als Masse. Der wesentliche Unterschied: Masse ist immer positiv, die Schwerkraft zieht also nur an, während elektrische Ladung zwei Vorzeichen hat.' },
      { q: 'Wie viel stärker ist die Elektrostatik als die Schwerkraft?', a: 'Unvergleichlich. Zwei Elektronen stoßen sich elektrisch rund 10⁴²-mal stärker ab, als sie sich gravitativ anziehen. Deshalb ist Materie im Großen elektrisch neutral: jedes Ungleichgewicht wird sofort zurückgezogen.' },
      { q: 'Was ist die Feldstärke?', a: 'Die Kraft, die an dieser Stelle auf eine positive Einheitsladung wirken würde. Sie hängt nicht von der zweiten Ladung ab und beschreibt das Feld selbst statt eines Körperpaares, was Quellen vergleichbar macht.' },
      { q: 'Warum kann die potentielle Energie negativ sein?', a: 'Sie wird vom Unendlichen aus gemessen. Bei sich anziehenden Ladungen musst du Arbeit verrichten, um sie unendlich weit auseinanderzuziehen, ihre jetzige Energie liegt also unter null.' },
    ],
  },
  'de-broglie': {
    longDescription: 'Jeder Körper hat Welleneigenschaften, aber bei makroskopischen sind sie vernachlässigbar: ein geworfener Ball bekommt eine Wellenlänge, die dreißig Größenordnungen unter einem Atomkern liegt, und nichts kann sie beobachten. Der sinnvolle Bereich sind Teilchen, deshalb wird die Masse in Einheiten von 10⁻²⁷ kg eingetragen: ein Elektron hat 0,00091093837, ein Proton 1,6726. Der Unterschied zu einem Wellenrechner: jener verbindet Geschwindigkeit, Frequenz und Länge einer elastischen Welle, während hier die Länge über die plancksche Konstante aus dem Impuls des Teilchens folgt.',
    howToUse: [
      'Masse in Einheiten von 10⁻²⁷ kg: Elektron 0,00091093837, Proton 1,67262, Neutron 1,67493.',
      'Geschwindigkeit in Kilometern je Sekunde — handlicher als Meter: Elektronen in Geräten laufen mit Tausenden km/s.',
      'Die Zeile in Nanometern hilft beim Vergleich mit Atomabständen von rund 0,1–0,3 nm.',
      'Für makroskopische Körper ist die Rechnung formal richtig, das Ergebnis aber nicht beobachtbar.',
    ],
    howItWorks: 'λ = h / (m · v), mit h = 6,62607015·10⁻³⁴ J·s.',
    example: 'Ein Elektron mit 1000 km/s hat eine Wellenlänge von 7,27·10⁻¹⁰ Metern — unter einem Nanometer.',
    faq: [
      { q: 'Warum hat ein Ball keine merkliche Welle?', a: 'Weil die Wellenlänge dem Impuls umgekehrt proportional ist. Ein Ball von 150 Gramm bei 30 m/s bekommt rund 10⁻³⁴ Meter — zwanzig Größenordnungen unter einem Atomkern, und kein Gerät kann das auflösen.' },
      { q: 'Warum die Masse in Einheiten von 10⁻²⁷ kg?', a: 'Die Masse eines Elektrons in Kilogramm ist 9,11·10⁻³¹, und der Browser schreibt solche Zahlen in Exponentialform, die das Eingabefeld nicht annimmt. In Einheiten von 10⁻²⁷ bleibt der Wert eine gewöhnliche Dezimalzahl.' },
      { q: 'Warum zählt die Wellenlänge eines Elektrons?', a: 'Sie setzt die Auflösungsgrenze eines Elektronenmikroskops. Schnellere Elektronen bedeuten eine kürzere Welle und feinere sichtbare Einzelheiten — genau deshalb sieht ein solches Mikroskop, was ein Lichtmikroskop nicht sieht.' },
      { q: 'Gilt die Formel nahe der Lichtgeschwindigkeit?', a: 'In dieser Form nicht: dort ist der Impuls relativistisch, und die Antwort weicht merklich ab. Diese Rechnung ist für Geschwindigkeiten weit unter der Lichtgeschwindigkeit gedacht.' },
    ],
  },
  'decibel': {
    longDescription: 'Dezibelpegel addieren sich nicht arithmetisch, und das ist das zentrale Missverständnis beim Lärm: zwei Quellen zu 80 dB ergeben 83,01 dB und nicht 160. Leistungen addieren sich, und ein Dezibel ist der Logarithmus ihres Verhältnisses, die Summe wird also gebildet, indem zuerst auf die lineare Skala zurückgegangen wird. Die Leistung zu verdoppeln bringt stets genau 3,01 dB, von welchem Pegel aus auch immer. Der zweite Modus rechnet ein Verhältnis in Dezibel um, und der Faktor unterscheidet sich dort: zehn bei Leistung, zwanzig bei Amplitude, weil die Leistung mit dem Quadrat der Amplitude geht.',
    howToUse: [
      'Zum Addieren listest du die Pegel der Quellen mit Leerzeichen getrennt: 80 75 68.',
      'Vergleiche die Antwort mit der Zeile der arithmetischen Summe — der Abstand ist der ganze Sinn einer logarithmischen Skala.',
      'Zum Umrechnen eines Verhältnisses wählst du, ob du Leistung oder Amplitude hast: der Faktor unterscheidet sich.',
      'Das Verhältnis wird als Endwert über Ausgangswert genommen.',
    ],
    howItWorks: 'Summe der Pegel = 10·log₁₀(Σ10^(Lᵢ/10)). Leistungsverhältnis = 10·log₁₀(p₂/p₁); Amplitudenverhältnis = 20·log₁₀(p₂/p₁).',
    example: 'Zwei Quellen zu 80 dB ergeben zusammen 83,01 dB und nicht 160.',
    faq: [
      { q: 'Warum ergeben zwei Quellen zu 80 dB 83 und nicht 160?', a: 'Weil ein Dezibel der Logarithmus eines Leistungsverhältnisses ist und nicht die Größe selbst. Die Leistungen addieren sich: zwei gleiche verdoppeln die Summe, und die Leistung zu verdoppeln sind genau 3,01 dB.' },
      { q: 'Bringt Verdoppeln immer 3 dB?', a: 'Ja, und das ist eine Eigenschaft des Logarithmus: der Zuwachs hängt nicht vom Ausgangspegel ab. Von 40 dB oder von 100 dB aus bringt die doppelte Leistung dieselben 3,01 dB.' },
      { q: 'Wann ist der Faktor 10 und wann 20?', a: 'Zehn bei Leistung, Intensität und Energie. Zwanzig bei Amplitude, Spannung und Schalldruck, weil die Leistung mit deren Quadrat geht.' },
      { q: 'Lässt sich Lautheit so addieren?', a: 'Nein. Die Rechnung addiert physikalische Pegel. Die empfundene Lautheit wächst langsamer: die doppelte Leistung wird als kleiner Zuwachs gehört, und rund +10 dB klingen doppelt so laut.' },
    ],
  },
  'dew-point': {
    longDescription: 'Ermittelt den Taupunkt über die Näherung von Magnus und Tetens: die Temperatur, auf die Luft abgekühlt werden muss, bevor der Dampf darin zu kondensieren beginnt. Daneben steht der Abstand zur derzeitigen Temperatur — die Zahl, die tatsächlich darüber entscheidet, ob sich Tau auf der Scheibe bildet, ob die Wand schwitzt und ob eine Linse beschlägt, wenn sie aus der Kälte hereingetragen wird. Die Näherung trifft auf rund 0,4 °C und wurde für den Druck in Bodennähe angepasst; Gebirge und Laboratorien nutzen andere Beiwerte.',
    howToUse: [
      'Trage die Lufttemperatur drinnen oder draußen ein.',
      'Trage die relative Luftfeuchte ein — ein Hygrometer oder ein Wetterbericht nennt sie.',
      'Achte auf den Abstand: je kleiner er ist, desto näher ist eine Fläche am Beschlagen.',
      'Für eine Wand nimmst du hier die Raumluft und vergleichst mit der Temperatur der Wand selbst.',
    ],
    howItWorks: 'γ = ln(RF/100) + 17,27·t/(237,7 + t), danach Taupunkt = 237,7·γ/(17,27 − γ).',
    example: 'Bei 20 °C und 60 % Feuchte liegt der Taupunkt bei 11,99 °C — ein Abstand von 8 °C, Kondensation droht also nicht.',
    faq: [
      { q: 'Warum entspricht der Taupunkt bei 100 % der Temperatur?', a: 'Weil die Luft bereits gesättigt ist: es braucht keine Abkühlung, die Kondensation beginnt sofort. Der Logarithmus von eins ist null, und die Formel liefert ehrlich die Ausgangstemperatur.' },
      { q: 'Warum schwitzt eine Wand, wenn der Raum warm ist?', a: 'Tau bildet sich nach der Oberflächentemperatur und nicht nach der Lufttemperatur. Eine kalte Ecke oder eine Fensterlaibung kann unter dem Taupunkt liegen, während die Raumluft merklich wärmer ist.' },
      { q: 'Wie genau ist diese Formel?', a: 'Die Näherung von Magnus und Tetens trifft zwischen 0 und 60 °C in Bodennähe auf rund 0,4 °C. In der Höhe und bei tiefen Temperaturen werden andere Beiwertpaare verwendet, und ihre Antworten unterscheiden sich um Zehntelgrad.' },
      { q: 'Warum wird eine Luftfeuchte von null abgewiesen?', a: 'Weil es bei null Feuchte überhaupt keinen Taupunkt gibt: es ist nichts da, was kondensieren könnte. Der Logarithmus von null hat gar keinen Wert, und das ist eine fehlende Größe und kein Rand des Bereichs.' },
    ],
  },
  'doppler': {
    longDescription: 'Eine sich nähernde Sirene klingt höher als eine stehende, und der Ton fällt, während sie vorbeifährt — das ist der Dopplereffekt. Das Vorzeichen wird hier ausdrücklich genannt statt in Prosa versteckt: eine positive Geschwindigkeit bedeutet Bewegung auf dich zu, eine negative von dir fort. So deckt eine einzige Rechnung beide Fälle ab, und es ist nicht zwischen zwei Lehrbuchformeln zu wählen. Die Wellengeschwindigkeit ist ein eigenes Feld: 343 m/s für Schall in Luft, 1500 in Wasser, 5000 in Stahl.',
    howToUse: [
      'Auf dich zu ist positiv, von dir fort negativ. Ein Feld ersetzt die Wahl zwischen Annäherung und Entfernung.',
      'Die Wellengeschwindigkeit hängt vom Medium ab: Luft 343 m/s, Wasser rund 1500, Stahl rund 5000.',
      'Die Bewegung des Zuhörers und die der Quelle gehen verschieden in die Formel ein, die Felder sind deshalb getrennt.',
      'Die Geschwindigkeit der Quelle kann die Wellengeschwindigkeit nicht erreichen — jenseits dieser Grenze beginnt eine Stoßwelle.',
    ],
    howItWorks: 'f′ = f · (c + v_Zuhörer) / (c − v_Quelle).',
    example: 'Eine Sirene mit 440 Hz, die sich mit 20 m/s nähert, wird als 467,24 Hz gehört.',
    faq: [
      { q: 'Warum fällt der Ton genau beim Vorbeifahren?', a: 'Während sich das Fahrzeug nähert, startet jede nächste Welle von näher bei dir, sie treffen also häufiger ein. Nach dem Vorbeifahren umgekehrt. Das Vorzeichen der Geschwindigkeit kippt in dem Augenblick, in dem die Quelle auf deiner Höhe ist.' },
      { q: 'Warum bekommen Quelle und Zuhörer verschiedene Formeln?', a: 'Die Bewegung des Zuhörers ändert die Rate, mit der er den Wellen begegnet, und steht im Zähler. Die Bewegung der Quelle ändert die Wellenlänge im Medium selbst und steht im Nenner. Bei niedrigen Geschwindigkeiten ist der Unterschied unsichtbar; bei hohen zählt er.' },
      { q: 'Was passiert bei der Wellengeschwindigkeit?', a: 'Der Nenner geht auf null, und die Formel beschreibt nichts mehr. Physikalisch kommen die Wellen der Quelle nicht mehr davon und stauen sich zu einer Stoßfront — die Rechnung weist solche Eingaben ab.' },
      { q: 'Gilt das auch für Licht?', a: 'Nur näherungsweise. Licht braucht die relativistische Fassung, in der es kein bevorzugtes Medium gibt und beide Geschwindigkeiten gleich eingehen. Für Schall und andere Wellen in einem Medium ist diese Formel genau.' },
    ],
  },
  'escape-velocity': {
    longDescription: 'Die Fluchtgeschwindigkeit ist die Geschwindigkeit, bei der ein geworfener Gegenstand nie zurückkehrt. Sie hängt allein von Masse und Radius des anziehenden Körpers ab und überhaupt nicht von der Masse des Geworfenen: ein Stein und ein Schiff verlassen die Erde mit derselben Geschwindigkeit. Daneben steht die Kreisbahngeschwindigkeit, die Geschwindigkeit für eine dicht über der Oberfläche liegende Kreisbahn, die um genau die Wurzel aus zwei kleiner ist. Die Masse wird in Einheiten von 10²⁴ kg und der Radius in Kilometern eingetragen, damit die Zahlen gewöhnliche Dezimalzahlen bleiben und einen geteilten Link überstehen.',
    howToUse: [
      'Die Masse steht in Einheiten von 10²⁴ Kilogramm: die Erde hat 5,972, der Mond 0,07346, der Mars 0,64171.',
      'Der Radius ist der mittlere Radius in Kilometern: Erde 6371, Mond 1737, Mars 3390.',
      'Die Kreisbahngeschwindigkeit ist um genau √2 kleiner als die Fluchtgeschwindigkeit — das ist in den Zeilen zu sehen.',
      'Die Fallbeschleunigung dient als Probe: für die Erde kommt sie nahe 9,82 heraus.',
    ],
    howItWorks: 'Flucht = √(2GM/r), Kreisbahn = √(GM/r), mit G = 6,6743·10⁻¹¹.',
    example: 'Für die Erde beträgt die Fluchtgeschwindigkeit 11 186 m/s — das sind 40 270 km/h.',
    faq: [
      { q: 'Hängt die Fluchtgeschwindigkeit von der Masse der Rakete ab?', a: 'Nein. In die Formel geht allein die Masse des anziehenden Körpers ein. Ein Stein und ein Schiff verlassen die Erde mit derselben Geschwindigkeit; verschieden ist, wie viel Treibstoff es kostet, sie zu erreichen.' },
      { q: 'Warum wird die Masse in Einheiten von 10²⁴ kg eingetragen?', a: 'Die Masse der Erde in Kilogramm ist 5,972·10²⁴, und der Browser schreibt solche Zahlen in Exponentialform, die das Eingabefeld nicht annimmt. In Einheiten von 10²⁴ bleibt der Wert eine gewöhnliche Dezimalzahl und übersteht einen geteilten Link und ein Zurücksetzen des Formulars.' },
      { q: 'Wie unterscheidet sich die Kreisbahngeschwindigkeit von der Fluchtgeschwindigkeit?', a: 'Die Kreisbahngeschwindigkeit bringt dich auf eine dicht über der Oberfläche liegende Kreisbahn; die Fluchtgeschwindigkeit lässt dich ganz fortgehen. Die Flucht ist um genau die Wurzel aus zwei größer, bei jedem Körper.' },
      { q: 'Ist die Atmosphäre berücksichtigt?', a: 'Nein. Das ist reine Schwerkraft. Eine wirkliche Rakete braucht Reserve für den Luftwiderstand und dafür, dass sie an der Oberfläche nicht augenblicklich beschleunigt.' },
    ],
  },
};
