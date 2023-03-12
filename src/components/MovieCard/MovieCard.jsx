import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MovieCard.module.css"

export default function MovieCard(Movie) {
    //console.log(Movie)
    const { id, poster_path, title, popularity, original_language } = Movie.Movie

    return (
        <div className={styles.caja}>
            <div className={styles.tarjeta}>
                <div className={styles.imagen}>
                    <Link to={`movie/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster de ${title}`} /></Link>
                </div>
                <div className={styles.info}>
                    <Link to={`movie/${id}`} className={styles.title}><h1>{title}</h1></Link>
                    <h2>{`Popularity: ${popularity}`}</h2>
                    <h2>{`Idioma original: ${original_language}`}</h2>
                </div>
            </div>
        </div>
    )
}
