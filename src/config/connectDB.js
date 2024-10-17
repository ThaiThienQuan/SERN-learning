const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('fullstackcourse', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
// async để ham dưới biết đó là hàm bất đồng bộ 
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
module.exports = connectDB;