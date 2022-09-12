const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Stewart!')); // This is the default route

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // This is the default port