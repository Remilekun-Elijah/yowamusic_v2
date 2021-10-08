const route = require('express').Router();
const contact = require('./handler');

route.get('/contact', contact.page);

module.exports = route;