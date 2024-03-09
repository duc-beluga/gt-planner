import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const addPlanToUser = async (req, res) => {
  try {
    const { email } = req.params;
    const { newPlan } = req.body;

    if (!email || !newPlan) {
      return res.status(400).json({ message: "Email and plan are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const planExists = user.savedPlans.some(
      (plan) => plan.name === newPlan.name,
    );

    if (planExists) {
      return res
        .status(409)
        .json({ message: "Plan with the same name already exists" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $push: { savedPlans: newPlan } },
      { new: true },
    );

    res
      .status(201)
      .json({ message: "Plan added to saved plans", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const updatePlanUser = async (req, res) => {
  try {
    const { email } = req.params;
    const { newPlan } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(email);

    const planIndex = user.savedPlans.findIndex(
      (plan) => plan.name === newPlan.name,
    );

    if (planIndex === -1) {
      return res.status(404).json({ message: "Plan not found" });
    }

    user.savedPlans[planIndex] = newPlan;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { savedPlans: user.savedPlans },
      { new: true },
    );

    res
      .status(200)
      .json({ message: "Plan updated in saved plans", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserPlans = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: "Email is required " });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user.savedPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteUserPlan = async (req, res) => {
  try {
    const { email } = req.params;
    const { planName } = req.body;

    if (!email || !planName) {
      return res
        .status(400)
        .json({ message: "Email and plan name are required" });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { $pull: { savedPlans: { name: planName } } },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Plan removed from saved plans", user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  createUser,
  addPlanToUser,
  getUserPlans,
  deleteUserPlan,
  updatePlanUser,
};
