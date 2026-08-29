import type { DeDetailedContent } from './types';

export const dePhysics1Content: Partial<Record<string, DeDetailedContent>> = {
  'acceleration': {
    longDescription: 'Die gleichmäßige Beschleunigung verbindet vier Größen — Anfangsgeschwindigkeit, Endgeschwindigkeit, Zeit und die Beschleunigung selbst —, und aus drei von ihnen folgt die vierte. Dieser Rechner behandelt die beiden Richtungen, die tatsächlich gebraucht werden: die Beschleunigung aus einer gemessenen Geschwindigkeitsänderung zu finden und die Geschwindigkeit zu finden, die nach einer Beschleunigung über eine gegebene Zeit erreicht wird. Der Weg daneben folgt aus der mittleren Geschwindigkeit und nicht aus der Beschleunigung, was rechnerisch dasselbe ist, aber in dem Modus keine Genauigkeit verliert, in dem die Beschleunigung selbst aus einer Division stammt.',
    howToUse: [
      'Wähle, ob du die Beschleunigung oder die Endgeschwindigkeit suchst.',
      'Trage die Anfangsgeschwindigkeit in Metern je Sekunde ein.',
      'Trage die Endgeschwindigkeit ein oder die Beschleunigung, wenn du die Geschwindigkeit suchst.',
      'Trage die Zeit ein, über die die Änderung stattfand.',
    ],
    howItWorks: 'Beschleunigung a = (v − v₀) ÷ t, und umgekehrt gilt v = v₀ + a × t. Der Weg nutzt die mittlere Geschwindigkeit: s = (v₀ + v) ÷ 2 × t.',
    example: 'Aus dem Stand auf 27,8 m/s in 8,4 Sekunden sind 3,31 m/s² über 116,76 Meter.',
    faq: [
      { q: 'Darf die Beschleunigung negativ herauskommen?', a: 'Ja, und das ist Bremsen. Ein negatives Ergebnis heißt, dass die Endgeschwindigkeit unter der Anfangsgeschwindigkeit liegt; an der Eingabe ist nichts falsch.' },
      { q: 'Wie rechne ich km/h in m/s um?', a: 'Teile durch 3,6. Hundert Kilometer je Stunde sind 27,78 m/s, weshalb der übliche Test von 0 auf 100 mit diesem Wert arbeitet.' },
      { q: 'Warum wird der Weg aus der mittleren Geschwindigkeit gerechnet?', a: 'Bei gleichmäßiger Beschleunigung ist das Mittel aus Anfangs- und Endgeschwindigkeit der wahre Mittelwert über das ganze Zeitfenster, mit der Zeit multipliziert ergibt es also genau den Weg.' },
      { q: 'Gilt das auch, wenn die Beschleunigung nicht gleichmäßig ist?', a: 'Die gelieferte Beschleunigung ist der Mittelwert über das Zeitfenster und als Zusammenfassung richtig. Der Weg nimmt jedoch eine gleichmäßige Änderung an und weicht ab, wenn der wirkliche Verlauf ungleichmäßig war.' },
    ],
  },
  'air-density': {
    longDescription: 'Feuchte Luft ist LEICHTER als trockene — was fast alle überrascht. Ein Wassermolekül wiegt 18 gegen 29 für mittlere Luft, und jedes verdrängt ein schwereres, Wärme und Feuchte senken die Dichte also doppelt. Die Folgen sind praktisch: weniger Auftrieb an einer Tragfläche, weniger Leistung aus einem Saugmotor, eine längere Startstrecke. Der Sättigungsdruck folgt der Formel von Tetens.',
    howToUse: [
      'Der Druck in Hektopascal: 1013,25 hPa ist die Normatmosphäre auf Meereshöhe.',
      'Die Feuchte als Prozentsatz der Sättigung bei dieser Temperatur.',
      'Die Zeile zur Abweichung vergleicht mit der Normdichte von 1,225 kg/m³.',
      'Erfasst werden trockene Luft und Wasserdampf; andere Bestandteile und starker Staub stecken nicht im Modell.',
    ],
    howItWorks: 'ρ = p_trocken/(287,058·T) + p_Dampf/(461,495·T), Sättigungsdruck nach Tetens.',
    example: 'Bei 20 °C, 1013,25 hPa und 50 % Feuchte beträgt die Dichte 1,1997 kg/m³.',
    faq: [
      { q: 'Warum ist feuchte Luft leichter als trockene?', a: 'Weil ein Wassermolekül leichter ist als ein mittleres Luftmolekül: 18 gegen 29 atomare Einheiten. Bei gleichem Druck und gleicher Temperatur enthält ein Kubikmeter gleich viele Moleküle, schwere gegen leichte zu tauschen senkt also die Masse.' },
      { q: 'Wie stark fällt die Dichte in der Hitze?', a: 'Erheblich. Bei 35 °C und hoher Feuchte liegt sie rund zehn Prozent unter der Norm. Die Luftfahrt spürt das: die Startstrecke wird länger und die Steigrate fällt — daher Gewichtsgrenzen an heißen Tagen.' },
      { q: 'Was ist der Normwert 1,225?', a: 'Die Dichte trockener Luft bei 15 °C und 1013,25 hPa, der Bezug der internationalen Normatmosphäre. Aerodynamische Werte werden darauf normiert, damit Versuche bei verschiedenem Wetter vergleichbar bleiben.' },
      { q: 'Spielt die Höhe eine Rolle?', a: 'Über den Druck. Trage den tatsächlichen Druck an deinem Ort ein: auf einem Kilometer liegt er bei rund 900 hPa, und die Dichte fällt um etwa ein Zehntel.' },
    ],
  },
  'air-pressure-at-altitude': {
    longDescription: 'Der Druck fällt nicht geradlinig mit der Höhe: die halbe Masse der Atmosphäre liegt unterhalb von fünfeinhalb Kilometern. Auf dem Gipfel des Everest bleibt weniger als ein Drittel des Meeresspiegeldrucks — der Sauerstoffanteil bleibt bei denselben einundzwanzig Prozent, aber derselbe Atemzug hält dreimal weniger Moleküle, und das ist die Höhenkrankheit. Die Rechnung folgt der internationalen Normatmosphäre, und die Dichte wird aus dem sich ergebenden Druck und der Temperatur abgeleitet und nicht aus einer eigenen Anpassung genommen.',
    howToUse: [
      'Die Höhe wird vom Meeresspiegel gemessen; Senken bekommen einen negativen Wert bis −430 m.',
      'Die obere Grenze von 11 000 m ist die Tropopause, oberhalb derer die Temperatur nicht mehr geradlinig fällt.',
      'Die Normatmosphäre setzt 15 °C und 101,325 kPa auf Meereshöhe mit einem Rückgang von 6,5 Grad je Kilometer.',
      'Das wirkliche Wetter weicht um ein paar Prozent von der Norm ab — nimm für genaue Arbeiten einen gemessenen Druck.',
    ],
    howItWorks: 'p = 101325·(1 − 0,0065·h/288,15)^(g·M/(R·L)); die Temperatur fällt geradlinig um 6,5 °C je Kilometer; die Dichte folgt aus dem Gasgesetz.',
    example: 'Auf zwei Kilometern beträgt der Druck 79,5 kPa, rund 78 Prozent des Meeresspiegelwerts.',
    faq: [
      { q: 'Warum fällt der Druck nicht im Verhältnis zur Höhe?', a: 'Weil Luft zusammendrückbar ist: die unteren Schichten werden von den oberen gepresst und sind deshalb dichter. Die Abnahmerate ist dem Druck selbst proportional, und dieser Zusammenhang ergibt eine Exponentialfunktion und keine Gerade.' },
      { q: 'Ändert sich der Sauerstoffanteil mit der Höhe?', a: 'Nein, er bleibt bis in sehr große Höhen nahe einundzwanzig Prozent. Was sich ändert, ist die Zahl der Moleküle im selben Volumen — und genau deshalb wird der Sauerstoff knapp, während sein Prozentsatz es nicht wird.' },
      { q: 'Warum liegt die obere Grenze bei elf Kilometern?', a: 'Das ist die Tropopause. Darunter fällt die Temperatur ungefähr geradlinig; darüber bleibt sie nahe −56,5 °C beinahe gleich, und das lineare Modell arbeitet nicht mehr.' },
      { q: 'Wie verhält sich das zu einem Barometer?', a: 'Ein Barometer zeigt den tatsächlichen Druck, während dies den Normwert für diese Höhe liefert. Die paar Prozent dazwischen nennen Wetterdienste die Drucktendenz.' },
    ],
  },
  'bernoulli': {
    longDescription: 'Die Bernoulli-Gleichung sagt etwas Einfaches: die Gesamthöhe einer Strömung bleibt erhalten, und ein Medium lässt sich nur auf Kosten von Druck oder Höhe beschleunigen. Daraus folgt ein Schluss, den viele überraschend finden — in einer Verengung fällt der Druck, statt zu steigen. Der Vergaser, das Venturi-Durchflussmessgerät und der Auftrieb einer Tragfläche beruhen darauf. Die Rechnung ist ideal: sie lässt Zähigkeit und Reibungsverluste außer Acht, und bei einer langen Rohrleitung müssen die gesondert hinzukommen.',
    howToUse: [
      'Die Höhen werden von einem beliebigen gemeinsamen Bezug gemessen: es zählt nur ihr Unterschied, jeder Querschnitt darf also als null gelten.',
      'Wasser hat 1000 kg/m³, Luft 1,225, Benzin rund 750.',
      'Die beiden Geschwindigkeiten hängen über die Kontinuität zusammen: den Querschnitt zu halbieren verdoppelt die Geschwindigkeit.',
      'Die Zähigkeit ist nicht enthalten: bei einem langen Rohr müssen die Reibungsverluste hinzugerechnet werden.',
    ],
    howItWorks: 'p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂); die Gesamthöhe summiert den statischen, den dynamischen und den Höhenanteil.',
    example: 'Wasser von 2 auf 6 m/s zu beschleunigen senkt den Druck von 300 kPa auf 284 kPa.',
    faq: [
      { q: 'Warum fällt der Druck in einer Verengung?', a: 'Weil die Strömung dort schneller ist, während die Gesamthöhe erhalten bleibt: der zusätzliche dynamische Anteil kann nur aus dem statischen Druck kommen. Das widerspricht der alltäglichen Vorstellung vom Zusammendrücken, aber jedes Manometer an einem Venturi-Rohr bestätigt es.' },
      { q: 'Ist die Reibung enthalten?', a: 'Nein. Die Bernoulli-Gleichung ist ideal: in einem echten Rohr geht ein Teil der Höhe in Reibung und örtliche Widerstände, und über lange Strecken überwiegt dieser Verlust. Er wird gesondert gerechnet.' },
      { q: 'Was bedeutet ein negativer Druck in der Antwort?', a: 'Dass die Strömung diese Geschwindigkeiten vom gegebenen Anfangsdruck aus nicht erreichen kann: zuvor setzte Kavitation ein, das Medium siedete, sobald der Druck unter seinen Dampfdruck fällt. Deshalb verweigert die Rechnung.' },
      { q: 'Gilt die Gleichung auch für Gase?', a: 'Bei niedrigen Geschwindigkeiten ja, wenn das Gas als unzusammendrückbar behandelt wird — grob bis zu einem Drittel der Schallgeschwindigkeit. Darüber braucht es Gleichungen der kompressiblen Strömung.' },
    ],
  },
  'boiling-point': {
    longDescription: 'Sieden sind nicht „hundert Grad“, sondern der Punkt, an dem der Dampfdruck den umgebenden Luftdruck erreicht, in den Bergen siedet Wasser deshalb kühler. Jeder tausend Meter kosten rund dreieinhalb Grad: in Mexiko-Stadt siedet Wasser bei 93 °C und im Basislager am Everest nahe 80 °C. Der Unterschied ist praktisch und nicht theoretisch — Speisen garen im kochenden Wasser umso langsamer, je höher man ist, weil das kochende Wasser selbst kälter ist.',
    howToUse: [
      'Die Höhe wird vom Meeresspiegel gemessen: Senken bekommen einen negativen Wert, bis −430 m am Toten Meer.',
      'Die Rechnung folgt der internationalen Normatmosphäre, also dem mittleren Druck für diese Höhe.',
      'Das wirkliche Wetter verschiebt den Druck um ein paar Prozent, was den Siedepunkt um Bruchteile eines Grades bewegt.',
      'Die obere Grenze von 9000 m ist die Stelle, an der das lineare Modell der Troposphäre die Atmosphäre nicht mehr beschreibt.',
    ],
    howItWorks: 'Der Druck aus der barometrischen Formel der Normatmosphäre, der Siedepunkt aus der Clausius-Clapeyron-Beziehung mit einer Verdampfungswärme von 40 660 J/mol.',
    example: 'Auf 1500 Metern siedet Wasser bei 94,9 °C — knapp fünf Grad unter dem vertrauten Wert.',
    faq: [
      { q: 'Warum siedet Wasser in den Bergen kühler?', a: 'Sieden beginnt, wenn der Sättigungsdampfdruck den umgebenden Druck erreicht. Oben ist die Luft dünn, das Zusammentreffen geschieht also früher — bei niedrigerer Temperatur. In einer Vakuumkammer passiert dasselbe, nur ausgeprägter.' },
      { q: 'Warum dauert Garen länger, wenn das Wasser doch kocht?', a: 'Die Garzeit hängt an der Wassertemperatur und nicht daran, dass es kocht. Auf drei Kilometern hat das kochende Wasser rund 90 °C, und Eiweiße gerinnen langsamer. Ein Schnellkochtopf behebt das: höherer Druck hebt den Siedepunkt mit.' },
      { q: 'Wie genau ist das bei wirklichem Wetter?', a: 'Es liefert die Normatmosphäre. Ein Tief oder ein Hoch verschiebt den Druck um ein paar Prozent, was Bruchteile eines Grades im Siedepunkt sind — in der Küche belanglos, für genaue Arbeiten nimm den gemessenen Druck.' },
      { q: 'Warum liegt die untere Grenze bei −430 Metern?', a: 'Das ist das Tote Meer, die tiefste offene Landstelle der Erde. Der Druck liegt dort über dem Meeresspiegelwert, und Wasser siedet bei rund 101,4 °C.' },
    ],
  },
  'buoyancy': {
    longDescription: 'Die Auftriebskraft hängt allein vom Volumen des Körpers und von der Dichte des Mediums ab — nicht davon, was in ihm steckt. Ein leeres und ein volles Fass gleicher Größe bekommen dieselbe archimedische Kraft; verschieden ist ihr Gewicht. Die Antwort auf „schwimmt es“ folgt deshalb aus der resultierenden Kraft und nicht aus der Auftriebskraft: positiv hebt, negativ senkt, und genau null bedeutet das Schweben, das Taucher anstreben.',
    howToUse: [
      'Das Volumen meint das ganze eingetauchte Volumen und nicht das Volumen des Werkstoffs: ein hohles Teil verdrängt nach seiner Außenkontur.',
      'Dichte des Mediums: Süßwasser 1000, Meerwasser rund 1025, Diesel rund 840, Quecksilber 13 546 kg/m³.',
      'Eine positive resultierende Kraft lässt den Körper aufsteigen, eine negative sinken, null hält ihn im Wasser.',
      'Die Rechnung gilt für einen vollständig eingetauchten Körper. Ein an der Oberfläche schwimmender verdrängt genau seine eigene Masse.',
    ],
    howItWorks: 'F = ρ · g · V mit g = 9,80665; die resultierende Kraft ist F − m · g.',
    example: 'Ein Körper von 15 kg mit 20 Litern bekommt in Wasser 196,13 N gegen ein Gewicht von 147,1 N — er steigt auf.',
    faq: [
      { q: 'Warum sinkt ein schweres Schiff nicht?', a: 'Es zählt nicht die Masse, sondern das Volumen des verdrängten Wassers. Ein Stahlrumpf schließt ein riesiges Luftvolumen ein und verdrängt deshalb mehr Wasser als seine eigene Masse. Ein Leck füllt dieses Volumen mit Wasser, die Verdrängung fällt — und das Schiff sinkt.' },
      { q: 'Was bringt das Schweben?', a: 'Die resultierende Kraft ist genau null: der Körper steigt nicht und sinkt nicht. Ein Taucher erreicht es mit einer Tarierweste, ein U-Boot mit Ballasttanks.' },
      { q: 'Warum schwimmt man im Meer leichter?', a: 'Seine Dichte liegt bei rund 1025 gegen 1000 bei Süßwasser, die Auftriebskraft ist bei gleichem Volumen also zweieinhalb Prozent größer. Im Toten Meer mit über 1200 kann ein Mensch überhaupt nicht untergehen.' },
      { q: 'Brauche ich die Dichte des Körpers?', a: 'Nein — Volumen und Masse reichen, und ihr Verhältnis ist die Dichte. Die Rechnung nimmt bewusst das, was leichter zu messen ist: die Masse auf einer Waage, das Volumen über verdrängtes Wasser.' },
    ],
  },
  'carnot': {
    longDescription: 'Das ist eine Obergrenze und kein Versprechen: keine wirkliche Maschine erreicht sie, denn der Carnot-Prozess verlangt unendlich langsame, reibungsfreie Vorgänge. Sein praktischer Nutzen liegt anderswo — die Zahl zeigt, wie viel sich aus einem gegebenen Temperaturpaar überhaupt gewinnen lässt, und warum jedes Streben nach Wirkungsgrad an der warmen Seite endet. Die Temperaturen nur in Kelvin: die Formel arbeitet mit einem Verhältnis absoluter Werte, und Grad Celsius ergäben Unsinn, negativen Wirkungsgrad eingeschlossen.',
    howToUse: [
      'Beide Temperaturen in Kelvin: zu Grad Celsius 273,15 addieren.',
      'Das kalte Reservoir ist dort, wo die Wärme abgegeben wird — meist die Umgebung, rund 300 K.',
      'Die Zeile mit der Arbeit aus 1000 J zeigt dieselbe Zahl anschaulicher: so viele Joule werden zu Arbeit, der Rest geht fort.',
      'Der wirkliche Wirkungsgrad liegt darunter: ein Fahrzeugmotor liefert rund ein Drittel der Carnot-Grenze, eine Dampfturbine rund die Hälfte.',
    ],
    howItWorks: 'η = 1 − T_kalt / T_warm, mit den Temperaturen in Kelvin.',
    example: 'Bei 800 K und 300 K liegt die Grenze bei 62,5 % — keine Maschine übertrifft das.',
    faq: [
      { q: 'Warum nicht Grad Celsius?', a: 'Die Formel nutzt ein Verhältnis von Temperaturen, und das bedeutet nur etwas, wenn vom absoluten Nullpunkt aus gemessen wird. 100 °C und 20 °C so zu nehmen, wie sie dastehen, ergibt 80 % statt ehrlicher 21,4 %, und bei einer Umgebung unter null ergibt es einen Wirkungsgrad über eins.' },
      { q: 'Warum sind wirkliche Maschinen schlechter?', a: 'Der Carnot-Prozess ist umkehrbar: die Vorgänge laufen unendlich langsam, es gibt keine Reibung, Wärme fließt ohne Temperaturunterschied. Eine wirkliche Maschine muss in endlicher Zeit fertig werden, und jede Abweichung vom Ideal kostet Wirkungsgrad.' },
      { q: 'Wie lässt sich die Grenze anheben?', a: 'Nur, indem die Temperaturen weiter auseinandergehen. Die kalte Seite ist an die Umgebung gebunden, alle Technik geht also in die warme Seite — daher überkritischer Dampf und hitzebeständige Turbinenwerkstoffe.' },
      { q: 'Kann der Wirkungsgrad 100 % erreichen?', a: 'Das bräuchte ein kaltes Reservoir bei genau dem absoluten Nullpunkt, und der ist unerreichbar. Das ist der zweite Hauptsatz der Wärmelehre in Zahlen: ein Teil der Wärme muss ungenutzt fortgehen.' },
    ],
  },
};
