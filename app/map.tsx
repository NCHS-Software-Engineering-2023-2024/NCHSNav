"use client";

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer} from "react-map-gl"

function SchoolMap({ data }) {
  return (
    <main className="h-max w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -88.1559,
          latitude: 41.7674,
          zoom: 17
        }}
        style={{width: 1800, height: 960}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source type="geojson" data={data}>
          <Layer
            type="line"
            paint={{
              'fill-color': 'black',
              'fill-opacity': 0.5
            }}
          />
        </Source>
      </Map>
    </main>
  )
}

export default SchoolMap;
