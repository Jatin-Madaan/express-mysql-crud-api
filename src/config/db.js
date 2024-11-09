import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

pool.on("connect", () => {
    console.log("Connection pool established with database");
});

export default pool;

