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
    { timestamps: true },
);

userSchema.virtual('tweets', {
    ref: 'Tweets',
    localField: '_id',
    foreignField: 'author',
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', {
    virtuals: true,
    transform(doc, ret) {
        delete ret.password;
        delete ret.id;
        delete ret.__v;
    },
});

const userModel = model<User & Document>('Users', userSchema);

export { userModel };
