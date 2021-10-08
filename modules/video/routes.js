const route = require('express').Router();
const video = require('./handler');

route.get('/video', video.page);

module.exports = route;