import User from "../models/User.js";

const createUser = async (req, res) => {
    const { email, savedPlans } = req.body
    if (!email) {
        return res.status(400).json({message: 'Email is required'})
    }

    const duplicate = await User.findOne({email})

    if (duplicate) {
        return res.status(409).json({message: 'Email already existed'})
    }

    const user = await User.create({email, savedPlans})
    
    if (user) { 
        res.status(201).json({ message: `User ${email} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
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

export default {
    createUser,
    addPlanToUser
}