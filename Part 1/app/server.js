const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || 'v1.0.0';

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Interview App</title></head>
      <body style="font-family: Arial; margin: 40px;">
        <h1>IT Interview App</h1>
        <p>Status: running</p>
        <p>Version: ${APP_VERSION}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', version: APP_VERSION });
});

app.listen(PORT, () => {
  console.log(`Interview app running on port ${PORT}`);
});
