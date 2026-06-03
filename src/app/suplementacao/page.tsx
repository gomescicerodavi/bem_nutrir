'use client';

import suplementos from '@/data/suplementos.json';
import styles from '@/styles/PagesLayout.module.css';

export default function Suplementacao() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>💊 Suplementação Orgânica</h1>
        <p>Suplementos naturais para potencializar sua saúde</p>
      </section>

      <div className={styles.infoBox}>
        <h2>Por que Suplementos Orgânicos?</h2>
        <p>
          Suplementos orgânicos são derivados de fontes naturais, sem químicos sintéticos. 
          Eles complementam sua alimentação com nutrientes essenciais que às vezes faltam na dieta diária. 
          Sempre consulte um nutricionista antes de começar qualquer suplementação.
        </p>
      </div>

      <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>
        Suplementos Recomendados
      </h2>

      <section className={styles.contentGrid}>
        {suplementos.map(suplemento => (
          <div key={suplemento.id} style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💚</div>
            <h3 style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>{suplemento.nome}</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.95rem' }}>
              {suplemento.descricao}
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '0.5rem' }}>
                Benefícios:
              </strong>
              <ul style={{ color: '#666', paddingLeft: '1.5rem', margin: 0 }}>
                {suplemento.beneficios.map((ben, idx) => (
                  <li key={idx}>{ben}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e0e0e0' }}>
              <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '0.3rem' }}>
                Origem:
              </strong>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>{suplemento.origem}</p>
            </div>

            <div style={{
              background: '#e8f5e9',
              padding: '0.8rem',
              borderRadius: '6px',
              fontSize: '0.85rem',
              color: '#1b5e20',
              marginBottom: '0.8rem'
            }}>
              <strong>Recomendação:</strong>
              <p style={{ margin: '0.3rem 0 0 0' }}>{suplemento.recomendacao}</p>
            </div>

            <div style={{
              background: '#fff3cd',
              padding: '0.8rem',
              borderRadius: '6px',
              fontSize: '0.85rem',
              color: '#856404'
            }}>
              <strong>⚠️ Importante:</strong>
              <p style={{ margin: '0.3rem 0 0 0' }}>{suplemento.precaucoes}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{
        background: '#fff3cd',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '3rem',
        borderLeft: '4px solid #ff9800'
      }}>
        <h3 style={{ color: '#856404', marginBottom: '1rem' }}>⚠️ Informação Importante</h3>
        <p style={{ color: '#856404', margin: 0 }}>
          Este conteúdo é informativo e educativo. Antes de iniciar qualquer suplementação, 
          consulte um nutricionista ou médico para garantir que seja apropriado para você.
        </p>
      </section>
    </div>
  );
}
