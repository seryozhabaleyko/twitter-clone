import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ITweet } from './tweets.interface';
import { TweetModel } from './tweets.model';
import * as tweetsService from './tweets.service';

export async function getAllTweets(req: Request, res: Response, next: NextFunction) {
    try {
        const tweets: ITweet[] = await tweetsService.getAllTweets();
        res.status(200).json({ tweets });
    } catch (error) {
        next(error);
    }
}

export async function getTweetById(req: Request, res: Response, next: NextFunction) {
    const tweetId: string = req.params.id;

    try {
        const tweet: ITweet = await tweetsService.getTweetById(tweetId);
        res.status(200).json({ tweet });
    } catch (error) {
        next(error);
    }
}

export async function createTweet(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const tweet = await new TweetModel({
            text: req.body.text,
            user: req.user?._id,
            imageUrl: req.file ? req.file.path : '',
        }).save();

        res.status(201).json({ tweet });
    } catch (error) {
        next(error);
    }
}

export async function updateTweet(req: Request, res: Response, next: NextFunction) {
    try {
        const tweet = await tweetsService.updateTweet(req.params.id, req.body);
        res.status(200).json({ tweet });
    } catch (error) {
        next(error);
    }
}

export async function deleteTweet(req: Request, res: Response, next: NextFunction) {
    const tweetId: string = req.params.id;

    try {
        const tweet: ITweet = await tweetsService.deleteTweet(tweetId);
        res.status(200).json({ tweet });
    } catch (error) {
        next(error);
    }
}
