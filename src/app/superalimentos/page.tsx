'use client';

import SuperfoodCard from '@/components/SuperfoodCard';
import superalimentos from '@/data/superalimentos.json';
import styles from '@/styles/PagesLayout.module.css';

export default function Superalimentos() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>⭐ Superalimentos</h1>
        <p>Alimentos extraordinariamente nutritivos e poderosos para sua saúde</p>
      </section>

      <div className={styles.infoBox}>
        <h2>O que são Superalimentos?</h2>
        <p>
          Superalimentos são alimentos que contêm uma densidade extraordinária de nutrientes. 
          São ricos em vitaminas, minerais, antioxidantes e outros compostos benéficos à saúde. 
          Incluir superalimentos na dieta é uma forma simples de potencializar sua nutrição.
        </p>
      </div>

      <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>
        Conheça Nossos Superalimentos
      </h2>

      <section className={styles.contentGrid}>
        {superalimentos.map(alimento => (
          <SuperfoodCard
            key={alimento.id}
            nome={alimento.nome}
            descricao={alimento.descricao}
            beneficios={alimento.beneficios}
            como_usar={alimento.como_usar}
          />
        ))}
      </section>

      <section style={{
        background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '3rem',
        textAlign: 'center'
      }}>
        <h2>Como Incorporar Superalimentos na Sua Dieta?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            { emoji: '🥗', title: 'Saladas', desc: 'Adicione em suas saladas diárias' },
            { emoji: '🥤', title: 'Smoothies', desc: 'Misture em bebidas nutritivas' },
            { emoji: '🍲', title: 'Receitas', desc: 'Use como ingrediente principal' },
            { emoji: '🍽️', title: 'Snacks', desc: 'Coma como acompanhamento' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
              <strong>{item.title}</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
