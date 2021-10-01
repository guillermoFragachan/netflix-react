import { Component } from "react";

class MovieListWithSearch extends Component {
  state = {
    query: [],
    movies: [],
  };

  search = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  filterMovieList = (list) => {
    const isFound = list.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    console.log(isFound);

    return isFound;
  };

  componentDidMount = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=c73430e0&s=" + this.state.query
    );
    const data = await response.json();
    this.setState({ movies: data });
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
              onChange={(e) => this.search(e)}
            />
          </Form.Group>
        </div>

        <div className="d-flex flex-wrap justify-content-around">
          {!this.state.query
            ? this.props.list.map((movie) => (
                <SingleBook
                  asin={books.asin}
                  image={books.img}
                  title={books.title}
                />
              ))
            : this.filterBookList(this.props.list).map((books) => (
                <SingleBook
                  asin={books.asin}
                  image={books.img}
                  title={books.title}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default MovieListWithSearch;
