import React from "react";
import PropTypes from "prop-types";
import { RatingView } from "react-simple-star-rating";
import "./MovieCard.css";
const MovieCard = props => (
  <div className="movie-card">
    <div className="movie-card card">
      <img
        className="card-img-top"
        style={{ height: "250px" }}
        src={props.movie.imageUrl}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">{props.movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.movie.subtitle}
        </h6>
        <p className="text-justify" style={{ fontSize: "14px" }}>
          {props.movie.description}
        </p>
        <p className="text-justify">{props.movie.stars} </p>
      </div>
      <div className="card-footer">
        <RatingView ratingValue={props.movie.rating} /* Rating Props */ />
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  movie: {}
};

MovieCard.propTypes = {
  movie: PropTypes.object
};

export default MovieCard;
