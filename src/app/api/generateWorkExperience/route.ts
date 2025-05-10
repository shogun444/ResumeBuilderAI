import { GenerateExperience, GenerateWorkExperience, workexperience } from "@/lib/validation";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as dotenv from 'dotenv';

dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const input: GenerateExperience = await req.json();
    const userMessage = input.prompt;  // Assume input.description is the string entered by the user.

    // Refine the system message for better guidance to the model
    const systemMessage = `You are an expert resume Generator AI. Your task is to generate a single work experience based on the user input. `;

    

    // Log the request data for debugging
    console.log("Request Data:", JSON.stringify({ text: `${systemMessage}\n\n${input.prompt}` }, null, 2));

    // Using the refined user input
    const res = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemMessage}\n\n${input.prompt}` }]
        }
      ]
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = res.data;
    console.log("Gemini API Response:", JSON.stringify(data,null,2));

    const responseText =  JSON.stringify(data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim());
  
    return new Response(responseText, { status: 200 });

  } catch (error) {
    console.error("Error generating work experience:", error);
    return new Response('Something went wrong. Please try again later.', { status: 400 });
  }
}
