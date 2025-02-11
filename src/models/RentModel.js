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

export async function getRents() {
    return new Promise((resolve) => {
        let SQL = "SELECT a.id_aluguel, a.responsavel_aluguel, a.data_aluguel, a.data_devolucao, l.url_imagem, l.nome_livro, al.nome_aluno, t.nome_turma, s.tipo FROM alugueis AS a JOIN livros AS l ON a.livro_id = id_livro JOIN alunos AS al ON a.aluno_id = id_aluno JOIN turmas AS t ON al.turma_id = id_turma JOIN status AS s ON a.status_id = id_status WHERE id_status=1;"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export async function getRentsPending() {
    return new Promise((resolve) => {
        let SQL = "SELECT a.id_aluguel, a.responsavel_aluguel, a.data_aluguel, a.data_devolucao, l.url_imagem, l.nome_livro, al.nome_aluno, t.nome_turma, s.tipo FROM alugueis AS a JOIN livros AS l ON a.livro_id = id_livro JOIN alunos AS al ON a.aluno_id = id_aluno JOIN turmas AS t ON al.turma_id = id_turma JOIN status AS s ON a.status_id = id_status WHERE id_status=2;"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export async function getRentsReturned() {
    return new Promise((resolve) => {
        let SQL = "SELECT a.id_aluguel, a.responsavel_aluguel, a.data_aluguel, a.data_devolucao, l.url_imagem, l.nome_livro, al.nome_aluno, t.nome_turma, s.tipo FROM alugueis AS a JOIN livros AS l ON a.livro_id = id_livro JOIN alunos AS al ON a.aluno_id = id_aluno JOIN turmas AS t ON al.turma_id = id_turma JOIN status AS s ON a.status_id = id_status WHERE id_status=3;"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export async function getStatus() {
    return new Promise((resolve) => {
        let SQL = "SELECT * FROM status;"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export async function getRentsDates() {
    return new Promise((resolve) => {
        let SQL = "SELECT id_aluguel, data_devolucao FROM alugueis WHERE status_id != 3;"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    })
}

export async function editStatusRent(status_id, rent_id) {
    return new Promise((resolve) => {
        let SQL = `UPDATE alugueis SET status_id=${status_id} WHERE id_aluguel=${rent_id}`

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};

export async function renewRent(rent_id, date_return) {
    return new Promise((resolve) => {
        let SQL = `UPDATE alugueis SET data_devolucao = '${date_return}'  WHERE id_aluguel = ${rent_id};`

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};

export async function removeRent(id) {
    return new Promise((resolve) => {
        let SQL = `DELETE FROM alugueis WHERE id_aluguel = ${id}`;

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};