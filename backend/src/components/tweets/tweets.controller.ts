import { Request, Response, NextFunction } from 'express';
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
        const tweet = await new TweetModel({
            text: req.body.text,
            user: req.body.user,
        }).save();

        res.status(201).json({ tweet });
    } catch (error) {
        next(error);
    }
}

export function updateTweet(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json({
            tweet: 'update user controller',
        });
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