'use client';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Banner Principal */}
      <section style={{
        background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '12px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿 Bem-Nutrir</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>
          Sua jornada para uma vida mais saudável começa aqui!
        </p>
        <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', opacity: 0.9 }}>
          Receitas deliciosas, dicas práticas e conhecimento sobre nutrição funcional
        </p>
      </section>

      {/* Cards de Destaque */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '2rem' }}>Explore Nossos Conteúdos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { icon: '👨‍🍳', title: 'Receitas', desc: 'Pratos saudáveis e saborosos' },
            { icon: '💡', title: 'Dicas Práticas', desc: 'Orientações para o dia a dia' },
            { icon: '🍗', title: 'Nutrição Funcional', desc: 'Alimentos que curam' },
            { icon: '💊', title: 'Suplementação', desc: 'Suplementos naturais' },
            { icon: '⭐', title: 'Superalimentos', desc: 'Alimentos super nutritivos' },
            { icon: '⚖️', title: 'Calculadora IMC', desc: 'Monitore seu peso' },
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOME*/}
      <section style={{
        background: '#f9f9f9',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '3rem'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Sobre o Bem-Nutrir</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
          Bem-Nutrir é uma plataforma dedicada a ensinar adolescentes sobre a importância da nutrição 
          equilibrada. Acreditamos que uma alimentação saudável é a base para uma vida plena e feliz.
        </p>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          Aqui você encontrará receitas práticas, informações sobre alimentos funcionais, 
          superalimentos, suplementação natural e ferramentas para monitorar sua saúde. Tudo pensado 
          especialmente para você, adolescente que quer viver melhor!
        </p>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Comece Sua Jornada Hoje!</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Navegue pelos diferentes conteúdos no menu lateral e descubra o mundo da nutrição saudável.
        </p>
        <button style={{
          background: 'white',
          color: '#27ae60',
          border: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'all 0.3s'
        }}>
          Explorar Conteúdos
        </button>
      </section>
    </div>
  );
}
