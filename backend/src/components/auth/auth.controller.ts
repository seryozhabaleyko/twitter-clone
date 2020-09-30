import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { UserModel } from '../users/users.model';

export async function loginController(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
        return res.status(404).json({
            error: `Пользователь с таким email не найден.`,
        });
    }

    const isPasswordMatching: boolean = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordMatching) {
        return res.status(401).json({
            error: 'Пароли не совпадают. Попробуйте ещё раз.',
        });
    }

    const secret: string = process.env.JWT_SECRET as string;
    const expiresIn: number = 60 * 60;

    const token = jwt.sign(
        {
            email: user.email,
            userId: user._id,
        },
        secret,
        { expiresIn },
    );

    res.status(200).json({
        token: `Bearer ${token}`,
        message: 'Login successful.',
    });
}

export async function registerController(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const isEmailExist = await UserModel.findOne({ email: req.body.email });

    if (isEmailExist) {
        return res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой.',
        });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new UserModel({ username: req.body.username, email: req.body.email, password });

    try {
        const savedUser = await user.save();
        res.status(201).json({ user: savedUser, message: 'Register successful.' });
    } catch (error) {
        res.status(400).json({ error });
    }
}
