import './globals.css';
import type { Metadata } from 'next';
import { nunito } from './fonts';
import Header from '@/components/Header';


export const metadata: Metadata = {
  title: 'Emigration',
  description: 'Information on relocation to Cyprus',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
  
      </body>
    </html>
  );
}
