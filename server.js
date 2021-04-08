const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.resolve('./front/build/')));

console.log(path.resolve('./front/build/'));

const data = [
  { id: 1, label: 'LERAN REACT' },
  { id: 1, label: 'LERAN REDUX' },
  { id: 1, label: 'LERAN MONGO DB' },
  { id: 1, label: 'LERAN NODE JS' },
];

app.get('/api', (req, res) => {
  res.json({ data });
});

app.listen(process.env.PORT || 8080);
