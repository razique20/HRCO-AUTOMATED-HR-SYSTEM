import { NextResponse } from "next/server";
import axios from "axios";



export async function POST(req) {
  const { name,
      email,
      profession,
      joinedYear,
      phone,
      status, } = await req.json();

  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    // Send employee data to n8n webhook
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name,
      email,
      profession,
      joinedYear,
      phone,
      status }),
    });

    if (!res.ok) {
      throw new Error("Failed to trigger n8n workflow");
    }

    return NextResponse.json({ message: "Employee added and workflow triggered!" });
  } catch (error) {
    return NextResponse.json({ message: "Error sending data to n8n", error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const res = await axios.get("http://localhost:5678/webhook/employees");
    const employees = res.data;

    return NextResponse.json(employees);
  } catch (error) {
    console.error("Error in API route:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Error fetching employees", error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}