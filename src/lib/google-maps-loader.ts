import { Loader } from '@googlemaps/js-api-loader';

let loaderInstance: Loader | null = null;

/**
 * Returns a shared Google Maps Loader singleton.
 * All components must use this instead of creating their own Loader
 * to avoid the "Loader must not be called again with different options" error.
 */
export function getGoogleMapsLoader(apiKey: string): Loader {
  if (!loaderInstance) {
    loaderInstance = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places', 'geometry', 'drawing', 'marker'],
    });
  }
  return loaderInstance;
}
