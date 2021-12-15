import React, { useState } from "react";
import "./MovieCard.css";

export default function MovieCard({
  movie,
  deleteFn,
  toggleLike,
  toggleDisLike,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isdisLiked, setIsDisLiked] = useState(false);

  return (
    <div className="movieCard">
      <div style={{ textAlign: "right" }}>
        <span
          onClick={() => {
            deleteFn(movie.id);
          }}
        >
          <i class="fa fa-trash"></i>
        </span>
      </div>
      <h1 className="mb-10 d-flex justify-center">{movie.title} </h1>
      <h3 className="mb-10">{movie.category}</h3>
      <div className="mb-10 d-flex justify-around">
        <span
          onClick={() => {
            toggleLike(movie.id, !isLiked);
            setIsLiked(!isLiked);
          }}
        >
          <i class="fas fa-thumbs-up"></i>{" "}
          {isLiked ? (
            <span style={{ color: "blue" }}>{movie.likes} </span>
          ) : (
            movie.likes
          )}
        </span>
        <span
          onClick={() => {
            toggleDisLike(movie.id, !isdisLiked);
            setIsDisLiked(!isdisLiked);
          }}
        >
          <i class="fas fa-thumbs-down"></i>{" "}
          {isdisLiked ? (
            <span style={{ color: "red" }}>{movie.dislikes} </span>
          ) : (
            movie.dislikes
          )}
        </span>
      </div>
    </div>
  );
}
