import React, { useState } from 'react'
import './MovieCard.css'

export default function MovieCard({ movie, deleteFn, toggleLike, toggleDisLike }) {

    const [isLiked, setIsLiked] = useState(false)
    const [isdisLiked, setIsDisLiked] = useState(false)

    return (
        <div className='movieCard'>
            <h1 className='mb-10'>{movie.title}</h1>
            <h3 className='mb-10'>{movie.category}</h3>
            <div className='mb-10 d-flex justify-around'>
                <span><i class="fas fa-thumbs-up"></i> {movie.likes}</span>
                <span><i class="fas fa-thumbs-down"></i>  {movie.dislikes}</span>
            </div>
            <div className='mb-10 d-flex justify-center'>
                <button onClick={() => {
                    toggleLike(movie.id, !isLiked)
                    setIsLiked(!isLiked)
                }}
                    className='p-5 mh'>
                    {'Like'}
                </button>
                <button onClick={() => {
                    toggleDisLike(movie.id, !isdisLiked)
                    setIsDisLiked(!isdisLiked)
                }}
                    className='p-5 mh'>
                    { 'Dislike'}
                </button>
                <button onClick={() => { deleteFn(movie.id) }}
                    className='p-5'>Delete</button>
            </div>
        </div>
    )
}
