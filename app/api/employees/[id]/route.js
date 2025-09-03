import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params; // row_number of employee

  try {
    const res = await axios.get("http://localhost:5678/webhook/employees");
    const employees = res.data;

    const employee = employees.find(emp => emp.row_number.toString() === id);
    if (!employee) {
      return NextResponse.json({ message: "Employee not found" }, { status: 404 });
    }

    return NextResponse.json(employee);
  } catch (error) {
    console.error("Error in API route:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Error fetching employee", error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params; // row_number from URL

  console.log("Deleting employee with row_number:", id);

  try {
    // Send POST request to n8n webhook
    const response = await axios.post(
      "http://localhost:5678/webhook/delete-employee",
      {
        row_number: id
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    console.log("Webhook response:", response.data);

    return NextResponse.json(
      { message: "Employee deleted successfully", data: response.data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting employee:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Error deleting employee", error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}