import 'dotenv/config';
import { App } from './app';
import { AuthController } from './authentication/authentication.controller';
import { TweetController } from './tweet/tweet.controller';
import { UserController } from './user/user.controller';
import { validateEnv } from './utils/validateEnv';

validateEnv();

const app = new App([new AuthController(), new UserController(), new TweetController()]);

app.listen();
