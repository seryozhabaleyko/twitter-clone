import express, { Application } from 'express';
import cors from 'cors';
import logger from 'morgan';
import passport from 'passport';
import authRoute from './components/auth/auth.route';
import usersRoute from './components/users/users.route';
import tweetsRoute from './components/tweets/tweets.route';
import './core/db';
import { errorMiddleware } from './middlewares/error.middleware';
import { applyPassportStrategy } from './middlewares/passport.middleware';

export const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
applyPassportStrategy(passport);
app.use(logger('dev'));

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/tweets', passport.authenticate('jwt', { session: false }), tweetsRoute);

app.use(errorMiddleware);
