const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const next = require("next");

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

const formRoute = require("./routes/formRoute.js");

app
  .prepare()
  .then(() => {
    const server = express();

    if (process.env.NODE_ENV !== 'production') {
      server.use(morgan("dev"));
    } else {
      server.use(morgan('combined'));
    }
    server.use(express.json());
    server.use(cors());

    server.use("/api/contactForm", formRoute);

    server.use((req, res) => {
      console.log(req.headers);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<html><body><h1>This is an Express Server</h1></body></html>");
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (error) => {
      if (error) throw error;
      console.log(`Server running on: http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });