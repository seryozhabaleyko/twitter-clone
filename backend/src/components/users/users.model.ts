import { Schema, model, Document } from 'mongoose';
import { IUser } from './users.interface';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
});

userSchema.set('toJSON', {
    transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
    },
});

export const UserModel = model<IUser & Document>('users', userSchema);
