import { bgURL } from "../assets/constans"
import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"


const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img src={bgURL}
        alt="bg"
        />
      </div>
       <GptSearchBar/>
       <GptSuggestions/>
    </div>
  )
}

export default GptSearch