
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getSEOAdvice = async (query: string) => {
  if (!API_KEY) return "API Key not configured. Please check environment variables.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class SEO expert specializing in Technology. 
      Answer the following user query with actionable, data-driven advice: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1000,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating advice. Please try again later.";
  }
};
