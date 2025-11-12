# 🔧 TROUBLESHOOTING - SOLUZIONI ERRORI COMUNI

## ✅ PROBLEMA RISOLTO: ThemeProvider Error

**Errore originale:**
```
Error: (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function
```

**Causa**: 
`ThemeProvider` da `next-themes` è un Client Component ma veniva usato in un Server Component (layout.tsx)

**Soluzione applicata:**
- ✅ Creato componente wrapper `Providers.tsx` con `'use client'`
- ✅ Aggiornato `layout.tsx` per usare il wrapper

---

## 🐛 ALTRI ERRORI COMUNI E SOLUZIONI

### 1. **Hydration Errors**

**Errore:**
```
Error: Hydration failed because the initial UI does not match what was rendered on the server
```

**Soluzioni:**
```tsx
// Soluzione A: Usa suppressHydrationWarning nell'elemento HTML
<html suppressHydrationWarning>

// Soluzione B: Monta il componente solo sul client
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

---

### 2. **Module Not Found**

**Errore:**
```
Module not found: Can't resolve '@/components/...'
```

**Soluzione:**
```bash
# Verifica che tsconfig.json abbia:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

# Poi riavvia il dev server
rm -rf .next
npm run dev
```

---

### 3. **CSS/Tailwind Non Funziona**

**Errore:**
```
Tailwind classes not working / no styles applied
```

**Soluzione:**
```bash
# 1. Verifica globals.css sia importato in layout.tsx
import './globals.css';

# 2. Ricompila Tailwind
rm -rf .next
npm run dev

# 3. Verifica tailwind.config.ts content paths:
content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
],
```

---

### 4. **Framer Motion Errors in Next.js 14**

**Errore:**
```
Error: motion components must be rendered on the client
```

**Soluzione:**
```tsx
// Aggiungi 'use client' in cima al file
'use client';

import { motion } from 'framer-motion';
```

---

### 5. **Build Fails but Dev Works**

**Errore:**
```
npm run build fails but npm run dev works
```

**Soluzione:**
```bash
# 1. Pulisci tutto
rm -rf .next
rm -rf node_modules
rm package-lock.json

# 2. Reinstalla
npm install

# 3. Verifica TypeScript errors
npm run type-check

# 4. Riprova il build
npm run build
```

---

### 6. **Images Not Loading**

**Errore:**
```
Error: Invalid src prop
```

**Soluzione:**
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['localhost', 'tuodominio.com'],
    // Oppure per Next.js 14:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tuodominio.com',
      },
    ],
  },
}
```

---

### 7. **Font Not Loading**

**Errore:**
```
Font Inter not loading / fallback font showing
```

**Soluzione:**
```tsx
// Assicurati che il font sia importato correttamente
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Importante!
});

// E applicato correttamente
<body className={inter.className}>
```

---

### 8. **Environment Variables Not Working**

**Errore:**
```
process.env.NEXT_PUBLIC_... is undefined
```

**Soluzione:**
```bash
# 1. Crea .env.local (NON .env)
NEXT_PUBLIC_API_KEY=your_key

# 2. Riavvia completamente il server
# Ctrl+C per killare
npm run dev

# 3. Le variabili DEVONO iniziare con NEXT_PUBLIC_ 
# per essere accessibili nel browser
```

---

### 9. **Port Already in Use**

**Errore:**
```
Error: Port 3000 is already in use
```

**Soluzione:**
```bash
# Opzione A: Usa porta diversa
npm run dev -- -p 3001

# Opzione B: Killa il processo (Windows)
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Opzione B: Killa il processo (Mac/Linux)
lsof -ti:3000 | xargs kill -9
```

---

### 10. **Vercel Deployment Fails**

**Errore:**
```
Build failed on Vercel
```

**Soluzione:**
```bash
# 1. Verifica build locale funzioni
npm run build
npm run start

# 2. Controlla Vercel dashboard logs

# 3. Verifica Node.js version in package.json
{
  "engines": {
    "node": ">=18.17.0"
  }
}

# 4. Verifica environment variables su Vercel
# Settings → Environment Variables
```

---

## 🚀 COMANDI UTILI PER DEBUG

```bash
# Pulisci tutto completamente
rm -rf .next node_modules package-lock.json
npm install
npm run dev

# Verifica TypeScript
npm run type-check

# Build di test
npm run build

# Analizza bundle size
npm run build
# Poi controlla .next/analyze/

# Verifica dipendenze outdated
npm outdated

# Aggiorna Next.js
npm install next@latest react@latest react-dom@latest
```

---

## 📝 CHECKLIST DEBUG

Quando hai un errore, prova in ordine:

- [ ] Hai riavviato il dev server?
- [ ] Hai cancellato `.next`?
- [ ] Hai reinstallato `node_modules`?
- [ ] La versione Node.js è >= 18?
- [ ] Tutti i file hanno l'encoding UTF-8?
- [ ] Non ci sono caratteri strani nei file?
- [ ] `'use client'` è dove serve?
- [ ] Gli import paths sono corretti?
- [ ] `npm run type-check` passa?
- [ ] `npm run build` funziona?

---

## 🆘 ULTIMO RESORT

Se niente funziona:

```bash
# 1. Backup del tuo codice personalizzato
cp -r src src_backup

# 2. Re-extract del progetto originale
tar -xzf developer-portfolio-2025.tar.gz

# 3. Copia le tue modifiche
cp -r src_backup/* src/

# 4. Reinstalla tutto
npm install
npm run dev
```

---

## 💡 TIPS PER PREVENIRE ERRORI

1. **Sempre usare `'use client'`** quando:
   - Usi hooks (`useState`, `useEffect`, ecc.)
   - Usi event handlers (`onClick`, `onChange`, ecc.)
   - Usi browser APIs
   - Usi Context providers

2. **Server Components per default**:
   - Fetch dei dati
   - Layout statici
   - Componenti senza interazione

3. **TypeScript è tuo amico**:
   - Risolvi TUTTI gli errori TypeScript
   - Non usare `@ts-ignore` a caso

4. **Git è essenziale**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Ora puoi fare rollback se rompi qualcosa
   ```

---

**Ultima modifica:** Novembre 2025

Se incontri un errore non coperto qui, cerca su:
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [Next.js Discord](https://discord.gg/nextjs)
