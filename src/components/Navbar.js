import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = useAuthContext()
  const navigate = useNavigate()
  // console.log(user.email)
  const handleLogout = async () =>{
    try{
      await logOut()
      navigate('/')
    }catch (error){
      console.log(error)
    }
  }
  return (
    <div className=' text-white flex items-center justify-between mx-auto p-4 z-[10] absolute w-full'>
      <Link to='/'>
        <h1 className='uppercase text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
      </Link>
        {user?.email ? <div className='flex gap-x-6'>
          <Link to='/account'>
            <button className='capitalize pr-4 py-2'>account</button>
          </Link>
          
            <button onClick={handleLogout} className='capitalize bg-red-600 py-2 px-6 rounded cursor-pointer text-white'>
              log out
              </button>
        </div>:<div className='flex gap-x-6'>
          <Link to='/login'>
            <button className='capitalize pr-4 py-2'>Sign in</button>
          </Link>
          <Link to='/signup'>
            <button className='capitalize bg-red-600 py-2 px-6 rounded cursor-pointer text-white'>Sign up</button>
          </Link>
        </div>}
    </div>
  )
}

export default Navbar