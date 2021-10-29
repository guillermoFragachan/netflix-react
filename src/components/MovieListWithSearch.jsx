import { Component } from "react";
import SingleMovie from "./SingleMovie";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
class MovieListWithSearch extends Component {
  state = {
    query: [],
    movies: [],
    loading: true,
  };

  fetching = async (query) => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=c73430e0&s=" + query
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data.Search, loading: false });
        console.log(this.state.loading);
      } else {
        alert("Something went wrong :(");
      }
    } catch {
      this.setState({ movies: [] });
      console.log("ERROR");
    }
  };

  componentDidMount = async () => {
    this.fetching("32132132131");
  };

  render() {
    return (
      <div>
        <div>
          <Form.Group className="m-3">
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.query}
              onChange={(e) =>
                this.setState({
                  query: e.target.value,
                })
              }
              onClick={(e) => {
                e.target.value.length > 3 && this.fetching(this.state.query);
              }}
            />
          </Form.Group>
        </div>

        <div id="horror" className="row">
          {this.state.loading && (
            <Spinner animation="border" variant="danger" />
          )}

          {this.state.movies ? (
            //  console.log(this.state.movies)

            this.state.movies.map((movie) => (
              <SingleMovie img={movie.Poster} id={movie.imdbID} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  }
}

export default MovieListWithSearch;
