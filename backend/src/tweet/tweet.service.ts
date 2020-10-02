import { tweetModel } from './tweet.model';
import { Tweet } from './tweet.interface';
import { TweetNotFoundException } from '../exceptions/TweetNotFoundException';

class TweetService {
    public tweet = tweetModel;

    public async getAllTweets(): Promise<Tweet[]> {
        const tweets: Tweet[] = await this.tweet.find().populate('author', '-password');
        return tweets;
    }

    public async getTweetById(id: string): Promise<Tweet> {
        const tweet: Tweet | null = await this.tweet.findById(id);
        if (!tweet) throw new TweetNotFoundException(id);
        return tweet;
    }

    public async modifyTweet(id: string, data: Tweet): Promise<Tweet> {
        const tweet: Tweet | null = await this.tweet.findByIdAndUpdate(id, data, { new: true });
        if (!tweet) throw new TweetNotFoundException(id);
        return tweet;
    }

    public async createTweet(id: string, data: Tweet): Promise<Tweet> {
        const createdTweet = new this.tweet({ ...data, author: id });
        const savedTweet = await createdTweet.save();
        const tweet = await savedTweet.populate('author', '-password').execPopulate();
        return tweet;
    }

    public async deleteTweet(id: string): Promise<Tweet> {
        const tweet: Tweet | null = await this.tweet.findByIdAndDelete(id);
        if (!tweet) throw new TweetNotFoundException(id);
        return tweet;
    }
}

export { TweetService };
