const mbxClient = require('@mapbox/mapbox-sdk');
const mbxUploads = require('@mapbox/mapbox-sdk/services/uploads');

const baseClient = mbxClient({ accessToken: "pk.eyJ1IjoiZWpzY2FtZWhvcm4iLCJhIjoiY2xycGNxOHp0MDRhZTJqbmozM3NzZG8zMyJ9.7J-8aqTiiF5kSpYyEnj2qQ" });
const uploadsClient = mbxUploads(baseClient);


// Response from a call to createUploadCredentials
const credentials = {
    accessKeyId: '{accessKeyId}',
    bucket: '{bucket}',
    key: '{key}',
    secretAccessKey: '{secretAccessKey}',
    sessionToken: '{sessionToken}',
    url: '{s3 url}'
};
uploadsClient.createUpload({
  tileset: `${myUsername}.${myTileset}`,
  url: credentials.url,
  name: 'my uploads name',
})
  .send()
  .then(response => {
    const upload = response.body;
  });
