// page.tsx is the page rendered at / of the server. reminder: this is a 
// react server function. you can not do anything in the client interactively 
// here.

import { PrismaClient } from '@prisma/client'

// filesystem support
import fs from 'fs';

// client function for the map
import SchoolMap from './map';
import Search from './search';


// server gets geojson of nchs floorplan from file
const prefix: string = "mapping-src/geojson/";
const filePaths: string[] = [
  "0_labels.geojson",
  "0_nolabels.geojson",
  "1_labels.geojson",
  "1_nolabels.geojson",
  "2_labels.geojson",
  "2_nolabels.geojson",
  "3_labels.geojson",
  "3_nolabels.geojson"
];

const geojsonArray: any[] = [];
const readAndParseGeoJSON = (filePath: string): void => {
  try {
    const geojson: any = JSON.parse(fs.readFileSync(prefix + filePath, 'utf-8'));
    geojsonArray.push(geojson);
  } catch (error: any) {
    console.error(`Error reading or parsing ${filePath}: ${error.message}`);
  }
};

// Loop through each file path and populate geojsonArray
filePaths.forEach((filePath: string) => {
  readAndParseGeoJSON(filePath);
});



export default function Home() {
  return (
    <main>
      {/* render mapbox with the geojson on top */}
      <iframe title="Mappedin Map" name="Mappedin Map"
        className="w-full h-full absolute top-0 left-0"
        src="https://app.mappedin.com/map/65f0a5e0789fb8fd13e8c800?embedded=true" />
      <div className="absolute z-10 top-3 left-1/2 -translate-x-1/2">
        <Search />
      </div>
    </main>
  );
}
