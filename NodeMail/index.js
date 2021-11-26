"use strict";
const nodemailer = require("nodemailer");

async function main() {
  let gmailConfig = require('./keep/gmail-config.json')
  
  let transporter = nodemailer.createTransport({
    host: gmailConfig.smtp,
    port: gmailConfig.tls_port,
    //secure: false, // true for 465, false for other ports
    auth: {
      user: gmailConfig.username, 
      pass: gmailConfig.password, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Agenda Fácil" <agendafacilvirtual@gmail.com>', // sender address
    to: "adriano.qwe32@gmail.com, adriano.qwe32@yahoo.com.br", // list of receivers
    subject: "Hellow dear costumer ✔", // Subject line
    text: "It is a pleasure take contact with you :)", // plain text body
    html: "<h2>Hey costumer</h2><p>It is a pleasure take contact with you :)</p>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
