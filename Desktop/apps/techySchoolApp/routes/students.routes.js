const express = require('express');
const router = express.Router();
const { createStudents, getStudents, updateStudents, getStudentById, getStudentByName, deleteStudent, getStudentByEmail } = require('../controllers/students.controllers');


router.post('/create-student', createStudents);
router.get('/get-students', getStudents);
router.put('/update-student/:id', updateStudents);
router.get('/get-student/:id', getStudentById);
router.get('/get-student-by-name', getStudentByName);
router.delete('/delete-student/:id', deleteStudent);
router.get('/get-student-by-email', getStudentByEmail);






module.exports = router;