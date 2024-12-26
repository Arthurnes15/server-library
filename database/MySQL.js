import { createPool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

export const db = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB,
    database: process.env.DATABASE
});