// export this from the api route to remove api unnecessary warning
export const config = {
  api: {
    externalResolver: true,
  },
};
// didn't work
export default function (req, res) {
  const nodemailer = require("nodemailer");
  require("dotenv").config();

  // this will be the contact form details sent from the contact form
  const firstName = req.body["first-name"];
  const lastName = req.body["last-name"];
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const transporter = nodemailer.createTransport({
    // service: "gmail",
    name: 'https://tio-jorge-website.vercel.app',
    // name: 'http://localhost:3000',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN
    },
  });

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

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log("Verify transporter error: ", error);
    } else {
      console.log("Transporter verification sucessful!");
    }
  });
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("sendMail Error " + err);
    } else {
      console.log("Email sent successfully from sendMail");
    }
  });

  // sendMail(mailOptions);
  res.status(200).send("Successfull email!");
}

// export default async function(req, res) {
//   const { createTransport } = require("nodemailer");
//   const { google } = require("googleapis");
//   require("dotenv").config();
//   const { OAuth2 } = google.auth;
//   const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

//   // const OAuth2 = google.auth.OAuth2;

//   const oauth2Client = new OAuth2(
//     process.env.OAUTH_CLIENTID,
//     process.env.OAUTH_CLIENT_SECRET,
//     OAUTH_PLAYGROUND
//   );

// //   const Mailing = {};

//   oauth2Client.setCredentials({
//     refresh_token: process.env.OAUTH_REFRESH_TOKEN,
//   });

//   const accessToken = await new Promise((resolve, reject) => {
//     oauth2Client.getAccessToken((err, token) => {
//       if (err) {
//         reject("Failed to create access token :(");
//       }
//       resolve(token);
//     });
//   });

//   // this will be the contact form details sent from the contact form
//   const firstName = req.body["first-name"];
//   const lastName = req.body["last-name"];
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;

//   const transport = createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.MAIL_USERNAME,
//       clientId: process.env.OAUTH_CLIENTID,
//       clientSecret: process.env.OAUTH_CLIENT_SECRET,
//       refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//       accessToken,
//     },
//     secure: true
//   });

//   let htmlOutput = `
//   <p>You have a new estimate request.</p>
//   <h3>Contact Details</h3>
//   <ul>
//   <li>
//   <b>First Name: </b>${firstName}
//   </li>
//   <li>
//   <b>Last Name: </b>${lastName}
//   </li>
//   <li>
//   <b>Email: </b>${email}
//   </li>
//   <li>
//   <b>Phone Number: </b>${phone}
//   </li>
//   </ul>
//   <h3>Message</h3>
//   <p>${message}</p>
//   `;

//   let mailOptions = {
//     from: `"${firstName} ${lastName}" <${email}>`, // the sender's name and email
//     to: process.env.MAIL_USERNAME, // the company's email address
//     subject: "Quote Request",
//     html: htmlOutput,
//   };

//   transport.sendMail(mailOptions, function (error, info) {
//     if (error) return error;
//     res.status(200).json({ message: "email sent successfully" });
//     return info;
//   });
// }
