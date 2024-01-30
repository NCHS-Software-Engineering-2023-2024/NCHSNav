const fs = require('fs');

// Specify the path to your GeoJSON file
const filePath = 'projected map.geojson';

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
  } catch (parseError) {
    console.error('Error parsing GeoJSON:', parseError);
  }
});
