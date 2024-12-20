import Student from "../models/studentModel.js";

// get student by its id
export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student)
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// create a student
export const createStudent = async (studentBody, res) => {
  try {
    const student = new Student({ ...studentBody });
    student.save();
    return student;
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// student ans update
export const studentAnsUpdate = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const updateAns = req.body;
    const student = await Student.findByIdAndUpdate(studentId, updateAns, {
      new: true,
    });
    if (!student)
      return res
        .status(404)
        .json({ success: false, error: "Update successfull" });
    res
      .status(200)
      .json({ success: true, message: "Submit ans successfully." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
