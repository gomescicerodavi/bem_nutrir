'use client';

import ArticleCard from '@/components/ArticleCard';
import nutricaoData from '@/data/nutricao-funcional.json';
import styles from '@/styles/PagesLayout.module.css';

export default function NutricaoFuncional() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>🍗 Nutrição Funcional</h1>
        <p>Alimentos que vão muito além da nutrição básica</p>
      </section>

      <div className={styles.infoBox}>
        <h2>O que é Nutrição Funcional?</h2>
        <p>
          Nutrição funcional é o estudo de alimentos e seus componentes que trazem benefícios 
          à saúde além da nutrição básica. Alimentos funcionais possuem propriedades que ajudam 
          a prevenir doenças, melhorar a imunidade e aumentar a vitalidade.
        </p>
      </div>

      <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem', color: '#2c3e50' }}>
        Alimentos Funcionais Essenciais
      </h2>

      <section className={styles.contentGrid}>
        {nutricaoData.map(item => (
          <div key={item.id} style={{
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
            <h3 style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>{item.titulo}</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.95rem' }}>
              {item.descricao}
            </p>
            <p style={{ color: '#666', marginBottom: '1rem', lineHeight: 1.6 }}>
              {item.conteudo}
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#2c3e50' }}>Alimentos:</strong>
              <ul style={{ color: '#666', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                {item.alimentos.map((alimento, idx) => (
                  <li key={idx}>{alimento}</li>
                ))}
              </ul>
            </div>

            <div style={{
              background: '#e8f5e9',
              padding: '1rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              color: '#1b5e20'
            }}>
              <strong>Benefícios:</strong>
              <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.2rem' }}>
                {item.beneficios.map((beneficio, idx) => (
                  <li key={idx}>{beneficio}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
