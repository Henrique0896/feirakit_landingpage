import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './globals.css';

export const metadata = {
  title: 'Feira Kit',
  description: 'created by FSVJ!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
