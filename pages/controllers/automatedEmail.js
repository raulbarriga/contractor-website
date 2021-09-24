const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

// const automate = require("../cronJobs/cronJob.js");

// export this from the api route to remove api unnecessary warning
export const config = {
  api: {
    externalResolver: true,
  },
};

// https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
async function createTransporter() {
  const OAuth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENTID,
    process.env.OAUTH_CLIENT_SECRET,
    process.env.OAUTH_REDIRECT_URI
  );

  OAuth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken,
    },
    tls: {
      // thanks to: https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
      rejectUnauthorized: false, // this made my request token work!
    },
  });

  return transporter;
}

// Next.js expects only 1 export default function for req, res.
export default function handler(req, res) {
  /*
  * Need to add the data to be sent here (but first test to be able to fetch it locally)
  const firstName = req.body["first-name"];
*/
  let htmlOutput = `
  this'll be the email template to send the data in to be displayed
  `;

  let mailOptions = {
      // my info in private
    from: `"${process.env.DEV_FIRST_NAME} ${process.env.DEV_LAST_NAME}" <${process.env.DEV_EMAIL}>`, // the sender's name and email
    to: process.env.COMPANY_EMAIL, // the company's email address
    subject: "Monthly Website Statistics",
    html: htmlOutput,
  };

  const sendEmail = async (mailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(mailOptions);
createTransporter  };

  // next.js' way to handle requests
  switch (req.method) {
    // case 'GET':
    //   //...
    //   break
    case "POST":
      sendEmail(mailOptions)
      .then((result) => res.json(result))
      .catch((error) => res.json(error.message));
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
}