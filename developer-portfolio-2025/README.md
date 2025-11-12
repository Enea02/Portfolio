# 🚀 Portfolio Sviluppatore 2025

Portfolio moderno e professionale per sviluppatori full-stack con focus su AI, Cloud e DevOps. Costruito con Next.js 14, TypeScript e TailwindCSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Design Moderno**: UI elegante con dark/light mode
- ⚡ **Performance Ottimizzate**: Next.js 14 con App Router
- 📱 **Fully Responsive**: Design mobile-first
- 🎭 **Animazioni Fluide**: Framer Motion per transizioni smooth
- 🌙 **Dark Mode**: Supporto nativo tema scuro/chiaro
- 🎯 **SEO Ottimizzato**: Metadata e Open Graph configurati
- 🚀 **Deploy Ready**: Pronto per Vercel/Netlify
- 📊 **Tech Stack Showcase**: Sezione dedicata alle competenze
- 💼 **Projects Gallery**: Portfolio progetti con filtri
- 📝 **Blog Ready**: Struttura pronta per integrare CMS
- 📧 **Contact Form**: Form di contatto funzionante

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel / Netlify

## 📁 Struttura Progetto

```
developer-portfolio-2025/
├── public/              # Asset statici
│   ├── images/         # Immagini progetto
│   └── resume.pdf      # Il tuo CV
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── about/      # Pagina About
│   │   ├── projects/   # Pagina Projects
│   │   ├── blog/       # Pagina Blog
│   │   ├── contact/    # Pagina Contact
│   │   ├── layout.tsx  # Layout principale
│   │   ├── page.tsx    # Homepage
│   │   └── globals.css # Stili globali
│   ├── components/     # Componenti React
│   │   ├── layout/     # Header, Footer, ThemeToggle
│   │   ├── home/       # Hero, TechStack, FeaturedProjects
│   │   └── ui/         # Button, Card, Badge
│   ├── lib/            # Utility e costanti
│   │   ├── constants.ts # Dati personali e progetti
│   │   └── utils.ts    # Funzioni helper
│   └── types/          # TypeScript types
└── README.md
```

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ installato
- npm, yarn o pnpm

### 1. Clone del Repository

```bash
git clone https://github.com/tuousername/developer-portfolio-2025.git
cd developer-portfolio-2025
```

### 2. Installazione Dipendenze

```bash
npm install
# oppure
yarn install
# oppure
pnpm install
```

### 3. Personalizzazione Contenuti

Modifica il file `/src/lib/constants.ts` con i tuoi dati:

```typescript
export const PERSONAL_INFO = {
  name: 'Il Tuo Nome',
  role: 'Full-Stack Developer & AI Enthusiast',
  email: 'tuoemail@example.com',
  // ... altri dati
};
```

### 4. Avvio Ambiente di Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📝 Personalizzazione

### 1. Informazioni Personali

Modifica `/src/lib/constants.ts`:
- `PERSONAL_INFO`: nome, ruolo, bio, contatti
- `SOCIAL_LINKS`: link ai tuoi social
- `TECH_STACK`: le tue competenze tecniche
- `FEATURED_PROJECTS`: i tuoi progetti

### 2. Stile e Colori

Modifica `/tailwind.config.ts` per cambiare:
- Palette colori (primary, secondary)
- Font
- Animazioni

### 3. Aggiungi Immagini

Inserisci le immagini dei progetti in `/public/images/projects/`

### 4. Aggiungi il tuo CV

Sostituisci `/public/resume.pdf` con il tuo curriculum

## 🌐 Deploy

### Deploy su Vercel (Consigliato)

1. Push il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Vercel rileverà automaticamente Next.js e farà il deploy

```bash
# Oppure usa Vercel CLI
npm i -g vercel
vercel
```

### Deploy su Netlify

1. Push il codice su GitHub
2. Vai su [netlify.com](https://netlify.com)
3. Importa il repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Variabili d'Ambiente (se necessarie)

Crea un file `.env.local`:

```env
# Esempio per form di contatto
NEXT_PUBLIC_CONTACT_EMAIL=tuaemail@example.com

# Se usi un servizio email
SENDGRID_API_KEY=your_key_here
```

## 🎨 Personalizzazioni Avanzate

### Aggiungere un CMS per il Blog

Integra con:
- **Contentful**: Headless CMS
- **Sanity**: CMS flessibile
- **MDX**: File markdown locali

Esempio con MDX:

```bash
npm install next-mdx-remote
```

### Aggiungere Analytics

```bash
npm install @vercel/analytics
```

In `layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Aggiungere Form Backend

Integra con:
- **EmailJS**: Email direttamente dal frontend
- **Formspree**: Servizio form backend
- **Next.js API Routes**: Backend custom

## 📊 Scripts Disponibili

```bash
npm run dev          # Avvia development server
npm run build        # Build per produzione
npm run start        # Avvia production server
npm run lint         # Linting con ESLint
npm run type-check   # TypeScript type checking
```

## 🔧 Troubleshooting

### Errore: Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark mode non funziona

Assicurati che `next-themes` sia installato:

```bash
npm install next-themes
```

### Animazioni lag

Riduci il numero di animazioni in Framer Motion o aumenta i delay.

## 📚 Risorse Utili

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🤝 Contributing

Contributi, issues e feature requests sono benvenuti!

## 📄 License

MIT License - sentiti libero di usare questo template per il tuo portfolio personale.

## 👤 Autore

**Il Tuo Nome**

- GitHub: [@tuousername](https://github.com/tuousername)
- LinkedIn: [@tuousername](https://linkedin.com/in/tuousername)

---

⭐ Se questo template ti è stato utile, lascia una stella su GitHub!
