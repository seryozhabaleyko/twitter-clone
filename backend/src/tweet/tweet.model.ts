import { Schema, model, Document } from 'mongoose';
import { Tweet } from './tweet.interface';

const tweetSchema = new Schema(
    {
        text: {
            type: String,
            trim: true,
        },
        author: {
            ref: 'Users',
            type: Schema.Types.ObjectId,
        },
    },
    { timestamps: true, id: false },
);

tweetSchema.set('toObject', { virtuals: true });
tweetSchema.set('toJSON', {
    virtuals: true,
    transform(doc, ret) {
        delete ret.__v;
    },
});

const tweetModel = model<Tweet & Document>('Tweets', tweetSchema);

export { tweetModel };
