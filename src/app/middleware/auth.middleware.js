import { response } from 'express';
import jwt from 'jsonwebtoken';
import { isBlacklisted } from '../../utils/blacklist';

export const auth = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized.' });
    }

    try {
        const blacklisted = await isBlacklisted(token);
        if (blacklisted) {
            return res.status(401).json({ message: "Token đã bị vô hiệu hóa." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token Invalid' });
    }
};