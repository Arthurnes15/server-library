import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from "cors";
import routes from './routes/routes.js';
import authentication from './routes/auth/authentication.js';

const port = process.env.SERVER_PORT || 3001;

const corsOptions = {
    origin: process.env.CORS_URL,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authentication);
app.use(routes);

app.listen(port, () => {
    console.log("Server running")
});