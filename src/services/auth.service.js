import User from "../app/models/user.model";
import jwt from "jsonwebtoken";

class AuthService {
    async register(data) {
        const { fullname, email, password } = data;
        return await User.create({ fullname, email, password });
    }

    async login(data) {
        const { email, password } = data;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        const token = this.generateToken(user);

        return {access_token: token, user: user};
    }

    generateToken = (user) => {
        return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    };
}

export default new AuthService();