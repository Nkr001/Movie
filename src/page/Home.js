import React, { Component } from 'react'
import './style.css'
import Card from './Card'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                   <div className="Home">
                    <h2>Best Movies</h2>
                    <h4>Go For it</h4>
                   </div>
                  
                   <Card  className="card"/>
                   <Card  className="card" />
                   
            </React.Fragment>
              
            
        )
    }
}
