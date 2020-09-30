import { Document } from 'mongoose';

export interface ITweet extends Document {
    text: string;
    user: {
        name: string;
        surname: string;
        username: string;
    };
}

export interface ITweetDoc extends ITweet, Document {}
