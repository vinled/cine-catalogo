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
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    // --- INÍCIO DA DEPURAÇÃO ---
    console.log('Chave de API sendo usada:', apiKey); // Vamos ver se a chave está sendo lida
    // --- FIM DA DEPURAÇÃO ---

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;

    // --- INÍCIO DA DEPURAÇÃO ---
    console.log('URL da Requisição:', url); // Vamos ver a URL final que está sendo chamada
    // --- FIM DA DEPURAÇÃO ---

    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results); 
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
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
