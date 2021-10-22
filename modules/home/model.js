// jshint esversion:8
const path = require('path');
const Joi = require("joi");
const Query = require("./query");
const nodemailer = require("nodemailer");
class Model {
    getAlbums() {
        return [{
            name: 'First Of Her Kind EP',
            year: '2020',
            tracks: [{
                    id: 0,
                    title: '1. Party',
                    artist: 'Yowa',
                    url: '../audios/Yowa Party.mp3'
                },
                {
                    id: 1,
                    title: '2. Down On Me',
                    artist: 'Yowa',
                    url: '../audios/Yowa down on me.mp3'
                },
                {
                    id: 2,
                    title: '3. No Stop',
                    artist: 'Yowa',
                    url: '../audios/yowa no stop.mp3'
                },
                {
                    id: 3,
                    title: '4. Whenever You Call',
                    artist: 'Yowa',
                    url: '../audios/Yowa whenever.mp3'
                },
                {
                    id: 4,
                    title: '5. Ire',
                    artist: 'Yowa',
                    url: '../audios/Yowa Ire.mp3'
                }
            ],
            listenLink: 'https://ampl.ink/2LM9z',
            buyLink: 'https://music.apple.com/ng/album/first-of-her-kind-ep/1544262179',
            coverFront: '../images/public/fohkep.jpg',
            coverBack: '../images/public/fohkep_bc.jpg'
        }]

    }
    async addUser(user) {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2 }).required()
        });

        try {
            const data = await schema.validateAsync(user);
            const query = new Query(data);



            return query.add().then(data => {
                data.message = "Welcome our new subscriber, their info is as follows;";

                this.sendUserReceipt(data);
                this.sendAdminReceipt(data);
                return data
            });

        } catch (err) {
            if (err.details) throw err.details[0];
            else throw err;
        }
    }
    getUsers() {
        const query = new Query();
        return query.getUsers().then(data => {
            if (data.length > 0) {
                return data;
            } else throw new Error("No users at the moment");
        });
    }
    getOneUser(email) {
        const query = new Query();
        return query.getOneUser(email).then(data => {
            if (data) {
                return data;
            } else throw new Error("User not found in our records.");
        }).catch(err => {
            throw err;
        })
    }
    async getEmails() {
        const query = new Query();
        const emails = query.getUsersEmail().then(data => {
            if (data.length > 0) {
                return data.map(item => item.email);
            } else throw new Error("No users at the moment");
        });
        const mail = await emails;
        console.log(mail);
        this.sendBroadcast(mail);
        return emails;
    }
    sendAdminReceipt(user, admins) {
        console.log(admins);
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
                to: `${admins}`, // list of receivers
                subject: `New site subscriber`, // Subject line,

                html: `
            <section style="box-shadow: 1px 1px 2px 5px rgba(10,10,10,0.97); color:#333;  background:white; text-align:center; max-width:80%; width:80%; margin: 50px 20px 50px 20px; padding: 20px 20px;">
            <h1 style="color:rgb(13, 110, 253); margin-bottom: 40px; text-align:center">YOWA MUSIC </h1>
            
<p style="font-size:23px; text-decoration:none; color: #333 !important">
                    <span style="font-weight:600"></span> ${user.message}</p>

                    <p style="font-size:20px; text-decoration:none; color: #333 !important"><span style="font-weight:600">Email:</span> ${user.email}</p>

                    
                
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
    sendBroadcast(admins) {
        async function main() {
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
            let userMsg = await transporter.sendMail({
                from: `"Yowa Music" <ewmrhumr@yowamusic.com.ng>`, // sender address
                to: `${admins}`, // list of receivers
                subject: "Thanks for subscribing to our newsletter", // Subject line
                attachments: [{
                    filename: 'emotions.mp4',
                    path: path.resolve("emotions.mp4"),
                    contentType: 'video/mp4'
                }],
                html: ` <body style='display: flex; flex-direction: column; justify-content: center; background:#eee;'>
            <section id='body' style="box-shadow: 1px 1px 2px 5px rgba(10,10,10,0.97); color:#333;  background:white; max-width:80%; width:80%; margin: 50px auto 50px auto; padding: 5px 20px;">
            <h1 style="color:rgb(13, 110, 253); margin-bottom: 40px; text-align:center">YOWA MUSIC </h1>
            <p style='font-size:18px;'>Hey boo !</p>
            <p style='font-size:18px;'> It’s your girl yowa</p>
            <p style='font-size:17px'>My next single will be coming out on the 15th of this month. 
            </p>
            <p style='font-size:17px;'> For more info watch the video attachment below and also Find the pre save link at <b><a style='color:rgb(13, 110, 253); text-decoration: none;' href='http://yowamusic.com.ng'>yowamusic.com.ng</a></b>
            </p>
<p style='font-size:17px'>Thank you for your support always.</p>
<p style='font-size:17px'>Love you ! 😘❤️</p>
        
            <p style='font-size:17px; margin-top: 30px; margin-bottom:0'>- Management </p>
            <p style='font-size:17px; margin-top:0'><span style='visibility: hidden; color:transparent;'>-</span> <span style='color:#111'>Yowa Music</span>.</p>
            
            <section style="text-align: center">
            <hr style="margin-top: 35px">
            
            <p style='margin-top: 10px; font-size: 16px'>Yowa music &copy; 2021, all rights reserved.</p>
            </section>
            </body>
            ` // html body
            });

            console.log("Message sent: %s", `${userMsg.messageId} ${admins}`);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        }
        main().catch(console.error);
        return;
    }
    sendUserReceipt(user) {
        async function main() {
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
            let userMsg = await transporter.sendMail({
                from: `"Yowa Music" <ewmrhumr@yowamusic.com.ng>`, // sender address
                to: `${user.email}`, // list of receivers
                subject: "Thanks for subscribing to our newsletter", // Subject line
                html: ` <body style='display: flex; flex-direction: column; justify-content: center; background:#eee;'>
            <section id='body' style="box-shadow: 1px 1px 2px 5px rgba(10,10,10,0.97); color:#333;  background:white; max-width:80%; width:80%; margin: 50px auto 50px auto; padding: 5px 20px;">

            <h1 style="color:rgb(13, 110, 253); margin-bottom: 40px; text-align:center">YOWA MUSIC </h1>
            <p style='font-size:18px;'>Hey ${user.email}!</p>
            <p style='font-size:18px; padding-top: 10px'> I want to thank you personally for subscribing to my newsletter.</p>
            <p style='font-size:18px'>As promised, I won't be sharing your email with anyone, I will only be sending you mails whenever I have a new update for you. <b><a style='color:rgb(13, 110, 253); text-decoration: none;' href='http://yowamusic.com.ng'>yowamusic.com.ng</a></b>
            </p> 
            <p style='font-size:17px; margin-top: 30px; margin-bottom:0'>- Management </p>
            <p style='font-size:17px; margin-top:0'><span style='visibility: hidden; color:transparent;'>-</span> <span style='color:#aaa'>Yowa Music</span>.</p>
            
           
            <section style="text-align: center">
            <hr style="margin-top: 35px">
            <h2 style='color:#333; font-size:20px'> Useful links</h2>
            
            <div style="display: -webkit-box; -webkit-box-pack: center;">
            <ul style=" margin: 1px auto 1px auto; display: flex; flex-direction: row; justify-content: center;">
                
            <li style='font-size:17px; list-style-type:none;'><a style="text-decoration: none;" href='http://yowamusic.com.ng/bio'>Bio</a></li>
                <li style='font-size:17px; list-style-type:none; color:#333; padding:0 5px'>|</li>
                <li style='font-size:17px; list-style-type:none;'><a style="text-decoration: none" href='http://yowamusic.com.ng/music'>Music</a></li>
                <li style='font-size:17px; list-style-type:none; color:#333; padding:0 5px'>|</li>
                <li style='font-size:17px; list-style:none;'><a style="text-decoration: none" href='http://yowamusic.com.ng/gallery'>Gallery</a>
            </li>
            </ul>
            </div>
            <p style='margin-top: 10px; font-size: 16px'>Yowa music &copy; 2021, all rights reserved.</p>
            </section>
            </section>
            </body>
            ` // html body
            });

            console.log("Message sent: %s", `${userMsg.messageId} ${user.email}`);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        }
        main().catch(console.error);
        return;
    }

}

module.exports = Model;