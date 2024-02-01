param (
    [string]$inputFilePath = "C:\Users\ejscamehorn1\Desktop\NCHSNav\mapping-src\nchs floorplan georeferenced.geojson"
)

# Read the GeoJSON file content
$geojsonContent = Get-Content $inputFilePath -Raw | ConvertFrom-Json

# Calculate the midpoint index
$midpoint = [math]::Ceiling($geojsonContent.features.Count / 2)

# Create two halves
$firstHalf = $geojsonContent | Select-Object -Property features | Select-Object -First $midpoint
$secondHalf = $geojsonContent | Select-Object -Property features | Select-Object -Skip $midpoint

# Create output file paths
$outputFile1 = "C:\Users\ejscamehorn1\Desktop\NCHSNav\mapping-src\1.geojson"
$outputFile2 = "C:\Users\ejscamehorn1\Desktop\NCHSNav\mapping-src\2.geojson"

# Create new GeoJSON objects for each half
$firstHalfGeoJson = @{
    "type" = "FeatureCollection"
    "features" = $firstHalf.features
} | ConvertTo-Json

$secondHalfGeoJson = @{
    "type" = "FeatureCollection"
    "features" = $secondHalf.features
} | ConvertTo-Json

# Write the halves to separate files
$firstHalfGeoJson | Set-Content -Path $outputFile1
$secondHalfGeoJson | Set-Content -Path $outputFile2

Write-Host "GeoJSON file has been split into $outputFile1 and $outputFile2."