const route = require('express').Router();
const home = require('./handler');

route.get('/', home.home);
route.post("/subscribe", home.createSubscriber);
route.get("/subscribers", home.getSubscribers);
module.exports = route;