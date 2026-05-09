const ALLOWED_ROUTES = new Set(['home', 'conditions', 'immune-states', 'signals', 'datasets', 'about']);

export function normalizeRoute(value) {
  if (typeof value !== 'string') return 'home';
  const lowered = value.trim().toLowerCase();
  return ALLOWED_ROUTES.has(lowered) ? lowered : 'home';
}

export function routeFromHash(hashValue) {
  if (typeof hashValue !== 'string' || hashValue.length === 0) return 'home';
  const withoutHash = hashValue.startsWith('#') ? hashValue.slice(1) : hashValue;
  return normalizeRoute(withoutHash);
}

// Dataset detail route: #datasets/LI-DS-001
export function parseDatasetDetailRoute(hashValue) {
  if (typeof hashValue !== 'string' || hashValue.length === 0) return null;
  const withoutHash = hashValue.startsWith('#') ? hashValue.slice(1) : hashValue;

  // Match pattern: datasets/LI-DS-001
  const match = withoutHash.match(/^datasets\/(LI-DS-\d+)$/i);
  if (match) {
    return { route: 'dataset-detail', datasetId: match[1].toUpperCase() };
  }
  return null;
}
