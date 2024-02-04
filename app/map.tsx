"use client";

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer} from "react-map-gl"

function SchoolMap({ data: geojson }) {
  return (
    <main className="h-max w-full">
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -88.1559,
        latitude: 41.7674,
        zoom: 17
      }}
      style={{width: 1920, height: 1080}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source type="geojson" data=data>
        <Layer/>
      </Source>
    </Map>
    </main>
  )
}

export default SchoolMap;
