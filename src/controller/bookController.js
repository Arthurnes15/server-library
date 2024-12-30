import { editBooks, getAllBooks, getAuthors, getBooks, getGenders, getPublishers, removeBooks, setAuthor, setBook, setPublisher } from "../models/BookModel.js";

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

export async function selectBooks(req, res) {
    try {
        const books = await getBooks();
        res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting books');
    }
};


export async function selectAllBooks(req, res) {
    try {
        const allBooks = await getAllBooks();
        res.status(200).send(allBooks);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting books');
    }
}

export async function updateBooks(req, res) {
    try {
        const { isbn, cdd, book, amount, volume, publisher, gender, author, id } = req.body;
        
        await editBooks(isbn, cdd, book, amount, volume, publisher, gender, author, id);

        res.status(200).send('Book updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating books');
    }
}

export async function deleteBooks(req, res) {
    try {
        const { id } = req.params;
        
        await removeBooks(id);

        res.status(200).send('Book removed');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error removing books');
    }
}

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

export async function selectPublishers(req, res) {
    try {
        const publishers = await getPublishers();
        res.status(200).send(publishers);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting publishers');
    }
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

export async function selectAuthors(req, res) {
    try {
        const authors = await getAuthors();
        res.status(200).send(authors);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting authors');
    }
};

export async function selectGenders(req, res) {
    try {
        const genders = await getGenders();
        res.status(200).send(genders);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting genders');
    }
};