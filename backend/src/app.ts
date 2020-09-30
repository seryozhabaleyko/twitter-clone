import express, { Application } from 'express';
import cors from 'cors';
import logger from 'morgan';
import passport from 'passport';
import authRoute from './components/auth/auth.route';
import usersRoute from './components/users/users.route';
import tweetsRoute from './components/tweets/tweets.route';
import './core/db';
import { errorMiddleware } from './middlewares/error.middleware';

export const app: Application = express();

app.use(passport.initialize());

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute); // passport.authenticate('jwt', { session: false })
app.use('/api/tweets', tweetsRoute);

app.use(errorMiddleware);
