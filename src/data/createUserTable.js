import pool from '../config/db.js';

export const createUserTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
        id BIGINT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        PRIMARY KEY (id)
        )
    `;

    try{
        pool.query(queryText);
        console.log("User table craeted if not exists");
    } catch(error){
        console.error("Error creating user table : ", error);
    }

}