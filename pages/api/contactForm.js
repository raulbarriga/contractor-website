// export this from the api route to remove api unnecessary warning
export const config = {
  api: {
    externalResolver: true,
  },
};

export default function async(req, res) {
  require("dotenv").config();

  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  const OAuth2 = google.auth.OAuth2;

  // this will be the contact form details sent from the contact form
  const firstName = req.body["first-name"];
  const lastName = req.body["last-name"];
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // from https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a?signin=true
  const createTransporter = async () => {
    // Creates the OAuth client & provides it with the refresh token:
    const oauth2Client = new OAuth2(
      process.env.OAUTH_CLIENTID,
      process.env.OAUTH_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.OAUTH_REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      // port: 465,
      //   host: "smtp.gmail.com",
      auth: {
        type: "OAuth2",
        user: process.env.MAIL_USERNAME, // this will be the email that will receive the sent emails from the contact form
        accessToken,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      },
      secure: true,
    });

    return transporter;
  };

  let htmlOutput = `
  <p>You have a new estimate request.</p>
  <h3>Contact Details</h3>
  <ul>
  <li>
  <b>First Name: </b>${firstName}
  </li>
  <li>
  <b>Last Name: </b>${lastName}
  </li>
  <li>
  <b>Email: </b>${email}
  </li>
  <li>
  <b>Phone Number: </b>${phone}
  </li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
  `;

  let mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`, // the sender's name and email
    to: process.env.MAIL_USERNAME, // the company's email address
    subject: "Quote Request",
    html: htmlOutput,
  };

  const sendMail = async (mailOptions) => {
    try {
      let emailTransporter = await createTransporter();
      const emailResponse = await emailTransporter.sendMail(mailOptions);

      if (emailResponse.accepted) {
        res.status(200).send("Successfull email!");
        return emailResponse;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  sendMail(mailOptions);
}
