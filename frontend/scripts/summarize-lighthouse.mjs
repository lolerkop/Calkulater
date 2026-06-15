import fs from 'node:fs';
import path from 'node:path';

export function median(values) {
  const sorted = [...values].sort((left, right) => left - right);
  return sorted[Math.floor(sorted.length / 2)];
}

function resourceBytes(report, resourceType) {
  const requests = report.audits['network-requests']?.details?.items ?? [];
  return requests
    .filter((request) => request.resourceType === resourceType)
    .reduce((total, request) => total + (request.transferSize ?? 0), 0);
}

export function summarizeReports(reportDirectory, config) {
  return config.targets.map((target) => {
    const reports = fs.readdirSync(reportDirectory)
      .filter((name) => name.startsWith(`${target.slug}-mobile-`) && name.endsWith('.json'))
      .map((name) => JSON.parse(fs.readFileSync(path.join(reportDirectory, name), 'utf8')));

    if (reports.length !== config.runs) {
      throw new Error(`Expected ${config.runs} Lighthouse reports for ${target.slug}, found ${reports.length}.`);
    }
    const auditMedian = (id) => median(reports.map((report) => report.audits[id]?.numericValue ?? 0));
    const categoryMedian = (id) => median(reports.map((report) => (report.categories[id]?.score ?? 0) * 100));

    return {
      slug: target.slug,
      path: target.path,
      runs: reports.length,
      performance: categoryMedian('performance'),
      accessibility: categoryMedian('accessibility'),
      seo: categoryMedian('seo'),
      lcpMs: Math.round(auditMedian('largest-contentful-paint')),
      cls: Number(auditMedian('cumulative-layout-shift').toFixed(3)),
      tbtMs: Math.round(auditMedian('total-blocking-time')),
      totalBytes: Math.round(auditMedian('total-byte-weight')),
      scriptBytes: Math.round(median(reports.map((report) => resourceBytes(report, 'Script')))),
      stylesheetBytes: Math.round(median(reports.map((report) => resourceBytes(report, 'Stylesheet')))),
      imageBytes: Math.round(median(reports.map((report) => resourceBytes(report, 'Image')))),
    };
  });
}

export function budgetIssues(summary, budgets) {
  const issues = [];
  for (const row of summary) {
    const checks = [
      ['LCP', row.lcpMs, budgets.largestContentfulPaintMs, 'ms'],
      ['CLS', row.cls, budgets.cumulativeLayoutShift, ''],
      ['TBT', row.tbtMs, budgets.totalBlockingTimeMs, 'ms'],
      ['script', row.scriptBytes, budgets.scriptBytes, ' bytes'],
      ['stylesheet', row.stylesheetBytes, budgets.stylesheetBytes, ' bytes'],
      ['image', row.imageBytes, budgets.imageBytes, ' bytes'],
      ['total', row.totalBytes, budgets.totalBytes, ' bytes'],
    ];
    for (const [label, actual, budget, unit] of checks) {
      if (actual > budget) issues.push(`${row.slug}: ${label} ${actual}${unit} exceeds ${budget}${unit}`);
    }
  }
  return issues;
}

export function summaryMarkdown(summary) {
  const lines = [
    '| Page | Runs | Perf | A11y | SEO | LCP ms | CLS | TBT ms | Total KiB | JS KiB | CSS KiB |',
    '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|',
  ];
  for (const row of summary) {
    lines.push(
      `| ${row.slug} | ${row.runs} | ${row.performance} | ${row.accessibility} | ${row.seo} | ` +
      `${row.lcpMs} | ${row.cls} | ${row.tbtMs} | ${(row.totalBytes / 1024).toFixed(1)} | ` +
      `${(row.scriptBytes / 1024).toFixed(1)} | ${(row.stylesheetBytes / 1024).toFixed(1)} |`,
    );
  }
  return `${lines.join('\n')}\n`;
}
