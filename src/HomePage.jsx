import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {

  const navigate = useNavigate()
return (
  <div>
    <div>movie cards</div> 
    {/* hehehe  i will be using an api first i will put it in env then we will do api calling then we will map over the movies
    something like movies.map(index,key) => {
    key={movie.id}}
    what will be shown {movie.title}
    {movie.name}
{movie.description}
and where the api will be called will seeee*/}
    
    <button onClick={() => navigate("/")}>go back to login page </button>
  </div>
 )  
}
export default HomePage;