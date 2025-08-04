import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Cine-Catálogo</h1>
        <form className={styles.searchBar}>
          <input type="text" placeholder="Buscar filmes..." />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </header>
  );
}