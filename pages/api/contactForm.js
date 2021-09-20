const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

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

// async function sendMail(firstName, lastName, email, message, phone) {
//   try {
//     // Generate the accessToken
//     // const accessToken = await OAuth2Client.getAccessToken();

//     const response = await transporter.sendMail(
//       mailOptions,
//       (error, response) => {
//         error ? console.log(error) : console.log(response);
//         transporter.close();
//       }
//     );

//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// Next.js expect only 1 export default function for req, res.
export default function handler(req, res) {
  // this will be the contact form details sent from the contact form
  const firstName = req.body["first-name"];
  const lastName = req.body["last-name"];
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

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

  const sendEmail = async (mailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(mailOptions);
  };

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

/*
* copy
async function sendMail(firstName, lastName, email, message, phone) {
  createTransporter();

  try {
    // Generate the accessToken
    const accessToken = await OAuth2Client.getAccessToken();
console.log("accessToken: ", accessToken);
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

    const response = await transporter.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      transporter.close();
 });

    return response;
  } catch (error) {
    return error;
  }
}


* POST code:
* sendMail(firstName, lastName, email, message, phone)
        .then((result) => res.json(result))
        .catch((error) => res.json(error.message));
*/
