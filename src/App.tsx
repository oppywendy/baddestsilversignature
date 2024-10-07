import Gallery from './component/Gallery'
import Explore from './component/Explore'
import Training from './component/Training'
import Header from './component/Header'
import Hero from './component/Hero'
import Service from './component/Service'
import About from './component/About'
import Footer from './component/Footer'
import Choose from './component/Choose'



const App = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <Service/>
    <Choose/>
    <Gallery/>
    <Explore/>
    <Training/>
    <About/>
    <Footer/>
    </div>
  )
}

export default App