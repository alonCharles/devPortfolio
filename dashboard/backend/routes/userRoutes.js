import express from 'express';
import { addUser, fetchUsers, editUser, removeUser } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/users', addUser)
router.get('/users', fetchUsers)
router.put('/users/:id', editUser)
router.delete('/users/:id', removeUser)

export default router