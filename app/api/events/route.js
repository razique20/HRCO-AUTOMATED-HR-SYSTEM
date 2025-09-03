// app/api/events/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get("http://localhost:5678/webhook/events");

    const events = res.data;

  
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching events", error: error.message },
      { status: 500 }
    );
  }
}
