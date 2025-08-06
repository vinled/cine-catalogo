// src/app/components/__tests__/MovieCard.test.js

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard'; // Importamos o componente que vamos testar

// 1. O "describe" agrupa uma série de testes para o mesmo componente
describe('Componente MovieCard', () => {

  // 2. O "it" descreve um caso de teste específico
  it('deve renderizar o título, o pôster e a nota do filme corretamente', () => {

    // 3. FASE DE PREPARAÇÃO (Arrange)
    // Criamos um objeto "mock" (falso) com os dados de um filme que controlamos.
    const mockMovie = {
      id: 101,
      title: 'Um Filme de Teste',
      poster_path: '/teste.jpg',
      vote_average: 9.5,
    };

    // 4. FASE DE AÇÃO (Act)
    // Renderizamos o nosso componente em um ambiente de teste virtual,
    // passando o filme falso como prop.
    render(<MovieCard movie={mockMovie} />);

    // 5. FASE DE VERIFICAÇÃO (Assert)
    // Procuramos pelos elementos na tela virtual e verificamos se eles existem.
    const titleElement = screen.getByText('Um Filme de Teste');
    const ratingElement = screen.getByText('Nota: 9.5');
    const posterElement = screen.getByAltText('Pôster de Um Filme de Teste');

    expect(titleElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
  });

});