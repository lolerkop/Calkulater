import type { DeDetailedContent } from './types';

export const deFinance6Content: Partial<Record<string, DeDetailedContent>> = {
  'savings-goal': {
    longDescription: 'Beantwortet die beiden Fragen, die ein Sparziel wirklich aufwirft: wie viel im Monat, oder wie lange. Der Beitrag folgt aus der Annuitätenformel, die Dauer hat keine geschlossene Form und wird Monat für Monat durchgerechnet, weil der Beitrag am Ende der Periode eingeht, während das bereits Angesparte schon Zinsen trägt. Die Dauer wird in ganzen Monaten ausgewiesen — ein halber Monat bedeutet nichts, wenn die Zahlung in einem Stück kommt —, und ein Ziel, das in hundert Jahren nicht erreicht wird, heißt unerreichbar statt als vierstellige Zahl von Monaten dazustehen.',
    howToUse: [
      'Wähle, ob du den Monatsbeitrag oder die Dauer suchst.',
      'Trage das Ziel ein und das, was du bereits zurückgelegt hast.',
      'Trage den Jahreszins ein — null ist zulässig, wenn das Geld einfach liegt.',
      'Trage je nach Modus die Laufzeit oder den Beitrag ein.',
    ],
    howItWorks: 'Der Monatszins ist der Jahreszins geteilt durch zwölf. Der Beitrag kommt aus der nach der Zahlung aufgelösten Annuitätenformel. Die Dauer ergibt sich, indem Monat für Monat ein Beitrag hinzukommt und verzinst wird, bis das Ziel erreicht ist.',
    example: 'Ein Ziel von 30 000 € mit 5000 € bereits gespart und 4 % über fünf Jahre verlangt 360,41 € im Monat.',
    faq: [
      { q: 'Warum wird die Dauer Monat für Monat gerechnet und nicht mit einer Formel?', a: 'Weil die geschlossene Form voraussetzt, dass die Zahlung stets genau auf eine Periodengrenze fällt, und einen gebrochenen Monat zurückgibt. Das schrittweise Rechnen entspricht dem Verhalten eines Sparkontos und liefert eine ganze Zahl von Beiträgen.' },
      { q: 'Wird angenommen, dass der Zinssatz gleich bleibt?', a: 'Ja. Ein einziger Satz für die ganze Laufzeit ist eine Annahme, und zwar eine sichtbare — wirkliche Anlagen werden zu dem verlängert, was in dem Jahr gerade geboten wird.' },
      { q: 'Was, wenn ich das Ziel schon erreicht habe?', a: 'Dann kommt der Beitrag als null heraus, und das Ergebnis zeigt, worauf der vorhandene Betrag anwächst. Es ist nichts mehr zu zahlen.' },
      { q: 'Werden die Zinsen monatlich gutgeschrieben?', a: 'Ja. Der Jahreszins wird durch zwölf geteilt und jeden Monat angewendet, wie es die meisten Sparkonten tun.' },
      { q: 'Warum kann ich das Ziel nicht einfach durch die Zahl der Monate teilen?', a: 'Weil das Geld auf dem Konto von selbst wächst. 25 000 € durch sechzig Monate ergäben rund 417 € — und das schießt über, denn die Zinsen übernehmen einen Teil der Arbeit: bei 4 % im Jahr genügen 360,41 €.' },
    ],
  },
  'savings-rate': {
    longDescription: 'Die Sparquote zeigt, welchen Teil deines Einkommens du behältst. Sie hängt nicht davon ab, wie viel du verdienst, und ist deshalb ein fairer Weg, einen Monat mit einem anderen zu vergleichen.',
    howToUse: [
      'Trage das Einkommen eines Monats oder eines anderen Zeitraums ein.',
      'Trage die Ausgaben desselben Zeitraums ein.',
      'Vergleiche die Quote mit früheren Zeiträumen.',
    ],
    howItWorks: 'Sparquote = (Einkommen − Ausgaben) ÷ Einkommen × 100 %. Sie ist unabhängig von Währung und Höhe des Einkommens.',
    example: 'Ein Einkommen von 3200 € bei Ausgaben von 2240 € ergibt 960 € gespart und eine Quote von 30 %.',
    faq: [
      { q: 'Welche Sparquote ist gut?', a: 'Rund 10 % halten ein Budget stabil, etwa 20 % sind bequem. Beständigkeit zählt mehr als ein einzelner starker Monat.' },
      { q: 'Was zählt als Einkommen?', a: 'Geld, das im Zeitraum tatsächlich eingegangen ist, nach Steuern. Halte einmalige Beträge getrennt, sonst schwankt die Quote.' },
      { q: 'Warum ist meine Quote negativ?', a: 'Die Ausgaben haben das Einkommen überstiegen, die Lücke wurde also aus Erspartem oder auf Kredit gedeckt. Der Rechner weist das in einer eigenen Zeile aus.' },
    ],
  },
  'simple-interest': {
    longDescription: 'Einfache Zinsen fallen auf den Anfangsbetrag an und nie auf bereits erhaltene Zinsen. Der Rechner arbeitet in beide Richtungen: er findet die Zinsen zu einem bekannten Satz oder den Satz, der einen bekannten Zinsertrag ergäbe.',
    howToUse: [
      'Wähle, was gesucht ist.',
      'Trage den Anfangsbetrag und die Laufzeit ein.',
      'Trage je nach Modus den Zinssatz oder die Zinsen ein.',
    ],
    howItWorks: 'Zinsen = Betrag × Zinssatz × Laufzeit ÷ 100. Der zweite Modus löst dieselbe Gleichung nach dem Zinssatz auf.',
    example: '10 000 € zu 8 % über drei Jahre bringen 2400 € Zinsen, der Endbetrag ist also 12 400 €.',
    faq: [
      { q: 'Worin unterscheidet sich das vom Zinseszins?', a: 'Einfache Zinsen fallen nie auf Zinsen an. Über dieselbe Laufzeit bringt der Zinseszins mehr, und der Abstand wächst mit der Zeit.' },
      { q: 'Wo werden einfache Zinsen verwendet?', a: 'Bei kurzen Darlehen, Ratenkäufen, Verzugszinsen und manchen Anleihen — überall dort, wo die Bemessungsgrundlage vertraglich festliegt.' },
      { q: 'Darf die Laufzeit gebrochen sein?', a: 'Ja. Ein halbes Jahr ist 0,5, und die Formel bleibt linear in der Laufzeit.' },
      { q: 'Warum wird eine Laufzeit von null abgewiesen?', a: 'Der Zinssatz hätte in diesem Fall keinen Wert: die Formel teilt durch die Laufzeit.' },
    ],
  },
  'time-value-money': {
    longDescription: 'Rechnet beide Seiten desselben Faktors (1 + i)ⁿ: der Endwert multipliziert den Betrag damit, der Barwert teilt ihn dadurch. Der zweite Modus ist die Abzinsung — die Antwort auf «was ist ein in einigen Jahren versprochener Betrag heute wert». Der effektive Jahreszins steht mit Absicht in einer eigenen Zeile: nominale 12 % bei monatlicher Verzinsung sind in Wirklichkeit 12,68 % im Jahr, und Angebote mit verschiedener Verzinsungshäufigkeit lassen sich an ihren Nominalsätzen nicht vergleichen. Die meisten Werbevergleiche ruhen genau auf diesem Abstand.',
    howToUse: [
      'Wähle, ob Endwert oder Barwert berechnet wird.',
      'Trage Betrag, Zinssatz und Laufzeit ein.',
      'Wähle, wie oft verzinst wird.',
      'Für die Abzinsung trage den künftigen Betrag ein.',
    ],
    howItWorks: 'Faktor = (1 + i)ⁿ, wobei i der Zins je Periode und n die Zahl der Perioden ist. Endwert = Betrag × Faktor, Barwert = Betrag ÷ Faktor. Effektiver Jahreszins = (1 + i)^m − 1.',
    example: '10 000 € zu 12 % im Jahr bei monatlicher Verzinsung werden nach fünf Jahren zu 18 166,97 €.',
    faq: [
      { q: 'Was ist Abzinsung?', a: 'Künftiges Geld auf heute zurückrechnen. 50 000 € in acht Jahren bei 9 % sind heute rund 25 093 € wert — und das ist es, was ein solches Versprechen zu zahlen lohnt.' },
      { q: 'Warum liegt der effektive Zins über dem nominalen?', a: 'Weil die Zinsen mehr als einmal im Jahr gutgeschrieben werden und selbst zu tragen beginnen. Nominale 12 % bei monatlicher Verzinsung ergeben 12,68 % im Jahr.' },
      { q: 'Wie unterscheidet sich das von einem Zinseszinsrechner?', a: 'Jener bildet eine Anlage mit regelmäßigen Einzahlungen ab. Hier gibt es einen einzigen Betrag und zwei Richtungen in der Zeit — vorwärts und zurück — ganz ohne Einzahlungen.' },
      { q: 'Mit welchem Satz soll ich abzinsen?', a: 'Mit der Rendite, die eine vergleichbar riskante Alternative realistisch brächte. Das ist der Preis dafür, auf das Geld heute zu verzichten.' },
      { q: 'Ist das Ergebnis nominal oder real?', a: 'Nominal: die Inflation bleibt hier außen vor. Für eine reale Zahl nimm einen um die Inflation bereinigten Satz oder rechne die Kaufkraft gesondert.' },
    ],
  },
  'vacation-accrual': {
    longDescription: 'Urlaub wächst gleichmäßig heran, statt im Januar vollständig da zu sein: nach einem halben Jahr hast du den halben Jahresanspruch erworben, was auch immer der Kalender vorhat. Bei achtundzwanzig Tagen sind das 2,333 Tage je Monat — eine gebrochene Zahl, die keine Lohnabrechnung zu deinen Gunsten aufrundet, und der Grund dafür, dass ein Rest selten eine ganze Zahl von Tagen ist. Ein negativer Rest wird gezeigt, wie er ist, denn Urlaub im Voraus zu nehmen ist eine übliche Abrede und kein Eingabefehler; ihn als null zu verbergen beschriebe falsch, was du schuldest, wenn du morgen gingst.',
    howToUse: [
      'Trage den Jahresanspruch in Tagen ein.',
      'Trage ein, wie viele Monate im Urlaubsjahr gearbeitet wurden.',
      'Trage die bereits genommenen Tage ein.',
      'Angebrochene Monate zählen meist als ganze — prüfe die geltende Regel.',
    ],
    howItWorks: 'Erworben je Monat = Jahrestage ÷ 12. Erworben = dieser Wert × gearbeitete Monate. Der Rest ist erworben minus genommene Tage.',
    example: 'Ein Anspruch von 28 Tagen nach 7 Monaten mit 5 genommenen Tagen lässt einen Rest von 11,333 Tagen.',
    faq: [
      { q: 'Warum ist der Monatswert gebrochen?', a: 'Weil sich achtundzwanzig Tage nicht glatt auf zwölf Monate verteilen. Lohnabrechnungen behalten den Bruchteil und rechnen ihn beim Ausscheiden ab, statt jeden Monat zu runden.' },
      { q: 'Kann der Rest negativ sein?', a: 'Ja, und dann wurde Urlaub im Voraus genommen. Das ist eine übliche Abrede; die negative Zahl ist das, was bei einem Ende des Arbeitsverhältnisses jetzt einbehalten würde.' },
      { q: 'Zählen angebrochene Monate?', a: 'In den meisten Systemen zählt ein angebrochener Monat ab einer bestimmten Schwelle als ganzer, die Schwelle unterscheidet sich aber. Trage ganze Monate so ein, wie es die geltende Regel zählt.' },
      { q: 'Wird nicht genommener Urlaub übertragen?', a: 'Das hängt von Recht und Vertrag ab. Manche erlauben die Übertragung mit einer Frist, andere verlangen stattdessen eine Abgeltung, und beides deckt diese Rechnung nicht ab.' },
    ],
  },
  'workday-cost': {
    longDescription: 'Macht aus einem Monatsgehalt den Preis eines Tages und einer Stunde — eine Zahl, die einen freien Tag, eine Überstunde und den täglichen Arbeitsweg vergleichbar macht. Die Zahl der Arbeitstage und die Länge einer Schicht bleiben gewöhnliche Felder mit sinnvollen Vorgaben: beide unterscheiden sich von Monat zu Monat und von Modell zu Modell, deshalb ist kein Arbeitskalender fest eingebaut, der für dich entscheidet.',
    howToUse: [
      'Trage das Monatsgehalt ein.',
      'Gib die Zahl der Arbeitstage in diesem Monat und die Länge der Schicht an.',
      'Lies den Wert eines Tages und einer Stunde ab.',
    ],
    howItWorks: 'Das Gehalt wird durch die Zahl der Arbeitstage geteilt und ergibt den Wert eines Tages; dieser geteilt durch die Länge der Schicht ergibt den Wert einer Stunde. Beides folgt deinen Eingaben — es wird keine Monatsnorm hinter deinem Rücken eingesetzt.',
    example: 'Ein Gehalt von 3600 € auf 21 Arbeitstage zu acht Stunden ergibt 171,43 € je Tag und 21,43 € je Stunde.',
    faq: [
      { q: 'Warum muss die Zahl der Arbeitstage von Hand eingetragen werden?', a: 'Weil sie sich von Monat zu Monat und von Arbeitszeitmodell zu Arbeitszeitmodell ändert. Eine feste Zahl für alle Fälle gäbe eine bequeme Annahme als Tatsache aus.' },
      { q: 'Brutto- oder Nettogehalt?', a: 'Was immer dir zum Nachdenken lieber ist. Die Rechnung ist linear, der Wert eines Tages kommt also in derselben Größe zurück wie das eingetragene Gehalt.' },
      { q: 'Taugt das zur Bewertung von Überstunden?', a: 'Als Anhaltspunkt ja — der Stundenwert zeigt, was die Zeit wert ist. Überstunden werden gewöhnlich mit einem Zuschlag vergütet, der gesondert anzuwenden ist.' },
      { q: 'Wie berücksichtige ich Feiertage und Krankheit?', a: 'Ziehe die Tage ab, an denen du tatsächlich nicht arbeitest. Die verbleibenden Tage werden dadurch teurer, und genau so verteilt sich das Gehalt.' },
    ],
  },
};
