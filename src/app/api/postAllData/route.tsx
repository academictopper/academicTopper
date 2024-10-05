import { connect } from '@/lib/dbConnect';
import Question from '@/models/Question';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request:NextRequest) {
  try {
    await connect();
    
    const data = await request.json();
    const { board, class: className, subject, chapter, questionArray, pdfile, isFeatured, exercise, image2 } = data;

    if (!board || !className || !subject || !chapter || !questionArray) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Condition to include exercise only if the subject is "Mathematics"
    const query: any = { board, class: className, subject, chapter };
    
    if (subject === "Mathematics") {
      query.exercise = exercise ? exercise : null;
    }

    // Check if a question with the same board, class, subject, chapter, and exercise (if applicable) already exists
    const existingQuestion = await Question.findOne(query);

    if (existingQuestion) {
      return NextResponse.json({ error: 'A question with the same board, class, subject, chapter, and exercise already exists' }, { status: 409 });
    }

    const newQuestion = await new Question({
      board,
      class: className,
      subject,
      chapter,
      questionArray,
      pdfile,
      isFeatured,
      exercise,
      image2
    });

    await newQuestion.save();
    return NextResponse.json({ message: 'Question saved successfully', question: newQuestion }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Error saving question', details: error.message }, { status: 500 });
  }
}
