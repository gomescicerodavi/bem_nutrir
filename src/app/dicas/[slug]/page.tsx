import Link from 'next/link';
import { notFound } from 'next/navigation';
import artigos from '@/data/artigos.json';
import styles from '@/styles/ArticleDetail.module.css';

interface ArticleDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetail({ params }: ArticleDetailProps) {
  const { slug } = await params;
  const artigo = artigos.find((item) => item.id === Number(slug));

  if (!artigo) {
    notFound();
  }

  const sections = artigo.conteudo.split('. ');
  const intro = sections[0] || artigo.conteudo;
  const body = sections.slice(1).filter(Boolean);

  return (
    <div className={styles.container}>
      <Link href="/dicas" className={styles.backLink}>
        ← Voltar para dicas
      </Link>

      <section className={styles.hero}>
        <h1 className={styles.title}>{artigo.titulo}</h1>
        <p className={styles.description}>{artigo.descricao}</p>
        <div className={styles.meta}>
          <span>📅 {new Date(artigo.data).toLocaleDateString('pt-BR')}</span>
          <span>💡 Dica prática</span>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.summaryBox}>
          <h2>Resumo rápido</h2>
          <p>{intro}.</p>
        </div>

        <div className={styles.sectionBlock}>
          <h2>O que fazer</h2>
          <ul className={styles.list}>
            {body.map((item, index) => (
              <li key={`${artigo.id}-${index}`}>{item.trim()}.</li>
            ))}
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <h2>Por que isso importa</h2>
          <p>
            Pequenas mudanças no dia a dia podem fazer uma grande diferença para a saúde,
            o bem-estar e a disposição. Aplicar essas dicas com constância ajuda a criar
            hábitos mais equilibrados e sustentáveis.
          </p>
        </div>
      </section>
    </div>
  );
}
