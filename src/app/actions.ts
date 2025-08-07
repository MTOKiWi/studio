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

/**
 * Simula a compra de um pacote de videochamada.
 * No futuro, você pode adicionar a lógica de integração com um provedor de pagamento (ex: Stripe) aqui.
 * @returns Um objeto indicando o sucesso da operação.
 */
export async function purchaseVideoPackage(): Promise<{ success: boolean; message: string }> {
  console.log('Iniciando a compra do pacote de vídeo...');
  // TODO: Adicione aqui a integração com o provedor de pagamento.
  // Exemplo: criar uma sessão de checkout com o Stripe, processar o pagamento, etc.

  // Por enquanto, apenas simulamos um sucesso.
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simula a latência da rede

  console.log('Pacote de vídeo comprado com sucesso (simulado).');
  return { success: true, message: 'Pacote de videochamada ativado com sucesso!' };
}
