import React from 'react'
import Styles from './DetailsCard.module.css'

function DetailsCard({ Movie }) {
    const { title, poster_path, genres, original_language, budget, overview, popularity, production_companies, release_date, status } = Movie
    
    console.log(movie)
    
    return (
        <div className={Styles.base}>
            <div className={Styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={Styles.info}>
                <div className={Styles.poster}>
                    <img src={poster_path} alt="" />
                </div>
                <div className={Styles.text}>
                    <div className={Styles.data}>
                        <div className={Styles.genres}>
                            {genres.map((genre) => (
                                <h3>- {genre.name} -</h3>
                            ))}
                        </div>
                        <h3>Lenguaje original: {original_language}</h3>
                        <h3>Presupuesto: {budget}</h3>
                        <h3>Descripcion: {overview}</h3>
                        <h3>Popularidad: {popularity}</h3>
                        <div>
                            <h3>Compañias: </h3>
                            {production_companies.map((company) => (
                                <h3>- { company.name }</h3>
                            ))}
                        </div>
                        <h3>Fecha de lanzamiento: {release_date}</h3>
                        <h3>Estado: {status} </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard