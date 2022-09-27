import express from 'express'
import {
    getCompte,
    createCompte
} from "../controllers/Compte.js"

const router = express.Router();

router.get('/compte', getCompte);
router.post('/compte', createCompte);




export default router;