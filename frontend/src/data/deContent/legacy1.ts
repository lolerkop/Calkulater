import type { DeDetailedContent } from './types';

export const deLegacy1Content: Partial<Record<string, DeDetailedContent>> = {
  'credit-calculator': {
    longDescription: 'Rechnet ein Darlehen von der Summe zur Rate und zeigt daneben, was es insgesamt kostet. Beide in Verträgen üblichen Tilgungsarten stehen zur Wahl: die Annuität hält die Rate über die ganze Laufzeit gleich und verschiebt nur das Verhältnis von Zins und Tilgung darin, während die fallende Rate den Kreditbetrag in gleiche Teile schneidet und die Zinsen jeden Monat auf die Restschuld rechnet — die ersten Raten sind höher, die Summe der Zinsen aber meist niedriger. Eine monatliche Sondertilgung und eine einmalige Gebühr lassen sich getrennt eintragen, weil sie an entgegengesetzten Enden wirken: die eine kürzt die Laufzeit, die andere erhöht die Kosten sofort.',
    howToUse: [
      'Trage den Darlehensbetrag ein und wähle, ob die Laufzeit in Jahren oder Monaten steht.',
      'Trage den Jahreszins ein, so wie ihn das Angebot ausweist.',
      'Wähle die Tilgungsart: gleichbleibende Rate oder fallende Rate.',
      'Ergänze eine monatliche Sondertilgung und eine einmalige Gebühr, wenn der Vertrag sie vorsieht.',
    ],
    howItWorks: 'Der Jahreszins wird durch zwölf geteilt. Bei der Annuität ist die Rate Betrag × i ÷ (1 − (1 + i)⁻ⁿ) und bleibt gleich. Bei der fallenden Rate ist die Tilgung Betrag ÷ n, und die Zinsen jedes Monats sind die Restschuld × i. Die Summe aller Zahlungen und die Mehrkosten folgen aus dem Plan, die einmalige Gebühr kommt oben darauf.',
    example: '20 000 € über fünf Jahre zu 8 % mit gleichbleibender Rate ergeben rund 406 € im Monat, etwa 24 300 € insgesamt und ungefähr 4300 € Zinsen.',
    faq: [
      { q: 'Gleichbleibende oder fallende Rate — was ist günstiger?', a: 'Die fallende Rate kostet über die ganze Laufzeit meist weniger Zinsen, verlangt am Anfang aber die höchste Zahlung. Die Annuität ist teurer und planbarer. Welche passt, entscheidet dein Haushalt in den ersten Jahren, nicht die Summe am Ende.' },
      { q: 'Was ändert eine monatliche Sondertilgung?', a: 'Sie geht vollständig gegen die Restschuld, deshalb sinken die Zinsen jedes folgenden Monats und die Laufzeit verkürzt sich. Prüfe im Vertrag, ob die Bank Sondertilgungen ohne Entschädigung zulässt.' },
      { q: 'Ist das der effektive Jahreszins?', a: 'Nein. Gerechnet wird mit dem Sollzins, den du einträgst. Der effektive Jahreszins enthält zusätzlich Gebühren und Pflichtprodukte und liegt deshalb höher — vergleiche Angebote an ihm und nicht an der Rate.' },
      { q: 'Sind Versicherung und Kontogebühren enthalten?', a: 'Nur, soweit du sie als einmalige Gebühr einträgst. Laufende Beiträge für Restschuld- oder Kontoführung bildet diese Rechnung nicht ab, und sie können die Kosten spürbar heben.' },
      { q: 'Warum weicht der Plan der Bank leicht ab?', a: 'Banken rechnen Zinsen oft taggenau nach dem Kalender, während hier mit gleichen Monaten gerechnet wird. Der Unterschied liegt im Bereich weniger Euro je Rate, summiert sich über die Laufzeit aber sichtbar.' },
    ],
  },
  'compound-interest': {
    longDescription: 'Zeigt, wie eine Anlage wächst, wenn die Zinsen selbst wieder Zinsen tragen. Zwei Dinge lassen sich getrennt einstellen und werden oft verwechselt: wie oft die Zinsen gutgeschrieben werden und wie oft du einzahlst. Die erste Angabe bestimmt, wie schnell der Zinseszins greift, die zweite, wie viel eigenes Geld hinzukommt. Das Ergebnis trennt beides ebenfalls — eingezahlter Betrag und Gewinn stehen einzeln —, denn erst dieser Abstand sagt, wie viel Arbeit das Geld tatsächlich geleistet hat.',
    howToUse: [
      'Trage den Anfangsbetrag ein.',
      'Trage den Jahreszins ein und wähle, wie oft er gutgeschrieben wird.',
      'Trage die Laufzeit in Jahren ein.',
      'Ergänze eine regelmäßige Einzahlung und ihre Häufigkeit, wenn du sparst statt nur anzulegen.',
    ],
    howItWorks: 'Der Jahreszins wird auf die gewählte Periode heruntergerechnet und in jeder Periode auf den gesamten Bestand angewendet. Regelmäßige Einzahlungen kommen in ihrer eigenen Häufigkeit hinzu und tragen ab dem Zeitpunkt ihrer Einzahlung Zinsen mit.',
    example: '10 000 € zu 8 % bei monatlicher Gutschrift und 200 € Einzahlung im Monat wachsen in zehn Jahren auf rund 58 000 €, wovon 34 000 € eingezahlt sind.',
    faq: [
      { q: 'Was ändert die Häufigkeit der Gutschrift?', a: 'Je öfter Zinsen gutgeschrieben werden, desto früher tragen sie selbst Zinsen. Der Unterschied zwischen jährlich und monatlich ist bei kurzen Laufzeiten klein und über zwanzig Jahre deutlich sichtbar.' },
      { q: 'Warum stehen eingezahlter Betrag und Gewinn getrennt?', a: 'Weil die Endsumme allein nichts über den Erfolg sagt. Erst der Abstand zwischen dem, was du eingezahlt hast, und dem, was herauskommt, zeigt, was der Zins beigetragen hat.' },
      { q: 'Ist die Inflation berücksichtigt?', a: 'Nein, das Ergebnis ist nominal. Für einen realen Wert nimm einen um die Inflation bereinigten Zinssatz oder rechne die Kaufkraft gesondert.' },
      { q: 'Sind Steuern auf Kapitalerträge enthalten?', a: 'Nein. Abgeltungsteuer und Solidaritätszuschlag mindern den Gewinn und liegen außerhalb dieser Rechnung — ziehe sie vom Zinssatz ab, wenn du sie einbeziehen willst.' },
      { q: 'Bleibt der Zinssatz wirklich zwanzig Jahre gleich?', a: 'In der Rechnung ja, in der Wirklichkeit selten. Ein fester Satz für die ganze Laufzeit ist eine Annahme, die das Ergebnis vergleichbar macht, aber keine Vorhersage.' },
    ],
  },
  'mortgage-calculator': {
    longDescription: 'Rechnet eine Baufinanzierung vom Kaufpreis her und nicht vom Darlehensbetrag: eingetragen wird, was die Immobilie kostet, und die Anzahlung — wahlweise als Betrag oder als Anteil — bestimmt, wie viel überhaupt finanziert wird. Versicherung und laufende Nebenkosten haben ein eigenes Feld, weil sie in der monatlichen Belastung stecken, aber nicht im Darlehen: die Rate an die Bank und das, was tatsächlich jeden Monat abfließt, sind zwei verschiedene Zahlen, und die Gesamtkosten weisen beides zusammen aus.',
    howToUse: [
      'Trage den Kaufpreis der Immobilie ein.',
      'Wähle, ob die Anzahlung als Betrag oder als Prozentsatz steht, und trage sie ein.',
      'Trage Laufzeit, Zinssatz und die Tilgungsart ein.',
      'Ergänze Versicherung und laufende Kosten im Monat sowie eine mögliche Sondertilgung.',
    ],
    howItWorks: 'Der Darlehensbetrag ist der Kaufpreis minus der Anzahlung. Die Rate folgt der gewählten Tilgungsart — gleichbleibend oder fallend — auf diesen Betrag. Versicherung und laufende Kosten kommen monatlich hinzu, und die Gesamtkosten fassen Anzahlung, alle Raten und diese Nebenkosten zusammen.',
    example: '300 000 € Kaufpreis, 20 % Anzahlung, 20 Jahre zu 4 % ergeben ein Darlehen von 240 000 € und rund 1454 € Rate im Monat.',
    faq: [
      { q: 'Warum wird der Kaufpreis und nicht der Darlehensbetrag eingetragen?', a: 'Weil du den Preis kennst und die Anzahlung planst. Der Darlehensbetrag ist das Ergebnis dieser beiden Zahlen und steht deshalb im Ergebnis statt in der Eingabe.' },
      { q: 'Wie stark hilft eine höhere Anzahlung?', a: 'Sie senkt den Darlehensbetrag unmittelbar und damit jede Rate und jeden Zins. In Deutschland verbessert sie zusätzlich oft den angebotenen Zinssatz, weil der Beleihungsauslauf sinkt.' },
      { q: 'Sind Kaufnebenkosten enthalten?', a: 'Nein. Grunderwerbsteuer, Notar, Grundbuch und Makler kommen zum Kaufpreis hinzu und werden meist aus Eigenkapital gezahlt. Rechne sie gesondert, sonst ist die Anzahlung zu optimistisch angesetzt.' },
      { q: 'Was gehört in das Feld für Versicherung und laufende Kosten?', a: 'Alles, was monatlich neben der Rate anfällt: Wohngebäudeversicherung, Hausgeld, Rücklagen. Es fließt in die Gesamtkosten ein, verändert aber das Darlehen nicht.' },
      { q: 'Was ist mit der Zinsbindung?', a: 'Die Rechnung geht von einem Zinssatz für die ganze Laufzeit aus. Läuft deine Zinsbindung früher aus, gilt das Ergebnis nur bis dahin, und die Anschlussfinanzierung ist eine eigene Rechnung.' },
    ],
  },
  'percent-calculator': {
    longDescription: 'Fasst die fünf Prozentaufgaben zusammen, die im Alltag wirklich vorkommen, und hält sie sauber auseinander: wie viel X Prozent einer Zahl ausmachen, wie viel Prozent A von B ist, einen Prozentsatz aufschlagen, ihn abziehen und die prozentuale Veränderung von A zu B. Der Modus zählt mehr als die Zahlen, denn «20 % von 500» und «500 um 20 % erhöht» sind zwei verschiedene Fragen mit zwei verschiedenen Antworten — die erste liefert einen Teil, die zweite den neuen Wert.',
    howToUse: [
      'Wähle zuerst die Aufgabe und trage erst danach die Zahlen ein.',
      'Trage A und B in der Bedeutung ein, die der gewählte Modus ihnen gibt.',
      'Lies das Ergebnis ab und prüfe bei einer Veränderung, welcher Wert die Bezugsgröße war.',
    ],
    howItWorks: 'Prozent einer Zahl: A × B ÷ 100. Anteil: A ÷ B × 100. Aufschlag: A × (1 + B ÷ 100). Abzug: A × (1 − B ÷ 100). Veränderung: (B − A) ÷ A × 100.',
    example: 'Steigt ein Preis von 40 € auf 50 €, sind das 25 % — zehn Euro mehr, aber ein Viertel des Ausgangswerts.',
    faq: [
      { q: 'Was ist der Unterschied zwischen Prozent und Prozentpunkt?', a: 'Ein Zinssatz, der von 5 % auf 7 % steigt, wächst um 2 Prozentpunkte und zugleich um 40 Prozent. Beide Zahlen stimmen, sie beantworten nur verschiedene Fragen.' },
      { q: 'Warum ergeben zwei Rabatte nicht ihre Summe?', a: 'Der zweite Rabatt wird vom bereits gesenkten Preis genommen. 20 % und danach 10 % ergeben zusammen 28 % und nicht 30 %.' },
      { q: 'Wie finde ich den Wert vor einer Änderung?', a: 'Teile statt zu multiplizieren: 120 nach einem Aufschlag von 20 % waren 120 ÷ 1,2 = 100. Nach einem Rabatt von 20 % waren 80 gleich 80 ÷ 0,8 = 100.' },
      { q: 'Was, wenn die Bezugsgröße null ist?', a: 'Dann ist die Aufgabe nicht lösbar: durch null zu teilen hat keinen Wert, und eine Veränderung von null aus lässt sich nicht in Prozent ausdrücken. Der Rechner weist das aus, statt eine Zahl zu erfinden.' },
    ],
  },
  'discount-calculator': {
    longDescription: 'Rechnet einen Rabatt in beide Richtungen — als Prozentsatz oder als Betrag — und beantwortet zusätzlich die Frage, die im Laden tatsächlich auftaucht: was ein zweiter Rabatt auf den bereits gesenkten Preis noch bringt. Zwei Rabatte addieren sich nicht, sie multiplizieren sich, und der ausgewiesene Gesamtprozentsatz zeigt genau diesen Unterschied. Eine Stückzahl lässt sich mitgeben, weil die Ersparnis erst dort interessant wird, wo mehr als ein Stück im Korb liegt.',
    howToUse: [
      'Trage den ursprünglichen Preis ein.',
      'Wähle, ob der Rabatt in Prozent oder als Betrag angegeben ist, und trage ihn ein.',
      'Ergänze einen zweiten Rabatt, wenn er auf den bereits gesenkten Preis gewährt wird.',
      'Trage die Stückzahl ein, wenn du die Ersparnis für den ganzen Einkauf sehen willst.',
    ],
    howItWorks: 'Preis nach Rabatt = Preis × (1 − Rabatt ÷ 100), bei einem Betrag entsprechend Preis minus Betrag. Ein zweiter Rabatt wirkt auf dieses Ergebnis, nicht auf den Ausgangspreis, und der ausgewiesene Gesamtrabatt folgt aus beiden Preisen.',
    example: '100 € mit 20 % und danach noch 10 % kosten 72 € — insgesamt 28 % und nicht 30 %.',
    faq: [
      { q: 'Warum sind zwei Rabatte weniger als ihre Summe?', a: 'Der zweite Rabatt gilt für den schon gesenkten Preis. Er wird also von einer kleineren Zahl genommen, und der Gesamtrabatt bleibt unter der einfachen Summe.' },
      { q: 'Der Rabatt ist in Euro angegeben — geht das auch?', a: 'Ja, dafür gibt es den zweiten Modus. Der zugehörige Prozentsatz wird mitberechnet, damit sich Angebote vergleichen lassen.' },
      { q: 'Ist die Umsatzsteuer berücksichtigt?', a: 'Der Rechner arbeitet mit den Beträgen, die du einträgst. Im Einzelhandel enthalten die Preise die Steuer bereits, dann enthält auch das Ergebnis sie.' },
      { q: 'Wozu die Stückzahl?', a: 'Weil ein Rabatt je Stück klein aussieht und über den ganzen Einkauf spürbar wird. Die Ersparnis wird mit der Stückzahl multipliziert ausgewiesen.' },
    ],
  },
  'margin-calculator': {
    longDescription: 'Marge und Aufschlag beschreiben denselben Gewinn und liefern verschiedene Zahlen, weil sie ihn durch Verschiedenes teilen: der Aufschlag durch die Selbstkosten, die Marge durch den Verkaufspreis. Deshalb ist der Aufschlag bei einem gewinnbringenden Geschäft immer die größere Zahl — sein Nenner ist kleiner. Ein Aufschlag von 100 % ist eine Marge von 50 %, und wer beides verwechselt, kalkuliert dauerhaft falsch. Der Rechner arbeitet in drei Richtungen: aus Preis und Kosten, aus Kosten und Aufschlag, aus Kosten und Marge.',
    howToUse: [
      'Wähle, welche zwei Größen du kennst.',
      'Trage die Selbstkosten ein.',
      'Trage je nach Modus den Verkaufspreis, den Aufschlag oder die Marge ein.',
      'Ergänze eine Stückzahl, wenn du den Gewinn der ganzen Partie sehen willst.',
    ],
    howItWorks: 'Gewinn = Verkaufspreis − Selbstkosten. Aufschlag = Gewinn ÷ Selbstkosten × 100. Marge = Gewinn ÷ Verkaufspreis × 100. Rückwärts gilt Preis = Kosten × (1 + Aufschlag) und Preis = Kosten ÷ (1 − Marge).',
    example: 'Selbstkosten von 100 € und ein Preis von 125 € ergeben 25 € Gewinn, 25 % Aufschlag und 20 % Marge — ein Geschäft, zwei Prozentzahlen.',
    faq: [
      { q: 'Worin unterscheiden sich Marge und Aufschlag?', a: 'In der Bezugsgröße. Der Aufschlag misst, wie weit der Preis über den Kosten liegt, die Marge, welcher Anteil des Verkaufspreises Gewinn ist. Der Gewinn ist derselbe, nur der Nenner wechselt.' },
      { q: 'Wie rechne ich Aufschlag in Marge um?', a: 'Marge = Aufschlag ÷ (100 + Aufschlag) × 100, und umgekehrt Aufschlag = Marge ÷ (100 − Marge) × 100. Der Rechner macht diese Umrechnung in jedem Modus mit.' },
      { q: 'Warum kann die Marge keine 100 % erreichen?', a: 'Eine Marge von 100 % bedeutete Selbstkosten von null. Je näher die Marge an hundert rückt, desto stärker wächst der nötige Preis, deshalb werden solche Werte abgewiesen.' },
      { q: 'Ist die Umsatzsteuer enthalten?', a: 'Nein. Der Rechner nimmt die Beträge, die du einträgst. Rechne die Steuer vorher heraus oder hinzu und arbeite hier mit einheitlichen Zahlen.' },
      { q: 'Was, wenn der Preis unter den Kosten liegt?', a: 'Die Rechnung läuft weiter: Gewinn, Aufschlag und Marge werden negativ, und ein Hinweis erscheint. Genau so prüft man den Verlust einer Aktion oder eines Abverkaufs.' },
    ],
  },
  'break-even-calculator': {
    longDescription: 'Der Deckungsbeitrag je Einheit — Preis minus variable Kosten — ist die ganze Rechnung: jede verkaufte Einheit trägt genau diesen Betrag zu den Fixkosten bei, und sobald die Summe dieser Beiträge die Fixkosten erreicht, ist die Gewinnschwelle da. Verkauft wird in ganzen Einheiten, deshalb wird die Menge aufgerundet, und der Umsatz erscheint in zwei getrennten Zeilen — bei der rechnerischen Menge und bei der ganzen Zahl von Einheiten —, weil das zwei verschiedene Beträge sind, die der Rechner nicht vermischt.',
    howToUse: [
      'Trage die Fixkosten der Periode ein: Miete, Gehälter, Abos, Abschreibung.',
      'Trage den Verkaufspreis einer Einheit ein.',
      'Trage die variablen Kosten je Einheit ein: Material, Verpackung, Provision, Versand.',
      'Ergänze die geplante Absatzmenge, wenn du die Sicherheitsspanne sehen willst.',
    ],
    howItWorks: 'Deckungsbeitrag je Einheit = Preis − variable Kosten. Gewinnschwelle = Fixkosten ÷ Deckungsbeitrag, aufgerundet auf ganze Einheiten. Die Deckungsbeitragsquote ist der Deckungsbeitrag geteilt durch den Preis, und die Sicherheitsspanne ist der Abstand der geplanten Menge zur Gewinnschwelle.',
    example: 'Fixkosten von 30 000 € im Monat, ein Preis von 150 € und variable Kosten von 90 € ergeben 60 € Deckungsbeitrag, also 500 Einheiten und 75 000 € Umsatz bis zur Gewinnschwelle.',
    faq: [
      { q: 'Was zählt als fix und was als variabel?', a: 'Fixkosten fallen unabhängig vom Absatz an: Miete, Gehälter, Abos, Abschreibung. Variable Kosten entstehen mit jeder verkauften Einheit: Material, Verpackung, Provision, Versand. Manche Position teilt sich auf beide auf und muss dann verteilt werden.' },
      { q: 'Warum stehen zwei Umsatzzahlen da?', a: 'Die eine gehört zur rechnerischen Menge mit Nachkommastellen, die andere zur aufgerundeten ganzen Zahl von Einheiten. Die zweite ist meist etwas größer, und beide dürfen nicht verwechselt werden.' },
      { q: 'Warum wird aufgerundet und nicht kaufmännisch gerundet?', a: 'Eine Einheit weniger deckt die Fixkosten nicht mehr. Geht die Rechnung genau auf, kommt keine zusätzliche Einheit hinzu.' },
      { q: 'Was bedeutet die Sicherheitsspanne?', a: 'Den Abstand zwischen geplantem Absatz und Gewinnschwelle. Als Prozentsatz sagt sie, wie weit der Plan verfehlt werden darf, bevor das Geschäft die Kosten nicht mehr deckt. Ein negativer Wert heißt Verlust.' },
      { q: 'Was, wenn die variablen Kosten über dem Preis liegen?', a: 'Dann ist der Deckungsbeitrag nicht positiv, und keine Menge erreicht die Gewinnschwelle — jede weitere Einheit vertieft den Verlust. Der Rechner erklärt das, statt eine Zahl auszugeben.' },
      { q: 'Sind Steuern und Kredite enthalten?', a: 'Nein. Gerechnet wird mit den eingetragenen Beträgen ohne Steuern, Kreditzinsen und Saisonalität. Das ist eine Führungsrechnung und keine Steuerrechnung.' },
    ],
  },
};
