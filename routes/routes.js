import express from 'express';
const router = express.Router();
import { registerUser } from '../controller/userController.js';
import { registerAuthor, registerBook, registerPublisher } from '../controller/bookController.js';
import { registerStudent, selectStudent } from '../controller/studentController.js';
import { rent } from '../controller/rentController.js';

//POST ROUTES
router.post('/registerUser', registerUser);
router.post('/registerBook', registerBook);
router.post('/registerStudent', registerStudent);
router.post('/registerPublisher', registerPublisher);
router.post('/registerAuthor', registerAuthor);
router.post('/rent', rent);

// GET ROUTES
router.get('/getStudents', selectStudent);

export default router