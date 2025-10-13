import {useState} from 'react'

const PromoDetail = ({image}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
    {!isLoaded && (
        <img className="w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2 animate-pulse bg-gray-300"></img>
      )}
    
    <img src={image} className={`w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2 ${isLoaded ? 'block': 'hidden'}`} onLoad={()=> setIsLoaded(true)}  alt="product slider" />
    </>
  )
}

export default PromoDetail