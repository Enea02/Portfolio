import React from 'react';
import { useTranslation } from 'react-i18next';


// Simple inline SVG flags (lightweight). You can replace with images if you prefer.
const FlagUS = ({ className = '' }: { className?: string }) => (
<svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" aria-hidden>
<rect width="640" height="480" fill="#b22234"/>
<g fill="#fff">
<rect y="36" width="640" height="36"/>
<rect y="108" width="640" height="36"/>
<rect y="180" width="640" height="36"/>
<rect y="252" width="640" height="36"/>
<rect y="324" width="640" height="36"/>
<rect y="396" width="640" height="36"/>
</g>
<rect width="280" height="200" fill="#3c3b6e"/>
{/* stars grid - simplified dots */}
<g fill="#fff">
{Array.from({ length: 5 }).map((_, row) => (
<g key={row} transform={`translate(20, ${20 + row * 34})`}>
{Array.from({ length: 6 }).map((_, col) => (
<circle key={col} cx={col * 34} cy={0} r={4}/>
))}
</g>
))}
</g>
</svg>
);


const FlagIT = ({ className = '' }: { className?: string }) => (
<svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" aria-hidden>
<rect width="1" height="2" x="0" fill="#009246"/>
<rect width="1" height="2" x="1" fill="#fff"/>
<rect width="1" height="2" x="2" fill="#ce2b37"/>
</svg>
);


const FlagFR = ({ className = '' }: { className?: string }) => (
<svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" aria-hidden>
<rect width="1" height="2" x="0" fill="#0055A4"/>
<rect width="1" height="2" x="1" fill="#fff"/>
<rect width="1" height="2" x="2" fill="#EF4135"/>
</svg>
);


export const LanguageSwitcher: React.FC = () => {
const { i18n, t } = useTranslation();
const current = i18n.language || 'en';


const setLanguage = (lng: string) => {
i18n.changeLanguage(lng);
if (typeof window !== 'undefined') localStorage.setItem('lng', lng);
};


return (
<div className="absolute top-4 right-4 z-50">
<div className="flex items-center gap-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-full shadow-sm">
<span className="sr-only">{t('language.label')}</span>


<button
onClick={() => setLanguage('en')}
aria-pressed={current === 'en'}
className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 ${current === 'en' ? 'ring-2 ring-offset-1 ring-primary-400' : 'opacity-80 hover:opacity-100'}`}
title="English"
>
<span className={`inline-block ${current === 'en' ? 'animate-bounce' : ''} w-6 h-4` }>
<FlagUS className="w-full h-full" />
</span>
</button>


<div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />


<button
onClick={() => setLanguage('it')}
aria-pressed={current === 'it'}
className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 ${current === 'it' ? 'ring-2 ring-offset-1 ring-primary-400' : 'opacity-80 hover:opacity-100'}`}
title="Italiano"
>
<span className={`inline-block ${current === 'it' ? 'animate-bounce' : ''} w-6 h-4`}>
<FlagIT className="w-full h-full" />
</span>
</button>


<div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />


<button
onClick={() => setLanguage('fr')}
aria-pressed={current === 'fr'}
className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 ${current === 'fr' ? 'ring-2 ring-offset-1 ring-primary-400' : 'opacity-80 hover:opacity-100'}`}
title="Français"
>
<span className={`inline-block ${current === 'fr' ? 'animate-bounce' : ''} w-6 h-4`}>
<FlagFR className="w-full h-full" />
</span>
</button>
</div>
</div>
);
};


export default LanguageSwitcher;