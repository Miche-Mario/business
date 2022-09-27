import Transaction from "../models/TransactionModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Users from "../models/UsersModels.js";
import Compte from "../models/CompteModels.js";

export const getTransaction = async (req,res) => {
    try {
        const response = await Transaction.findAll({
            attributes: ['uuid', 'amount','description', 'archieve'],
            include: [{
                model: Users,
                model: Compte
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createTransaction = async(req,res) => {
    const {amount, description, user_userid, compte_compteid, archieve} = req.body;
    try {
        await Exam.create({
            amount: amount,
            description: description,
            user_userid: user_userid,
            compte_compteid: compte_compteid,
            archieve: false
        });
        res.status(201).json({msg: "Transaction well Send"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateTransaction = async(req,res) => {
    const trans = await Transaction.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!trans) return res.status(404).json({msg: "Transaction does not exist" });
     const {amount, description, user_userid, compte_compteid, archieve} = req.body;
    
    try {
        await DemandePret.update({
            amount: amount,
            description: description,
            user_userid: user_userid,
            compte_compteid: compte_compteid,
            archieve: archieve
        }, {
            where: {
                id: trans.id
            }
        });
        res.status(200).json({msg: "Transaction Well Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}