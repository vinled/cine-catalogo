// Passo 1: Selecionar o elemento da galeria no nosso HTML.
// É como dizer ao JavaScript: "Encontre a estante onde vamos colocar os filmes".
const galleryGrid = document.querySelector('.gallery-grid');

// Passo 2: Percorrer (fazer um "loop") por cada item do nosso array 'movies'.
// O array 'movies' está vindo do arquivo data.js que carregamos antes.
// Para cada 'movie' encontrado no array, vamos executar o código que está aqui dentro.
movies.forEach(movie => {
  
  // Passo 3: Criar um novo elemento HTML <article> na memória do navegador.
  // Por enquanto, ele ainda não está na tela, é apenas um rascunho.
  const movieCard = document.createElement('article');
  
  // Passo 4: Adicionar a classe CSS 'movie-card' ao nosso novo <article>.
  // Isso garante que ele vai pegar todo o estilo que já definimos no style.css.
  movieCard.classList.add('movie-card');
  
  // Passo 5: Preencher o nosso <article> com o HTML do card do filme.
  // Usamos as crases (``) para poder colocar as variáveis (como movie.posterURL) direto no texto.
  movieCard.innerHTML = `
    <img src="${movie.posterURL}" alt="Pôster do filme ${movie.title}">
    <h3>${movie.title}</h3>
    <p>Nota: ${movie.rating}</p>
  `;
  
  // Passo 6: Anexar o card de filme que criamos à nossa galeria na página.
  // Este é o momento em que o card finalmente aparece na tela para o usuário.
  galleryGrid.appendChild(movieCard);
});