import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationTokenMissingException } from '../exceptions/AuthenticationTokenMissingException';
import { WrongAuthenticationTokenException } from '../exceptions/WrongAuthenticationTokenException';
import { DataStoredInToken } from '../interfaces/dataStoredInToken';
import { userModel } from '../user/user.model';

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    const authHeader = req.headers.authorization;

    if (cookies && cookies.Authorization) {
        const secret = process.env.JWT_SECRET as string;
        try {
            const verificationResponse = jwt.verify(
                cookies.Authorization,
                secret,
            ) as DataStoredInToken;
            const id = verificationResponse._id;
            const user = await userModel.findById(id);
            if (user) {
                req.user = user;
                next();
            } else {
                next(new WrongAuthenticationTokenException());
            }
        } catch (error) {
            next(new WrongAuthenticationTokenException());
        }
    } else {
        next(new AuthenticationTokenMissingException());
    }
}

export { authMiddleware };
