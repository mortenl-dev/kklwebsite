import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'ISP - Institut for Seksualpsykologi',
  description: 'Efteruddannelse, supervision og vidensformidling inden for seksualpsykologi, parterapi og sexterapi.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
