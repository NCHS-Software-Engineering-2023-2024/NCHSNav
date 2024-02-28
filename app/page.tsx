// page.tsx is the page rendered at / of the server. reminder: this is a 
// react server function. you can not do anything in the client interactively 
// here.

// filesystem support
import fs from 'fs';

// client function for the map
import SchoolMap from './map';

// server gets geojson of nchs floorplan from file
const filePaths: string[] = [
  "mapping-src/NCHS Map Floor 1 No Labels.geojson",
  "mapping-src/NCHS Map Floor 1 Labels.geojson"
];
//const filePath = "mapping-src/NCHS Map Floor 1 No Labels.geojson"
//const filePath2 = "mapping-src/nchs floorplan georeferenced 4326.geojson"

const geojsonArray: any[] = [];


const readAndParseGeoJSON = (filePath: string): void => {
  try {
    const geojson: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    geojsonArray.push(geojson);
  } catch (error) {
    console.error(`Error reading or parsing ${filePath}: ${error.message}`);
  }
};

// Loop through each file path and populate geojsonArray
filePaths.forEach((filePath: string) => {
  readAndParseGeoJSON(filePath);
});


//const geojson: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//const geojson2: any = JSON.parse(fs.readFileSync(filePath2, 'utf-8'));

export default function Home() {
  return (
    <main>
      {/* render mapbox with the geojson on top */}
      <SchoolMap
        data={geojson}
        data2={geojson2}
      />
    </main>
  );
}
