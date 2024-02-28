import { IMG_CDN, IMG_CDN2 } from "../assets/constans"


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-52 pr-1 rounded-md">
      <img src={posterPath ? `${IMG_CDN}${posterPath}` : `${IMG_CDN2}`} alt="Movie Card" />
    </div>
  )
}

export default MovieCard