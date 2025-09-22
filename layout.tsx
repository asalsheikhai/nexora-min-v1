import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'NEXORA — AR Showroom',
  description: 'Minimal deployable app with AR demo page.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
