import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useGlobalContext } from '../context/GlobalContext'


const SignIn = () => {
  const {email, password, setError, error, handleEmail, handlePassword} = useGlobalContext()
  const {signIn} = useAuthContext()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    try{
        await signIn(email, password)
        navigate('/')
    }catch (error){
        console.log(error)
        setError(error.message)
    }
}
 
  return (
    <div className='w-full h-screen'>
    <img className='block absolute w-full h-full object-cover'  src='https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/8109c085-70af-4519-98e5-3fe9827411eb/KE-en-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt=''/>
    <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 '>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-md'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='capitalize text-2xl font-semibold '>Sign In</h1>
                {error ? <p className='py-2 text-red-600'>{error}</p>: null}
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={handleEmail} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email' />
                    <input onChange={handlePassword} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password' />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold capitalize'>sign in</button>
                    <div className='flex justify-between items-center text-sm text-gray-500'>
                        <p className='capitalize'><input className='mr-2 cursor-pointer' type='checkbox'/>remember me</p>
                        <p className='capitalize cursor-pointer'>need help?</p> 
                    </div>
                    <p className='py-8'><span className='text-gray-500'>New to Netflix?</span>{' '}
                    <Link to='/signup'>
                    Sign Up
                    </Link>
                    </p>
                </form>
            </div>
        </div>

    </div>
</div>
  )
}

export default SignIn