
import React from "react";
import Comments from "./Comments";



let obj = {
    Title: "Dirty Harry",
    Year: "1971",
    imdbID: "tt0066999",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMzdhMTM2YTItOWU2YS00MTM0LTgyNDYtMDM1OWM3NzkzNTM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}


//change object to this.props.key


class SingleMovie extends React.Component{

    state={
        clicked: false,

    }

    handleToggle = () => {
        this.setState({ clicked: true });
      }

    render() {
        return(
            <>
            { console.log(this.state.clicked)}
            <div onClick={this.handleToggle} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 px-1">
             <img className="picture rounded img-size" src={this.props.img}/>
             {
                 this.state.clicked  &&
                  <Comments  id={this.props.id}/>
             }
             
            </div>
            
            
            
            </>
        )

        }


}



export default SingleMovie