import { Router, Response, Request, NextFunction } from 'express';
import { Controller } from '../interfaces/controller.interface';
import { TweetService } from './tweet.service';
import { Tweet } from './tweet.interface';

class TweetController implements Controller {
    public path = '/tweets';
    public router = Router();
    public tweetService = new TweetService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllTweets);
        this.router.get(`${this.path}/:id`, this.getTweetById);
        this.router.post(this.path, this.createTweet);
        this.router.patch(`${this.path}/:id`, this.modifyTweet);
        this.router.delete(`${this.path}/:id`, this.deleteTweet);
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
        const tweetId: string = req.params.id;

        try {
            const tweet: Tweet = await this.tweetService.getTweetById(tweetId);
            res.status(200).json({ tweet });
        } catch (error) {
            next(error);
        }
    };

    private modifyTweet = async (req: Request, res: Response, next: NextFunction) => {
        const tweetId: string = req.params.id;
        const tweetData: Tweet = req.body;

        try {
            const tweet: Tweet = await this.tweetService.modifyTweet(tweetId, tweetData);
            res.status(200).json({ tweet, message: 'Tweet updated.' });
        } catch (error) {
            next(error);
        }
    };

    private createTweet = async (req: Request, res: Response, next: NextFunction) => {
        const tweetData: Tweet = req.body;
        const userId: string = req.user?._id;

        try {
            const tweet: Tweet = await this.tweetService.createTweet(userId, tweetData);
            res.status(200).json({ tweet, message: 'Tweet created.' });
        } catch (error) {
            next(error);
        }
    };

    private deleteTweet = async (req: Request, res: Response, next: NextFunction) => {
        const id: string = req.params.id;

        try {
            const tweet: Tweet = await this.tweetService.deleteTweet(id);
            res.status(200).json({ tweet, message: 'Tweet deleted.' });
        } catch (error) {
            next(error);
        }
    };
}

export { TweetController };
