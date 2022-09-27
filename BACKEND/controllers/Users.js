import Students from "../models/UsersModels.js"
import argon2 from "argon2"
import Users from "../models/UsersModels.js"
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
export const getUsers = async(req,res) => {
    try {
        const response = await Users.findAll({
            attributes: ['profile','uuid', 'firstname', 'surname', 'fiscalcode', 'email', 'dateofbirth', 'gender', 'maritalstatus', 'phonenumber', 'address1', 'address2', 'occupation', 'monthlyincome', 'sourceofincome', 'username', 'password', 'role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req,res) => {
    try {
        const response = await Users.findOne({
            attributes: ['uuid', 'firstname', 'surname', 'fiscalcode', 'email', 'dateofbirth', 'gender', 'maritalstatus', 'phonenumber', 'address1', 'address2', 'occupation', 'monthlyincome', 'sourceofincome', 'username', 'password', 'role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const createUser = async(req,res) => {
    const {confirmpassword,firstname, surname, fiscalcode, email, dateofbirth, gender, maritalstatus, phonenumber, address1, address2, occupation, monthlyincome, sourceofincome,username, password, role, profile} = req.body;
    if(password !== confirmpassword) return res.status(400).json({msg: "Incorrect Confirm Password"});
    const hashPassword = await argon2.hash(password)
    try {
        await Users.create({
            firstname: firstname,
            surname: surname,
            fiscalcode: fiscalcode,
            email: email,
            dateofbirth: dateofbirth,
            gender: gender,
            maritalstatus: maritalstatus,
            phonenumber: phonenumber,
            address1: address1,
            address2: address2,
            occupation: occupation,
            monthlyincome: monthlyincome,
            sourceofincome: sourceofincome,
            profile: req.file,
            username: username,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "User Successfully created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateUser = async(req,res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User doesn't not exist" });
    const {confirmpassword,firstname, surname, fiscalcode, email, dateofbirth, gender, maritalstatus, phonenumber, address1, address2, occupation, monthlyincome, sourceofincome,username, password, role, profile} = req.body;
    let hashPassword;
    if(password === "" || password === null) {
        hashPassword = user.password
    } else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confirmpassword) return res.status(400).json({msg: "Incorrect Confirm Password"});
    try {
        await Users.update({
            firstname: firstname,
            surname: surname,
            fiscalcode: fiscalcode,
            email: email,
            dateofbirth: dateofbirth,
            gender: gender,
            maritalstatus: maritalstatus,
            phonenumber: phonenumber,
            address1: address1,
            address2: address2,
            occupation: occupation,
            monthlyincome: monthlyincome,
            sourceofincome: sourceofincome,
            profile: req.file,
            username: username,
            password: hashPassword,
            role: role
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({msg: "User  updated"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const deleteUser = async(req,res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User doesn't not exist" });
    try {
        await Users.destroy({
            where: {
                id: user.id
            }
        });
        res.status(201).json({msg: "User  Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}




export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
       
    }
}).single('profile')
