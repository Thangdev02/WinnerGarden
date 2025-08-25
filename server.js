const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

// Serve Vite build output
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
