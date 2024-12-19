import { getStudent, setStudent } from "../models/StudentModel.js";

export async function registerStudent(req, res) {
    try {
        const { name, email, group } = req.body;
        await setStudent(name, email, group);

        res.status(201).send('Student registered');

    } catch(error) {
        console.log(error);
        res.status(500).send('Error registering');
    }
}

export async function selectStudent(req, res) {
    try {
        const student = await getStudent();
        res.status(200).send(student);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting student');
    }
}

