import type { Metadata } from 'next';
import './../_style/globals.css';
import Header from '@/_components/Header';
import Footer from '@/_components/Footer';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: {
    template: '%s | 19mod',
    default: '19mod portfolio website',
  },
  description:
    '19modのポートフォリオサイトです。これまでのプロジェクト、スキル、そしてソフトウェアエンジニアとしての経験を紹介しています。履歴書のPDF版もダウンロード可能です。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
