import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React, {  useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useAuthContext} from '../context/AuthContext'
import { db } from '../Firebase'

const Movie = ({movie}) => {
    const {id, title, backdrop_path} = movie
    const [like, setLike] = useState(false)
    const [save, setSaved] = useState(false)
    // console.log(movies)
    const {user} = useAuthContext()
    // grab the specific user email
    const movieID = doc(db, 'user', `${user?.email}`)

   


    // console.log(movies)
    const savedMovie = async () =>{
        if(user?.email){
            setLike(!like)
            setSaved(!save)
            await updateDoc(movieID, {
                savedMovies: arrayUnion({
                    id: id,
                    title: title,
                    img: backdrop_path

                })
            })
        }else{
            alert('Please Login to save a movie')
        }
    }
  return (
    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer px-1'>
    <img className='w-full h-auto block rounded overflow-hidden' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}/>
    <div className='absolute top-0 left-0 w-full h-full opacity-0  hover:bg-black/80 hover:opacity-100 text-white transition duration-300'>
        <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{title}</p>
        <p onClick={savedMovie} className=''>{like ? <FaHeart className='absolute top-2 left-2 text-sm md:text-xl text-gray-300'/> : <FaRegHeart className='absolute top-2 left-2 text-sm md:text-xl text-gray-300'/>}</p>
    </div>
</div>
  )
}

export default Movie