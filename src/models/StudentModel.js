import { db } from "../database/MySQL.js";

export async function setStudent(name, email, phone_number, group) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO alunos (nome_aluno, email_aluno, telefone_aluno, turma_id) VALUES ('${name}', '${email}', '${phone_number}', ${group})`;
        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export async function getStudent() {
    return new Promise((resolve) => {
        let SQL = "SELECT a.id_aluno, a.nome_aluno, a.email_aluno, a.telefone_aluno, t.id_turma, t.nome_turma FROM alunos AS a JOIN turmas AS t ON a.turma_id = id_turma;"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export async function editStudent(id, name, email, phone_number, group) {
    return new Promise((resolve) => {
        let SQL = `UPDATE alunos SET nome_aluno='${name}', email_aluno='${email}', telefone_aluno='${phone_number}', turma_id=${group} WHERE id_aluno=${id}`;

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export async function removeStudent(id) {
    return new Promise((resolve) => {
        let SQL = `DELETE FROM alunos WHERE id_aluno = ${id}`;

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};