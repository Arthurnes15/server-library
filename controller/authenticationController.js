import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getUser } from '../models/UserModel.js';
import dotenv from 'dotenv';
dotenv.config();

export function authenticateToken(req, res, next) {
    const token = req.headers?.authorization ?? '';
    if (!token) {
        return res.status(401).send('Access denied');
    };
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).send('Invalid token')
        }
        req.user = user;
        res.send(user);
    });
};

export async function login(req, res) {
    try {
        const { username, password } = req.body;
        const result = await getUser(username);
        if (!result || !result?.length) {
            return res.status(401).send('Invalid username or password');
        };
        const user = result[0];
        const passwordMatch = await bcrypt.compare(password, user.senha_usuario);
        if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
        };
        const token = jwt.sign({ username: user.nome_usuario }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, name: user.nome_usuario });
        res.status(200);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error logging in');
    };
};

export async function logout(req, res) {
    try {
        const token = req.headers?.authorization ?? '';
        console.log(token);
        res.send({ token });
        res.status(200);
    } catch(error) {
        console.log(error);
        res.status(500).send('Error logout');
    };
};