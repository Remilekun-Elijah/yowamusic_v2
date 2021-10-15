const Model = require("./model");
const model = new Model();


class Contact {

    page(req, res) {

        res.render('../views/contact');
    }
    sendMessage(req, res) {

        delete req.body.counter;
        model.addUser(req.body).then(data => {
            console.log(data);
            if (data) res.status(201).json({ okay: true, data, message: "Message sent!" });
            else res.status(400).json({ okay: false, message: "Error: failed to send your message, please try again." });
        }).catch(err => {
            console.log(err.message);
            res.status(400).json({ okay: false, message: err.message });
        })
    }
}

module.exports = new Contact();