const nodemailer = require("nodemailer");
require("dotenv").config();

// export this from the api route to remove api unnecessary warning
export const config = {
  api: {
    externalResolver: true,
  },
};

// didn't work
export default async (req, res) => {
  // this will be the contact form details sent from the contact form
  const firstName = req.body["first-name"];
  const lastName = req.body["last-name"];
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
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

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
    if (response.status === 200) {
      console.log(response.messageId);
      // return response;
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body);
};