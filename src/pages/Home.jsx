import Hero from '../components/Hero';
import DrawerAppBar from '../components/NavBar'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <DrawerAppBar /><br></br>
      <Hero />
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}

export default Home;