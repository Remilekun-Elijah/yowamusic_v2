const path = require('path');
const model = require('./model');
class Music {
    page(req, res) {
        res.render('music', { model });
    }

    download(req, res) {
        console.log(req.params.url);
        res.download(path.resolve(`public/audios/${req.params.url}`), err => {
            if (!err) {
                console.log('Downloaded');
                // res.end();
            }
        });

    }
}

module.exports = new Music();