import { db } from "../database/MySQL.js";

export async function getUser(username) {
    return new Promise((resolve) => {
        let SQL = `SELECT * FROM usuarios WHERE nome_usuario = '${username}';`
        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export async function setUser(username, password) {
    return new Promise((resolve) => {
        let SQL = `INSERT INTO usuarios(nome_usuario, senha_usuario) VALUES('${username}', '${password}');`

        db.query(SQL, async (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    })
};
