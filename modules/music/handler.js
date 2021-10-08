class Music {

    page(req, res) {

        res.render('../views/music');
    }

}

module.exports = new Music();