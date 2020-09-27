import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { UserModel } from '../user/user.model';

export function loginController(req: Request, res: Response) {
    res.status(200).json({
        login: 'from controller',
    });
}

export async function registerController(req: Request, res: Response) {
    const candidate = await UserModel.findOne({ email: req.body.email });

    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой.',
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;

        const user = new UserModel({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
        });

        try {
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
        }
    }
}
