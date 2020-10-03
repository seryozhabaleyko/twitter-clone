import { Schema, model, Document } from 'mongoose';
import { User } from './user.interface';

const userSchema = new Schema({
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
});

userSchema.set('toJSON', {
    transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
    },
});

const userModel = model<User & Document>('Users', userSchema);

export { userModel };
