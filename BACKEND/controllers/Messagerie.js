import Messagerie from "../models/MessagerieModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Users from "../models/UsersModels.js";
import MessageType from "../models/MessageTypeModels.js";

export const getAdminMessage = async (req,res) => {
    try {
        const response = await Messagerie.findAll({
            attributes: ['uuid', 'message','createdAt'],
            include: [{
                model: Users,
                model: MessageType
            }],
            where: {
                receive: true,
                sent: true
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserSentMessage = async (req,res) => {
    const {userid} = req.body;

    try {
        const response = await Messagerie.findAll({

            attributes: ['uuid', 'message','createdAt'],
            include: [{
                model: MessageType
            }],
            where: {
                [Op.and]: [
                  { sent: true },
                  { user_userid: userid }
                ]
              }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserReceiveMessage = async (req,res) => {
    const {userid} = req.body;

    try {
        const response = await Messagerie.findAll({

            attributes: ['uuid', 'message','createdAt'],
            include: [{
                model: MessageType
            }],
            where: {
                [Op.and]: [
                  { receive: true },
                  { user_userid: userid }
                ]
              }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getMessageByUserId = async (req,res) => {
    const {userid} = req.body;

    try {
        const response = await Messagerie.findAll({
            attributes: ['uuid', 'message','createdAt'],
            include: [{
                model: Users,
                model: MessageType
            }],
            where: {
                user_userid: userid,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createMessageUser = async(req,res) => {
    const {message, userId} = req.body;
    try {
        await Exam.create({
            message: message,
            sent: true,
            user_userid: userId,
            archieve: false
        });
        res.status(201).json({msg: "Message well Send"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const createMessageAdmin= async(req,res) => {
    const {message, msgtype_msgtypeid} = req.body;
    try {
        await Exam.create({
            message: message,
            msgtype_msgtypeid: msgtype_msgtypeid,
            user_userid: userId,
            receive: true,
            archieve: false
        });
        res.status(201).json({msg: "Message well Send"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


export const createReport = async(req,res) => {
    const {message, userId} = req.body;
    try {
        await Exam.create({
            message: "Transaction failled",
            user_userid: userId,
            sent: true,
            archieve: false
        });
        res.status(201).json({msg: "Report well Send"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateMessagerie = async(req,res) => {
    const msg = await Messagerie.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!trans) return res.status(404).json({msg: "Message does not exist" });
    //  const {amount, description, user_userid, compte_compteid, archieve} = req.body;
    
    try {
        await Messagerie.update({
            archieve: true
        }, {
            where: {
                id: msg.id
            }
        });
        res.status(200).json({msg: "Message Archieved"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}