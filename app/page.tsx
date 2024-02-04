import fs from 'fs';
import 'mapbox-gl/dist/mapbox-gl.css';
import SchoolMap from './map';

export default function Home() {
  const filePath = "mapping-src/nchs floorplan georeferenced 4326.geojson"
  const geojson: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return (
    <main>
      <SchoolMap
        data={geojson}
      />
    </main>
  );
}
