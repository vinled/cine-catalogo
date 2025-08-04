// src/app/components/MovieCard.js
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  // A URL base para as imagens do TMDB
  const imageURL = "https://image.tmdb.org/t/p/w500";

  return (
    <article className={styles.movieCard}>
      {/* Concatenamos a URL base com o caminho do pôster do filme */}
      <img className={styles.poster} src={`${imageURL}${movie.poster_path}`} alt={`Pôster de ${movie.title}`} />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        {/* Usamos toFixed(1) para mostrar a nota com apenas uma casa decimal */}
        <p>Nota: {movie.vote_average.toFixed(1)}</p>
      </div>
    </article>
  );
}