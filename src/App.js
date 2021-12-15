import './App.css';
import { movies } from './data/index.js'
import { useState, useEffect } from 'react'
import MovieCard from './view/MovieCard';

function App() {
  const [data, setData] = useState(movies)
  const [categories, setCategories] = useState([])
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setCategories(Array.from(new Set(data.map(el => el.category))))
  }, [data])

  const deleteFn = (id) => {
    let a
    a = data.filter(el => el.id !== id)
    setData(a)
  }

  const toggleLike = (id, like) => {
    let a
    a = data.map(el => {
      if (el.id === id) { return like ? { ...el, likes: el.likes + 1 } : { ...el, likes: el.likes - 1 } }
      else { return el }
    })
    setData(a)
  }

  const toggleDisLike = (id, disLike) => {
    let a
    a = data.map(el => {
      if (el.id === id) { return disLike ? { ...el, dislikes: el.dislikes + 1 } : { ...el, dislikes: el.dislikes - 1 } }
      else { return el }
    })
    setData(a)
  }

  const categorySearch = (e) => {
    document.querySelectorAll('.btn-category').forEach(el => el.style.backgroundColor = "")
    e.target.style.backgroundColor = "#d9d7db"
    setFilteredData(data.filter(el => el.category.toLowerCase() === e.target.value.toLowerCase()))
    setIsFilterOn(true)
  }

  const clearFilter = () => {
    document.querySelectorAll('.btn-category').forEach(el => el.style.backgroundColor = "")
    setIsFilterOn(false)
  }

  return (
    <div className="App">
      <section className='space'>
        <div className='container'>
          <div className='filter d-flex justify-around'>
            <div>
              {
                categories.map(el => <button
                  key={el}
                  onClick={(e) => { categorySearch(e) }}
                  value={el}
                  className='btn-category'
                >{el}</button>)
              }
            </div>
            <div className=''>
              <button onClick={clearFilter}>Clear Filter</button>
            </div>
          </div>
        </div>
      </section>
      <section className='space'>
        <div className='container'>
          <div className='d-grid movieCard-grid'>
            {!isFilterOn ? data.map(el => <MovieCard
              key={el.id}
              movie={el}
              deleteFn={deleteFn}
              toggleLike={toggleLike}
              toggleDisLike={toggleDisLike}
            ></MovieCard>) :
              filteredData.map(el => <MovieCard
                key={el.id}
                movie={el}
                deleteFn={deleteFn}
                toggleLike={toggleLike}
                toggleDisLike={toggleDisLike}
              ></MovieCard>)
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
