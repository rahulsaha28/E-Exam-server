import Joi from "joi";

// validate the Question Schema
const validateQuestionSchema = Joi.object({
  question: Joi.string().required().messages({
    "string.base": "Must be string",
    "any.required": "Must be fill",
  }),
  options: Joi.array().min(4).max(5).required().messages({
    "any.require": "Must be fill",
    "array.min": "Must be 4 or 5",
    "array.max": "Not gatter than 5",
  }),
  ans: Joi.number().required().messages({
    "any.require": "Must be fill",
  }),
});

export const validationCreateQuestion = (req, res, next) => {
  const { error } = validateQuestionSchema.validate(req.body);
  if (error) {
    let errorsMessages = error.details.map((err) => err.message);
    return res.status(400).json({
      success: false,
      error: errorsMessages,
    });
  }
  next();
};
