import express from 'express';
import * as tweetsController from './tweets.controller';
import { tweetsValidation } from './tweets.validation';

const router = express.Router();

router.get('/', tweetsController.getAllTweets);
router.get('/:id', tweetsController.getTweetById);
router.post('/', tweetsValidation, tweetsController.createTweet);
router.patch('/:id', tweetsController.updateTweet);
router.delete('/:id', tweetsController.deleteTweet);

export default router;
