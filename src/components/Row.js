import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import axios from 'axios'

const Row = ({title, fetchUrl, rowID}) => {
    const [movies, setMovies] = useState([])
    // const {id:m_id,title:m_title,backdrop_path} = movies
   
    // const likeToggle = () =>{
    //     setLike(prevLike => !prevLike)
    // }
    useEffect(() =>{
        axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
        })
        // fetch(fetchUrl)
        // .then(res => res.json())
        // .then(data => setMovies(data.results))
    }, [fetchUrl])
    const slideLeft = () =>{
        const slider = document.getElementById('slider'+ rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () =>{
        const slider = document.getElementById('slider'+ rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const movieElement = movies.map((movie, id) =>{
        return(
            <Movie key={id} movie = {movie}/>
        )
    })
  return (
    <div>
        <h2 className=' text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} size={40} className='absolute bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 z-10 hidden group-hover:block left-0'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide relative'>
                {movieElement}
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='absolute bg-white rounded-full  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'/>
        </div>
    </div>
  )
}

export default Row