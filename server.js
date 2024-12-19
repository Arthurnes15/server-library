import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from "cors";
import routes from './routes/routes.js';
import { db } from './database/MySQL.js';
import authentication from './routes/auth/authentication.js';

const corsOptions = {
    origin: process.env.CORS_URL,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authentication);
app.use(routes);


app.get("/getGroups", (req, res) => {
    let SQL = "SELECT * FROM turmas ORDER BY id_turma ASC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/getGroupsOrderName", (req, res) => {
    let SQL = "SELECT * FROM turmas ORDER BY nome_turma ASC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/getStatus", (req, res) => {
    let SQL = "SELECT * FROM status";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/getBooks", (req, res) => {
    let SQL = "SELECT l.id_livro, l.n_exemplares, l.volume_livro, l.ISBN, l.CDD, g.genero, g.id_genero, l.data_publicacao, l.url_imagem, l.nome_livro, a.nome_autor, a.id_autor, e.editora, e.id_editora FROM livros AS l JOIN autores AS a ON l.autor_id = id_autor JOIN generos AS g ON l.genero_id = id_genero JOIN editoras AS e ON l.editora_id = id_editora ORDER BY nome_livro ASC LIMIT 100";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/getAllBooks", (req, res) => {
    let SQL = "SELECT l.id_livro, l.n_exemplares, l.volume_livro, l.ISBN, l.CDD, g.id_genero, g.genero, l.data_publicacao, l.url_imagem, l.nome_livro, a.id_autor, a.nome_autor, e.editora, e.id_editora FROM livros AS l JOIN autores AS a ON l.autor_id = id_autor JOIN generos AS g ON l.genero_id = id_genero JOIN editoras AS e ON l.editora_id = id_editora ORDER BY nome_livro ASC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/getAuthors", (req, res) => {
    let SQL = "SELECT * FROM autores ORDER BY id_autor ASC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/getGenders", (req, res) => {
    let SQL = "SELECT * FROM generos ORDER BY id_genero ASC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/getPublishers", (req, res) => {
    let SQL = "SELECT * FROM editoras ORDER BY id_editora ASC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/rents", (req, res) => {
    let SQL = "SELECT a.id_aluguel, a.responsavel_aluguel, a.data_aluguel, a.data_devolucao, l.url_imagem, l.nome_livro, al.nome_aluno, t.nome_turma, s.tipo FROM alugueis AS a JOIN livros AS l ON a.livro_id = id_livro JOIN alunos AS al ON a.aluno_id = id_aluno JOIN turmas AS t ON al.turma_id = id_turma JOIN status AS s ON a.status_id = id_status WHERE id_status=1;"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    })
});

app.get("/rentsPending", (req, res) => {
    let SQL = "SELECT a.id_aluguel, a.responsavel_aluguel, a.data_aluguel, a.data_devolucao, l.url_imagem, l.nome_livro, al.nome_aluno, t.nome_turma, s.tipo FROM alugueis AS a JOIN livros AS l ON a.livro_id = id_livro JOIN alunos AS al ON a.aluno_id = id_aluno JOIN turmas AS t ON al.turma_id = id_turma JOIN status AS s ON a.status_id = id_status WHERE id_status=2;"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

app.get("/rentsReturned", (req, res) => {
    let SQL = "SELECT a.id_aluguel, a.responsavel_aluguel, a.data_aluguel, a.data_devolucao, l.url_imagem, l.nome_livro, al.nome_aluno, t.nome_turma, s.tipo FROM alugueis AS a JOIN livros AS l ON a.livro_id = id_livro JOIN alunos AS al ON a.aluno_id = id_aluno JOIN turmas AS t ON al.turma_id = id_turma JOIN status AS s ON a.status_id = id_status WHERE id_status=3;"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

// PUT QUERYS

app.put("/edit", (req, res) => {
    const { id, book, author, publisher, gender, isbn, amount, cdd, volume } = req.body;
    let SQL = `UPDATE livros SET ISBN = '${isbn}', CDD = '${cdd}', nome_livro = '${book}', n_exemplares = ${amount}, volume_livro = ${volume},  editora_id = ${publisher}, genero_id = ${gender}, autor_id = ${author} WHERE id_livro = ${id};`

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.put("/editStatus", (req, res) => {
    const { status_id, rent_id } = req.body;
    let SQL = `UPDATE alugueis SET status_id=${status_id} WHERE id_aluguel=${rent_id}`;

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
});

app.put("/editStudent", (req, res) => {
    const { id, name, email, group } = req.body;
    let SQL = `UPDATE alunos SET nome_aluno='${name}', email_aluno='${email}', turma_id=${group} WHERE id_aluno=${id}`;

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

app.put("/editRent", (req, res) => {
    const { rent_id, date_return } = req.body;
    let SQL = `UPDATE alugueis SET data_devolucao = '${date_return}'  WHERE id_aluguel = ${rent_id};`

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    });
});

app.put("/editGroup", (req, res) => {
    const { id, group } = req.body;
    let SQL = `UPDATE turmas SET nome_turma = '${group}' WHERE id_turma = ${id}`;

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// DELETE QUERYS

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = `DELETE FROM livros WHERE id_livro = ${id}`
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.delete("/deleteStudent/:id", (req, res) => {
    const { id } = req.params;
    let SQL = `DELETE FROM alunos WHERE id_aluno = ${id}`
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.delete("/deleteRent/:id", (req, res) => {
    const { id } = req.params;
    let SQL = `DELETE FROM alugueis WHERE id_aluguel = ${id}`;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.delete("/deleteGroup/:id", (req, res) => {
    const { id } = req.params;
    let SQL = `DELETE FROM turmas WHERE id_turma = ${id}`;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.listen(3001, () => {
    console.log("rodando servidor")
});

