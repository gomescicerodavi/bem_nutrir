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

  const preparoSteps = receita.modo_preparo
    .split('. ')
    .map((step) => step.trim())
    .filter((step) => step.length > 0);

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
        <div className={styles.detailGrid}>
          <div className={styles.card}>
            <h2>Ingredientes</h2>
            <ul className={styles.list}>
              {receita.ingredientes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Informação nutricional</h2>
            <ul className={styles.nutritionList}>
              <li>Calorias: {receita.calorias} kcal</li>
              <li>Proteínas: {receita.proteinas} g</li>
              <li>Carboidratos: {receita.carboidratos} g</li>
              <li>Gorduras: {receita.gorduras} g</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Modo de preparo</h2>
          <ol className={styles.steps}>
            {preparoSteps.map((step, index) => (
              <li key={`${index}-${step}`}>{step}</li>
            ))}
          </ol>
        </div>

        <div className={styles.noteCard}>
          <h2>Dica especial</h2>
          <p>
            Experimente ajustar os temperos ao final do preparo e sirva imediatamente para
            aproveitar sabores frescos. Para uma versão ainda mais leve, reduza um pouco a
            quantidade de farinha ou adicione ervas frescas ao final.
          </p>
        </div>
      </section>
    </div>
  );
}
