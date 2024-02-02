const express = require("express");
const router = express.Router();
const lecturerController = require("../controllers/lecturerController");

router
  .route("/")
  .get(lecturerController.getAllLecturers)
  .post(lecturerController.createNewlecturer)
  .patch(lecturerController.updateLecturer)
  .delete(lecturerController.deletelecturer);

module.exports = router;
