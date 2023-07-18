import * as url from 'url';

/**
 * Generate __filename constant, missed when using import
 */
export const __filename = url.fileURLToPath(import.meta.url);

/**
 * Generate __dirname constant, missed when using import
 */
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));