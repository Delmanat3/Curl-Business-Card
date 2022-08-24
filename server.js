const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    
    if (req.headers['user-agent'].includes('curl')){
      res.sendFile(path.join(__dirname, 'public', 'hype.html'));
    }
  });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
