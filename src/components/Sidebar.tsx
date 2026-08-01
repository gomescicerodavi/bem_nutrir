'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Receitas', href: '/receitas', icon: '👨‍🍳' },
    { label: 'Dicas Práticas', href: '/dicas', icon: '💡' },
    { label: 'Nutrição Funcional', href: '/nutricao-funcional', icon: '🍗' },
    { label: 'Suplementação Orgânica', href: '/suplementacao', icon: '💊' },
    { label: 'Superalimentos', href: '/superalimentos', icon: '⭐' },
    { label: 'Calculadora IMC', href: '/calculadora-imc', icon: '⚖️' },
    { label: 'Instagram', href: '#', icon: '📸', external: true },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.href} className={styles.menuItem}>
              {item.external ? (
                <a 
                  href="https://www.instagram.com/bemnutrir._?igsh=MTE1MHp6a3ZhN2hyNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.label}>{item.label}</span>
                </a>
              ) : (
                <Link 
                  href={item.href}
                  className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.label}>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
