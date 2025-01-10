import User from "../app/models/user.model";
import jwt from "jsonwebtoken";
import { addToBlacklist } from "../utils/blacklist";

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

    async logout(req) {
        const authHeader = req.header('Authorization');
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            throw new Error('Token không hợp lệ.');
        }

        const decoded = jwt.decode(token);
        const expiresIn = decoded.exp - Math.floor(Date.now() / 1000); 

        await addToBlacklist(token, expiresIn);
        return true;
    }

    generateToken = (user) => {
        return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    };
}

export default new AuthService();