// 📁 app/api/tasks/route.ts
import { NextResponse } from 'next/server';

// Handle GET requests (e.g., /api/tasks)
export async function GET() {
  // 1. Fetch data from your database (see step 3)
  const tasks = [{ id: 1, text: "Buy milk" }, { id: 2, text: "Walk dog" }];

  // 2. Return data as JSON response
  return NextResponse.json(tasks, { status: 200 });
}

// Handle POST requests (e.g., /api/tasks)
export async function POST(request: Request) {
  // Get the request body
  const data = await request.json();

  // 1. Process the data and save to your database (see step 3)
  const newTask = { id: Date.now(), ...data }; // Example of a new task

  // 2. Return a success response
  return NextResponse.json(newTask, { status: 201 });
}