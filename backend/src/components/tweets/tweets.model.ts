import { Schema, model } from 'mongoose';
import { ITweetDoc } from './tweets.interface';

const tweetSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
});

export const TweetModel = model<ITweetDoc>('tweet', tweetSchema);
