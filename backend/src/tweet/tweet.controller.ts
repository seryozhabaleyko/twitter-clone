import { Router, Response, Request, NextFunction } from 'express';
import { Controller } from '../interfaces/controller.interface';
import { TweetService } from './tweet.service';
import { Tweet } from './tweet.interface';
import { authMiddleware } from '../middlewares/auth.headers.middleware';

class TweetController implements Controller {
    public path = '/tweets';
    public router = Router();
    public tweetService = new TweetService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, authMiddleware, this.getAllTweets);
        this.router.get(`${this.path}/:id`, authMiddleware, this.getTweetById);
        this.router.post(this.path, authMiddleware, this.createTweet);
        this.router.patch(`${this.path}/:id`, authMiddleware, this.modifyTweet);
        this.router.delete(`${this.path}/:id`, authMiddleware, this.deleteTweet);
    }

    private getAllTweets = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tweets: Tweet[] = await this.tweetService.getAllTweets();
            res.status(200).json({ tweets });
        } catch (error) {
            next(error);
        }
    };

    private getTweetById = async (req: Request, res: Response, next: NextFunction) => {
        const tweetId: string = String(req.params.id);

        try {
            const tweet: Tweet = await this.tweetService.getTweetById(tweetId);
            res.status(200).json({ tweet });
        } catch (error) {
            next(error);
        }
    };

    private modifyTweet = async (req: Request, res: Response, next: NextFunction) => {
        const tweetId: string = String(req.params.id);
        const tweetData: Tweet = req.body;

        try {
            const tweet: Tweet = await this.tweetService.modifyTweet(tweetId, tweetData);
            res.status(200).json({ tweet, message: 'Tweet updated.' });
        } catch (error) {
            next(error);
        }
    };

    private createTweet = async (req: Request, res: Response, next: NextFunction) => {
        const authorId: string = String(req.user?._id);
        const tweetData: Tweet = req.body;

        try {
            const tweet: Tweet = await this.tweetService.createTweet(authorId, tweetData);
            res.status(201).json({ tweet, message: 'Tweet created.' });
        } catch (error) {
            next(error);
        }
    };

    private deleteTweet = async (req: Request, res: Response, next: NextFunction) => {
        const tweetId: string = String(req.params.id);

        try {
            const tweet: Tweet = await this.tweetService.deleteTweet(tweetId);
            res.status(200).json({ tweet, message: 'Tweet deleted.' });
        } catch (error) {
            next(error);
        }
    };
}

export { TweetController };
