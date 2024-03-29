const route = require('express').Router();
const home = require('./handler');

route.get('/', home.home);
route.get("/newsletter", home.newsletter);
route.post("/subscribe", home.createSubscriber);
route.get("/subscribers", home.getSubscribers);
route.get("/subscriber/:email", home.getOneUser);
route.get("/subscribers/broadcast", home.broadcast);

module.exports = route;