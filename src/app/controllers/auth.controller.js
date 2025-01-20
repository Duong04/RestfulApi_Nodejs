import AuthService from "../../services/auth.service";
import { successResponse, errorResponse } from "../../utils/response";
import { validationResult } from 'express-validator';

class AuthController {
    async register(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await AuthService.register(req.body);

            successResponse(res, null, 'Registered Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const token = await AuthService.login(req.body);

            successResponse(res, token, 'Login Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async logout(req, res) {
        try {
            await AuthService.logout(req);

            successResponse(res, null, 'Logout Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async refreshToken(req, res) {
        try {
            const token = await AuthService.refreshToken(req);

            successResponse(res, token, 'Refresh Token Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }
}

export default new AuthController();