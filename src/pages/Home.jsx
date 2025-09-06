import About from '../components/About';
import Hero from '../components/Hero';
import DrawerAppBar from '../components/NavBar'
import ProjectSection from '../components/Projects';
import Skills from '../components/Skill';
import Contact from '../components/contact';
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <DrawerAppBar /><br></br>
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home;