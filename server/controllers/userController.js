import User from "../models/User.js";

const createUser = async (req, res) => {
  const { email, savedPlans } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const duplicate = await User.findOne({ email });

  if (duplicate) {
    return res.status(201).json({ message: "Email already existed" });
  }

  const user = await User.create({ email, savedPlans });

  if (user) {
    return res.status(201).json({ message: `User ${email} created` });
  } else {
    return res.status(400).json({ message: "Invalid user data received" });
  }
};

const addPlanToUser = async (req, res) => {
  const { email, newPlan } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const planExists = user.savedPlans.some((plan) => plan.name === newPlan.name);

  if (planExists) {
    return res
      .status(409)
      .json({ message: "Plan with the same name already exists" });
  }

  const updatedUser = await User.findOneAndUpdate(
    { email },
    { $push: { savedPlans: newPlan } },
    { new: true }
  );

  res
    .status(201)
    .json({ message: "Plan added to saved plans", user: updatedUser });
};

const updatePlanUser = async (req, res) => {
  const { email, newPlan } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  console.log(email);
  const planIndex = user.savedPlans.findIndex(
    (plan) => plan.name === newPlan.name
  );

  if (planIndex === -1) {
    return res.status(404).json({ message: "Plan not found" });
  }

  user.savedPlans[planIndex] = newPlan;

  const updatedUser = await User.findOneAndUpdate(
    { email },
    { savedPlans: user.savedPlans },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Plan updated in saved plans", user: updatedUser });
};

const getUserPlans = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user.savedPlans);
};

const deleteUserPlan = async (req, res) => {
  const { email, planName } = req.body;

  const user = await User.findOneAndUpdate(
    { email },
    { $pull: { savedPlans: { name: planName } } },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res
    .status(200)
    .json({ message: "Plan removed from saved plans", user: user });
};

export default {
  createUser,
  addPlanToUser,
  getUserPlans,
  deleteUserPlan,
  updatePlanUser,
};
