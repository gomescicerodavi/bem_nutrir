# Skill: Bem-Nutrir

## Descrição
Esta skill cria uma página web completa para o site Bem-Nutrir utilizando Next.js e JavaScript, sem banco de dados, com conteúdo estático e gerenciamento local de informações.

## Entradas
- `nomeSite` (string) — nome do site.
- `tema` (string) — tema visual da aplicação.
- `conteudos` (array) — lista de artigos, receitas e dicas exibidos localmente.

## Saída
- Página web responsiva com sidebar de navegação, seções de conteúdo, calculadora de IMC e integração com Instagram.

## Instruções
1. Criar um projeto utilizando Next.js com JavaScript.
2. Desenvolver um layout responsivo voltado para adolescentes.
3. Exibir uma sidebar integrada ao cabeçalho contendo:
   - Home
   - Receitas
   - Dicas Práticas
   - Nutrição Funcional
   - Suplementação Orgânica
   - Superalimentos
   - Calculadora de IMC
   - Instagram
   - Painel Administrativo
4. Criar a página Home com:
   - Banner principal
   - Cards de destaque
   - Últimos conteúdos
5. Criar a página Receitas com:
   - Cards de receitas
   - Campo de pesquisa
   - Informações nutricionais
6. Criar a página Dicas Práticas com artigos e dicas rápidas.
7. Criar a página Nutrição Funcional com conteúdos educativos.
8. Criar a página Suplementação Orgânica com informações sobre suplementos naturais.
9. Criar a página Superalimentos com cards informativos.
10. Implementar uma Calculadora de IMC utilizando JavaScript.
11. Criar uma seção de integração com Instagram através de links para perfil e postagens.
12. Criar um Painel Administrativo local sem banco de dados para:
    - Adicionar conteúdos
    - Editar conteúdos
    - Excluir conteúdos
13. Armazenar os dados utilizando:
    - Arquivos JSON locais
    - LocalStorage do navegador
14. Utilizar:
    - Next.js
    - JavaScript
    - CSS Modules ou Tailwind CSS
15. Garantir compatibilidade com dispositivos móveis, tablets e desktops.

## Estrutura Recomendada

/src
├── pages
│   ├── index.js
│   ├── receitas.js
│   ├── dicas.js
│   ├── nutricao-funcional.js
│   ├── suplementacao-organica.js
│   ├── superalimentos.js
│   ├── calculadora-imc.js
│   ├── instagram.js
│   └── admin.js
│
├── components
│   ├── Header.js
│   ├── Sidebar.js
│   ├── Footer.js
│   ├── RecipeCard.js
│   ├── ArticleCard.js
│   ├── SuperfoodCard.js
│   └── BMICalculator.js
│
├── data
│   ├── receitas.json
│   ├── artigos.json
│   └── superalimentos.json
│
├── styles
│   └── globals.css
│
└── public
    └── images

## Exemplo

Entrada:
nomeSite: "Bem-Nutrir"
tema: "verde"

Saída:
Aplicação Next.js responsiva contendo:
- Sidebar navegável
- Página inicial moderna
- Receitas
- Dicas práticas
- Nutrição funcional
- Suplementação orgânica
- Superalimentos
- Calculadora de IMC
- Integração com Instagram
- Painel administrativo local sem banco de dados