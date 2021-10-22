const route = require('express').Router();
const music = require('./handler');

route.get('/music', music.page);
route.get("/audio/:url", music.download);
module.exports = route;