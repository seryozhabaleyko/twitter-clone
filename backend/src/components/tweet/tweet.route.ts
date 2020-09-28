import express from 'express';
import * as tweetController from './tweet.controller';

const router = express.Router();

router.get('/tweet', tweetController.getAll);
router.get('/tweet/:id([0-9]+)', tweetController.getById);
router.post('/tweet', tweetController.create);
router.delete('/tweet/:id([0-9]+)', tweetController.remove);
router.patch('/tweet/:id([0-9]+)', tweetController.update);

export default router;
