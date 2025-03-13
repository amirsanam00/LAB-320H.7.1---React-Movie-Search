

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
    `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
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


{
"SCIENCE BOOKS"

"List of books and authors"

const scienceBookList = `https://www.googleapis.com/books/v1/volumes?apikey="askdjsgaj3jkdf34SDKSJ"?q="${bookCategory}"`
// Now, scienceBookList should return some JSON
// That JSON RESPONSE might look like:
/*
[
{
"title": "Biology",
"authorFirstName": "Bob",
"authorLastName": "the Bio Guy",
"bookCover": "ksdjakhelkfhefioefhalkhsdlkahdskadh",
"content": "akhdaw akjldksd kahdkldjad akdjakjd"
},
{
"title": "Chemistry",
"authorFirstName": "Jane",
"authorLastName": "the Chem Gal",
"bookCover": "ksdjakhelkfhefioefhlkahdskadh",
"content": "akhdaw akjldksd kahdkldjad akdjakjd"
},
{
"title": "Physics",
"authorFirstName": "Pete",
"authorLastName": "the Rock Climber",
"bookCover": "ksdjakhelkfhefioefhalkhsdlkahddh",
"content": "akhdaw akjldksd kahdkldjad akdjakjd"
}
]
*/

scienceBookList.forEach( (book) => {
  book.bookCover
  ` - ${book.title} by ${book.authorFirstName} ${book.authorLastName}`
  
}
)

}