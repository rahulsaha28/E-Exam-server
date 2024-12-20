import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  exam: {
    type: String,
    require: true,
  },
  ans: {
    type: Array,
  },

  totalMark: {
    type: Number,
    default: 0,
  },
  wrongMark: {
    type: Number,
    default: 0,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
