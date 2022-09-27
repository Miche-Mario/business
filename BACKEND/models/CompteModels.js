import { Sequelize } from "sequelize";
import db from '../config/Database.js';


const  {DataTypes} = Sequelize;

const Compte = db.define('compte', {
    idd:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: false,
                }
    },
    comptename:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: false,
                }
    }
},{
    freezeTableName: true,
    timestamps: false
})


export default Compte