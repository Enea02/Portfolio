# LinkedIn Headless CMS - Guida Setup

Questo progetto include un sistema CMS headless per importare e gestire i tuoi post LinkedIn nel blog del portfolio.

## 📋 Indice

- [Architettura](#architettura)
- [Setup](#setup)
- [Importare Post da LinkedIn](#importare-post-da-linkedin)
- [API Reference](#api-reference)
- [Workflow Consigliati](#workflow-consigliati)
- [Troubleshooting](#troubleshooting)

## 🏗️ Architettura

Il sistema è composto da:

```
src/
├── app/
│   ├── api/
│   │   └── posts/
│   │       ├── route.ts          # GET /api/posts - Recupera tutti i post
│   │       └── sync/
│   │           └── route.ts      # POST /api/posts/sync - Sincronizza post LinkedIn
│   └── blog/
│       ├── page.tsx              # Lista post blog
│       └── [slug]/
│           └── page.tsx          # Pagina singolo post
├── lib/
│   └── posts.ts                  # Utility functions per gestione post
├── data/
│   └── posts.json                # Storage JSON dei post
└── types/
    └── index.ts                  # TypeScript interfaces
```

### Flusso Dati

```
LinkedIn Post → Script Import → API /posts/sync → posts.json → Blog Pages
```

## 🚀 Setup

### 1. Installazione Dipendenze

```bash
cd developer-portfolio-2025
npm install
```

### 2. Avvio Server Development

```bash
npm run dev
```

Il server sarà disponibile su `http://localhost:3000`

### 3. Verifica API

Apri `http://localhost:3000/api/posts` nel browser - dovresti vedere:

```json
{
  "success": true,
  "posts": [],
  "total": 0
}
```

## 📝 Importare Post da LinkedIn

### Metodo 1: Script Automatico (Consigliato)

1. **Personalizza lo script** in `scripts/import-linkedin-posts.js` con i tuoi post reali
2. **Avvia il server Next.js** (se non già in esecuzione):
   ```bash
   npm run dev
   ```
3. **Esegui lo script di import** in un altro terminale:
   ```bash
   node scripts/import-linkedin-posts.js
   ```

### Metodo 2: API Diretta

Puoi importare post direttamente via API usando `curl`, Postman, o qualsiasi HTTP client:

```bash
curl -X POST http://localhost:3000/api/posts/sync \
  -H "Content-Type: application/json" \
  -d '{
    "posts": [
      {
        "id": "unique-post-id",
        "content": "Contenuto del post LinkedIn...",
        "publishedAt": "2024-11-01T10:00:00Z",
        "tags": ["AI", "Tech"],
        "category": "AI/ML",
        "linkedinUrl": "https://linkedin.com/posts/...",
        "likes": 100,
        "comments": 20,
        "shares": 5
      }
    ]
  }'
```

### Formato Dati Post

```typescript
{
  "posts": [
    {
      // Required fields
      "content": "Contenuto completo del post",

      // Optional (ma consigliati)
      "id": "linkedin-post-id",              // Autogenerato se omesso
      "title": "Titolo post",                // Estratto da content se omesso
      "excerpt": "Breve descrizione",        // Primi 200 caratteri di content se omesso
      "publishedAt": "2024-01-01T00:00:00Z", // Data corrente se omessa
      "tags": ["tag1", "tag2"],              // Array vuoto se omesso
      "category": "AI/ML",                   // "General" se omesso
      "imageUrl": "https://...",             // URL immagine (se presente)
      "linkedinUrl": "https://linkedin.com/posts/...",
      "linkedinPostId": "activity-123456",

      // Engagement stats (opzionali)
      "likes": 100,
      "comments": 20,
      "shares": 5,

      // Author info (usa default se omesso)
      "author": {
        "name": "Enea Frontera",
        "linkedinUrl": "https://linkedin.com/in/..."
      }
    }
  ]
}
```

### Metodo 3: Copia Manuale da LinkedIn

1. **Apri il tuo profilo LinkedIn** e trova il post
2. **Copia il contenuto** completo del post
3. **Annota i dati** (data pubblicazione, stats engagement, URL)
4. **Crea un oggetto JSON** seguendo il formato sopra
5. **Usa lo script o l'API** per importare

## 📚 API Reference

### GET /api/posts

Recupera tutti i post del blog.

**Response:**
```json
{
  "success": true,
  "posts": [...],
  "total": 3
}
```

### POST /api/posts/sync

Sincronizza post da LinkedIn al sistema CMS.

**Request Body:**
```json
{
  "posts": [
    {
      "content": "...",
      "publishedAt": "...",
      ...
    }
  ]
}
```

**Response Success:**
```json
{
  "success": true,
  "synced": 3,
  "errors": 0,
  "posts": [...],
  "errorDetails": undefined
}
```

**Response con Errori:**
```json
{
  "success": true,
  "synced": 2,
  "errors": 1,
  "posts": [...],
  "errorDetails": [
    {
      "post": {...},
      "error": "Content is required"
    }
  ]
}
```

## 🔄 Workflow Consigliati

### Workflow 1: Import Manuale Occasionale

1. Scrivi post su LinkedIn normalmente
2. Ogni settimana/mese, esporta i post manualmente
3. Esegui script di import
4. Verifica sul blog locale
5. Deploy

### Workflow 2: Automation con Zapier/Make

1. Configura un workflow automation su Zapier/Make.com
2. Trigger: "Nuovo post su LinkedIn"
3. Action: "HTTP Request" → chiama `/api/posts/sync`
4. I post vengono importati automaticamente

### Workflow 3: Scheduled Import

Crea un GitHub Action o cron job che:

1. Fetcha i tuoi post LinkedIn (usando API LinkedIn o scraper)
2. Chiama `/api/posts/sync`
3. Committa le modifiche a `posts.json`
4. Deploy automatico

## 🐛 Troubleshooting

### "Failed to fetch posts"

**Problema:** L'API non risponde

**Soluzione:**
- Verifica che il server Next.js sia in esecuzione (`npm run dev`)
- Controlla la console del browser per errori CORS
- Verifica che il file `posts.json` esista e sia valido

### Post non appare nel blog

**Problema:** Post importato ma non visibile

**Soluzione:**
- Controlla `src/data/posts.json` - il post è stato salvato?
- Refresh hard della pagina blog (Ctrl+Shift+R)
- Controlla la console browser per errori
- Verifica che il campo `content` non sia vuoto

### "Content is required" error

**Problema:** Manca il campo obbligatorio

**Soluzione:**
- Assicurati che ogni post abbia il campo `content`
- Il campo `content` non può essere una stringa vuota

### Slug duplicati

**Problema:** Due post generano lo stesso slug

**Soluzione:**
- Usa titoli più distintivi
- Modifica manualmente il campo `slug` nel JSON
- I post più recenti sovrascrivono quelli vecchi con stesso ID

### Reading Time non accurato

**Problema:** Il tempo di lettura stimato è sbagliato

**Soluzione:**
- Il calcolo è basato su 200 parole/minuto
- Modifica `calculateReadingTime()` in `src/lib/posts.ts`
- Oppure passa `readingTime` manualmente nell'import

## 🎨 Personalizzazione

### Cambiare l'autore predefinito

Modifica `src/lib/posts.ts`, funzione `transformLinkedInPost()`:

```typescript
author: {
  name: linkedinData.author?.name || 'Tuo Nome',
  linkedinUrl: linkedinData.author?.linkedinUrl || 'https://linkedin.com/in/...'
}
```

### Aggiungere nuovi campi

1. Aggiorna l'interface `BlogPost` in `src/types/index.ts`
2. Modifica `transformLinkedInPost()` in `src/lib/posts.ts`
3. Aggiorna i componenti UI in `src/app/blog/page.tsx` e `src/app/blog/[slug]/page.tsx`

### Cambiare storage da JSON a Database

Sostituisci le funzioni in `src/lib/posts.ts` con chiamate al tuo database:

```typescript
export async function getAllPosts(): Promise<BlogPost[]> {
  // Invece di leggere JSON, query al database
  const posts = await db.posts.findMany();
  return posts;
}
```

## 🚀 Deploy in Production

### Vercel (Consigliato)

```bash
npm run build
vercel --prod
```

**⚠️ Importante:** In production, il file `posts.json` è read-only. Opzioni:

1. **Commit `posts.json` nel repo** - Import locale, poi commit e push
2. **Usa un database** - PostgreSQL, MongoDB, etc.
3. **Usa un CMS reale** - Contentful, Sanity, Strapi

### Database Migration

Per passare a database permanente:

```typescript
// Esempio con Prisma + PostgreSQL
// prisma/schema.prisma
model Post {
  id            String   @id @default(cuid())
  slug          String   @unique
  title         String
  content       String
  publishedAt   DateTime
  // ... altri campi
}
```

## 📞 Supporto

Per problemi o domande:
- Controlla i log del server Next.js
- Verifica il file `posts.json` manualmente
- Consulta la documentazione Next.js: https://nextjs.org/docs

---

**Creato con ❤️ per il Portfolio di Enea Frontera**
