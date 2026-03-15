import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'insurance',
    title: 'Insurance',
    submenu: [
      { id: 'request-coverage', label: 'Request Coverage', href: './request' },
      { id: 'underwrite', label: 'Underwrite Trades', href: './underwrite' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'services', label: 'Services', href: './services' },
      { id: 'team', label: 'Our Team', href: './team' },
      { id: 'our-manifesto', label: 'Our Manifesto', href: './our-manifesto' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: './why-choose-us' },
      { id: 'customers', label: 'Customers', href: './customer' },
      { id: 'use-cases', label: 'Use Cases', href: './use-case' },
      { id: 'testimonials', label: 'Testimonials', href: './testimonial' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'features', label: 'Features', href: './features' },
      { id: 'integrations', label: 'Integrations', href: './integration' },
      { id: 'process', label: 'Process', href: './process' },
      { id: 'analytics', label: 'Analytics', href: './analytics' },
      { id: 'security', label: 'Security', href: './security' },
      { id: 'whitepaper', label: 'Whitepaper', href: './whitepaper' },
      { id: 'build-overview', label: 'Build overview', href: './signup' },
      { id: 'brandkit', label: 'Brandkit', href: './brandkit' },
      { id: 'download', label: 'Download', href: './download' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'glossary', label: 'Glossary', href: './glossary' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Plans & Support',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: './pricing' },
      { id: 'login', label: 'Login', href: './login' },
      { id: 'create-account', label: 'Create Account', href: './signup' },
      { id: 'referral-program', label: 'Referral Program', href: './referral-program' },
      { id: 'legal', label: 'Legal', href: './legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Insurance',
    links: [
      { label: 'Request Coverage', href: '/request' },
      { label: 'Underwrite Trades', href: '/underwrite' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'About Us', href: '/about' }],
  },
];
