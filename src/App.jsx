import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CarouselComponent from './components/CarouselComponent'
import bellcurve0 from './assets/bellcurve0.jpeg'
import bellcurve1 from './assets/bellcurve1.png'
import bellcurve2 from './assets/bellcurve3.jpeg'
import bellcurve4 from './assets/bellcurve4.jpeg'
import bellcurve5 from './assets/bellcurve5.jpeg'
import bellcurve6 from './assets/bellcurve6.jpeg'
import bellcurve7 from './assets/bellcurve7.jpeg'
import bellcurve8 from './assets/bellcurve8.jpeg'
import bellcurve9 from './assets/bellcurve9.png'
import bellcurve10 from './assets/bellcurve10.png'
import What from './components/What'
import BuyNow from './components/BuyNow'
import Footer from './components/Footer'
import Faq from './components/Faq'

function App() {
  const images = [
    bellcurve0,
    bellcurve1,
    bellcurve2,
    bellcurve4,
    bellcurve5,
    bellcurve6,
    bellcurve7,
    bellcurve8,
    bellcurve9,
    bellcurve10,
  ]
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Header menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
      <div className="flex min-h-dvh flex-col">
        <Hero />
        <BuyNow />
        <CarouselComponent images={images} />
      </div>
      <What />
      <Faq />
      <Footer />
    </>
  )
}

export default App
