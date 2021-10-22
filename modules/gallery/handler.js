class Gallery {
    page(req, res) {

        res.render('../views/gallery');
    }

}

module.exports = new Gallery();