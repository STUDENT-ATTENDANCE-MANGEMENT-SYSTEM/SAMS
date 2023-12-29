import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { studentModel } from "../models/student.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const student = await studentModel.findOne({ email });

  if (user) {
    return res.json({ message: "user exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newStudent = new studentModel({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
  await newStudent.save();

  res.json({ message: "users created" });
});

export { router as studentRouter };
