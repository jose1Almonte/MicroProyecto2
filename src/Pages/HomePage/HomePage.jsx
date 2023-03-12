import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AboutMe_URL, PROFILE_URL, SKILLS_URL } from '../../constants/urls'
import Styles from './HomePage.module.css'
import { useMovies } from '../../hooks/useMovies'
import MovieCard from '../../components/MovieCard/MovieCard'


export function HomePage() {
  const [page, setPage] = useState(1)
  const { getCommonMovies, getSoonMovies, Loading, movies } = useMovies()
  const [soon, setSoon] = useState(true)
  

  useEffect(() => {
    { soon ? getSoonMovies(page) : getCommonMovies(page) }
  }, [soon, page])

  console.log(movies)

  return (
    <>
      <div className={Styles.bienvenida}>
        <h1>Bienvenido a Cartelera Caracas!</h1>
        <h3>Todas tus películas a tu disposición</h3>
      </div>
      <div className={Styles.buttons}>
        <div className={Styles.button} onClick={() => { setSoon(false); setPage(1)}}>Películas Comunes</div>
        <div className={Styles.button} onClick={() => { setSoon(true); setPage(1)}}>Películas Próximas</div>
      </div>
      <div className={Styles.listas}>

        <div className={Styles.title}>
          <h1>{soon ? "Películas por estrenar" : "Películas comunes"}</h1>
        </div>
        <div className={Styles.lista}>

          <div className={Styles.pasarPag}>
            <div className={Styles.flecha} onClick={() => { page == 1 ? setPage(1) : setPage(page-1) }}><img src="images/I.jpg" alt="izquierda" /></div>
          </div>

          {!Loading ?
            <div className={Styles.galeria}>
              {movies.map((movie) => (
                <MovieCard Movie={movie}></MovieCard>
              ))}
            </div>
            :
            <div className={Styles.loading}>
              <h1>Loading...</h1>
            </div>}
          
          <div className={Styles.flecha} onClick={() => { page == 1000 ? setPage(1) : setPage(page + 1) }}><img src="images/D.jpg" alt="derecha" /></div>
          
        </div>
      </div>
    
    </>
    
  )
}
