// page.tsx is the page rendered at / of the server. reminder: this is a 
// react server function. you can not do anything in the client interactively 
// here.

import Search from './search';

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
      <div className="absolute z-10 bottom-0 left-0">
        <p className="text-xs p-1 bg-white text-black opacity-75">Made by Evan Scamehorn (24), Anay Apte (25), and Esha Shah (25)</p>
      </div>
    </main>
  );
}
