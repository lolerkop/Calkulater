import fs from 'node:fs';
import path from 'node:path';

const publicRoot = path.resolve('public');
const issues = [];

function publicPath(urlPath) {
  return path.join(publicRoot, urlPath.replace(/^\//, ''));
}

function assertFile(urlPath, label) {
  const filePath = publicPath(urlPath);
  if (!fs.existsSync(filePath)) {
    issues.push(`${label}: missing ${urlPath}`);
    return null;
  }
  return filePath;
}

function pngInfo(filePath) {
  const buffer = fs.readFileSync(filePath);
  const pngSignature = '89504e470d0a1a0a';
  if (buffer.subarray(0, 8).toString('hex') !== pngSignature) {
    issues.push(`${path.relative(publicRoot, filePath)}: not a valid PNG file`);
    return null;
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    bytes: buffer.length,
  };
}

const ogFile = assertFile('/og-default.png', 'Open Graph image');
if (ogFile) {
  const info = pngInfo(ogFile);
  if (info) {
    if (info.width !== 1200 || info.height !== 630) {
      issues.push(`og-default.png: expected 1200x630, got ${info.width}x${info.height}`);
    }
    if (info.bytes > 250 * 1024) {
      issues.push(`og-default.png: expected <= 250 KiB, got ${(info.bytes / 1024).toFixed(1)} KiB`);
    }
  }
}

const faviconFile = assertFile('/favicon.svg', 'favicon');
if (faviconFile) {
  const svg = fs.readFileSync(faviconFile, 'utf8');
  if (!svg.includes('<svg') || !svg.includes('viewBox="0 0 32 32"')) {
    issues.push('favicon.svg: expected SVG with viewBox 0 0 32 32');
  }
}

const manifestFile = assertFile('/site.webmanifest', 'web manifest');
if (manifestFile) {
  const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
  const icons = [
    ...(Array.isArray(manifest.icons) ? manifest.icons : []),
    ...(Array.isArray(manifest.shortcuts)
      ? manifest.shortcuts.flatMap((shortcut) => Array.isArray(shortcut.icons) ? shortcut.icons : [])
      : []),
  ];

  if (icons.length === 0) {
    issues.push('site.webmanifest: expected at least one icon');
  }

  for (const icon of icons) {
    if (!icon.src || !assertFile(icon.src, `manifest icon ${icon.src}`)) continue;
    if (icon.type === 'image/svg+xml' && icon.sizes !== 'any') {
      issues.push(`site.webmanifest: SVG icon ${icon.src} should use sizes="any"`);
    }
  }
}

if (issues.length > 0) {
  console.error('Public asset issues found:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('Verified public assets: favicon, manifest icons, and OG image look valid.');
