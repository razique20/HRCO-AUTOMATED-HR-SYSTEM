"use client";
import { useState } from "react";
import axios from "axios";

export default function LeaveRequest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    status:"Pending"
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/leave-requests", form);
      setSuccess("✅ Leave request submitted successfully!");
      setForm({ name: "", email: "", leaveType: "", startDate: "", endDate: "", reason: "" ,status:"Pending"});
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Leave Request</h1>
      {success && <p className="text-green-500 mb-2">{success}</p>}
      <form
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />

        {/* Email */}
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          type="email"
          required
        />

        {/* Leave Type Dropdown */}
        <select
          name="leaveType"
          value={form.leaveType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Leave Type</option>
          <option value="Annual Leave">Annual Leave</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Maternity Leave">Maternity Leave</option>
          <option value="Paternity Leave">Paternity Leave</option>
          <option value="Other">Other</option>
        </select>

        {/* Start Date */}
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* End Date */}
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Reason */}
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Reason"
          className="w-full p-2 border rounded"
          rows={3}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
