import styles from '@/styles/ArticleCard.module.css';

interface ArticleCardProps {
  titulo: string;
  descricao: string;
  data: string;
  categoria?: string;
}

export default function ArticleCard({ 
  titulo, 
  descricao, 
  data,
  categoria 
}: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholder}>📰</div>
      </div>
      <div className={styles.content}>
        {categoria && <span className={styles.category}>{categoria}</span>}
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{descricao}</p>
        <div className={styles.meta}>
          <span className={styles.date}>📅 {new Date(data).toLocaleDateString('pt-BR')}</span>
          <button className={styles.button}>Ler Mais</button>
        </div>
      </div>
    </article>
  );
}
