import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    department: { type: String },
    location: { type: String },
    employmentType: { type: String, enum: ["Full-time", "Part-time", "Contract"], default: "Full-time" },
    status: { type: String, enum: ["Open", "Closed"], default: "Open" },
    postedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
