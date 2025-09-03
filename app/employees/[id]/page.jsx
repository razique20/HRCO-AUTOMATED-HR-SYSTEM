// app/employees/[id]/page.jsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function EmployeeProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`/api/employees/${id}`);
        setEmployee(res.data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{employee.Name}</h1>
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <p><strong>Email:</strong> {employee.Email}</p>
        <p><strong>Phone:</strong> {employee.Phone}</p>
        <p><strong>Profession:</strong> {employee.Profession}</p>
        <p><strong>Status:</strong> {employee.Status}</p>


        <p><strong>Row Number:</strong> {employee.row_number}</p>
        {/* Add more fields as needed, like documents or department */}
      </div>
    </div>
  );
}
