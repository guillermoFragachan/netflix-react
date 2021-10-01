import { Component } from "react";
import SingleMovie from "./SingleMovie";
import Form from 'react-bootstrap/Form'
class MovieListWithSearch extends Component {
  state = {
    query: [],
    movies: [0],
  };

  

  filterMovieList = (list) => {
    const isFound = list.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    console.log(isFound);

    return isFound;
  };

  fetching= async (query) =>{
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=c73430e0&s=" + query
    );
    let data = await response.json();
    this.setState({ movies: data.Search });
    console.log(this.state.movies)
  }

  componentDidMount = async () => {
    this.fetching('harry')
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
              onChange={(e) => this.setState({
                query: e.target.value,
              }) }
              onClick={(e)=>{
                
                e.target.value.length > 3 &&
                this.fetching(this.state.query)}}
            />
          </Form.Group>
        </div>

        <div id="horror" className="row">
    
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



   {/* {!this.state.query
            ? this.props.list.map((movie) => (
                <SingleMovie
                  id={movie.imdbID}
                  img={movie.Poster}
                
                />
              ))
            : this.filterMoviesList(this.props.list).map((movies) => (
              <SingleMovie
                  id={movie.imdbID}
                  img={movie.Poster}
                
                />
              ))} */}

export default MovieListWithSearch;
