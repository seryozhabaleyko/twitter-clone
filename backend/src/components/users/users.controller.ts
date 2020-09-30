import { Request, Response } from 'express';
import { UserModel } from './users.model';
import { IUser } from './users.interface';
import { isValidObjectId } from '../../utils/util';

export async function getAllUsers(req: Request, res: Response) {
    try {
        const users: IUser[] = await UserModel.find();

        res.status(200).json({ users: users });
    } catch (error) {
        res.status(400).json({ error });
    }
}

export async function getByIdUser(req: Request, res: Response) {
    const userId: string = req.params.id;

    if (!isValidObjectId(userId)) {
        return res.status(400).json({ error: 'Invalid id. 🙅‍♂️' });
    }

    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(409).json({ error: "You're not user" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error });
    }
}

export function createUser(req: Request, res: Response) {
    res.status(200).json({
        user: 'create user controller',
    });
}

export function removeUser(req: Request, res: Response) {
    res.status(200).json({
        user: 'remove user controller',
    });
}

export function updateUser(req: Request, res: Response) {
    res.status(200).json({
        user: 'update user controller',
    });
}
