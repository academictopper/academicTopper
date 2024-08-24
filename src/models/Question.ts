import mongoose, { Document, Model, Schema } from 'mongoose';

interface IQuestion {
  board: string;
  class: string;
  subject: string;
  chapter: string;
  exercise?:string;
  questionArray: {
    question: string;
    answer: string;
    image?: string;
    image2?: string;
  }[];
  pdfile?: string;
  isFeatured?:boolean
}

export interface QuestionDocument extends IQuestion, Document {}

const QuestionSchema: Schema<QuestionDocument> = new Schema({
  board: { type: String, required: true },
  class: { type: String, required: true },
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  questionArray: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
      image: { type: String },
      image2:{type:String}
    },
  ],
  pdfile: { type: String },
  isFeatured:{type:Boolean},
  exercise:{ type: String, required: false }
});

const Question: Model<QuestionDocument> = mongoose.models.Question || mongoose.model<QuestionDocument>('Question', QuestionSchema);

export default Question;
