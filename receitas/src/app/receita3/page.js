"use client"; 
import React, { useState } from 'react';


export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MYKEY}&s=${searchQuery}`);
      const searchData = await res.json();
      setSearchResults(searchData.Search || []); 
    }
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Digite o título do filme..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Pesquisar</button>
        </div>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((m) => (
            <div key={m.imdbID} className="movie-card">
              <img src={m.Poster} alt={m.Title} className="movie-poster" />
              <div className="movie-title">{m.Title} ({m.Year})</div>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
      <style jsx>{`
        .movie-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .movie-poster {
          width: 200px; /* Tamanho padrão para o cartaz do filme */
        }
        .movie-title {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
