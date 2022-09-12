const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // set our port 

app.use('/',require('./routes'));
app.get('/', (req, res) => res.send('Hello World!')); // This is the default route

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // This is the default port