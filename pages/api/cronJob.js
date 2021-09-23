require("dotenv").config();

export default async function handler(req, res) {
  switch (req.method) {
  // case 'GET':
  //   //...
  //   break
  case "POST":
    try {
      const { authorization } = req.headers;

      if (authorization === `Bearer ${process.env.CRON_JOB_JWT}`) {
          console.log("hello world from the cron job console log!")
        res.status(200).json({ success: true , message: "hello world from the cron job json message!" });
      } else {
        res.status(401).json({ success: false , message: "Token incorrect or missing." });
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


