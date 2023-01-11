import React, { useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { db } from '../Firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalContext } from '../context/GlobalContext'

const SavedMovies = () => {
    const {user} = useAuthContext()
    const {getMovies,setGetMovies,slideLeft, slideRight} = useGlobalContext()

    useEffect(() =>{
        onSnapshot(
            doc(db, 'user', `${user?.email}`), (doc) => {
            setGetMovies(doc.data()?.savedMovies)
        }) 
    }, [user?.email])

    const movieRef = doc(db, 'user', `${user?.email}`)

    const deleteSavedMovie = async (id) =>{
        try{
            const result = getMovies.filter((movie) => movie.id !== id)
            await updateDoc(movieRef, {
                savedMovies:result
            })

        }catch (error){
            console.log(error)
        }
    }
    // console.log(movies)
    const movieElement = getMovies.map((movie) =>{
        const {id, title, img} = movie
        // console.log(title)
        return(
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer px-1'>
            <img className='w-full h-auto block rounded overflow-hidden' src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title}/>
            <div className='absolute top-0 left-0 w-full h-full opacity-0  hover:bg-black/80 hover:opacity-100 text-white transition duration-300'>
                <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{title}</p>
                <p onClick={()=>deleteSavedMovie(id)} className='absolute text-gray-300 top-3 right-4 text-xl'><AiOutlineClose/></p>
            </div>
        </div>
        )
    })
  return (
    <div>
        <h2 className=' text-white font-bold md:text-xl p-4 capitalize'>My shows</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} size={40} className='absolute bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 z-10 hidden group-hover:block left-0'/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide relative'>
                {movieElement}
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='absolute bg-white rounded-full  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'/>
        </div>
    </div>
  )
}

export default SavedMovies