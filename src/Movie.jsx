import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ name, genres, image, id }) => {
    console.log(typeof(id))
    const genre = genres.join(', ')
    console.log(genre)
  return (
    <div className="flex-child">
      <img src= {image.original} />
      <h2>{name}</h2>
        <p className="genre">{genre}</p>
      <Link to = {`/${id}`}><button>Know more</button></Link>
    </div>
  );
};

Movie.propTypes = {
    image: PropTypes.object.isRequired
}


export default Movie;
