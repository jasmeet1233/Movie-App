import React, { useEffect } from 'react'
import Movie from './Movie'; 
// import {getData} from './function'

const MoviesList = ({updateMovies, changeLoading, loading, movies}) => {
    const getData = async() => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await response.json();
        const filteredData = data.map((item) => item.show)
        const updatedData =  filteredData.map((item) => {
            if(item.image){
                return item
            } else {
                return {...item, image: {orignal: 'https://media.istockphoto.com/vectors/hand-drawn-movie-clapperboard-icon-film-set-clapper-for-cinema-board-vector-id1208814541?k=20&m=1208814541&s=612x612&w=0&h=BLLnSbhbASrM2JcXsmzTPaoK3aZrPfJC99kyod_DjKo='}}
            }})
        updateMovies(updatedData);
    }


    useEffect(() => {
        getData()
    },[])

    if(loading){
       return <h1 className = 'loading'>Loading...</h1>
    }

    return (
        <div className="flex-container">
            {
                movies.map((movie) => {
                return <Movie {...movie} key = {movie.id} movieData = {movies}/>
            })
            }
        </div>
    )
}

export default MoviesList
