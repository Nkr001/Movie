import React from 'react'
import Horror from './Horror'
import Romance from './Romance'
import Thriller from './Thriller'
import Comedy from './Comedy'
import './style.css'


export default function Movies() {
  return (
 
    
<>
     
    <section className="section">
    <h2 className="section-title">Thriller</h2>
    <div className="products-center">
      <Thriller />
    </div>
    
    <h2 className="section-title">Horror</h2>
    <div className="products-center">
      <Horror />
    </div>
    <h2 className="section-title">Romantic</h2>
    <div className="products-center">
      <Romance />
    </div>
    <h2 className="section-title">Comedy</h2>
    <div className="products-center">
      <Comedy />
    </div>
    </section>
   </>
     
 

     
     
    
    

      
  
    
    
   
  )
}



