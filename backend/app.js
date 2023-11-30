const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = 3000;

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'your_password',
    database: 'your_database',
});

app.use(express.json());

// Define your routes and middleware here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
