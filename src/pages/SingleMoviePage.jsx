import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

const SingleMoviePage = () => {
     const [singleMovie, setSingleMovie] = useState([]);
    const {id} = useParams();

    const getData = async (i) => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      const filteredData = data.map((item) => item.show);
      console.log(filteredData)
      const updatedData = filteredData.map((item) => {
        if (item.image) {
          return item;
        } else {
          return {
            ...item,
            image: {
              orignal:
                "https://media.istockphoto.com/vectors/hand-drawn-movie-clapperboard-icon-film-set-clapper-for-cinema-board-vector-id1208814541?k=20&m=1208814541&s=612x612&w=0&h=BLLnSbhbASrM2JcXsmzTPaoK3aZrPfJC99kyod_DjKo=",
            },
          };
        }
      });
      const singleMovieData = updatedData.filter(
        (item) => item.id === Number(i)
      );
      console.log(singleMovieData)
      setSingleMovie(singleMovieData);
    };

    useEffect(() => {
        getData(id);
    },[id])


     if(singleMovie.length === 0) return <></>

     const { image, name, summary, language } = singleMovie[0]
     console.log(image, name, summary,language )
    return (
      <>
        <div className="single-parent">
          <img src={image.original} className="singleflex-child1" />
          <div className="singleflex-child2">
            <h1>{name}</h1>
            <p className="language">Language: {language}</p>
            {ReactHtmlParser(summary)}
            <p className="home">
              <Link to="/">
              <button>Back Home</button>
            </Link>
            </p>
          </div>
        </div>
      </>
    );
}

export default SingleMoviePage;
