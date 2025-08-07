"use server";
import { moderateChat, type ModerateChatInput, type ModerateChatOutput } from '@/ai/flows/moderate-chat';

export async function runModeration(input: ModerateChatInput): Promise<ModerateChatOutput> {
  try {
    const result = await moderateChat(input);
    return result;
  } catch (error) {
    console.error("Moderation Error:", error);
    return {
      isSafe: false,
      reason: 'An unexpected error occurred during moderation.',
    };
  }
}
