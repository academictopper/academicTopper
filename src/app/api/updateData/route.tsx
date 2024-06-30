import { connect } from '@/lib/dbConnect';
import Question, { QuestionDocument } from '@/models/Question'; 
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, res: NextResponse) {
  await connect();

  try {
    const { id, ...updateFields } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const updatedQuestion = await Question.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedQuestion) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Question updated successfully', updatedQuestion }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating data:', error);
    return NextResponse.json({ error: 'Error updating question', details: error.message }, { status: 500 });
  }
}
