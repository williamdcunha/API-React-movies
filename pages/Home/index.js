import { Container, MovieList, Movie } from "./styles.js";
import { APIkey } from '../../config/key.js';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    const [movie, setMovies] = useState([])
  
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
    }, [])


    return (
        <Container>
            <h1>
                WilliamFLIX
            </h1>
            <MovieList>
                {movie.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                   
                   )
                })}
             </MovieList>
        </Container>

    );
}

export default Home;