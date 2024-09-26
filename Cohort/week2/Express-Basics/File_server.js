const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Directory where files are stored
const filesDir = path.join(__dirname, 'files');
console.log(filesDir)

// Endpoint to list all files in the ./files/ directory
app.get('/files', (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read files directory' });
    }
    res.status(200).json(files);
  });
});

// Endpoint to get the content of a specific file by name
app.get('/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDir, filename);

  // Check if file exists before reading
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        return res.status(404).send('File not found');
      }
      // Other errors
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
});

// Handle undefined routes with a 404 error
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(8000,()=>{
  console.log("Server started")
})
