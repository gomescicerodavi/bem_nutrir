import type { Metadata } from "next";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css";
import styles from '@/styles/Layout.module.css';

export const metadata: Metadata = {
  title: "Bem-Nutrir - Nutrição para Adolescentes",
  description: "Plataforma de educação em nutrição para adolescentes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
