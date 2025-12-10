import { Project, Experience, SocialLink } from './types';
import React from 'react';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com', id: 'linkedin' },
  { platform: 'GitHub', url: 'https://github.com', id: 'github' },
  { platform: 'X (Twitter)', url: 'https://x.com', id: 'x' },
  { platform: 'Discord', url: 'https://discord.com', id: 'discord' },
  { platform: 'Instagram', url: 'https://instagram.com', id: 'instagram' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Ticaret Paneli',
    description: 'Modern, ölçeklenebilir ve tam kapsamlı bir e-ticaret yönetim paneli.',
    longDescription: 'Bu proje, işletmelerin çevrimiçi satışlarını yönetmeleri için geliştirilmiş kapsamlı bir dashboard çözümüdür. Kullanıcı dostu arayüzü sayesinde stok takibi, sipariş yönetimi ve müşteri analizi gibi karmaşık süreçleri basitleştirir.',
    features: [
      'Gerçek zamanlı stok takibi ve uyarı sistemi',
      'Detaylı satış grafikleri ve raporlama (Recharts)',
      'Rol tabanlı yetkilendirme sistemi (Admin/Editör)',
      'MongoDB Aggregation ile gelişmiş veri analizi'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    // Görseli değiştirmek için: imageUrl: './assets/proje1.png'
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'AI Chatbot Entegrasyonu',
    description: 'Doğal dil işleme yeteneğine sahip akıllı müşteri hizmetleri botu.',
    longDescription: 'Gemini API kullanılarak güçlendirilmiş bu chatbot, web sitelerine kolayca entegre edilebilir. Müşteri sorularını doğal bir dille anlar ve bağlamsal cevaplar üretir.',
    features: [
      'Gemini 1.5 Flash modeli ile hızlı yanıtlar',
      'Önceki konuşmaları hatırlama (Context Awareness)',
      'Özelleştirilebilir sistem talimatları',
      'Stream yanıt desteği ile akıcı deneyim'
    ],
    tags: ['Python', 'Gemini API', 'FastAPI', 'React'],
    // Görseli değiştirmek için: imageUrl: './assets/proje2.png'
    imageUrl: 'https://picsum.photos/800/600?random=2',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Kripto Portfolyo Takipçisi',
    description: 'Anlık piyasa verileriyle kripto varlık takip uygulaması.',
    longDescription: 'Yatırımcıların birden fazla borsadaki varlıklarını tek bir yerden takip etmelerini sağlar. CoinGecko API üzerinden anlık fiyat verilerini çeker ve kâr/zarar analizi yapar.',
    features: [
      'Canlı fiyat güncellemesi (WebSocket)',
      'Portfolyo dağılım pastası',
      'Favori coin listesi ve alarm kurma',
      'Firebase Auth ile güvenli giriş'
    ],
    tags: ['Vue.js', 'Firebase', 'CoinGecko API'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'Kurumsal Web Sitesi',
    description: 'İnşaat firması için SEO uyumlu kurumsal site.',
    longDescription: 'Yüksek performans ve SEO odaklı geliştirilmiş, modern tasarıma sahip bir kurumsal kimlik sitesidir. Sayfa geçişleri ve animasyonlar Framer Motion ile güçlendirilmiştir.',
    features: [
      'Next.js SSR ile maksimum SEO puanı',
      'Dinamik proje ve blog yönetim paneli (CMS)',
      'Çoklu dil desteği (i18n)',
      'Responsive ve mobil uyumlu tasarım'
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    link: '#',
    github: '#'
  },
  {
    id: '5',
    title: 'Task Yönetim Uygulaması',
    description: 'Ekipler için Kanban stili görev yönetim aracı.',
    longDescription: 'Takımların projelerini organize etmelerini sağlayan, Trello benzeri sürükle-bırak özellikli bir iş yönetim aracıdır.',
    features: [
      'Sürükle ve Bırak (Drag & Drop) arayüzü',
      'Gerçek zamanlı güncelleme (Supabase Realtime)',
      'Görevlere yorum yapma ve dosya ekleme',
      'Takım üyelerini etiketleme'
    ],
    tags: ['React', 'Redux', 'Supabase'],
    imageUrl: 'https://picsum.photos/800/600?random=5',
    link: '#',
    github: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions A.Ş.',
    role: 'Senior Frontend Developer',
    date: '2022 - Günümüz',
    description: 'Büyük ölçekli web uygulamalarının mimarisini tasarlamak ve geliştirmek. React ve TypeScript kullanarak performans optimizasyonları yapmak.',
    logoUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    company: 'Creative Digital Agency',
    role: 'Full Stack Developer',
    date: '2020 - 2022',
    description: 'Müşteriler için özel web çözümleri geliştirmek. Backend tarafında Node.js, frontend tarafında Vue.js kullanıldı.',
    logoUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    company: 'StartUp Inc.',
    role: 'Junior Software Engineer',
    date: '2019 - 2020',
    description: 'Mobil uygulama geliştirme ekibinde yer aldım. React Native ile cross-platform uygulamalar geliştirdim.',
    logoUrl: 'https://picsum.photos/100/100?random=12'
  }
];

// Helper to get brand colors for hover effects
export const getBrandColorClass = (id: string) => {
  switch (id) {
    case 'instagram': return 'hover:text-[#E1306C]';
    case 'x': return 'hover:text-white'; // X logo on dark bg
    case 'discord': return 'hover:text-[#5865F2]';
    case 'linkedin': return 'hover:text-[#0077b5]';
    case 'github': return 'hover:text-white';
    default: return 'hover:text-teal-400';
  }
};

// Custom SVG Icons for accurate branding
export const getIconComponent = (id: string) => {
  // Common properties for most icons
  const commonProps = { className: "w-6 h-6" };
  
  switch (id) {
    case 'instagram': 
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'x': 
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'discord': 
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.48 13.48 0 0 0-.59 1.227 18.353 18.353 0 0 0-5.526 0 13.483 13.483 0 0 0-.59-1.227.072.072 0 0 0-.079-.037A19.736 19.736 0 0 0 3.674 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.42-2.157 2.42z"/>
        </svg>
      );
    case 'linkedin': 
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case 'github': 
      return (
         <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
         </svg>
      );
    case 'mail':
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    default: return <div />;
  }
};