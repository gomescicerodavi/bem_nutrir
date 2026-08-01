import Link from 'next/link';
import styles from '@/styles/ArticleCard.module.css';

interface ArticleCardProps {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  categoria?: string;
}

export default function ArticleCard({ 
  id,
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
          <Link href={`/dicas/${id}`} className={styles.button}>
            Ler Mais
          </Link>
        </div>
      </div>
    </article>
  );
}
