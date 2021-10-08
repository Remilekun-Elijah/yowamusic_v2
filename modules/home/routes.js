const route = require('express').Router();
const home = require('./handler');

route.get('/', home.home);
route.post("/subscribe", home.createWaitlist);
module.exports = route;