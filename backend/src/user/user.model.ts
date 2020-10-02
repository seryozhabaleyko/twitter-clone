import { Schema, model, Document } from 'mongoose';
import { User } from './user.interface';

const userSchema = new Schema(
    {
        name: String,
        surname: String,
        username: String,
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    // { toJSON: { virtuals: true, getters: true } },
);

/* userSchema.virtual('tweets', {
    ref: 'Tweets',
    localField: '_id',
    foreignField: 'author',
}); */

const userModel = model<User & Document>('Users', userSchema);

export { userModel };
