import Exam from "../models/examModel.js";
import { createStudent } from "./studentController.js";

// limit
const limit = 5;

// get all exam
export const getAllExam = async (req, res, next) => {
  try {
    const exams = await Exam.find().populate({
      path: "questions",
      populate: "question",
    });
    res.status(200).json({ success: true, data: exams });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// get a limit of exam
export const getExamByEachPage = async (req, res, next) => {
  try {
    const exams = await Exam.find()
      .skip((parseInt(req.params.page) - 1) * limit)
      .limit(limit)
      .populate({ path: "questions", populate: "question" });
    res.status(200).json({ success: true, data: exams });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get exam by id
export const getExamById = async (req, res, next) => {
  try {
    const exam = await Exam.findById(req.params.id).populate({
      path: "questions",
      populate: "question",
    });
    if (!exam)
      return res.status(404).json({ success: false, error: "Exam not found" });
    res.status(200).json({ success: true, data: exam });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// create an exam
export const createExam = async (req, res, next) => {
  try {
    const { name, passcode, questions, totalTime } = req.body;
    const exam = new Exam({ name, passcode, questions, totalTime });
    await exam.save();
    res.status(200).json({
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// delete an exam by id
export const deleteExamById = async (req, res, next) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);

    if (!exam)
      return res.status(404).json({ success: false, error: "Exam not found" });
    res.status(200).json({ success: true, message: "Exam deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// update the exam by id
export const updateExamById = async (req, res, next) => {
  try {
    const examId = req.params.id;
    const updates = req.body;
    const exam = await Exam.findByIdAndUpdate(examId, updates, { new: true });
    if (!exam)
      return res.status(404).json({ success: false, error: "Fail to update" });
    res.status(200).json({ success: true, data: exam });
  } catch (error) {
    res.stauts(500).json({ success: false, error: error.message });
  }
};

// ---------------------------------------------------
// when studen want to start the exam
export const addStudentToTheExam = async (req, res, next) => {
  try {
    const student = await createStudent(req.body, res);
    const exam = await Exam.findById(req.params.id);
    exam.students.push(student._id);
    await exam.save();
    res.status(200).json({ success: true, data: exam });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// exam paper submission by a student
export const examSubmission = (req, res, next) => {};
