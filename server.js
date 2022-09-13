const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // set our port 

app.use('/',require('./routes'));
app.listen(port, () => console.log(`Running on port: ${port}!`)); // This is the default port