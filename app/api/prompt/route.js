import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await connectToDB();
    const allPrompts = await Prompt.find({}).populate("creator");
    
    return new Response(JSON.stringify(allPrompts), {status: 200});
  } catch (error) {
    return new Response("Failed to load  prompts", { status: 500 });
  }
};
