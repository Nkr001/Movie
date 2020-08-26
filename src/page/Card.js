import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({id,title,url,rating,gen}) {
  return (
    <article className="product" key={id}>
    <div className="img-container">
      <img src={url} alt={title || "default title"} />
      <Link to={`movie/${gen}/${id}`} className="btn btn-primary product-link">
        Details
      </Link>
    </div>
    <div className="product-footer">
      <p className="product-title">{title || "default title"}</p>
      <p className="product-price">Imdb ~{rating}</p>
    </div>
  </article>
  )
}
