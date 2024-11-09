import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middleware/errorHandler.js';
import { createUserTable } from './data/createUserTable.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json())
app.use(cors());

// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandling)

// Craete table before satrting server
createUserTable();

// Testing connection
app.get("/", async (req, res) => {
    const result = await pool.promise().query("select database()");
    console.log(result[0][0])
    res.send(`The database name is ${result[0][0]['database()']}`)
})

// server running
app.listen(port, () =>  console.log(`Server is running on http://localhost:${port}`));