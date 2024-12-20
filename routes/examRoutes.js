import express from "express";
import {
  addStudentToTheExam,
  createExam,
  deleteExamById,
  getAllExam,
  getExamByEachPage,
  getExamById,
  updateExamById,
} from "../controllers/examController.js";

const router = express.Router();

// exam api
router.get("/", getAllExam);
router.get("/:id", getExamById);
router.get("/page/:page", getExamByEachPage);
router.post("/", createExam);
router.delete("/:id", deleteExamById);
router.put("/:id", updateExamById);

// exam & student mix api
router.post("/addStudent/:id", addStudentToTheExam);
export default router;
