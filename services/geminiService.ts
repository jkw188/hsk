import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const generateTutorResponse = async (
  query: string, 
  context: string,
  history: {role: string, parts: {text: string}[]}[] = []
): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-3-flash-preview';
    
    const systemInstruction = `You are a friendly and encouraging Chinese language (HSK) tutor. 
    You are helping a student understand a specific lesson. 
    Strictly use the provided LESSON CONTEXT to answer questions if applicable.
    If the user asks for examples, provide Pinyin and English translations.
    Keep answers concise but helpful.`;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history
    });

    const contextPrompt = `
    [LESSON CONTEXT START]
    ${context}
    [LESSON CONTEXT END]

    Student Question: ${query}
    `;

    const result = await chat.sendMessage({ message: contextPrompt });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the tutoring service right now. Please check your API key.";
  }
};
