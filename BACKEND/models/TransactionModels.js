import { Sequelize } from "sequelize";
import db from '../config/Database.js';
import Compte from "./CompteModels.js";
import Users from "./UsersModels.js";


const  {DataTypes} = Sequelize;

const Transaction = db.define('transaction', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    amount:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate:{
            notEmpty: false,
                }
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: false,
        }
    },
    description:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate:{
            notEmpty: false,
        }
    }
},{
    freezeTableName: true
})

Transaction.belongsTo(Users, {foreignKey: 'user_userid'});
Transaction.belongsTo(Compte, {foreignKey: 'compte_compteid'});

export default Transaction