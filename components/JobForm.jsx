"use client";
import { useState } from "react";
import axios from "axios";

export default function JobForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newJob = { title, description, department, location, employmentType };

    try {
      await axios.post("/api/jobs", newJob);
      setSubmitted(true);
      setTitle("");
      setDescription("");
      setDepartment("");
      setLocation("");
      setEmploymentType("Full-time");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
      {submitted && <p className="text-green-500 mb-4">✅ Job posted successfully!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-lg">

        <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border rounded" required />

        <textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} className="p-2 border rounded" required />

        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className="p-2 border rounded" />

        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="p-2 border rounded" />

        <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} className="p-2 border rounded">
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Post Job
        </button>
      </form>
    </div>
  );
}
