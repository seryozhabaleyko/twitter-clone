import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
}

export interface IUserDoc extends IUser, Document {}
