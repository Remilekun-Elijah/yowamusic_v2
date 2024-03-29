const Model = require("./model");
const model = new Model();


class lead {

    home(req, res) {
        res.render('../views/index', { albums: model.getAlbums() });
    }
    newsletter(req, res) {
        res.render('../views/newsletter');
    }

    createSubscriber(req, res) {
        const { email } = req.body;

        model.addUser({ email }).then(data => {
            if (data) res.status(201).json({ okay: true, data });
            else res.status(400).json({ okay: false, message: "Could not add your details to the waitlist, please try again" });
        }).catch(err => {
            res.status(400).json({ okay: false, message: err.message });
        })
    }
    getSubscribers(req, res) {
        model.getUsers().then(data => {
            if (data) res.status(200).json({ okay: true, data });
            else res.status(400).json({ okay: false, message: "Could not get the subscribers, please try again" });
        }).catch(err => {
            console.log(err.message);
            res.status(400).json({ okay: false, message: err.message });
        })
    }
    getOneUser(req, res) {
        const { email } = req.params;
        model.getOneUser({ email }).then(data => {
            if (data) res.status(200).json({ okay: true, data });
            else res.status(400).json({ okay: false, message: "Could not get the subscriber, please try again" });
        }).catch(err => {
            res.status(400).json({ okay: false, message: err.message });
        });

    }
    broadcast(req, res) {
        model.getEmails().then(data => {
            if (data) res.status(200).json({ okay: true, data });
            else res.status(400).json({ okay: false, message: "Could not get the subscribers, please try again" });
        }).catch(err => {
            res.status(400).json({ okay: false, message: err.message });
        })
    }

}
module.exports = new lead();