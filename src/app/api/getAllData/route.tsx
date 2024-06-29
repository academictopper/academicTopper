import { connect } from '@/lib/dbConnect';
import Question, { QuestionDocument } from '@/models/Question'; 
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  await connect();

  const filter = req.url.split('?')[1];
  let queryFilter: { [key: string]: string } = {};

  if (filter) {
    // Splitting the filter string into key-value pairs
    const pairs = filter.split('&');
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      queryFilter[key] = value;
    });
  }

  try {
    let questions;
    if (Object.keys(queryFilter).length === 0) {
      // No filters provided, fetch all questions
      questions = await Question.find();
    } else {
      // Apply filters if any are provided
      questions = await Question.find(queryFilter);
    }

    return NextResponse.json({ message: 'Questions shown successfully', questions }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error showing questions', details: error.message }, { status: 500 });
  }
}
