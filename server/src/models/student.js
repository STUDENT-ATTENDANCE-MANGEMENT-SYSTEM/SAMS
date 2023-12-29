import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    })  

export const studentModel = mongoose.model('students', studentSchema);