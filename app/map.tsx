// client (browser) interacts with SchoolMap this can't 
// be a react server function.
"use client";

// react mapbox gl library
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer, GeolocateControl, ScaleControl, NavigationControl } from "react-map-gl"

const floorplan: any = {
  id: "floor_plan",
  type: "line",
  paint: {
    'fill-color': 'black',
    'fill-opacity': 0.9
  }
}


const floorplan_transparent: any = {
  id: "floor_plan",
  type: "line",
  paint: {
    'fill-color': 'black',
    'fill-opacity': 0
  }
}

const mapAttr: any = {
  mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  initialViewState: {
      longitude: -88.1559,
      latitude: 41.7674,
      zoom: 17
    },
    mapStyle: "mapbox://styles/ejscamehorn/cls6whfn702cy01p1gmy2geqo",
    width: "100%",
    height: "100%", 
    style: {
      position: 'absolute',
      top: 0,
      left: 0
    }
}

export default function SchoolMap({ data , data2 }) {
  return <Map {...mapAttr}  >
    <GeolocateControl />
    <ScaleControl />
    <NavigationControl />
    <Source type="geojson" data={data}>
      <Layer {...floorplan} />

      <Source type="geojson" data={data2}>
      <Layer {...floorplan_transparent} />
    </Source>
  </Map>;
}

