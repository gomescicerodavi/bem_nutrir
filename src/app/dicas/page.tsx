'use client';

import ArticleCard from '@/components/ArticleCard';
import artigos from '@/data/artigos.json';
import styles from '@/styles/PagesLayout.module.css';

export default function Dicas() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>💡 Dicas Práticas</h1>
        <p>Dicas e truques para melhorar sua alimentação no dia a dia</p>
      </section>

      <section className={styles.contentGrid}>
        {artigos.map(artigo => (
          <ArticleCard
            key={artigo.id}
            id={artigo.id}
            titulo={artigo.titulo}
            descricao={artigo.descricao}
            data={artigo.data}
            categoria={artigo.categoria}
          />
        ))}
      </section>

      <section style={{
        background: '#f9f9f9',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '3rem',
        maxWidth: '800px'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>💭 Dica do Dia</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
          Comece seu dia com um copo de água morna com limão! Essa prática simples ajuda a:
        </p>
        <ul style={{ color: '#666', lineHeight: '2' }}>
          <li>✓ Hidratar o corpo</li>
          <li>✓ Desintoxicar naturalmente</li>
          <li>✓ Melhorar a digestão</li>
          <li>✓ Aumentar a imunidade</li>
          <li>✓ Ativar o metabolismo</li>
        </ul>
      </section>
    </div>
  );
}
