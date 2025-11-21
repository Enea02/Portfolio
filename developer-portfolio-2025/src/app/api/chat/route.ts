import { anthropic } from '@ai-sdk/anthropic';

import { streamText } from 'ai';

 

export const maxDuration = 30;

 

export async function POST(req: Request) {

  const { messages } = await req.json();
  // The Anthropic SDK looks for ANTHROPIC_API_KEY environment variable by default
  // Set it in `.env.local` and keep it out of version control
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response('ANTHROPIC_API_KEY not configured on server', { status: 500 });
  }
 

  const result = streamText({//claude-sonnet-4-20250514

    model: anthropic('claude-haiku-4-5-20251001'), //claude-haiku-4-5-20251001

    system: `Sei un assistente AI amichevole e professionale per il portfolio di uno sviluppatore full-stack.

    Puoi rispondere a domande su:

    - Competenze tecniche (React, TypeScript, Next.js, Node.js, AI/ML, Cloud)

    - Progetti e esperienze

    - Disponibilità per collaborazioni

    - Domande generali sullo sviluppo software

 

    Rispondi in italiano a meno che l'utente non scriva in un'altra lingua.

    Sii conciso ma utile, e mantieni un tono professionale ma amichevole.`,

    messages,
    // providerOptions is server-side only — pass the provider-specific options
    providerOptions: {
      anthropic: { apiKey },
    },
  });

 

  return result.toTextStreamResponse();

}