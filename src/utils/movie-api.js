import axios from "axios";
import { API_KEY } from "../constants/urls";

export async function fetchSingleMovie(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id.movie_id}?api_key=${API_KEY}`)
}

