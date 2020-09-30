import { Document } from 'mongoose';

export interface IUser {
    username: string;
    email: string;
    password: string;
    name: string;
    surname: string;
}

export interface IUserDoc extends IUser, Document {}
