import User from "../app/models/user.model";
import jwt from "jsonwebtoken";
import { addToBlacklist } from "../utils/blacklist";
import redis from "../utils/redis";
import { v4 as uuidv4 } from 'uuid';
import { json } from "express";

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

        const refreshToken = uuidv4(); 
        await redis.set(refreshToken, JSON.stringify({ id: user._id, role: user.role, fullname: user.fullname, avatar: user.avatar, email: email }), 'EX', 7 * 24 * 60 * 60);
    
        return {access_token: token, refresh_token: refreshToken, user: user};
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

    async refreshToken(req) {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            throw new Error('Refresh Token không được cung cấp!');
        }

        const userData = await redis.get(refreshToken);

        if (!userData) {
            throw new Error('Refresh Token không hợp lệ hoặc đã hết hạn!');
        }

        const user = jwt.verify(userData, process.env.JWT_SECRET);

        const newAccessToken = this.generateToken(user);

        return {accessToken: newAccessToken};
    }

    generateToken = (user) => {
        return jwt.sign({ id: user._id, role: user.role, fullname: user.fullname, avatar: user.avatar, email: email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    };
}

export default new AuthService();