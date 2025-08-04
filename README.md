# Cine-Catálogo 🎬

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> **Status do Projeto:** Em desenvolvimento 🚧

Projeto desenvolvido como parte de um plano de estudos intensivo para a transição de carreira para a área de Desenvolvimento Front-End, aplicando conceitos modernos de React, Next.js e consumo de APIs.

###  Demo Online
*(Adicione aqui o link do seu site quando fizermos o deploy na Vercel)*

### Screenshot
*(Tire um print da tela do seu projeto funcionando e adicione aqui. Você pode arrastar a imagem para o editor do README no GitHub)*
![Screenshot do Cine-Catálogo](./screenshot.png)

## 📄 Descrição

Aplicação web interativa para descoberta de filmes, que permite aos usuários explorar um catálogo de títulos populares buscados em tempo real. Este projeto foi desenvolvido como uma forma prática de aplicar e demonstrar conceitos de desenvolvimento front-end moderno, focando em componentização, consumo de APIs e design responsivo.

## ✨ Funcionalidades

- **Galeria Dinâmica:** Renderização de uma galeria de filmes populares a partir de dados consumidos da API do The Movie Database (TMDB).
- **Componentização com React:** Estrutura baseada em componentes reutilizáveis (`Header`, `MovieCard`), promovendo um código limpo, modular e de fácil manutenção.
- **Estilização com CSS Modules:** Estilos escopados para cada componente, evitando conflitos de CSS em escala global.
- **Design Responsivo:** Interface totalmente adaptável a diferentes tamanhos de tela (mobile, tablet e desktop).
- **Testes Unitários:** Testes iniciais com Jest e React Testing Library para garantir a qualidade e o funcionamento esperado dos componentes.

## 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca principal para a construção da interface de usuário.
- **Next.js:** Framework React para otimização, roteamento e renderização.
- **JavaScript (ES6+):** Linguagem base para toda a lógica da aplicação.
- **CSS Modules:** Para estilização de componentes de forma isolada.
- **API RESTful:** Consumo de dados do [The Movie Database (TMDB)](https://www.themoviedb.org/).
- **Jest & React Testing Library:** Para a execução de testes automatizados.
- **Git & GitHub:** Para versionamento e hospedagem do código.

## 🚀 Como Rodar o Projeto Localmente

Para executar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/vinled/cine-catalogo.git](https://github.com/vinled/cine-catalogo.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd cine-catalogo
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    - Crie um arquivo chamado `.env.local` na raiz do projeto.
    - Adicione sua chave da API do TMDB dentro dele, da seguinte forma:
      ```
      NEXT_PUBLIC_TMDB_API_KEY=SUA_CHAVE_AQUI
      ```

5.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  Abra seu navegador e acesse `http://localhost:3000`.

## 📚 Aprendizados

Este projeto foi fundamental para solidificar meu conhecimento em:

- Criação de interfaces dinâmicas e reativas com **React**.
- Utilização de **Hooks** como `useState` para gerenciamento de estado e `useEffect` para efeitos colaterais (API calls).
- A importância da **componentização** para a organização e reutilização de código.
- Consumo de **APIs externas** de forma assíncrona com `async/await`.
- O fluxo de trabalho com **Git e GitHub** para controle de versão.
- Iniciação aos **testes automatizados**, uma prática essencial para o desenvolvimento de software de qualidade.

---
Feito por Vinicius Ledesma.
