import { connect } from '@/lib/dbConnect';
import Question, { QuestionDocument } from '@/models/Question'; 
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  await connect();

  try {
    const { id, question } = await req.json();

    if (!id || !question) {
      return NextResponse.json({ error: 'ID and question are required' }, { status: 400 });
    }

    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { $pull: { questionArray: { question: question } } },
      { new: true }
    );

    if (!updatedQuestion) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Question deleted successfully', updatedQuestion }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting data:', error);
    return NextResponse.json({ error: 'Error deleting question', details: error.message }, { status: 500 });
  }
}
