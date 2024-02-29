import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Footer } from './components/footer';

const poppins = Poppins({ weight: ['400', '700', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Feira Kit',
  description: 'created by FSVJ!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
