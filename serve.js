const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Barristar Law Firm website is running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`);
  console.log(`✨ Press Ctrl+C to stop the server`);
});