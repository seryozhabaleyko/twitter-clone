import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();
const port = process.env.PORT;

app.listen(port, (): void => {
    console.log(`Example app listening at http://localhost:${port}`);
});
