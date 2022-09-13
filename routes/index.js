const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Stewart');
});

module.exports = routes;