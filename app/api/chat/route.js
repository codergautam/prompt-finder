import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

console.log("API Key", process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req) {
  const { messages } = await req.json();
  console.log("Messages", messages);
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}