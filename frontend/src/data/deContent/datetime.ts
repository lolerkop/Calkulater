import type { DeDetailedContent } from './types';

export const deDatetimeContent: Partial<Record<string, DeDetailedContent>> = {
  'day-of-week': {
    longDescription: 'Nennt den Wochentag zu jedem Datum, dazu seine Stelle im Jahr, die ISO-Kalenderwoche und ob er auf ein Wochenende fällt. Datumsangaben werden ohne Zeitzonenverschiebung gelesen, die Antwort ändert sich also nicht danach, wo du gerade bist.',
    howToUse: [
      'Trage das Datum ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Der Wochentag folgt aus dem Kalenderdatum selbst; die ISO-Woche ist diejenige, die den ersten Donnerstag des Jahres enthält.',
    example: 'Der 29. Februar 2024 war ein Donnerstag und der 60. Tag des Jahres.',
    faq: [
      { q: 'Spielt die Zeitzone eine Rolle?', a: 'Nein. Das Datum wird als reines Kalenderdatum gelesen, die Antwort ist deshalb überall dieselbe.' },
      { q: 'Warum gehört der 1. Januar manchmal zum Vorjahr?', a: 'Nach ISO 8601 ist die erste Woche diejenige mit dem ersten Donnerstag. Ein Jahr, das an einem Freitag, Samstag oder Sonntag beginnt, startet in der letzten Woche des Vorjahres.' },
      { q: 'Funktioniert das auch für frühere Jahrhunderte?', a: 'Es folgt dem gregorianischen Kalender. Für Daten vor seiner Einführung 1582 galt der julianische Kalender, und der Wochentag fällt dort anders aus.' },
      { q: 'Werden Schalttage berücksichtigt?', a: 'Ja. Den 29. Februar gibt es nur in Schaltjahren, und die Zählung des Jahrestages verschiebt sich entsprechend.' },
    ],
  },
  'final-grade': {
    longDescription: 'Rechnet von der gewünschten Note rückwärts: die bisherige Leistung steuert ihren Anteil bei, die Prüfung den Rest, und die Differenz ist das, was die Prüfung liefern muss. Ein Ergebnis über hundert ist eine Antwort und kein Fehler — es sagt, dass das Ziel mit dieser einen Prüfung nicht mehr erreichbar ist, und die Zahl zeigt, um wie viel.',
    howToUse: [
      'Trage deine aktuelle Note in Prozent ein.',
      'Trage die angestrebte Endnote ein.',
      'Gib an, wie stark die Prüfung gewichtet wird.',
    ],
    howItWorks: 'Nötige Punktzahl = (Ziel − aktuell × (1 − Gewicht)) ÷ Gewicht, mit dem Gewicht als Bruchteil.',
    example: 'Bei 78 Prozent und einer Prüfung mit 30 Prozent Gewicht bräuchte eine 85 als Endnote 101,33 — mehr, als die Prüfung hergeben kann.',
    faq: [
      { q: 'Was bedeutet das Gewicht der Prüfung?', a: 'Den Anteil, den die Prüfung an der Endnote hat. Der Rest kommt aus bereits erbrachten Leistungen, zusammen ergeben beide hundert Prozent.' },
      { q: 'Warum kann die Antwort über hundert liegen?', a: 'Weil das Ziel mit dieser einen Prüfung nicht mehr erreichbar ist. Die Zahl bleibt stehen, damit du siehst, wie groß der Rückstand ist.' },
      { q: 'Wird die aktuelle Note in Prozent angegeben?', a: 'Ja. Wenn dein Kurs eine andere Skala benutzt, rechne sie vorher um — die Rechnung läuft durchgehend in Prozent.' },
      { q: 'Wird das in eine Notenstufe umgerechnet?', a: 'Nein. Notenskalen unterscheiden sich nach Schule und Land, und ohne Referenztabelle wäre jede Umrechnung erfunden.' },
    ],
  },
  'leap-year': {
    longDescription: 'Wendet die gregorianische Regel an: Ein durch vier teilbares Jahr ist ein Schaltjahr, außer den vollen Jahrhunderten — die müssen zusätzlich durch vierhundert teilbar sein. Deshalb war 1900 ein gewöhnliches Jahr und 2000 nicht.',
    howToUse: [
      'Trage das Jahr ein.',
      'Lies die Antwort ab.',
      'Sieh bei Bedarf die nächstgelegenen Schaltjahre nach.',
    ],
    howItWorks: 'Teilbar durch 4 und entweder nicht teilbar durch 100 oder teilbar durch 400.',
    example: '2024 ist ein Schaltjahr, 1900 war keines, und 2000 war eines — weil es durch 400 teilbar ist.',
    faq: [
      { q: 'Wozu die Ausnahme bei den Jahrhunderten?', a: 'Ein tropisches Jahr dauert rund 365,2422 Tage, etwas weniger als 365,25. Drei ausgelassene Schalttage je vier Jahrhunderte halten den Kalender mit den Jahreszeiten im Takt.' },
      { q: 'War 1900 ein Schaltjahr?', a: 'Nein. Es ist durch 100 teilbar, aber nicht durch 400, deshalb hatte der Februar 28 Tage.' },
      { q: 'Wie oft kommt ein Schaltjahr vor?', a: 'Alle vier Jahre, abgesehen von den Jahrhundertausnahmen — 97 Schaltjahre auf je 400 Jahre.' },
      { q: 'Gilt die Regel auch für alte Daten?', a: 'Der gregorianische Kalender wurde 1582 eingeführt; für frühere Daten galt die julianische Regel, nach der jedes vierte Jahr ausnahmslos ein Schaltjahr war.' },
    ],
  },
  'reading-speed': {
    longDescription: 'Teilt die gelesenen Wörter durch die dafür gebrauchten Minuten und nennt die Geschwindigkeit in Wörtern je Minute, dazu den Stundenwert. Gib die Länge eines Buches an, und der Rechner schätzt, wie lange es in diesem Tempo dauern würde. Gemessen wird ausschließlich das Tempo — Verständnis ist eine andere Frage und wird hier nicht bewertet.',
    howToUse: [
      'Lies eine Passage und notiere, wie viele Wörter sie hatte.',
      'Trage die gebrauchte Zeit in Minuten ein.',
      'Ergänze bei Bedarf die Länge eines Buches für eine Schätzung.',
    ],
    howItWorks: 'Geschwindigkeit = Wörter ÷ Minuten; die Zeit für ein Buch ist seine Länge geteilt durch diese Geschwindigkeit.',
    example: '3000 Wörter in 12 Minuten sind 250 Wörter je Minute.',
    faq: [
      { q: 'Wird damit das Verständnis gemessen?', a: 'Nein. Gemessen wird nur das Tempo. Schneller zu lesen und weniger zu verstehen ergibt hier trotzdem eine höhere Zahl.' },
      { q: 'Was ist eine übliche Lesegeschwindigkeit bei Erwachsenen?', a: 'Die meisten lesen Prosa mit etwa 200 bis 300 Wörtern je Minute, der Wert schwankt aber mit dem Stoff und der Vertrautheit damit.' },
      { q: 'Warum ist die Zeichenzahl nur ungefähr?', a: 'Sie beruht auf einer durchschnittlichen Wortlänge, und die ist je nach Sprache und Text verschieden. Nimm sie als grobe Umrechnung, nicht als Messung.' },
      { q: 'Muss ich eine Buchlänge angeben?', a: 'Nein, das Feld ist freiwillig. Ohne sie bekommst du einfach die Geschwindigkeit.' },
    ],
  },
  'sleep-time': {
    longDescription: 'Neunzig Minuten sind die anerkannte durchschnittliche Länge eines Schlafzyklus, keine Messung an einem bestimmten Menschen — echte Zyklen laufen etwa 80 bis 110 Minuten und ändern sich im Lauf der Nacht. Es geht hier nicht um Genauigkeit, sondern darum, den Wecker zwischen zwei Zyklen zu setzen statt mitten in den Tiefschlaf; deshalb ist das Ziel eine ganze Zahl von Zyklen und nicht eine runde Zahl von acht Stunden. Mitten im Zyklus aufzuwachen fühlt sich auch nach einer langen Nacht zerschlagen an, am Ende eines Zyklus auch nach einer kurzen erholt. Die Einschlafdauer kommt getrennt hinzu, weil sie Zeit im Bett ist und nicht Schlaf.',
    howToUse: [
      'Wähle, ob du deine Zubettgehzeit oder deinen Wecker kennst.',
      'Trage diese Zeit in Stunden und Minuten ein.',
      'Wähle die Zahl der Zyklen — fünf oder sechs passen den meisten Erwachsenen.',
      'Trage ein, wie lange du gewöhnlich zum Einschlafen brauchst.',
    ],
    howItWorks: 'Zeit im Bett = Zyklen × 90 Minuten + Einschlafdauer. Das wird zu einer Zubettgehzeit addiert oder von einer Aufstehzeit abgezogen, mit Übergang über Mitternacht.',
    example: 'Um 23:00 ins Bett, fünf Zyklen, 15 Minuten zum Einschlafen — der Wecker steht auf 06:45.',
    faq: [
      { q: 'Dauert ein Schlafzyklus wirklich 90 Minuten?', a: 'Im Mittel und ungefähr. Einzelne Zyklen laufen etwa 80 bis 110 Minuten und werden im Lauf der Nacht länger; nimm das Ergebnis als Zielmarke, nicht als Fahrplan.' },
      { q: 'Wie viele Zyklen sollte ich anstreben?', a: 'Fünf oder sechs für die meisten Erwachsenen, das sind siebeneinhalb bis neun Stunden Schlaf. Vier sind eine kurze Nacht, die gelegentlich trägt, aber nicht dauerhaft.' },
      { q: 'Warum kommt die Einschlafdauer getrennt hinzu?', a: 'Weil sie Zeit im Bett ist und nicht Schlaf. Einen Wecker ohne sie zu stellen, nimmt die Differenz vom letzten Zyklus weg — genau das soll die Rechnung verhindern.' },
      { q: 'Warum liegt das Ergebnis manchmal am nächsten Tag?', a: 'Weil die Uhr über Mitternacht läuft. Um 23:00 ins Bett und neun Stunden Schlaf heißt 08:00 am nächsten Morgen und nicht 32:00.' },
    ],
  },
  'test-score-percent': {
    longDescription: 'Teilt die richtigen Antworten durch die Gesamtzahl der Fragen und zeigt den Prozentwert, die Zahl der Fehler und deren Anteil. Gibst du eine Bestehensgrenze an, kommt ein Urteil dazu. Im Nenner steht jede Frage des Tests, eine übersprungene kostet dich also genauso viel wie eine falsch beantwortete.',
    howToUse: [
      'Trage ein, wie viele Antworten richtig waren.',
      'Trage ein, wie viele Fragen der Test hatte.',
      'Ergänze eine Bestehensgrenze, wenn du ein Urteil möchtest.',
    ],
    howItWorks: 'Prozentwert = richtig ÷ gesamt × 100, und die Fehlerzahl ist schlicht die Differenz.',
    example: '18 richtige von 20 Fragen sind 18 ÷ 20 × 100 = 90 Prozent.',
    faq: [
      { q: 'Warum bekomme ich keine Notenstufe?', a: 'Notenskalen unterscheiden sich nach Schule und Land. Ohne Referenztabelle wäre die Umrechnung erfunden, deshalb bleibt das Ergebnis ein Prozentwert.' },
      { q: 'Zählen übersprungene Fragen gegen mich?', a: 'Ja. Im Nenner steht der ganze Test, eine unbeantwortete Frage zählt also wie eine falsche.' },
      { q: 'Was passiert, wenn ich mehr richtige Antworten als Fragen eintrage?', a: 'Das wird abgewiesen. Die Rechnung würde bereitwillig 105 Prozent liefern — das sieht aus wie eine Antwort, ist aber ein Eingabefehler.' },
      { q: 'Muss ich eine Bestehensgrenze angeben?', a: 'Nein, das Feld ist freiwillig. Lässt du es leer, bekommst du einfach den Prozentwert ohne Urteil.' },
    ],
  },
  'text-reading-time': {
    longDescription: 'Schätzt die Dauer aus dem Umfang eines Textes: füge den Text selbst ein oder trage eine Wortzahl ein, wenn der Text nicht zur Hand ist. Sprechen ist deutlich langsamer als stilles Lesen — rund 130 gegen 200 Wörter je Minute —, weshalb ein Vortrag auf Grundlage eines Textes, der sich in fünf Minuten liest, auf fast acht kommt. Beide Tempi sind änderbare Annahmen und keine Normen: sie unterscheiden sich nach Person und Text, und einen Durchschnitt als Tatsache auszugeben wäre falsch.',
    howToUse: [
      'Wähle, was du hast: eine Wortzahl oder den Text selbst.',
      'Füge den Text ein oder trage die Zahl der Wörter ein.',
      'Passe das Lesetempo bei Bedarf an dein eigenes an.',
      'Ändere das Sprechtempo, wenn du einen Vortrag vorbereitest und dein Tempo kennst.',
    ],
    howItWorks: 'Die Wortzahl wird durch das Lesetempo geteilt und mit sechzig multipliziert, das ergibt Sekunden, auf ganze gerundet. Die Dauer laut vorgelesen läuft denselben Weg mit dem Sprechtempo, das gewöhnlich rund ein Drittel niedriger liegt.',
    example: 'Ein Text mit 1200 Wörtern liest sich still in genau 6 Minuten und dauert laut vorgelesen 9 Minuten 14 Sekunden.',
    faq: [
      { q: 'Worin unterscheidet sich das vom Rechner für die Lesegeschwindigkeit?', a: 'Jener misst dein Tempo aus dem, was du in bekannter Zeit gelesen hast. Dieser geht andersherum vor: das Tempo ist bekannt, und die Dauer wird geschätzt.' },
      { q: 'Welches Lesetempo soll ich nehmen?', a: 'Erwachsene schaffen in ihrer eigenen Sprache meist 180 bis 250 Wörter je Minute; dichter Fachtext ist deutlich langsamer. Der Wert ist änderbar, weil er eine Schätzung ist und keine Norm.' },
      { q: 'Warum ist Sprechen langsamer als Lesen?', a: 'Sprechen braucht Atem und Pausen. Ein durchschnittliches Sprechtempo liegt bei rund 130 Wörtern je Minute, ein Vortrag mit Pausen ist noch langsamer.' },
      { q: 'Wie werden Wörter im eingefügten Text gezählt?', a: 'Ein Wort ist eine Folge von Buchstaben oder Ziffern; ein Bindestrich oder Apostroph im Wort trennt es nicht, und Satzzeichen werden nicht mitgezählt.' },
      { q: 'Sind Bilder und Formeln enthalten?', a: 'Nein, gezählt wird nur der Text. Formeln und Tabellen bremsen das Lesen meist stärker als gewöhnliche Prosa.' },
    ],
  },
  'time-duration': {
    longDescription: 'Rechnet aus, wie lang es zwischen zwei Uhrzeiten ist, oder welche Uhrzeit sich ergibt, wenn eine Dauer addiert oder abgezogen wird. Uhrzeiten, die über Mitternacht laufen, gelten als Normalfall und nicht als Fehler.',
    howToUse: [
      'Wähle, was berechnet werden soll.',
      'Trage die Uhrzeiten in Stunden und Minuten ein.',
      'Lies die Dauer oder die sich ergebende Uhrzeit ab.',
    ],
    howItWorks: 'Alles wird in Minuten ab Mitternacht umgerechnet und danach in einen 24-Stunden-Tag zurückgeführt.',
    example: 'Von 22:15 bis 06:45 sind es 8 Stunden 30 Minuten.',
    faq: [
      { q: 'Was gilt, wenn die Endzeit vor der Startzeit liegt?', a: 'Das zählt als Übergang über Mitternacht, genau das braucht eine Nachtschicht. Das Ergebnis wird in einer eigenen Zeile ausgewiesen.' },
      { q: 'Kann die Dauer länger als ein Tag sein?', a: 'Dauern, die du addierst oder abziehst, dürfen 24 Stunden überschreiten; die sich ergebende Uhrzeit läuft dann um die Uhr herum.' },
      { q: 'Werden Sekunden unterstützt?', a: 'Nein. Der Rechner arbeitet in ganzen Minuten, und das ist es, was Schicht- und Terminrechnungen brauchen.' },
      { q: 'Was passiert mit Werten außerhalb des Bereichs?', a: 'Stunden werden auf 0–23 und Minuten auf 0–59 begrenzt, ein Tippfehler ergibt also eine sinnvolle Uhrzeit statt eines kaputten Ergebnisses.' },
    ],
  },
  'timezone-difference': {
    longDescription: 'Rechnet eine Uhrzeit zwischen zwei Zonen um, die als UTC-Abweichung angegeben werden. Die Abweichungen werden als Zahlen eingetragen, und das ist eine bewusste Einschränkung: dieser Rechner führt keine Zeitzonendatenbank, erschließt keine Sommerzeit und kennt keine Geschichte früherer Regeln — er vergleicht genau die Abweichungen, die du angibst. Halbe und viertelstündige Abweichungen funktionieren: Indien mit UTC+5:30 und Nepal mit UTC+5:45 sind gültige Zonen und keine Kuriositäten, deshalb wird der Unterschied in Minuten gerechnet. Ein Übergang über Mitternacht steht in einer eigenen Zeile, sonst sähe die Uhrzeit nach demselben Kalendertag aus.',
    howToUse: [
      'Trage die UTC-Abweichung der Zone ein, in der die Uhrzeit bekannt ist.',
      'Trage die UTC-Abweichung der Zone ein, in die umgerechnet wird.',
      'Trage Stunden und Minuten der Ausgangszeit ein.',
      'Prüfe die Zeile zum Kalendertag: die Uhrzeit kann auf einen Nachbartag gerutscht sein.',
    ],
    howItWorks: 'Der Unterschied zwischen den Abweichungen wird in Minuten umgerechnet und zur Ausgangszeit addiert. Fällt die Summe aus dem Tag heraus, rutscht die Uhrzeit auf den Nachbartag, und der Versatz wird gesondert ausgewiesen.',
    example: '14:30 bei UTC+3 entsprechen 06:30 am selben Tag bei UTC−5.',
    faq: [
      { q: 'Warum werden Zonen als Zahl eingetragen statt aus einer Liste gewählt?', a: 'Weil eine Liste eine Zeitzonendatenbank braucht und jährliche Pflege dazu. Eine veraltete Regel anzuzeigen ist schlechter, als nach einer Abweichung zu fragen, die du jetzt gerade nachsehen kannst.' },
      { q: 'Wird die Sommerzeit berücksichtigt?', a: 'Nein. Wenn eine der Zonen auf Sommerzeit läuft, trage die Abweichung ein, die sie schon enthält — also etwa UTC+2 statt UTC+1.' },
      { q: 'Sind Zonen mit halben Stunden möglich?', a: 'Ja. Indien nutzt UTC+5:30 und Nepal UTC+5:45; trage sie als 5,5 und 5,75 ein.' },
      { q: 'Was bedeutet der Tagesversatz?', a: 'Dass die umgerechnete Uhrzeit auf einem Nachbartag gelandet ist: plus eins ist der Folgetag, minus eins der Vortag.' },
      { q: 'Wie finde ich die Abweichung einer Stadt?', a: 'Sie steht in den Zeitzoneneinstellungen deines Telefons oder Rechners neben dem Städtenamen, meist als UTC+3 oder GMT+3.' },
    ],
  },
  'work-hours': {
    longDescription: 'Zählt tatsächlich geleistete Stunden und nicht Arbeitstage im Kalender: die Pause wird von der Schichtlänge abgezogen, und was bleibt, wird mit der Zahl der Schichten multipliziert. Nachtschichten werden gesondert behandelt — liegt das Ende vor dem Beginn, läuft die Schicht über Mitternacht, und ein schlichtes Abziehen liefert eine negative Zahl. Dort einen Tag zu addieren ist kein bequemer Kniff, sondern der einzige Weg, aus „22:00 — 06:00“ acht Stunden statt minus sechzehn zu bekommen. Eine Pause, die länger ist als die Schicht, wird abgewiesen: negative Arbeitszeit gibt es nicht, und sie anzuzeigen wäre plausibler Unsinn.',
    howToUse: [
      'Trage den Schichtbeginn in Stunden und Minuten ein.',
      'Trage das Ende ein — bei einer Nachtschicht einfach die Morgenstunde.',
      'Trage die Länge der Pause in Minuten ein.',
      'Setze die Zahl der Schichten im Zeitraum und den Stundensatz.',
    ],
    howItWorks: 'Schichtlänge = Ende minus Beginn, mit einem addierten Tag beim Übergang über Mitternacht. Arbeitszeit = Schichtlänge minus Pause, und die Stunden im Zeitraum sind Arbeitszeit × Zahl der Schichten.',
    example: 'Eine Schicht von 9:00 bis 18:00 mit einer Stunde Pause ergibt 8 Stunden — bei 21 Schichten 168 Stunden, bei einem Stundensatz von 25 € also 4.200 €.',
    faq: [
      { q: 'Wie wird eine Schicht über Mitternacht behandelt?', a: 'Liegt die Endzeit vor der Startzeit, wird ein Tag zur Differenz addiert. Eine Schicht von 22:00 bis 06:00 ergibt deshalb acht Stunden statt minus sechzehn.' },
      { q: 'Warum wird eine Pause abgewiesen, die länger als die Schicht ist?', a: 'Weil die Arbeitszeit negativ würde. Ein solches Ergebnis sähe plausibel aus, während es in Wahrheit einen Tippfehler anzeigt — deshalb wird es verweigert.' },
      { q: 'Worin unterscheidet sich das vom Zählen der Arbeitstage?', a: 'Hier werden Stunden innerhalb einer Schicht gezählt und keine Tage im Kalender. Ein Arbeitskalender mit Feiertagen ist ein eigener Rechner.' },
      { q: 'Sind Zuschläge für Überstunden enthalten?', a: 'Nein, der Satz gilt für jede Stunde gleich. Rechne Stunden mit Zuschlag als eigene Schicht zu einem anderen Satz.' },
      { q: 'Was zeigt die Schichtlänge vor der Pause?', a: 'Die gesamte Anwesenheit von Beginn bis Ende, Pause eingeschlossen. Die bezahlte Zeit steht in der Zeile darüber, dort schon ohne sie.' },
    ],
  },
};
