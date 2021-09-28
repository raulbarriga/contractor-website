require("dotenv").config();
import { SMTPClient } from "emailjs";

// const automate = require("../cronJobs/cronJob.js");

// export this from the api route to remove api unnecessary warning
// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };

// Next.js expects only 1 export default function for req, res.
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

  // next.js' way to handle requests
  switch (req.method) {
    // case 'GET':
    //   //...
    //   break
    case "POST":
      try {
        client.sendAsync({
            html: htmlOutput,
          from: `"${firstName} ${lastName}" <${email}>`,
          to: process.env.COMPANY_EMAIL,
          subject: "testing emailjs"
        });
      } catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }));
        return;
      }

      res.status(200).end(JSON.stringify({ message: "Send Mail" }));
      //   sendEmail(mailOptions)
      //   .then((result) => res.json(result))
      //   .catch((error) => res.json(error.message));
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
}
