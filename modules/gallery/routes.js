const route = require('express').Router();
const gallery = require('./handler');

route.get('/gallery', gallery.page);

module.exports = route;