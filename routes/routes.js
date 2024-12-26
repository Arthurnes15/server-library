import express from 'express';
const router = express.Router();
import { registerUser } from '../controller/userController.js';
import { deleteBooks, registerAuthor, registerBook, registerPublisher, selectAllBooks, selectAuthors, selectBooks, selectGenders, selectPublishers, updateBooks } from '../controller/bookController.js';
import { deleteStudent, registerStudent, selectStudent, updateStudent } from '../controller/studentController.js';
import { deleteRent, rent, selectRents, selectRentsPending, selectRentsReturned, selectStatus, updateDateRent, updateStatusRent } from '../controller/rentController.js';
import { selectGroup, selectGroupOrderName, updateGroup } from '../controller/groupController.js';

//POST ROUTES
router.post('/registerUser', registerUser);
router.post('/registerBook', registerBook);
router.post('/registerStudent', registerStudent);
router.post('/registerPublisher', registerPublisher);
router.post('/registerAuthor', registerAuthor);
router.post('/rent', rent);

// GET ROUTES
router.get('/getBooks', selectBooks);
router.get('/getAllBooks', selectAllBooks);
router.get('/getAuthors', selectAuthors);
router.get('/getPublishers', selectPublishers);
router.get('/getGenders', selectGenders);
router.get('/getStudents', selectStudent);
router.get('/getGroups', selectGroup);
router.get('/getGroupsOrderName', selectGroupOrderName);
router.get('/getRents', selectRents);
router.get('/getRentsPending', selectRentsPending);
router.get('/getRentsReturned', selectRentsReturned);
router.get('/getStatus', selectStatus);

// PUT ROUTES
router.put('/editBook', updateBooks);
router.put('/editStatus', updateStatusRent);
router.put('/editStudent', updateStudent);
router.put('/editDateRent', updateDateRent);
router.put('/editGroup', updateGroup);

// DELETE ROUTES
router.delete('/delete/:id', deleteBooks);
router.delete('/deleteStudent/:id',deleteStudent);
router.delete('/deleteRent/:id', deleteRent);

export default router