// jshint esversion:8
const country = require('country-state-picker');
const Joi = require("joi");
const Query = require("./query");
const nodemailer = require("nodemailer");
class Model {

    async addUser(user) {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            state: Joi.string().required(),
            country: Joi.string().required()
        });

        try {
            const data = await schema.validateAsync(user);
            const query = new Query(data);
            data.message = "Welcome our  new waitlist subscriber, their info is as follows;";
            this.sendMail(data);
            return await query.add();

        } catch (err) {
            if (err.details) throw err.details[0];
            else throw err;
        }
    }

    sendMail(user) {
        const adminEmails = `remilekunelijah21997@gmail.com`;
        async function main() {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "host34.registrar-servers.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "_mainaccount@yowamusic.com.ng",
                    pass: "09023007389@fb.com",
                },
            });
            // send mail with defined transport object
            let adminMsg = await transporter.sendMail({
                from: `"Entrepreneurshook" <ewmrhumr@yowamusic.com.ng>`, // sender address
                to: `${adminEmails}`, // list of receivers
                subject: `New waitlist subscriber`, // Subject line
                html: `
            <section style="box-shadow: 1px 1px 2px 5px rgba(10,10,10,0.97); color:#333;  background:white; text-align:center; max-width:80%; width:80%; margin: 50px 20px 50px 20px; padding: 20px 20px;">
            <h1 style="color:rgb(13, 110, 253); margin-bottom: 40px; text-align:center">Entrepreneurshook </h1>
            
<p style="font-size:23px; text-decoration:none; color: #333 !important">
                    <span style="font-weight:600">Message:</span> ${user.message}</p>

                    <p style="font-size:20px; text-decoration:none; color: #333 !important"><span style="font-weight:600">Email:</span> ${user.email}</p>
<p style="font-size:20px; margin-bottom:10px"><span style="font-weight:600">State:</span> ${user.state}</p>

<p style="font-size:20px; margin-bottom:10px"><span style="font-weight:600">Country:</span> ${user.country}</p>

                    
                
                <section style="text-align: center">
            <hr style="margin-top: 40px">
            
            <p style='margin-top: 10px; font-size: 18px'>&copy; Entrepreneurshookup 2021, all rights reserved.</p>
            </section>
            </section>`

            });
            console.log("Message sent: %s", `${adminMsg.messageId} ${user.email}`);

        }

        main().catch(console.error);

    }
}

module.exports = Model;