import { useState } from "react";
import { fetchSingleMovie } from "../utils/movie-api";

export function useMovies() {
    const [ movie, setMovie ] = useState(null)
    const [Loading, setLoading] = useState(false)
    


    const getSingleMovie = async (movieId) => {
        setLoading(true)
        const { data } = await fetchSingleMovie(movieId)
        setMovie(data)
        setLoading(false)
        
    };

    return {
        movie,
        getSingleMovie,
        Loading,
    };
}