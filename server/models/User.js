import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    savedPlans: {
        type: [{
            name: { type: String, required: true },
            content: { type: String, required: true }
        }],
        default: []
    }
});

const User = mongoose.model('User', userSchema);

export default User;
