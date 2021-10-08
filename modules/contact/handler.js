const Model = require("./model");
const model = new Model();


class Contact {

    page(req, res) {

        res.render('../views/contact');
    }

}

module.exports = new Contact();