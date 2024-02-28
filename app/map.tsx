// client (browser) interacts with SchoolMap this can't 
// be a react server function.
"use client";

// react mapbox gl library
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer, GeolocateControl, ScaleControl, NavigationControl, ViewStateChangeEvent } from "react-map-gl"
import { useState } from 'react';
import Link from 'next/link';

const floorplan: any = {
  id: "floor_plan",
  type: "line",
  paint: {
    'fill-color': 'black',
    'fill-opacity': 0.9
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

export default function SchoolMap( { data , data2 } : { data: any, data2: any } ) {
  const [zoom, setZoom] = useState(mapAttr.initialViewState.zoom);
  const [selectedButton, setSelectedButton] = useState(1); // Initially selected button is 1
  const [classroom, setClassroom] = useState("");
  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };


  const handleZoomChange = (event: ViewStateChangeEvent) => {
    setZoom(event.viewState.zoom)
    console.log("zoom changed to", event.viewState.zoom)
  };


  const handleInputChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
    setClassroom(event.target.value);
  }

  const handleSearch = () => {
    console.log("Searching for classrom:",classroom);
  }

  return (
<div>

  <Map {...mapAttr} onZoomEnd={handleZoomChange}>
    <GeolocateControl />
    <ScaleControl />
    <NavigationControl />
    { /** <Source type="geojson" data={zoom > 17.5 ? data2 : data}> */}
    <Source type="geojson" data={selectedButton === 1 ? data : data2}>

      <Layer {...floorplan} />
    </Source>
  </Map>
  <div>className="absolute top-4 left-4"</div>
  <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
  <input type="text" placeholder="Search Classroom" value={classroom} onChange={handleInputChange} className="p-2 rounded-lg border border-gray-300 focus:outline-none" />
  <Link href="/api/auth/signin" className="p-2 rounded-lg border border-gray-300 focus:outline-none">Sign in </Link>
  



  </div>
  <div className="absolute bottom-4 right-4 flex space-x-2">
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(1)}>1</button>
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(2)}>2</button>
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(1)}>3</button>
      </div>
  </div>);
}

