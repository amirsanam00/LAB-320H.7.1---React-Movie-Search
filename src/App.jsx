

import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import.meta.env.VITE_OMDB_API_KEY


export default function App() {

console.log(import.meta.env.VITE_OMDB_API_KEY);

// State to hold movie data
const [movie, setMovie] = useState(null);

// Function to get movies
const getMovie = async(searchTerm) => {
  try{
  
  // Make fetch request and store the response
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
  );
  
  // Parse JSON response into a JavaScript object
  const data = await response.json();
  // Set the Movie state to the received data
  setMovie(data);
} catch(e) {
  console.error(e);
}
}

// We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Guardians of the Galaxy Vol. 2");
  }, []);

  return (
    <div className="App">
     <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}