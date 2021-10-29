import { useEffect, useState } from "react";
import MySpinner from "../components/MySpinner";
import Alert from "react-bootstrap/Alert";
import {
  Badge,
  Card,
  Container,
  ListGroup,
  Row
} from "react-bootstrap";

const MovieDetails = ({ match }) => {
  const [movieChosen, setMovieChosen] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoader] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  //Fetch the chosen movie
  const fetchMovie = async (movieClicked) => {
    try {
      setLoader(true);
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=e59f0763&i=" + movieClicked
      );
      const data = await response.json();
      if (data) {
        console.log(data);
        setMovieChosen(data);
        setLoader(false);
        setErrorMsg("");
      }
    } catch (error) {
      setErrorMsg("movie not found");
    }
  };

  //Fetch the comments of the chosen movie
  const fetchComments = async (movieClicked) => {
    try {
      setLoader(true);
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + movieClicked,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzM1Mjc5MTEsImV4cCI6MTYzNDczNzUxMX0.F2HXgaKR_ihOBpsXI4BmUJ5eRf43cEHcdeZ0INeXlTQ",
          },
        }
      );
      const data = await response.json();
      if (data) {
        console.log(data);
        setComments(data);
        setLoader(false);
        setErrorMsg("");
      }
    } catch (error) {
      setErrorMsg("movie not found");
    }
  };

  //ComponentDidMount
  useEffect(() => {
    //New URLparams but in react
    let movieClicked = match.params.id;
    //Fetching functions
    fetchMovie(movieClicked);
    fetchComments(movieClicked);
  }, []);

  return (
    //if
    movieChosen === null ? (
      <div className="spacer">
        {loading && <MySpinner />}
      </div>
    ) : (
      <Container>
        <Row>
          <Card className="card-movie-details">
            <Card.Img
              className="img-styled"
              variant="top"
              src={movieChosen.Poster}
            />
            <Card.Body>
              <Card.Title className="title-details">
                {movieChosen.Title}
              </Card.Title>
              <Card.Text className="text-dotted-ovf">
                {movieChosen.Plot}
              </Card.Text>
              <Badge>{movieChosen.imdbRating}</Badge>
              <ListGroup></ListGroup>
            </Card.Body>
          </Card>
          <ListGroup
            style={{ marginTop: "200px", marginLeft: "100px", width: "300px" }}
          >
            {comments !== null &&
              comments.map((comment) => (
                <ListGroup.Item>{comment.comment}</ListGroup.Item>
              ))}
          </ListGroup>
        </Row>
      </Container>
    )
  )
}

export default MovieDetails;