import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import type { CalcResult } from '../../../lib/types';
import type { Locale } from '../../../lib/clientI18n';
import { calculatorCopy } from './copy';

const labels = {
  ru: 'К результату',
  en: 'View result',
  uk: 'До результату',
  de: 'Zum Ergebnis',
  es: 'Ver resultado',
};

export function MobileResultLink({
  formRef,
  resultRef,
  primary,
  hasValidationErrors,
  locale,
}: {
  formRef: RefObject<HTMLFormElement>;
  resultRef: RefObject<HTMLDivElement>;
  primary: CalcResult['primary'] | null;
  hasValidationErrors: boolean;
  locale: Locale;
}) {
  const [visible, setVisible] = useState(false);
  const hasResult = primary !== null;
  const label = labels[locale as keyof typeof labels] ?? labels.en;
  const copy = calculatorCopy(locale);

  // Show the shortcut while editing, and remove it when the result itself is
  // visible. Observe the primary value rather than the potentially long table.
  useEffect(() => {
    const form = formRef.current;
    const panel = resultRef.current;
    if (!form || !panel) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const target = panel.querySelector('[data-testid="calc-result-primary"]')
      ?? panel.querySelector('[data-testid="calc-result-heading"]')
      ?? panel;
    let observer: IntersectionObserver | undefined;
    let observedHeaderHeight = -1;
    const observe = () => {
      const headerHeight = Math.ceil(document.querySelector('[data-testid="site-header"]')
        ?.getBoundingClientRect().height ?? 0);
      if (observer && observedHeaderHeight === headerHeight) return;
      observer?.disconnect();
      observedHeaderHeight = headerHeight;
      let formVisible = false;
      let resultVisible = false;
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === form) formVisible = entry.isIntersecting;
          if (entry.target === target) resultVisible = entry.isIntersecting;
        }
        setVisible(formVisible && !resultVisible);
      }, { rootMargin: `-${headerHeight + 12}px 0px -92px 0px` });
      observer.observe(form);
      observer.observe(target);
    };
    observe();
    window.addEventListener('resize', observe);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', observe);
    };
  }, [formRef, resultRef, hasResult]);

  const summary = hasValidationErrors ? copy.checkValues : primary?.value;

  return (
    <a
      href="#calc-result-panel"
      className="mobile-result-access print-hide"
      data-testid="calc-mobile-result-link"
      hidden={!visible}
      aria-label={primary && !hasValidationErrors
        ? `${label}: ${primary.label}: ${primary.value}`
        : hasValidationErrors ? `${label}: ${copy.checkValues}` : label}
      onClick={(event) => {
        const panel = resultRef.current;
        if (!panel) return;
        event.preventDefault();
        const headerHeight = document.querySelector('[data-testid="site-header"]')
          ?.getBoundingClientRect().height ?? 0;
        const top = window.scrollY + panel.getBoundingClientRect().top - headerHeight - 16;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? 'auto' : 'smooth' });
        panel.focus({ preventScroll: true });
      }}
    >
      <span className="mobile-result-access-label">{label} <span aria-hidden="true">↓</span></span>
      {summary && <strong data-testid="calc-mobile-result-value">{summary}</strong>}
    </a>
  );
}
