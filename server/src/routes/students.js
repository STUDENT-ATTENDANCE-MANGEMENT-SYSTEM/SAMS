import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { studentModel } from '../models/student';


const router = express.Router();


router.post('/register', async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    const student = await studentModel.findOne({email});

    res.json(student);

   
})






export {router as studentRouter}