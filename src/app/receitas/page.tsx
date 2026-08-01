'use client';

import { useState } from 'react';
import RecipeCard from '@/components/RecipeCard';
import receitas from '@/data/receitas.json';
import styles from '@/styles/PagesLayout.module.css';

export default function Receitas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReceitas, setFilteredReceitas] = useState(receitas);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = receitas.filter(r =>
      r.titulo.toLowerCase().includes(term) ||
      r.descricao.toLowerCase().includes(term)
    );
    setFilteredReceitas(filtered);
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>👨‍🍳 Receitas Saudáveis</h1>
        <p>Descubra receitas deliciosas e nutritivas para sua saúde</p>
      </section>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar receita..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>

      <section className={styles.contentGrid}>
        {filteredReceitas.length > 0 ? (
          filteredReceitas.map(receita => (
            <RecipeCard
              key={receita.id}
              id={receita.id}
              titulo={receita.titulo}
              descricao={receita.descricao}
              tempo_preparo={receita.tempo_preparo}
              porcoes={receita.porcoes}
              calorias={receita.calorias}
            />
          ))
        ) : (
          <div className={styles.noResults}>
            <p>Nenhuma receita encontrada com esse termo.</p>
          </div>
        )}
      </section>
    </div>
  );
}
