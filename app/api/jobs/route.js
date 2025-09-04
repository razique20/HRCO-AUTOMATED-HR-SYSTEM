import { NextResponse } from "next/server";

import { connectDB } from "@/lib/config/db";
import Job from "@/lib/models/Job";



export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find({});
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new job
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const job = await Job.create(data);
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}