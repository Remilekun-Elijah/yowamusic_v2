const route = require('express').Router();
const home = require('./handler');

route.get('/', home.home);
route.post("/subscribe", home.createSubscriber);
route.get("/subscribes", home.getSubscribers);
module.exports = route;