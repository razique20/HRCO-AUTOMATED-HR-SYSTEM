"use client";
import { useState } from "react";
import axios from "axios";

export default function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [joinedYear, setJoinedYear] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Active");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      email,
      profession,
      joinedYear,
      phone,
      status,
    };

    try {
      await axios.post("/api/employees", newEmployee);
      setSubmitted(true);

      // Reset form fields
      setName("");
      setEmail("");
      setProfession("");
      setJoinedYear("");
      setPhone("");
      setStatus("Active");

      setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 sec
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>
      {submitted && <p className="text-green-500 mb-4">✅ Employee added successfully!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-lg">
        
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded"
        />

        {/* Profession Dropdown */}
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="p-2 border rounded"
          required
        >
          <option value="">Select Profession</option>
          <option value="Ecommerce">Ecommerce</option>
          <option value="Driver">Driver</option>
          <option value="Manager">Manager</option>
          <option value="Assistant Manager">Assistant Manager</option>
          <option value="Accountant">Accountant</option>
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
          <option value="Helper">Helper</option>
          <option value="Merchandiser">Merchandiser</option>
        </select>

        {/* Joined Year */}
        <input
          type="number"
          placeholder="Joined Year (e.g., 2023)"
          value={joinedYear}
          onChange={(e) => setJoinedYear(e.target.value)}
          className="p-2 border rounded"
          required
        />

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition">
          Add Employee
        </button>
      </form>
    </div>
  );
}
