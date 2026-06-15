import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ReportGenerator } from 'lighthouse/report/generator/report-generator.js';
import {
  budgetIssues,
  summarizeReports,
  summaryMarkdown,
} from './summarize-lighthouse.mjs';

const config = JSON.parse(fs.readFileSync('performance-budget.json', 'utf8'));
const baseUrl = (process.env.PERFORMANCE_BASE_URL || 'http://127.0.0.1:4322').replace(/\/$/, '');
const outputDirectory = path.resolve(process.env.PERFORMANCE_OUTPUT_DIR || 'reports/lighthouse/current');
const runs = Number(process.env.PERFORMANCE_RUNS || config.runs);
const lighthouseCli = path.resolve('node_modules/lighthouse/cli/index.js');

fs.mkdirSync(outputDirectory, { recursive: true });
const targetPrefixes = config.targets.map((target) => `${target.slug}-mobile-`);
for (const name of fs.readdirSync(outputDirectory)) {
  if (name === 'summary.json' || name === 'summary.md' || targetPrefixes.some((prefix) => name.startsWith(prefix))) {
    fs.rmSync(path.join(outputDirectory, name), { force: true });
  }
}

for (const target of config.targets) {
  for (let run = 1; run <= runs; run += 1) {
    const outputBase = path.join(outputDirectory, `${target.slug}-mobile-${run}`);
    const jsonPath = `${outputBase}.json`;
    const htmlPath = `${outputBase}.html`;
    const url = `${baseUrl}${target.path}`;
    console.log(`Lighthouse ${target.slug} run ${run}/${runs}: ${url}`);

    const result = spawnSync(process.execPath, [
      lighthouseCli,
      url,
      '--only-categories=performance,accessibility,seo',
      '--form-factor=mobile',
      '--output=json',
      `--output-path=${jsonPath}`,
      '--chrome-flags=--headless=new --no-sandbox --disable-gpu',
      '--quiet',
    ], { encoding: 'utf8', timeout: 120_000 });

    if (!fs.existsSync(jsonPath)) {
      throw new Error(result.stderr || `Lighthouse failed for ${url}.`);
    }
    const report = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    if (!report.categories?.performance) throw new Error(`Invalid Lighthouse report: ${jsonPath}`);
    fs.writeFileSync(htmlPath, ReportGenerator.generateReport(report, 'html'), 'utf8');
  }
}

const summary = summarizeReports(outputDirectory, { ...config, runs });
fs.writeFileSync(path.join(outputDirectory, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
fs.writeFileSync(path.join(outputDirectory, 'summary.md'), summaryMarkdown(summary), 'utf8');

const issues = budgetIssues(summary, config.budgets);
if (issues.length) {
  console.error('Lighthouse budget issues:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}
console.log(`Lighthouse budgets passed. Reports: ${outputDirectory}`);
