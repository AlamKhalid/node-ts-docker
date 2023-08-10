import { Request, Response } from "express";
import router from "./router.js";
import User, { validateUser } from "../models/user.js";

router.get("/", (req: Request, res: Response) => {
  res.render("user-form");
});

router.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const { error } = validateUser(req.body);

  if (error) res.status(400).send(error.details[0].message);

  let user = new User({
    ...req.body,
  });

  await user.save();

  console.log(`Received form submission: Name: ${name}, Email: ${email}`);
  res.redirect("/api/users");
});

export default router;
