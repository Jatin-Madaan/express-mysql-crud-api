import pool from '../config/db.js';

export const getAllUsersService = async () => {
    const result = await pool.promise().query("SELECT * FROM users");
    return result[0];
};

export const getUserByIdService = async (id) => {
    const result = await pool.promise().query("SELECT * FROM users WHERE id = ?", [id]);
    return result[0];
};

export const createUserService = async (name, email) => {
    const result = await pool.promise().query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
    let rows = await pool.promise().query("SELECT * FROM users WHERE ID = LAST_INSERT_ID()");
    return rows[0];
};
export const updateUserService = async (id, name, email) => {
    const result = await pool.promise().query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id]);
    return result;
};

export const deleteUserservice = async (id) => {
    const result = await pool.promise().query("DELETE FROM users WHERE id=?", [id]);
    return result;
};
