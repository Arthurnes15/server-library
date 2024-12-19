import { setAuthor, setBook, setPublisher } from "../models/BookModel.js";

export async function registerBook(req, res) {
    try {
        const { book, author, gender, publisher, isbn, amount, volume, cdd, publication, image } = req.body;

        await setBook(book, author, gender, publisher, isbn, amount, volume, cdd, publication, image)

        res.status(200).send('Book regitered');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering');
    };
};

export async function registerPublisher(req, res) {
    try {
        const { new_publisher } = req.body;
        await setPublisher(new_publisher);
        res.status(200).send('Publisher registered');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering');
    };
};

export async function registerAuthor(req, res) {
    try {
        const { new_author } = req.body;
        await setAuthor(new_author);
        res.status(200).send('Author regitered');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering');
    };
};