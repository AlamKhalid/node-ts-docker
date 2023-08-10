import { Schema, model } from "mongoose";
import Joi from "joi";

const userSchema = new Schema({
  name: String,
  email: String,
});

const User = model("User", userSchema);

export const validateUser = (user: {}) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  return schema.validate(user);
};

export default User;
