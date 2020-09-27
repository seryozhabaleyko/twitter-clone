import { model, Schema } from 'mongoose';

const tweetSchema = new Schema({
    id: {
        required: true,
        type: Schema.Types.ObjectId,
    },
    text: {
        type: String,
        required: true,
    },
    user: {
        required: true,
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
});

export const TweetModel = model('tweet', tweetSchema);
