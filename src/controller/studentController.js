import { editStudent, getStudent, removeStudent, setStudent } from "../models/StudentModel.js";

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

export async function updateStudent(req, res) {
    try {
        const { id, name, email, group } = req.body;
        await editStudent(id, name, email, group);
        res.status(200).send('Student updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating student');
    }
};

export async function deleteStudent(req, res) {
    try {   
        const { id } = req.params;

        await removeStudent(id);
        
        res.status(200).send('Student removed');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error removing student');
    }
};

