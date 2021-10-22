class Bio {
    bio(req, res) {
        res.render('../views/bio');
    }

}

module.exports = new Bio();