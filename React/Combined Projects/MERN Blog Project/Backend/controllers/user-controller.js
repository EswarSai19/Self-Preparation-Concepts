import User from "../model/User";
import bcryptjs from "bcryptjs";
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(400).json({ message: "No users Found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User alreadu exist! Try login instead" });
  }
  const hashedPass = bcryptjs.hashSync(password);
  const user = new User({ name, email, password: hashedPass });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res
    .status(201)
    .json({ message: "New user added successfully", user: user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "No user found with this email ID" });
  }
  const isPasswordCorrect = bcryptjs.compareSync(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(201).json({ Message: "Login Successful" });
};
