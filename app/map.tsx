// client (browser) interacts with SchoolMap this can't 
// be a react server function.
"use client";

// react mapbox gl library
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer, GeolocateControl, ScaleControl, NavigationControl, ViewStateChangeEvent } from "react-map-gl"
import { useState } from 'react';
import Link from 'next/link';
// we can't use prisma in a client function
//import { PrismaClient } from '@prisma/client'
import { useRouter } from "next/navigation";



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

export default function SchoolMap( { data } : { data: any[] } ) {
  const courseDB = fetch(`/api/db`);

  const [zoom, setZoom] = useState(mapAttr.initialViewState.zoom);
  const [layerSrc, setLayerSrc] = useState(2);
  const [selectedButton, setSelectedButton] = useState(2); // Initially selected button is 1
  const [classroom, setClassroom] = useState("");
  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
    console.log(buttonNumber)
    handleLayerChange(zoom > 17.5 ? buttonNumber : 1 + buttonNumber )
  };


  const handleZoomChange = (event: ViewStateChangeEvent) => {
    setZoom(event.viewState.zoom)
    console.log(event.viewState.zoom)
    handleLayerChange(zoom > 17.5 ? selectedButton : 1 + selectedButton )
  };


  const handleInputChange= async (event:React.ChangeEvent<HTMLInputElement>)=>{
    setClassroom(event.target.value);
    console.log("Searching for classrom:",event.target.value);
  }

  
  const handleLayerChange = (layerNumber: number) => {
    console.log("changing layer to",layerNumber);
    setLayerSrc(layerNumber)
  }

  return (
<div>

  <Map {...mapAttr} onZoomEnd={handleZoomChange}>
    <GeolocateControl />
    <ScaleControl />
    <NavigationControl />
    <Source type="geojson" data={data[layerSrc]}>
      <Layer {...floorplan} />
    </Source>
  </Map>
  <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
  <input type="text" placeholder="Search Classroom" value={classroom} onChange={handleInputChange} className="p-2 rounded-lg border border-gray-300 focus:outline-none" />
  <Link href="/api/auth/signin" className="p-2 rounded-lg border border-gray-300 focus:outline-none">Sign in </Link>
  



  </div>
  <div className="absolute bottom-4 right-4 flex space-x-2">
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(0)}>B</button>
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(2)}>1</button>
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(4)}>2</button>
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center" onClick={() => handleButtonClick(6)}>3</button>
      </div>
  </div>);
}

