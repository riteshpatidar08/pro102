import React  , {useEffect} from 'react'
import Carousel from './Carousel'

function Homepage() {
   useEffect(()=>{
        document.title = "Home"
    },[])
  return (
    <div>
    <Carousel/>
    </div>
  )
}

export default Homepage
