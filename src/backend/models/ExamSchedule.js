import mongoose from "mongoose";

const examScheduleSchema = new mongoose.Schema({
    batch: String,
    year: Number,
    month: Number,
    students: [
        {
            reg_no: { type: String, required: true },
            name: { type: String, required: true },
            marks: [
                {
                    subject: { type: String, required: true },
                    date: { type: String, required: true },
                    time: { type: String, required: true }
                }
            ]
        }
    ]
});

const ExamSchedule = mongoose.model("ExamSchedule", examScheduleSchema);
export { ExamSchedule };
