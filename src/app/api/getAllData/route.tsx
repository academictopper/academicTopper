import { connect } from '@/lib/dbConnect';
import Question from '@/models/Question';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request:NextRequest) {
  try {
    await connect();
    
    const data = await request.json();
    const { board, class: className, subject, chapter, questionArray, pdfile } = data;

    if (!board || !className || !subject || !chapter || !questionArray) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newQuestion = new Question({
      board,
      class: className,
      subject,
      chapter,
      questionArray,
      pdfile,
    });

    await newQuestion.save();
    return NextResponse.json({ message: 'Question saved successfully', question: newQuestion }, { status: 201 });
  } catch (error:any) {
    return NextResponse.json({ error: 'Error saving question', details: error.message }, { status: 500 });
  }
}
