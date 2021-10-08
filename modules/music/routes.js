const route = require('express').Router();
const music = require('./handler');

route.get('/music', music.page);

module.exports = route;