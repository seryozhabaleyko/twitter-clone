import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import authRoute from './components/auth/auth.route';
// import userRoute from './components/user/user.route';
import './core/db';

export const app: Application = express();

app.use(passport.initialize());

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);

// app.use('/api/user', passport.authenticate('jwt', { session: false }), userRoute);
