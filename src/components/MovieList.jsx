import { Component } from "react";
import SingleMovie from "./SingleMovie";
import Spinner from "react-bootstrap/Spinner";
class MovieList extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://netbackend.herokuapp.com/media/"
    );
    const data = await response.json();
    this.setState({ movies: data, loading: false });
    console.log(data)
  };

  render() {
    return (
      <div id="horror" className="row">
        {this.state.loading && <Spinner animation="border" variant="danger" />}

        {this.state.movies.length > 0 &&
          //  console.log(this.state.movies)

          this.state.movies.map((movie) => (
            <SingleMovie img={movie.Poster} id={movie.imdbID} />
          ))}
      </div>
    );
  }
}

export default MovieList;
