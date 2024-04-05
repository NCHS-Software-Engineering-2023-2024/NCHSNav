// page.tsx is the page rendered at / of the server. reminder: this is a 
// react server function. you can not do anything in the client interactively 
// here.

import { PrismaClient } from '@prisma/client'

// filesystem support
import fs from 'fs';

// client function for the map
import SchoolMap from './map';

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
      <SchoolMap
        data={geojsonArray}
      />
    </main>
  );
}
