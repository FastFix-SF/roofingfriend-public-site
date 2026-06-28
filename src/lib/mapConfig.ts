import { supabase } from '@/integrations/supabase/client';

const CACHE_KEY = 'mapConfig';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface MapConfig {
  googleMapsApiKey: string;
  mapboxPublicToken?: string;
}

let inflightPromise: Promise<MapConfig> | null = null;

/**
 * Fetches map config (Google Maps + Mapbox keys) with localStorage caching (24h TTL).
 * Deduplicates concurrent requests so only one edge function call is made.
 */
/**
 * Build a deterministic Google Street View URL.
 * No metadata API call needed — just the key + address.
 * Uses Street View (enabled on our API key; Static Maps satellite returns 403).
 * If no Street View is available, Google returns a gray placeholder (still 200).
 */
export function buildStaticMapUrl(
  apiKey: string,
  address: string,
  size: '120x80' | '400x200' | '600x300' | '800x400' = '400x200',
): string {
  return `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${encodeURIComponent(address)}&key=${apiKey}`;
}

export async function getMapConfig(): Promise<MapConfig> {
  // Check localStorage cache
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && data?.googleMapsApiKey) {
        return data;
      }
    }
  } catch { /* ignore corrupt cache */ }

  // Deduplicate concurrent requests
  if (inflightPromise) return inflightPromise;

  inflightPromise = (async () => {
    try {
      const { data, error } = await supabase.functions.invoke('map-config');
      if (error) throw error;

      const config: MapConfig = {
        googleMapsApiKey: data.googleMapsApiKey,
        mapboxPublicToken: data.mapboxPublicToken,
      };

      // Cache in localStorage
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: config,
          timestamp: Date.now(),
        }));
      } catch { /* localStorage full or unavailable */ }

      return config;
    } finally {
      inflightPromise = null;
    }
  })();

  return inflightPromise;
}
