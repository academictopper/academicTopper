
  import { NextRequest, NextResponse } from "next/server";
  
  
import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
    const { question, answer } =await req.json()
  const url = 'https://api.openai.com/v1/chat/completions'
  const messages=`Question: ${question}\nAnswer: ${answer}\nPlease check if the answer is correct or suggest changes if needed.`

  const body = JSON.stringify({
    messages,
    model: 'gpt-3.5-turbo',
    stream: false,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      body,
    })
    const data = await response.json()
    return NextResponse.json({
                message: "Data processed successfully",
                data: data,
                success: true,
              });
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}