import { Sequelize } from "sequelize";
import db from '../config/Database.js';


const  {DataTypes} = Sequelize;

const DemandePret = db.define('demandepret', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    montant:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: false,
                }
    },
    prettype:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: false,
        }
    },
    payed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate:{
            notEmpty: false,
        }
    },
},{
    freezeTableName: true
})


export default DemandePret