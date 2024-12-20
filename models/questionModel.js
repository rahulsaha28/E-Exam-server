import mongoose from "mongoose";

// make the Question database schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  options: {
    type: Array,
    require: true,
  },
  ans: {
    type: Number,
    require: true,
  },
  creator: {
    type: Number,
    default: 1,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
