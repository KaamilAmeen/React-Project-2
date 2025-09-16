const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.resolve(__dirname, '../../../.env')});

const app = express();
app.use(express.json());

const pool = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT || 3306
})

module.exports = pool.promise();