import { useEffect, useState } from 'react';
import { getGoogleMapsLoader } from '@/lib/google-maps-loader';
import { getMapConfig } from '@/lib/mapConfig';

let googleMapsLoaded = false;
let loadPromise: Promise<void> | null = null;

export const useGooglePlaces = () => {
  const [isLoaded, setIsLoaded] = useState(googleMapsLoaded);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (googleMapsLoaded) {
      setIsLoaded(true);
      return;
    }

    if (loadPromise) {
      loadPromise.then(() => setIsLoaded(true)).catch((err) => setError(err.message));
      return;
    }

    const loadGoogleMaps = async () => {
      try {
        const config = await getMapConfig();
        const apiKey = config.googleMapsApiKey;

        const loader = getGoogleMapsLoader(apiKey);
        await loader.importLibrary('places');
        googleMapsLoaded = true;
        setIsLoaded(true);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load Google Maps';
        setError(errorMessage);
        console.error('Error loading Google Maps:', err);
      }
    };

    loadPromise = loadGoogleMaps();
  }, []);

  return { isLoaded, error };
};
