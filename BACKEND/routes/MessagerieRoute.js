import express from 'express'
import {
    getMessageByUserId,
    getAdminMessage,
    getUserReceiveMessage,
    getUserSentMessage,

    createMessageAdmin,
    createMessageUser,
    createReport,
    updateMessagerie
} from "../controllers/Messagerie.js"

const router = express.Router();

router.get('/getAdminMessage', getAdminMessage);
router.post('/getMessageByUserId', getMessageByUserId);
router.post('/getUserReceiveMessage', getUserReceiveMessage);
router.post('/getUserSentMessage', getUserSentMessage);


router.post('/createMessageAdmin', createMessageAdmin);
router.post('/createMessageUser', createMessageUser);
router.post('/createReport', createReport);

router.patch('/updateMessagerie', updateMessagerie);






export default router;