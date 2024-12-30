import { db } from "../database/MySQL.js";

export function getGroup() {
    return new Promise((resolve) => {
        let SQL = "SELECT * FROM turmas ORDER BY id_turma ASC"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export function getGroupsOrderName() {
    return new Promise((resolve) => {
        let SQL = "SELECT * FROM turmas ORDER BY nome_turma ASC"

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

export function editGroup(id, group) {
    return new Promise((resolve) => {
        let SQL = `UPDATE turmas SET nome_turma = '${group}' WHERE id_turma = ${id}`;

        db.query(SQL, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};