const route = require('express').Router();
const bio = require('./handler');

route.get('/bio', bio.bio);

module.exports = route;