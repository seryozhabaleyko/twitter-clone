import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationTokenMissingException } from '../exceptions/AuthenticationTokenMissingException';
import { WrongAuthenticationTokenException } from '../exceptions/WrongAuthenticationTokenException';
import { DataStoredInToken } from '../interfaces/dataStoredInToken';
import { userModel } from '../user/user.model';

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers;
    const authorization = req.headers.authorization || '';

    if (!headers && !authorization) next(new AuthenticationTokenMissingException());

    const bearer: string = 'Bearer ';
    const token: string = authorization.replace(bearer, '');
    const secret: string = process.env.JWT_SECRET || '';

    try {
        const decoded = jwt.verify(token, secret) as DataStoredInToken;
        const userId: string = decoded._id;
        const user = await userModel.findById(userId);
        if (user) {
            req.user = user;
            next();
        } else {
            next(new WrongAuthenticationTokenException());
        }
    } catch (error) {
        next(new WrongAuthenticationTokenException());
    }
}

export { authMiddleware };
