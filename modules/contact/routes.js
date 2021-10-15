const route = require('express').Router();
const contact = require('./handler');

route.get('/contact', contact.page);
route.post('/contact', contact.sendMessage);

module.exports = route;