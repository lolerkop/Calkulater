import type { DeDetailedContent } from './types';

export const deComputers1Content: Partial<Record<string, DeDetailedContent>> = {
  'color-convert': {
    longDescription: 'Macht aus einem hexadezimalen Farbcode die Schreibweisen rgb() und hsl() und zeigt jeden Kanal einzeln. Die dreistellige Form wird durch Verdoppeln jeder Ziffer erweitert: #F0A ist #FF00AA und nicht #F00A00, denn so ist das Format festgelegt. Kanäle werden Byte für Byte gelesen und bleiben genaue ganze Zahlen von 0 bis 255, die Rückumrechnung liefert also wieder den Ausgangscode. Der Farbton erscheint als ganze Gradzahl, Sättigung und Helligkeit tragen zwei Nachkommastellen: Bruchteile eines Grades auf dem Farbkreis sieht das Auge nicht, Zehntelprozente Helligkeit dagegen schon.',
    howToUse: [
      'Trage einen Farbcode ein — zum Beispiel #2E86DE.',
      'Das Rautezeichen ist freiwillig: 2E86DE geht auch.',
      'Die kurze dreistellige Form wird automatisch erweitert.',
      'Groß- und Kleinschreibung spielen keine Rolle.',
    ],
    howItWorks: 'Jedes Paar hexadezimaler Zeichen ist ein Kanal von 0 bis 255. Für HSL werden die Kanäle durch 255 geteilt, danach folgt der Farbton daraus, welcher Kanal der größte ist, die Helligkeit ist der Mittelwert aus größtem und kleinstem, und die Sättigung folgt aus ihrer Differenz. Die Zeile zur Helligkeit ist die HSL-Helligkeit in Prozent.',
    example: 'Der Code #2E86DE ist rgb(46, 134, 222) und hsl(210, 72,73 %, 52,55 %).',
    faq: [
      { q: 'Warum wird aus #F0A das #FF00AA?', a: 'Die kurze Form wird durch Verdoppeln jedes Zeichens erweitert — so ist das Format festgelegt. Mit Nullen aufzufüllen ergäbe eine andere Farbe: #F00A00 statt #FF00AA.' },
      { q: 'Ist das Rautezeichen nötig?', a: 'Nein, es ist freiwillig, und auch die Groß- und Kleinschreibung spielt keine Rolle. Sowohl #2e86de als auch 2E86DE funktionieren.' },
      { q: 'Was bedeutet die Zeile zur Helligkeit?', a: 'Sie ist die HSL-Helligkeit in Prozent: 0 ist Schwarz, 100 ist Weiß, und rund 50 ist eine reine gesättigte Farbe. Sie ist zugleich die dritte Zahl in der hsl()-Schreibweise.' },
      { q: 'Wie unterscheidet sich die HSL-Helligkeit von der empfundenen?', a: 'Die Helligkeit nutzt für jeden Kanal dieselbe Formel, während das Auge Grün weit heller sieht als Blau. Zwei Farben mit gleicher HSL-Helligkeit können deshalb recht verschieden aussehen, und für Kontrast braucht es ein eigenes Maß.' },
      { q: 'Geht bei der Umrechnung Genauigkeit verloren?', a: 'Nein. Kanäle werden Byte für Byte gelesen und bleiben ganze Zahlen von 0 bis 255, die HEX-Zeile entspricht also immer deiner Eingabe — abgesehen von der erweiterten Kurzform und von Großbuchstaben.' },
    ],
  },
  'css-units': {
    longDescription: 'Alles läuft über das CSS-Pixel, und das ist eine Bezugsgröße und keine physische: ein Zoll sind hier immer genau 96 Pixel, gleich auf welchem Bildschirm es landet. Die absoluten Einheiten — pt, pc, in, cm, mm — sind feste Vielfache dieses Pixels und ändern sich nie. Die relativen hängen vom Zusammenhang ab, und genau darin liegt ihr Unterschied: rem ist überall gleich, weil es der Wurzelschriftgröße folgt, während em dem Elternelement folgt und sich in verschachtelten Elementen deshalb mit sich selbst multipliziert — so kommt eine Liste in dritter Ebene zu unlesbar kleiner Schrift.',
    howToUse: [
      'Trage den Wert ein, der umgerechnet werden soll.',
      'Wähle die Einheit, in der er geschrieben ist, und die gewünschte Zieleinheit.',
      'Setze die Wurzelschriftgröße — 16 px, sofern die Seite sie nicht überschreibt.',
      'Setze die Schriftgröße des Elternelements nur, wenn du mit em arbeitest.',
    ],
    howItWorks: 'Der Wert wird zuerst in CSS-Pixel umgerechnet: rem nutzt die Wurzelgröße, em die des Elternelements, und pt, pc, in, cm und mm sind feste Vielfache. Danach wird durch die Zieleinheit geteilt.',
    example: 'Bei einer Wurzelgröße von 16 px sind 24 px gleich 1,5 rem und 18 pt.',
    faq: [
      { q: 'Was ist der Unterschied zwischen rem und em?', a: 'rem bezieht sich auf die Wurzelschriftgröße und ist damit über die ganze Seite stabil. em bezieht sich auf das Elternelement und häuft sich in verschachtelten Elementen auf: 0,9 em in dritter Ebene sind 0,73 der Grundgröße.' },
      { q: 'Ist ein CSS-Zentimeter ein echter Zentimeter?', a: 'Auf dem Bildschirm nicht. Er ist als 96/2,54 CSS-Pixel festgelegt und entspricht einem physischen Zentimeter nur im Druck oder auf einem Display, dessen Dichte zufällig zur Bezugsgröße passt.' },
      { q: 'Soll ich für Schriftgrößen px oder rem nehmen?', a: 'rem achtet die Schriftgrößeneinstellung des Browsers, die px überschreibt. Für Barrierefreiheit entscheidet das die Frage meist zugunsten von rem.' },
      { q: 'Warum ist die Wurzelschriftgröße hier einstellbar?', a: 'Weil Seiten sie manchmal ändern. Setzt dein CSS html { font-size: 62.5% }, ist die Wurzel 10 px, und jede rem-Umrechnung verschiebt sich entsprechend.' },
    ],
  },
  'download-time': {
    longDescription: 'Rechnet eine Dateigröße in Bit um, teilt durch die Geschwindigkeit deiner Leitung und zeigt die Zeit. Dezimale Vorsätze wie MB und binäre wie MiB sind eigene Auswahlpunkte statt einer versteckten Annahme, und ebenso Geschwindigkeiten in Bit und in Byte je Sekunde. Die Zahl ist theoretisch: kein Protokollaufwand wird dir hinter dem Rücken hineingerechnet.',
    howToUse: [
      'Trage die Dateigröße ein und wähle ihre Einheit.',
      'Trage deine Leitungsgeschwindigkeit und ihre Einheit ein.',
      'Lies ab, wie lange die Übertragung dauern würde.',
    ],
    howItWorks: 'Bit = Byte × 8, und Zeit = Bit ÷ Leitungsgeschwindigkeit in Bit je Sekunde.',
    example: 'Eine Datei von 1 GB braucht über eine Leitung mit 100 Mbit/s 8 000 000 000 ÷ 100 000 000 = 80 Sekunden.',
    faq: [
      { q: 'Warum ist mein echter Download langsamer?', a: 'Die Zahl ist das theoretische Minimum. Protokollaufwand, Grenzen auf dem Server und geteilte Kapazität senken den tatsächlichen Durchsatz.' },
      { q: 'Was ist der Unterschied zwischen MB und MiB?', a: 'Ein Megabyte sind eine Million Byte, ein Mebibyte 1 048 576. Der Abstand liegt bei rund fünf Prozent und wächst mit der Dateigröße.' },
      { q: 'Warum wird durch Bit und nicht durch Byte geteilt?', a: 'Leitungsgeschwindigkeiten werden in Bit je Sekunde angegeben, Dateien dagegen in Byte gemessen, eine Seite muss also umgerechnet werden. Byte mal acht erledigt das.' },
      { q: 'Kann ich die Geschwindigkeit in Megabyte je Sekunde eintragen?', a: 'Ja, MB/s ist eine der Geschwindigkeitseinheiten und wird intern in Bit umgerechnet.' },
    ],
  },
  'files-on-disk': {
    longDescription: 'Teilt die Kapazität des Datenträgers durch die Dateigröße und rundet ab, denn eine angebrochene Datei passt nicht. Dezimale und binäre Vorsätze sind eigene Auswahlpunkte statt einer Annahme: der Hersteller schreibt ein Terabyte als zehn hoch zwölf, das System zeigt Tebibyte an, und genau in diesem Unterschied scheint der fehlende Platz zu verschwinden.',
    howToUse: [
      'Trage die Kapazität des Datenträgers ein und wähle ihre Einheit.',
      'Trage die Dateigröße ein und wähle ihre Einheit.',
      'Ergänze eine Reserve, wenn ein Teil des Platzes schon vergeben ist.',
    ],
    howItWorks: 'Der nutzbare Platz ist die Kapazität minus der Reserve; die Zahl ist das geteilt durch die Dateigröße, abgerundet.',
    example: 'Auf einen Datenträger mit 1000 GB passen 250 000 Dateien zu je 4 MB.',
    faq: [
      { q: 'Warum zeigt mein Datenträger weniger an als aufgedruckt?', a: 'Der Aufdruck zählt ein Terabyte als zehn hoch zwölf Byte, das System zählt Tebibyte zu 1024⁴. Der Abstand liegt bei rund neun Prozent und ist kein verlorener Platz.' },
      { q: 'Wird der Aufwand des Dateisystems abgezogen?', a: 'Nicht von selbst. Clustergröße und Verwaltungsdaten unterscheiden sich je nach Dateisystem, deshalb lässt dich das Reservefeld sie ausdrücklich berücksichtigen.' },
      { q: 'Was gilt, wenn die Datei größer ist als der Datenträger?', a: 'Die Antwort ist null, und das ist ein richtiges Ergebnis und kein Fehler.' },
      { q: 'Wird angenommen, dass alle Dateien gleich groß sind?', a: 'Ja. Die Rechnung beantwortet, wie viele Dateien einer bestimmten Größe hineinpassen, nicht wie sich eine gemischte Sammlung packen ließe.' },
    ],
  },
  'fps-frametime': {
    longDescription: 'Bildrate und Bildzeit sind Kehrwerte: tausend Millisekunden geteilt durch die Bildrate ergeben die Zeit, die jedes Bild einnimmt. Beide Richtungen nutzen diese eine Beziehung, und eine Vergleichszeile stellt die üblichen Raten nebeneinander, damit sich ein Zielwert leicht einordnen lässt.',
    howToUse: [
      'Wähle die gewünschte Richtung.',
      'Trage den bekannten Wert ein.',
      'Lies den umgerechneten Wert und die Vergleichszeile ab.',
    ],
    howItWorks: 'Bildzeit in ms = 1000 ÷ Bildrate, und Bildrate = 1000 ÷ Bildzeit.',
    example: '60 FPS bedeuten, dass jedes Bild 1000 ÷ 60 = 16,667 Millisekunden dauert.',
    faq: [
      { q: 'Warum sind 60 FPS nicht genau 16 ms?', a: 'Tausend lässt sich nicht glatt durch sechzig teilen. Der genaue Wert ist 16,667 ms, und ihn auf 16 zu runden würde alle paar Sekunden um ein Bild abweichen.' },
      { q: 'Bedeutet eine höhere Bildrate immer eine kürzere Bildzeit?', a: 'Ja, beide sind strenge Kehrwerte, die eine fällt also genau so, wie die andere steigt.' },
      { q: 'Ist das dasselbe wie die Bildzeiten der schlechtesten ein Prozent?', a: 'Nein. Hier geht es um die mittlere Beziehung zwischen Rate und Zeit; für Perzentilstatistiken braucht es ein vollständiges Bildprotokoll.' },
      { q: 'Warum wird null abgewiesen?', a: 'Eine Division durch null hat keinen Wert. Eine Bildrate von null heißt kein Bild, und eine Bildzeit von null heißt gar kein Bild.' },
    ],
  },
  'internet-traffic': {
    longDescription: 'Rechnet die Menge aus, die sich bei gleichmäßiger Nutzung ansammelt: die Streamrate wird mit der Zeit multipliziert und nicht durch sie geteilt. Die Acht im Nenner rechnet Bit in Byte um, und genau sie fehlt am häufigsten — eine Leitung wird in Megabit gemessen, ein Datenvolumen in Gigabyte angegeben, und beides zu verwechseln liegt um genau den Faktor acht daneben. Trägst du ein Volumen ein, ergänzt der Rechner, wie lange es reicht und um wie viel es überschritten wird — er beantwortet also „reicht das den Monat“ und nicht nur „wie viele Gigabyte sind das“.',
    howToUse: [
      'Trage die Streamrate ein: Standardqualität liegt bei 3–5 Mbit/s, 4K bei rund 25.',
      'Trage ein, wie viele Stunden am Tag der Stream oder das Gespräch läuft.',
      'Setze die Länge des Zeitraums — meist 30 oder 31 Tage.',
      'Ergänze dein Datenvolumen, um zu prüfen, ob es reicht.',
    ],
    howItWorks: 'Die Rate in Megabit wird durch acht geteilt, das ergibt Megabyte je Sekunde, mal 3600 Sekunden und umgerechnet in Gigabyte. Diese Zahl wird danach mit den Stunden am Tag und den Tagen im Zeitraum vervielfacht.',
    example: 'Drei Stunden am Tag bei fünf Megabit brauchen 6,75 GB täglich und 202,5 GB im Monat — doppelt so viel wie ein Volumen von 100 GB.',
    faq: [
      { q: 'Warum wird die Rate durch acht geteilt?', a: 'Weil Leitungen in Megabit gemessen werden und Datenmengen in Megabyte, und ein Byte hält acht Bit. Ohne die Division fällt der Verbrauch achtfach zu hoch aus.' },
      { q: 'Welche Streamrate soll ich eintragen?', a: 'Die, mit der die Wiedergabe tatsächlich läuft: etwa 3–5 Mbit/s bei Standardqualität, 8 bei Full HD und rund 25 bei 4K. Die Statistik des Players zeigt den genauen Wert.' },
      { q: 'Zählt der Hintergrundverkehr mit?', a: 'Nein. Aktualisierungen, Abgleich und Messenger kommen obendrauf, der echte Verbrauch liegt deshalb meist etwas über der berechneten Zahl.' },
      { q: 'Was zeigt die Dauer des Volumens?', a: 'Wie viele Tage das Volumen bei gleichem täglichem Verbrauch reicht. Eine gebrochene Zahl heißt, dass es mitten am Tag aufgebraucht ist.' },
      { q: 'Ist das Gigabyte hier dezimal?', a: 'Ja, 10⁹ Byte — so, wie Anbieter ein Volumen angeben. Der Abstand zu einem binären Gigabyte liegt bei rund 7 %.' },
    ],
  },
  'ipv4-subnet': {
    longDescription: 'Zerlegt ein IPv4-Netz aus einer Adresse und einer Präfixlänge. Die ganze Rechnerei ist bitweise: die Adresse ist eine 32-Bit-Zahl, die Maske eine Folge von Einsen von links, und die Netzadresse ist ihr bitweises UND. Genau deshalb kann eine Subnetzgrenze mitten in ein Oktett fallen: ein Präfix /20 ergibt die Maske 255.255.240.0, und die rechnet man nicht im Kopf aus. Drei Fälle werden gesondert behandelt, weil das vertraute „zwei hoch minus zwei“ für sie falsch ist: /32 ist eine einzelne Hostadresse, /31 eine Punkt-zu-Punkt-Strecke mit zwei Adressen und ohne Broadcast, und erst ab /30 abwärts werden Netz- und Broadcast-Adresse abgezogen.',
    howToUse: [
      'Trage eine beliebige Adresse aus dem Netz ein — es muss nicht die Netzadresse selbst sein.',
      'Trage die Präfixlänge ein: die Zahl nach dem Schrägstrich in der CIDR-Schreibweise.',
      'Lies den ersten und den letzten Host ab — das ist der Bereich, der sich vergeben lässt.',
      'Die Wildcard-Maske ist für Zugriffslisten auf Cisco-Geräten praktisch.',
    ],
    howItWorks: 'Die Adresse wird zu einer 32-Bit-Zahl und die Maske zu einer Folge von Einsen, die das Präfix setzt. Die Netzadresse ist das bitweise UND der beiden; die Broadcast-Adresse ist das Netz mit Einsen in jedem freien Bit.',
    example: 'Die Adresse 192.168.1.10 mit dem Präfix /24 gehört zu 192.168.1.0 mit der Maske 255.255.255.0 und 254 Hosts.',
    faq: [
      { q: 'Muss ich die Netzadresse selbst eintragen?', a: 'Nein, jede Adresse aus dem Netz reicht. Der Rechner lässt die unteren Bit gemäß der Maske fallen und findet die Netzadresse selbst.' },
      { q: 'Warum ergibt /20 die Maske 255.255.240.0?', a: 'Weil eine Subnetzgrenze nicht auf einer Oktettgrenze liegen muss. Zwanzig Maskenbit enden mitten im dritten Oktett, und das ergibt 240.' },
      { q: 'Wie viele Hosts sind in einem /31?', a: 'Zwei, und beide sind nutzbar. Es ist eine Punkt-zu-Punkt-Strecke nach RFC 3021: es wird weder eine Netz- noch eine Broadcast-Adresse zurückgelegt.' },
      { q: 'Und in einem /32?', a: 'Eine einzige Adresse. Dieses Präfix bezeichnet genau einen Host, zum Beispiel eine Route zu einem einzelnen Server.' },
      { q: 'Wird IPv6 unterstützt?', a: 'Nein, nur IPv4. Die Adressierung in IPv6 arbeitet anders, und beides in einer Rechnung zu vermengen, würde zwei verschiedene Modelle vermischen.' },
    ],
  },
  'modular-scale': {
    longDescription: 'Eine modulare Skala erzeugt Schriftgrößen durch Multiplikation statt nach Augenmaß: jede Stufe ist die vorige mal einem festen Verhältnis, deshalb bleiben Überschriften, Fließtext und Bildunterschriften in einer einzigen Beziehung, gleich wie viele Größen ein Entwurf am Ende braucht. Stufe null ist die Grundgröße — gewöhnlich der Fließtext —, positive Stufen steigen zu Überschriften auf, negative sinken zu Bildunterschriften und Kleingedrucktem. Das Verhältnis leistet die meiste Arbeit: 1,2 ergibt eine ruhige Skala mit eng beieinanderliegenden Größen, während 1,618 die Abstände so weit öffnet, dass eine Überschrift zwei Stufen höher mehr als doppelt so groß ist wie der Fließtext.',
    howToUse: [
      'Trage die Grundgröße ein — meist die Größe des Fließtextes.',
      'Wähle ein Verhältnis: 1,2 für eine enge Skala, 1,618 für eine kräftige.',
      'Trage ein, wie viele Stufen du über der Grundgröße für Überschriften brauchst.',
      'Trage ein, wie viele Stufen du darunter für Bildunterschriften und Kleingedrucktes brauchst.',
    ],
    howItWorks: 'Jede Größe ist Grundgröße × Verhältnis hoch der Stufennummer. Stufe null ist die Grundgröße selbst, positive Stufen wachsen, negative schrumpfen.',
    example: 'Eine Grundgröße von 16 mit dem Verhältnis 1,25 erreicht fünf Stufen höher 48,828 und zwei Stufen tiefer 10,24.',
    faq: [
      { q: 'Welches Verhältnis soll ich wählen?', a: 'Verhältnisse zwischen 1,125 und 1,25 halten die Größen eng beieinander und passen zu dichten Oberflächen. Größere — 1,414, 1,5, 1,618 — geben starken Kontrast und passen besser zu redaktionellen Layouts mit wenigen Ebenen.' },
      { q: 'Soll ich die Größen runden?', a: 'Für CSS ist das nicht nötig: Browser kommen mit gebrochenen Pixel- und rem-Werten gut zurecht. Runde nur, wenn ein Designsystem ganze Zahlen verlangt, und dann die ganze Skala auf dieselbe Weise.' },
      { q: 'Muss die Grundgröße die Fließtextgröße sein?', a: 'Müssen nicht, sollte aber meist. Die Skala an der Größe zu verankern, die am meisten gelesen wird, hält alle übrigen Größen in einer festgelegten Beziehung dazu.' },
      { q: 'Warum wächst die Skala oben so schnell?', a: 'Weil sie geometrisch ist. Jede Stufe multipliziert statt zu addieren, die Abstände weiten sich also mit steigenden Stufen — genau diese Eigenschaft hält das kleine Ende fein abgestuft, ohne das große zu stauchen.' },
    ],
  },
};
