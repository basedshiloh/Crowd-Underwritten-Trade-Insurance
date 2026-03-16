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
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'docs', label: 'Docs', href: './docs' },
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
];
