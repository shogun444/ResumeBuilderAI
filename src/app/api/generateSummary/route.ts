import { generateSummarySchema, generateSummaryType } from "@/lib/validation";
import { NextRequest } from "next/server";
import * as dotenv from 'dotenv';
import axios from "axios"

dotenv.config();  // Load environment variables from .env file

export async function POST(req: NextRequest) {
  try {
    const input: generateSummaryType = await req.json();
    const { jobtitle, skills, workexperience } = generateSummarySchema.parse(input);

    const systemMessage = `You are a job resume generator AI. Your task is to write a professional introduction summary given the user's provided data. Only return the summary and don't add any other information in the response. Keep it concise and professional.`;

    const userMessage = `Please generate a professional resume summary from this data:
jobtitle: ${jobtitle || "N/A"},
workexperience: ${workexperience?.map((exp) => (
      `position: ${exp.postion || "N/A"} at ${exp.company || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"} description: ${exp.description || "N/A"}`
    )).join("\n\n")},
skills: ${skills}`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemMessage}\n\n${userMessage}` }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    // Access the summary from the correct part of the response
    const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!summary) {
      console.error("Invalid Gemini response:", JSON.stringify(data, null, 2));
      throw new Error("No summary received");
    }

    return new Response(summary, { status: 200 });
  } catch (error) {
    console.error("Error generating resume summary:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
