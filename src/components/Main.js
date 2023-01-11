import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
const Main = () => {
    const {movies, truncate} = useGlobalContext()
    const movie = movies[Math.floor(Math.random() * movies.length)]

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='border rounded bg-gray-300 text-black border-gray-300 py-2 px-4'>Play</button>
                    <button className='border rounded text-white ml-4 border-gray-300 py-2 px-4'>Watch later</button>
                </div>
                <p className='text-gray-300 text-sm'>Released : {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(movie?.overview, 150)}</p>
            </div>
        </div>

    </div>
  )
}

export default Main