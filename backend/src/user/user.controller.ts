import { Router, Request, Response, NextFunction } from 'express';
import { Controller } from '../interfaces/controller.interface';
import { userModel } from './user.model';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';
import { tweetModel } from '../tweet/tweet.model';
import { authMiddleware } from '../middlewares/auth.headers.middleware';
import { NotAuthorizedException } from '../exceptions/NotAuthorizedException';
import { Tweet } from '../tweet/tweet.interface';
import { User } from './user.interface';

class UserController implements Controller {
    public path = '/users';
    public router = Router();
    private users = userModel;
    private tweets = tweetModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, authMiddleware, this.getAllUsers);
        this.router.get(`${this.path}/:id`, authMiddleware, this.getUserById);
        this.router.get(`${this.path}/:id/tweets`, authMiddleware, this.getAllTweetsOfUser);
    }

    private getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users: User[] = await this.users.find().populate('tweets');
            res.status(200).json({ users });
        } catch (error) {
            next(error);
        }
    };

    private getUserById = async (req: Request, res: Response, next: NextFunction) => {
        const userId: string = String(req.params.id);

        try {
            const user: User | null = await this.users.findById(userId).populate('tweets');

            if (!user) {
                throw new UserNotFoundException(userId);
            }

            res.status(200).json({ user });
        } catch (error) {
            next(error);
        }
    };

    private getAllTweetsOfUser = async (req: Request, res: Response, next: NextFunction) => {
        const userId: string = String(req.params.id);
        const currentUser: string = String(req.user?._id);

        try {
            if (userId !== currentUser) {
                throw new NotAuthorizedException();
            }

            const tweets: Tweet[] = await this.tweets.find({ author: userId }).populate('author');

            res.status(200).json({ tweets });
        } catch (error) {
            next(error);
        }
    };
}

export { UserController };
