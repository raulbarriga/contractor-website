// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

const formPost = (req, res) => {
  // this will be the contact form details sent from the contact form
  const firstName = req.body["first-name"];
  const lastName = req.body["last-name"];
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,// this will be the email that will receive the sent emails from the contact form
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN
    },
    // ,
    // tls: {// for when using localhost instead of domain
    //   rejectUnauthorized: false
    // }
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
  // const contactForm = req.body; // the whole contact info
  // console.log("req.body: ", contactForm);
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error: ", error);
      res.send("error");
    } else {
      console.log("Email sent: ", info.response);
      res.send("Email Sent Successfully!");
    }
    // console.log('Message sent: %s', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // res.render('contact', {msg: 'Thanks for submitting!'});
  });
  
};

// module.exports = formPost;
export default formPost;