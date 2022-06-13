import { Sequelize } from "sequelize";

const db = new Sequelize('creafoamy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',  
    //logging: false  
});


export default db;
