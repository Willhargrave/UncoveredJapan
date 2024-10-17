'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
// eslint-disable-next-line import/no-extraneous-dependencies
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;
mapboxgl.accessToken = MAPBOX_TOKEN;
const geocodingClient = MapboxGeocoder({ accessToken: MAPBOX_TOKEN });

interface Location {
  name: string;
  coordinates: [number, number];
  image: string;
}

interface MapComponentProps {
  locations: Location[];
  className?: string;
}

const MapComponent = ({
  locations,
  className,
}: MapComponentProps): JSX.Element => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [coordinates, setCoordinates] = useState<[number, number][]>([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await Promise.all(
        locations.map(async (location) => {
          const response = await geocodingClient
            .forwardGeocode({
              query: location.name,
              limit: 1,
              countries: ['JP'], // Limit to Japan
            })
            .send();

          const feature = response.body.features[0];
          return feature ? (feature.center as [number, number]) : null;
        }),
      );
      setCoordinates(
        coords.filter((coord): coord is [number, number] => coord !== null),
      );
    };

    fetchCoordinates();
  }, [locations]);

  useEffect(() => {
    if (map.current || !mapContainer.current || coordinates.length === 0)
      return;

    const bounds = new mapboxgl.LngLatBounds();
    coordinates.forEach((coord) => bounds.extend(coord));

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      bounds,
      fitBoundsOptions: { padding: 50 },
    });

    coordinates.forEach((coord, index) => {
      const popupContent = `
        <div class="custom-popup">
          <h3 class="text-lg font-bold mb-2">${locations[index].name}</h3>
          <img src="${locations[index].image}" alt="${locations[index].name}" class="w-full h-32 object-cover mb-2 rounded">
        </div>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

      new mapboxgl.Marker()
        .setLngLat(coord)
        .setPopup(popup)
        .addTo(map.current!);
    });
    // eslint-disable-next-line consistent-return
    return () => {
      map.current?.remove();
    };
  }, [coordinates, locations]);

  // eslint-disable-next-line tailwindcss/no-custom-classname
  return <div ref={mapContainer} className={`map-container ${className}`} />;
};
export default MapComponent;
