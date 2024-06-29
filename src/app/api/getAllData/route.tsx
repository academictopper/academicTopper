// pages/api/questions.js
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/dbConnect';
import Question, { QuestionDocument } from '@/models/Question'; // Adjust the path according to your project structure
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  await connect();

  const filter = req.url.split('?')[1];
  let queryFilter: { [key: string]: string } = {}

  if (filter) {
    const parts = filter.split('=');
    queryFilter[parts[0]] = parts[1];
  }

  try {
    let questions;
    if (!filter) {
      // No filters provided, fetch all questions
      questions = await Question.find();
    } else {
      // Apply filters if any are provided
      questions = await Question.find(queryFilter);
    }

    return NextResponse.json({ message: 'Questions shown successfully', questions }, { status: 200 });
  } catch (error:any) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error showing questions', details: error.message }, { status: 500 });
  }
}
