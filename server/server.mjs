// const express = require("express");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const next = require("next");

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import next from "next";

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

import formRoute from "./routes/formRoute.mjs";

app
  .prepare()
  .then(() => {
    const server = express();
    // this route has 404 page
    // const formRoute = require("./routes/formRoute.js");
    // const formRoute = import("./routes/formRoute.mjs");

    server.use(morgan("dev"));
    server.use(express.json());
    server.use(cors());

    console.log("in the server file, below the route");
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

    server.listen(PORT, (error) => {
      if (error) throw error;
      console.log(`Server running on: http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });