import bcrypt from 'bcrypt';
import { setUser } from '../models/UserModel.js';

export async function registerUser(req, res) {
    try {
        const { username, password, position } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        await setUser(username, hashedPassword, position);
    
        res.status(201).send('User registered');
    }
    catch(error) {
        console.log(error);
        res.status(500).send('Error registering user');
    };
};
