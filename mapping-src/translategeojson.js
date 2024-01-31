const fs = require('fs');
var transformTranslate = require('@turf/transform-translate');

// Specify the path to your GeoJSON file
const filePath = 'projected map.geojson';
const outputFilePath = 'translated map.geojson';

// Read the GeoJSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the GeoJSON data
    const geojsonData = JSON.parse(data);

    // Now you can use the geojsonData object in your code
    // https://turfjs.org/docs/#transformTranslate
    var translatedGeoJson = transformTranslate(geojsonData, 8000, 270);
    // Write the translated GeoJSON to the output file
    fs.writeFile(outputFilePath, JSON.stringify(translatedGeoJson), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return;
      }
      console.log('Translation complete. Check the translated map at:', outputFilePath);
    });
  } catch (parseError) {
    console.error('Error parsing GeoJSON:', parseError);
  }
});
