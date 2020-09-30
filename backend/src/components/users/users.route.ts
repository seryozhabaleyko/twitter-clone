import express from 'express';
import { createUser, getAllUsers, getByIdUser, removeUser, updateUser } from './users.controller';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getByIdUser);
router.post('/', createUser);
router.delete('/:id', removeUser);
router.patch('/:id', updateUser);

export default router;
