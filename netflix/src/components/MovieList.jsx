import { Component } from "react";
import SingleMovie from "./SingleMovie";
class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=c73430e0&s=harry%20potter"
    );
    const data = await response.json();
    this.setState({ movies: data.Search });
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-wrap justify-content-around">
          {
          this.state.movies.length > 0 &&
              //  console.log(this.state.movies)

          this.state.movies.map((movie) => (
            <SingleMovie img={movie.Poster} id={movie.imdbID} />
          ))
        
          
          
          
          }
        </div>
      </div>
    );
  }
}

export default MovieList;
