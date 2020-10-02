import { Router, Request, Response, NextFunction } from 'express';
import { Controller } from '../interfaces/controller.interface';
import { User } from '../user/user.interface';
import { LogInDto } from './authentication.dto';
import { AuthService } from './authentication.service';

class AuthController implements Controller {
    public path = '/auth';
    public router = Router();
    public authService = new AuthService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/register`, this.registration);
        this.router.post(`${this.path}/login`, this.loggingIn);
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
        const logInData: LogInDto = req.body;

        try {
            const { token } = await this.authService.login(logInData);
            res.status(200).json({ token: `Bearer ${token}`, message: 'Login successful.' });
        } catch (error) {
            next(error);
        }
    };

    private loggingOut = async (req: Request, res: Response, next: NextFunction) => {
        try {
        } catch (error) {
            next(error);
        }
    };
}

export { AuthController };
