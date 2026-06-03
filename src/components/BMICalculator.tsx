'use client';

import { useState } from 'react';
import styles from '@/styles/BMICalculator.module.css';

export default function BMICalculator() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState<number | null>(null);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);

    if (alturaMetros && pesoKg) {
      const novoImc = pesoKg / (alturaMetros * alturaMetros);
      setImc(novoImc);

      if (novoImc < 18.5) {
        setCategoria('Abaixo do peso');
      } else if (novoImc < 25) {
        setCategoria('Peso normal');
      } else if (novoImc < 30) {
        setCategoria('Sobrepeso');
      } else {
        setCategoria('Obesidade');
      }
    }
  };

  const limpar = () => {
    setAltura('');
    setPeso('');
    setImc(null);
    setCategoria('');
  };

  return (
    <div className={styles.calculator}>
      <h2>Calculadora de IMC</h2>
      <p className={styles.description}>
        Calcule seu Índice de Massa Corporal (IMC)
      </p>

      <div className={styles.inputs}>
        <div className={styles.inputGroup}>
          <label htmlFor="altura">Altura (cm)</label>
          <input
            id="altura"
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="peso">Peso (kg)</label>
          <input
            id="peso"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.calcBtn} onClick={calcularIMC}>
          Calcular IMC
        </button>
        <button className={styles.clearBtn} onClick={limpar}>
          Limpar
        </button>
      </div>

      {imc !== null && (
        <div className={`${styles.resultado} ${styles[categoria.replace(/\s+/g, '-').toLowerCase()]}`}>
          <div className={styles.resultadoContent}>
            <h3>Seu IMC: <span>{imc.toFixed(2)}</span></h3>
            <p className={styles.categoria}>{categoria}</p>
            <div className={styles.escala}>
              <span>Abaixo: &lt;18.5</span>
              <span>Normal: 18.5-24.9</span>
              <span>Sobrepeso: 25-29.9</span>
              <span>Obesidade: ≥30</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
