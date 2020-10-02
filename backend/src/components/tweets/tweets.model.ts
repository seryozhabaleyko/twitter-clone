import { Schema, model } from 'mongoose';
import { ITweetDoc } from './tweets.interface';

const tweetSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
});

export const TweetModel = model<ITweetDoc>('tweet', tweetSchema);
