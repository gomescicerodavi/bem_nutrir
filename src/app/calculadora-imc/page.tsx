'use client';

import BMICalculator from '@/components/BMICalculator';
import styles from '@/styles/PagesLayout.module.css';

export default function CalculadoraIMC() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>⚖️ Calculadora de IMC</h1>
        <p>Monitore seu Índice de Massa Corporal</p>
      </section>

      <div className={styles.infoBox}>
        <h2>O que é IMC?</h2>
        <p>
          O Índice de Massa Corporal (IMC) é uma medida que relaciona seu peso com sua altura. 
          É um indicador simples de se você está com peso adequado para sua altura. 
          No entanto, o IMC é apenas uma ferramenta de triagem e não substitui o diagnóstico de um profissional de saúde.
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <BMICalculator />
      </div>

      <section style={{
        background: '#f9f9f9',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '3rem'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Interpretação dos Resultados</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            {
              faixa: 'Abaixo do Peso',
              imc: 'IMC < 18.5',
              cor: '#2196f3',
              desc: 'Seu peso está abaixo do recomendado para sua altura. Consulte um nutricionista para orientação.'
            },
            {
              faixa: 'Peso Normal',
              imc: '18.5 - 24.9',
              cor: '#2ecc71',
              desc: 'Parabéns! Seu peso está dentro da faixa saudável. Continue mantendo hábitos saudáveis.'
            },
            {
              faixa: 'Sobrepeso',
              imc: '25.0 - 29.9',
              cor: '#ff9800',
              desc: 'Seu peso está acima do recomendado. Considere melhorar sua alimentação e exercício físico.'
            },
            {
              faixa: 'Obesidade',
              imc: '≥ 30.0',
              cor: '#f44336',
              desc: 'Seu peso está significativamente acima do recomendado. Procure ajuda profissional.'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              borderLeft: `4px solid ${item.cor}`,
              padding: '1.5rem',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: item.cor, margin: '0 0 0.5rem 0' }}>{item.faixa}</h3>
              <p style={{ color: '#666', margin: '0 0 0.8rem 0', fontWeight: 'bold' }}>{item.imc}</p>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        background: '#e8f5e9',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '2rem',
        borderLeft: '4px solid #2ecc71'
      }}>
        <h2 style={{ color: '#1b5e20', marginBottom: '1rem' }}>💭 Dicas para Manter um Peso Saudável</h2>
        <ul style={{ color: '#1b5e20', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
          <li>Coma uma dieta equilibrada com frutas, vegetais, proteínas e grãos integrais</li>
          <li>Pratique atividade física regularmente (pelo menos 30 minutos por dia)</li>
          <li>Beba muita água ao longo do dia</li>
          <li>Evite alimentos ultra-processados e bebidas açucaradas</li>
          <li>Dorm bem - a qualidade do sono afeta seu peso</li>
          <li>Gerencie o estresse com técnicas de relaxamento</li>
          <li>Consulte regularmente um nutricionista ou médico</li>
        </ul>
      </section>

      <section style={{
        background: '#fff3cd',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '2rem',
        borderLeft: '4px solid #ff9800'
      }}>
        <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>⚠️ Importante</h3>
        <p style={{ color: '#856404', margin: 0 }}>
          O IMC é uma ferramenta de triagem geral. Ele não leva em conta composição corporal, 
          massa muscular ou outras variáveis. Para uma avaliação completa, consulte um profissional de saúde.
        </p>
      </section>
    </div>
  );
}
