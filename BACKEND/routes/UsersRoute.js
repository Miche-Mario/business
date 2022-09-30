import express from 'express'
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByName,
    upload
} from "../controllers/Users.js"
import { verifyUser, adminOnly } from '../middleware/AuthUser.js';


const router = express.Router();

router.get('/users',verifyUser,adminOnly, getUsers);
router.post('/username',verifyUser,adminOnly, getUserByName);

router.get('/users/:id', verifyUser,adminOnly, getUserById);
router.post('/users', upload, createUser);
router.patch('/users/:id',verifyUser,upload,adminOnly, updateUser);
router.delete('/users/:id',verifyUser,adminOnly, deleteUser );



export default router;