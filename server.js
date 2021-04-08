const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const fronPath = path.resolve('./front/build/');
const frontFile = '/index.html';

app.use(cors());
app.use(express.static(fronPath));

const data = [
  { id: 1, label: 'LERAN REACT' },
  { id: 1, label: 'LERAN REDUX' },
  { id: 1, label: 'LERAN MONGO DB' },
  { id: 1, label: 'LERAN NODE JS' },
];

app.get('/api', (req, res) => {
  res.json({ data });
});

app.get('*', (req, res) => {
  res.sendFile(fronPath + frontFile);
});

app.listen(process.env.PORT || 8080);
