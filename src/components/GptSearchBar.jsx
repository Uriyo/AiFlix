import React from 'react'
import lang from '../assets/langCons'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang);
  return (
    <div className='pt-[15%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12 rounded-md'>
            <input 
                className='p-4 m-4 col-span-9 rounded-md' 
                type='text' 
                placeholder={lang[langKey].gptSearchPlaceholder}></input>
            <button className='py-2 px-4 col-span-3 m-4 bg-red-700 rounded-md text-white'>
                {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar