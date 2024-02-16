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

export default {
    createUser
}