import { db } from "../database/MySQL.js";

export async function setRent(responsible, book_id, student, status, date_return) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO alugueis (responsavel_aluguel, livro_id, aluno_id, status_id, data_devolucao)
        VALUES ('${responsible}', ${book_id}, ${student}, ${status}, '${date_return}');`

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};