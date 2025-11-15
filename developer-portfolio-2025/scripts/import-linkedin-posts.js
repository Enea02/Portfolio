/**
 * Script di esempio per importare post da LinkedIn
 *
 * Uso:
 * node scripts/import-linkedin-posts.js
 *
 * Nota: Questo è uno script di esempio. Devi personalizzarlo con i tuoi dati reali.
 * Per ottenere i dati dei post LinkedIn, puoi:
 * 1. Copiarli manualmente da LinkedIn
 * 2. Usare l'API ufficiale di LinkedIn (richiede autenticazione OAuth)
 * 3. Usare servizi di terze parti con API per LinkedIn
 */

const fs = require('fs');
const path = require('path');

// Esempio di post LinkedIn da importare
const linkedinPosts = [
  {
    id: 'linkedin-post-1',
    title: 'La mia esperienza con Azure Functions e Business Central',
    content: `Recentemente ho lavorato su un progetto interessante che integra Microsoft Dynamics 365 Business Central con Azure Functions.

L'obiettivo era creare un sistema automatizzato di ticketing che sincronizzasse i dati tra Business Central e Freshdesk.

Ecco cosa ho imparato:

1. **Architettura Serverless**: Azure Functions offre una scalabilità incredibile senza dover gestire l'infrastruttura.

2. **Integrazione AL**: Scrivere estensioni in AL per Business Central richiede attenzione ai dettagli, ma il risultato è molto potente.

3. **API RESTful**: La comunicazione tra i sistemi deve essere robusta e gestire correttamente gli errori.

4. **Monitoraggio**: Application Insights è essenziale per tracciare le performance e identificare problemi.

Le sfide principali sono state:
- Gestione dell'autenticazione OAuth tra i sistemi
- Sincronizzazione dei dati in tempo quasi reale
- Handling degli errori e retry logic

Il risultato finale ha migliorato significativamente l'efficienza del team di supporto.

#Azure #BusinessCentral #CloudComputing #Development`,
    publishedAt: '2024-11-01T10:00:00Z',
    tags: ['Azure', 'Business Central', 'Cloud', 'API', 'Integration'],
    category: 'Cloud',
    linkedinUrl: 'https://www.linkedin.com/posts/enea-frontera-b97048268/esempio-post-1',
    linkedinPostId: 'activity-7123456789',
    likes: 45,
    comments: 12,
    shares: 5,
    author: {
      name: 'Enea Frontera',
      linkedinUrl: 'https://www.linkedin.com/in/enea-frontera-b97048268'
    }
  },
  {
    id: 'linkedin-post-2',
    title: 'Intelligenza Artificiale e Sviluppo Software: Il Futuro è Qui',
    content: `L'AI sta rivoluzionando il modo in cui sviluppiamo software.

Dopo aver integrato GPT-4 in diverse applicazioni production, ecco le mie riflessioni:

**Cosa funziona bene:**
✅ Generazione automatica di documentazione
✅ Code review assistita
✅ Chatbot per customer support
✅ Analisi e categorizzazione di dati non strutturati

**Le sfide:**
⚠️ Costi di API usage in scale
⚠️ Latency per operazioni critiche
⚠️ Gestione delle allucinazioni
⚠️ Privacy e sicurezza dei dati

**Best Practices che ho adottato:**

1. **Prompt Engineering**: Investire tempo nel crafting dei prompt paga dividendi
2. **Caching**: Cachare le risposte riduce costi e latenza
3. **Fallback Systems**: Avere sempre un piano B se l'API è down
4. **Human in the Loop**: Per decisioni critiche, validazione umana è fondamentale

L'AI è uno strumento potente, ma richiede un uso consapevole e responsabile.

Qual è la vostra esperienza con AI in produzione?

#AI #MachineLearning #GPT4 #SoftwareDevelopment #Tech`,
    publishedAt: '2024-10-20T14:30:00Z',
    tags: ['AI', 'GPT-4', 'Machine Learning', 'Best Practices', 'Development'],
    category: 'AI/ML',
    linkedinUrl: 'https://www.linkedin.com/posts/enea-frontera-b97048268/esempio-post-2',
    linkedinPostId: 'activity-7123456790',
    likes: 78,
    comments: 23,
    shares: 15,
    author: {
      name: 'Enea Frontera',
      linkedinUrl: 'https://www.linkedin.com/in/enea-frontera-b97048268'
    }
  },
  {
    id: 'linkedin-post-3',
    title: 'From Junior to Senior: Lezioni Apprese',
    content: `Dopo 2 anni intensi nello sviluppo software, ecco le lezioni più importanti che ho imparato:

1️⃣ **Il codice è comunicazione**
Non scrivi solo per la macchina, ma per gli altri sviluppatori (e per te stesso tra 6 mesi).

2️⃣ **Testing non è opzionale**
I test ti danno la sicurezza di refactorare e migliorare il codice senza paura.

3️⃣ **Documentazione > Commenti**
Una buona documentazione architetturale vale più di mille commenti nel codice.

4️⃣ **Performance matters, but...**
...prima fai funzionare, poi ottimizza dove serve davvero.

5️⃣ **Soft skills sono hard skills**
Comunicare bene con team e stakeholder è importante quanto scrivere buon codice.

6️⃣ **Impara a dire no**
Non puoi fare tutto. Prioritizzare è una skill fondamentale.

7️⃣ **Community > Solitudine**
Partecipare a community, leggere blog, contribuire all'open source accelera la crescita.

8️⃣ **Fallire è parte del processo**
Ogni bug è un'opportunità per imparare qualcosa di nuovo.

Qual è la lezione più importante che avete imparato nella vostra carriera?

#SoftwareDevelopment #CareerGrowth #Programming #TechCareer #LessonsLearned`,
    publishedAt: '2024-10-05T09:15:00Z',
    tags: ['Career', 'Development', 'Best Practices', 'Learning', 'Tech'],
    category: 'Career',
    linkedinUrl: 'https://www.linkedin.com/posts/enea-frontera-b97048268/esempio-post-3',
    linkedinPostId: 'activity-7123456791',
    likes: 156,
    comments: 42,
    shares: 28,
    author: {
      name: 'Enea Frontera',
      linkedinUrl: 'https://www.linkedin.com/in/enea-frontera-b97048268'
    }
  }
];

async function importPosts() {
  try {
    console.log('🚀 Importazione post LinkedIn in corso...\n');

    // Chiama l'API di sync
    const response = await fetch('http://localhost:3000/api/posts/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        posts: linkedinPosts
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log(`✅ Importazione completata con successo!`);
      console.log(`   - Post sincronizzati: ${result.synced}`);
      console.log(`   - Errori: ${result.errors}`);

      if (result.posts && result.posts.length > 0) {
        console.log('\n📝 Post importati:');
        result.posts.forEach((post, index) => {
          console.log(`   ${index + 1}. ${post.title}`);
          console.log(`      Slug: ${post.slug}`);
          console.log(`      URL: /blog/${post.slug}\n`);
        });
      }

      if (result.errorDetails && result.errorDetails.length > 0) {
        console.log('\n⚠️  Errori riscontrati:');
        result.errorDetails.forEach((error, index) => {
          console.log(`   ${index + 1}. ${error.error}`);
        });
      }
    } else {
      console.error('❌ Errore durante l\'importazione:', result.error);
      if (result.details) {
        console.error('   Dettagli:', result.details);
      }
    }
  } catch (error) {
    console.error('❌ Errore durante l\'importazione:', error.message);
    console.error('\n💡 Suggerimenti:');
    console.error('   1. Assicurati che il server Next.js sia in esecuzione (npm run dev)');
    console.error('   2. Verifica che l\'URL dell\'API sia corretto');
    console.error('   3. Controlla i log del server per ulteriori dettagli');
  }
}

// Esegui l'importazione
importPosts();
