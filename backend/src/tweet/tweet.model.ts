import { Schema, model, Document } from 'mongoose';
import { Tweet } from './tweet.interface';

const tweetSchema = new Schema({
    text: String,
    author: {
        ref: 'Users',
        type: Schema.Types.ObjectId,
    },
});

const tweetModel = model<Tweet & Document>('Tweets', tweetSchema);

export { tweetModel };
