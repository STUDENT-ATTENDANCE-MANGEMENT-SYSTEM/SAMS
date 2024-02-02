const Lecturer = require("../models/Lecturer");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getAllLecturers = asyncHandler(async (req, res) => {
  const lecturer = await Lecturer.find().select("-password").lean();

  if (!lecturer?.length) {
    return res.status(400).json({ message: "No Lecturer found" });
  }

  res.json(lecturer);
});

const createNewLecturer = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, institution } = req.body;

  if (!firstname || !lastname || !email || !password || !institution) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const duplicate = await Lecturer.findOne({ email }).lean().exec();

  if (duplicate) {
    return res
      .status(409)
      .json({ message: `Lecturer with ${email} already exists` });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const lecturerObject = {
    firstname,
    lastname,
    email,
    password: hashedPwd,
    institution,
  };

  const lecturer = await Lecturer.create(lecturerObject);

  if (lecturer) {
    res
      .status(201)
      .json({ message: `${lastname}, your account has been created` });
  } else {
    res.status(400).json({ message: "Invalid Lecturer data received" });
  }
});

const updateLecturer = asyncHandler(async (req, res) => {
  const { id, firstname, lastname, email, password, institution } = req.body;

  if (!id || !firstname || !lastname || !email || !institution) {
    return res
      .status(400)
      .json({ message: "All fields except password are required" });
  }

  const lecturer = await Lecturer.findById(id).exec();

  if (!lecturer) {
    return res.status(400).json({ message: "Lecturer not found" });
  }

  const duplicate = await Lecturer.findOne({ email }).lean().exec();

  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate email" });
  }

  lecturer.firstname = firstname;
  lecturer.lastname = lastname;
  lecturer.email = email;
  lecturer.institution = institution;

  if (password) {
    // Hash password
    lecturer.password = await bcrypt.hash(password, 10); // salt rounds
  }

  const updatedLecturer = await Lecturer.save();

  res.json({ message: `${updatedLecturer.email} updated` });
});

const deleteLecturer = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Lecturer ID Required" });
  }

  const lecturer = await Lecturer.findById(id).exec();

  if (!lecturer) {
    return res.status(400).json({ message: "Lecturer not found" });
  }

  const result = await Lecturer.deleteOne();

  const reply = ` ${result.email} with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getAllLecturers,
  createNewLecturer,
  updateLecturer,
  deleteLecturer,
};
