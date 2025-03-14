

import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";



export default function App() {
        const apiKey = import.meta.env.VITE_OMDB_API_KEY
        console.log(import.meta.env.VITE_OMDB_API_KEY);

// State to hold movie data
const [movie, setMovie] = useState(null);

// Function to get movies
const getMovie = async(searchTerm) => {
  try{
  
  // Make fetch request and store the response
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  );
  
  // Parse JSON response into a JavaScript object
  const data = await response.json();
  // Set the Movie state to the received data
  setMovie(data);
} catch(e) {
  console.error(e);
}
};

// We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    const fetchRandomMovie = () => {
      const moviesList = ["Baby days out", "Lord of The Rings", "Harry Potter", "Final Destination", "Jumanji", "Gladiator" ,"Shrek"];

      const selectedMovie = moviesList[Math.floor(Math.random()* moviesList.length)];

    }
    getMovie(selectedMovie);
    
    fetchRandomMovie();
}, []);

  return (
    <div className="App">
     <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

