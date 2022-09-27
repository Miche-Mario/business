import express from 'express'
import {
    getDemandePret,
    createDemandePret,
    updateDemandePret
} from "../controllers/DemandePret.js"

const router = express.Router();

router.get('/dpret', getDemandePret);
router.post('/dpret', createDemandePret)
router.get('/dpret/:id', updateDemandePret);




export default router;