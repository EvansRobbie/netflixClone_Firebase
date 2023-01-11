import axios from 'axios'
import React ,{createContext, useState, useEffect, useContext} from 'react'
import requests from '../Requests'


const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    // Sign in
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] =  useState('')
//  set movies state
    const [movies, setMovies] = useState([])

    // savedmovies state
    const [getMovies, setGetMovies] = useState([])

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
        // fetch(requests.requestPopular)
        // .then(res => res.json())
        // .then(data => setMovies(data))
    },[])
    // console.log(movie)
    const truncate = (str, num) =>{
        if(str?.length > num){
            return str.slice(0, num) + '....'
        }else{
            return str
        }

    }
    // Saved movies slider
    const slideLeft = () =>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () =>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    // sign and signup email, passwords events
    const handleEmail = (e) =>{
      setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
      setPassword(e.target.value)
    }
  return (
    <GlobalContext.Provider value={{
        email,
        password,
        error,
        setError,
        handleEmail,
        handlePassword,
        movies,
        truncate,
        getMovies,
        setGetMovies,
        slideLeft,
        slideRight

    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}

export default GlobalContextProvider