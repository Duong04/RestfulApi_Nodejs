import mongoose from "mongoose";
import bcrypt, { genSalt } from 'bcrypt';

const Schema = mongoose.Schema;

const User = new Schema(
    {
        fullname: {
            type: String, 
            required: true
        },
        password: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            required: true,
            unique: true
        },
        avatar: {
            type: String, 
            required: false,
            default: "https://i.pinimg.com/736x/cd/64/df/cd64dfb5211c0e8c0893cb0db399b78d.jpg"
        },
        role: {
            type: String, 
            required: false,
            enum: ["admin", "user"],
            default: "user"
        }
    },
    {
        timestamps: true,
    }
);

User.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

User.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};


export default mongoose.model('User', User);