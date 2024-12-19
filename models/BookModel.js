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

export async function setPublisher(publisher) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO editoras (editora) VALUES ('${publisher}')`;

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
}

export async function setAuthor(author) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO autores (nome_autor) VALUES ('${author}')`;

        db.query(SQL, async(err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
}