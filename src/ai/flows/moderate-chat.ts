'use server';
/**
 * @fileOverview A chat moderation AI agent.
 *
 * - moderateChat - A function that handles the chat moderation process.
 * - ModerateChatInput - The input type for the moderateChat function.
 * - ModerateChatOutput - The return type for the moderateChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateChatInputSchema = z.object({
  text: z.string().describe('The text to moderate.'),
  userProfile: z.string().describe('The user profile information.'),
});
export type ModerateChatInput = z.infer<typeof ModerateChatInputSchema>;

const ModerateChatOutputSchema = z.object({
  isSafe: z.boolean().describe('Whether or not the text is safe.'),
  reason: z.string().describe('The reason for the moderation decision.'),
});
export type ModerateChatOutput = z.infer<typeof ModerateChatOutputSchema>;

export async function moderateChat(input: ModerateChatInput): Promise<ModerateChatOutput> {
  return moderateChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderateChatPrompt',
  input: {schema: ModerateChatInputSchema},
  output: {schema: ModerateChatOutputSchema},
  prompt: `You are an AI chat moderator for ChatLink Premium, responsible for ensuring a safe and respectful environment for all users.

You will receive a text and user profile information. You will make a determination as to whether the text violates the terms of service, and set the isSafe output field appropriately. If isSafe is false, provide a reason for the moderation decision.

Terms of Service:
- No hate speech
- No harassment
- No sexually explicit content
- No dangerous content
- No spam

Text: {{{text}}}
User Profile: {{{userProfile}}}`, 
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const moderateChatFlow = ai.defineFlow(
  {
    name: 'moderateChatFlow',
    inputSchema: ModerateChatInputSchema,
    outputSchema: ModerateChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
