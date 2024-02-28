import { useRef } from 'react'
import lang from '../assets/langCons'
import { useSelector } from 'react-redux'
import openai from '../assets/openai';

const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang);
    const serachTxt=useRef();

    const searchMovie=async(movie)=>{
        const data = await fetch()
    }

    const handleSearchClick=async()=>{
        console.log(serachTxt.current.value);
        //make api call to gpt API to get the results

        const gptQuery="Act as a movie Recommendation system and suggest some movies for the query"+ serachTxt.current.value + "only give me names of 5 movies,comma seperated. like the example result given ahead Example result : Gadar, Don, Sholay,Golmaal, Koi Mil Gaya";

        const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });
            console.log(chatCompletion.choices);

            if(!chatCompletion){
                //TODo Write Error
            }
            //it become array of movies
            const gptMovies=chatCompletion.choices?.[0]?.message?.content.split(",");

            //for each movie search in api

            

            

    }
  return (
    <div className='pt-[15%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12 rounded-md'
            onSubmit={(e)=>e.preventDefault()}
        >
            <input
                ref={serachTxt} 
                className='p-4 m-4 col-span-9 rounded-md' 
                type='text' 
                placeholder={lang[langKey].gptSearchPlaceholder}></input>
            <button 
                className='py-2 px-4 col-span-3 m-4 bg-red-700 rounded-md text-white'
                onClick={handleSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar