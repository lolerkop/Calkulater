import { fileURLToPath } from 'node:url';
import { emitContentSecurityPolicy } from '../lib/csp-build.mjs';

export default function contentSecurityPolicy() {
  let projectRoot;
  return {
    name: 'calcuway-content-security-policy',
    hooks: {
      'astro:config:done': ({ config }) => {
        projectRoot = fileURLToPath(config.root);
      },
      'astro:build:done': ({ dir, logger }) => {
        const result = emitContentSecurityPolicy({ dist: fileURLToPath(dir), projectRoot });
        logger.info(`Enforced CSP: ${result.pages} HTML pages, ${result.hashes} inline script hashes, ${result.headerLength}/2000 header characters.`);
      },
    },
  };
}
