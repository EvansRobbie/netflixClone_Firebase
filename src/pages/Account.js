import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover'  src='https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/8109c085-70af-4519-98e5-3fe9827411eb/KE-en-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/'/>
      <div className='fixed bg-black/60 top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='capitalize text-3xl md:text-5xl'>my shows</h1>
      </div>
      </div>
      <SavedMovies />
    </>
  )
}

export default Account