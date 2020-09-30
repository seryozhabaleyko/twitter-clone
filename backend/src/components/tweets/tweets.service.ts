import { TweetModel } from './tweets.model';
import { ITweet } from './tweets.interface';
import { HttpException } from '../../exceptions/HttpException';
import { isValidObjectId } from '../../utils/util';

export async function getAllTweets(): Promise<ITweet[]> {
    const tweets: ITweet[] = await TweetModel.find();
    return tweets;
}

export async function getTweetById(tweetId: string): Promise<ITweet> {
    if (!isValidObjectId(tweetId)) throw new HttpException(400, 'Невалидный id. 🙅‍♂️');

    const tweet = await TweetModel.findById(tweetId);

    if (!tweet) throw new HttpException(400, 'Твит с таким id не найден. 🤷‍♂️');

    return tweet;
}

export async function createTweet(reqBody: any): Promise<ITweet> {
    const tweet = await new TweetModel({
        text: reqBody.text,
        user: reqBody.user._id,
    }).save();
    return tweet;
}

export async function updateTweet() {}

export async function deleteTweet(tweetId: string): Promise<ITweet> {
    if (!isValidObjectId(tweetId)) throw new HttpException(400, 'Невалидный id. 🙅‍♂️');

    const deleteTweetById = await TweetModel.findByIdAndDelete(tweetId);

    if (!deleteTweetById) throw new HttpException(409, 'Твит с таким id не найден.');

    return deleteTweetById;
}
