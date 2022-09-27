import DemandePret from "../models/DemandePretModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Users from "../models/UsersModels.js";

export const getDemandePret = async (req,res) => {
    try {
        const response = await DemandePret.findAll({
            attributes: ['uuid', 'id','montant', 'prettype', 'payed'],
            include: [{
                model: Users
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createDemandePret = async(req,res) => {
    const {montant, prettype, user_userid} = req.body;
    try {
        await Exam.create({
            montant: montant,
            prettype: prettype,
            user_userid: user_userid,
            payed: false
        });
        res.status(201).json({msg: "Loan request well Send"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateDemandePret = async(req,res) => {
    const pret = await DemandePret.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!pret) return res.status(404).json({msg: "Loan does not exist" });
    // const {examname, examprice, description} = req.body;
    
    try {
        await DemandePret.update({
            payed: true
        }, {
            where: {
                id: exam.id
            }
        });
        res.status(200).json({msg: "Loan  payed"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}