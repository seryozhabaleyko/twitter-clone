import { body } from 'express-validator';

export const tweetsValidation = [body('text').isLength({ min: 1, max: 30 }).trim().escape()];
