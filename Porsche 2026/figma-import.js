/*
  Figma import stub
  - Set FIGMA_TOKEN in your environment before running.
  - Replace fileKey with your Figma file key.
*/

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = '<YOUR_FIGMA_FILE_KEY_HERE>';

async function getFetch() {
  if (globalThis.fetch) {
    return globalThis.fetch;
  }

  const { fetch: undiciFetch } = await import('undici');
  return undiciFetch;
}

if (!FIGMA_TOKEN) {
  console.error('Missing FIGMA_TOKEN environment variable.');
  process.exit(1);
}

if (!FILE_KEY || FILE_KEY.startsWith('<')) {
  console.error('Replace <YOUR_FIGMA_FILE_KEY_HERE> with a real Figma file key.');
  process.exit(1);
}

const BASE_URL = 'https://api.figma.com/v1';

async function fetchFigmaFile(fileKey) {
  const fetchFn = await getFetch();
  const res = await fetchFn(`${BASE_URL}/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error(`Figma API request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

async function main() {
  console.log('Fetching Figma file metadata...');
  const data = await fetchFigmaFile(FILE_KEY);

  console.log('File name:', data.name);
  console.log('Last modified:', data.lastModified);
  console.log('Components:', Object.keys(data.components || {}).length);
  console.log('Styles:', Object.keys(data.styles || {}).length);

  // TODO: add library extraction, style mapping, and output generation.
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
