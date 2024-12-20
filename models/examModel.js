import mongoose from "mongoose";

// Exam model database schema
const examSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  passcode: {
    type: String,
    require: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  status: {
    type: String,
    enum: ["live", "hidden", "inactive"],
    default: "hidden",
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  totalTime: {
    type: Object,
    default: {
      hour: 0,
      min: 5,
    },
  },
});

const Exam = mongoose.model("Exam", examSchema);

export default Exam;
