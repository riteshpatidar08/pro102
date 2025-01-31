import React  , {useEffect} from 'react'
import Carousel from './Carousel'
import GridSection from './GridSection'
import ProductCard from './ProductCard'
function Homepage() {
   useEffect(()=>{
        document.title = "Home"
    },[])
  return (
    <div>
    <Carousel/>
    <GridSection/>
    <ProductCard/>
    </div>
  )
}

export default Homepage
