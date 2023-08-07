import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Another change!!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
