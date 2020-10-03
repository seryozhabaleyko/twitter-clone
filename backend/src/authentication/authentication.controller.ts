import { Router, Request, Response, NextFunction } from 'express';
import { Controller } from '../interfaces/controller.interface';
import { User } from '../user/user.interface';
import { AuthService } from './authentication.service';
import { registerValidation, loginValidation } from './authentication.validation';

class AuthController implements Controller {
    public path = '/auth';
    public router = Router();
    public authService = new AuthService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/register`, registerValidation, this.registration);
        this.router.post(`${this.path}/login`, loginValidation, this.loggingIn);
        this.router.post(`${this.path}/logout`, this.loggingOut);
    }

    private registration = async (req: Request, res: Response, next: NextFunction) => {
        const userData: User = req.body;

        try {
            const user: User = await this.authService.register(userData);
            res.status(201).json({ user, message: 'Register successful.' });
        } catch (error) {
            next(error);
        }
    };

    private loggingIn = async (req: Request, res: Response, next: NextFunction) => {
        const logInData: User = req.body;

        try {
            const { token, cookie, user } = await this.authService.login(logInData);
            res.setHeader('Set-Cookie', [cookie]);
            res.status(200).json({ token: `Bearer ${token}`, user, message: 'Login successful.' });
        } catch (error) {
            next(error);
        }
    };

    private loggingOut = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
            res.status(200).json({ message: 'Logged out successfully.' });
        } catch (error) {
            next(error);
        }
    };
}

export { AuthController };
