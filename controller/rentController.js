import { setRent } from "../models/RentModel.js";

export async function rent(req, res) {
    try {
        const { responsible, book_id, student, status, date_return } = req.body;

        await setRent(responsible, book_id, student, status, date_return);
    
        res.status(201).send('Rent registered');
    }
    catch(error) {
        console.log(error);
        res.status(500).send('Error renting');
    };
};