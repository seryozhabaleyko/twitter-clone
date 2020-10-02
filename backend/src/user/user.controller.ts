import { Router, Request, Response, NextFunction } from 'express';
import { Controller } from '../interfaces/controller.interface';
import { userModel } from './user.model';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';

class UserController implements Controller {
    public path = '/users';
    public router = Router();
    private user = userModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.getUserById);
        this.router.get(`${this.path}/:id/tweets`, this.getAllTweetsOfUser);
    }

    private getUserById = async (req: Request, res: Response, next: NextFunction) => {
        const userId: string = req.params.id;
        const userQuery = this.user.findById(userId);
        if (req.query.withPosts === 'true') {
            userQuery.populate('tweets').exec();
        }
        const user = await userQuery;
        if (user) {
            res.send(user);
        } else {
            next(new UserNotFoundException(userId));
        }
    };

    private getAllTweetsOfUser = async (req: Request, res: Response, next: NextFunction) => {};
}

export { UserController };
