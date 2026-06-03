import styles from '@/styles/RecipeCard.module.css';

interface RecipeCardProps {
  titulo: string;
  descricao: string;
  tempo_preparo: number;
  porcoes: number;
  calorias: number;
}

export default function RecipeCard({ 
  titulo, 
  descricao, 
  tempo_preparo, 
  porcoes, 
  calorias 
}: RecipeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholder}>👨‍🍳</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{descricao}</p>
        <div className={styles.info}>
          <span className={styles.infoItem}>⏱️ {tempo_preparo} min</span>
          <span className={styles.infoItem}>🍽️ {porcoes} porções</span>
          <span className={styles.infoItem}>🔥 {calorias} kcal</span>
        </div>
        <button className={styles.button}>Ver Receita</button>
      </div>
    </div>
  );
}
