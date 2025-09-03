// app/employees/page.jsx
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("/api/employees");
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

const handleDeleteEmployee = async (row_number, e) => {
  // e.stopPropagation(); // Prevent navigation from Link

  if (!confirm("Are you sure you want to delete this employee?")) return;

  try {
    // Optional: Show loading state
    console.log("Deleting employee:", row_number);

    await axios.delete(`/api/employees/${row_number}`);

    // Update UI
    setEmployees(prev => prev.filter(emp => emp.row_number !== row_number));

    console.log("Employee deleted successfully");
  } catch (error) {
    console.error("Error deleting employee:", error.response?.data || error.message);
    alert("Failed to delete employee. Please try again.");
  }
};



  return (
    <div className="p-6 space-y-6">
      {/* Header + Add Employee Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-3xl font-bold">Employees</h1>
        <Link href="/employees/add-employee">
          <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
            + Add Employee
          </button>
        </Link>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.length > 0 ? (
          employees.map((emp, idx) => (

            
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-lg font-semibold mb-2 truncate">{emp.Name}</p>
                <p className="text-gray-600 mb-1 truncate">Email: {emp.Email}</p>
                <p className="text-gray-500 text-sm mb-1">
                  Status: <span className="font-medium">{emp.Status || "Pending"}</span>
                </p>
                <p className="text-gray-400 text-xs mt-2">Row: {emp.row_number}</p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Link href={`/employees/${emp.row_number}`} key={emp.row_number}>
                <button className="text-blue-500 hover:underline text-sm">Edit</button>
                </Link>
                <button onClick={handleDeleteEmployee.bind(this, emp.row_number)} className="text-red-500 hover:underline text-sm">Delete</button>
              </div>
            </div>
            
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No employees found.
          </div>
        )}
      </div>
    </div>
  );
}
