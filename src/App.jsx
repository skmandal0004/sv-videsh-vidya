import { useState } from 'react'
import NavbarComponents from './Components/NavbarComponents'
import HeroComponents from './Components/Home/HeroComponents'
import SignComponents from './Components/Home/SignComponents'
import WhyComponents from './Components/Home/WhyComponents'
import ReasonComponents from './Components/Home/ReasonComponents'
import StudyComponents from './Components/Home/StudyComponents'
import TrainingComponents from './Components/Home/TrainingComponents'
import YoutubeComponents from './Components/Home/YoutubeComponents'



function App() {
  

  return (
    <>
     <NavbarComponents/> 
     <HeroComponents/>
     <SignComponents/>
     <WhyComponents/>
     <ReasonComponents/>
     <StudyComponents/>
     <TrainingComponents/>
     <YoutubeComponents/>
    </>
  )
}

export default App
