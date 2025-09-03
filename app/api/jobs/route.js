import { NextResponse } from "next/server";

import { connectDB } from "@/lib/config/db";



const LoadDB = async() => {
  await connectDB();
}


LoadDB();