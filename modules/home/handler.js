const Model = require("./model");
const model = new Model();


class lead {

    home(req, res) {

        res.render('../views/index');
    }


    createWaitlist(req, res) {
        const { email } = req.body;

        model.addUser({ email }).then(data => {
            console.log(data);
            if (data) res.status(201).json({ okay: true, data });
            else res.status(400).json({ okay: false, message: "Could not add your details to the waitlist, please try again" });
        }).catch(err => {
            console.log(err.message);
            res.status(400).json({ okay: false, message: err.message });
        })
    }
}

module.exports = new lead();