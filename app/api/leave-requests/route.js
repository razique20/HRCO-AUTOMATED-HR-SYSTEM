import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    // Ensure status is included
    if (!data.status) {
      data.status = "Pending";
    }

    // Send to n8n webhook for leave approval workflow
    await axios.post(process.env.N8N_LEAVE_WEBHOOK, data);

    return NextResponse.json({ message: "Leave request submitted", data });
  } catch (error) {
    console.error("Leave request error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Error submitting leave request", error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}


export async function GET(){

  try {

    const res = await axios.get(process.env.N8N_LEAVE_REQUESTS); 
    const leave_requests = res.data;  
    return NextResponse.json(leave_requests);
  } catch (error) {
    console.log("ERROR WHILE FETCHING LEAVE REQUESTS");

    return NextResponse.json({ message: "Error fetching leave requests", error: error.response?.data || error.message }, { status: 500 });
    
    
  }

}
