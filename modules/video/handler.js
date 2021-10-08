class Video {
    page(req, res) {

        res.render('../views/video');
    }

}

module.exports = new Video();