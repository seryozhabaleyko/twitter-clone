import { Request, Response } from 'express';

export function getAll(req: Request, res: Response) {
    res.status(200).json({
        tweet: 'get controller',
    });
}

export function getById(req: Request, res: Response) {
    res.status(200).json({
        tweet: 'get controller',
    });
}

export function create(req: Request, res: Response) {
    res.status(200).json({
        tweet: 'post controller',
    });
}

export function remove(req: Request, res: Response) {
    res.status(200).json({
        tweet: 'delete controller',
    });
}

export function update(req: Request, res: Response) {
    res.status(200).json({
        tweet: 'patch controller',
    });
}
