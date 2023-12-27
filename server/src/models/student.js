import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    })  

export const studentModel = mongoose.model('students', studentSchema);