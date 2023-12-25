import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('seshdb', 'root', 'basketball-9', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;