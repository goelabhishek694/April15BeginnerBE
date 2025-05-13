const fs = require("fs");
const path = require("path");
const https = require("https")
const nodemailer = require("nodemailer");
require("dotenv").config({path: "../.env"});
const {RESEND_API_KEY} = process.env
const url = "https://api.resend.com/emails";
const axios = require("axios");
function replaceContent(content, creds){
    const keys = Object.keys(creds);
    keys.forEach(key => {
        content = content.replace(`##{${key}}`, creds[key]);
    });
    return content;
}
async function emailHelper(templateName, receiverEmail, creds){
    const templatePath = path.join(__dirname, "templates", templateName);
    const content = await fs.promises.readFile(templatePath, 'utf-8');
    
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.resend.com",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //       user: "resend",
    //       pass: RESEND_API_KEY
    //     },
    // });
    //if else check if templateName is otp or ticket. on absis of that create your email details. 
    const emailDetails = {
        from: 'onboarding@resend.dev',
        to: "abhishek.goel_1@scaler.com",
        subject: "Mail from ScalerShows ✔",
        text: `Hi ${creds.name} this is your reset password otp ${creds.otp}`,
        html: replaceContent(content, creds)
      }
    // await transporter.sendMail(emailDetails);

    const response = await axios.post(url, emailDetails, {
        headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json"
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });
    if(response.status == 200){
        console.log("email sent");
    }
    
}

module.exports = emailHelper
// emailHelper("otp.html", "", {"name": "Vaibhav", "otp": "1234"});