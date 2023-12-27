import express from "express";
import cors from "cors";
import mongoose from "mongoose";



const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ssegunshowunmi:samspasswordxyz123@sams.gw3ib45.mongodb.net/sams?retryWrites=true&w=majority"
);


app.listen(PORT, () => console.log(`server has started on ${PORT}`));
