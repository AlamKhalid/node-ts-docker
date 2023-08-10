import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import users from "./routes/users.js";

dotenv.config();

const app: Express = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 4000;

mongoose
  .connect(process.env.MONGO_DB_URL!)
  .then(() => console.log("Connected to MongoDB successfully..."))
  .catch((err) => {
    console.error("Error connecting to database...", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Connected to server",
    status: 200,
  });
});

app.use("/api/users", users)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
