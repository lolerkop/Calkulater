// Универсальный React-остров для рендера любого калькулятора по data-конфигу.
// Поля рендерятся динамически из CalculatorDef.fields, расчет выполняется
// функцией из реестра runners по идентификатору калькулятора.

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRightLeft,
  Calculator as CalculatorIcon,
  Check,
  Copy,
  Link2,
  Pencil,
  Printer,
  RotateCcw,
} from 'lucide-react';
import type { CalculatorDef, Field, CalcResult } from '../../lib/types';
import { runners } from '../../lib/runners';
import { localizedResultLabel, localizedResultText, type Locale } from '../../lib/clientI18n';

type Props = {
  calc: Pick<CalculatorDef, 'id' | 'name' | 'fields' | 'disclaimer'>;
  locale?: Locale;
};

type FormValues = Record<string, string | number | boolean>;
type FieldErrors = Record<string, string>;
type CalculatorCopy = {
  enterNumber: string;
  minimum: (value: number) => string;
  maximum: (value: number) => string;
  note: string;
  dateHelp: string;
  textareaHelp: string;
  rateHelp: string;
  amountHelp: string;
  integerHelp: string;
  unitHelp: string;
  reserveHelp: string;
  editInputs: string;
  printResult: string;
  resultCopied: string;
  copyResult: string;
  tableCaption: string;
  inputs: string;
  fieldCounter: (count: number) => string;
  calculate: string;
  reset: string;
  linkCopied: string;
  copyLink: string;
  checkValues: string;
  result: string;
  unavailableTitle: string;
  unavailableText: string;
  emptyText: string;
};

const calculatorCopyByLocale: Record<Locale, CalculatorCopy> = {
  ru: {
    enterNumber: 'Введите число.',
    minimum: (value) => `Минимум ${value}.`,
    maximum: (value) => `Максимум ${value}.`,
    note: 'Примечание',
    dateHelp: 'Можно выбрать дату вручную или ввести с клавиатуры.',
    textareaHelp: 'Указывайте значения в формате, показанном в подписи поля.',
    rateHelp: 'Укажите годовую или выбранную в списке ставку без лишних символов.',
    amountHelp: 'Введите исходное значение без пробелов и разделителей тысяч.',
    integerHelp: 'Используйте целое значение, если в поле не указано другое.',
    unitHelp: 'Проверьте единицы измерения: они указаны в названии или рядом с полем.',
    reserveHelp: 'Обычно для запаса используют 5-15%, в зависимости от задачи.',
    editInputs: 'Изменить исходные данные',
    printResult: 'Распечатать результат',
    resultCopied: 'Результат скопирован',
    copyResult: 'Скопировать результат',
    tableCaption: 'Таблица результата расчета',
    inputs: 'Исходные данные',
    fieldCounter: (count) => `${count} полей`,
    calculate: 'Рассчитать',
    reset: 'Сбросить',
    linkCopied: 'Ссылка скопирована',
    copyLink: 'Скопировать ссылку',
    checkValues: 'Проверьте значения',
    result: 'Результат',
    unavailableTitle: 'Расчёт временно недоступен',
    unavailableText: 'Исправьте значения в полях формы, и результат появится автоматически.',
    emptyText: 'Заполните поля — результат появится здесь автоматически.',
  },
  en: {
    enterNumber: 'Enter a number.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Note',
    dateHelp: 'Choose a date or type it manually.',
    textareaHelp: 'Use the format shown in the field description.',
    rateHelp: 'Enter the annual or selected rate without extra symbols.',
    amountHelp: 'Enter the base value without thousands separators.',
    integerHelp: 'Use a whole number unless the field says otherwise.',
    unitHelp: 'Check the measurement units shown in or near the field.',
    reserveHelp: 'A reserve of 5-15% is common, depending on the task.',
    editInputs: 'Edit inputs',
    printResult: 'Print result',
    resultCopied: 'Result copied',
    copyResult: 'Copy result',
    tableCaption: 'Calculation result table',
    inputs: 'Inputs',
    fieldCounter: (count) => `${count} fields`,
    calculate: 'Calculate',
    reset: 'Reset',
    linkCopied: 'Link copied',
    copyLink: 'Copy link',
    checkValues: 'Check values',
    result: 'Result',
    unavailableTitle: 'Calculation is temporarily unavailable',
    unavailableText: 'Fix the form values and the result will appear automatically.',
    emptyText: 'Fill in the fields and the result will appear here automatically.',
  },
  es: {
    enterNumber: 'Introduce un número.',
    minimum: (value) => `Mínimo ${value}.`,
    maximum: (value) => `Máximo ${value}.`,
    note: 'Nota',
    dateHelp: 'Elige una fecha o escríbela manualmente.',
    textareaHelp: 'Usa el formato indicado en la descripción del campo.',
    rateHelp: 'Introduce la tasa anual o seleccionada sin símbolos adicionales.',
    amountHelp: 'Introduce el valor base sin separadores de miles.',
    integerHelp: 'Usa un número entero salvo que el campo indique otra cosa.',
    unitHelp: 'Comprueba las unidades de medida que aparecen junto al campo.',
    reserveHelp: 'Una reserva del 5-15% suele ser habitual, según la tarea.',
    editInputs: 'Editar datos',
    printResult: 'Imprimir resultado',
    resultCopied: 'Resultado copiado',
    copyResult: 'Copiar resultado',
    tableCaption: 'Tabla del resultado del cálculo',
    inputs: 'Datos de entrada',
    fieldCounter: (count) => `${count} campos`,
    calculate: 'Calcular',
    reset: 'Restablecer',
    linkCopied: 'Enlace copiado',
    copyLink: 'Copiar enlace',
    checkValues: 'Comprueba los valores',
    result: 'Resultado',
    unavailableTitle: 'El cálculo no está disponible temporalmente',
    unavailableText: 'Corrige los valores del formulario y el resultado aparecerá automáticamente.',
    emptyText: 'Rellena los campos y el resultado aparecerá aquí automáticamente.',
  },
  de: {
    enterNumber: 'Bitte eine Zahl eingeben.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Hinweis',
    dateHelp: 'Wähle ein Datum aus oder gib es manuell ein.',
    textareaHelp: 'Nutze das Format aus der Feldbeschreibung.',
    rateHelp: 'Gib den jährlichen oder gewählten Satz ohne zusätzliche Zeichen ein.',
    amountHelp: 'Gib den Basiswert ohne Tausendertrennzeichen ein.',
    integerHelp: 'Nutze eine ganze Zahl, sofern das Feld nichts anderes angibt.',
    unitHelp: 'Prüfe die Maßeinheiten, die am Feld angezeigt werden.',
    reserveHelp: 'Eine Reserve von 5-15% ist je nach Aufgabe üblich.',
    editInputs: 'Eingaben bearbeiten',
    printResult: 'Ergebnis drucken',
    resultCopied: 'Ergebnis kopiert',
    copyResult: 'Ergebnis kopieren',
    tableCaption: 'Tabelle mit dem Berechnungsergebnis',
    inputs: 'Eingaben',
    fieldCounter: (count) => `${count} Felder`,
    calculate: 'Berechnen',
    reset: 'Zurücksetzen',
    linkCopied: 'Link kopiert',
    copyLink: 'Link kopieren',
    checkValues: 'Werte prüfen',
    result: 'Ergebnis',
    unavailableTitle: 'Berechnung vorübergehend nicht verfügbar',
    unavailableText: 'Korrigiere die Formularwerte, dann erscheint das Ergebnis automatisch.',
    emptyText: 'Fülle die Felder aus, dann erscheint das Ergebnis hier automatisch.',
  },
  fr: {
    enterNumber: 'Saisissez un nombre.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Note',
    dateHelp: 'Choisissez une date ou saisissez-la manuellement.',
    textareaHelp: 'Utilisez le format indiqué dans la description du champ.',
    rateHelp: 'Saisissez le taux annuel ou sélectionné sans symboles supplémentaires.',
    amountHelp: 'Saisissez la valeur de base sans séparateurs de milliers.',
    integerHelp: 'Utilisez un nombre entier sauf indication contraire du champ.',
    unitHelp: 'Vérifiez les unités de mesure affichées près du champ.',
    reserveHelp: 'Une réserve de 5-15% est courante selon la tâche.',
    editInputs: 'Modifier les données',
    printResult: 'Imprimer le résultat',
    resultCopied: 'Résultat copié',
    copyResult: 'Copier le résultat',
    tableCaption: 'Tableau du résultat du calcul',
    inputs: 'Données de départ',
    fieldCounter: (count) => `${count} champs`,
    calculate: 'Calculer',
    reset: 'Réinitialiser',
    linkCopied: 'Lien copié',
    copyLink: 'Copier le lien',
    checkValues: 'Vérifiez les valeurs',
    result: 'Résultat',
    unavailableTitle: 'Le calcul est temporairement indisponible',
    unavailableText: 'Corrigez les valeurs du formulaire et le résultat apparaîtra automatiquement.',
    emptyText: 'Remplissez les champs et le résultat apparaîtra ici automatiquement.',
  },
  pt: {
    enterNumber: 'Introduza um número.',
    minimum: (value) => `Mínimo ${value}.`,
    maximum: (value) => `Máximo ${value}.`,
    note: 'Nota',
    dateHelp: 'Escolha uma data ou introduza-a manualmente.',
    textareaHelp: 'Use o formato indicado na descrição do campo.',
    rateHelp: 'Introduza a taxa anual ou selecionada sem símbolos adicionais.',
    amountHelp: 'Introduza o valor base sem separadores de milhares.',
    integerHelp: 'Use um número inteiro salvo indicação em contrário.',
    unitHelp: 'Verifique as unidades de medida apresentadas junto ao campo.',
    reserveHelp: 'Uma reserva de 5-15% é comum, dependendo da tarefa.',
    editInputs: 'Editar dados',
    printResult: 'Imprimir resultado',
    resultCopied: 'Resultado copiado',
    copyResult: 'Copiar resultado',
    tableCaption: 'Tabela do resultado do cálculo',
    inputs: 'Dados de entrada',
    fieldCounter: (count) => `${count} campos`,
    calculate: 'Calcular',
    reset: 'Repor',
    linkCopied: 'Link copiado',
    copyLink: 'Copiar link',
    checkValues: 'Verifique os valores',
    result: 'Resultado',
    unavailableTitle: 'O cálculo está temporariamente indisponível',
    unavailableText: 'Corrija os valores do formulário e o resultado aparecerá automaticamente.',
    emptyText: 'Preencha os campos e o resultado aparecerá aqui automaticamente.',
  },
  it: {
    enterNumber: 'Inserisci un numero.',
    minimum: (value) => `Minimo ${value}.`,
    maximum: (value) => `Massimo ${value}.`,
    note: 'Nota',
    dateHelp: 'Scegli una data o inseriscila manualmente.',
    textareaHelp: 'Usa il formato indicato nella descrizione del campo.',
    rateHelp: 'Inserisci il tasso annuale o selezionato senza simboli aggiuntivi.',
    amountHelp: 'Inserisci il valore di base senza separatori delle migliaia.',
    integerHelp: 'Usa un numero intero salvo diversa indicazione del campo.',
    unitHelp: 'Controlla le unità di misura mostrate vicino al campo.',
    reserveHelp: 'Una riserva del 5-15% è comune, a seconda dell’attività.',
    editInputs: 'Modifica dati',
    printResult: 'Stampa risultato',
    resultCopied: 'Risultato copiato',
    copyResult: 'Copia risultato',
    tableCaption: 'Tabella del risultato del calcolo',
    inputs: 'Dati di partenza',
    fieldCounter: (count) => `${count} campi`,
    calculate: 'Calcola',
    reset: 'Reimposta',
    linkCopied: 'Link copiato',
    copyLink: 'Copia link',
    checkValues: 'Controlla i valori',
    result: 'Risultato',
    unavailableTitle: 'Il calcolo è temporaneamente non disponibile',
    unavailableText: 'Correggi i valori del modulo e il risultato apparirà automaticamente.',
    emptyText: 'Compila i campi e il risultato apparirà qui automaticamente.',
  },
  pl: {
    enterNumber: 'Wpisz liczbe.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maksimum ${value}.`,
    note: 'Uwaga',
    dateHelp: 'Wybierz date albo wpisz ja recznie.',
    textareaHelp: 'Uzyj formatu pokazanego w opisie pola.',
    rateHelp: 'Wpisz roczna lub wybrana stawke bez dodatkowych symboli.',
    amountHelp: 'Wpisz wartosc bazowa bez separatorow tysiecy.',
    integerHelp: 'Uzyj liczby calkowitej, jesli pole nie wskazuje inaczej.',
    unitHelp: 'Sprawdz jednostki miary pokazane przy polu.',
    reserveHelp: 'Zapas 5-15% jest typowy, zalezy od zadania.',
    editInputs: 'Edytuj dane',
    printResult: 'Drukuj wynik',
    resultCopied: 'Wynik skopiowany',
    copyResult: 'Kopiuj wynik',
    tableCaption: 'Tabela wyniku obliczenia',
    inputs: 'Dane wejsciowe',
    fieldCounter: (count) => `${count} pol`,
    calculate: 'Oblicz',
    reset: 'Resetuj',
    linkCopied: 'Link skopiowany',
    copyLink: 'Kopiuj link',
    checkValues: 'Sprawdz wartosci',
    result: 'Wynik',
    unavailableTitle: 'Obliczenie jest tymczasowo niedostepne',
    unavailableText: 'Popraw wartosci w formularzu, a wynik pojawi sie automatycznie.',
    emptyText: 'Wypelnij pola, a wynik pojawi sie tutaj automatycznie.',
  },
  nl: {
    enterNumber: 'Voer een getal in.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Opmerking',
    dateHelp: 'Kies een datum of typ deze handmatig.',
    textareaHelp: 'Gebruik het formaat uit de veldbeschrijving.',
    rateHelp: 'Voer het jaarlijkse of gekozen tarief in zonder extra symbolen.',
    amountHelp: 'Voer de basiswaarde in zonder scheidingstekens voor duizenden.',
    integerHelp: 'Gebruik een geheel getal tenzij het veld iets anders aangeeft.',
    unitHelp: 'Controleer de meeteenheden bij het veld.',
    reserveHelp: 'Een reserve van 5-15% is gebruikelijk, afhankelijk van de taak.',
    editInputs: 'Invoer aanpassen',
    printResult: 'Resultaat printen',
    resultCopied: 'Resultaat gekopieerd',
    copyResult: 'Resultaat kopieren',
    tableCaption: 'Tabel met berekeningsresultaat',
    inputs: 'Invoer',
    fieldCounter: (count) => `${count} velden`,
    calculate: 'Berekenen',
    reset: 'Resetten',
    linkCopied: 'Link gekopieerd',
    copyLink: 'Link kopieren',
    checkValues: 'Controleer waarden',
    result: 'Resultaat',
    unavailableTitle: 'Berekening is tijdelijk niet beschikbaar',
    unavailableText: 'Corrigeer de formulierwaarden en het resultaat verschijnt automatisch.',
    emptyText: 'Vul de velden in en het resultaat verschijnt hier automatisch.',
  },
  ro: {
    enterNumber: 'Introdu un numar.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Nota',
    dateHelp: 'Alege o data sau introdu-o manual.',
    textareaHelp: 'Foloseste formatul indicat in descrierea campului.',
    rateHelp: 'Introdu rata anuala sau selectata fara simboluri suplimentare.',
    amountHelp: 'Introdu valoarea de baza fara separatoare de mii.',
    integerHelp: 'Foloseste un numar intreg daca nu este indicat altfel.',
    unitHelp: 'Verifica unitatile de masura afisate langa camp.',
    reserveHelp: 'O rezerva de 5-15% este obisnuita, in functie de situatie.',
    editInputs: 'Editeaza datele',
    printResult: 'Printeaza rezultatul',
    resultCopied: 'Rezultat copiat',
    copyResult: 'Copiaza rezultatul',
    tableCaption: 'Tabel cu rezultatul calculului',
    inputs: 'Date introduse',
    fieldCounter: (count) => `${count} campuri`,
    calculate: 'Calculeaza',
    reset: 'Reseteaza',
    linkCopied: 'Link copiat',
    copyLink: 'Copiaza linkul',
    checkValues: 'Verifica valorile',
    result: 'Rezultat',
    unavailableTitle: 'Calculul este temporar indisponibil',
    unavailableText: 'Corecteaza valorile formularului si rezultatul va aparea automat.',
    emptyText: 'Completeaza campurile si rezultatul va aparea aici automat.',
  },
  id: {
    enterNumber: 'Masukkan angka.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maksimum ${value}.`,
    note: 'Catatan',
    dateHelp: 'Pilih tanggal atau masukkan secara manual.',
    textareaHelp: 'Gunakan format yang ditunjukkan pada deskripsi kolom.',
    rateHelp: 'Masukkan suku bunga tahunan atau pilihan tanpa simbol tambahan.',
    amountHelp: 'Masukkan nilai dasar tanpa pemisah ribuan.',
    integerHelp: 'Gunakan bilangan bulat kecuali kolom menyatakan lain.',
    unitHelp: 'Periksa satuan ukuran yang ditampilkan di dekat kolom.',
    reserveHelp: 'Cadangan 5-15% umum digunakan, tergantung kebutuhan.',
    editInputs: 'Ubah input',
    printResult: 'Cetak hasil',
    resultCopied: 'Hasil disalin',
    copyResult: 'Salin hasil',
    tableCaption: 'Tabel hasil perhitungan',
    inputs: 'Input',
    fieldCounter: (count) => `${count} kolom`,
    calculate: 'Hitung',
    reset: 'Reset',
    linkCopied: 'Link disalin',
    copyLink: 'Salin link',
    checkValues: 'Periksa nilai',
    result: 'Hasil',
    unavailableTitle: 'Perhitungan sementara tidak tersedia',
    unavailableText: 'Perbaiki nilai formulir dan hasil akan muncul otomatis.',
    emptyText: 'Isi kolom dan hasil akan muncul otomatis di sini.',
  },
  tr: {
    enterNumber: 'Bir sayı girin.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maksimum ${value}.`,
    note: 'Not',
    dateHelp: 'Bir tarih seçin veya manuel girin.',
    textareaHelp: 'Alan açıklamasında gösterilen formatı kullanın.',
    rateHelp: 'Yıllık veya seçili oranı ek sembol olmadan girin.',
    amountHelp: 'Temel değeri binlik ayırıcı olmadan girin.',
    integerHelp: 'Alan aksini belirtmiyorsa tam sayı kullanın.',
    unitHelp: 'Alanın yanında gösterilen ölçü birimlerini kontrol edin.',
    reserveHelp: 'İhtiyaca göre %5-15 pay bırakmak yaygındır.',
    editInputs: 'Girdileri düzenle',
    printResult: 'Sonucu yazdır',
    resultCopied: 'Sonuç kopyalandı',
    copyResult: 'Sonucu kopyala',
    tableCaption: 'Hesaplama sonucu tablosu',
    inputs: 'Girdiler',
    fieldCounter: (count) => `${count} alan`,
    calculate: 'Hesapla',
    reset: 'Sıfırla',
    linkCopied: 'Bağlantı kopyalandı',
    copyLink: 'Bağlantıyı kopyala',
    checkValues: 'Değerleri kontrol edin',
    result: 'Sonuç',
    unavailableTitle: 'Hesaplama geçici olarak kullanılamıyor',
    unavailableText: 'Form değerlerini düzeltin, sonuç otomatik olarak görünecektir.',
    emptyText: 'Alanları doldurun, sonuç burada otomatik olarak görünecektir.',
  },
  vi: {
    enterNumber: 'Nhập một số.',
    minimum: (value) => `Tối thiểu ${value}.`,
    maximum: (value) => `Tối đa ${value}.`,
    note: 'Ghi chú',
    dateHelp: 'Chọn ngày hoặc nhập thủ công.',
    textareaHelp: 'Dùng định dạng được mô tả trong trường.',
    rateHelp: 'Nhập lãi suất năm hoặc giá trị đã chọn không kèm ký hiệu thêm.',
    amountHelp: 'Nhập giá trị gốc không dùng dấu phân cách hàng nghìn.',
    integerHelp: 'Dùng số nguyên nếu trường không yêu cầu khác.',
    unitHelp: 'Kiểm tra đơn vị đo hiển thị cạnh trường.',
    reserveHelp: 'Dự phòng 5-15% thường được dùng, tùy tình huống.',
    editInputs: 'Sửa dữ liệu',
    printResult: 'In kết quả',
    resultCopied: 'Đã sao chép kết quả',
    copyResult: 'Sao chép kết quả',
    tableCaption: 'Bảng kết quả tính toán',
    inputs: 'Dữ liệu nhập',
    fieldCounter: (count) => `${count} trường`,
    calculate: 'Tính',
    reset: 'Đặt lại',
    linkCopied: 'Đã sao chép liên kết',
    copyLink: 'Sao chép liên kết',
    checkValues: 'Kiểm tra giá trị',
    result: 'Kết quả',
    unavailableTitle: 'Phép tính tạm thời không khả dụng',
    unavailableText: 'Sửa giá trị trong biểu mẫu và kết quả sẽ tự động xuất hiện.',
    emptyText: 'Điền các trường và kết quả sẽ tự động xuất hiện ở đây.',
  },
  cs: {
    enterNumber: 'Zadejte číslo.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Poznámka',
    dateHelp: 'Vyberte datum nebo jej zadejte ručně.',
    textareaHelp: 'Použijte formát uvedený v popisu pole.',
    rateHelp: 'Zadejte roční nebo vybranou sazbu bez dalších symbolů.',
    amountHelp: 'Zadejte základní hodnotu bez oddělovačů tisíců.',
    integerHelp: 'Použijte celé číslo, pokud pole neuvádí jinak.',
    unitHelp: 'Zkontrolujte jednotky zobrazené u pole.',
    reserveHelp: 'Rezerva 5-15% se používá často, podle situace.',
    editInputs: 'Upravit vstupy',
    printResult: 'Vytisknout výsledek',
    resultCopied: 'Výsledek zkopírován',
    copyResult: 'Kopírovat výsledek',
    tableCaption: 'Tabulka výsledku výpočtu',
    inputs: 'Vstupy',
    fieldCounter: (count) => `${count} polí`,
    calculate: 'Spočítat',
    reset: 'Resetovat',
    linkCopied: 'Odkaz zkopírován',
    copyLink: 'Kopírovat odkaz',
    checkValues: 'Zkontrolujte hodnoty',
    result: 'Výsledek',
    unavailableTitle: 'Výpočet je dočasně nedostupný',
    unavailableText: 'Opravte hodnoty ve formuláři a výsledek se zobrazí automaticky.',
    emptyText: 'Vyplňte pole a výsledek se zde zobrazí automaticky.',
  },
  uk: {
    enterNumber: 'Введіть число.',
    minimum: (value) => `Мінімум ${value}.`,
    maximum: (value) => `Максимум ${value}.`,
    note: 'Примітка',
    dateHelp: 'Оберіть дату або введіть її вручну.',
    textareaHelp: 'Використовуйте формат, показаний в описі поля.',
    rateHelp: 'Введіть річну або вибрану ставку без зайвих символів.',
    amountHelp: 'Введіть базове значення без розділювачів тисяч.',
    integerHelp: 'Використовуйте ціле число, якщо поле не вимагає іншого.',
    unitHelp: 'Перевірте одиниці вимірювання, показані біля поля.',
    reserveHelp: 'Запас 5-15% часто використовують залежно від ситуації.',
    editInputs: 'Змінити дані',
    printResult: 'Надрукувати результат',
    resultCopied: 'Результат скопійовано',
    copyResult: 'Скопіювати результат',
    tableCaption: 'Таблиця результату розрахунку',
    inputs: 'Вхідні дані',
    fieldCounter: (count) => `${count} полів`,
    calculate: 'Розрахувати',
    reset: 'Скинути',
    linkCopied: 'Посилання скопійовано',
    copyLink: 'Скопіювати посилання',
    checkValues: 'Перевірте значення',
    result: 'Результат',
    unavailableTitle: 'Розрахунок тимчасово недоступний',
    unavailableText: 'Виправте значення у формі, і результат зʼявиться автоматично.',
    emptyText: 'Заповніть поля, і результат автоматично зʼявиться тут.',
  },
  sk: {
    enterNumber: 'Zadajte číslo.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Poznámka',
    dateHelp: 'Vyberte dátum alebo ho zadajte ručne.',
    textareaHelp: 'Použite formát uvedený v popise poľa.',
    rateHelp: 'Zadajte ročnú alebo vybranú sadzbu bez ďalších symbolov.',
    amountHelp: 'Zadajte základnú hodnotu bez oddeľovačov tisícov.',
    integerHelp: 'Použite celé číslo, ak pole neuvádza inak.',
    unitHelp: 'Skontrolujte jednotky zobrazené pri poli.',
    reserveHelp: 'Rezerva 5-15% sa používa často podľa situácie.',
    editInputs: 'Upraviť vstupy',
    printResult: 'Vytlačiť výsledok',
    resultCopied: 'Výsledok skopírovaný',
    copyResult: 'Kopírovať výsledok',
    tableCaption: 'Tabuľka výsledku výpočtu',
    inputs: 'Vstupy',
    fieldCounter: (count) => `${count} polí`,
    calculate: 'Vypočítať',
    reset: 'Resetovať',
    linkCopied: 'Odkaz skopírovaný',
    copyLink: 'Kopírovať odkaz',
    checkValues: 'Skontrolujte hodnoty',
    result: 'Výsledok',
    unavailableTitle: 'Výpočet je dočasne nedostupný',
    unavailableText: 'Opravte hodnoty vo formulári a výsledok sa zobrazí automaticky.',
    emptyText: 'Vyplňte polia a výsledok sa tu zobrazí automaticky.',
  },
  hu: {
    enterNumber: 'Adjon meg egy számot.',
    minimum: (value) => `Minimum ${value}.`,
    maximum: (value) => `Maximum ${value}.`,
    note: 'Megjegyzés',
    dateHelp: 'Válasszon dátumot, vagy írja be kézzel.',
    textareaHelp: 'Használja a mező leírásában megadott formátumot.',
    rateHelp: 'Adja meg az éves vagy kiválasztott kamatlábat extra jelek nélkül.',
    amountHelp: 'Adja meg az alapértéket ezres elválasztók nélkül.',
    integerHelp: 'Használjon egész számot, hacsak a mező mást nem jelez.',
    unitHelp: 'Ellenőrizze a mező mellett látható mértékegységeket.',
    reserveHelp: 'Feladattól függően gyakori az 5-15% tartalék.',
    editInputs: 'Bemenetek módosítása',
    printResult: 'Eredmény nyomtatása',
    resultCopied: 'Eredmény másolva',
    copyResult: 'Eredmény másolása',
    tableCaption: 'Számítási eredmény táblázata',
    inputs: 'Bemenetek',
    fieldCounter: (count) => `${count} mező`,
    calculate: 'Számítás',
    reset: 'Visszaállítás',
    linkCopied: 'Link másolva',
    copyLink: 'Link másolása',
    checkValues: 'Ellenőrizze az értékeket',
    result: 'Eredmény',
    unavailableTitle: 'A számítás átmenetileg nem érhető el',
    unavailableText: 'Javítsa a mezőértékeket, és az eredmény automatikusan megjelenik.',
    emptyText: 'Töltse ki a mezőket, és az eredmény automatikusan itt jelenik meg.',
  },
};

function calculatorCopy(locale: Locale): CalculatorCopy {
  return calculatorCopyByLocale[locale];
}

function swapCopy(locale: Locale): string {
  if (locale === 'uk') return 'Поміняти валюти місцями';
  if (locale === 'ru') return 'Поменять валюты местами';
  return 'Swap currencies';
}

// Возвращает дефолтное значение поля (используется и для инициализации формы,
// и для сравнения «изменилось ли значение» при формировании URL-параметров).
function defaultValueForField(f: Field): string | number | boolean {
  if (f.defaultValue !== undefined) return f.defaultValue;
  if (f.type === 'date' && typeof window !== 'undefined') {
    const today = new Date();
    if (f.name === 'startDate' || f.name === 'calcDate' || f.name === 'operationDate') {
      return today.toISOString().slice(0, 10);
    }
    if (f.name === 'endDate') {
      today.setDate(today.getDate() + 30);
      return today.toISOString().slice(0, 10);
    }
  }
  if (f.type === 'checkbox' || f.type === 'toggle') {
    return f.options?.[0]?.value ?? false;
  }
  if (f.type === 'number') return 0;
  return '';
}

function buildInitialValues(fields: Field[]): FormValues {
  const init: FormValues = {};
  for (const f of fields) {
    init[f.name] = defaultValueForField(f);
  }
  return init;
}

// Парсит значение из URL-параметра в нужный тип для поля.
function parseUrlValue(field: Field, raw: string): string | number | boolean | undefined {
  if (field.type === 'number') {
    const n = Number(raw);
    return Number.isFinite(n) ? n : undefined;
  }
  if (field.type === 'checkbox') {
    if (raw === '1' || raw === 'true') return true;
    if (raw === '0' || raw === 'false') return false;
    return undefined;
  }
  if (field.type === 'select' || field.type === 'toggle') {
    const allowed = field.options?.map((o) => String(o.value));
    if (allowed && !allowed.includes(raw)) return undefined;
    return raw;
  }
  // date, textarea и прочие строковые
  return raw;
}

// Сериализует значение поля в строку для URL.
function serializeValue(v: string | number | boolean): string {
  if (typeof v === 'boolean') return v ? '1' : '0';
  return String(v);
}

// Считывает значения из ?query= на текущем URL и накладывает поверх defaults.
function readValuesFromUrl(fields: Field[], base: FormValues): FormValues {
  if (typeof window === 'undefined') return base;
  const params = new URLSearchParams(window.location.search);
  if ([...params.keys()].length === 0) return base;

  const next: FormValues = { ...base };
  for (const f of fields) {
    const raw = params.get(f.name);
    if (raw === null) continue;
    const parsed = parseUrlValue(f, raw);
    if (parsed !== undefined) next[f.name] = parsed;
  }
  return next;
}

// Формирует query-string только из значений, отличающихся от дефолта.
function buildQueryString(fields: Field[], values: FormValues): string {
  const params = new URLSearchParams();
  for (const f of fields) {
    if (!isVisible(f, values)) continue;
    const v = values[f.name];
    const def = defaultValueForField(f);
    // Пустые строки и undefined не пишем
    if (v === '' || v === undefined || v === null) continue;
    if (v === def) continue;
    params.set(f.name, serializeValue(v));
  }
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

function isVisible(field: Field, values: FormValues): boolean {
  if (!field.showIf) return true;
  return values[field.showIf.field] === field.showIf.equals;
}

function contextualField(field: Field, calculatorId: string, values: FormValues, locale: Locale): Field {
  if (calculatorId !== 'percent-calculator' || (field.name !== 'a' && field.name !== 'b')) return field;
  const mode = String(values.mode ?? 'of');
  const labels = {
    ru: {
      percentage: 'Процент', number: 'Число', part: 'Часть', whole: 'Целое', start: 'Начальное значение', end: 'Конечное значение',
    },
    en: {
      percentage: 'Percentage', number: 'Number', part: 'Part', whole: 'Whole', start: 'Starting value', end: 'Final value',
    },
    uk: {
      percentage: 'Відсоток', number: 'Число', part: 'Частина', whole: 'Ціле', start: 'Початкове значення', end: 'Кінцеве значення',
    },
  } as const;
  const copy = labels[locale === 'ru' || locale === 'uk' ? locale : 'en'];
  if (mode === 'what') return { ...field, label: field.name === 'a' ? copy.part : copy.whole };
  if (mode === 'change') return { ...field, label: field.name === 'a' ? copy.start : copy.end };
  return { ...field, label: field.name === 'a' ? copy.percentage : copy.number };
}

function validateValues(fields: Field[], values: FormValues, locale: Locale): FieldErrors {
  const errors: FieldErrors = {};
  const copy = calculatorCopy(locale);
  for (const field of fields) {
    if (!isVisible(field, values) || field.type !== 'number') continue;
    const raw = values[field.name];
    if (raw === '' || raw === undefined || raw === null || !Number.isFinite(Number(raw))) {
      errors[field.name] = copy.enterNumber;
      continue;
    }
    const value = Number(raw);
    if (field.min !== undefined && value < field.min) {
      errors[field.name] = copy.minimum(field.min);
    }
    if (field.max !== undefined && value > field.max) {
      errors[field.name] = copy.maximum(field.max);
    }
  }
  return errors;
}

function translateLabel(label: string, locale: Locale): string {
  return localizedResultLabel(label, locale);
}

function localizeResult(result: CalcResult, locale: Locale): CalcResult {
  if (locale === 'ru') return result;
  return {
    ...result,
    primary: {
      label: translateLabel(result.primary.label, locale),
      value: localizedResultText(result.primary.value, locale),
    },
    secondary: result.secondary.map((row) => ({
      ...row,
      label: translateLabel(row.label, locale),
      value: localizedResultText(row.value, locale),
    })),
    table: result.table
      ? {
          ...result.table,
          title: result.table.title ? translateLabel(result.table.title, locale) : result.table.title,
          columns: result.table.columns.map((column) => translateLabel(column, locale)),
          rows: result.table.rows.map((row) => row.map((cell) => localizedResultText(cell, locale))),
          note: result.table.note ? localizedResultText(result.table.note, locale) : result.table.note,
        }
      : undefined,
    note: result.note ? localizedResultText(result.note, locale) : result.note,
  };
}

function resultToText(calc: CalculatorDef, result: CalcResult, locale: Locale): string {
  const copy = calculatorCopy(locale);
  const secondary = result.secondary
    .map((row) => `${row.label}: ${row.value}`)
    .join('\n');
  return [
    calc.name,
    `${result.primary.label}: ${result.primary.value}`,
    secondary,
    result.note ? `${copy.note}: ${result.note}` : '',
  ].filter(Boolean).join('\n');
}

function fallbackCopy(text: string): boolean {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function defaultHelpForField(field: Field, locale: Locale): string {
  if (field.help) return field.help;
  const copy = calculatorCopy(locale);
  const name = field.name.toLowerCase();
  const label = field.label.toLowerCase();

  if (field.type === 'date') return copy.dateHelp;
  if (field.type === 'textarea') return copy.textareaHelp;
  if (name.includes('rate') || label.includes('ставк')) return copy.rateHelp;
  if (name.includes('amount') || name.includes('price') || label.includes('сумм') || label.includes('цен')) return copy.amountHelp;
  if (name.includes('month') || name.includes('year') || label.includes('срок')) return copy.integerHelp;
  if (name.includes('height') || name.includes('weight') || name.includes('length') || name.includes('width') || label.includes('размер')) return copy.unitHelp;
  if (name.includes('reserve') || label.includes('запас')) return copy.reserveHelp;
  return '';
}

function ResultBlock({
  result,
  onCopy,
  onEdit,
  onPrint,
  copied,
  locale,
}: {
  result: CalcResult;
  onCopy: () => void;
  onEdit: () => void;
  onPrint: () => void;
  copied: boolean;
  locale: Locale;
}) {
  const copy = calculatorCopy(locale);

  return (
    <div
      className="overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 shadow-[0_18px_48px_rgba(61,48,133,0.11)]"
      role="status"
      aria-live="polite"
      aria-atomic="false"
      data-testid="calc-result"
    >
      <div className="border-b border-accent-100 bg-gradient-to-br from-white via-white to-accent-50 p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-ink-500">
              {result.primary.label}
            </div>
            <div
              className="mt-2 font-mono text-3xl font-semibold tracking-[-0.04em] text-accent [overflow-wrap:anywhere] sm:text-4xl"
              data-testid="calc-result-primary"
            >
              {result.primary.value}
            </div>
          </div>
          <div className="flex shrink-0 gap-2 self-end print-hide sm:self-auto">
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 shadow-sm transition-colors hover:border-accent-100 hover:text-accent"
              aria-label={copy.editInputs}
              title={copy.editInputs}
              data-testid="calc-edit-inputs-btn"
            >
              <Pencil size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 shadow-sm transition-colors hover:border-accent-100 hover:text-accent"
              aria-label={copy.printResult}
              title={copy.printResult}
              data-testid="calc-print-btn"
            >
              <Printer size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onCopy}
              className={[
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm transition-colors',
                copied
                  ? 'border-emerald-700 bg-emerald-50 text-emerald-700'
                  : 'border-ink-200 text-ink-700 hover:border-accent-100 hover:text-accent',
              ].join(' ')}
              aria-label={copied ? copy.resultCopied : copy.copyResult}
              title={copied ? copy.resultCopied : copy.copyResult}
              data-testid="calc-copy-result-btn"
            >
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <dl className="divide-y divide-ink-200">
        {result.secondary.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 items-baseline gap-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)] sm:gap-4 sm:px-6"
            data-testid={`calc-result-row-${i}`}
          >
            <dt className="min-w-0 text-sm text-ink-500 text-fit">{row.label}</dt>
            <dd
              className={[
                'min-w-0 font-mono text-sm font-medium tabular-nums text-left [overflow-wrap:anywhere] sm:text-right',
                row.accent === 'green' ? 'text-emerald-700' : '',
                row.accent === 'red' ? 'text-accent' : '',
                !row.accent || row.accent === 'neutral' ? 'text-ink-900' : '',
              ].join(' ')}
            >
              {row.href ? (
                <a
                  href={row.href}
                  className="underline underline-offset-4 hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  {row.value}
                </a>
              ) : row.value}
            </dd>
          </div>
        ))}
      </dl>

      {result.table && (
        <div className="border-t border-ink-200 overflow-x-auto">
          {result.table.title && (
            <div className="px-4 pt-4 text-xs uppercase tracking-wider text-ink-500 sm:px-6">
              {result.table.title}
            </div>
          )}
          <table className="min-w-max w-full text-sm">
            <caption className="sr-only">
              {result.table.title ?? copy.tableCaption}
            </caption>
            <thead>
              <tr className="text-ink-500">
                {result.table.columns.map((c, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left font-medium border-b border-ink-200 sm:px-6"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.table.rows.map((row, i) => (
                <tr key={i} className="border-b border-ink-100 last:border-b-0">
                  {row.map((cell, j) => (
                    <td key={j} className="whitespace-nowrap px-4 py-2 font-mono tabular-nums sm:px-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result.note && (
        <p className="px-4 py-3 text-xs text-ink-500 border-t border-ink-200 sm:px-6">
          {result.note}
        </p>
      )}
    </div>
  );
}

function FieldRenderer({
  field,
  value,
  error,
  onChange,
  locale,
}: {
  field: Field;
  value: string | number | boolean;
  error?: string;
  onChange: (next: string | number | boolean) => void;
  locale: Locale;
}) {
  const fieldId = `f-${field.name}`;
  const helpText = defaultHelpForField(field, locale);
  const helpId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;
  const describedBy = [
    helpText ? helpId : '',
    error ? errorId : '',
  ].filter(Boolean).join(' ') || undefined;
  const labelEl = (
      <label htmlFor={fieldId} className="field-label text-fit" data-testid={`field-label-${field.name}`}>
      {field.label}
      {field.unit ? <span className="ml-1 text-ink-400 normal-case">({field.unit})</span> : null}
    </label>
  );

  const helpEl = helpText ? (
    <p id={helpId} className="mt-1 text-xs text-ink-500 text-fit">{helpText}</p>
  ) : null;
  const errorEl = error ? (
    <p id={errorId} className="mt-1 text-xs font-medium text-accent text-fit" data-testid={`field-error-${field.name}`}>
      {error}
    </p>
  ) : null;

  switch (field.type) {
    case 'number':
      return (
        <div>
          {labelEl}
          <input
            id={fieldId}
            data-testid={`field-${field.name}`}
            type="number"
            inputMode="decimal"
            className="field-input font-mono"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            value={value === '' || value === undefined ? '' : String(value)}
            min={field.min}
            max={field.max}
            step={field.step ?? 'any'}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          />
          {helpEl}
          {errorEl}
        </div>
      );
    case 'select':
      return (
        <div>
          {labelEl}
          <select
            id={fieldId}
            data-testid={`field-${field.name}`}
            className="field-select"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          >
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {helpEl}
          {errorEl}
        </div>
      );
    case 'toggle':
      return (
        <fieldset
          className="m-0 min-w-0 border-0 p-0"
          aria-describedby={describedBy}
          data-testid={`field-${field.name}-fieldset`}
        >
          <legend
            id={`${fieldId}-legend`}
            className="field-label text-fit"
            data-testid={`field-label-${field.name}`}
          >
            {field.label}
            {field.unit ? <span className="ml-1 text-ink-400 normal-case">({field.unit})</span> : null}
          </legend>
          <div
            id={fieldId}
            className="flex flex-col sm:flex-row"
            role="group"
            aria-labelledby={`${fieldId}-legend`}
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            data-testid={`field-${field.name}`}
          >
            {field.options?.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className="seg-btn"
                aria-pressed={String(value) === opt.value}
                data-testid={`field-${field.name}-opt-${opt.value}`}
                onClick={() => onChange(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {helpEl}
          {errorEl}
        </fieldset>
      );
    case 'date':
      return (
        <div>
          {labelEl}
          <input
            id={fieldId}
            data-testid={`field-${field.name}`}
            type="date"
            className="field-input font-mono"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
          {errorEl}
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <div className="flex items-start gap-2">
          <input
            id={fieldId}
            data-testid={`field-${field.name}`}
            type="checkbox"
            className="mt-1 h-4 w-4 accent-accent"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
          />
          <label htmlFor={fieldId} className="min-w-0 text-sm text-ink-900 leading-tight text-fit">
            {field.label}
            {helpText && <span id={helpId} className="block mt-0.5 text-xs text-ink-500 text-fit">{helpText}</span>}
          </label>
          </div>
          {errorEl}
        </div>
      );
    case 'textarea':
      return (
        <div>
          {labelEl}
          <textarea
            id={fieldId}
            data-testid={`field-${field.name}`}
            className="field-textarea"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            rows={3}
            placeholder={field.placeholder}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
          {errorEl}
        </div>
      );
    default:
      return null;
  }
}

export default function CalculatorIsland({ calc, locale = 'ru' }: Props) {
  const copy = calculatorCopy(locale);
  const runner = useMemo(() => runners[calc.id], [calc.id]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const resultRegionRef = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<FormValues>(() => buildInitialValues(calc.fields));
  const [result, setResult] = useState<CalcResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);

  const validationErrors = useMemo(
    () => validateValues(calc.fields, values, locale),
    [calc.fields, values, locale],
  );
  const validationErrorEntries = useMemo(
    () => Object.entries(validationErrors),
    [validationErrors],
  );
  const hasValidationErrors = validationErrorEntries.length > 0;

  // При монтировании пробуем восстановить значения из URL-параметров
  // (нужно делать в useEffect, т.к. island гидрируется на клиенте и
  // первоначальный SSR-рендер не должен отличаться).
  useEffect(() => {
    const defaults = buildInitialValues(calc.fields);
    const restored = readValuesFromUrl(calc.fields, defaults);
    setValues(restored);
    // запускаем один раз для текущего калькулятора
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calc.id, calc.fields, locale]);

  // Автоматический пересчёт при изменении значений (с лёгкой задержкой)
  useEffect(() => {
    if (!runner) return;
    const id = setTimeout(() => {
      try {
        const errors = validateValues(calc.fields, values, locale);
        if (Object.keys(errors).length > 0) {
          setResult(null);
          return;
        }
        setResult(runner(values));
      } catch {
        setResult(null);
      }
    }, 80);
    return () => clearTimeout(id);
  }, [values, runner, calc.fields, locale]);

  const focusFirstInvalidField = () => {
    if (typeof window === 'undefined') return;
    const firstInvalidField = validationErrorEntries[0]?.[0];
    if (!firstInvalidField) return;

    window.requestAnimationFrame(() => {
      document.getElementById(`f-${firstInvalidField}`)?.focus();
    });
  };

  const focusResultPanel = () => {
    if (typeof window === 'undefined') return;

    window.requestAnimationFrame(() => {
      const resultRegion = resultRegionRef.current;
      if (!resultRegion) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      resultRegion.scrollIntoView({
        block: 'start',
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      resultRegion.focus({ preventScroll: true });
    });
  };

  const focusFormPanel = () => {
    if (typeof window === 'undefined') return;

    window.requestAnimationFrame(() => {
      const form = formRef.current;
      if (!form) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      form.scrollIntoView({
        block: 'start',
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      const firstFocusable = form.querySelector<HTMLElement>(
        'input:not([type="hidden"]), select, textarea, button',
      );
      firstFocusable?.focus({ preventScroll: true });
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasValidationErrors) {
      focusFirstInvalidField();
      return;
    }
    if (runner) {
      setResult(runner(values));
      focusResultPanel();
    }
  };

  const reset = () => {
    setValues(buildInitialValues(calc.fields));
    setCopied(false);
    setCopiedResult(false);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname + window.location.hash);
    }
  };

  const copyShareLink = async () => {
    if (typeof window === 'undefined') return;
    const qs = buildQueryString(calc.fields, values);
    const url = window.location.origin + window.location.pathname + qs + '#calculator';

    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        ok = true;
      } else {
        ok = fallbackCopy(url);
      }
    } catch {
      ok = fallbackCopy(url);
    }

    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  const copyResult = async () => {
    if (typeof window === 'undefined' || !result) return;
    const text = resultToText(calc, localizeResult(result, locale), locale);
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      } else {
        ok = fallbackCopy(text);
      }
    } catch {
      ok = fallbackCopy(text);
    }

    if (ok) {
      setCopiedResult(true);
      window.setTimeout(() => setCopiedResult(false), 1800);
    }
  };

  const printResult = () => {
    if (typeof window === 'undefined') return;
    window.print();
  };

  const visibleFields = calc.fields.filter((f) => isVisible(f, values));
  const displayResult = result ? localizeResult(result, locale) : null;

  return (
    <div className="grid min-w-0 gap-5 sm:gap-8 lg:grid-cols-5" data-testid={`calculator-island-${calc.id}`}>
      <form
        ref={formRef}
        className="min-w-0 rounded-3xl border border-ink-200 bg-white p-4 shadow-[0_18px_48px_rgba(61,48,133,0.09)] sm:p-8 lg:col-span-3"
        onSubmit={handleSubmit}
        data-testid="calc-form"
      >
        <div
          className="mb-5 flex items-start justify-between gap-3 border-b border-ink-100 pb-4 sm:mb-6 sm:gap-4 sm:pb-5"
          data-testid="calc-form-header"
        >
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-ink-500">{copy.inputs}</div>
            <h2 className="mt-1 text-xl font-bold tracking-[-0.03em] text-ink-900 text-fit">{calc.name}</h2>
          </div>
          <div className="shrink-0 rounded-full bg-accent-50 px-3 py-1.5 text-right font-mono text-xs text-accent">
            {copy.fieldCounter(visibleFields.length)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {visibleFields.map((f) => (
            <div key={f.name} className={f.type === 'textarea' ? 'sm:col-span-2' : ''}>
              <FieldRenderer
                field={contextualField(f, calc.id, values, locale)}
                value={values[f.name] as string | number | boolean}
                error={validationErrors[f.name]}
                locale={locale}
                onChange={(next) =>
                  setValues((prev) => ({ ...prev, [f.name]: next }))
                }
              />
            </div>
          ))}
        </div>

        {calc.fields.some((field) => field.name === 'from') && calc.fields.some((field) => field.name === 'to') && (
          <button
            type="button"
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-ink-200 bg-ink-50 px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-100 hover:bg-accent-50 hover:text-accent sm:w-auto"
            onClick={() => setValues((previous) => ({
              ...previous,
              from: previous.to,
              to: previous.from,
            }))}
            data-testid="calc-swap-currencies-btn"
          >
            <ArrowRightLeft size={16} aria-hidden="true" />
            {swapCopy(locale)}
          </button>
        )}

        <div className="-mx-4 mt-6 grid grid-cols-2 items-stretch gap-2.5 border-t border-ink-100 bg-white px-4 py-3 sm:mx-0 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0">
          <button
            type="submit"
            className="btn-primary col-span-2 w-full sm:w-auto"
            data-testid="calc-submit-btn"
            aria-disabled={hasValidationErrors}
          >
            {copy.calculate}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-2 py-2 text-center text-sm leading-tight text-ink-600 underline-offset-4 transition-colors hover:border-accent-100 hover:text-accent sm:min-h-0 sm:w-auto sm:justify-start sm:border-0 sm:px-0 sm:py-0 sm:text-ink-500 sm:hover:underline"
            data-testid="calc-reset-btn"
          >
            <RotateCcw size={14} aria-hidden="true" />
            {copy.reset}
          </button>
          <button
            type="button"
            onClick={copyShareLink}
            className={[
              'inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl border px-2 py-2 text-center text-sm leading-tight transition-colors sm:ml-auto sm:w-auto sm:px-3',
              copied
                ? 'border-emerald-700 text-emerald-700 bg-emerald-50'
                : 'border-ink-200 bg-white text-ink-700 hover:border-accent-100 hover:bg-accent-50 hover:text-accent',
            ].join(' ')}
            data-testid="calc-share-btn"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check size={14} aria-hidden="true" />
                {copy.linkCopied}
              </>
            ) : (
              <>
                <Link2 size={14} aria-hidden="true" />
                {copy.copyLink}
              </>
            )}
          </button>
        </div>

        {hasValidationErrors && (
          <div
            className="mt-5 flex gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-ink-900"
            role="status"
            data-testid="calc-validation"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <div className="font-medium">{copy.checkValues}</div>
              <ul className="mt-1 list-disc pl-4 text-ink-700">
                {validationErrorEntries.map(([fieldName, error]) => {
                  const fieldLabel = calc.fields.find((field) => field.name === fieldName)?.label ?? fieldName;
                  return (
                    <li key={fieldName}>
                      <a
                        href={`#f-${fieldName}`}
                        className="underline underline-offset-4 hover:text-accent"
                      >
                        {fieldLabel}
                      </a>
                      : {error}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {calc.disclaimer && (
          <p className="mt-6 text-xs text-ink-500 leading-relaxed border-t border-ink-200 pt-4">
            {calc.disclaimer}
          </p>
        )}
      </form>

      <div
        ref={resultRegionRef}
        className="min-w-0 lg:col-span-2 lg:sticky lg:top-6 self-start focus:outline-none"
        data-testid="calc-result-wrap"
        tabIndex={-1}
        aria-labelledby="calc-result-title"
      >
        <div
          className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-wider text-ink-500 print-hide"
          data-testid="calc-result-heading"
        >
          <span id="calc-result-title" className="min-w-0 text-fit">{copy.result}</span>
          <span className="min-w-0 text-right font-mono text-[11px] text-ink-400">{calc.id}</span>
        </div>
        {displayResult ? (
          <ResultBlock
            result={displayResult}
            onCopy={copyResult}
            onEdit={focusFormPanel}
            onPrint={printResult}
            copied={copiedResult}
            locale={locale}
          />
        ) : hasValidationErrors ? (
          <div
            className="border border-accent bg-accent-50 p-5 text-sm text-ink-700 sm:p-8"
            data-testid="calc-result-invalid"
          >
            <div className="flex items-center gap-2 font-medium text-ink-900 text-fit">
              <AlertCircle size={18} className="text-accent" aria-hidden="true" />
              {copy.unavailableTitle}
            </div>
            <p className="mt-3 leading-relaxed">
              {copy.unavailableText}
            </p>
          </div>
        ) : (
          <div
            className="border border-dashed border-ink-300 bg-ink-50 p-5 text-center text-sm text-ink-500 sm:p-8"
            data-testid="calc-result-empty"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-ink-300 bg-white text-ink-700">
              <CalculatorIcon size={21} aria-hidden="true" />
            </div>
            <p className="mt-4 leading-relaxed">
              {copy.emptyText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
