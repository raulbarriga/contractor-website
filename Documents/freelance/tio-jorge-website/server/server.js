import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import formRoute from './routes/formRoute.js';

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/contactForm", formRoute);

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
  });

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
  });