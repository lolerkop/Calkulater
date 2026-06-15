import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';

const astroCli = path.resolve('node_modules/astro/astro.js');
const npmCli = process.env.npm_execpath;

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (!npmCli) throw new Error('Run this script through npm so npm_execpath is available.');
run(process.execPath, [npmCli, 'run', 'build']);

const server = spawn(process.execPath, [astroCli, 'preview', '--host', '127.0.0.1', '--port', '4322'], {
  stdio: ['ignore', 'pipe', 'pipe'],
});

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch('http://127.0.0.1:4322/ru/');
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error('Astro preview did not start within 30 seconds.');
}

try {
  await waitForServer();
  run(process.execPath, ['scripts/run-lighthouse.mjs']);
} finally {
  server.kill();
}
