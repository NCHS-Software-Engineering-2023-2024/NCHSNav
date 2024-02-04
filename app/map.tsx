// client (browser) interacts with SchoolMap this can't 
// be a react server function.
"use client";

// react mapbox gl library
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer} from "react-map-gl"

export default function SchoolMap({ data }) {
  return (
    <main className="h-max w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -88.1559,
          latitude: 41.7674,
          zoom: 17
        }}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0
          }}
        mapStyle="mapbox://styles/ejscamehorn/cls6whfn702cy01p1gmy2geqo"

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
