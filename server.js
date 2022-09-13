const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // set our port 

app.use('/',require('./routes')); // set the routes
app.get('/favico.ico', (req, res) => { // removes the error for favicon.ico missing in some browsers.
    res.sendStatus(404); // We don't need to send anything back.
});
app.listen(port, () => console.log(`Running on port: ${port}!`)); // This is the default port