import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { loginRoute, registerRoute } from './components/auth/auth.route';
import './core/db';

export const app: Application = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', loginRoute);
app.use('/api/auth', registerRoute);
