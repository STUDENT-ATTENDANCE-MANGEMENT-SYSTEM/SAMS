import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {studentRouter} from '../src/routes/students.js';

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true })); 
app.use('/register', studentRouter);

app.use(express.json());
app.use(cors());


mongoose.connect(
  "mongodb+srv://ssegunshowunmi:samspassword123xyz@samsattendance.8u4vq20.mongodb.net/samsattendance?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  useUnifiedTopology: true
}
);

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`server has started on ${PORT}`));
});

