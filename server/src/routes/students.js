import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { studentModel } from "../models/student.js";

const router = express.Router();

router.post("/student", async (req, res) => {
  const { firstname, lastname, email, password } = req.body; // Define the email, firstname, and lastname variables by accessing them from req.body with default values
  const student = await studentModel.findOne({ firstname, lastname, email });

  if (student) {
    return res.json({ message: "student already exists" });
  }

 // Hash the password with bcrypt using the generated salt

  const newStudent = new studentModel({
    firstname,
    lastname,
    email,
    password
  });
  await newStudent.save(); // Save the new student to the database
  res.json({ message: "student created" });
});

export { router as studentRouter };
