import React, { Component } from 'react'
import Card from './Card'

const firebase=require('firebase')
export default class Horror extends Component {

constructor(){
    super();
    this.state={
        body:[]
    }
}


    render() {
  
    
        const {body} =this.state;
    
        return (
            <React.Fragment>
           
             
             
           {body.map((ele)=>( <Card key ={ele.id} id={ele.id} body={ele.Plot} 
           gen="horror" url={ele.Poster} title={ele.Title} rating={ele.imdbRating} />))}
             
        </React.Fragment>
        )

    }
    componentDidMount=()=>{
        firebase.firestore().collection('dark')
        .onSnapshot(serverUpdate=>{
          const notes =serverUpdate.docs.map(_doc =>{
            const data =_doc.data();
            data['id']=_doc.id;
            return data;
          });
          console.log(notes)
          this.setState({ body : notes });
        });
     }
    
    }
