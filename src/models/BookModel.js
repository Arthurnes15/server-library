import { db } from "../database/MySQL.js";

export async function setBook(book, author, gender, publisher, isbn, amount, volume, cdd,  publication, image) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO livros(ISBN, nome_livro, volume_livro, CDD, n_exemplares, data_publicacao, url_imagem, autor_id, genero_id, editora_id) VALUES('${isbn}', '${book}', ${volume}, '${cdd}', ${amount}, '${publication}', '${image}', ${author}, ${gender}, '${publisher}');`

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export function getBooks() {
    return new Promise((resolve) => {
        let SQL = "SELECT l.id_livro, l.n_exemplares, l.volume_livro, l.ISBN, l.CDD, g.genero, g.id_genero, l.data_publicacao, l.url_imagem, l.nome_livro, a.nome_autor, a.id_autor, e.editora, e.id_editora FROM livros AS l JOIN autores AS a ON l.autor_id = id_autor JOIN generos AS g ON l.genero_id = id_genero JOIN editoras AS e ON l.editora_id = id_editora ORDER BY nome_livro ASC LIMIT 100"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    }); 
}

export function getAllBooks() {
    return new Promise((resolve) => {
        let SQL = "SELECT l.id_livro, l.n_exemplares, l.volume_livro, l.ISBN, l.CDD, g.id_genero, g.genero, l.data_publicacao, l.url_imagem, l.nome_livro, a.id_autor, a.nome_autor, e.editora, e.id_editora FROM livros AS l JOIN autores AS a ON l.autor_id = id_autor JOIN generos AS g ON l.genero_id = id_genero JOIN editoras AS e ON l.editora_id = id_editora ORDER BY id_livro ASC"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    }); 
}

export function editBooks(isbn, cdd, book, amount, volume, publisher, gender, author, id) {
    return new Promise((resolve) => {
        let SQL = `UPDATE livros SET ISBN = '${isbn}', CDD = '${cdd}', nome_livro = '${book}', n_exemplares = ${amount}, volume_livro = ${volume},  editora_id = ${publisher}, genero_id = ${gender}, autor_id = ${author} WHERE id_livro = ${id};`

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};

export function removeBooks(id) {
    return new Promise((resolve) => {
        let SQL = `DELETE FROM livros WHERE id_livro = ${id}`

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};

export async function setPublisher(publisher) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO editoras (editora) VALUES ('${publisher}')`;

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};

export function getPublishers() {
    return new Promise((resolve) => {
        let SQL = "SELECT * FROM editoras ORDER BY id_editora ASC"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    }); 
};

export function getGenders() {
    return new Promise((resolve) => {
        let SQL = "SELECT * FROM generos ORDER BY id_genero ASC"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    }); 
};

export async function setAuthor(author) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO autores (nome_autor) VALUES ('${author}')`;

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};

export function getAuthors() {
    return new Promise((resolve) => {
        let SQL = "SELECT * FROM autores ORDER BY id_autor ASC"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    }); 
}