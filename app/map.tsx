// client (browser) interacts with SchoolMap this can't 
// be a react server function.
"use client";
import { TGetVenueOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import { useMemo } from "react";

import useMapView from "./useMapView";
import useVenue from "./useVenue";


export default function SchoolMap() {
  const options = useMemo<TGetVenueOptions>(
    () => ({
      venue: "mappedin-demo-mall",
      clientId: "5eab30aa91b055001a68e996",
      clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1"
    }),
    []
  );

  const venue = useVenue(options);
  const { elementRef, mapView } = useMapView(elementRef.current, venue);

  return <div id="app" ref={elementRef} />;
}

