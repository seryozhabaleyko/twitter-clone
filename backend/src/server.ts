import * as dotenv from 'dotenv';
import { app } from './app';

dotenv.config();
const port = process.env.PORT || '7777';

app.listen(port, (): void => {
    console.log(`Example app listening at http://localhost:${port}`);
});
