import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const { uid, email, savedPlans } = req.body;

    // const existingUser = await User.findOne({ email });
    // // BANDAID TO UPDATE EXISTING DB ENTRIES SINCE EMAIL IS UNIQUE KEY

    // if (existingUser) {
    //   // Update the existing user's uid
    //   existingUser.uid = uid;
    //   await existingUser.save();
    //   return res.status(200).json({ message: "User updated" });
    // }

    const duplicate = await User.findOne({ uid });

    if (duplicate) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({ uid, email, savedPlans });

    if (user) {
      return res.status(201).json({ message: `User ${uid} created` });
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
    const { uid } = req.params;
    const { newPlan } = req.body;

    if (!uid || !newPlan) {
      return res.status(400).json({ message: "Uid and plan are required" });
    }

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const planExists = user.savedPlans.some(
      (plan) => plan.name === newPlan.name,
    );

    if (planExists) {
      return res.status(409).json({
        message: "Please choose a unique plan name",
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { uid },
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

const updateUserPlan = async (req, res) => {
  try {
    const { uid, planName } = req.params;
    const { email, newPlan } = req.body;

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(email);

    const planIndex = user.savedPlans.findIndex(
      (plan) => plan.name === planName,
    );

    if (planIndex === -1) {
      return res.status(404).json({ message: "Plan not found" });
    }

    user.savedPlans[planIndex] = newPlan;

    const updatedUser = await User.findOneAndUpdate(
      { uid },
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
    const { uid } = req.params;

    if (!uid) {
      return res.status(400).json({ message: "Uid is required " });
    }

    const user = await User.findOne({ uid });

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
    const { uid, planName } = req.params;

    const user = await User.findOneAndUpdate(
      { uid },
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
  updateUserPlan,
};
