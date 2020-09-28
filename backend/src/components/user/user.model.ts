import { Schema, model } from 'mongoose';
import { IUserDoc } from './user.interface';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const UserModel = model<IUserDoc>('users', userSchema);
