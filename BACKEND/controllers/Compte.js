import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Compte from "../models/CompteModels.js";

export const getCompte = async (req,res) => {
    try {
        const response = await Taux.findAll({
            attributes: ['uuid', 'idd','comptename']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}



export const createCompte = async(req,res) => {
    const {idd, comptename} = req.body;
    try {
        await Compte.create({
            idd: idd,
            comptename: comptename
        });
        res.status(201).json({msg: "Compte Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}