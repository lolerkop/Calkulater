/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Базовый URL сайта, используется в SEO и sitemap. */
  readonly PUBLIC_SITE_URL?: string;
  /** Идентификатор Google Analytics 4 (например, G-XXXXXXX). */
  readonly PUBLIC_GA_ID?: string;
  /** Идентификатор счётчика Яндекс.Метрики (число). */
  readonly PUBLIC_YM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
