declare module '@mapbox/mapbox-sdk/services/geocoding' {
  /* eslint-disable prettier/prettier */
  import type { GeocodeService } from '@mapbox/mapbox-sdk/services/geocoding';
  
  function GeocodeClient(options: { accessToken: string }): GeocodeService;
  
  export = GeocodeClient;
}