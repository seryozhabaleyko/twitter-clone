import { Document, model, Schema } from 'mongoose';
import { User } from './user.interface';

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

export const UserModel = model<User & Document>('users', userSchema);
