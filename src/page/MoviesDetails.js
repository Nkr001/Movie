import React from 'react'
import { useParams } from "react-router-dom";
import './style.css'
const firebase=require('firebase');


export default function MoviesDetails() {
const { gen,id} =useParams();
const [title,setTitle]=React.useState('')
const [body,setBody]=React.useState('')
const [url,seturl]=React.useState('')
const [genre,setGenere]=React.useState('')
const [rating,setRating]=React.useState('')
const [actor,setActors]=React.useState('')
const [meta,setMetascore]=React.useState('')
const [vote,setVotes]=React.useState('')
const [country,setCountry]=React.useState('')
const [relese,setReleased]=React.useState('')
const [runtime,setRuntime]=React.useState('')
const [dire,setDirector]=React.useState('')

const [lang,setLang]=React.useState('')

React.useEffect(() => { 
firebase.firestore().collection(gen)
        .onSnapshot(serverUpdate=>{
          const notes =serverUpdate.docs.map(_doc =>{
            const data =_doc.data();
            data['id']=_doc.id;
            return data;
          });
          setTitle({title :(notes.filter(x=>x.id=== id).map((x)=>(x.Title)).toString())})
          setBody({body:(notes.filter(x=>x.id=== id).map((x)=>(x.Plot)).toString())});
          seturl({url :(notes.filter(x=>x.id=== id).map((x)=>(x.Poster)).toString())})
          setRating({rating:(notes.filter(x=>x.id=== id).map((x)=>(x.imdbRating)).toString())})
          setGenere({genre:(notes.filter(x=>x.id=== id).map((x)=>(x.Genre)).toString())})
          setActors({actor:(notes.filter(x=>x.id=== id).map((x)=>(x.Actors)).toString())})
          setLang({lang:(notes.filter(x=>x.id=== id).map((x)=>(x.Language)).toString())})
          setMetascore({meta:(notes.filter(x=>x.id=== id).map((x)=>(x.Metascore)).toString())})
          setVotes({vote:(notes.filter(x=>x.id=== id).map((x)=>(x.imdbVotes)).toString())})
          setCountry({country:(notes.filter(x=>x.id=== id).map((x)=>(x.Country)).toString())})
          setReleased({relese:(notes.filter(x=>x.id=== id).map((x)=>(x.Released)).toString())})
          setRuntime({runtime:(notes.filter(x=>x.id=== id).map((x)=>(x.Runtime)).toString())})
          setDirector({dire:(notes.filter(x=>x.id=== id).map((x)=>(x.Actors)).toString())})
         
        });
},[]);

   
 

    
     
      return (
        <section className="single-product">
        <img src={url.url} alt={title.title} className="single-product-image" />
        <article>
          <h1>{title.title}</h1>
          <h2>Imdb~{rating.rating}</h2>
          <h3 className="h3">Genre <span>{genre.genre}</span></h3>
          <h3 className="h3">No. of Peoples Watched<span>{vote.vote}</span></h3>
          <h3 className="h3">Language ~<span>{lang.lang}</span></h3>
          <h3 className="h3">RunTime ~<span>{runtime.runtime}</span></h3>
          <h3 className="h3">Country ~ <span>{country.country}</span></h3>
          <h3 className="h3">Metascore ~<span>{meta.meta}</span></h3>
          <h3 className="h3">Released Date ~<span>{relese.relese}</span></h3>
          <h3 className="h3">Actors ~<span>{actor.actor}</span></h3>
          <h3 className="h3">Director ~<span>{dire.dire}</span></h3>
          
          <p>{body.body}</p>
          <button
            className="btn btn-primary btn-block"
            
          >
            Download Coming soon
          </button>
        </article>
      </section>
      )
     

}