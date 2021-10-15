const Joi = require("joi");
const Query = require("./query");
const nodemailer = require("nodemailer");
class Model {

    async addUser(user) {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            number: Joi.string().required(),
            message: Joi.string().required()
        });

        try {
            const data = await schema.validateAsync(user);
            const query = new Query(data);

            this.sendAdminReceipt(data);
            // adds the user to the database
            await query.add();
            return data;
        } catch (err) {
            if (err.details) throw err.details[0];
            else throw err;
        }
    }

    sendAdminReceipt(user) {
        const adminEmails = "remilekunelijah21997@gmail.com, yowamusic@gmail.com";
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
                from: `"Yowamusic" <ewmrhumr@yowamusic.com.ng>`, // sender address
                to: `${adminEmails}`, // list of receivers
                subject: `New message from ${user.firstName}`, // Subject line
                html: `
            <section style="box-shadow: 1px 1px 2px 5px rgba(10,10,10,0.97); color:#333;  background:white; text-align:center; max-width:80%; width:80%; margin: 50px 20px 50px 20px; padding: 20px 20px;">
            <h1 style="color:rgb(13, 110, 253); margin-bottom: 40px; text-align:center">YOWA MUSIC </h1>
            
<p style="font-size:23px; margin-bottom: 10px; color: #333 !important"> New message from;</p>
                    
<div style='display: flex;'>
<p style='font-size: 17px; font-weight:600; margin-right: 10px'>Name:</p> <p style='font-size: 17px'>${user.firstName} ${user.lastName}</p>
</div>
<div style='display: flex; margin-top:0'>
<p style='font-size: 17px; font-weight:600; margin-right: 10px'>Email:</p> <p style='font-size: 17px; text-decoration:none; color: #333 !important'>${user.email}</p>
</div>
<div style='display: flex; margin-top:0'>
<p style='font-size: 17px; font-weight:600; margin-right: 10px'>Phone:</p> <p style='font-size: 17px'>${user.number}</p>
</div>
<div style='display: flex; margin-top:0'>
<p style='font-size: 17px; font-weight:600; margin-right: 10px'>Message:</p> <p style='font-size: 17px'>${user.message}</p>
</div>

                    
                
                <section style="text-align: center">
            <hr style="margin-top: 40px">
            
            <p style='margin-top: 10px; font-size: 18px'>&copy; Yowamusic 2021, all rights reserved.</p>
            </section>
            </section>`

            });
            console.log("Message sent: %s", `${adminMsg.messageId} ${user.email}`);

        }

        main().catch(console.error);

    }
}

module.exports = Model;