// all import
import express from "express";
const router = express.Router();

import {
  createQuestion,
  deleteQuestion,
  getAllQuestion,
  getQuestionByEachPage,
  getQuestionById,
} from "../controllers/questionController.js";
import { validationCreateQuestion } from "../middlewares/validationMiddleware.js";

// CROUD operation
router.get("/", getAllQuestion);
router.get("/:id", getQuestionById);
router.get("/page/:page", getQuestionByEachPage);
router.post("/", validationCreateQuestion, createQuestion);
router.delete("/:id", deleteQuestion);

export default router;
