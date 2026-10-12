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
  if (buffer.length < 24 || buffer.subarray(0, 8).toString('hex') !== pngSignature) {
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

for (const [urlPath, size] of [
  ['/favicon-48x48.png', 48],
  ['/apple-touch-icon.png', 180],
  ['/icon-192.png', 192],
  ['/icon-512.png', 512],
]) {
  const file = assertFile(urlPath, 'raster icon');
  if (!file) continue;
  const info = pngInfo(file);
  if (info && (info.width !== size || info.height !== size)) {
    issues.push(`${urlPath}: expected ${size}x${size}, got ${info.width}x${info.height}`);
  }
}

const icoFile = assertFile('/favicon.ico', 'legacy favicon');
if (icoFile) {
  const buffer = fs.readFileSync(icoFile);
  if (buffer.length < 6 || buffer.readUInt16LE(0) !== 0 || buffer.readUInt16LE(2) !== 1) {
    issues.push('favicon.ico: not a valid ICO file');
  } else {
    const count = buffer.readUInt16LE(4);
    const sizes = [];
    if (buffer.length < 6 + count * 16) {
      issues.push('favicon.ico: truncated image directory');
    } else {
      for (let index = 0; index < count; index += 1) {
        const entry = 6 + index * 16;
        const width = buffer[entry] || 256;
        const height = buffer[entry + 1] || 256;
        const bytes = buffer.readUInt32LE(entry + 8);
        const offset = buffer.readUInt32LE(entry + 12);
        if (width !== height || bytes === 0 || offset < 6 + count * 16 || offset + bytes > buffer.length) {
          issues.push(`favicon.ico: invalid ${width}x${height} image entry`);
        }
        sizes.push(width);
      }
      if (![16, 32, 48].every((size) => sizes.includes(size))) {
        issues.push('favicon.ico: expected 16x16, 32x32 and 48x48 images');
      }
    }
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
    if (icon.type === 'image/png') {
      const info = pngInfo(publicPath(icon.src));
      if (info && icon.sizes !== `${info.width}x${info.height}`) {
        issues.push(`site.webmanifest: PNG icon ${icon.src} sizes do not match its dimensions`);
      }
    }
  }
}

const fontPaths = [
  '/fonts/manrope-v20-cyrillic.woff2',
  '/fonts/manrope-v20-latin.woff2',
  '/fonts/ibm-plex-mono-v20-400-cyrillic.woff2',
  '/fonts/ibm-plex-mono-v20-400-latin.woff2',
  '/fonts/ibm-plex-mono-v20-500-cyrillic.woff2',
  '/fonts/ibm-plex-mono-v20-500-latin.woff2',
  '/fonts/ibm-plex-mono-v20-600-cyrillic.woff2',
  '/fonts/ibm-plex-mono-v20-600-latin.woff2',
];

for (const fontPath of fontPaths) {
  const fontFile = assertFile(fontPath, `font ${fontPath}`);
  if (!fontFile) continue;

  const buffer = fs.readFileSync(fontFile);
  if (buffer.subarray(0, 4).toString('ascii') !== 'wOF2') {
    issues.push(`${fontPath}: not a valid WOFF2 file`);
  }
}

if (issues.length > 0) {
  console.error('Public asset issues found:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('Verified public assets: SVG/PNG/ICO favicons, Apple icon, manifest icons, OG image, and fonts look valid.');
