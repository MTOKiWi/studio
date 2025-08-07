# ChatLink Premium

ChatLink Premium é um aplicativo web de comunicação construído com tecnologias modernas, focado em ser rápido, bonito e inteligente. Ele serve como um excelente protótipo para um produto de chat com funcionalidades de monetização e moderação.

## Funcionalidades Implementadas

1.  **Interface de Chat em Tempo Real:**
    *   Login e registro de usuários (atualmente simulado).
    *   Lista de contatos com status online.
    *   Janela de bate-papo individual para troca de mensagens de texto.

2.  **Videochamadas com Limite de Tempo:**
    *   Videochamadas entre usuários com limite de 4 minutos diários.
    *   Cronômetro regressivo visível durante a chamada.
    *   Interface de chamada otimizada com controles de microfone e encerramento.

3.  **Painel do Usuário e Administração:**
    *   **Painel do Usuário:** Exibe informações da conta e o tempo de chamada diário.
    *   **Painel de Moderação (`/admin`):** Utiliza Inteligência Artificial (Google Genkit) para testar a moderação de conteúdo.

## Tecnologias Utilizadas

*   **Estrutura (Framework):** Next.js e React (com TypeScript)
*   **Estilo e Componentes:** Tailwind CSS e ShadCN UI
*   **Inteligência Artificial:** Google Genkit
*   **Ícones:** Lucide React

---

## Guia para Disponibilizar na Web (100% Funcional)

Para transformar este protótipo em um aplicativo totalmente funcional na web, siga estes 3 passos:

### Passo 1: Configurar o Backend no Firebase

1.  **Crie um Projeto Firebase:** Acesse o [site do Firebase](https://firebase.google.com/) e crie um novo projeto.
2.  **Ative os Serviços:** No console do seu projeto Firebase, ative os seguintes serviços na seção "Build":
    *   **Authentication:** Para gerenciar logins e registros reais (use o provedor "E-mail/Senha").
    *   **Firestore Database:** Para armazenar perfis de usuário, mensagens e dados de uso.
    *   **Hosting:** Para hospedar seu aplicativo na web.

### Passo 2: Integrar os Serviços no Código

A estrutura do projeto está pronta, mas precisa ser conectada aos serviços de backend.

1.  **Autenticação Real:** Substitua a navegação simulada nas páginas de login e registro por chamadas às funções do **Firebase Authentication** para criar e autenticar usuários.
2.  **Banco de Dados em Tempo Real:** Migre os dados do arquivo `src/lib/data.ts` para o **Firestore**. Adapte o código para ler e escrever dados (usuários, mensagens, tempo de chamada) no Firestore, usando listeners para atualizações em tempo real.
3.  **Videochamadas Reais (WebRTC):** Integre um serviço de WebRTC como **Twilio** ou **Agora.io** para habilitar a transmissão de vídeo e áudio real entre os usuários.

### Passo 3: Fazer a Implantação (Deploy)

Com tudo integrado, coloque seu site no ar.

1.  **Instale o Firebase Tools:**
    ```bash
    npm install -g firebase-tools
    ```
2.  **Faça Login e Inicie o Firebase:**
    ```bash
    firebase login
    firebase init hosting
    ```
    *Siga as instruções, selecionando o projeto Firebase que você criou e configurando-o para um projeto Next.js.*

3.  **Construa e Implante o Projeto:**
    ```bash
    npm run build
    firebase deploy
    ```

Após o último comando, o Firebase fornecerá o link público do seu aplicativo.
