import { TweetModel } from './tweets.model';
import { ITweet } from './tweets.interface';
import { HttpException } from '../../exceptions/HttpException';
import { isValidObjectId } from '../../utils/util';

export async function getAllTweets(): Promise<ITweet[]> {
    const tweets: ITweet[] = await TweetModel.find();
    return tweets;
}

export async function getTweetById(tweetId: string): Promise<ITweet> {
    if (!isValidObjectId(tweetId)) throw new HttpException(400, 'Invalid id. 🙅‍♂️');

    const tweet = await TweetModel.findById(tweetId);

    if (!tweet) throw new HttpException(400, "Tweet won't find. 🤷‍♂️");

    return tweet;
}

export async function createTweet() {
    // : Promise<ITweet>
}

export async function updateTweet() {}

export async function deleteTweet(tweetId: string): Promise<ITweet> {
    if (!isValidObjectId(tweetId)) throw new HttpException(400, 'Invalid id. 🙅‍♂️');

    const deleteTweetById = await TweetModel.findByIdAndDelete(tweetId);

    if (!deleteTweetById) throw new HttpException(409, "You're not tweet");

    return deleteTweetById;
}
