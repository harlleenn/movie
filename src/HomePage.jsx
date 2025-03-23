import React from "react";
import { useEffect,useState } from "react";
import { PopularMovies  } from "./api";
// two things first when i am able to load more and the seocnd is that when i clcik on the movies gives me an overewv 
 function  HomePage () {
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState("");
  const [message,setMessage] = useState("");
  const [results,setResults] = useState("");
  const [selectedMovie,setSelectedMovie] = useState(null)

  useEffect(() => {
    const watchMovie =  async () => {
      try {
        const response = await PopularMovies();
         setMovies(response)
         console.log(response)
      }
      catch (error) {
        console.log("there was an error", error)
      }
    }
    watchMovie()
  },[]
)



  const filteredMovie = movies.filter((movie) => 
  movie.title.toLowerCase().includes(query.toLowerCase()) )

  
  
useEffect(() =>  {
  if(query && filteredMovie.length === 0) {
      setMessage("No such movies found :(")
  }else {
    console.log('wait showing your movies')
    setMessage("")
  }
},[query,filteredMovie]
)
  
useEffect(() => {
  setResults(query)
},[query,filteredMovie])


const showReview =  (movie) => {
  setSelectedMovie(movie)
  console.log(movie)
}




  return (
  <div className="mainContainer">
      <h1 className="movieMania">Movie Mania</h1>

    <div className="searchBar">

        <input  placeholder="Enter movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value) }
          />

      <button>Submit</button>
    </div>
     


      <div className="no-movie"> 
        {message && <p  className="no-movie-text">{message}</p>}
   
      </div>
      <div className="no-movie">
      {results &&  <p className="results"> Showing results for {results} </p>}
      </div>
    
     


        <div className="movieCard">   
          {filteredMovie.map((movie) => (
          <div key={movie.id} >
            <div className="movieCardContainer">
               <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x400"} alt={movie.title} className="movieImage" 
              onClick={() => {showReview(movie)}} />

                {selectedMovie ?.id === movie.id && (
                  <div className="overview"> {selectedMovie.overview}
                    <button onClick={() => setSelectedMovie(null)}>Close</button> 
                    </div>
                ) }
               

           <div className="title">
              {movie.title}
            </div>

          </div>
          
          <div className="pop">
             Rating {movie.popularity}
             {movie.overview}
          </div>
        </div>
      
    ))}
    </div>
  </div>   
  )
}
export default HomePage

  
