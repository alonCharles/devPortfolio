import express from 'express';
import { addUser, fetchUsers, editUser, removeUser } from '../controllers/userControllers.js';
import { Permissions } from '../constants/permissions.js';
import { authenticate } from '../middleware/authenticate.js';
import { hasPermission } from '../middleware/permissions.js';

const User = Permissions.USERS
const router = express.Router();

router.post('/users',authenticate, hasPermission(User.CREATE), addUser)
router.get('/users',authenticate,hasPermission(User.VIEW), fetchUsers)
router.put('/users/:id',authenticate,hasPermission(User.EDIT), editUser)
router.delete('/users/:id',authenticate,hasPermission(User.DELETE), removeUser)

export default router