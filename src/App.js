
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

// b8716084 api key

const API_URL= 'http://www.omdbapi.com?apikey=b8716084'



const App = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      searchMovies('spiderman');    
   }, []);


   const searchMovies = async (title) => {
      const response = await fetch (`${API_URL}&s=${title}`);
      const data = await response.json();

   setMovies(data.Search);
};

   

 return (
    <div className="app">

      <h1>MovieLand</h1>

      <div className="search">
         <input 
           value={searchTerm}
           onChange={(e) => setSearchTerm (e.target.value)}
           placeholder="search for movies"
         />
         <img
           src={SearchIcon}
           alt="search"
           onClick={() => searchMovies(searchTerm)}
         />
      </div>
      
      {movies?.length > 0 ? (
            <div className="container">

               {movies.map((movie) => (<MovieCard movie= {movie} key={movie.imdbID} /> ))}

            </div>
         ): (
            <div className='empty'> 
               <h2> no movies found </h2>
            </div>
         )}
   
         
    </div>

 );

};

export default App;