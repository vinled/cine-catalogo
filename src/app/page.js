// src/app/page.js

// Adicione esta linha no TOPO do arquivo para transformá-lo em um Componente de Cliente
"use client"; 

import { useState, useEffect } from 'react'; // 1. Importando os Hooks do React
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import styles from './page.module.css';

export default function Home() {
  // 2. Criamos um "estado" para armazenar nossa lista de filmes.
  // Começa como um array vazio [].
  const [movies, setMovies] = useState([]);

  // 3. Usamos o useEffect para buscar os dados DEPOIS que a página carregar.
  useEffect(() => {
    // Criamos uma função async para poder usar 'await'
    async function fetchMovies() {
      try {
        // Acessamos nossa chave de API guardada no .env.local
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
        
        const response = await fetch(url); // Faz a chamada para a API
        const data = await response.json(); // Converte a resposta para JSON
        
        // 4. Usamos setMovies para ATUALIZAR nosso estado com os filmes da API
        setMovies(data.results); 
      } catch (error) {
        console.error("Erro ao buscar filmes:", error); // Mostra um erro no console se algo der errado
      }
    }

    fetchMovies(); // Executamos a função de busca
  }, []); // O array vazio [] garante que este efeito rode apenas UMA VEZ.

  return (
    <main>
      <Header />
      <section className={styles.galleryGrid}>
        {/* O restante do código continua igual, mas agora o array 'movies' virá da API */}
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}