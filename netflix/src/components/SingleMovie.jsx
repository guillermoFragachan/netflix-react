
import React from "react";
import Comments from "./Comments";





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