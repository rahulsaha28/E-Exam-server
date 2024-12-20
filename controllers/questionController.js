import Question from "../models/questionModel.js";

// par page limit
const limit = 5;

// get all question from database
export const getAllQuestion = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// get question by id
export const getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question)
      return res
        .status(404)
        .json({ success: false, error: "Question not found" });
    res.status(200).json({ success: true, data: question });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get questions in each page by a limit
export const getQuestionByEachPage = async (req, res, next) => {
  console.log(req.params);
  try {
    const question = await Question.find()
      .skip((parseInt(req.params.page) - 1) * limit)
      .limit(limit);
    res.status(200).json({ success: true, data: question });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// post a question in Database
export const createQuestion = async (req, res, next) => {
  try {
    const { question, options, ans } = req.body;
    const questionRes = new Question({ question, options, ans });
    await questionRes.save();
    res.status(201).json({
      success: true,
      data: questionRes,
      message: "Question added successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// delete a question by ID
export const deleteQuestion = async (req, res, next) => {
  const question = await Question.findByIdAndDelete(req.params.id);
  if (!question) {
    return res
      .status(404)
      .json({ success: false, message: "Question not found." });
  }
  res.status(200).json({ success: true, message: "Question deleted" });
  try {
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
