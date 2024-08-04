import {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
	responseMimeType: "text/plain",
};

export async function askQuestion(question: string) {
	const genAI = new GoogleGenerativeAI(apiKey || '');
	const model = genAI.getGenerativeModel({
		model: "gemini-1.5-flash",
		systemInstruction: process.env.NEXT_PUBLIC_SYSTEM_PROMPT
	});
	const chatSession = model.startChat({
		generationConfig,
	});

	const result = await chatSession.sendMessage(question);
	return result.response.text();
}




