'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/PagesLayout.module.css';

interface ContentItem {
  id: number;
  titulo: string;
  descricao: string;
  tipo: 'receita' | 'artigo' | 'suplemento';
}

export default function Admin() {
  const [conteudos, setConteudos] = useState<ContentItem[]>([]);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipo: 'receita'
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Carregar dados do localStorage
  useEffect(() => {
    const dados = localStorage.getItem('bemnutrir_conteudos');
    if (dados) {
      setConteudos(JSON.parse(dados));
    }
  }, []);

  // Salvar no localStorage sempre que conteúdos mudam
  useEffect(() => {
    localStorage.setItem('bemnutrir_conteudos', JSON.stringify(conteudos));
  }, [conteudos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddOrUpdate = () => {
    if (!formData.titulo.trim() || !formData.descricao.trim()) {
      alert('Preencha todos os campos');
      return;
    }

    if (editingId !== null) {
      // Atualizar conteúdo existente
      setConteudos(conteudos.map(item =>
        item.id === editingId
          ? { ...item, ...formData }
          : item
      ));
      setEditingId(null);
    } else {
      // Adicionar novo conteúdo
      const novoConteudo: ContentItem = {
        id: Date.now(),
        ...formData
      };
      setConteudos([...conteudos, novoConteudo]);
    }

    // Limpar formulário
    setFormData({
      titulo: '',
      descricao: '',
      tipo: 'receita'
    });
  };

  const handleEdit = (item: ContentItem) => {
    setFormData({
      titulo: item.titulo,
      descricao: item.descricao,
      tipo: item.tipo
    });
    setEditingId(item.id);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este conteúdo?')) {
      setConteudos(conteudos.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setFormData({
      titulo: '',
      descricao: '',
      tipo: 'receita'
    });
    setEditingId(null);
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <h1>⚙️ Painel Administrativo</h1>
        <p>Gerencie os conteúdos do site</p>
      </section>

      {/* Formulário */}
      <section style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
          {editingId ? '✏️ Editar Conteúdo' : '➕ Adicionar Novo Conteúdo'}
        </h2>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2c3e50' }}>
              Título
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              placeholder="Digite o título"
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2c3e50' }}>
              Descrição
            </label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              placeholder="Digite a descrição"
              rows={4}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2c3e50' }}>
              Tipo
            </label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                cursor: 'pointer'
              }}
            >
              <option value="receita">Receita</option>
              <option value="artigo">Artigo</option>
              <option value="suplemento">Suplemento</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              onClick={handleAddOrUpdate}
              style={{
                background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                color: 'white',
                border: 'none',
                padding: '0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {editingId ? '💾 Atualizar' : '➕ Adicionar'}
            </button>
            {editingId && (
              <button
                onClick={handleCancel}
                style={{
                  background: '#e0e0e0',
                  color: '#333',
                  border: 'none',
                  padding: '0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s'
                }}
              >
                ❌ Cancelar
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Lista de Conteúdos */}
      <section>
        <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
          📋 Conteúdos Cadastrados ({conteudos.length})
        </h2>

        {conteudos.length === 0 ? (
          <div style={{
            background: '#f9f9f9',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            color: '#999'
          }}>
            <p>Nenhum conteúdo cadastrado ainda.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {conteudos.map(item => (
              <div key={item.id} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{
                      display: 'inline-block',
                      background: item.tipo === 'receita' ? '#ffc107' : item.tipo === 'artigo' ? '#17a2b8' : '#28a745',
                      color: 'white',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      marginRight: '0.5rem'
                    }}>
                      {item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{item.titulo}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{item.descricao.substring(0, 100)}...</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', minWidth: '180px' }}>
                  <button
                    onClick={() => handleEdit(item)}
                    style={{
                      background: '#2196f3',
                      color: 'white',
                      border: 'none',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={{
        background: '#e8f5e9',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '2rem',
        borderLeft: '4px solid #2ecc71'
      }}>
        <h3 style={{ color: '#1b5e20', marginBottom: '0.5rem' }}>💾 Armazenamento Local</h3>
        <p style={{ color: '#1b5e20', margin: 0, fontSize: '0.95rem' }}>
          Os dados são armazenados no navegador usando localStorage. Não podem ser perdidos ao recarregar a página, 
          mas serão perdidos se você limpar o histórico/cache do navegador.
        </p>
      </section>
    </div>
  );
}
