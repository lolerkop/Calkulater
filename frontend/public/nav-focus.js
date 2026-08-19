// Полоса разделов прокручивается по горизонтали, и с клавиатуры по ней ходят
// табом. Браузер доматывает её сам только тогда, когда пункт не виден совсем:
// задевающий край хотя бы одним пикселем он считает видимым и не двигает.
// Поэтому длинный пункт останавливался обрезанным — при тринадцати разделах
// от «Автомобилей» оставалось 17 пикселей, и по фокусу было не понять, где
// ты стоишь. Ни отступ прокрутки, ни укорачивание подписи тут не помогают:
// видимый остаток задаёт позиция прокрутки, а не ширина пункта.
//
// Считаем сами и двигаем только scrollLeft самой полосы: страница по
// вертикали не должна дёргаться от перехода по разделам.
//
// Отступ взят из оформления полосы: у краёв лежат подложка и тень шириной
// 18–30 пикселей, и пункт, прижатый вплотную, читается хуже.
const EDGE_INSET = 24;

function revealInStrip(element) {
  if (!(element instanceof HTMLElement)) return;

  const strip = element.closest('.nav-scroll');
  if (!(strip instanceof HTMLElement)) return;
  if (strip.scrollWidth <= strip.clientWidth) return;

  const item = element.getBoundingClientRect();
  const view = strip.getBoundingClientRect();

  // Пункт шире полосы за вычетом отступов прижимаем к краю, иначе отступ
  // требовал бы невозможного и прокрутка бы дёргалась туда-обратно.
  const inset = Math.max(0, Math.min(EDGE_INSET, (view.width - item.width) / 2));

  const shortLeft = view.left + inset - item.left;
  const shortRight = item.right - (view.right - inset);

  const delta = shortLeft > 0 ? -shortLeft : shortRight > 0 ? shortRight : 0;
  if (delta !== 0) strip.scrollLeft += delta;
}

document.addEventListener('focusin', (event) => revealInStrip(event.target));

// Смена ширины окна перекладывает полосу, а фокус остаётся на прежнем пункте
// и события focusin больше не будет. Без этого сфокусированный пункт мог
// остаться за краем насовсем — обнаружено тестом на переход 1024 → 768.
window.addEventListener('resize', () => revealInStrip(document.activeElement));
