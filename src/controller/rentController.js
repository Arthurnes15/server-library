import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import { editStatusRent, getRents, getRentsPending, getRentsReturned, getStatus, removeRent, setRent, renewRent } from "../models/RentModel.js";

export async function rent(req, res) {
    try {
        const { responsible, book_id, student, status, date_return } = req.body;

        await setRent(responsible, book_id, student, status, date_return);

        res.status(201).send('Rent registered');
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error renting');
    };
};

export async function selectRents(req, res) {
    try {
        const rents = await getRents();
        res.status(200).send(rents);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting rents');
    }
}

export async function selectRentsPending(req, res) {
    try {
        const rents = await getRentsPending();
        res.status(200).send(rents);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting rents');
    }
}

export async function selectRentsReturned(req, res) {
    try {
        const rents = await getRentsReturned();
        res.status(200).send(rents);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting rents');
    }
}

export async function selectStatus(req, res) {
    try {
        const status = await getStatus();
        res.status(200).send(status);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting status');
    }
}

export async function updateStatusRent(req, res) {
    try {
        const { status_id, rent_id } = req.body;

        await editStatusRent(status_id, rent_id);

        res.status(200).send('Rent status updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating rent status');
    }
};

export async function updateDateRent(req, res) {
    try {
        const { rent_id, date_return } = req.body;

        await renewRent(rent_id, date_return);

        res.status(200).send('Rent renewed');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error renewing rent');
    }
};

export async function deleteRent(req, res) {
    try {
        const { id } = req.params;

        await removeRent(id);

        res.status(200).send('Rent removed');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error removing rent');
    }
};