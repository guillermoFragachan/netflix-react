import { Component } from "react";

class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=c73430e0&s=harry%20potter"
    );
    const data = await response.json();
    this.setState({ movies: data });
  };

  render() {
    console.log(this.state.movies);
    return (
      <div>
        {/* <div className="d-flex flex-wrap justify-content-around">
          {this.state.movies.map((movie) => (
            <SingleMovie Poster={movie.Poster} imdbId={movie.imdbId} />
          ))}
        </div> */}
      </div>
    );
  }
}

export default MovieList;
