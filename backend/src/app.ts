import express, { Application } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { Controller } from './interfaces/controller.interface';
import { errorMiddleware } from './middlewares/error.middleware';

class App {
    public app: Application;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public getServer() {
        this.app;
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }

    private connectToTheDatabase() {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }
}

export { App };
