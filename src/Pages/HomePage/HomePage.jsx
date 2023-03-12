import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
//import { AboutMe_URL, PROFILE_URL, SKILLS_URL } from '../../constants/urls'
import Styles from './HomePage.module.css'
import { useMovies } from '../../hooks/useMovies'
import MovieCard from '../../components/MovieCard/MovieCard'


export function HomePage() {
    const [page, setPage] = useState(1)
    const { getCommonMovies, getSoonMovies, Loading, movies } = useMovies()
    const [soon, setSoon] = useState(true)
  

    const API_URL = "https://api.themoviedb.org/3"
    const API_KEY = "b31f4c0464d55846ae657ecfc7b9ef53"

    //const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    //const [movie, setMovie] = useState({ title: "Loading Movies"})

    const fetchMovies = async(searchKey) =>{
        const type = searchKey ? "search" : "discover"
        const {data: {results},
    } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
            api_key: API_KEY,
            query: searchKey,
        },
    });

    //setMovies(results)
    //setMovie(results[0])
    }

    useEffect(() => {
      { soon ? getSoonMovies(page) : getCommonMovies(page) }
    }, [soon, page])

    console.log(movies)

    const searchMovies = (e)=>{
      e.preventDefault();
      fetchMovies(searchKey)
    }

    useEffect(()=>{
      fetchMovies();
    },[])

  return (
    <>
      <div className={Styles.bienvenida}>
        <h1>Bienvenido a Cartelera Caracas!</h1>
        <h3>Todas tus películas a tu disposición</h3>
      </div>

      <div class="cajabuscar">
        <form method="get" id="buscarform" onSubmit={searchMovies}>
          <fieldset>
            <input type="text" id="s" value="" placeholder="Buscar Pelicula" onChange={(e)=> setSearchKey(e.target.value)} />
            <button className='button2'>Buscar</button>
            <i class="search"></i>
          </fieldset>
        </form>
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
