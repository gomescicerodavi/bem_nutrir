import styles from '@/styles/SuperfoodCard.module.css';

interface SuperfoodCardProps {
  nome: string;
  descricao: string;
  beneficios: string[];
  como_usar: string;
}

export default function SuperfoodCard({ 
  nome, 
  descricao, 
  beneficios,
  como_usar 
}: SuperfoodCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholder}>⭐</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{nome}</h3>
        <p className={styles.description}>{descricao}</p>
        <div className={styles.benefits}>
          <strong>Benefícios:</strong>
          <ul>
            {beneficios.map((beneficio, idx) => (
              <li key={idx}>{beneficio}</li>
            ))}
          </ul>
        </div>
        <div className={styles.usage}>
          <strong>Como usar:</strong>
          <p>{como_usar}</p>
        </div>
      </div>
    </div>
  );
}
