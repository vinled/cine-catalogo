// src/app/components/MovieCard.js
import Image from 'next/image'; // 1. Importamos o componente Image do Next.js
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const imageURL = "https://image.tmdb.org/t/p/w500";

  return (
    <article className={styles.movieCard}>
      {/* 2. Trocamos a tag <img> por <Image /> e adicionamos width e height */}
      <Image
        className={styles.poster}
        src={`${imageURL}${movie.poster_path}`}
        alt={`Pôster de ${movie.title}`}
        width={500}
        height={750}
      />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <p>Nota: {movie.vote_average.toFixed(1)}</p>
      </div>
    </article>
  );
}