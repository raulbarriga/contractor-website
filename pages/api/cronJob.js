// const { Queue } = require("quirrel/next");
require("dotenv").config();
const { google } = require("googleapis");
// const GetData = require("../../lib/gaReportAPI.js");

// export default Queue(
//   "api/cronJob", // 👈 the route it's reachable on
//   async (recipient) => {
//     console.log(`Sending an E-Mail to ${recipient}`);
//   }
// )

const key = require("../../lib/ga-auth.json");
const scopes = "https://www.googleapis.com/auth/analytics.readonly";
const jwt = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  scopes
);
const view_id = process.env.GA_VIEW_ID;

process.env.GOOGLE_APPLICATION_CREDENTIALS = "../../lib/ga-auth.json";

// it works!
async function getData() {
  const response = await jwt.authorize();
  const result = await google.analytics("v3").data.ga.get({
    auth: jwt,
    ids: "ga:" + view_id,
    "start-date": "30daysAgo",
    "end-date": "today",
    metrics: ["ga:pageviews", "ga:totalEvents"],// this is only showing 1 metric for some reason (need to learn how to query more than 1)
  });

  console.dir(result);
  return result;
}

export default async function handler(req, res) {
  switch (req.method) {
    // case 'GET':
    //   //...
    //   break
    case "POST":
      try {
        const { authorization } = req.headers;

        if (authorization === `Bearer ${process.env.CRON_JOB_JWT}`) {
          console.log("hello world from the cron job console log!");
          getData()
            .then((result) => res.json(result))
            .catch((error) => res.json(error.message));
          // res
          //   .status(200)
          //   .json({
          //     success: true,
          //     message: "hello world from the cron job json message!",
          //   });
        } else {
          res
            .status(401)
            .json({ success: false, message: "Token incorrect or missing." });
        }
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break;
    default:
      res.setHeader("Allow", "POST");
      res.status(405).end(); //Method Not Allowed
      break;
  }
}
