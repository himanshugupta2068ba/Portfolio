import About from '../components/About';
import Hero from '../components/Hero';
import DrawerAppBar from '../components/NavBar'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <DrawerAppBar /><br></br>
      <Hero />
      <About />
    </div>
  )
}

export default Home;