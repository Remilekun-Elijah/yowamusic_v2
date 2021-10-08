const Model = require("./model");
const model = new Model();


class Gallery {
    page(req, res) {

        res.render('../views/gallery');
    }

}

module.exports = new Gallery();