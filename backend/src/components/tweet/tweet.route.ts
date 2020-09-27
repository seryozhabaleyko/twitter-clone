import express from 'express';
import * as tweetController from './tweet.controller';

const router = express.Router();

router.get('/tweet', tweetController.getAll);
router.get('/tweet/:id', tweetController.getById);
router.post('/tweet', tweetController.create);
router.delete('/tweet/:id', tweetController.remove);
router.patch('/tweet/:id', tweetController.update);

export default router;
