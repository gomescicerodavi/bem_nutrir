import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Bem-Nutrir</h3>
            <p>Plataforma de educação em nutrição para adolescentes.</p>
          </div>
          <div className={styles.section}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/receitas">Receitas</Link></li>
              <li><Link href="/dicas">Dicas</Link></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4>Redes Sociais</h4>
            <ul>
              <li><a href="https://www.instagram.com/bemnutrir._?igsh=MTE1MHp6a3ZhN2hyNA==" target="_blank" rel="noopener noreferrer">Instagram
              </a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2026 Bem-Nutrir. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
