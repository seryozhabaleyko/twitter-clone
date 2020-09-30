import express from 'express';
import * as usersController from './users.controller';

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getByIdUser);
router.post('/', usersController.createUser);
router.delete('/:id', usersController.removeUser);
router.patch('/:id', usersController.updateUser);

export default router;
