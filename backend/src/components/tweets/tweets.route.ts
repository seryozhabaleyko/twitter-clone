import express from 'express';
import * as tweetsController from './tweets.controller';

const router = express.Router();

router.get('/', tweetsController.getAllTweets);
router.get('/:id', tweetsController.getTweetById);
router.post('/', tweetsController.createTweet);
router.patch('/:id', tweetsController.updateTweet);
router.delete('/:id', tweetsController.deleteTweet);

export default router;
