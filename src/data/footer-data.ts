import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Insurance',
    links: [
      { label: 'Request Coverage', href: '/request' },
      { label: 'Underwrite Trades', href: '/underwrite' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://insure-agent.gitbook.io/insure-agent-docs/' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'X (formerly Twitter)', href: '#' },
      { label: 'X Community', href: '#' },
      { label: 'Dexscreener', href: '#' },
    ],
  },
];
