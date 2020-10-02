import { HttpException } from './HttpException';

class TweetNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `Tweet with id ${id} not found`);
    }
}

export { TweetNotFoundException };
