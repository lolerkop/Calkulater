// Native details keep navigation usable before JavaScript loads. Enhancement
// adds predictable dismissal and restores the trigger after keyboard dismissal.
const headerMenus = Array.from(document.querySelectorAll('[data-header-menu]'));

for (const menu of headerMenus) {
  menu.addEventListener('toggle', () => {
    if (menu.open) {
      for (const other of headerMenus) {
        if (other !== menu) other.open = false;
      }
    }
  });
}

document.addEventListener('click', (event) => {
  for (const menu of headerMenus) {
    if (!menu.contains(event.target)) menu.open = false;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const menu = headerMenus.find((item) => item.open);
  if (!menu) return;
  event.preventDefault();
  menu.open = false;
  menu.querySelector('summary')?.focus({ preventScroll: true });
});

// A tab press can leave a disclosure naturally; close the panel after focus
// reaches the rest of the page, without trapping it inside navigation.
document.addEventListener('focusin', (event) => {
  for (const menu of headerMenus) {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  }
});
