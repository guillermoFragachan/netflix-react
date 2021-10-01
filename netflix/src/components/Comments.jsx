
import React from "react";

import FormControl from 'react-bootstrap/FormControl'


class Comments extends React.Component{
    state={
        comments: [],
        addedComment : {
            comment: '',
            rate: '3',
            elementId: ''

        },

    }

    fetchComments = async (query) =>{
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+query, {
                method: 'GET',
                headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzMwMDE1NzksImV4cCI6MTYzNDIxMTE3OX0.WGqdgb0uXW7-MCUC94FOKrTEainfaSnnNBv6Le-F7uA",
            'Content-Type': 'application/json',
        }
            }
            )
            if(response.ok){
                let data = await response.json()
                this.setState({
                    comments: data
                })
                
               
            }else{
                console.log('no')
            }

        }
        catch{
            console.log('error')

        }

    }


    
    sendComment = async ( comment)=>{
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body:JSON.stringify(comment),
                headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzMwMDE1NzksImV4cCI6MTYzNDIxMTE3OX0.WGqdgb0uXW7-MCUC94FOKrTEainfaSnnNBv6Le-F7uA",
            'Content-Type': 'application/json',
        }
            }
            )
            if(response.ok){
                this.fetchComments(this.props.query)
                
               
            }else{
                console.log('nope')
            }

        }
        catch{
            console.log('error')

        }
        

    }

    componentDidMount = () => {

        //this.sendComment()
        //this.fetchComments(this.props.query)
        this.fetchComments('tt1201607')
        
    }

    render() {
        return(
            <>
              
                {
                    this.state.comments.length > 0 &&
                    this.state.comments.map(e=>{
                        return <p>{e.comment}</p>
                      
                    })
                    //return <SingleComment element={e._id} key={e._id} comment=/>
                    
                }
              
                
                

                <FormControl
      placeholder="comment"
      onClick={(event)=>{
            event.target.value.length > 3 &&
            console.log(this.state.comments)

            this.setState({
                addedComment : {
                    comment: event.target.value,
                    rate: '3',
                    elementId: 'tt1201607'
                }

              

            })
            this.sendComment(this.state.addedComment) 

           
      }}
      
     
    />
           

            </>
            
        )
    }

}



export default Comments