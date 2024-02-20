import User from "../models/User.js";

const createUser = async (req, res) => {
    const { email, savedPlans } = req.body
    if (!email) {
        return res.status(400).json({message: 'Email is required'})
    }

    const duplicate = await User.findOne({email})

    if (duplicate) {
        return res.status(201).json({message: 'Email already existed'})
    }

    const user = await User.create({email, savedPlans})
    
    if (user) { 
        return res.status(201).json({ message: `User ${email} created` })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }
}

const addPlanToUser = async(req, res) => {
    const { email, newPlan } = req.body;

    const user = await User.findOneAndUpdate(
        {email},
        { $push: {savedPlans: newPlan}},
        { new: true}
    );

    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.status(201).json({message: 'Plan added to saved plans', user: user})
}

const getUserPlans = async(req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user.savedPlans);
}

const deleteUserPlan = async(req, res) => {
    const {email, planName} = req.body
    console.log(email)
    console.log(planName)
    const user = await User.findOneAndUpdate(
        { email },
        { $pull: { savedPlans: { name: planName } } },
        { new: true }
    );

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Plan removed from saved plans', user: user });
}

export default {
    createUser,
    addPlanToUser,
    getUserPlans,
    deleteUserPlan
}