import Link from 'next/link';
import { notFound } from 'next/navigation';
import receitas from '@/data/receitas.json';
import styles from '@/styles/RecipeDetail.module.css';

interface RecipeDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function RecipeDetail({ params }: RecipeDetailProps) {
  const { slug } = await params;
  const receita = receitas.find((item) => item.id === Number(slug));

  if (!receita) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/receitas" className={styles.backLink}>
        ← Voltar para receitas
      </Link>

      <section className={styles.hero}>
        <h1 className={styles.title}>{receita.titulo}</h1>
        <p className={styles.description}>{receita.descricao}</p>
        <div className={styles.meta}>
          <span>⏱️ {receita.tempo_preparo} min</span>
          <span>🍽️ {receita.porcoes} porções</span>
          <span>🔥 {receita.calorias} kcal</span>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.card}>
          <h2>Ingredientes</h2>
          <ul className={styles.list}>
            {receita.ingredientes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Modo de preparo</h2>
          <p className={styles.list}>{receita.modo_preparo}</p>
        </div>
      </section>
    </div>
  );
}
